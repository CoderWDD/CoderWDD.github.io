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

##  在Compose中管理状态

- 引入：上面已经提到了状态提升，意味着你可以将状态交给上级处理，可随着要管理跟踪的状态数量增加，或者需要在状态改变的同时还要进行逻辑处理时，状态提升就不是一个方便的好方法了。此时，我们应该将逻辑和状态事务都委派给其他类，也即**状态容器**（**状态容器**用于管理可组合项的逻辑和状态，又称**提升的状态对象**）。

### 状态和逻辑类型

- 不同类型的状态：
  - **界面元素状态是界面元素的提升状态**。例如，[`ScaffoldState`](https://developer.android.com/reference/kotlin/androidx/compose/material/ScaffoldState) 用于处理 [`Scaffold`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Scaffold(androidx.compose.ui.Modifier,androidx.compose.material.ScaffoldState,kotlin.Function0,kotlin.Function0,kotlin.Function1,kotlin.Function0,androidx.compose.material.FabPosition,kotlin.Boolean,kotlin.Function1,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.ui.unit.Dp,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1)) 可组合项的状态。
  - **屏幕或界面状态是屏幕上需要显示的内容**。例如，`CartUiState` 类可以包含购物车中的商品信息、向用户显示的消息或加载标记。该状态通常会与层次结构中的其他层相关联，原因是其包含应用数据。
- 不同的逻辑类型：
  - **界面行为逻辑或界面逻辑与如何在屏幕上显示状态变化相关**。例如，导航逻辑决定着接下来显示哪个屏幕，界面逻辑决定着如何在可能会使用信息提示控件或消息框的屏幕上显示用户消息。界面行为逻辑应始终位于组合中。
  - **业务逻辑决定着如何处理状态变化**，例如如何付款或存储用户偏好设置。该逻辑通常位于业务层或数据层，但绝不会位于界面层。

### Compose 管理状态的几种方式

- **可组合项**：用于管理简单的界面元素状态
- **状态容器**：用于管理复杂的界面元素状态，且可以拥有界面元素的状态和界面逻辑。**可以组合使用**，也就是说，可以将某个状态容器集成到其他状态容器中
- **[架构组件 ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel)**：一种特殊的状态容器类型，用于提供对业务逻辑以及屏幕或界面状态的访问权限。

![state-dependencies](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/state-dependencies.svg)

#### 将可组合项作为可信源：

当状态比较简单时，可以直接在可组合项中使用界面逻辑和界面元素状态

```kotlin
@Composable
fun MyApp() {
    MyTheme {
        val scaffoldState = rememberScaffoldState()
        val coroutineScope = rememberCoroutineScope()

        Scaffold(scaffoldState = scaffoldState) {
            MyContent(
                showSnackbar = { message ->
                    coroutineScope.launch {
                        scaffoldState.snackbarHostState.showSnackbar(message)
                    }
                }
            )
        }
    }
}
```

#### 将状态容器作为可信源：

当状态涉及多个界面元素、复杂逻辑时，就应将相应的事务委派给状态容器

- 注意：

  - 该方法支持[分离关注点原则](https://en.wikipedia.org/wiki/Separation_of_concerns)：**可组合项负责发出界面元素，而状态容器包含界面逻辑和界面元素的状态**。
  - 状态容器是可在组合中创建和保存的普通类。状态容器遵循[可组合项的生命周期](https://developer.android.com/jetpack/compose/lifecycle)，因此可以采用 Compose 依赖项。
  - 如果状态容器包含要在重新创建 Activity 或进程后保留的状态，请使用 `rememberSaveable` 并为其创建自定义 `Saver`。

- 示例：

  ```kotlin
  // Plain class that manages App's UI logic and UI elements' state
  class MyAppState(
      val scaffoldState: ScaffoldState,
      val navController: NavHostController,
      private val resources: Resources,
      /* ... */
  ) {
      val bottomBarTabs = /* State */
  
      // Logic to decide when to show the bottom bar
      val shouldShowBottomBar: Boolean
          get() = /* ... */
  
      // Navigation logic, which is a type of UI logic
      fun navigateToBottomBarRoute(route: String) { /* ... */ }
  
      // Show snackbar using Resources
      fun showSnackbar(message: String) { /* ... */ }
  }
  
  @Composable
  fun rememberMyAppState(
      scaffoldState: ScaffoldState = rememberScaffoldState(),
      navController: NavHostController = rememberNavController(),
      resources: Resources = LocalContext.current.resources,
      /* ... */
  ) = remember(scaffoldState, navController, resources, /* ... */) {
      MyAppState(scaffoldState, navController, resources, /* ... */)
  }
  ```

  `MyAppState` 采用的是依赖项，因此最好提供可记住组合中 `MyAppState` 实例的方法。在上面的示例中为 `rememberMyAppState` 函数。

  现在，`MyApp` 侧重于发出界面元素，并将所有界面逻辑和界面元素的状态委派给 `MyAppState`：

  ```kotlin
  @Composable
  fun MyApp() {
      MyTheme {
          val myAppState = rememberMyAppState()
          Scaffold(
              scaffoldState = myAppState.scaffoldState,
              bottomBar = {
                  if (myAppState.shouldShowBottomBar) {
                      BottomBar(
                          tabs = myAppState.bottomBarTabs,
                          navigateToRoute = {
                              myAppState.navigateToBottomBarRoute(it)
                          }
                      )
                  }
              }
          ) {
              NavHost(navController = myAppState.navController, "initial") { /* ... */ }
          }
      }
  }
  ```

  从上面的代码中，可以知道，**增加可组合项的责任会增加对状态容器的需求**。这些责任可能存在于界面逻辑中，也可能仅与要跟踪的状态数相关。

#### 将 ViewModel 作为可信源

-  **ViewModel 是一种特殊的状态容器类型**，其负责：
  - 提供对应用的业务逻辑的访问权限，该逻辑通常位于层次结构的其他层（例如业务层和数据层）中；
  - 在特定屏幕上呈现的应用数据，这些数据会成为屏幕或界面状态。

- 注意：
  - **ViewModel 的生命周期比组合长**，原因是它们在配置发生变化后仍然有效。ViewModel 的生命周期较长，因此不应保留对绑定到组合生命周期的状态的长期引用。否则，可能会导致内存泄漏。
  - 建议**屏幕级可组合项**使用 ViewModel 实例来提供对业务逻辑的访问权限并作为界面状态的可信来源。
  - **不要**将 ViewModel 实例向下传递到其他可组合项。
  - 如果 ViewModel 包含要在进程重新创建后保留的状态，请使用 [`SavedStateHandle`](https://developer.android.com/topic/libraries/architecture/viewmodel-savedstate) 保留该状态。

- 以下是在屏幕级可组合项中使用 ViewModel 的示例：

  ```kotlin
  data class ExampleUiState(
      val dataToDisplayOnScreen: List<Example> = emptyList(),
      val userMessages: List<Message> = emptyList(),
      val loading: Boolean = false
  )
  
  class ExampleViewModel(
      private val repository: MyRepository,
      private val savedState: SavedStateHandle
  ) : ViewModel() {
  
      var uiState by mutableStateOf(ExampleUiState())
          private set
  
      // Business logic
      fun somethingRelatedToBusinessLogic() { /* ... */ }
  }
  
  @Composable
  fun ExampleScreen(viewModel: ExampleViewModel = viewModel()) {
  
      val uiState = viewModel.uiState
      /* ... */
  
      ExampleReusableComponent(
          someData = uiState.dataToDisplayOnScreen,
          onDoSomething = { viewModel.somethingRelatedToBusinessLogic() }
      )
  }
  
  @Composable
  fun ExampleReusableComponent(someData: Any, onDoSomething: () -> Unit) {
      /* ... */
      Button(onClick = onDoSomething) {
          Text("Do something")
      }
  }
  ```

### ViewModel和状态容器

- ViewModel 优势：
  - 与 [Navigation](https://developer.android.com/jetpack/compose/navigation) 集成：
    - 当屏幕位于返回堆栈中时，Navigation 会缓存 ViewModel。这对在返回目标位置时即时提供之前加载的数据非常重要。使用遵循可组合项屏幕的生命周期的状态容器时，这种情况会更难处理。
    - 当目标位置从返回堆栈弹出后，ViewModel 也会被一并清除，以确保自动清理状态。这不同于监听可组合项的处理，监听的原因可能有多种，例如转到新屏幕、配置发生变化等。
  - 与其他 Jetpack 库集成。

- 重点：**ViewModel 只是状态容器的实现细节，它负有特定的责任。如果您想让项目模块脱离 Android 依赖项，可以依赖接口在不同环境中使实现可替换：在 Android 特有的模块中使用 ViewModel，而在其他模块中使用更简单的实现。**

- 说明：由于状态容器可组合，且 ViewModel 与普通状态容器的责任不同，因此**屏幕级可组合项可以既有**一个 ViewModel 来提供对业务逻辑的访问权限，又有一个状态容器来管理其界面逻辑和界面元素状态。由于 ViewModel 的生命周期比状态容器长，因此状态容器可以根据需要将 ViewModel 视为依赖项。

- 下面的代码展示了在 `ExampleScreen` 上协同工作的 ViewModel 和普通状态容器：

  ```kotlin
  class ExampleState(
      val lazyListState: LazyListState,
      private val resources: Resources,
      private val expandedItems: List<Item> = emptyList()
  ) {
      fun isExpandedItem(item: Item): Boolean = TODO()
      /* ... */
  }
  
  @Composable
  fun rememberExampleState(/* ... */): ExampleState { TODO() }
  
  @Composable
  fun ExampleScreen(viewModel: ExampleViewModel = viewModel()) {
  
      val uiState = viewModel.uiState
      val exampleState = rememberExampleState()
  
      LazyColumn(state = exampleState.lazyListState) {
          items(uiState.dataToDisplayOnScreen) { item ->
              if (exampleState.isExpandedItem(item)) {
                  /* ... */
              }
              /* ... */
          }
      }
  }
  ```

## 总结

- Compose 中，如果某个可组合项有状态需要处理，则需要将其按照上面的划分进行管理，否则可能会导致其结果不可预期

## 参考资料

- [官方文档](https://developer.android.com/jetpack/compose/state#managing-state)
- 《Jetpack Compose》---- 朱江