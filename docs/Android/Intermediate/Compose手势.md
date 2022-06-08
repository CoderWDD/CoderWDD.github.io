---
index : 11
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
  - View
title : Compose手势
---

## 点击、拖拽事件

### 简单的点击事件----clickable

- Compose 中的简单点击事件，可以通过 Modifier 进行设置，下面给出一个简单的示例：

  ```kotlin
  @Preview
  @Composable
  fun GesturesTest() {
      val count = remember { mutableStateOf(0) }
      Text("${count.value}", modifier = Modifier.size(100.dp).background(Color.Red).clickable { 
          count.value += 2;
      })
  }
  ```

### 更灵活地控制事件----pointerInput

- 相比于在 Android View 中需要重写 onTouch 方法来具体控制点击事件， 而在 Compose 中，只需要通过 Modifier 的扩展函数 pointerInput 就能轻松完成

- 下面来看看 `pointerInput` 的定义：

  ```kotlin
  fun Modifier.pointerInput(
      key1: Any?,
      block: suspend PointerInputScope.() -> Unit
  )...
  ```

  可以看到， `pointerInput` 的第二个参数类型为 PointerInputScope ，下面来看看其定义：

  ```kotlin
  interface PointerInputScope : Density {
  
      val size: IntSize
  
      val extendedTouchPadding: Size
          get() = Size.Zero
  
      val viewConfiguration: ViewConfiguration
  
      @Suppress("GetterSetterNames")
      @get:Suppress("GetterSetterNames")
      var interceptOutOfBoundsChildEvents: Boolean
          get() = false
          set(_) {}
  
      suspend fun <R> awaitPointerEventScope(
          block: suspend AwaitPointerEventScope.() -> R
      ): R
  }
  ```

  从上面的代码可以看出，`PointerInputScope ` 其实是一个接口，这里也可以通过 DSL 的方法来设置参数

- 下面来看看如何使用它：

  ```kotlin
  @Preview
  @Composable
  fun GesturesTest() {
      val count = remember { mutableStateOf(0) }
      Text("${count.value}", modifier = Modifier.size(100.dp).background(Color.Red).pointerInput(Unit){
          detectTapGestures(
          onPress = { /* 手势开始时调用 */ },
          onDoubleTap = { /* 双击调用 */ },
          onLongPress = { /* 长按调用 */ },
          onTap = { /* 单击调用 */ }
          );
          detectDragGestures(
              onDragStart = { /* 拖拽开始时调用 */ },
              onDragEnd = { /* 拖拽结束时调用 */ },
              onDragCancel = { /* 拖拽取消时调用 */ },
              onDrag = { change, dragAmount -> { /* 拖拽过程中调用 */ } }
          );
      })
  }
  ```

  可以看到，不管是点击事件还是拖拽事件，都有相应的回调可以使用，只能说真的很方便了

- 一个简单例子：

  ```kotlin
  @Preview
  @Composable
  fun GesturesTest() {
      Box(modifier = Modifier.fillMaxSize()) {
          var offsetX by remember { mutableStateOf(0f) }
          var offsetY by remember { mutableStateOf(0f) }
  
          Box(
              Modifier
                  .offset { IntOffset(offsetX.roundToInt(), offsetY.roundToInt()) }
                  .background(Color.Blue)
                  .size(50.dp)
                  .pointerInput(Unit) {
                      detectDragGestures { change, dragAmount ->
                          change.consumeAllChanges()
                          offsetX += dragAmount.x
                          offsetY += dragAmount.y
                      }
                  }
          )
      }
  }
  ```

  预览效果：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220609062302.png)

## 滚动事件

- 提醒：如果您有大量数据需要显示在列表中，请优先考虑使用 `LazyColumn` 和 `LazyRow` 而不是使用这些 API。`LazyColumn` 和 `LazyRow` 具有滚动功能，它们的效率远高于滚动修饰符，因为它们仅在需要时组合各个项。

### 滚动修饰符： `verticalScroll` 和 `horizontalScroll` 

- 当界面中内容太多，导致显示不完时，可以通过使用 `verticalScroll` 和 `horizontalScroll` 修饰符，让用户在元素内容边界大于最大尺寸约束时滚动元素。

- 使用案例：

  ```kotlin
  @Composable
  fun ScrollBoxes() {
      Column(
          modifier = Modifier
              .background(Color.LightGray)
              .size(100.dp)
              .verticalScroll(rememberScrollState())	// 借助 ScrollState，您可以更改滚动位置或获取当前状态。
      ) {
          repeat(10) {
              Text("Item $it", modifier = Modifier.padding(2.dp))
          }
      }
  }
  ```

  预览效果：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220609063005.png)

### 可滚动修饰符：`scrollable`

- 与滚动修饰符不同， `scrollable` 可检测滚动手势，但不会偏移其内容。必须有 [`ScrollableState`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/ScrollableState?hl=zh-cn)，此修饰符才能正常工作。构造 `ScrollableState` 时，您必须提供一个 `consumeScrollDelta` 函数，该函数将在每个滚动步骤调用（通过手势输入、流畅滚动或快速滑动），并且增量以像素为单位。该函数必须返回所消耗的滚动距离，以确保在存在具有 `scrollable` 修饰符的嵌套元素时，可以正确传播相应事件。
- `scrollable` 修饰符**不会影响它所应用到的元素的布局。**这意味着，对元素布局或其子级进行的任何更改都必须通过由 `ScrollableState` 提供的增量进行处理。另外请务必注意，`scrollable` 不会考虑子级的布局，这意味着它无需测量子级，即可传播滚动增量。

