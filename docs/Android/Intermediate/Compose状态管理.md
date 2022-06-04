---
index : 4
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
title : Compose状态管理
---

## Compose中的状态

- 状态：指可以随时间变化的任何值，比如网络中获取的值、数据库中的值、类中的变量等

- 相关概念：
  - 组合：用于描述界面，通过运行可组合项来生成，也是树的结构
  - 初始组合：通过首次运行可组合项创建组合
  - 重组：在数据发生变化时重新运行可组合项以更新组合

- Compose工作的基本流程：值得注意的是，组合只能通过初始组合生成且只能通过重组进行更新。

  - 在 **初始组合** 期间，Compose 跟踪为了描述界面而调用的可组合项；
  - 当应用程序的 **状态发生变化** 时，Compose 会安排**重组**
  - 重组过程中会运行可能已经更改的可组合项来响应状态变化，然后 Compose 会 **更新组合** 以反映所有更改

- 引入示例：

  ```kotlin
  @Composable
  fun TestStatus(){
      Column (modifier = Modifier.fillMaxSize()){
          var cnt = 0
          Button(onClick = {
              cnt++
              Log.e("CoderWdd", "TestStatus: $cnt")
          }){
              Text("Add")
          }
          Text("$cnt", fontSize = 30.sp)
      }
  }
  ```

  对于上述代码，如果点击按钮，数字 `cnt` 不能像预期一样正常增加，原因是，**修改组合的唯一方式是重组**，但是上面的代码并不能触发 Compose 执行重组。下面将继续介绍如何触发 Compose 执行重组。

### 可组合项中的状态

- 引入：从上面的示例中，我们如果需要使用 cnt 来保持应该显示的值，则需要使用 `remember{mutableStateOf()}` 传入 cnt 变量的默认值，这样就可以让 cnt 的状态/值改变时，对应的 Text 显示的值跟着变化

- 如何更改：

  - `remember`：可组合项可用于记住单个对象

  - `mutableStateOf`：会创建可观察的 `MutableState<T>`

    ```kotlin
    interface MutableState<T> : State<T> {
        override var value: T
    }
    ```

    - 注意：
      - `value` 如有任何更改，系统会安排重组读取 `value` 的所有可组合函数。对于 `ExpandingCard`，每当 `expanded` 发生变化时，都会导致重组 `ExpandingCard`。
      - 在可组合项中声明 `MutableState` 对象的方法有三种：三种方法都是等效的
        - `val mutableState = remember { mutableStateOf(default) }`
        - `var value by remember { mutableStateOf(default) }`
        - `val (value, setValue) = remember { mutableStateOf(default) }`

- 更改后的代码：

  ```kotlin
  @Preview
  @Composable
  fun TestStatus(){
      Column (
          modifier = Modifier.fillMaxSize(),
          verticalArrangement = Arrangement.Center,
          horizontalAlignment = Alignment.CenterHorizontally
      ){
          val cnt = remember { mutableStateOf(0) }
          Button(onClick = {
              cnt.value++
              Log.e("CoderWdd", "TestStatus: ${cnt.value}")
          }){
              Text("Add")
          }
          Text("${cnt.value}", fontSize = 30.sp)
      }
  }
  ```

  上述系统的`remember`可用于记住单个对象，系统会在初始组合期间将由`remember`计算的值存储在组合中，并在重组期间返回存储的值。`remember` **可以存储可变对象和不可变对象**。`mutableStateOf`会创建`MutableState<T>`（`MutableState<T>` 是 Compose 中的可观察类型），**在`MutableState`的值有任何更改的情况下，系统会安排重组以读取此值的所有可组合函数，以实现重组。**

- **注意**：
  - `remember` 会将对象存储在组合中，当调用 `remember` 的可组合项从组合中移除后，它会忘记该对象。
  - 如果为使用`remember`的情况下使用`mutableStateOf`，每次重组可组合项的时候，系统都会将状态重新初始化为默认值
  - 虽然`remember`可在重组后保持状态，但这种能力是有限的，其不会在配置更改后保持状态，比如屏幕旋转等都会使得其状态丢失，从而被重新初始化为默认值，应当这种场景，就需要用到`rememberSaveable`（rememberSaveable 会自动保存可保存在 **Bundle** 中的任何值，对于其它值，则需要经过序列化后进行保存，其作用类似于 Activity 中的 onSaveInstanceState 方法）

## 其他支持的状态类型

- Compose 不只有 `MutableState<T>` 一种存储状态的方式，事实上，只要是 `State<T>` 类型的，Compose 都可以在其状态发生变化时自动重组界面
- Compose 自带的可以根据 Android 应用中使用的常见可观察类型创建 `State<T>` 的函数有：
  - LiveData
  - Flow
  - RxJava2

