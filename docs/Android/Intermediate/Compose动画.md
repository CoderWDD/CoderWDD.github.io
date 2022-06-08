---
index : 10
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
  - View
title : Compose动画
---

## 可见性动画

- 在以往的 Android 开发中，如果我们需要控制某个控件的可见性，则往往需要从其 alpha、transition、scale等配合来实现，但在 Compose 中，则可以用其提供的 `AnimatedVisibility()`可组合项来实现

- 下面给出其简单的使用示例：

  ```kotlin
  @Preview
  @Composable
  fun AnimationTest(){
      val visible = remember { mutableStateOf(true) }
      Column (modifier = Modifier.size(360.dp).padding(10.dp)) {
          Button(onClick = {visible.value = !visible.value}){
              Text("可见性动画")
          }
          AnimatedVisibility(visible = visible.value){
              Text(
                  text = "三生三世十里桃花",
                  modifier = Modifier.size(150.dp
                  )
              )
          }
      }
  }
  ```

  来看看效果：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/VeryCapture_20220608161718.gif)

  可以看到，通过点击按钮，实现了 `Text` 的渐入渐出效果。

- 来看看`AnimatedVisibility()`方法的定义：

  ```kotlin
  @Composable
  fun ColumnScope.AnimatedVisibility(
      visible: Boolean,	// 是否可见
      modifier: Modifier = Modifier,
      enter: EnterTransition = fadeIn() + expandVertically(),	// 显示的动画，默认为渐入
      exit: ExitTransition = fadeOut() + shrinkVertically(),	// 退出的动画，默认为渐出
      label: String = "AnimatedVisibility",
      content: @Composable AnimatedVisibilityScope.() -> Unit
  ) {
      val transition = updateTransition(visible, label)
      AnimatedEnterExitImpl(transition, { it }, modifier, enter, exit, content)
  }
  ```

  可以看到，只有参数 enter 和 exit 的类型是之前没遇到过的，分别为 `EnterTransition` 和 `ExitTransition`

- 接下来就看看 `EnterTransition` 的源码：

  ```kotlin
  @Immutable
  sealed class EnterTransition {
      internal abstract val data: TransitionData
  
      // 组合不同的输入动画
      @Stable
      operator fun plus(enter: EnterTransition): EnterTransition {
          return EnterTransitionImpl(
              TransitionData(
                  fade = data.fade ?: enter.data.fade,
                  slide = data.slide ?: enter.data.slide,
                  changeSize = data.changeSize ?: enter.data.changeSize,
                  scale = data.scale ?: enter.data.scale
              )
          )
      }
  
      override fun equals(other: Any?): Boolean {
          return other is EnterTransition && other.data == data
      }
  
      override fun hashCode(): Int = data.hashCode()
  
      companion object {
          val None: EnterTransition = EnterTransitionImpl(TransitionData())
      }
  }
  ```

  由源码可以看出，这是一个**密封类**，且其重载了 `+` 运算符，用于将不同的动画组合到一起

- 再来看看 `ExitTransition` 的源码：

  ```kotlin
  @Immutable
  sealed class ExitTransition {
      internal abstract val data: TransitionData
  
      // 组合不同的输入动画
      @Stable
      operator fun plus(exit: ExitTransition): ExitTransition {
          return ExitTransitionImpl(
              TransitionData(
                  fade = data.fade ?: exit.data.fade,
                  slide = data.slide ?: exit.data.slide,
                  changeSize = data.changeSize ?: exit.data.changeSize,
                  scale = data.scale ?: exit.data.scale
              )
          )
      }
  
      override fun equals(other: Any?): Boolean {
          return other is ExitTransition && other.data == data
      }
  
      override fun hashCode(): Int = data.hashCode()
  
      companion object {
          val None: ExitTransition = ExitTransitionImpl(TransitionData())
      }
  }
  
  ```

  与 `EnterTransition` 类似，`ExitTransition` 也是一个**密封类**，也重载了 `+` 运算符，也是用于将不同的动画组合到一起