- 以下代码段可检测手势并显示偏移量的数值，但不会偏移任何元素：

  ```kotlin
  @Composable
  fun ScrollableSample() {
      // actual composable state
      var offset by remember { mutableStateOf(0f) }
      Box(
          Modifier
              .size(150.dp)
              .scrollable(
                  orientation = Orientation.Vertical,
                  // Scrollable state: describes how to consume
                  // scrolling delta and update offset
                  state = rememberScrollableState { delta ->
                      offset += delta
                      delta
                  }
              )
              .background(Color.LightGray),
          contentAlignment = Alignment.Center
      ) {
          Text(offset.toString())
      }
  }
  ```

  预览效果：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220609063721.png)

### 嵌套滚动

- 引入：Compose 支持嵌套滚动，可让多个元素对一个滚动手势做出回应。典型的嵌套滚动示例是在一个列表中嵌套另一个列表

- 值得注意的是：无需我们执行任何操作，**启动滚动操作的手势就会自动从子控制传递到父控件**，这样一来，当子控件滚动到底部的时候，手势就会由其父控件进行处理。

- 以下示例显示的元素应用了 `verticalScroll`修饰符，而其所在的容器同样应用了 `verticalScroll` 修饰符：

  ```kotlin
  val gradient = Brush.verticalGradient(0f to Color.Gray, 1000f to Color.White)
  Box(
      modifier = Modifier
          .background(Color.LightGray)
          .verticalScroll(rememberScrollState())
          .padding(32.dp)
  ) {
      Column {
          repeat(6) {
              Box(
                  modifier = Modifier
                      .height(128.dp)
                      .verticalScroll(rememberScrollState())
              ) {
                  Text(
                      "Scroll here",
                      modifier = Modifier
                          .border(12.dp, Color.DarkGray)
                          .background(brush = gradient)
                          .padding(24.dp)
                          .height(150.dp)
                  )
              }
          }
      }
  }
  ```

  预览效果：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220609065140.png)

## 滑动事件

- 引入：在 Compose 中，滑动事件可以使用修饰符 `swipeable` 来实现，通过该修饰符我们可以实现在拖动元素释放后，另其朝一个方向定义的两个或多个锚点呈现动画效果。

- 值得注意的是：`swipeable`修饰符不会移动控件位置，只会检测手势。因此，我们需要保存坐标点来移动控件，例如通过 `offset` 修饰符移动控件。

- `swipeable` 方法的定义：

  ```kotlin
  @ExperimentalMaterial3Api
  internal fun <T> Modifier.swipeable(
      state: SwipeableState<T>,	// 手滑式状态，该状态可以通过 rememberSwipeableState() 创建和记住
      anchors: Map<Float, T>,		// 用于将锚点映射到状态
      orientation: Orientation,	// 定义滑动事件的方向
      enabled: Boolean = true,
      reverseDirection: Boolean = false,
      interactionSource: MutableInteractionSource? = null,
      thresholds: (from: T, to: T) -> ThresholdConfig = { _, _ -> FixedThreshold(56.dp) },
      resistance: ResistanceConfig? = resistanceConfig(anchors.keys),
      velocityThreshold: Dp = VelocityThreshold
  )
  ```

- 使用实例：

  ```kotlin
  @Composable
  fun SwipeableSample() {
      val width = 96.dp
      val squareSize = 48.dp
  
      val swipeableState = rememberSwipeableState(0)
      val sizePx = with(LocalDensity.current) { squareSize.toPx() }
      val anchors = mapOf(0f to 0, sizePx to 1) // Maps anchor points (in px) to states
  
      Box(
          modifier = Modifier
              .width(width)
              .swipeable(
                  state = swipeableState,
                  anchors = anchors,
                  thresholds = { _, _ -> FractionalThreshold(0.3f) },
                  orientation = Orientation.Horizontal
              )
              .background(Color.LightGray)
      ) {
          Box(
              Modifier
                  .offset { IntOffset(swipeableState.offset.value.roundToInt(), 0) }
                  .size(squareSize)
                  .background(Color.DarkGray)
          )
      }
  }
  ```

  预览效果：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220609070801.png)

## 多点触控：平移、缩放、旋转

如需检测用于平移、缩放和旋转的多点触控手势，您可以使用 `transformable` 修饰符。此修饰符本身不会转换元素，只会检测手势。

```kotlin
@Composable
fun TransformableSample() {
    // set up all transformation states
    var scale by remember { mutableStateOf(1f) }
    var rotation by remember { mutableStateOf(0f) }
    var offset by remember { mutableStateOf(Offset.Zero) }
    val state = rememberTransformableState { zoomChange, offsetChange, rotationChange ->
        scale *= zoomChange
        rotation += rotationChange
        offset += offsetChange
    }
    Box(
        Modifier
            // apply other transformations like rotation and zoom
            // on the pizza slice emoji
            .graphicsLayer(
                scaleX = scale,
                scaleY = scale,
                rotationZ = rotation,
                translationX = offset.x,
                translationY = offset.y
            )
            // add transformable to listen to multitouch transformation events
            // after offset
            .transformable(state = state)
            .background(Color.Blue)
            .fillMaxSize()
    )
}
```

预览效果：

![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220609070911.png)

如果您需要将缩放、平移和旋转与其他手势结合使用，可以使用 [`PointerInputScope.detectTransformGestures`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/package-summary?hl=zh-cn#(androidx.compose.ui.input.pointer.PointerInputScope).detectTransformGestures(kotlin.Boolean,kotlin.Function4)) 检测器。

## 参考/推荐资料

[官方文档](https://developer.android.com/jetpack/compose/gestures?hl=zh-cn)