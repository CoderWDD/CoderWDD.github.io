---
index : 9
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
  - View
title : Compose自定义View
---

## Canvas

### Canvas源码

- 首先，先来看一下 Compose 中 Canvas 的源码：

  ```kotlin
  @Composable
  fun Canvas(modifier: Modifier, onDraw: DrawScope.() -> Unit) =
      Spacer(modifier.drawBehind(onDraw))
  ```

- 分析：

  - 可以看到，在 Compose 中，Canvas 也是一个可组合项，因为其被 `@Composable` 修饰
  - Canvas 有两个参数，一个是`modifier`，另一个是`DrawScope块`类型的`onDraw`

- 下面来看看`DrawScope`的定义：

  ```kotlin
  @DrawScopeMarker	// DSL标记，用于区分绘图操作和画布转换操作
  interface DrawScope : Density {
      // 当前的DrawContext，包含创建绘图环境所需的依赖项
      val drawContext: DrawContext
  
      // 绘图环境当前边界的中心
      val center: Offset
          get() = drawContext.size.center
  
      // 当前绘图环境的大小
      val size: Size
          get() = drawContext.size
  
      // 绘制的反向
      val layoutDirection: LayoutDirection
      
      ...
      
          companion object {
  
          // 用于每个绘图操作的默认混合模式，这样可以确保将内容绘制在目标中的像素上方
          val DefaultBlendMode: BlendMode = BlendMode.SrcOver
  
          /**
           * Default FilterQuality used for determining the filtering algorithm
           * to apply when scaling [ImageBitmap] objects. Maps to the default
           * behavior of bilinear filtering
           */
          val DefaultFilterQuality: FilterQuality = FilterQuality.Low
      }
  }
  ```

## Canvas绘制点

- 绘制点的方法在上面的`DrawScope`中定义：

  ```kotlin
  fun drawPoints(
      // 点的集合，Offset表示坐标
      points: List<Offset>,
      // 点的绘制方式，PointMode取值可为：Points、Lines、Polygon
      // Points：分别绘制点
      // Lines：将点两两连接，绘制成线，如果点的数量为奇数，则忽略最后一个点
      // Polygon：将所有的点连接绘制成线
      pointMode: PointMode,
      // 点的颜色
      color: Color,
      strokeWidth: Float = Stroke.HairlineWidth,
      cap: StrokeCap = StrokeCap.Butt,
      pathEffect: PathEffect? = null,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

- 下面来通过例子感受一下各个不同的`PointMode`的区别：

  - **Points**：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        val points = arrayListOf(
            Offset(100f,100f),
            Offset(200f,200f),
            Offset(300f,300f),
            Offset(400f,400f),
        )
        Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
            drawPoints(
                points = points,
                pointMode = PointMode.Points,
                color = Color.Blue,
                strokeWidth = 20f
            )
        }
    }
    ```

    预览效果：

    ![image-20220607172436687](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607172436687.png)

  

  - **Lines**：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        val points = arrayListOf(
            Offset(100f,100f),
            Offset(200f,200f),
            Offset(300f,300f),
            Offset(400f,400f),
            Offset(500f,500f),
        )
        Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
            drawPoints(
                points = points,
                pointMode = PointMode.Lines,
                color = Color.Blue,
                strokeWidth = 20f
            )
        }
    }
    ```

    预览效果：

    ![image-20220607172550019](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607172550019.png)

    从上面的预览效果中，注意到我们绘制了五个点，但由于`Lines`是两两成对画线，因此会自动忽略最后一个点，最后结果就如上图所示

  - **Polygon**：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        val points = arrayListOf(
            Offset(100f,100f),
            Offset(200f,200f),
            Offset(300f,300f),
            Offset(400f,400f),
            Offset(500f,500f),
        )
        Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
            drawPoints(
                points = points,
                pointMode = PointMode.Polygon,
                color = Color.Blue,
                strokeWidth = 20f
            )
        }
    }
    ```

    预览效果：

    ![image-20220607172758909](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607172758909.png)

    **`Polygon`模式会自动将所有的点连接成线**