- 既然是动画，那就肯定不止一种动画了，下面就来看看 `EnterTransition` 和 `ExitTransition` 都分别支持哪些动画，如果想看更具体的定义，可以到 `EnterExitTransition.kt` 文件中查看，具体的动画效果，可以参考[官方示例](https://developer.android.google.cn/jetpack/compose/animation?authuser=0#entertransition)，值得注意的是，这些动画，都是可以随意组合的：
  - `EnterTransition`:
    - fade: `fadeIn`
    - scale: `scaleIn`
    - slide: `slideIn`, `slideInHorizontally`, `slideInVertically`
    - expand: `expandIn`, `expandHorizontally`, `expandVertically`
  - `ExitTransition`:
    - fade: `fadeOut`
    - scale: `scaleOut`
    - slide: `slideOut`, `slideOutHorizontally`, `slideOutVertically`
    - shrink: `shrinkOut`, `shrinkHorizontally`,`shrinkVertically`

- 为子项添加进入和退出动画效果

  `AnimatedVisibility`（直接或间接子项）中的内容可以使用 [`animateEnterExit`](https://developer.android.google.cn/reference/kotlin/androidx/compose/animation/AnimatedVisibilityScope?authuser=0#(androidx.compose.ui.Modifier).animateEnterExit(androidx.compose.animation.EnterTransition,androidx.compose.animation.ExitTransition,kotlin.String)) 修饰符为每个子项指定不同的动画行为。其中每个子项的视觉效果均由 `AnimatedVisibility` 可组合项中指定的动画与子项自己的进入和退出动画构成。

  ```kotlin
  @Preview
  @Composable
  fun AnimationTest(){
      val visible = remember { true }
      AnimatedVisibility(
          visible = visible,
          enter = fadeIn(),
          exit = fadeOut()
      ) {
          // Fade in/out the background and the foreground.
          Box(Modifier.fillMaxSize().background(Color.DarkGray)) {
              Box(
                  Modifier
                      .align(Alignment.Center)
                      .animateEnterExit(
                          // Slide in/out the inner box.
                          enter = slideInVertically(),
                          exit = slideOutVertically()
                      )
                      .sizeIn(minWidth = 256.dp, minHeight = 64.dp)
                      .background(Color.Red)
              ) {
                  // Content of the notification…
              }
          }
      }
  }
  ```

## 布局大小动画

- 引入：如果我们希望在一个布局大小发生改变时，可以有一个动画作为过渡，此时就需要我们的布局大小动画了，其作用是，当布局的大小发生改变时，能有一个过渡的动画效果：

  - 先来看看没有过渡动画的例子：

    ```kotlin
    @Preview
    @Composable
    fun AnimationTest(){
        val expand = remember { mutableStateOf(false) }
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(10.dp)
        ) {
            Text(
                text = "默认情况下，初始内容淡出，然后目标内容淡入（此行为称为淡出后淡入）。" +
                        "您可以为 transitionSpec 参数指定 ContentTransform 对象，以自" +
                        "定义此动画行为。您可以使用 with infix 函数来组合 EnterTransition 与 " +
                        "ExitTransition，以创建 ContentTransform。您可以将 SizeTransform " +
                        "应用于 ContentTransform，方法是使用 using infix 函数附加该修饰符。",
                modifier = Modifier.padding(10.dp),
                //.animateContentSize(), // 关键属性，给内容变化添加动画
                maxLines = if (expand.value) Int.MAX_VALUE else 1 // 根据是否展开设置最大行数
            )
    
            Button(onClick = { expand.value = !expand.value }) {
                Text(if (expand.value) "收起" else "全文")
            }
        }
    }
    ```

    看看效果：

    ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/VeryCapture_20220608174713.gif)

  - 再来看看添加了布局大小动画的效果：

    ```kotlin
    @Preview
    @Composable
    fun AnimationTest(){
        val expand = remember { mutableStateOf(false) }
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(10.dp)
        ) {
            Text(
                text = "默认情况下，初始内容淡出，然后目标内容淡入（此行为称为淡出后淡入）。" +
                        "您可以为 transitionSpec 参数指定 ContentTransform 对象，以自" +
                        "定义此动画行为。您可以使用 with infix 函数来组合 EnterTransition 与 " +
                        "ExitTransition，以创建 ContentTransform。您可以将 SizeTransform " +
                        "应用于 ContentTransform，方法是使用 using infix 函数附加该修饰符。",
                modifier = Modifier.padding(10.dp)
                .animateContentSize(), // 关键属性，给内容变化添加动画
                maxLines = if (expand.value) Int.MAX_VALUE else 1 // 根据是否展开设置最大行数
            )
    
            Button(onClick = { expand.value = !expand.value }) {
                Text(if (expand.value) "收起" else "全文")
            }
        }
    }
    ```

    看看效果：

    ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/VeryCapture_20220608175032.gif)

- 下面看看 `animateContentSize` 的定义：

  ```kotlin
  fun Modifier.animateContentSize(
      animationSpec: FiniteAnimationSpec<IntSize> = spring(),
      finishedListener: ((initialValue: IntSize, targetValue: IntSize) -> Unit)? = null
  ): Modifier = composed(
      inspectorInfo = debugInspectorInfo {
          name = "animateContentSize"
          properties["animationSpec"] = animationSpec
          properties["finishedListener"] = finishedListener
      }
  ) {
      // TODO: Listener could be a fun interface after 1.4
      val scope = rememberCoroutineScope()
      val animModifier = remember(scope) {
          SizeAnimationModifier(animationSpec, scope)
      }
      animModifier.listener = finishedListener
      this.clipToBounds().then(animModifier)
  }
  ```

  可以看到 `animateContentSize` 其实是 `Modifier` 的一个扩展方法，其中参数 `animationSpec` 是表示用于动画尺寸大小变化的动画；而 `finishedListener` 则是一个监听器，即当布局大小更改动画完成后进行回调，同时将初始值（即开始时的布局大小）和目标值（即最终的布局大小）也传过来

