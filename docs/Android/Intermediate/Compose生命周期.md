---
index : 5
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
title : Compose生命周期
---

## 引入

- 一个组合将描述应用的界面，并通过运行可组合项来生成。组合是描述界面的可组合项的**树结构**。
- 当 Jetpack Compose 首次运行可组合项时，在初始组合期间，它将跟踪您为了描述组合中的界面而调用的可组合项。然后，当应用的状态发生变化时，Jetpack Compose 会安排重组。**重组是指 Jetpack Compose 重新执行可能因状态更改而更改的可组合项，然后更新组合以反映所有更改。**
- 组合只能通过初始组合生成且只能通过重组进行更新。**重组是修改组合的唯一方式。**

## 可组合项的生命周期

- 生命周期：
  - 进入组合
  - 执行 0 次或多次重组
  - 退出组合。

![lifecycle-composition](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/lifecycle-composition.png)

- 注意：可组合项的生命周期比视图、activity 和 fragment 的生命周期更简单。

- 什么时候会触发重组？
  - 重组通常由对 `State<T>` 对象的更改触发。

- 如果某一可组合项多次被调用，在组合中将放置多个实例。每次调用在组合中都有自己的生命周期：

  ```kotlin
  @Composable
  fun MyComposable() {
      Column {
          Text("Hello")
          Text("World")
      }
  }
  ```

  上述代码在组合中的表示图如下：

  ![lifecycle-hierarchy](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/lifecycle-hierarchy.png)

  从上图可以看出，`Text()`可组合项被多次调用了，在其所在的组合中，就会放置多个对应的`Text`实例

## 可组合项的剖析

- 基本概念：组合中可组合项的实例由其**调用点**进行标识，即可组合项的区分与标识，是由调用该可组合项的地方进行操作的。因此，从多个调用站点调用可组合项会在组合中创建多个可组合项实例。
  - **调用点**是调用可组合项的源代码位置。这会影响其在组合中的位置，因此会影响界面树。

- 注意：在重组期间，Compose 将**确定调用或未调用的可组合项**，对于在组合中其输入未更改的可组合项，Compose 将**避免重组这些可组合项**。因此，保留身份对于将附带效应与可组合项相关联十分重要，这样它们才能成功完成，而不是每次重组时都重新启动。

- 示例：

  ```kotlin
  @Composable
  fun LoginScreen(showError: Boolean) {
      if (showError) {
          LoginError()
      }
      LoginInput() // This call site affects where LoginInput is placed in Composition
  }
  
  @Composable
  fun LoginInput() { /* ... */ }
  ```

  在上面的代码段中，`LoginScreen` 将有条件地调用 `LoginError` 可组合项，并始终调用 `LoginInput` 可组合项。每个调用都有唯一的调用点和源位置，编译器将使用它们对调用进行唯一识别。

  ![lifecycle-showerror](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/lifecycle-showerror.png)

  注：颜色相同，表示尚未重组。

### 添加额外信息促进智能重组

- 使用执行顺序来区分实例：上面已经知道 Compose 可以用调用点来区分标识各个可组合项，但如果从同一个调用点多次调用某个可组合项，Compose 就无法唯一标识对该可组合项的每次调用，因此除了调用点之外，还可以使用执行顺序来区分实例，如下示例

  ```kotlin
  @Composable
  fun MoviesScreen(movies: List<Movie>) {
      Column {
          for (movie in movies) {
              // MovieOverview composables are placed in Composition given its
              // index position in the for loop
              MovieOverview(movie)
          }
      }
  }
  ```

  在上面的示例中，Compose 除了使用调用点之外，还使用执行顺序来区分组合中的实例。如果列表底部新增了一个 `movie`，Compose 可以重复使用组合中既有的实例，因为这些实例在列表中的位置没有发生变化，因此这些实例的 `movie` 输入是相同的。

  其在组合中的表示图为：

  ![lifecycle-newelement-bottom](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/lifecycle-newelement-bottom.png)

  注：颜色相同，表示尚未重组。

