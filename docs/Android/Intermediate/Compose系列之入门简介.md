---
index : 2
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
title : Compose系列之入门简介
---

## 简介

Jetpack Compose 是用于构建原生界面的新款 Android 工具包。它可简化并加快 Android 上的界面开发，使用更少的代码、强大的工具和直观的 Kotlin API，快速让应用生动而精彩。

## Compose特点

使用可组合函数来描述界面形状和数据依赖项，从而以编程方式定义界面。

## Compose组成

Compose 由 `androidx` 中的 7 个 Maven 组 ID 构成。每个组都包含一套特定用途的功能，并各有专属的版本说明。

| 组                                                           | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [compose.animation](https://developer.android.com/jetpack/androidx/releases/compose-animation) | 在 Jetpack Compose 应用中构建动画，丰富用户的体验。          |
| [compose.compiler](https://developer.android.com/jetpack/androidx/releases/compose-compiler) | 借助 Kotlin 编译器插件，转换 @Composable functions（可组合函数）并启用优化功能。 |
| [compose.foundation](https://developer.android.com/jetpack/androidx/releases/compose-foundation) | 使用现成可用的构建块编写 Jetpack Compose 应用，还可扩展 Foundation 以构建您自己的设计系统元素。 |
| [compose.material](https://developer.android.com/jetpack/androidx/releases/compose-material) | 使用现成可用的 Material Design 组件构建 Jetpack Compose UI。这是更高层级的 Compose 入口点，旨在提供与 www.material.io 上描述的组件一致的组件。 |
| [compose.material3](https://developer.android.com/jetpack/androidx/releases/compose-material3) | 使用 Material Design 3（下一代 Material Design）组件构建 Jetpack Compose 界面。Material 3 包括更新后的主题和组件，以及动态配色等 Material You 个性化功能，旨在与新的 Android 12 视觉风格和系统界面相得益彰。 |
| [compose.runtime](https://developer.android.com/jetpack/androidx/releases/compose-runtime) | Compose 的编程模型和状态管理的基本构建块，以及 Compose 编译器插件针对的核心运行时。 |
| [compose.ui](https://developer.android.com/jetpack/androidx/releases/compose-ui) | 与设备互动所需的 Compose UI 的基本组件，包括布局、绘图和输入。 |

## 依赖版本

由于Compose的不断发展，其版本号也在不断更新迭代，所以每次使用，都应该从[官方文档中](https://developer.android.com/jetpack/androidx/releases/compose)查看最新的版本进行引用

## 参考资料

[官方文档说明](https://developer.android.com/jetpack/androidx/releases/compose)