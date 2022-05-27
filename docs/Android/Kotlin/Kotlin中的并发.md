---
category:
  - kotlin
index : 9
title : Kotlin中的并发
---

## 相关术语

- 并发`concurrency`：代码单元无序执行（无论是并发还是分时），并且仍能获得正确结果的能力
- 并行`parallelism`：同时执行多个代码单元
- 多任务`multitasking`：与并行相同
- 多线程`multithreading`：使用线程来实现的并行
- 异步`asynchrony`：在等待结果的同时不阻塞主线程，即主线程之外的非阻塞操作

## 解决同步问题

- 最佳解决方案：并发数据结构、锁和避免共享可变状态
  - 并发数据结构可以允许并发访问，且不会破坏存储数据的完整性，且可用于共享可变状态，有助于并行编程
  - 锁可以每次只允许一个并发单元对关键部分进行访问以避免`竞争条件`
  - 避免共享可变状态，如：并发单元仅通过消息传递进行通信，避免了共享可变状态

## 进程、线程、协程

- 关系：一个进程可以包含多个线程，一个线程可以运行（注意，这里不是包含，因为协程不会绑定到某一具体的线程上，如一个协程可以在一个线程中启动、暂停，但在另一个线程中恢复）多个协程

## Kotlin协程

### suspend

-  作用：`suspend`关键字可以将普通函数转变为挂起函数

- 理解：`suspend`相当于`挂起提醒`，如果被`suspend`修饰的函数内没有需要被真正`挂起`的操作，那么即使是被`suspend`关键字修饰了，也不会在运行时候被真的`挂起`

- 实现过程：
  - 首先，需要知道的是，协程之所以能够用`同步的代码，写出异步的效果`，其实并不是魔法，其原理和很多其他函数调用是一样的，只不过，这里调用的是一个耗时函数。因此，在分析协程的实现过程之前，我们可以对比一下普通函数的调用过程。
  - 普通函数的调用过程：
    - 稍微了解过汇编中的函数调用的过程的应该都知道，在调用一个函数之前，需要先将当前的状态保存，在汇编中表现为将`eax`、`esp`等寄存器的值入栈保存，即`保存现场/保存上下文`然后才将程序的执行掌控权交给要调用的子函数，当其执行完后，就会将之前保存进栈的内容弹出，即`还原现场`，此时就可以重新回到原函数进行执行下面的代码而不出错了
  - 协程中挂起函数的调用：
    - 与上面的普通函数的调用过程相似，挂起函数在执行的时候，也**要先保存当前的上下文**，然后再将程序执行的掌控权给到挂起函数中进行执行，待到挂起函数执行完了，就会还原上下文，同时接着往下执行。只是与普通函数的调用略有不同的是，在切换到挂起函数的时候，需要将对应的上下文传入（这一点又Kotlin自己完成），也正是因为挂起函数的调用过程与普通函数的调用过程类似的特性，所以挂起函数也能拥有类似普通函数的性质，比如，普通函数并不依赖其他函数存在，普通函数可以在任何其他函数中被调用，类比到**协程中的挂起函数，就表现为，挂起函数并不会绑定到线程中，且可以在任何线程中调用，同样的，在一个线程中开启、暂停，到另一个线程中恢复的操作也是允许的**。因为Kotlin会自动帮你传递需要的上下文。

- 需要注意的是，挂起函数不能是入口函数，这一点也好理解，就像我们自定义的函数，一定要通过其他函数来调用一样，**挂起函数本身不能成为入口，所以挂起函数只能从另一个挂起点（挂起函数、可挂起Lambda表达式、协程或者内联到协程的Lambda表达式）中调用，而所有的挂起点的最终启动就是`协程构建器`**

### 协程构建器

- 分类：

  - `launch`：用于没有返回值的即用即弃的操作

  - `async`：用于有返回结果（或异常）的操作

  - `runBlocking`：用于桥接阻塞与非阻塞的世界