- `drawPoints()`方法中可选的参数：`strokeWidth`、`cap`、`pathEffect`、`alpha`、`colorFilter`、`blendmode`

  - **strokeWidth**：点的宽度

  - **cap**：

    - 类型为`StrokeCap`，用于处理线段的末端，默认为`StrokeCap.Butt`

    - `StrokeCap`定义如下：

      ```kotlin
      @Suppress("INLINE_CLASS_DEPRECATED", "EXPERIMENTAL_FEATURE_WARNING")
      @Immutable
      inline class StrokeCap internal constructor(@Suppress("unused") private val value: Int) {
          companion object {
              // 末端轮廓的起始点和结束点带有平缓的边缘，且没有延伸
              val Butt = StrokeCap(0)
              // 线段末端为半圆
              val Round = StrokeCap(1)
              // 线段末端将每个轮廓延伸笔触的宽度的一半，效果与Butt类似，但末端有所延伸
              val Square = StrokeCap(2)
          }
      }
      ```

  - **pathEffect**：

    - 类型为`PathEffect`，适用于点的可选效果或图案，默认为 null

    - `PathEffect`定义如下：

      ```kotlin
      interface PathEffect {
          companion object {
              // 将线段之间的锐角替换为指定半径的圆角
              fun cornerPathEffect(radius: Float): PathEffect = actualCornerPathEffect(radius)
              
              // 以给定间距绘制一系列虚线，并将其偏移到指定的间距数组中
              fun dashPathEffect(intervals: FloatArray, phase: Float = 0f): PathEffect =
                  actualDashPathEffect(intervals, phase)
              
              // 创建将内部效果应用于路径的PathEffect，然后将外部效果应用于内部效果的结果
              fun chainPathEffect(outer: PathEffect, inner: PathEffect): PathEffect =
                  actualChainPathEffect(outer, inner)
              
              // 通过指定一些特定的形状，并将其标记来绘制路径，仅适用于笔触形状，且填充形状将被忽略
              fun stampedPathEffect(
                  shape: Path,
                  advance: Float,
                  phase: Float,
                  style: StampedPathEffectStyle
              ): PathEffect = actualStampedPathEffect(shape, advance, phase, style)
          }
      }
      ```

      可以看到 `PathEffect` 其实是一个接口，接口中只有一个伴生对象，伴生对象中只有 4 个方法，其返回值类型都为`PathEffect`，所以可以直接用这 4 个方法进行构建 PathEffect。（Kotlin中伴生对象中的方法，可以直接使用`类名.方法名`的方式进行调用）

## Brush绘制渐变

- 问题引入：上面的`drawPoints()`方法中，可以将点连成线，但线的颜色过于单调，如果想要让连接的线呈现渐变的效果，应该怎么做呢？

