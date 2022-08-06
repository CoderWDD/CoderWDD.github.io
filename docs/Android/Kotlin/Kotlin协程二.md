---
index : 10
title : Kotlin协程二
category:
  - kotlin
  - android
---

## 协程调度器

### Dispatchers.Main

- Android 上的主线程
- 用来处理 UI 交互和一些轻量级的任务，如：
  - 调用 `suspend` 函数
  - 调用 UI 函数
  - 更新 LiveData

### Dispatchers.IO

- 非主线程
- 专为磁盘和网络 IO 进行了优化，常用于：
  - 数据库操作
  - 文件读写
  - 网络处理

### Dispatchers.Default

- 非主线程
- 专为 CPU 密集型任务进行了优化，常用于：
  - 数组排序
  - JSON 数据解析
  - 处理差异判断

## 结构化并发

### 作用

- 取消任务：当某项任务不再需要时可以取消
- 追踪任务：当任务正在执行时，可以追踪
- 发出错误信号：当协程失败时，发出错误信号表明有错误发生

## CoroutineScope

协程作用域，能跟踪协程，还可以取消其作用域内的所以协程

- GlobalScope：生命周期是 `process` 级别的，即使是 `Activity` 或 `Fragment` 已经被销毁，协程仍然在执行
- MainScope：在 `Activity` 中使用，可以在 `onDestroy()` 中取消协程
- viewModelScope：只能在 `ViewModel` 中使用，绑定的是 `ViewModel` 的生命周期
- lifecycleScope：只能在 `Activity`、`Fragment` 中使用，会绑定 `Activity`、`Fragment` 的生命周期

## 协程的启动模式

- DEFAULT：协程创建后，立即开始调度，在调度前如果协程被取消，将直接进入取消相应的状态
- ATOMIC：协程创建后，立即开始调度，协程执行到第一个挂起点之前不响应取消
- LAZY：只有协程被需要时，包括主动调用协程的 start、join 或者 await 等函数时才会开始调度，如果调度前就被取消，那么该协程将直接进入异常结束状态
- UNDISPATCHED：协程创建后立即在 **当前函数调用栈** 中执行，直到遇到第一个真正挂起的点

- 注意：**开始调度，只是将当前任务加入待执行的队列，而不是指立即被执行**