- 注意：

  - 处于活动状态的协程不会阻止程序的退出，即如果程序已经到了退出出口，但协程仍有内容没执行，则程序不会等待协程执行完再退出，而是会直接退出

    ```kotlin
    import kotlinx.coroutines.delay
    import kotlinx.coroutines.*
    suspend fun doSomething(){
        println("耗时中...")
        delay(2000L)
        println("耗时结束")
    }
    
    
    fun main() {
        println("协程开始前：")
         GlobalScope.launch {
             doSomething()
         }
    }
    
    // 运行结果：
    协程开始前：
    ```

    从上面测试代码可以看出，协程不能阻止程序的退出，否则结果将为：

    ```kotlin
    协程开始前：
    耗时中...
    耗时结束
    ```

    当然，如果是使用`runBlocking`，则可以阻塞住主线程，从而达到延缓程序退出的效果

  - 协程的取消，必须是针对可取消的内容进行取消的，否则无法取消成功

    ```kotlin
    import kotlinx.coroutines.*
    fun main() {
        runBlocking {
            val job = GlobalScope.launch {
                repeat(10){
                    Thread.sleep(300L) // Thread.sleep是不可取消的函数
                    println("${it + 1} of 10 done")
                }
            }
            delay(1000L)
            job.cancelAndJoin() // 取消会失败，因为sleep是不可取消的
        }
    }
    
    // 运行结果：
    1 of 10 done
    2 of 10 done
    3 of 10 done
    4 of 10 done
    5 of 10 done
    6 of 10 done
    7 of 10 done
    8 of 10 done
    9 of 10 done
    10 of 10 done
    ```

    从上面代码可以看出，即使是**主动对协程进行取消，也许其内部的代码也是可取消的，才能将协程取消，否则无法成功取消/停止**，所以，在使用协程时，一个基本原则是**在协程代码内部尽量使用可取消的可挂起代码**

#### runBlocking

- 作用：作为协程构建器创建并启动一个新的协程，并会阻塞当前线程，直到其中传递的代码块执行完成
- 特点：使用`runBlocking`的线程，仍然可以被其他线程中断，但不能执行任何其他代码，即会阻塞在 `runBlocking`代码块处，因此，**不能在协程中调用`runBlocking`，否则协程就被阻塞了，这与协程应该是非阻塞的初衷相矛盾**
- 一般用途：主要用于`main`函数和`单元测试`

- 值得注意的是，`runBlocking`本质上是一个函数，而不是关键字，下面给出其函数签名：

  ```kotlin
  public fun <T> runBlocking(context: CoroutineContext = EmptyCoroutineContext, block: suspend CoroutineScope.() -> T): T {}
  ```

  如上所示，`suspend`关键字修饰的Lambda参数，就称为`挂起函数类型`或`挂起Lambda表达式`

- 一般调用：

  ```kotlin
  import kotlinx.coroutines.delay
  import kotlinx.coroutines.*
  suspend fun doSomething(){
      println("耗时中...")
      delay(2000L)
  }
  
  
  fun main() {
      runBlocking {
          println("耗时调用前：")
          doSomething()
          println("耗时调用后")
      }
  }
  // 运行结果：
  耗时调用前：
  耗时中...
  耗时调用后
  ```

#### launch

- 作用：用于创建那些**独立于主程序而执行且没有返回值的即用即弃**的协程

- 值得注意的是，`launch`与前面的`runBlocking`不同，`launch`不会阻塞住当前线程，即`launch`启动的协程，会依附到目标线程中，并被延迟执行，即将其加入**延迟执行队列**，待得当前线程空闲了，才会执行延迟执行队列里的任务

- 实例代码：

  ```kotlin
  import kotlinx.coroutines.delay
  import kotlinx.coroutines.*
  
  suspend fun doSomething(){
      println("耗时中...")
      delay(2000L)
      println("耗时结束")
  }
  
  fun main() {
      runBlocking { 
          val job = GlobalScope.launch { 
              println("协程开始...")
              doSomething()
              println("协程结束...")
          }
          
          println("主线程开始...")
          job.join()
          println("主线程退出...")
          
      }
  }
  // 运行结果：
  主线程开始...
  协程开始...
  耗时中...
  耗时结束
  协程结束...
  主线程退出...
  ```

  从上面的测试结果可以看出，`launch`启动的协程，不会阻塞当前线程的执行，且会在线程空闲的时候，再执行相应的代码

#### async

