---
index : 7
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
title : Compose中的阶段
---

Compose 会通过几个不同的“阶段”来渲染帧。如果我们观察一下 Android View 系统，就会发现它有 3 个主要阶段：测量、布局和绘制。Compose 和它非常相似，但开头多了一个叫做“组合”的重要阶段。

## 说明

由于翻译很多地方存在概念难以讲明的问题，且翻译后，其实也会无形中给学习先进的Android技术造成语言壁垒，所以，在之后的文章里，如果是官网中文翻译不是很好的文章，则采用**英文为主，中文解释为辅**的方式进行组织编写

## The three phases of frame

- Compose has three main phases:
  - **Composition**（组合）: *What* UI to show. Compose runs composable functions and creates a description of your UI.
  - **Layout**（布局）: *Where* to place UI. This phase consists of two steps: measurement and placement. Layout elements measure and place themselves and any child elements in 2D coordinates, for each node in the layout tree.
  - **Drawing**（绘制）: *How* it renders. UI elements draw into a Canvas, usually a device screen.

- 下面给出几个 phases 的执行顺序图：Allowing data to flow in one direction from composition to layout to drawing to produce a frame 

  ![phases-3-phases](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/phases-3-phases.svg)

- Principle: **Compose performs only the minimum amount of work required to update the UI.** 

## State reads

State is commonly created using `mutableStateOf()` and then accessed through one of two ways: by directly accessing the `value` property, or alternatively by using a Kotlin property delegate. For the purposes of this guide, a "state read" refers to either of those equivalent access methods.

- `mutableStateOf`:

  ```kotlin
  // State read without property delegate.
  val paddingState: MutableState<Dp> = remember { mutableStateOf(8.dp) }
  Text(
      text = "Hello",
      modifier = Modifier.padding(paddingState.value)
  )
  ```