- 添加额外信息来区分实例：上面的代码中，新的实例是添加在列表末尾，才能复用其前面的可组合项，但如果在列表顶部或中间新增内容，移除项目或对项目进行重新排序而导致 `movies` 列表发生改变，将导致输入参数在列表中的位置已更改的所有 `MovieOverview` 调用发生重组，

  ```kotlin
  @Composable
  fun MovieOverview(movie: Movie) {
      Column {
          // Side effect explained later in the docs. If MovieOverview
          // recomposes, while fetching the image is in progress,
          // it is cancelled and restarted.
          val image = loadNetworkImage(movie.url)
          MovieHeader(image)
  
          /* ... */
      }
  }
  ```

  其在组合中的表示图为：

  ![lifecycle-newelement-top-all-recompose](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/lifecycle-newelement-top-all-recompose.png)

  注：上述 `MovieOverview` 颜色发生改变，表示其发生重组，与原来的实例不同

  显然，这不是我们想要的结果，我们要的，是只对那些真正发生了改变的可组合项进行重组，而不是其位置发生改变了也要进行重组。所以，我们可以给可组合项添加额外信息 `key` 来作为标识，当 `key` 值没改变时，即使其位置发生了改变，也不会进行重组，其示例代码如下：

  ```kotlin
  @Composable
  fun MoviesScreen(movies: List<Movie>) {
      Column {
          for (movie in movies) {
              key(movie.id) { // Unique ID for this movie
                  MovieOverview(movie)
              }
          }
      }
  }
  ```

  注：**`key` 的值不必是全局唯一的，只需要在调用点处调用可组合项的作用域内确保其唯一性即可。**在此示例中，每个 `movie` 都需要一个在 `movies` 的作用域内具有唯一性的 `key`；movie 也可以与应用中其他位置的其他可组合项共享该 `key`。

  上述代码在组合中的表示图为：

  ![lifecycle-newelement-top-keys](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/lifecycle-newelement-top-keys.png)
  
  向列表中添加新元素后，组合中 `MoviesScreen` 的表示。由于 `MovieOverview` 可组合项具有唯一键，因此 Compose 会识别未更改的 `MovieOverview` 实例，并且可重复使用它们

### 如果输入未更改，则跳过

- 如果组合中已有可组合项，当所有输入都处于**稳定状态**且没有变化时，可以跳过重组。（如果所有输入都稳定并且没有更改，Compose 将跳过重组可组合项。**比较使用了 `equals` 方法**。）
- 稳定状态必须符合以下规定：
  - 对于相同的两个实例，其 `equals` 的结果将始终相同。
  - 如果类型的某个公共属性发生变化，组合将收到通知。
  - 所有公共属性类型也都是稳定。

- 以下是一些常用的稳定通用类型：即使未使用 `@Stable` 注解来显式标记为稳定的类型，Compose 编译器也会将其视为稳定的类型，因为它们是不可变的
  - 所有基元值类型：`Boolean`、`Int`、`Long`、`Float`、`Char` 等。
  - 字符串
  - 所有函数类型 (lambda)

- Compose 的 `MutableState` 类型是一种众所周知稳定但可变的类型。如果 `MutableState` 中保留了值，状态对象整体会被视为稳定对象，因为 `State` 的 `.value` 属性如有任何更改，Compose 就会收到通知。

- 当作为参数传递到可组合项的所有类型都很稳定时，系统会根据可组合项在界面树中的位置来比较参数值，以确保相等性。如果所有值自上次调用后未发生变化，则会跳过重组。

- Compose 仅在可以证明稳定的情况下才会认为类型是稳定的。例如，接口通常被视为不稳定类型，并且具有可变公共属性的类型（实现可能不可变）的类型也被视为不稳定类型。

- 如果 Compose 无法推断类型是否稳定，但您想强制 Compose 将其视为稳定类型，请使用 [`@Stable`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/Stable) 注解对其进行标记。

  ```kotlin
  // Marking the type as stable to favor skipping and smart recompositions.
  @Stable
  interface UiState<T : Result<T>> {
      val value: T?
      val exception: Throwable?
  
      val hasError: Boolean
          get() = exception != null
  }
  ```

  在上面的代码段中，由于 `UiState` 是接口，因此 Compose 通常认为此类型不稳定。通过添加 `@Stable` 注解，您可以告知 Compose 此类型稳定，让 Compose 优先选择智能重组。这也意味着，如果将该接口用作参数类型，Compose 会将其所有实现视为稳定。

  **注：如果 Compose 无法推断某个类型的稳定性，请为该类型添加 `@Stable` 注解，让 Compose 优先选择智能重组。**

## 状态与效应用例

