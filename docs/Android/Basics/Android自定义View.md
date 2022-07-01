---
index: 10
icon: markdown
title: Android自定义View
category:
  - AndroidBasics
  - Interview
tag:
  - View
  - 面试
---

## 基础概念

- 如何自定义自己的 View：

  - 将自己的 View 继承自系统的 View

  - 调用父类的构造方法
  - 根据需要，重写 **onMeasure**()、**onDraw**()等方法

```java
public class MyView extends View {
    public MyView(Context context) {
        super(context);
    }

    public MyView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    // widthMeasureSpec: 父View的宽的信息
    // heightMeasureSpec: 父View的高的信息
    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
    }
}
```

### onMeasure()

- **作用：决定自定义组件的大小**

```java
@Override
protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
    super.onMeasure(widthMeasureSpec, heightMeasureSpec);
}
```

- widthMeasureSpec：父View的宽的信息

- heightMeasureSpec：父View的高的信息

- MeasureSpec：

  - 包含高度/宽度+测量模式信息

  - 如何获取其中信息：

    ```java
    int mode = MeasureSpec.getMode(measureSpec);
    int size = MeasureSpec.getSize(measureSpec);
    ```

- 三种测量模式：

  - **UNSPECIFIED**：View的大小没有限制，可以是任意的大小
  - **EXACTLY**：当前的尺寸大小就是 View 的大小
  - **AT_MOST**：View 能取的尺寸大小不能超过当前值大小

- 实例：

  ```java
  public class MyView extends View {
      public MyView(Context context) {
          super(context);
      }
  
      public MyView(Context context, @Nullable AttributeSet attrs) {
          super(context, attrs);
      }
  
      public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
          super(context, attrs, defStyleAttr);
      }
  
      @Override
      protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
          super.onMeasure(widthMeasureSpec, heightMeasureSpec);
          int width = getSize(100,widthMeasureSpec);
          int height = getSize(200,heightMeasureSpec);
  
          setMeasuredDimension(width,height);
      }
  
      @Override
      protected void onDraw(Canvas canvas) {
          super.onDraw(canvas);
      }
  
      public int getSize(int defSize,int measureSpec){
          int realSize = defSize;
          int mode = MeasureSpec.getMode(measureSpec);
          int size = MeasureSpec.getSize(measureSpec);
  
          switch (mode){
              case MeasureSpec.UNSPECIFIED:
                  realSize = defSize;
                  break;
              case MeasureSpec.EXACTLY:
              case MeasureSpec.AT_MOST:
                  realSize = size;
                  break;
          }
          return realSize;
      }
  }
  ```

### onDraw()

- **作用：决定自定义组件的形状**

- 步骤：

  - 定义好坐标
  - 绘制好路径
  - 创建画笔，设置画笔属性
  - 绘制到 canvas 中

- 实例：

  ```java
  public class MyView extends View {
      public MyView(Context context) {
          super(context);
      }
  
      public MyView(Context context, @Nullable AttributeSet attrs) {
          super(context, attrs);
      }
  
      public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
          super(context, attrs, defStyleAttr);
      }
  
      @Override
      protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
          super.onMeasure(widthMeasureSpec, heightMeasureSpec);
  
      }
  
      @Override
      protected void onDraw(Canvas canvas) {
          super.onDraw(canvas);
          // 半径
          int r = getMeasuredWidth() / 4;
          // 圆心横坐标
          int circleX = getLeft() + r;
          // 圆心纵坐标
          int circleY = getTop() + (getMeasuredHeight() / 2);
  
          Paint paint = new Paint();
          paint.setColor(Color.GREEN);
  
          canvas.drawCircle(circleX,circleY,r,paint);
  
      }
  }
  ```

## 面经

- SurfaceView：
  - 为什么要有 SurfaceView：**一般的 View 控件的 UI 是在主线程里进行绘制的**，通过刷新来进行重绘，刷新的时间为 **16 ms**。所以在刷新的过程中如果需要执行的逻辑处理过多，会容易出现卡顿现象，而且也会造成主线程阻塞，引起 ANR 问题
  - SurfaceView概述：Google推出了 SurfaceView 来解决上述的问题，且 SurfaceView 继承自 View，拥有 View 的特性。SurfaceView 有两个子类，分别是 **GLSurfaceView** 和 **VideoView**。它们有自己独立的、区别于普通 View 的绘图表面Surface，**通过在 Surface 上绘制图像，然后将产生的视图数据交给 SurfaceFlinger，SurfaceFlinger 就负责将这些视图数据进行合成，最终发送到显示设备上，从而显示到屏幕上。**
  - SurfaceView的特点：
    - 具有独立的绘图表面，所以它的 UI **绘制在独立的线程中进行**，不会造成主线程阻塞
    - View 主要用于**主动**更新，而 SurfaceView 用于**被动**更新
    - SurfaceView 在绘图时使用了**双缓冲机制**
  - SurfaceView的适用场景：
    - 当自定义 View 需要频繁刷新或者刷新时需要处理比较复杂的逻辑时，可以用SurfaceView
- 自定义 View 中的 requestLayout()、onLayout()、onDraw()和onDrawChild() 的联系和区别？
  - requestLayout()：调用 onMeasure() 和 onLayout() 的过程，然后**根据标记位来判断是否调用 onDraw()**
  - onLayout()：通常该方法是**针对 ViewGroup**，因为调用 onLayout() 是让 ViewGroup 的子控件分布好位置
  - onDraw()：绘制控件本身
  - onDrawChild()：**回调**每个子控件的 **onDraw**() 方法
- 优化自定义 View 的一般思路：
  - **减少冗余代码**，尤其是 onDraw() 里的代码，尽量**减少调用刷新方法的频率**
  - **避免在 onDraw() 里处理内存分配的逻辑**
  - 因为每次执行 requestLayout() 方法都是非常耗时的，所以最好自定义 ViewGroup 来执行，因为执行 ViewGroup 有 onLayout() 方法直接可以对子控件进行布局
  - **减少 View 的层级**，避免冗余复杂
- Android 画面卡顿的原因？
  - Android 系统每隔 16 ms 就会发出 VSYNC 信号，通知 UI 进行渲染，当渲染成功，也就是能达到 **60 fps**，就能让画面看起来流畅。所以每次渲染的计算操作都必须在 **16 ms** 内完成。如果渲染超时，也就是这一帧画面渲染时间超过 16 ms，垂直同步机制就会让显示器等待 GPU 完成栅格化渲染操作，这样就会让这一帧画面多停留了 16 ms 或者更多时间，这样就造成了画面停顿，也就是卡顿现象
- RecyclerView 的缓存机制与 ListView 的缓存机制有什么区别？
  - ListView 是**二层缓存**，缓存 View，**每次刷新都需要绑定数据，复用时候全部都要绑定数据，先缓存再使用**
  - RecyclerView 是**四级缓存**，**缓存 ViewHolder，ViewHolder 保存的是 View，不需要每次刷新都要绑定数据，直接使用即可，先复用再缓存**