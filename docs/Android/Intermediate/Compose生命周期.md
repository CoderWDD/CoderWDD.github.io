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

## 参考资料

[官方文档](https://developer.android.com/jetpack/compose/lifecycle#add-info-smart-recomposition)
