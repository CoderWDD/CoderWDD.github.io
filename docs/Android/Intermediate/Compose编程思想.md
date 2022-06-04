---
index : 3
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
title : Compose编程思想
---

## 声明式编程

### 传统编程模式

Android 传统视图的层次结构一直可以表示为**界面组件树**，但当界面的层次结构需要更新显示数据时，就需要利用类似`findViewById` 的方式遍历整棵组件树，并通过调用需要更新的组件的方法进行修改其状态与内容。

``` java
button.setText("button")
```

从上面的描述与代码的示例，不能知道，传统的编程模式，需要手动操纵视图，且每次都要遍历组件树，容易出错、效率不高

### 声明式编程模式

声明式界面模型的工作原理是在概念上从头开始重新生成整个屏幕，然后对有需要更改的组件进行局部执行刷新，因此可以避免手动更新状态视图层次结构的复杂性。`Compose`就是一个声明性界面框架

## 可组合函数

- 作用：通过可组合函数，可以便捷得构建起界面

- 注意点：

  - 可组合函数，需要用 `@Composable` 注解，以告诉编译器此函数用于将数据转换为**界面/组件**
  - 此函数可以接收参数
  - 此函数不能返回任何内容，因为此类函数的作用是用于描述所需的屏幕状态，不需要有返回值
  - 不要在该函数中直接进行耗时操作，而应该将其交给**后台协程**，因为此类函数可能会被高速调用执行，如果被阻塞，就会导致崩溃
    - 耗时操作（也称**附带效应**）如：
      - 更新 `ViewModel` 中的可观察项
      - 更新操作 `SharedPreferences`

- 示例：

  ```kotlin
  @Composable
  fun Greeting(name: String) {
      Text(text = "Hello $name!")
  }
  ```

## 重组

- 什么是重组：当状态发生变化时，系统会使用新数据再次调用可组合函数，从而导致重新绘制界面元素，此过程称为“重组”。

- 在往下学习之前，需要先明白`Compose`中对于数据和交互事件的传递原则：

  - Data（数据）：

    ![mmodel-flow-data](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/mmodel-flow-data.png)

  - Event（交互事件）：

    ![QQ图片20220604173854](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/QQ%E5%9B%BE%E7%89%8720220604173854.png)

## 智能重组

- 意义：Compose 框架可以智能地**仅**重组已更改的组件，从而跳过所有未更改参数的函数或lambda，进而实现高效地重组

### 组件按任何顺序运行

- 含义：如果某个可组合函数包含对其他可组合函数的调用，这些函数可以按**任何顺序运行**。Compose 会自动识别不同组件元素的优先级，并优先执行优先级高的部分

- 示例：

  ```kotlin
  @Composable
  fun Button() {
      MyFancyNavigation {
          StartScreen()
          MiddleScreen()
          EndScreen()
      }
  }
  ```

  上面的`StartScreen`、`MiddleScreen` 和 `EndScreen` 的调用可以按任何顺序进行。

- 注意：
  - 因为每个可组合函数的执行顺序不是顺序的，所以，这意味着不同的可组合函数之间不能有依赖关系，否则可能出现A依赖B，但A先被执行的情况，导致报错。换句话说，**应该让每个此类函数保持独立**

### 组件可以并行运行

- 分析：从 `组件可以按任何顺序运行` 中，我们已经知道，每个可组合函数，都应该保持独立性，所以其调用顺序和调用时机不会影响程序的正常运行，因此，为了提高程序的运行效率，Compose支持**通过并行的方式**来运行各个可组合函数，从而充分利用CPU的**多个核心**来提升运行效率和用户体验。
- 注意：
  - Compose通过并行的方式实现的优化，意味着，可组合函数是**可以并可能会在后台的线程池中被执行**的，从而会导致，如果一个可组合函数 A 调用了另一个函数 B ，则意味着函数 B ，**可能会在不同的线程中被执行**
  - 调用某个可组合函数时，**其调用可能发生在与调用方不同的线程上**，这意味着，我们应该避免使用会修改可组合 lambda 中的变量的代码，既因为此类代码并非线程安全的代码，也因为它是可组合 lambda 不允许的附带效应