- `property delegate`:

  ```kotlin
  // State read with property delegate.
  var padding: Dp by remember { mutableStateOf(8.dp) }
  Text(
      text = "Hello",
      modifier = Modifier.padding(padding)
  )
  ```

  Under the hood of the [property delegate](https://kotlinlang.org/docs/delegated-properties.html), "getter" and "setter" functions are used to access and update the State’s `value`. These getter and setter functions are only invoked when you reference the property as a value, and not when it is created, which is why the two ways above are equivalent.

Notice: Each block of code that can be re-executed when a read state changes is a *restart scope*. Compose keeps track of state value changes and restart scopes in different phases.

## Phased state reads

As mentioned above, there are three main phases in Compose, and Compose tracks what state is read within each of them. **This allows Compose to notify only the specific phases that need to perform work for each affected element of your UI.**

下面介绍每个 phase 在 read state 时都发生了什么

### Phase 1: Composition

State reads within a `@Composable` function or lambda block affect composition and potentially the subsequent phases. When the state value changes, the recomposer schedules reruns of all the composable functions which read that state value.

Depending on the result of composition, Compose UI runs the layout and drawing phases. It might skip these phases if the content remains the same and the size and the layout won't change.

```kotlin
var padding by remember { mutableStateOf(8.dp) }
Text(
    text = "Hello",
    // The `padding` state is read in the composition phase
    // when the modifier is constructed.
    // Changes in `padding` will invoke recomposition.
    modifier = Modifier.padding(padding)
)
```

**Note:** Where a state instance is created and stored has little bearing on the phases, it only matters when and where a state value is **read**.

### Phase 2: Layout

- The layout phase consists of two steps: *measurement* and *placement*.
  - **measurement**: The measurement step runs the measure lambda passed to the `Layout` composable, the `MeasureScope.measure` method of the `LayoutModifier` interface, and so on.
  - **placement**: The placement step runs the placement block of the `layout` function, the lambda block of `Modifier.offset { … }`, and so on.

- State reads during each of these steps affect the layout and potentially the drawing phase. When the state value changes, Compose UI schedules the layout phase. It also runs the drawing phase if size or position has changed.
- To be more precise, the measurement step and the placement step have separate restart scopes, meaning that state reads in the placement step don't re-invoke the measurement step before that. However, these two steps are often intertwined, so a state read in the placement step can affect other restart scopes that belong to the measurement step.

```kotlin
var offsetX by remember { mutableStateOf(8.dp) }
Text(
    text = "Hello",
    modifier = Modifier.offset {
        // The `offsetX` state is read in the placement step
        // of the layout phase when the offset is calculated.
        // Changes in `offsetX` restart the layout.
        IntOffset(offsetX.roundToPx(), 0)
    }
)
```

### Phase 3: Drawing

State reads during drawing code affect the drawing phase. Common examples include `Canvas()`, `Modifier.drawBehind`, and `Modifier.drawWithContent`. When the state value changes, Compose UI runs only the draw phase.

```kotlin
var color by remember { mutableStateOf(Color.Red) }
Canvas(modifier = modifier) {
    // The `color` state is read in the drawing phase
    // when the canvas is rendered.
    // Changes in `color` restart the drawing.
    drawRect(color)
}
```

下面给出三个阶段分别进行的操作概览图：

![phases-state-read-draw](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/phases-state-read-draw.svg)

## Optimizing state reads

- 引入：Let’s take a look at an example. Here we have an `Image()` which uses the offset modifier to offset its final layout position, resulting in a parallax effect as the user scrolls.

  ```kotlin
  Box {
      val listState = rememberLazyListState()
  
      Image(
          // Non-optimal implementation!
          Modifier.offset(
              with(LocalDensity.current) {
                  // State read of firstVisibleItemScrollOffset in composition
                  (listState.firstVisibleItemScrollOffset / 2).toDp()
              }
          )
      )
  
      LazyColumn(state = listState)
  }
  ```

  This code works, but results in nonoptimal performance. As written, the code reads the value of the `firstVisibleItemScrollOffset` state and passes it to the [`Modifier.offset(offset: Dp)`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#(androidx.compose.ui.Modifier).offset(androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp)) function. As the user scrolls the `firstVisibleItemScrollOffset` value will change. As we know, Compose tracks any state reads so that it can restart (re-invoke) the reading code, which in our example is the content of the `Box`.

  This is an example of state being read within the **composition** phase. This is not necessarily a bad thing at all, and in fact is the basis of recomposition, allowing data changes to emit new UI.

  In this example though it is nonoptimal, because every scroll event will result in the entire composable content being reevaluated, and then also measured, laid out and finally drawn. We’re triggering the Compose phase on every scroll even though **what** we are showing hasn’t changed, only **where** it is shown. We can optimize our state read to only re-trigger the layout phase.

  There is another version of the offset modifier available: [`Modifier.offset(offset: Density.() -> IntOffset)`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#(androidx.compose.ui.Modifier).offset(kotlin.Function1)).

  This version takes a lambda parameter, where the resulting offset is returned by the lambda block. Let’s update our code to use it:

  ```kotlin
  Box {
      val listState = rememberLazyListState()
  
      Image(
          Modifier.offset {
              // State read of firstVisibleItemScrollOffset in Layout
              IntOffset(x = 0, y = listState.firstVisibleItemScrollOffset / 2)
          }
      )
  
      LazyColumn(state = listState)
  }
  ```

  So why is this more performant? The lambda block we provide to the modifier is invoked during the **layout** phase (specifically, during the layout phase's placement step), meaning that our `firstVisibleItemScrollOffset` state is no longer read during composition. Because Compose tracks when state is read, this change means that if the `firstVisibleItemScrollOffset` value changes, Compose only has to restart the layout and drawing phases.（即只需要重新进行布局、绘制阶段即可，从而省略组合阶段）

## Recomposition loop (cyclic phase dependency)

- 引入：Earlier we mentioned that the phases of Compose are always invoked in the same order, and that there is no way to go backwards while in the same frame. However, that doesn’t prohibit apps getting into composition loops across *different* frames. Consider this example:

  ```kotlin
  Box {
      var imageHeightPx by remember { mutableStateOf(0) }
  
      Image(
          painter = painterResource(R.drawable.rectangle),
          contentDescription = "I'm above the text",
          modifier = Modifier
              .fillMaxWidth()
              .onSizeChanged { size ->
                  // Don't do this
                  imageHeightPx = size.height
              }
      )
  
      Text(
          text = "I'm below the image",
          modifier = Modifier.padding(
              top = with(LocalDensity.current) { imageHeightPx.toDp() }
          )
      )
  }
  ```

  Here we have (badly) implemented a vertical column, with the image at the top, and then the text below it. We’re using `Modifier.onSizeChanged()` to know the resolved size of the image, and then using `Modifier.padding()` on the text to shift it down. The unnatural conversion from `Px` back to `Dp` already indicates that the code has some issue.

  The issue with this example is that we don’t arrive at the "final" layout within a single frame. The code relies on multiple frames happening, which performs unnecessary work, and results in UI jumping around on screen for the user.

  Let’s step through each frame to see what is happening:

  At the composition phase of the first frame, `imageHeightPx` has a value of 0, and the text is provided with `Modifier.padding(top = 0)`. Then, the layout phase follows, and the callback for the `onSizeChanged` modifier is called. This is when the `imageHeightPx` is updated to the actual height of the image. Compose schedules recomposition for the next frame. At the drawing phase, the text is rendered with the padding of 0 since the value change is not reflected yet.

  Compose then starts the second frame scheduled by the value change of `imageHeightPx`. The state is read in the Box content block, and it is invoked in the composition phase. This time, the text is provided with a padding matching the image height. At the layout phase, the code does set the value of `imageHeightPx` again, but no recomposition is scheduled since the value remains the same.

  In the end, we get the desired padding on the text, but it is nonoptimal to spend an extra frame to pass the padding value back to a different phase and will result in producing a frame with overlapping content.

  ![phases-recomp-loop](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/phases-recomp-loop.svg)

- This example may seem contrived, but be careful of this general pattern:

  - `Modifier.onSizeChanged()`, `onGloballyPositioned()`, or some other layout operations

  - Update some state

  - Use that state as input to a layout modifier (`padding()`,`height()`, or similar)

  - Potentially repeat

- Principle: The general principle here is to have a single source of truth for multiple UI elements that should be measured and placed with regards to one another. Using a proper layout primitive or creating a custom layout means that the minimal shared parent serves as the source of truth that can coordinate the relation between multiple elements. 

## 参考资料

- 绝大多数来自[官方文档 - 英文原版](https://developer.android.com/jetpack/compose/phases)