- 作用：用于创建会返回结果或异常的异步调用
- 一般用途：用于`REST API请求`、`从数据库中提取条目`、`从文件中读取内容`、`引入等待时间和提取某些数据`等操作
- 注意：
  - `async`可以用于有返回值的异步调用，其返回值为`Deferred<T>`，当要**获得实际的延迟调用的返回值**时，必须对其调用`await`**函数**
  - `Deferred`是Kotlin协程库的轻量级`future`实现，与`future`类似的，返回值的类型`T`被包裹在`Deferred<T>`中
  - 与`launch`不同的是，`async`会等待`await`任务完成，并接收其返回值，值得注意的是，这里的等待，是**非阻塞式**的等待，即，如果**一个表达式**有两个`await`任务需要执行，则不会等一个`await`执行完再执行下一个，而是会在需要耗时等待的时候，直接到下一个`await`进行执行，因此一个表达式中，多个`await`的等待时间，可以近似看成是耗时最长的那一个`await`的耗时。
  - kotlin中的`async`、`await`都是函数，而不是关键字

- 实例代码：

  ```kotlin
  import kotlinx.coroutines.delay
  import kotlinx.coroutines.*
  import java.util.Date
  
  
  fun firstAsync() = GlobalScope.async {
      delay(2000L)
      12
  }
  
  fun secondAsync() = GlobalScope.async {
      delay(2000L)
      6
  }
  
  fun main() {
      runBlocking {
          println(Date())
          val first = firstAsync()
          val second = secondAsync()
          val res = first.await() / second.await()
          println(res)
          println(Date())
      }
  }
  // 运行结果：
  Fri May 27 17:06:00 CST 2022
  2
  Fri May 27 17:06:02 CST 2022
  ```

  从上面代码可以看到，`第21行`有两个`await`任务，但整体耗时只有`2s`，这符合`async`、`await`的**非阻塞式等待**的结果，如果将上述`第19~21行`代码改成以下，则：

  ```kotlin
  val first = firstAsync().await()
  val second = secondAsync().await()
  val res = first / second
  ```

  此时的运行结果为：

  ```kotlin
  Fri May 27 17:10:52 CST 2022
  2
  Fri May 27 17:10:56 CST 2022
  ```

  可以看到，此时因为`await`是分开的，所以与普通的耗时等待并没有不同，也就是要分别等待两个`await`的耗时才年往下执行，因此耗时为`4s`，也就是说此时非阻塞式等待的特性就展现不出来了，所以代码的调用顺序在kotlin中，也有很大学问，甚至可以让效率提高数倍

- 总结：
  - `launch`与`join`、`async`与`await`类似，其中`launch`和`async`都用于启动一个并行执行工作的新协程，只不过在`launch`中使用`join`来等待任务执行完成，而在`async`中使用`await`来等待结果
  - `launch`返回`job`类型，而`async`返回`Deferred`类型，但是`Deferred`也实现了`Job`接口，所以同样可以对`Deferred`使用`cancel`和`join`，只不过用的少而已

### 协程的上下文

- 协程上下文`CoroutineContext`：所有的协程构建器都接收一个`CoroutineContext`，这是一组诸如`协程名称`、`协程的调度器`及`协程任务详细信息`的`索引元素`，即记录了协程相关的信息的索引
- 重要组成元素：
  - `CoroutineDispatcher`：用来决定协程在哪个线程上运行 $\star$
  - `Job`：提供了执行相关的详细信息，可用于生成子协程 $\star$
  - `CoroutineName`
  - `CoroutineExceptionHandler`

#### 协程调度器`CoroutineDispatcher`

- 作用：当协程需要恢复的时候，就需要调度器决定将该协程在哪个线程上进行恢复

- 如何指定恢复到哪个线程上：
  - 在上面提到的`协程构建器`函数中，进行传参，传入目标线程即可

##### 上下文`withContext`

- 作用：提供特定的上下文，以便将协程的部分内容运行在特定的上下问中，如在UI线程上更新UI操作

- 注意：
  - 在同一个线程上的协程之间切换，代价远比线程之间的切换要小得多，但如果是不同线程上的协程之间切换，就不仅有协程切换带来的代价，同时还要考虑线程切换带来的代价开销
  - 除非需要并行运行多个异步调用，否则当希望从挂起函数返回结果时，用`withContext`的方法，通常比`async-await`方法更好

