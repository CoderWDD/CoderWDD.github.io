---
index : 4
title : Android基础之LiveData
category:
  - AndroidBasics
  - Jetpack
tag :
  - Basics
---

## 好处

- `LiveData`可以感知生命周期，因此`Activity`**不需要手动处理生命周期**，它只需简单地观察`LiveData`即可，这样可以确保不向那些不处于活跃状态的消费者发送数据，一旦发送就会导致应用崩溃，即**不会因为`Activity`停止而导致崩溃**
- 只要`Activity`处于活跃状态，**数据**就会**自动**更新以**保证**其内容为**最新**。例如：当配置发生改变后，`Activity`就会立即接收到最新的数据，且不会更新那些处于后台或者那些为了回收内存而被Android销毁了的`Activity`
- `LiveData`会使其所有观察者在他们的生命周期被销毁时自动执行清理工作，从而**防止内容泄漏**

## 基本使用

### 引入依赖

```groovy
    dependencies {
        val lifecycle_version = "2.5.0-rc01"
        val arch_version = "2.1.0"
        // LiveData
        implementation("androidx.lifecycle:lifecycle-livedata-ktx:$lifecycle_version")
        // Lifecycles only (without ViewModel or LiveData)
        implementation("androidx.lifecycle:lifecycle-runtime-ktx:$lifecycle_version")
    }
```

### 代码示例

- 创建`LiveData`对象：

  ```kotlin
  class NameViewModel : ViewModel() {
  
      // Create a LiveData with a String
      val currentName: MutableLiveData<String> by lazy {
          MutableLiveData<String>()
      }
  
      // Rest of the ViewModel...
  }
  ```

  从上面可以看到，`LiveData`对象中的数据并未经过设置

- 观察`LiveData`对象：

  ```kotlin
  class NameActivity : AppCompatActivity() {
      // Use the 'by viewModels()' Kotlin property delegate
      // from the activity-ktx artifact
      private val model: NameViewModel by viewModels()
  
      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
  
          // Other code to setup the activity...
  
          // Create the observer which updates the UI.
          val nameObserver = Observer<String> { newName ->
              // Update the UI, in this case, a TextView.
              nameTextView.text = newName
          }
  
          // Observe the LiveData, passing in this activity as the LifecycleOwner and the observer.
          model.currentName.observe(this, nameObserver)
      }
  }
  ```

  在传递 `nameObserver` 参数的情况下调用 `observe()`后，系统会立即调用 `onChanged()`，从而提供 `mCurrentName` 中存储的最新值。如果 `LiveData` 对象尚未在 `mCurrentName` 中设置值，则不会调用 `onChanged()`。

- 更新`LiveData`对象：

  ```kotlin
  button.setOnClickListener {
      val anotherName = "John Doe"
      model.currentName.setValue(anotherName)
  }
  ```

  

## 参考资料：

- [官方文档关于LiveData](https://developer.android.com/topic/libraries/architecture/livedata?hl=zh-cn#work_livedata)
