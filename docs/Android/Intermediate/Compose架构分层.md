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