- 实例：

  ```kotlin
  import kotlinx.coroutines.*
  
  suspend fun updateWeather(userId: Int){
      val user = fetchUser(userId)
      val location = fecthLocation(user)
      val weatherData = fetchWeather(location)
      // 指定在UI主线程上下文中更新UI
      withContext(UI){
          updateUI(weatherData)
      }
  }
  
  fun main() {
      GlobalScope.launch { 
          updateWeather(userId = userId)
      }
  }
  ```

##### 调用超时`withTimeout`

- 作用：可以方便地指定调用超时时间，并会抛出超时异常

- 实例：

  ```kotlin
  import kotlinx.coroutines.*
  fun main() {
      runBlocking {
          withTimeout(1200){
              repeat(10){
                  delay(500L)
                  println("${it + 1} of 10")
              }
          }
      }
  }
  //运行结果：
  1 of 10
  2 of 10
  Exception in thread "main" kotlinx.coroutines.TimeoutCancellationException: Timed out waiting for 1200 ms
  ```


#### CoroutineContext参数

- `launch`和`async`因为是非阻塞式的，所以，可以传递相应的上下文`CoroutineContext`参数，来指定该协程在哪个线程上下文中挂起，而`CoroutineContext`的几个重要组成元素：**`CoroutineDispatcher`、`Job`、`CoroutineName`、`CoroutineExceptionHandler`本质上都是其子类**，所以，传递的时候，只要是这几个类型的，都可以作为`CoroutineContext`的值传入

- 这里以`Job`为例，说明`Job`是`CoroutineContext`的子类：

  首先根据`Job`的定义处：

  ```kotlin
  public interface Job : CoroutineContext.Element {...}
  ```

  再往上看`Element`定义处：

  ```kotlin
  public interface Element : CoroutineContext {...}
  ```

  到此，从上面的分析可以看出，`Job`就是`CoroutineContext`的子类，其他几个组成元素也大同小异

- 那么问题来了，不管是`launch`还是`async`，其`CoroutineContext`参数就那么一个，而其子类又那么多个，如果要有多个类型要传递，那要怎么处理呢？

  - 很好解决，`CoroutineContext`类重载了`plus`函数，其作用是，将`CoroutineContext`类型的值作为操作数进行相加，所以，如果我们有多个值需要传，就可以直接利用`+`运算进行操作。

  - 需要注意的是，对于`CoroutineContext`的`plus`操作，如果各个参数之间有相同的属性，则在右侧的元素会覆盖掉左侧中元素的相同属性值

    - `plus`运算符签名：

      ```kotlin
      public operator fun plus(context: CoroutineContext): CoroutineContext
      ```

  - 实例：

    ```kotlin
    val name = CoroutineName("Corouter")
    val exceptionHandler = CoroutineExceptionHandler{context,exception->exception.printStackTrace()}
    launch(name + exceptionHandler){...}
    ```

- 至此，我们就解决了`CoroutineContext`传参的问题了，那么，我们应该怎么取出来呢？

  - 这个kotlin协程早就为我们解决了，每个协程都会携带一个`CoroutineContext`，并且是可以从其内部进行访问的，而且更方便的是，正如前面介绍所说的，该`CoroutineContext`是由一组索引元素组成的，所以，可以直接用`key-value`的方式访问其中特定的元素

  - 实例：

    ```kotlin
    val name = CoroutineName("Corouter")
    val exceptionHandler = CoroutineExceptionHandler{context,exception->exception.printStackTrace()}
    launch(name + exceptionHandler){
        val coroutineName = CoroutineContext[CoroutineName]
        val exceptionHanlder = CoroutineContext[CoroutineExceptionHandler]
    }
    ```

### 协程作用域`CoroutineScope`

- `CoroutineScope`即协程运行的作用域，这里提供其源码定义：

  ```kotlin
  public interface CoroutineScope {
      public val coroutineContext: CoroutineContext
  }
  ```

- 从上面的源码定义可以看出`CoroutineScope`的代码很简单，主要作用是提供`CoroutineContext`，因为启动协程需要 `CoroutineContext`

- 作用：作用域可以管理其域内的所有协程。一个`CoroutineScope`可以有许多的`子scope`。协程内部是通过 `CoroutineScope.coroutineContext`自动继承自父协程的上下文。而`CoroutineContext`就是在作用域内为协程进行线程切换的快捷方式。

