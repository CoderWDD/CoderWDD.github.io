---
index : 3
title : Android基础之ViewModel
category:
  - AndroidBasics
  - Jetpack
tag :
  - Basics
---

## 好处

- `Activity`是只需从与之关联的一个或多个视图模型中获取相要的数据，而无须关心数据是来自缓存、数据库、网络请求还是其他的数据源，即`ViewModel`可以将`Activity`与`数据源`分离

- `ViewModel`生命周期更长，还能感知`Activity`的生命周期，这意味着，在诸如屏幕旋转等会导致`Activity`生命周期变化的操作时，`ViewModel`可以自动保存其中的数据，并贯彻`Activity`的整个生命周期，就能达到**避免重新加载数据**的效果
- `Activity`自身不应该执行异步调用，因为异步调用往往比较耗时，并且`Activity`必须对自身进行管理从而**避免内存泄漏的问题**，因此，将异步操作分离到各自的类中将使代码更加清晰，也能**避免**视图处理所有应用程序逻辑的**巨型`Activity`**

## 基本使用

### 引入依赖

依赖版本可以上[谷歌Android官网查看](https://developer.android.com/jetpack/androidx/releases/lifecycle?hl=zh-cn#kts)

```groovy
    dependencies {
        def lifecycle_version = "2.5.0-rc01"
        // ViewModel
        implementation "androidx.lifecycle:lifecycle-viewmodel-ktx:$lifecycle_version"
        // ViewModel utilities for Compose
        implementation "androidx.lifecycle:lifecycle-viewmodel-compose:$lifecycle_version"
    }
```

### 继承自`ViewModel`或`AndroidViewModel`

- 如何判断是该继承自`ViewModel`还是`AndroidViewModel`：

  - 当`ViewModel`需要用到`application context`时，则继承自`AndroidViewModel`，否则就继承自`ViewModel`

- 代码示例：

  ```kotlin
  // 根据MVVM的架构思想，应该是视图Activity调用这里的ViewModel获取需要的数据，而ViewModel则负责从各个不同的地方拿数据并打包好准备给Activity使用，如从数据库拿、从网络上请求等
  class MyViewModelClass(app: Application) : AndroidViewModel(app){
      // 在这里面写的东西，默认就会以ViewModel的生命周期保存了
  }
  ```

  