- 再看到上面 `animateContentSize` 的定义，其中 `animationSpec` 的默认值为 `spring()`，而 `animationSpec` 又是用于布局大小变化的动画，因此，很有必要来看看 `spring()` 的源码：

  ```kotlin
  @Stable
  fun <T> spring(
      dampingRatio: Float = Spring.DampingRatioNoBouncy,	// 阻尼系数，值越小，弹力越大，弹簧效果越明显，默认无弹力
      stiffness: Float = Spring.StiffnessMedium,	// 衰减系数，值越大，衰减的越快，也就是折叠的速度越快，默认衰减系数为"中"
      visibilityThreshold: T? = null	// 可见性阀值，即决定其到哪里会停止动画的分割线
  ): SpringSpec<T> =
      SpringSpec(dampingRatio, stiffness, visibilityThreshold)
  ```

  所以，我们可以对 `spring()` 进行一些定制，以实现改变其动画过程中的参数

## 布局切换动画

- 引入：当布局发生切换时，如果要通过动画过渡应该怎么办？这时候就可以用到 Compose 中的布局切换动画 `Crossfade`，从而实现淡入淡出不同布局的效果

- `Crossfade`的方法定义：

  ```kotlin
  @Composable
  fun <T> Crossfade(
      targetState: T,	// 表示目标布局状态的键，可以根据这个来判断切换到哪个屏幕
      modifier: Modifier = Modifier,
      animationSpec: FiniteAnimationSpec<Float> = tween(),	//  动画效果，tween()创建了一个配置给定的持续时间、延迟和缓和曲线的补间动画
      content: @Composable (T) -> Unit
  ){...}
  ```