- 注意：当使用`GlobalScope`来启动一个协程时，则新协程的作业**没有父作业**。 因此它与这个启动的作用域无关且**独立**运作。`GlobalScope`包含的是`EmptyCoroutineContext`

  - **一个父协程总是等待所有的子协程执行结束**。父协程并不显式的跟踪所有子协程的启动，并且不必使用`Job.join` 在最后的时候等待它们。
  - **取消父协程会取消所有的子协程**。**所以使用 Scope 来管理协程的生命周期**。
  - 默认情况下，协程内，某个子协程抛出一个非`CancellationException` 异常，未被捕获，会传递到父协程，**任何一个子协程异常退出，那么整体都将退出**

#### 创建`CoroutineScope`

创建一个`CoroutineScope`, 只需调用`public fun CoroutineScope(context: CoroutineContext)`方法，传入一个`CoroutineContext`对象。

- 示例：

  ```kotlin
  val dispatcher = Executors.newFixedThreadPool(1).asCoroutineDispatcher()
  val myScope = CoroutineScope(dispatcher)
  myScope.launch {
      ...
  }
  ```

### 生成器

- 定义：生成器是一个可以**按需要惰性地生成值的迭代器**，并且使用`yield`函数将值发送出去。值得注意的是，虽然它的实现看起来像是连续的，但在请求下一个值之前，其执行将被挂起；且生成器总是控制它的调用者，而协程可以控制其他协程；最后，`sequence`可以进行多次迭代，**且是无状态的**

- 实例：

  ```kotlin
  fun main() {
      val fibonacci = sequence {
          yield(1)
          var a = 0
          var b = 1
          while (true){
              val next = a + b
              yield(next)
              a = b
              b = next
          }
      }
  
      for (item in fibonacci.take(10)) {
          println(item)
      }
  }
  // 运行结果：
  1
  1
  2
  3
  5
  8
  13
  21
  34
  55
  ```

  从上面的示例中可以看出，`sequence`与协程构建器类似，都接收一个挂起`Lambda`，但它本身不是挂起函数，而是使用协程来计算新的值。`yield`是一个`挂起函数`，而不是一个`异步函数`（也就是说，`yield`并不会进行异步操作），它会将执行挂起直到下一个元素被请求

- 这里附上`sequence`的函数签名：

  ```kotlin
  public fun <T> sequence(@BuilderInference block: suspend SequenceScope<T>.() -> Unit): Sequence<T> = Sequence { iterator(block) }
  ```

## `actors`与`channels`

#### actors

- 定义：一个`actor`是由协程、被限制并封装到该协程中的状态以及一个与其他协程通信的**通道`channel`**组合而成的一个实体。简单点理解，`actor`就像是一个**收发器**，即可以接受其他收发器发送来的消息，也能向其他收发器发送消息，`channel`就是收发信息的**管道**，消息可以在上面进行传输
- 注意：
  - `actor`不会直接共享可变状态，`actor`与`actor`之间，只能通过**传递消息**来实现通信，所以每个`actor`都会附加一个消息通道以便能够接收消息。而且`actor`能基于所接收到的消息来决定其接下来的行为，如生成更多的`actor`、发送消息、操纵其私有状态等。
  - `actor`之间**不会存在竞争条件**，所以在没有共享状态时，不需要使用锁机制
- `actor`与`channel`的关系：
  - `actor`可以与`channel`建立**多对多**的关系，这么做的目的是，单个`actor`可以读取多个`channel`中的信息，同样的，多个`actor`也可以从同一个`channel`中读取消息，值得注意的是，虽然这是一个并大模型，但`actor`自身是按照顺序来工作的，即如果接收到多条信息，则会按照顺序对接收到的信息进行处理
- 创建使用`actor`：
  - 创建：使用kotlin的`actor`函数即可创建一个`actor`实例，并将其用来通信
    - 本质上，该函数是另一种**协程构建器**，因为在kotlin中，`actor`被认为是协程

- 示例：

  ```kotlin
  import kotlinx.coroutines.GlobalScope
  import kotlinx.coroutines.channels.actor
  import kotlinx.coroutines.runBlocking
  
  fun main() {
      val actor = GlobalScope.actor<String> {
          val message = channel.receive()
          println(message)
      }
  
      runBlocking {
          actor.send("Hello,I am an actor!")
          actor.close()
      }
  }
  
  // 运行结果：
  Hello,I am an actor!
  ```

  
