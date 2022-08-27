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

## 协程的作用域构建器

- coroutineScope：该作用域内的协程，只要有一个出现异常，其他兄弟协程也会被取消
- supervisorScope：该作用域内的协程，任何一个协程出现异常，其他兄弟协程不受影响，继续正常运行

## Job对象的生命周期

- 对于每一个通过 `launch` 或 `async` 创建的协程，都会返回一个 `Job` 实例，该实例是协程的唯一标识，并且负责管理协程的生命周期

- 如果协程处于活跃状态，协程运行出错或者调用 `job.cancel()` 都会将当前任务置为 `取消中 (Cancelling)` 状态  `(isActive = false, isCancelled = true)`。当所有的子协程都完成后，协程会进入 `已取消(Cancelled)` 状态，此时isCompleted = true。

  ![image-20220807010642648](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220807010642648.png)

## 协程的取消

- 取消作用域**会取消它的子协程**
- 被取消的协程并**不会**影响其余兄弟协程
- 协程通过抛出一个特殊的异常 CancellationException 来处理取消操作
- 所有 `kotlinx.coroutines` 中的过去函数 `(withContext、delay...)` 都是可取消的

### CPU 密集型任务取消 - isActive

- 分析：因为 CPU 密集型任务，会不断抢占 CPU 的运行权限，导致普通 `cancel()` 不能取消该协程
- 解决：可以利用其生命周期，当调用了 `cancel()` 方法后，虽然协程没有被及时取消，但是其生命周期标志 `isActive` 的值会被修改，即从 `true` 变为 `false`，所以可以在协程中加入对 `isActive` 的值的判断，来决定协程内容是否执行 

### CPU 密集型任务取消 - ensureActive()

- 上面的 `isActive` 取消协程时，无法对外做出协程被取消的通知，所以，如果希望在协程被取消时，能收到通知，可以使用 `ensureActive()` 来处理取消协程的工作，从其源码可以看出，其本质也是对 `isActive` 的值进行判断，只不过它会默认在 `isActive` 为 `false` 时抛出异常

### CPU 密集型任务取消 - yield()

- 用于检测所在协程的状态，如果已经取消，则抛出 CancellationException 予以响应，此外，**它还会尝试出让线程的执行权，给其他协程提供执行机会**

## 协程上下文

### 构成

- Job：控制协程的生命周期
- CoroutineDispatcher：向合适的线程分发任务
- CoroutineName：协程的名称，调试的时候很有用
- CoroutineExceptionHandler：处理未被捕捉的异常

