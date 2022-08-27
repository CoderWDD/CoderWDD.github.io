---
index : 11
title : Kotlin协程二
category:
  - kotlin
  - android
---

## 流启动指定

- `flowOn`：指明上游在哪执行
- `launchIn`：指明下游在哪执行

## 流的取消检测

### 检测手段

- 流构建器在每个值发送的时候，都会执行 `ensureActive 检测`，来确定流是否被取消
- 同时，从性能角度出发，流不会自动执行其他的取消检测机制，因此，在协程处于**繁忙循环**时，必须明确检测是否取消
- 可以通过 `cancellable` 操作符来执行此操作

 ## 背压

- 当数据生产发送效率，高于数据被收集消费的效率时，就是处于 **背压** 状态
- 处理方案：
  - 生产数据角度：
    - 缓冲：`buffer()`
    - `flowOn()`
  - 消费数据角度：提高消费效率
    - `conflate()`：合并发射项，不对每个值进行处理，每次只处理最新的一个值，即**流的管道中只会存放最新的值**
    - `conflateLast()`：取消并重新发射最后一个值

## 过渡流操作符

- 可以转换流，就像使用集合与序列一样
- 过渡操作符应用于上游流，并返回下游流
- 都是冷操作符，操作符本身不是挂起函数
- 运行速度快，返回新的转换流的定义
- `transform()`、`map()`

## 限长操作符

`take()`：指定要收集的元素个数

## 末端操作符

- 用于 **启动流收集的挂起函数**。
- `collect`是最基础的末端操作符
- 可以将流内数据转化为各种集合，如：`toList()`、`toSet()`
- 可以使用 `reduce()` 或 `fold()` 将流规约到单个值

## 组合操作符

- `zip()`

## 展平流

- 适用场景：当流之间具有依赖性时，即流A的数据对流B的结果有依赖
- `flatMapConcat()`、`flatMapMerge()`、`flateMapLatest()`

## 流的异常处理

- 尝试异常的地方：使用流的地方、构建流的地方

## 流的完成

- 在流结束的时候被调用
- `finally`：在 try-catch 语句块中使用
- `onComplete()`：在流结束的时候被调用，且如果流是因为异常被中止的话，可以拿到异常中止时的异常信息

## Channel

- Channel 实际上是一个**并发安全的队列**，它可以用来连接协程，实现不同协程的通信

![image-20220813164037555](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220813164037555.png)

### Channel 的容量

- Channel实际上就是一个队列，队列中一定存在缓冲区，那么一旦这个缓冲区满了，并且也一直没有人调用 `receive` ，`send` 就需要挂起。即 `send` 总是会挂起，直到 `receive` 之后才会继续往下执行。
- 如果希望让 Channel 把结果都 `send` 出去，而不必等待 `receive`,则可以为 Channel 指定缓冲区的大小，此时在接收时，就需要对 Channel 中的**缓存队列进行迭代读取**

### Channel 的关闭

- `produce` 和 `actor` 返回的 Channel 都会随着对应的协程执行完毕而关闭，也正是这样，Channel才被称为 **热数据流**。
- 对于一个 Channel，如果我们调用了它的 `close` 方法，它会立即停止接收新元素，也就是说这时它的 `isClosedForSend `会立即返回 `true`。而由于 Channel 缓冲区的存在，这时候可能还有一些元素没有被处理完，因此要等所有的元素都被读取之后 `isClosedForReceive` 才会返回 `true`。
- Channel 的生命周期最好由主导方来维护，建议由主导的一方实现关闭。

### BroadcastChannel

- BroadcastChannel 即指一个发送端，同时存在多个接收端，且发送端发出的数据信息，可以被多个接收端接收到

## 多路复用

- 示例场景：两个 API 分别从网络和本地缓存获取数据，期望哪个先 `返回/发送` 就先用哪个展示

  ![image-20220813171316496](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220813171316496.png)

## 协程的并发工具

- 除了在线程中常用的解决并发问题的手段之外，协程框架也提供了一些并发安全的工具：
  - Channel：并发安全的消息通道
  - Mutex：轻量级锁，它的 `lock` 和 `unlock` 从语义上与线程锁比较类似，之所以轻量，是因为它在获取不到锁时不会阻塞线程，而是挂起等待锁的释放
  - Semaphore：轻量级信号量，信号量可以有多个，协程在获取到信号量后，即可执行并发操作。当 `Semaphore` 的参数为 1 时，效果与 `Mutex` 等价