### LaunchedEffect：在某个可组合项的作用域内运行挂起函数

- 使用场合：当需要在可组合项内安全调用挂起函数时，可以使用[`LaunchedEffect`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#LaunchedEffect(kotlin.Any,kotlin.coroutines.SuspendFunction1))

- 原理：当 `LaunchedEffect` 进入组合时，它会启动一个协程，并将代码块作为参数传递。如果 `LaunchedEffect` 退出组合，协程将取消。如果使用不同的键重组 `LaunchedEffect`，系统将取消现有协程，并在新的协程中启动新的挂起函数。

- 例如，在 [`Scaffold`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Scaffold(androidx.compose.ui.Modifier,androidx.compose.material.ScaffoldState,kotlin.Function0,kotlin.Function0,kotlin.Function1,kotlin.Function0,androidx.compose.material.FabPosition,kotlin.Boolean,kotlin.Function1,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.ui.unit.Dp,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function1)) 中显示 [`Snackbar`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Snackbar(androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Boolean,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.Dp,kotlin.Function0)) 是通过 [`SnackbarHostState.showSnackbar`](https://developer.android.com/reference/kotlin/androidx/compose/material/SnackbarHostState) 函数完成的，该函数为挂起函数

  ```kotlin
  @Composable
  fun MyScreen(
      state: UiState<List<Movie>>,
      scaffoldState: ScaffoldState = rememberScaffoldState()
  ) {
  
      // If the UI state contains an error, show snackbar
      if (state.hasError) {
  
          // `LaunchedEffect` will cancel and re-launch if
          // `scaffoldState.snackbarHostState` changes
          LaunchedEffect(scaffoldState.snackbarHostState) {
              // Show snackbar using a coroutine, when the coroutine is cancelled the
              // snackbar will automatically dismiss. This coroutine will cancel whenever
              // `state.hasError` is false, and only start when `state.hasError` is true
              // (due to the above if-check), or if `scaffoldState.snackbarHostState` changes.
              scaffoldState.snackbarHostState.showSnackbar(
                  message = "Error message",
                  actionLabel = "Retry message"
              )
          }
      }
  
      Scaffold(scaffoldState = scaffoldState) {
          /* ... */
      }
  }
  ```

  在上面的代码中，如果状态包含错误，则会触发协程，如果没有错误，则将取消协程。由于 `LaunchedEffect` 调用点在 if 语句中，因此当该语句为 false 时，如果 `LaunchedEffect` 包含在组合中，则会被移除，因此，协程将被取消。

### rememberCoroutineScope：获取组合感知作用域，以便在可组合项外启动协程

- 引入：由于 `LaunchedEffect` 是可组合函数，因此只能在其他可组合函数中使用。为了在可组合项**外**启动协程，但存在作用域已确定，以便协程在退出组合后自动取消，可以使用 [`rememberCoroutineScope`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#rememberCoroutineScope(kotlin.Function0))。另外，如果您需要手动控制一个或多个协程的生命周期，请使用 `rememberCoroutineScope`，例如在用户事件发生时取消动画。

- `rememberCoroutineScope` 是一个可组合函数，会返回一个 `CoroutineScope`，该 CoroutineScope 绑定到调用它的组合点。调用退出组合后，作用域将取消。

- 根据上面的示例，当用户点按 `Button` 时，您可以使用以下代码显示 `Snackbar`：

  ```kotlin
  @Composable
  fun MoviesScreen(scaffoldState: ScaffoldState = rememberScaffoldState()) {
  
      // Creates a CoroutineScope bound to the MoviesScreen's lifecycle
      val scope = rememberCoroutineScope()
  
      Scaffold(scaffoldState = scaffoldState) {
          Column {
              /* ... */
              Button(
                  onClick = {
                      // Create a new coroutine in the event handler to show a snackbar
                      scope.launch {
                          scaffoldState.snackbarHostState.showSnackbar("Something happened!")
                      }
                  }
              ) {
                  Text("Press me")
              }
          }
      }
  }
  ```

### rememberUpdatedState：在值改变时不重启

- 引入：当其中一个键参数发生变化时，`LaunchedEffect` 会重启。不过，在某些情况下，您可能希望在效应中捕获某个值，但如果该值发生变化，您不希望效应（Effect）重启。为此，需要使用 `rememberUpdatedState` 来创建对可捕获和更新的该值的引用。这种方法对于包含长期操作的效应十分有用，因为重新创建和重启这些操作可能代价高昂或令人望而却步。

- 例如，假设您的应用的 `LandingScreen` 在一段时间后消失。即使 `LandingScreen` 已重组，等待一段时间并发出时间已过通知的效应也不应该重启

  ```kotlin
  @Composable
  fun LandingScreen(onTimeout: () -> Unit) {
  
      // This will always refer to the latest onTimeout function that
      // LandingScreen was recomposed with
      val currentOnTimeout by rememberUpdatedState(onTimeout)
  
      // Create an effect that matches the lifecycle of LandingScreen.
      // If LandingScreen recomposes, the delay shouldn't start again.
      LaunchedEffect(true) {
          delay(SplashWaitTimeMillis)
          currentOnTimeout()
      }
  
      /* Landing screen content */
  }
  ```

  为创建与调用点的生命周期相匹配的效应，永不发生变化的常量（如 `Unit` 或 `true`）将作为参数传递。在以上代码中，使用 `LaunchedEffect(true)`。为了确保 `onTimeout` lambda 始终包含重组 `LandingScreen` 时使用的最新值，`onTimeout` 需使用 `rememberUpdatedState` 函数封装。效应中应使用代码中返回的 `State`、`currentOnTimeout`。

### DisposableEffect：需要清理的效应

- 对于需要在键发生变化或可组合项退出组合后进行清理的附带效应，请使用 [`DisposableEffect`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#DisposableEffect(kotlin.Any,kotlin.Function1))。如果 `DisposableEffect` 键发生变化，可组合项需要处理（执行清理操作）其当前效应，并通过再次调用效应进行重置。

- 例如，您可能需要使用 [`LifecycleObserver`](https://developer.android.com/reference/androidx/lifecycle/LifecycleObserver)，根据 [`Lifecycle` 事件](https://developer.android.com/topic/libraries/architecture/lifecycle#lc)发送分析事件。如需在 Compose 中监听这些事件，请根据需要使用 `DisposableEffect` 注册和取消注册观察器。

  ```kotlin
  @Composable
  fun HomeScreen(
      lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
      onStart: () -> Unit, // Send the 'started' analytics event
      onStop: () -> Unit // Send the 'stopped' analytics event
  ) {
      // Safely update the current lambdas when a new one is provided
      val currentOnStart by rememberUpdatedState(onStart)
      val currentOnStop by rememberUpdatedState(onStop)
  
      // If `lifecycleOwner` changes, dispose and reset the effect
      DisposableEffect(lifecycleOwner) {
          // Create an observer that triggers our remembered callbacks
          // for sending analytics events
          val observer = LifecycleEventObserver { _, event ->
              if (event == Lifecycle.Event.ON_START) {
                  currentOnStart()
              } else if (event == Lifecycle.Event.ON_STOP) {
                  currentOnStop()
              }
          }
  
          // Add the observer to the lifecycle
          lifecycleOwner.lifecycle.addObserver(observer)
  
          // When the effect leaves the Composition, remove the observer
          onDispose {
              lifecycleOwner.lifecycle.removeObserver(observer)
          }
      }
  
      /* Home screen content */
  }
  ```

  在上面的代码中，效应将 `observer` 添加到 `lifecycleOwner`。如果 `lifecycleOwner` 发生变化，系统会通过 `lifecycleOwner` 处理并再次重启效应。

  `DisposableEffect` 必须在其代码块中添加 `onDispose` 子句作为最终语句。否则，IDE 将显示构建时错误。

  **注：在 `onDispose` 中放置空块并不是最佳做法。始终再想想是否存在某种更适合您使用场景的效应**

### SideEffect：将 Compose 状态发布为非 Compose 代码

- 如需与非 Compose 管理的对象共享 Compose 状态，请使用 [`SideEffect`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#SideEffect(kotlin.Function0)) 可组合项，因为每次成功重组时都会调用该可组合项。

- 例如，您的分析库可能允许您通过将自定义元数据（在此示例中为“用户属性”）附加到所有后续分析事件，来细分用户群体。如需将当前用户的用户类型传递给您的分析库，请使用 `SideEffect` 更新其值。

  ```kotlin
  @Composable
  fun rememberAnalytics(user: User): FirebaseAnalytics {
      val analytics: FirebaseAnalytics = remember {
          /* ... */
      }
  
      // On every successful composition, update FirebaseAnalytics with
      // the userType from the current User, ensuring that future analytics
      // events have this metadata attached
      SideEffect {
          analytics.setUserProperty("userType", user.userType)
      }
      return analytics
  }
  ```

### produceState：将非 Compose 状态转换为 Compose 状态

- [`produceState`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#produceState(kotlin.Any,kotlin.coroutines.SuspendFunction1)) 会启动一个协程，该协程将作用域限定为可将值推送到返回的 [`State`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/State) 的组合。使用此协程将非 Compose 状态转换为 Compose 状态，例如将外部订阅驱动的状态（如 `Flow`、`LiveData` 或 `RxJava`）引入组合。

- 该制作工具在 `produceState` 进入组合时启动，在其退出组合时取消。返回的 `State` 冲突；设置相同的值不会触发重组。

- 即使 `produceState` 创建了一个协程，它也可用于观察非挂起的数据源。如需移除对该数据源的订阅，请使用 [`awaitDispose`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/ProduceStateScope#awaitDispose(kotlin.Function0)) 函数。

- 以下示例展示了如何使用 `produceState` 从网络加载图像。`loadNetworkImage` 可组合函数会返回可以在其他可组合项中使用的 `State`

  ```kotlin
  @Composable
  fun loadNetworkImage(
      url: String,
      imageRepository: ImageRepository
  ): State<Result<Image>> {
  
      // Creates a State<T> with Result.Loading as initial value
      // If either `url` or `imageRepository` changes, the running producer
      // will cancel and will be re-launched with the new inputs.
      return produceState<Result<Image>>(initialValue = Result.Loading, url, imageRepository) {
  
          // In a coroutine, can make suspend calls
          val image = imageRepository.load(url)
  
          // Update State with either an Error or Success result.
          // This will trigger a recomposition where this State is read
          value = if (image == null) {
              Result.Error
          } else {
              Result.Success(image)
          }
      }
  }
  ```

  **注：您应采用常规 Kotlin 函数命名方式命名含返回值类型的可组合项，以小写字母开头。**

  `produceState` 在后台充分利用其他效应！它使用 `remember { mutableStateOf(initialValue) }` 保留 `result` 变量，并在 `LaunchedEffect` 中触发 `producer` 块。每当 `producer` 块中的 `value` 更新时，`result` 状态都会更新为新值。

### derivedStateOf：将一个或多个状态对象转换为其他状态

- 如果某个状态是从其他状态对象计算或派生得出的，请使用 [`derivedStateOf`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#derivedStateOf(kotlin.Function0))。使用此函数可确保仅当计算中使用的状态之一发生变化时才会进行计算。

- 以下示例展示了基本的“待办事项”列表，其中具有用户定义的高优先级关键字的任务将首先显示：

  ```kotlin
  @Composable
  fun TodoList(highPriorityKeywords: List<String> = listOf("Review", "Unblock", "Compose")) {
  
      val todoTasks = remember { mutableStateListOf<String>() }
  
      // Calculate high priority tasks only when the todoTasks or highPriorityKeywords
      // change, not on every recomposition
      val highPriorityTasks by remember(highPriorityKeywords) {
          derivedStateOf { todoTasks.filter { it.containsWord(highPriorityKeywords) } }
      }
  
      Box(Modifier.fillMaxSize()) {
          LazyColumn {
              items(highPriorityTasks) { /* ... */ }
              items(todoTasks) { /* ... */ }
          }
          /* Rest of the UI where users can add elements to the list */
      }
  }
  ```

  在以上代码中，`derivedStateOf` 保证每当 `todoTasks` 发生变化时，系统都会执行 `highPriorityTasks` 计算，并相应地更新界面。如果 `highPriorityKeywords` 发生变化，系统将执行 `remember` 代码块，并且会创建新的派生状态对象并记住该对象，以代替旧的对象。由于执行过滤以计算 `highPriorityTasks` 的成本很高，因此应仅在任何列表发生更改时才执行，而不是在每次重组时都执行。

  此外，更新 `derivedStateOf` 生成的状态不会导致可组合项在声明它的位置重组，Compose 仅会对返回状态为已读的可组合项（在本例中，指 `LazyColumn` 中的可组合项）进行重组。

  该代码还假设 `highPriorityKeywords` 的变化频率显著低于 `todoTasks`。否则，该代码会使用 `remember(todoTasks, highPriorityKeywords)` 而不是 `derivedStateOf`。

### snapshotFlow：将 Compose 的 State 转换为 Flow

- 使用 [`snapshotFlow`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#snapshotFlow(kotlin.Function0)) 将 [`State`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/State) 对象转换为冷 Flow。`snapshotFlow` 会在收集到块时运行该块，并发出从块中读取的 `State` 对象的结果。当在 `snapshotFlow` 块中读取的 `State` 对象之一发生变化时，如果新值与之前发出的值不[相等](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/equals.html)，Flow 会向其收集器发出新值（此行为类似于 [`Flow.distinctUntilChanged`](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.flow/distinct-until-changed.html) 的行为）。

- 下列示例显示了一项附带效应，是系统在用户滚动经过要分析的列表的首个项目时记录下来的：

  ```kotlin
  val listState = rememberLazyListState()
  
  LazyColumn(state = listState) {
      // ...
  }
  
  LaunchedEffect(listState) {
      snapshotFlow { listState.firstVisibleItemIndex }
          .map { index -> index > 0 }
          .distinctUntilChanged()
          .filter { it == true }
          .collect {
              MyAnalyticsService.sendScrolledPastFirstItemEvent()
          }
  }
  ```

  在上方代码中，`listState.firstVisibleItemIndex` 被转换为一个 Flow，从而可以受益于 Flow 运算符的强大功能。

## 重启效应

- 引入：从前面已经知道，Compose 中有一些效应（如 `LaunchedEffect`、`produceState` 或 `DisposableEffect`）会采用可变数量的参数和键来取消运行效应，并使用新的键启动一个新的效应。

  这些 API 的典型形式是：

  ```kotlin
  EffectName(restartIfThisKeyChanges, orThisKey, orThisKey, ...) { block }
  ```

- 由于此行为的细微差别，如果用于重启效应的参数不是适当的参数，可能会出现问题：

  - 如果重启效应次数**不够**，可能会导致应用出现错误。
  - 如果重启效应次数**过多**，效率可能不高。

- 一般来说，效应代码块中使用的可变和不可变变量应作为参数添加到效应可组合项中。除此之外，您还可以添加更多参数，以便强制重启效应。如果更改变量不应导致效应重启，则应将该变量封装在 [`rememberUpdatedState`](https://developer.android.com/jetpack/compose/side-effects#rememberupdatedstate) 中。如果由于变量封装在一个不含键的 `remember` 中使之没有发生变化，则无需将变量作为键传递给效应。

- 注意：**应将效应中使用的变量添加为效应可组合项的参数，或使用 `rememberUpdatedState`。**

- 在上面显示的 `DisposableEffect` 代码中，效应将其块中使用的 `lifecycleOwner` 作为参数，因为对它们的任何更改都会导致效应重启。

  ```kotlin
  @Composable
  fun HomeScreen(
      lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
      onStart: () -> Unit, // Send the 'started' analytics event
      onStop: () -> Unit // Send the 'stopped' analytics event
  ) {
      // These values never change in Composition
      val currentOnStart by rememberUpdatedState(onStart)
      val currentOnStop by rememberUpdatedState(onStop)
  
      DisposableEffect(lifecycleOwner) {
          val observer = LifecycleEventObserver { _, event ->
              /* ... */
          }
  
          lifecycleOwner.lifecycle.addObserver(observer)
          onDispose {
              lifecycleOwner.lifecycle.removeObserver(observer)
          }
      }
  }
  ```

  无需使用 `currentOnStart` 和 `currentOnStop` 作为 `DisposableEffect` 键，因为它的值绝不会因使用了 `rememberUpdatedState` 而在组合中发生变化。如果未将 `lifecycleOwner` 作为参数传递，并且该代码发生变化，那么 `HomeScreen` 将重组，但 `DisposableEffect` 不会进行处理和重启。这会导致出现问题，因为此后会使用错误的 `lifecycleOwner`。

### 使用常量作为键

您可以使用 `true` 等常量作为效应键，使其**遵循调用点的生命周期**。它实际上具有有效的用例，如上面所示的 `LaunchedEffect` 示例。但在这样做之前，请审慎考虑，并确保您确实需要这么做。

## 参考资料

[官方文档](https://developer.android.com/jetpack/compose/lifecycle#add-info-smart-recomposition)