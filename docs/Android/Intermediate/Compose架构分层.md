---
index : 8
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
title : Compose架构分层
---

## 引入

- 本页面简要介绍了组成 Jetpack Compose 的架构层，以及决定其设计的核心原则。
- Jetpack Compose 不是一个单体式项目；它由一些模块构建而成，这些模块组合在一起，构成了一个完整的堆栈。通过了解组成 Jetpack Compose 的不同模块，您可以：
  - 使用适当的抽象级别来构建应用或库
  - 了解何时可以“降级”到较低级别，以获取更多的控制权或更高的自定义程度
  - 尽可能减少依赖项

## Layers

The major layers of Jetpack Compose are:

![layering-major-layers](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/layering-major-layers.svg)

Let's examine these layers from the bottom up.

### Runtime

This module provides the fundamentals of the Compose runtime such as [`remember`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#remember(kotlin.Function0)), [`mutableStateOf`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#mutableStateOf(kotlin.Any,androidx.compose.runtime.SnapshotMutationPolicy)), the [`@Composable`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/Composable) annotation and [`SideEffect`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#SideEffect(kotlin.Function0)). You might consider building directly upon this layer if you only need Compose’s tree management abilities, not its UI.（即只要组合树结构，而不考虑界面，就可以直接基于 Runtime 进行构建）

### UI

The UI layer is made up of multiple modules ( [`ui-text`](https://developer.android.com/reference/kotlin/androidx/compose/ui/text/package-summary), [`ui-graphics`](https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/package-summary), [`ui-tooling`](https://developer.android.com/reference/kotlin/androidx/compose/ui/tooling/package-summary), etc.). These modules implement the fundamentals of the UI toolkit, such as `LayoutNode`, [`Modifier`](https://developer.android.com/reference/kotlin/androidx/compose/ui/Modifier), input handlers, custom layouts, and drawing. You might consider building upon this layer if you only need fundamental concepts of a UI toolkit.（即如果只需要用到界面UI工具包，即当需要自定义控件等时，则可以考虑基于 UI 进行构建）

### Foundation

This module provides design system agnostic building blocks for Compose UI, like [`Row`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Row(androidx.compose.ui.Modifier,androidx.compose.foundation.layout.Arrangement.Horizontal,androidx.compose.ui.Alignment.Vertical,kotlin.Function1)) and [`Column`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Column(androidx.compose.ui.Modifier,androidx.compose.foundation.layout.Arrangement.Vertical,androidx.compose.ui.Alignment.Horizontal,kotlin.Function1)), [`LazyColumn`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/lazy/package-summary#LazyColumn(androidx.compose.ui.Modifier,androidx.compose.foundation.lazy.LazyListState,androidx.compose.foundation.layout.PaddingValues,kotlin.Boolean,androidx.compose.foundation.layout.Arrangement.Vertical,androidx.compose.ui.Alignment.Horizontal,androidx.compose.foundation.gestures.FlingBehavior,kotlin.Function1)), recognition of particular gestures, etc. You might consider building upon the foundation layer to create your own design system.（即这一层，提供的是相关的控件及其特性，可以用于构建基本的 app 界面）

### Material

This module provides an implementation of the Material Design system for Compose UI, providing a theming system, styled components, ripple indications, icons. Build upon this layer when using Material Design in your app.（即对不同控件的风格进行了规定）

## Design Principles

A guiding principle for Jetpack Compose is to provide small, focused pieces of functionality that can be assembled (or composed) together, rather than a few monolithic components. This approach has a number of advantages.（即 Compose 的设计原则是希望控件之间是能组合到一起的，而不是单独孤立的个体，以下是相关的优点）

### Control

- 基本认识：**更高级别的组件往往能完成更多操作，但会限制您有多少直接控制权。如果您需要更多控制权，可以通过“降级”使用较低级别的组件。**

- 实例：

  - 如果您想为某个组件的颜色添加动画效果，可以使用 [`animateColorAsState`](https://developer.android.com/reference/kotlin/androidx/compose/animation/package-summary#animateColorAsState(androidx.compose.ui.graphics.Color,androidx.compose.animation.core.AnimationSpec,kotlin.Function1)) API：

    ```kotlin
    val color = animateColorAsState(if (condition) Color.Green else Color.Red)
    ```

  - 不过，如果您之后需要这个组件始终从灰色开始，此 API 就无能为力了。您可以通过“降级”改用较低级别的 [`Animatable`](https://developer.android.com/reference/kotlin/androidx/compose/animation/core/package-summary?hl=HU#Animatable(kotlin.Float,kotlin.Float)) API：

    ```kotlin
    val color = remember { Animatable(Color.Gray) }
    LaunchedEffect(condition) {
        color.animateTo(if (condition) Color.Green else Color.Red)
    }
    ```

    较高级别的 `animateColorAsState` API 本身基于较低级别的 `Animatable` API 构建而成。使用较低级别的 API 的过程更为复杂，但可提供更多的控制权。请选择最符合您需求的抽象化级别。

### Customization

- 引入：Assembling higher level components from smaller building blocks makes it far easier to customize components should you need to. For example, consider the [implementation](https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/material/material/src/commonMain/kotlin/androidx/compose/material/Button.kt) of [`Button`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary?hl=HU#Button(kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Boolean,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.material.ButtonElevation,androidx.compose.ui.graphics.Shape,androidx.compose.foundation.BorderStroke,androidx.compose.material.ButtonColors,androidx.compose.foundation.layout.PaddingValues,kotlin.Function1)) provided by the Material layer（通过各个小的组件，可以轻松地构建出更高级的组件，大大降低了自定义组件的难度，下面给出 `Button` 的实现作为例子）:

  ```kotlin
  @Composable
  fun Button(
      // …
      content: @Composable RowScope.() -> Unit
  ) {
      Surface(/* … */) {
          CompositionLocalProvider(/* … */) { // set LocalContentAlpha
              ProvideTextStyle(MaterialTheme.typography.button) {
                  Row(
                      // …
                      content = content
                  )
              }
          }
      }
  }
  ```

  - 可以看到，一个`Button`是由四个组件（component）组成的：
    - A material [`Surface`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary?hl=HU#Surface(kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.foundation.BorderStroke,androidx.compose.ui.unit.Dp,androidx.compose.foundation.interaction.MutableInteractionSource,androidx.compose.foundation.Indication,kotlin.Boolean,kotlin.String,androidx.compose.ui.semantics.Role,kotlin.Function0)) providing the background, shape, click handling, etc.
    - A [`CompositionLocalProvider`](https://developer.android.com/reference/kotlin/androidx/compose/runtime/package-summary#CompositionLocalProvider(kotlin.Array,kotlin.Function0)) which changes the content’s alpha when the button is enabled or disabled
    - A [`ProvideTextStyle`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary?hl=HU#ProvideTextStyle(androidx.compose.ui.text.TextStyle,kotlin.Function0)) sets the default text style to use
    - A `Row` provides the default layout policy for the button's content

- 更进一步自定义：如果您希望在组件的参数之外进行自定义，可以“降级”到某个级别并为组件创建分支

  - 例如，Material Design 指定按钮应具有纯色背景。如果您需要渐变背景，`Button` 参数就不适用了，因为它不支持此选项。在此类情况下，您可以将 Material `Button` 实现用作参考，并构建您自己的组件：

    ```kotlin
    @Composable
    fun GradientButton(
        // …
        background: List<Color>,
        content: @Composable RowScope.() -> Unit
    ) {
        Row(
            // …
            modifier = modifier
                .clickable(/* … */)
                .background(
                    Brush.horizontalGradient(background)
                )
        ) {
            CompositionLocalProvider(/* … */) { // set material LocalContentAlpha
                ProvideTextStyle(MaterialTheme.typography.button) {
                    content()
                }
            }
        }
    }
    ```

    **注：当降级到较低层以自定义组件时，请确保不会因忽视无障碍功能支持等原因而使任何功能发生降级。**

- 深度自定义：如果连 Material 层都满足不了你，不想使用 Material 的相关样式等，则可以继续进行**降级**，到更底层的 Foundation 层进行定制

  ```kotlin
  @Composable
  fun BespokeButton(
      // …
      content: @Composable RowScope.() -> Unit
  ) {
      Row(
          // …
          modifier = modifier
              .clickable(/* … */)
              .background(/* … */)
      ) {
          // No Material components used
          content()
      }
  }
  ```

- 提示：Jetpack Compose 为最高级别的组件保留了最为简洁的名称。例如，[`androidx.compose.material.Text`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary?hl=HU#Text(kotlin.String,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.font.FontStyle,androidx.compose.ui.text.font.FontWeight,androidx.compose.ui.text.font.FontFamily,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.style.TextDecoration,androidx.compose.ui.text.style.TextAlign,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.style.TextOverflow,kotlin.Boolean,kotlin.Int,kotlin.Function1,androidx.compose.ui.text.TextStyle)) 基于 [`androidx.compose.foundation.text.BasicText`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/text/package-summary#BasicText(kotlin.String,androidx.compose.ui.Modifier,androidx.compose.ui.text.TextStyle,kotlin.Function1,androidx.compose.ui.text.style.TextOverflow,kotlin.Boolean,kotlin.Int)) 构建。这样一来，如果您想替换更高级别，则可以为自己的实现提供更易于发现的名称。

### Picking the right abstraction

- 引入：在构建组件时，不是越解决底层就越好，而是要在尽量高级的层次中完成定制，因为底层意味着会有很多高级的特性没有被利用到，例如很多高级的组件都能支持无障碍功能等特性，而位于更底层的组件则没有。
- 实例：如果您想为自己的自定义组件添加手势支持，可以使用 [`Modifier.pointerInput`](https://developer.android.com/reference/kotlin/androidx/compose/ui/input/pointer/package-summary#(androidx.compose.ui.Modifier).pointerInput(kotlin.Any,kotlin.coroutines.SuspendFunction1)) 从头开始构建；但在此之上还有其他级别更高的组件，它们可以提供更好的起点，例如 [`Modifier.draggable`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/package-summary#(androidx.compose.ui.Modifier).draggable(androidx.compose.foundation.gestures.DraggableState,androidx.compose.foundation.gestures.Orientation,kotlin.Boolean,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Boolean,kotlin.coroutines.SuspendFunction2,kotlin.coroutines.SuspendFunction2,kotlin.Boolean))、[`Modifier.scrollable`](https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/package-summary#(androidx.compose.ui.Modifier).scrollable(androidx.compose.foundation.gestures.ScrollableState,androidx.compose.foundation.gestures.Orientation,kotlin.Boolean,kotlin.Boolean,androidx.compose.foundation.gestures.FlingBehavior,androidx.compose.foundation.interaction.MutableInteractionSource)) 或 [`Modifier.swipeable`](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#(androidx.compose.ui.Modifier).swipeable(androidx.compose.material.SwipeableState,kotlin.collections.Map,androidx.compose.foundation.gestures.Orientation,kotlin.Boolean,kotlin.Boolean,androidx.compose.foundation.interaction.MutableInteractionSource,kotlin.Function2,androidx.compose.material.ResistanceConfig,androidx.compose.ui.unit.Dp))。此时，就应该选择符合要求的，且尽量贴近上级的实现，也即选择后者
- **选择层级原则：一般来讲，最好基于能提供您所需功能的最高级别的组件进行构建，以便从其包含的最佳做法中受益。**

## 参考资料

[官方文档](https://developer.android.com/jetpack/compose/layering)

[官方自定义设计的实例项目](https://github.com/android/compose-samples/tree/main/Jetsnack)