- 解决：如果要达到渐变的效果，则用上面的方法提供的参数，是无法完成的，此时可以用`drawPoints()`的重载方法，其定义如下：

  ```kotlin
  fun drawPoints(
      points: List<Offset>,
      pointMode: PointMode,
      brush: Brush,
      strokeWidth: Float = Stroke.HairlineWidth,
      cap: StrokeCap = StrokeCap.Butt,
      pathEffect: PathEffect? = null,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  可以看到，该重载方法，只有第三个参数`brush`与原来的`color`不同，其余参数都是一致的，其原因也好理解，如果要实现渐变的效果，只提供一个 color 是不够的，因为一个颜色是无法达到渐变的效果的，而应该用`Brush`来指明渐变的过程

- `Brush`的源码：

  ```kotlin
  @Immutable
  sealed class Brush {
      open val intrinsicSize: Size = Size.Unspecified
  
      abstract fun applyTo(size: Size, p: Paint, alpha: Float)
  
      companion object {
          // 使用给定的开始坐标和结束坐标，使用提供的颜色创建线性渐变
          // 颜色分散在色标对中定义的偏移处
          @Stable
          fun linearGradient(
              vararg colorStops: Pair<Float, Color>,
              start: Offset = Offset.Zero,
              end: Offset = Offset.Infinite,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = LinearGradient(
              colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
              stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
              start = start,
              end = end,
              tileMode = tileMode
          )
          
          // 使用给定的开始坐标和结束坐标，使用提供的颜色创建线性渐变
          @Stable
          fun linearGradient(
              colors: List<Color>,
              start: Offset = Offset.Zero,
              end: Offset = Offset.Infinite,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = LinearGradient(
              colors = colors,
              stops = null,
              start = start,
              end = end,
              tileMode = tileMode
          )
          
          // 创建一个水平渐变，给定的颜色均匀地分散在渐变中
          @Stable
          fun horizontalGradient(
              colors: List<Color>,
              startX: Float = 0.0f,
              endX: Float = Float.POSITIVE_INFINITY,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = linearGradient(colors, Offset(startX, 0.0f), Offset(endX, 0.0f), tileMode)
          
          // 创建一个水平渐变，给定的颜色分散在色标对中定义的偏移处
          @Stable
          fun horizontalGradient(
              vararg colorStops: Pair<Float, Color>,
              startX: Float = 0.0f,
              endX: Float = Float.POSITIVE_INFINITY,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = linearGradient(
              *colorStops,
              start = Offset(startX, 0.0f),
              end = Offset(endX, 0.0f),
              tileMode = tileMode
          )
  
          // 创建一个垂直渐变，给定的颜色均匀地分散在渐变中
          @Stable
          fun verticalGradient(
              colors: List<Color>,
              startY: Float = 0.0f,
              endY: Float = Float.POSITIVE_INFINITY,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = linearGradient(colors, Offset(0.0f, startY), Offset(0.0f, endY), tileMode)
  
          // 创建一个垂直渐变，给定的颜色分散在色标对中定义的偏移处
          @Stable
          fun verticalGradient(
              vararg colorStops: Pair<Float, Color>,
              startY: Float = 0f,
              endY: Float = Float.POSITIVE_INFINITY,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = linearGradient(
              *colorStops,
              start = Offset(0.0f, startY),
              end = Offset(0.0f, endY),
              tileMode = tileMode
          )
  
          // 在色标对中定义的偏移处创建具有给定颜色的径向渐变
          @Stable
          fun radialGradient(
              vararg colorStops: Pair<Float, Color>,
              center: Offset = Offset.Unspecified,
              radius: Float = Float.POSITIVE_INFINITY,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = RadialGradient(
              colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
              stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
              center = center,
              radius = radius,
              tileMode = tileMode
          )
  
          // 创建一个径向渐变，给定的颜色均匀地分散在渐变中
          @Stable
          fun radialGradient(
              colors: List<Color>,
              center: Offset = Offset.Unspecified,
              radius: Float = Float.POSITIVE_INFINITY,
              tileMode: TileMode = TileMode.Clamp
          ): Brush = RadialGradient(
              colors = colors,
              stops = null,
              center = center,
              radius = radius,
              tileMode = tileMode
          )
  
          // 创建给定颜色围绕中心散布的扫描渐变，并在每个色标对中定义偏移量
          // 扫描从 3 点钟方向开始，然后顺时针旋转，直到再次到达起始位置
          @Stable
          fun sweepGradient(
              vararg colorStops: Pair<Float, Color>,
              center: Offset = Offset.Unspecified
          ): Brush = SweepGradient(
              colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
              stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
              center = center
          )
  
          // 创建给定颜色围绕中心散布的扫描渐变，无偏移量
          // 扫描从 3 点钟方向开始，然后顺时针旋转，直到再次到达起始位置
          @Stable
          fun sweepGradient(
              colors: List<Color>,
              center: Offset = Offset.Unspecified
          ): Brush = SweepGradient(
              colors = colors,
              stops = null,
              center = center
          )
      }
  }
  ```

- 简单使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      val points = arrayListOf(
          Offset(100f,100f),
          Offset(200f,200f),
          Offset(300f,300f),
          Offset(400f,400f),
          Offset(500f,500f),
      )
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawPoints(
              points = points,
              pointMode = PointMode.Polygon,
              brush = Brush.linearGradient(
                  colors = arrayListOf(
                      Color.Red,
                      Color.Green,
                      Color.Blue
                  )
              ),
              cap = StrokeCap.Round,
              strokeWidth = 20f
          )
      }
  }
  ```

  预览效果：

  ![image-20220607182735559](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607182735559.png)

- 上面的代码实现的效果的颜色是均匀分布的，那如果要更加精确地控制每一段的颜色，应该怎么做呢？

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      val points = arrayListOf(
          Offset(100f,100f),
          Offset(200f,200f),
          Offset(300f,300f),
          Offset(400f,400f),
          Offset(500f,500f),
      )
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawPoints(
              points = points,
              pointMode = PointMode.Polygon,
              brush = Brush.linearGradient(
                  0.0f to Color.Red,
                  0.3f to Color.Green,
                  0.6f to Color.Blue,
                  1.0f to Color.Gray
              ),
              cap = StrokeCap.Round,
              strokeWidth = 20f
          )
      }
  }
  ```

  预览效果：

  ![image-20220607183531167](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607183531167.png)

## Canvas绘制线

- 引入：前面其实已经用绘制点的方式绘制过线了，只不过 Compose 提供了更为专门的函数用于绘制线，且绘制线的方法也在前面提到的`DrawScope`中定义，为`drawLine`

- `drawLine()`方法的定义：

  ```kotlin
  // 提供颜色的版本
  fun drawLine(
      color: Color,
      start: Offset,	// 起点坐标
      end: Offset,	// 终点坐标
      strokeWidth: Float = Stroke.HairlineWidth,
      cap: StrokeCap = Stroke.DefaultCap,
      pathEffect: PathEffect? = null,
      /*FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  
  // 提供渐变方案的版本
  fun drawLine(
      brush: Brush,
      start: Offset,
      end: Offset,
      strokeWidth: Float = Stroke.HairlineWidth,
      cap: StrokeCap = Stroke.DefaultCap,
      pathEffect: PathEffect? = null,
      /*FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  可以看到，绘制线和绘制点的`drawPoints()`方法很像，只是绘制线只需要提供起点和终点即可，绘制点则需要提供一系列点的坐标（如果要实现渐变效果，则使用其重载方法，将`color`属性换成`brush`，关于如何使用`Brush`实现渐变效果，请参考 [Brush绘制渐变](#brush绘制渐变)）

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawLine(
              color = Color.Blue,
              start = Offset(100f,100f),
              end = Offset(200f,300f),
              strokeWidth = 30f,
              cap = StrokeCap.Round
          )
      }
  }
  ```

  预览效果：

  ![image-20220607185227584](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607185227584.png)

## Canvas绘制矩形

- 引入：绘制矩形的方法也在`DrawScope`中定义，其方法为：`drawRect()`

- `drawRect()`的定义：

  ```kotlin
  // 提供颜色的版本
  fun drawRect(
      color: Color,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  
  // 提供渐变方案的版本
  fun drawRect(
      brush: Brush,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      /*FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  可以看到，`drawRect()`方法中，有三个必传参数`color` or `brush`、`topLeft`、`size`，因为这是绘制一个矩形最基本必备的因素，缺少任何一个，都不能明确地画出一个矩形

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawRect(
              color = Color.Blue,
              topLeft = Offset(100f,100f),
              size = Size(300f,300f)
          )
      }
  }
  ```

  预览效果：

  ![image-20220607190819084](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607190819084.png)

### 没体验过的全新版本：`style`

- 引入：从上面`drawRect()`的方法可以看出，该方法的参数大体于前面的绘制点和绘制线的参数相同，只有一个`style`的参数到目前为止还没遇到过，可以看到其类型为`DrawStyle`

- `DrwaStyle`的源码：

  ```kotlin
  sealed class DrawStyle
  // 默认值，将绘制的形状用给定的颜色或图案填充
  object Fill : DrawStyle()
  
  /**
   * [DrawStyle] that provides information for drawing content with a stroke
   */
  class Stroke(
      // 配置画笔(stoke)的宽度，单位为像素(pixel)
      val width: Float = 0.0f,
  
      // 设置画笔(stoke)的斜角值，当连接角度很锐利时，此参数用于控制斜角连接的角度，必须大于等于0
      val miter: Float = DefaultMiter,
  
      // 设置线段末端的形状
      val cap: StrokeCap = StrokeCap.Butt,
  
      // 设置直线和曲线段在描边路径上连接的处理方式，默认值为StrokeJoin.Miter
      val join: StrokeJoin = StrokeJoin.Miter,
  
      // 应用于笔画的效果，null表示要绘制实线
      val pathEffect: PathEffect? = null
  ) : DrawStyle() {
      companion object {
  
          /**
           * Width to indicate a hairline stroke of 1 pixel
           */
          const val HairlineWidth = 0.0f
  
          /**
           * Default miter length used in combination with joins
           */
          const val DefaultMiter: Float = 4.0f
  
          /**
           * Default cap used for line endings
           */
          val DefaultCap = StrokeCap.Butt
  
          /**
           * Default join style used for connections between line and curve segments
           */
          val DefaultJoin = StrokeJoin.Miter
      }
  
      override fun equals(other: Any?): Boolean {
          if (this === other) return true
          if (other !is Stroke) return false
  
          if (width != other.width) return false
          if (miter != other.miter) return false
          if (cap != other.cap) return false
          if (join != other.join) return false
          if (pathEffect != other.pathEffect) return false
  
          return true
      }
  
      override fun hashCode(): Int {
          var result = width.hashCode()
          result = 31 * result + miter.hashCode()
          result = 31 * result + cap.hashCode()
          result = 31 * result + join.hashCode()
          result = 31 * result + (pathEffect?.hashCode() ?: 0)
          return result
      }
  
      override fun toString(): String {
          return "Stroke(width=$width, miter=$miter, cap=$cap, join=$join, pathEffect=$pathEffect)"
      }
  }
  ```

  可以看出，`DrawStyle`是一个**密封类**，且有两个子类`Fill`和`Stroke`，前者表示填充，后者为描边，默认为前者

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawRect(
              color = Color.Blue,
              topLeft = Offset(100f,100f),
              size = Size(300f,300f),
              style = Stroke(
                  width = 30f,
                  miter = 2f,
                  cap = StrokeCap.Round
              )
          )
      }
  }
  ```

  预览效果：

  ![image-20220607192358517](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607192358517.png)

- 相关参数：

  - 从上面`Stroke`的源码中，可以看到，其中有一个`join`参数，其类型为`StrokeJoin`，这又是我们之前没遇到的参数类型，其作用是用来设置直线或曲线在描边路径上连接点的处理方式，默认值为 **StrokeJoin.Miter**

  - `StokeJoin`类的定义：

    ```kotlin
    @Suppress("INLINE_CLASS_DEPRECATED", "EXPERIMENTAL_FEATURE_WARNING")
    @Immutable
    inline class StrokeJoin internal constructor(@Suppress("unused") private val value: Int) {
        companion object {
            // 连接点为尖角
            val Miter = StrokeJoin(0)
    
            // 连接点为半圆
            val Round = StrokeJoin(1)
    
           	// 连接点为斜角
            val Bevel = StrokeJoin(2)
        }
    }
    ```

    从上面代码可以看出，`StrokeJoin`是一个枚举类，有三个枚举量

  - 使用实例：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
            drawRect(
                color = Color.Blue,
                topLeft = Offset(100f,100f),
                size = Size(300f,300f),
                style = Stroke(
                    width = 30f,
                    miter = 2f,
                    cap = StrokeCap.Round,
                    join = StrokeJoin.Bevel
                )
            )
        }
    }
    ```

    预览效果：

    ![image-20220607193128776](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607193128776.png)

### 绘制圆角矩形

- 引入：上述的绘制矩形的方法，虽然也能达到一定的使矩形呈现圆角的效果，但效果不够理想，因此`DrawScope`提供了一个专门用于绘制圆角矩形的方法`drawRoundRect()`

- `drawRoundRect()`定义：

  ```kotlin
  // 提供颜色的版本
  fun drawRoundRect(
      color: Color,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      cornerRadius: CornerRadius = CornerRadius.Zero,
      style: DrawStyle = Fill,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  
  // 提供渐变方案的版本
  fun drawRoundRect(
      brush: Brush,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      cornerRadius: CornerRadius = CornerRadius.Zero,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

- 实现圆角矩形圆角大小的关键参数`cornerRadius`：

  - `cornerRadius`参数的类型为：``CornerRadius``

  - `CornerRadius`的简单使用方法：

    ```kotlin
    @Stable
    fun CornerRadius(x: Float,y: Float = x) = CornerRadius(packFloats(x,y))
    ```

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawRoundRect(
              color = Color.Blue,
              topLeft = Offset(100f,100f),
              size = Size(300f,300f),
              cornerRadius = CornerRadius(20f)
          )
      }
  }
  ```

  预览效果：

  ![image-20220607194312226](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607194312226.png)

## Canvas绘制圆及椭圆

### 绘制圆

- 正如圆角矩形一样，`DrawScope`也提供了绘制圆的方法`drawCircle()`

- `drawCircle()`定义如下：

  ```kotlin
  // 提供颜色的版本
  fun drawCircle(
      color: Color,
      radius: Float = size.minDimension / 2.0f,
      center: Offset = this.center,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  // 提供渐变方案的版本
  fun drawCircle(
      brush: Brush,
      radius: Float = size.minDimension / 2.0f,
      center: Offset = this.center,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  其中`colorFilter`表示颜色效果，`blendMode`表示混合模式

- 使用实例：这里只演示实心圆，如果要达到空心的效果，可以参考 [style定制](#没体验过的全新版本-style)

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawCircle(
              color = Color.Blue,
              radius = 300f,
              center = center
          )
      }
  }
  ```

  预览效果：

  ![image-20220607204107916](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204107916.png)

### 绘制椭圆

- 既然有圆形的绘制方法，`DrawScope`当然也提供了绘制椭圆的方法`drawOval()`

- `drawOval()`的定义如下：

  ```kotlin
  // 提供颜色的版本
  fun drawOval(
      color: Color,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  
  // 提供渐变方案的版本
  fun drawOval(
      brush: Brush,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  可以看到，绘制椭圆的方法`drwaOval`的参数，居然与绘制矩形的方法`drawRect`一模一样，这是因为，绘制椭圆，实际上就是在一个矩形里面进行裁减而来的（内切），所以要绘制椭圆，实际就是在绘制一个矩形

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.fillMaxSize().background(Color.White)){
          drawOval(
              color = Color.Blue,
              topLeft = Offset(center.x,center.y),
              size = Size(500f,400f)
          )
      }
  }
  ```

  预览效果：

  ![image-20220607205233331](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607205233331.png)

  

## Canvas绘制圆弧

- 引入：上面我们已经知道，`DrawScope`提供了绘制圆和椭圆的方法，但如果我们需要的不是一整个圆，只需要一小段圆弧呢？万能的`DrawScope`当然也想到了我们的刁钻要求，所以提供了`drawArc()`方法，专门用于绘制圆弧

- `drawArc()`的定义如下：

  ```kotlin
  // 提供颜色的版本
  fun drawArc(
      color: Color,
      startAngle: Float,
      sweepAngle: Float,
      useCenter: Boolean,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  // 提供渐变方案的版本
  fun drawArc(
      brush: Brush,
      startAngle: Float,
      sweepAngle: Float,
      useCenter: Boolean,
      topLeft: Offset = Offset.Zero,
      size: Size = this.size.offsetSize(topLeft),
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  其中，参数`startAngle`表示圆弧的起始角度，其类型为 **Float**；`sweepAngle`表示相对于`startAngle`顺时针绘制的弧度，其类型为 **Float**；`useCenter`表示设置圆弧是否要关闭边界中心的标准，其类型为 **Boolean**

- 使用实例：

  - 不关闭边界中心：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        Canvas(modifier = Modifier.size(360.dp).background(Color.White)){
            drawArc(
                color = Color.Blue,
                startAngle = 0f,
                sweepAngle = 80f,
                useCenter = true
            )
        }
    }
    ```

    预览效果：

    ![image-20220607210255261](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210255261.png)

  - 关闭边界中心：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        Canvas(modifier = Modifier.size(360.dp).background(Color.White)){
            drawArc(
                color = Color.Blue,
                startAngle = 0f,
                sweepAngle = 80f,
                useCenter = false
            )
        }
    }
    ```

    预览效果：

    ![image-20220607210422908](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210422908.png)

    可以看到，**是否开启边界中心就是是否将起点和终点与圆心相连**

  - 单圆弧线：

    ```kotlin
    @Preview
    @Composable
    fun CustomViewTest(){
        Canvas(modifier = Modifier.size(360.dp).background(Color.White)){
            drawArc(
                color = Color.Blue,
                startAngle = 0f,
                sweepAngle = 80f,
                useCenter = false,
                style = Stroke(width = 10f)
            )
        }
    }
    ```

    预览效果：

    ![image-20220607210652225](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210652225.png)

## Canvas绘制图片

- 引入：前面都是绘制图形，但如果有图片，我们甚至可以直接绘制图片，因为`DrawScope`甚至为我们提供了专门绘制图片的方法`drawImage()`

- `drawImage()`的定义如下：

  ```kotlin
  fun drawImage(
      image: ImageBitmap,
      srcOffset: IntOffset = IntOffset.Zero,
      srcSize: IntSize = IntSize(image.width, image.height),
      dstOffset: IntOffset = IntOffset.Zero,
      dstSize: IntSize = srcSize,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

- 四个陌生参数的作用：绘制图片其实就是定义一个`dst`图片框，并用`dstOffset`、`dstSize`规定其大小和偏移，然后去框要显示的图片`src`，并用`srcOffset`、`srcSize`规定源图片的大小和偏移

  - `srcOffset`：指的是要显示的图片要显示的偏移量
  - `srcSize`：指的是要显示的图片的区域的大小
  - `dstOffset`：指的是图片框的位置的偏移
  - `dstSize`：指的是显示的图片框的大小

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      val context = LocalContext.current
      val bitmap = BitmapFactory.decodeResource(context.resources,R.drawable.default_avatar)
      val image = bitmap.asImageBitmap()
      Canvas(modifier = Modifier.size(360.dp).background(Color.White)){
          drawImage(
              image = image,
              srcOffset = IntOffset(0,0),
              srcSize = IntSize(20000,20000),
              dstOffset = IntOffset(0,0),
              dstSize = IntSize(6000,6000)
          )
      }
  }
  ```

  效果预览：

  ![image-20220607213235338](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607213235338.png)

## Canvas绘制路径

- 引入：不管是绘制点、还是线段、曲线，都只能应对简单的图形，如果要绘制复杂图形，显然需要这些方法的组合调用，但这样就未免显得代码过于冗长且不够优雅，对此，`DrawScope`也专门提供相应的绘制路径的方法`drawPath()`

- `drawPath()`的定义如下：

  ```kotlin
  // 提供颜色的版本
  fun drawPath(
      path: Path,
      color: Color,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  
  // 提供渐变方案的版本
  fun drawPath(
      path: Path,
      brush: Brush,
      /*@FloatRange(from = 0.0, to = 1.0)*/
      alpha: Float = 1.0f,
      style: DrawStyle = Fill,
      colorFilter: ColorFilter? = null,
      blendMode: BlendMode = DefaultBlendMode
  )
  ```

  从上面的代码可以看到，该方法其实就是把我们要绘制的路径，全都封装到`path`里去了，即`Path`类将多种复合路径（点、直线、曲线）封装在其内部

- 既然`Path`这么厉害，那当然得来看看它的源码是怎么样的了，下面给出其源码：

  ```kotlin
  expect fun Path(): Path	// 可以通过Path的方式进行实例化
  interface Path {
      // 决定如何计算路径
      var fillType: PathFillType
  
      // 返回路径的凸度，由路径的内容定义
      val isConvex: Boolean
  
      // 如果路径为空（没有线，只有点或没有点），则返回true
      val isEmpty: Boolean
  
      // 在给定坐标处开始一个新的子路径(subpath)
      fun moveTo(x: Float, y: Float)
  
      // 从当前点到给定点偏移量开始一个新的子路径
      fun relativeMoveTo(dx: Float, dy: Float)
  
      // 从当前点到给定点添加一条直线段
      fun lineTo(x: Float, y: Float)
  
      // 从当前点到给与当前点相距离给定偏移量的点添加一条直线段
      fun relativeLineTo(dx: Float, dy: Float)
  
      /**
       * Adds a quadratic bezier segment that curves from the current
       * point to the given point ([x2], [y2]), using the control point
       * ([x1], [y1]).
       */
      fun quadraticBezierTo(x1: Float, y1: Float, x2: Float, y2: Float)
  
      /**
       * Adds a quadratic bezier segment that curves from the current
       * point to the point at the offset ([dx2], [dy2]) from the current point,
       * using the control point at the offset ([dx1], [dy1]) from the current
       * point.
       */
      fun relativeQuadraticBezierTo(dx1: Float, dy1: Float, dx2: Float, dy2: Float)
  
      /**
       * Adds a cubic bezier segment that curves from the current point
       * to the given point ([x3], [y3]), using the control points ([x1], [y1]) and
       * ([x2], [y2]).
       */
      fun cubicTo(x1: Float, y1: Float, x2: Float, y2: Float, x3: Float, y3: Float)
  
      /**
       * Adds a cubic bezier segment that curves from the current point
       * to the point at the offset ([dx3], [dy3]) from the current point, using
       * the control points at the offsets ([dx1], [dy1]) and ([dx2], [dy2]) from the
       * current point.
       */
      fun relativeCubicTo(dx1: Float, dy1: Float, dx2: Float, dy2: Float, dx3: Float, dy3: Float)
  
      // 如果[forceMoveTo]为false，则添加直线段或弧段
      // 如果[forceMoveTo]为true，则启动一个新的由弧段组成的子路径
      fun arcToRad(
          rect: Rect,
          startAngleRadians: Float,
          sweepAngleRadians: Float,
          forceMoveTo: Boolean
      ) {
          arcTo(rect, degrees(startAngleRadians), degrees(sweepAngleRadians), forceMoveTo)
      }
  
      // 如果[forceMoveTo]为false，则添加直线段或弧段
      // 如果[forceMoveTo]为true，则启动一个新的由弧段组成的子路径
      fun arcTo(
          rect: Rect,
          startAngleDegrees: Float,
          sweepAngleDegrees: Float,
          forceMoveTo: Boolean
      )
  
      // 添加一个矩形
      fun addRect(rect: Rect)
  
      // 添加一个椭圆
      fun addOval(oval: Rect)
  
      // 添加一个新的子路径，该子路径具有一个弧段
      fun addArcRad(oval: Rect, startAngleRadians: Float, sweepAngleRadians: Float)
  
      // 添加一个新的子路径，该子路径具有一个弧段，该弧段由遵循给定矩形所界定的椭圆边缘的弧组成
      fun addArc(oval: Rect, startAngleDegrees: Float, sweepAngleDegrees: Float)
  
       // 添加一个圆角矩形
      fun addRoundRect(roundRect: RoundRect)
  
      // 添加一个新的子路径，该子路径包含给定的“路径”偏移量和给定的“偏移量”
      fun addPath(path: Path, offset: Offset = Offset.Zero)
  
      // 将最后一个点与起点连接，已达到关闭一个子路径的效果
      fun close()
  
      // 清除所有子路径的[Path]对象，使其返回到创建时的状态
      fun reset()
  
      // 按给定偏移量转换每个子路径的所有线段
      fun translate(offset: Offset)
  
      // 计算路径控制点的边界，并将结果写入边界
      fun getBounds(): Rect
  
      // 将路径设置为两个指定路径进行Op操作的结果
      fun op(
          path1: Path,
          path2: Path,
          operation: PathOperation
      ): Boolean
  
      companion object {
          // 根据给定“操作”指定的方式组合两条路径
          fun combine(
              operation: PathOperation,
              path1: Path,
              path2: Path
          ): Path {
              val path = Path()
  
              if (path.op(path1, path2, operation)) {
                  return path
              }
              throw IllegalArgumentException(
                  "Path.combine() failed.  This may be due an invalid " +
                      "path; in particular, check for NaN values."
              )
          }
      }
  }
  ```

- 使用实例：**如果想要定制类似海浪般的曲线，则可以用`Path`提供的有关`贝塞尔曲线`的绘制方法，通过提供合适的参数，就能画出任意形状的曲线**，具体使用需要查看相应资料

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      val path = Path()
      path.moveTo(100f,100f)
      path.lineTo(100f,700f)
      path.lineTo(800f,700f)
      path.lineTo(900f,300f)
      path.lineTo(600f,100f)
      path.close()
      Canvas(modifier = Modifier.size(360.dp).background(Color.White)){
          drawPath(
              path = path,
              color = Color.Blue,
              style = Stroke(
                  width = 10f
              )
          )
      }
  }
  ```

  预览效果：

  ![image-20220607222226326](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607222226326.png)

## 混合模式

跟 Android View 中一样，Compose 在自定义 View 时，也可以指定相应的**混合模式**，从而自定义出很多炫酷的功能

- 下面给出 Android View 中提供的 18 中混合模式图解：

  ![Android View 中提供的 18 中混合模式图解](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20200406215604618.jpeg)

- 相比于 Android View 提供的 18 种混合模式，Compose 在 Android View 的基础上，又增加了 11 种新的混合模式：

  - 下面给出 Compose 中混合模式`BlendMode`的源码，里面清晰定义了 Compose 中的 29 种混合模式：

    ```kotlin
    @Suppress("INLINE_CLASS_DEPRECATED", "EXPERIMENTAL_FEATURE_WARNING")
    @Immutable
    inline class BlendMode internal constructor(@Suppress("unused") private val value: Int) {
        companion object {
    
            /**
             * 删除源图片和目标图片
             */
            val Clear = BlendMode(0)
    
            /**
             * 放置目标图片，仅绘制源图片
             */
            val Src = BlendMode(1)
    
            /**
             * 放置源图片，仅绘制目标图片
             */
            val Dst = BlendMode(2)
    
            /**
             * 将源图片合成到目标图片上
             */
            val SrcOver = BlendMode(3)
    
            /**
             * 将源图片合成到目标图片下
             */
            val DstOver = BlendMode(4)
    
            /**
             * 显示源图片，但仅显示两张图重叠的位置
             */
            val SrcIn = BlendMode(5)
    
            /**
             * 显示目标图片，但仅显示两张图片重叠的位置
             */
            val DstIn = BlendMode(6)
    
            /**
             * 显示源图片，但仅显示两张图片不重叠的位置
             */
            val SrcOut = BlendMode(7)
    
            /**
             * 显示目标图片，但仅显示两张图片不重叠的位置
             */
            val DstOut = BlendMode(8)
    
            /**
             * 将源图片合成到目标图片上，但仅在与目标图片重叠的位置合成
             */
            val SrcAtop = BlendMode(9)
    
            /**
             * 将目标图片合成到源图片上，但仅在与源图片重叠的位置合成
             */
            val DstAtop = BlendMode(10)
    
            /**
             * 对源图片和目标图片应用按位异或运算符，这将使它们重叠的地方保持透明
             */
            val Xor = BlendMode(11)
    
            /**
             * 将源图片和目标图片的组成部分求和
             */
            val Plus = BlendMode(12)
    
            /**
             * 将源图片和目标图片的颜色分量相乘
             */
            val Modulate = BlendMode(13)
    
            /**
             * 将源图片和目标图片的分量的逆值相乘，然后将结果相逆
             */
            val Screen = BlendMode(14) // The last coeff mode.
    
            /**
             * 调整源图片和目标图片的分量以使其适合目标，然后将它们相乘
             */
            val Overlay = BlendMode(15)
    
            /**
             * 通过从每个颜色通道中选择最小值来合成源图片和目标图片
             */
            val Darken = BlendMode(16)
    
            /**
             * 通过从每个颜色通道中选择最大值来合成源图片和目标图片
             */
            val Lighten = BlendMode(17)
    
            /**
             * 将目标除以源的倒数
             */
            val ColorDodge = BlendMode(18)
    
            /**
             * 将目标的倒数除以源，然后将结果求倒数
             */
            val ColorBurn = BlendMode(19)
    
            /**
             * 调整源图片和目标图片的分量以使其适合源图片，然后将它们相乘
             */
            val Hardlight = BlendMode(20)
    
            /**
             * 对于小于0.5的源值使用ColorDodge，对于大于0.5的源值使用ColorBurn
             */
            val Softlight = BlendMode(21)
    
            /**
             * 从每个通道的较大值中减去较小值
             */
            val Difference = BlendMode(22)
    
            /**
             * 从两张图片的总和中减去两张图片乘积的两倍
             */
            val Exclusion = BlendMode(23)
    
            /**
             * 将源图片和目标图片的分量（包括Alpha通道）相乘
             */
            val Multiply = BlendMode(24) // The last separable mode.
    
            /**
             * 获取源图片的色相以及目标图片的饱和度和光度
             */
            val Hue = BlendMode(25)
    
            /**
             * 获取源图片的饱和度以及目标图片的色相和亮度
             */
            val Saturation = BlendMode(26)
    
            /**
             * 获取源图片的色相和饱和度以及目标图片的光度
             */
            val Color = BlendMode(27)
    
            /**
             * 获取源图片的亮度以及目标图片的色相和饱和度
             */
            val Luminosity = BlendMode(28)
        }
    }
    // 省略...
    ```

    从上面的代码和注释中，可以看到 Compose 提供了 29 种混合模式，以及相应的模式的作用

- 使用实例：

  ```kotlin
  @Preview
  @Composable
  fun CustomViewTest(){
      Canvas(modifier = Modifier.size(360.dp).background(Color.White)){
          drawCircle(
              color = Color.Yellow,
              radius = 175f,
              center = Offset(350f, 350f),
              blendMode = BlendMode.Clear
          )
          drawRect(
              color = Color.Blue,
              topLeft = Offset(300f, 300f),
              size = Size(350f, 350f),
              blendMode = BlendMode.Clear
          )
      }
  }
  ```

  在上面的代码中，我们绘制了一个圆和一个矩形，圆代表目标图片Dst，矩形代表源图片Src，然后将混合模式都设置为BlendMode.Clear。即删除源图片和目标图片

  预览效果：

  ![image-20220607224055078](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607224055078.png)

## 参考/推荐资料

- Jetpack Compose - 朱江：自定义View章节
- [Compose 29种混合模式使用示例](https://blog.csdn.net/u010976213/article/details/115209804)
- [Compose Canvas 绘制图形实际样例](https://blog.csdn.net/u010976213/article/details/122709083)