- 示例：

  ```kotlin
  @Composable
  fun ListComposable(myList: List<String>) {
      Row(horizontalArrangement = Arrangement.SpaceBetween) {
          Column {
              for (item in myList) {
                  Text("Item: $item")
              }
          }
          Text("Count: ${myList.size}")
      }
  }
  ```

  上述代码就是合格的，能正确地将输入的列表转换成界面组件显示。

  ```kotlin
  @Composable
  @Deprecated("Example with bug")
  fun ListWithBug(myList: List<String>) {
      var items = 0
  
      Row(horizontalArrangement = Arrangement.SpaceBetween) {
          Column {
              for (item in myList) {
                  Text("Item: $item")
                  items++ // 会对局部变量items进行修改，即产生了附带效应，是不合格的
              }
          }
          Text("Count: $items")
      }
  }
  ```

  上述的代码中第十行，在该函数每次被重组的时候，都会修改`items`的值。因为可组合函数可能会在每一帧中都被调用并重绘，则该变量显示的结果，可能不是预期范围内的。因此，Compose 直接就不支持上述的这种写入操作，也正是通过直接禁止此类的写入操作，我们允许框架更改线程以执行可组合 lambda

### 重组会跳过尽可能多的内容

- 含义：正如上面所提及的，Compose 进行重组时，是**智能重组**，即如果界面中的某些组件或元素状态没有改变，不需要更新，则 Compose 会尽量地跳过对其的更新重组，只更新重组那些必要的部分，也即每个可组合函数和 lambda 都可以自行重组

- 示例：

  ```kotlin
  /**
   * Display a list of names the user can click with a header
   */
  @Composable
  fun NamePicker(
      header: String,
      names: List<String>,
      onNameClicked: (String) -> Unit
  ) {
      Column {
          // this will recompose when [header] changes, but not when [names] changes
          Text(header, style = MaterialTheme.typography.h5)
          Divider()
  
          // LazyColumn is the Compose version of a RecyclerView.
          // The lambda passed to items() is similar to a RecyclerView.ViewHolder.
          LazyColumn {
              items(names) { name ->
                  // When an item's [name] updates, the adapter for that item
                  // will recompose. This will not recompose when [header] changes
                  NamePickerItem(name, onNameClicked)
              }
          }
      }
  }
  
  /**
   * Display a single name the user can click.
   */
  @Composable
  private fun NamePickerItem(name: String, onClicked: (String) -> Unit) {
      Text(name, Modifier.clickable(onClick = { onClicked(name) }))
  }
  ```

  上述代码中，当 `header` 发生更改时，Compose 可能会跳至 `Column` lambda，而不执行它的任何父项。此外，执行 `Column` 时，如果 `names` 未更改，Compose 可能会选择跳过 `LazyColumn` 的项。

- 注意：同样，执行所有可组合函数或 lambda 都应该没有附带效应，**如果真的需要执行附带效应时，应通过回调触发**

### 重组是乐观的操作

- 含义：只要 Compose 认为某个可组合项的参数**可能已更改，就会开始重组**。重组是乐观的操作，也就是说，Compose 预计会在参数再次更改之前完成重组。**如果某个参数在重组完成之前发生更改，Compose 可能会取消重组，并使用新参数重新开始。**

- 注意：
  - 所有的可执行函数或 lambda 都应该没有附带效应，因为当取消重组后，Compose 会从重组中舍弃界面树。如果有任何附带效应依赖于显示的界面，则即使取消了组成操作，也会应用该附带效应（即**其修改已经造成，且不会自动撤销**）。这可能会导致应用状态不一致。

### 可组合函数可能会被非常频繁地运行

- 在某些情况下，可能会针对界面动画的每一帧运行一个可组合函数。如果该函数执行成本高昂的操作（例如从设备存储空间读取数据），可能会导致界面卡顿。

- 因此，如果您的可组合函数需要数据，它应为相应的数据定义参数。然后，您可以将成本高昂的工作移至组成操作线程之外的其他线程，并使用 `mutableStateOf` 或 `LiveData` 将相应的数据传递给 Compose。