- 使用实例：可以参考[掘金 - Compose中的简单动画之布局切换动画](https://juejin.cn/post/7040359742207688718#heading-2)

## 过渡到低级别动画

没错，上面提及的动画，都是 Compose 中封装好的高级别动画，而这些动画其实都是从低级别动画的基础上构建而来的，本着学习的态度，怎么能只会用别人封装的东西呢，下面就来看看 Compose 中的低级别动画，这在以后自定义动画中非常有用。

## 属性动画

- 大背景：Compose 是声明式的，不仅仅是布局，连动画都是声明式的，同样是状态驱动UI来刷新

- `animate*AsState` 函数是最简单的 API，可将即时值变化呈现为动画值。它由 `Animatable` 提供支持，后者是一种基于协程的 API，用于为单个值添加动画效果。`updateTransition` 可创建过渡对象，用于管理多个动画值，并且根据状态变化运行这些值。`rememberInfiniteTransition` 与其类似，不过，它会创建一个无限过渡对象，以管理多个无限期运行的动画。所有这些 API 都是可组合项（`Animatable` 除外），这意味着这些动画可以在非组合期间创建。

- 值得注意的是：所有这些 API 都基于更基础的 `Animation` API。虽然大多数应用不会直接与 `Animation` 互动，但 `Animation` 的某些自定义功能可以通过更高级别的 API 获得。如需详细了解 `AnimationVector` 和 `AnimationSpec`，请参阅[自定义动画](https://developer.android.google.cn/jetpack/compose/animation?authuser=0#customize-animations)。下面给出各个动画之间的依赖关系图：

  ![animation-low-level](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/animation-low-level.svg)

- 以 `animatDpAsState` 为例，先看其定义：

  ```kotlin
  @Composable
  fun animateDpAsState(
      targetValue: Dp,	// 动画的目标值
      animationSpec: AnimationSpec<Dp> = dpDefaultSpring,		// 动画相关配置
      finishedListener: ((Dp) -> Unit)? = null	// 将最后的Dp值回调
  ): State<Dp> { ... }
  ```

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun AnimationTest() {
      var isSmall by remember { mutableStateOf(true) }
      val size: Dp by animateDpAsState(if (isSmall) 40.dp else 100.dp){
          Log.e("myTag", "AnimationTest: $it" )
      }
  
      Column (modifier = Modifier.padding(16.dp)) {
          Button(
              onClick = { isSmall = !isSmall},
              modifier = Modifier.padding(vertical = 16.dp)
          ){
              Text("Change Size Dp")
          }
          Box(modifier = Modifier.size(size).background(Color.Red))
      }
  }
  ```

  从上面的示例中，可以看到，我们无须创建任何动画类的实例，也不必处理中断。系统会在后台调用点创建并记录一个动画对象（即 Animatable 实例），并将第一个目标值设为初始值。此后，只要我们为此可组合项提供不同的目标值，系统就会自动开始向该值播放动画。如果已有动画在播放，系统将从其当前值（和速度）开始向目标值播放动画。在播放动画期间，这个可组合项会重组，并返回已更新的每帧动画值。

## 帧动画

- 帧动画：是一种动画形式，也就是在时间轴上逐帧绘制不同的内容，使其连续播放形成动画

- 引语：Compose 中的帧动画使用 `Animatable` 来实现，`Animatable` 是一个值容器，它可以在通过 `animateTo` 更改值时为值添加动画效果。该 API 支持 `animate*AsState` 的实现。它可确保一致的**连续性和互斥性**，这意味着**值变化始终是连续的，并且会取消任何正在播放的动画。**

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun AnimationTest() {
      val ok = remember { mutableStateOf(false) }
      val color = remember {
          Animatable(
              initialValue = Color.Red,
          )
      }
      // Animatable 的许多功能（包括 animateTo）以挂起函数的形式提供。这意味着，它们需要封装在适当的协程作用域内
      LaunchedEffect(ok){
          color.animateTo(if (ok.value) Color.Blue else Color.Green)
      }
      Box(modifier = Modifier.size(360.dp).background(color.value))
  }
  ```

  预览效果如下：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/VeryCapture_20220608224617.gif)

  可以看到，在启动预览时，界面由红色变为了绿色

- 注意：
  - 这种动画实现支持上一部分提到的 `animate*AsState` API。与 `animate*AsState` 相比，使用 `Animatable` 可以直接对以下几个方面进行更精细的控制。首先，`Animatable` 的初始值可以与第一个目标值不同。例如，上面的代码示例首先显示一个灰色框，然后立即开始通过动画呈现为绿色或红色。其次，`Animatable` 对内容值提供更多操作（即 `snapTo` 和 `animateDecay`）。`snapTo` 可立即将当前值设为目标值。如果动画本身不是唯一的可信来源，且必须与其他状态（如触摸事件）同步，该函数就非常有用。`animateDecay` 用于启动播放从给定速度变慢的动画。
  - `Animatable` 为 `Float` 和 `Color` 提供开箱即用的支持，不过，通过提供 `TwoWayConverter`，可使用任何数据类型。如需了解详情，请参阅 [AnimationVector](https://developer.android.google.cn/jetpack/compose/animation?authuser=0#animationvector)。

## 多动画同步

- 引入：上面的动画都是针对某一个具体动画的，但是在开发中，通常有几个动画组合起来配合，并保持同步，以此实现特定的动画效果的场景，则此时可以用 Compose 提供的 `updateTransition` 可组合项来实现该需求

- 注意：

  - `Transition` 可管理一个或多个动画作为其子项，并在多个状态之间同时运行这些动画。这里的状态可以是任何数据类型，在很多情况下，您可以使用自定义 `enum` 类型来确保类型安全，实例如下：

    ```kotlin
    enum class BoxState {
        Collapsed,
        Expanded
    }
    ```

  - `updateTransition` 可创建并记住 `Transition` 的实例，并更新其状态。

    ```kotlin
    var currentState by remember { mutableStateOf(BoxState.Collapsed) }
    val transition = updateTransition(currentState)
    ```

  - 然后，您可以使用某个 `animate*` 扩展函数来定义此过渡效果中的子动画。为每个状态指定目标值。这些 `animate*` 函数会返回一个动画值，在动画播放过程中，当使用 `updateTransition` 更新过渡状态时，该值将逐帧更新。

    ```kotlin
    val rect by transition.animateRect { state ->
        when (state) {
            BoxState.Collapsed -> Rect(0f, 0f, 100f, 100f)
            BoxState.Expanded -> Rect(100f, 100f, 300f, 300f)
        }
    }
    val borderWidth by transition.animateDp { state ->
        when (state) {
            BoxState.Collapsed -> 1.dp
            BoxState.Expanded -> 0.dp
        }
    }
    ```

  - 您也可以传递 `transitionSpec` 参数，为过渡状态变化的每个组合指定不同的 `AnimationSpec`。如需了解详情，请参阅 [AnimationSpec](https://developer.android.google.cn/jetpack/compose/animation?authuser=0#animationspec)。

    ```kotlin
    val color by transition.animateColor(
        transitionSpec = {
            when {
                BoxState.Expanded isTransitioningTo BoxState.Collapsed ->
                    spring(stiffness = 50f)
                else ->
                    tween(durationMillis = 500)
            }
        }
    ) { state ->
        when (state) {
            BoxState.Collapsed -> MaterialTheme.colors.primary
            BoxState.Expanded -> MaterialTheme.colors.background
        }
    }
    ```

  - 过渡到目标状态后，`Transition.currentState` 将与 `Transition.targetState` 相同。这可以用作指示是否已完成过渡的信号。

    有时，我们会希望初始状态与第一个目标状态不同。我们可以通过结合使用 `updateTransition` 和 `MutableTransitionState` 来实现这一点。例如，它允许我们在代码进入组合阶段后立即开始播放动画。

    ```kotlin
    // Start in collapsed state and immediately animate to expanded
    var currentState = remember { MutableTransitionState(BoxState.Collapsed) }
    currentState.targetState = BoxState.Expanded
    val transition = updateTransition(currentState)
    // ...
    ```

  - 对于涉及多个可组合函数的更复杂的过渡，可使用 [`createChildTransition`](https://developer.android.google.cn/reference/kotlin/androidx/compose/animation/core/Transition?authuser=0#(androidx.compose.animation.core.Transition).createChildTransition(kotlin.String,kotlin.Function1)) 来创建子过渡。此方法对于在复杂的可组合项中分离多个子组件之间的关注点非常有用。父过渡将会知道子过渡中的所有动画值。

    ```kotlin
    enum class DialerState { DialerMinimized, NumberPad }
    
    @Composable
    fun DialerButton(isVisibleTransition: Transition<Boolean>) {
        // `isVisibleTransition` spares the need for the content to know
        // about other DialerStates. Instead, the content can focus on
        // animating the state change between visible and not visible.
    }
    
    @Composable
    fun NumberPad(isVisibleTransition: Transition<Boolean>) {
        // `isVisibleTransition` spares the need for the content to know
        // about other DialerStates. Instead, the content can focus on
        // animating the state change between visible and not visible.
    }
    
    @Composable
    fun Dialer(dialerState: DialerState) {
        val transition = updateTransition(dialerState)
        Box {
            // Creates separate child transitions of Boolean type for NumberPad
            // and DialerButton for any content animation between visible and
            // not visible
            NumberPad(
                transition.createChildTransition {
                    it == DialerState.NumberPad
                }
            )
            DialerButton(
                transition.createChildTransition {
                    it == DialerState.DialerMinimized
                }
            )
        }
    }
    ```

### 将 AnimatedVisibility 与 AnimatedContent 配合使用：

[`AnimatedVisibility`](https://developer.android.google.cn/reference/kotlin/androidx/compose/animation/package-summary?authuser=0#(androidx.compose.animation.core.Transition).AnimatedVisibility(kotlin.Function1,androidx.compose.ui.Modifier,androidx.compose.animation.EnterTransition,androidx.compose.animation.ExitTransition,kotlin.Function1)) 和 [`AnimatedContent`](https://developer.android.google.cn/reference/kotlin/androidx/compose/animation/package-summary?authuser=0#(androidx.compose.animation.core.Transition).AnimatedContent(androidx.compose.ui.Modifier,kotlin.Function1,androidx.compose.ui.Alignment,kotlin.Function2)) 可用作 `Transition` 的扩展函数。`Transition.AnimatedVisibility` 和 `Transition.AnimatedContent` 的 `targetState` 源自 `Transition`，会在 `Transition` 的 `targetState` 发生变化时视需要触发进入/退出过渡。这些扩展函数允许将原本位于 `AnimatedVisibility` 或 `AnimatedContent` 内的所有 enter/exit/sizeTransform 动画提升到 `Transition` 中。借助这些扩展函数，可以从外部观察 `AnimatedVisibility`/`AnimatedContent` 的状态变化。此版本的 `AnimatedVisibility` 接受一个 lambda，它将父过渡的目标状态转换为布尔值，而不是接受布尔值 `visible` 参数。

```kotlin
var selected by remember { mutableStateOf(false) }
// Animates changes when `selected` is changed.
val transition = updateTransition(selected)
val borderColor by transition.animateColor { isSelected ->
    if (isSelected) Color.Magenta else Color.White
}
val elevation by transition.animateDp { isSelected ->
    if (isSelected) 10.dp else 2.dp
}
Surface(
    onClick = { selected = !selected },
    shape = RoundedCornerShape(8.dp),
    border = BorderStroke(2.dp, borderColor),
    elevation = elevation
) {
    Column(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
        Text(text = "Hello, world!")
        // AnimatedVisibility as a part of the transition.
        transition.AnimatedVisibility(
            visible = { targetSelected -> targetSelected },
            enter = expandVertically(),
            exit = shrinkVertically()
        ) {
            Text(text = "It is fine today.")
        }
        // AnimatedContent as a part of the transition.
        transition.AnimatedContent { targetState ->
            if (targetState) {
                Text(text = "Selected")
            } else {
                Icon(imageVector = Icons.Default.Phone, contentDescription = "Phone")
            }
        }
    }
}
```

### 封装 Transition 并使其可重复使用：

- 对于简单的用例，在与界面相同的可组合项中定义过渡动画是一种非常有效的选择方案。但是，在处理具有大量动画值的复杂组件时，您可能会希望将动画实现与可组合界面分开。

  为此，您可以创建一个类来保存所有动画值，同时创建一个“update”函数来返回该类的实例。过渡实现可提取到新的独立函数中。当您需要集中处理动画逻辑或使复杂动画可重复使用时，这种模式很有用。

  ```kotlin
  enum class BoxState { Collapsed, Expanded }
  
  @Composable
  fun AnimatingBox(boxState: BoxState) {
      val transitionData = updateTransitionData(boxState)
      // UI tree
      Box(
          modifier = Modifier
              .background(transitionData.color)
              .size(transitionData.size)
      )
  }
  
  // Holds the animation values.
  private class TransitionData(
      color: State<Color>,
      size: State<Dp>
  ) {
      val color by color
      val size by size
  }
  
  // Create a Transition and return its animation values.
  @Composable
  private fun updateTransitionData(boxState: BoxState): TransitionData {
      val transition = updateTransition(boxState)
      val color = transition.animateColor { state ->
          when (state) {
              BoxState.Collapsed -> Color.Gray
              BoxState.Expanded -> Color.Red
          }
      }
      val size = transition.animateDp { state ->
          when (state) {
              BoxState.Collapsed -> 64.dp
              BoxState.Expanded -> 128.dp
          }
      }
      return remember(transition) { TransitionData(color, size) }
  }
  ```

### 工具支持

Android Studio 支持在 [Animation Preview](https://developer.android.google.cn/jetpack/compose/tooling?authuser=0#animations) 中检查过渡效果。

- 逐帧预览过渡效果
- 检查过渡效果中所有动画的值
- 预览任何初始状态与目标状态之间的过渡

启动 Animation Preview 后，您会看到“Animations”窗格，并可以在其中运行预览中包含的任何过渡效果。过渡效果及其每个动画值均标有默认名称。您可以通过在 `updateTransition` 和 `animate*` 函数中指定 `label` 参数来自定义标签。

![Animation Preview 面板](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/animation-preview-overview.png)

## 多动画重复

- 引入：如果需要让动画重复播放，直到某个时机再停止，如网络加载时重复播放一个动画，加载完毕停止播放动画，则可以用 Compose 中构建重复动画的方法 `InfiniteTransition `
- 值得注意的是：`InfiniteTransition` 可以像 `Transition` 一样保存一个或多个子动画，但是，这些动画一进入组合阶段就开始运行，除非被移除，否则不会停止。

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun AnimationTest() {
      val infiniteTransition = rememberInfiniteTransition()
      val color by infiniteTransition.animateColor(
          initialValue = Color.Red,
          targetValue = Color.Green,
          animationSpec = infiniteRepeatable(
              animation = tween(1000, easing = LinearEasing),
              repeatMode = RepeatMode.Reverse
          )
      )
      Box(Modifier.fillMaxSize().background(color))
  }
  ```

  从上面的例子可以看出，在 Compose 中创建 `InfiniteTransition` 实例需要使用 `rememberInfiniteTransition`，通过`animateColor`、`animatedFloat`或`animatedValue`来添加子动画，然后设置 `infiniteRepeatable` 指定动画规范。

  效果如下：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/VeryCapture_20220608230751.gif)

## TargetBasedAnimation

`TargetBasedAnimation` 是我们目前看到的最低级别的动画 API。其他 API 可满足大多数用例的需要，但使用 `TargetBasedAnimation` 可以直接让您自己控制动画的播放时间。在下面的示例中，`TargetAnimation` 的播放时间将根据 `withFrameNanos` 提供的帧时间手动控制。

```kotlin
val anim = remember {
    TargetBasedAnimation(
        animationSpec = tween(200),
        typeConverter = Float.VectorConverter,
        initialValue = 200f,
        targetValue = 1000f
    )
}
var playTime by remember { mutableStateOf(0L) }

LaunchedEffect(anim) {
    val startTime = withFrameNanos { it }

    do {
        playTime = withFrameNanos { it } - startTime
        val animationValue = anim.getValueFromNanos(playTime)
    } while (someCustomCondition())
}
```

## 自定义动画

### 动画规格----AnimationSpec

- 作用：用来存储动画规格，包括要进行动画处理的数据类型、将数据转换为动画后将使用的动画配置。

- 注意：`AnimationSpec`是一个接口，因此，我们可以使用不同类型的 `AnimationSpec` 来创建不同类型的动画。

- Compose 为我们实现的一下常用的动画规格：

  - 基于物理特性的动画----spring：

    - 定义：

      ```kotlin
      @Stable
      fun <T> spring(
          dampingRatio: Float = Spring.DampingRatioNoBouncy,	// 阻尼系数，值越小，弹力越大，弹簧效果越明显，默认无弹力
          stiffness: Float = Spring.StiffnessMedium,	// 衰减系数，值越大，衰减的越快，也就是折叠的速度越快，默认衰减系数为"中"
          visibilityThreshold: T? = null	// 可见性阀值，即决定其到哪里会停止动画的分割线
      ): SpringSpec<T> =
          SpringSpec(dampingRatio, stiffness, visibilityThreshold)
      ```

      其实前面已经有看过这个代码了，这里只是为了方便查看，再粘贴一遍而已。

    - `spring` 可在起始值和结束值之间创建基于物理特性的动画。它接受 2 个参数：`dampingRatio` 和 `stiffness`。

      - `dampingRatio` 定义弹簧的弹性。默认值为 `Spring.DampingRatioNoBouncy`。

        ![展示不同阻尼系数的行为的动画图片](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/animation-spring.gif)

      - `stiffness` 定义弹簧应向结束值移动的速度。默认值为 `Spring.StiffnessMedium`。

    - 使用实例：

      ```kotlin
      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = spring(
              dampingRatio = Spring.DampingRatioHighBouncy,
              stiffness = Spring.StiffnessMedium
          )
      )
      ```

      相比基于时长的 `AnimationSpec` 类型，`spring` 可以更流畅地处理中断，因为它可以在目标值在动画中变化时保证速度的连续性。

  - 渐变动画----tween：

    - 作用：用来创建使用给定的持续时间、延迟以及缓和曲线配置的 tween 规范

    - 定义：

      ```kotlin
      @Stable
      fun <T> tween(
          durationMillis: Int = DefaultDurationMillis,	// 在指定的时间内使用缓和曲线在起始值和结束值之间添加动画效果
          delayMillis: Int = 0,	// 表示推迟动画播放的开始时间
          easing: Easing = FastOutSlowInEasing	// 用于在开始和结束之间进行插值的缓动曲线，具体可看 Easing 的源码
      ): TweenSpec<T> = TweenSpec(durationMillis, delayMillis, easing)
      ```

    - 使用实例：

      ```kotlin
      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = tween(
              durationMillis = 300,
              delayMillis = 50,
              easing = LinearOutSlowInEasing
          )
      )
      ```

  - 帧动画----keyframes：

    - 作用：根据在动画时长内的不同时间戳中指定的快照值添加动画效果。

    - 值得注意的是：在任何给定时间，动画值都将插值到两个关键帧值之间。对于其中每个关键帧，您都可以指定 Easing 来确定插值曲线。

    - 定义：

      ```kotlin
      @Stable
      fun <T> keyframes(
          init: KeyframesSpec.KeyframesSpecConfig<T>.() -> Unit	// 用于动画初始化
      ): KeyframesSpec<T> {
          return KeyframesSpec(KeyframesSpec.KeyframesSpecConfig<T>().apply(init))
      }
      ```

    - 使用实例：

      ```kotlin
      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = keyframes {
              durationMillis = 375
              0.0f at 0 with LinearOutSlowInEasing // for 0-15 ms
              0.2f at 15 with FastOutLinearInEasing // for 15-75 ms
              0.4f at 75 // ms
              0.4f at 225 // ms
          }
      )
      ```

  - 重复有限动画----repeatable：

    - 作用：反复运行基于时长的动画（例如 `tween` 或 `keyframes`），直至达到指定的迭代计数。

    - 定义：

      ```kotlin
      @Stable
      fun <T> repeatable(
          iterations: Int,	// 动画的重复次数
          animation: DurationBasedAnimationSpec<T>,	// 将要重复的动画
          repeatMode: RepeatMode = RepeatMode.Restart,	// 指定动画是从开始还是从结尾开始重复播放
          initialStartOffset: StartOffset = StartOffset(0)	
      ): RepeatableSpec<T> =
          RepeatableSpec(iterations, animation, repeatMode, initialStartOffset)
      ```

    - 使用实例：

      ```kotlin
      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = repeatable(
              iterations = 3,
              animation = tween(durationMillis = 300),
              repeatMode = RepeatMode.Reverse
          )
      )
      ```

  - 重复无限动画----infiniteRepeatable：

    - 作用：无限次重复播放动画

    - 定义：参数含义与 **重复有限动画----repeatable**相同

      ```kotlin
      @Stable
      fun <T> infiniteRepeatable(
          animation: DurationBasedAnimationSpec<T>,
          repeatMode: RepeatMode = RepeatMode.Restart,
          initialStartOffset: StartOffset = StartOffset(0)
      ): InfiniteRepeatableSpec<T> =
          InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset)
      ```

    - 使用实例：

      ```kotlin
      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = infiniteRepeatable(
              animation = tween(durationMillis = 300),
              repeatMode = RepeatMode.Reverse
          )
      )
      ```

  - 提前结束动画----snap：

    - 作用：提前结束动画的播放

    - 值得注意的是：`snap` 是特殊的 `AnimationSpec`，它会立即将值切换到结束值。您可以指定 `delayMillis` 来延迟动画播放的开始时间。

    - 定义：

      ```kotlin
      @Stable
      fun <T> snap(delayMillis: Int = 0) = SnapSpec<T>(delayMillis)
      ```

    - 使用实例：

      ```kotlin
      val value by animateFloatAsState(
          targetValue = 1f,
          animationSpec = snap(delayMillis = 50)
      )
      ```

## 矢量动画----AnimationVector

- 引入：大多数 Compose 动画 API 都支持将 `Float`、`Color`、`Dp` 以及其他基本数据类型作为开箱即用的动画值，但有时您需要为其他数据类型（包括您的自定义类型）添加动画效果。而事实上，在动画播放期间，任何动画值都表示为 `AnimationVector`。所以，问题转换为如何将其他数据类型转换为 `AnimationVector`即可。至于方法也很简单，就是使用相应的 `TwoWayConverter` 即可将值转换为 `AnimationVector`，反之亦然，这样一来，核心动画系统就可以统一对其进行处理。

- 常规转换举例：

  - `Int` 表示为包含单个浮点值的 `AnimationVector1D`。用于 `Int` 的 `TwoWayConverter` 如下所示：

    ```kotlin
    val IntToVector: TwoWayConverter<Int, AnimationVector1D> =
        TwoWayConverter({ AnimationVector1D(it.toFloat()) }, { it.value.toInt() })
    ```

  - `Color` 实际上是 red、green、blue 和 alpha 这 4 个值的集合，因此，`Color` 可转换为包含 4 个浮点值的 `AnimationVector4D`。通过这种方式，动画中使用的每种数据类型都可以根据其维度转换为 `AnimationVector1D`、`AnimationVector2D`、`AnimationVector3D` 或 `AnimationVector4D`。这样可为对象的不同组件单独添加动画效果，且每个组件都有自己的速度轨迹。您可以使用 `Color.VectorConverter`、`Dp.VectorConverter` 等访问针对基本数据类型的内置转换器。

- 自定义转换：

  - 如需支持作为动画值的新数据类型，您可以创建自己的 `TwoWayConverter` 并将其提供给 API。例如，您可以使用 `animateValueAsState` 为自定义数据类型添加动画效果，如下所示：

  ```kotlin
  data class MySize(val width: Dp, val height: Dp)
  
  @Composable
  fun MyAnimation(targetSize: MySize) {
      val animSize: MySize by animateValueAsState<MySize, AnimationVector2D>(
          targetSize,
          TwoWayConverter(
              convertToVector = { size: MySize ->
                  // Extract a float value from each of the `Dp` fields.
                  AnimationVector2D(size.width.value, size.height.value)
              },
              convertFromVector = { vector: AnimationVector2D ->
                  MySize(vector.v1.dp, vector.v2.dp)
              }
          )
      )
  }
  ```

  首先定义了一个数据类 `MySize`，它有两个参数：width 和 height。由于 `MySize` 有两个参数，所以可以转换为包含两个浮点值的 `AnimationVector2D`，这样就为 `MySize` 独立添加了动画效果。

## 如何选择合适的动画

- 下面的图表可以帮助您确定要使用哪种 API 来实现您的动画效果。

  - 如果您要为布局中的内容变化添加动画效果：
    - 如果您要为出现和消失添加动画效果：
      - 使用 `AnimatedVisibility`。
    - 根据状态交换内容：
      - 如果您要为内容添加淡入淡出效果：
        - 使用 `Crossfade`。
      - 否则使用 `AnimatedContent`。
    - 否则使用 `Modifier.animateContentSize`。
  - 如果动画效果基于状态：
    - 如果在组合期间呈现动画效果：
      - 如果动画效果无限循环：
        - 使用 `rememberInfiniteTransition`。
      - 如果您要同时为多个值添加动画效果：
        - 使用 `updateTransition`。
      - 否则使用 `animate*AsState`。
  - 如果您要对动画播放时间进行精细控制：
    - 使用 `Animation`。
  - 如果动画是唯一可信来源：
    - 使用 `Animatable`。
  - 否则，请使用 `AnimationState` 或 `animate`。

  ![animation-flowchart](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/animation-flowchart.svg)

## 参考/推荐资料

[官方文档](https://developer.android.google.cn/jetpack/compose/animation?authuser=0#overview)

[掘金-Compose中的简单动画](https://juejin.cn/post/7040359742207688718)

[CSDN - Compose 从入门到入门](https://blog.csdn.net/qq_17766199/article/details/124936353)