- 如何自定义 `State<T>` 类型：
  - 可以使用构建扩展函数的方法，使得 Compose 可以读取其他自定义可观察类型，具体操作，可以参考[内置函数](https://developer.android.com/reference/kotlin/androidx/compose/runtime/State)的实现

## 状态提升

- 引入：由上面的介绍，已经知道， `remember`可以使组合型有状态，但是，具有内部状态的可组合项往往不易重复使用，也更能测试，因此，此时就需要引入一个`无状态可组合项`的概念，即不保持任何状态的可组合项，而实现这种无状态可组合项的一种简易方法就是[状态提升](https://developer.android.com/jetpack/compose/state#state-hoisting)

- 定义：**状态提升是一种编程模式**。是一种将状态移至可组合项的调用方以使可组合项保持无状态的模式（即将状态上交）。
- 作用：可以使当前可组合项保持无状态，使得代码容易测试，代码复用也更便捷
- 实现方式：**参数替换**，即将状态变量替换为两个参数（用 value 表示值，用 lambda 表示事件），例如：
  - **`value: T`**：要显示的当前的值
  - **`onIndexChange: (T) -> Unit`**：请求更改值的事件，其中 `T` 是建议的新值

- 调用实例：

  ```kotlin
  
  @Composable
  fun CallTestStatus(){
      val index = rememberSaveable{mutableStateOf(0)}
      TestStatus(index.value){ index.value = it}
      
  }
  
  @Composable
  fun TestStatus(index: Int,onIndexChange: (Int) -> Unit){
      Column (
          modifier = Modifier.fillMaxSize(),
          verticalArrangement = Arrangement.Center,
          horizontalAlignment = Alignment.CenterHorizontally
      ){
          Button(onClick = {
              onIndexChange(index + 1)
              Log.e("CoderWdd", "TestStatus: ${index}")
          }){
              Text("Add")
          }
          Text("${index}", fontSize = 30.sp)
      }
  }
  ```

  从上面的代码可以看出，对于当前可组合项，只是将其状态交给其上级进行处理而已，且可以同时可以定义上交多个状态

- 提升状态的重要属性/性质：
  - **单一可惜来源**：通过移动状态，而不是复制状态，我们可确保只有一个可信来源。这有助于避免 bug。
  - **封装**：只有有状态可组合项能够修改其状态。这完全是内部的。
  - **可共享**：可与多个可组合项共享提升的状态。如果想在另一个可组合项中执行 `name` 操作，可以通过变量提升来做到这一点。
  - **可拦截**：无状态可组合项的**调用方**可以在更改状态之前决定忽略或修改事件。
  - **解耦**：无状态 `ExpandingCard` 的状态可以存储在任何位置。例如，现在可以将上述代码中的 `index` 移入 `ViewModel`。

- 提升状态的原则：
  - 状态应至少提升到使用该状态（读取）的所有可组合项的**最低共同父项**。
  - 状态应至少提升到**它可以发生变化（写入）的最高级别**。
  - 如果**两种状态发生变化以响应相同的事件**，它们应**一起提升**。

## 恢复状态

- 问题：在例如屏幕旋转等导致 activity 或进程重新创建时，界面的状态如何恢复
- 解决：可以使用 [`rememberSaveable`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/package-summary#rememberSaveable(kotlin.Array,androidx.compose.runtime.saveable.Saver,kotlin.String,kotlin.Function0)) 恢复界面状态
- 原理：`rememberSaveable` 可以在重组后保持状态，也可以在重新创建 activity 和进程后保持状态。（rememberSaveable 会自动保存可保存在 **Bundle** 中的任何值，对于其它值，则需要经过序列化后进行保存，其作用类似于 Activity 中的 onSaveInstanceState 方法）

## 存储状态

- 对于能存储在 **Bundle** 中的数据类型都会自动保存，如果不能存储进 **Bundle** 则需要进行序列后，以下提供几种方式

### Parcelize

最简单的解决方案是向对象添加 `@Parcelize` 注解。对象将变为可打包状态并且可以捆绑。例如，以下代码会创建可打包的 `City` 数据类型并将其保存到状态。

```kotlin
@Parcelize
data class City(val name: String, val country: String) : Parcelable

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable {
        mutableStateOf(City("Madrid", "Spain"))
    }
}
```

### MapSaver

如果某种原因导致 `@Parcelize` 不合适，您可以使用 `mapSaver` 定义自己的规则，规定如何将对象转换为系统可保存到 `Bundle` 的一组值。

```kotlin
data class City(val name: String, val country: String)

val CitySaver = run {
    val nameKey = "Name"
    val countryKey = "Country"
    mapSaver(
        save = { mapOf(nameKey to it.name, countryKey to it.country) },
        restore = { City(it[nameKey] as String, it[countryKey] as String) }
    )
}

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable(stateSaver = CitySaver) {
        mutableStateOf(City("Madrid", "Spain"))
    }
}
```

### ListSaver

为了避免需要为映射定义键，您也可以使用 `listSaver` 并将其索引用作键：

```kotlin
data class City(val name: String, val country: String)

val CitySaver = listSaver<City, Any>(
    save = { listOf(it.name, it.country) },
    restore = { City(it[0] as String, it[1] as String) }
)

@Composable
fun CityScreen() {
    var selectedCity = rememberSaveable(stateSaver = CitySaver) {
        mutableStateOf(City("Madrid", "Spain"))
    }
}
```