---
index: 1
icon: markdown
title: 四大组件之Activity
category:
  - AndroidBasics
  - Interview
tag:
  - Activity
  - 面试
---

## Android四大组件

作为Android开发者，不可避免地要接触到Android的四大组件，因此，关于这部分的知识点，也是在工作面试中的重点，所以，在`Android四大组件`这个系列里，我整理了这方面的重要概念和高频常见问题，一方面用于我自己的复习与总结，另一方面也希望看文的小伙伴能有所收获。

- Android四大组件分别是什么呢？
  - Activity（活动）：即用户看到的界面
  - Service（服务）：会在后台一直运行，甚至在应用退出后，仍然能继续运行（比如打不死的广告）
  - Broadcast（广播接收器）：用于接收系统和其他应用发送过来的广播消息，当然，也能向系统货其他应用发送广播信息
  - ContentProvider（内容提供者）：应用之间数据交互的桥梁，为数据提供了供外界访问的各种接口

## Activity

关于Activity的主要内容，主要就围绕三个方面转，分别为：生命周期、启动模式、碎片（Fragment）

## 生命周期

- onCreate()：在系统首次创建 Activity 时触发，该回调结束后， Activity 进入“已开始”，状态，之后会调用 `onStart()` 方法
- onStart()：当 Activity 进入“已开始”状态时，系统会调用此回调。可以在此为 Activity 进入前台并支持互动做准备，即让 Activity 由不可见状态变为可见状态。例如，应用通过此方法来初始化维护界面的代码。回调结束之后，Activity 进入“已恢复” 状态，之后会调用 `onResume()`
- onResume()：处于运行状态时调用，用户可进行触碰点击页面上的各种组件，从而与活动进行交互，直到 Activity 失去焦点
- onPause()：当前 Activity 去启动其他活动时调用
- onStop()：Activity 处于完全不可见状态就调用
- onDestroy()：Activity 销毁前调用，调用之后 Activity 就会被销毁
- onRestart()：当 Activity 重新被启动时调用，由停止状态变为可见状态，然后继续运行

下面给出进程状态、Activity 状态以及系统终止进程的可能性之间的关系：

![image-20220625124027142](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220625124027142.png)

下面是各生命周期之间的流程图（来自官方）：

![Activity生命周期](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/Activity%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

## 启动模式

### 设置启动模式

- 第一种方法：在配置文件 AndroidManifest.xml 里用 android:launchMode 来指定，分别可以指定为 `standard`、`singleTop`、`singleTask`和`singleInstance`
- 第二种方法：在 Intent 中设置标记 flag 来指定启动模式

### standard

默认的启动模式，每次启动一个活动时，就会创建一个实例，并运行在启动该活动的活动栈的栈顶

### singleTop

如果任务栈栈顶中存在该 Activity 实例，则直接复用，并会调用 `onNewIntent()`方法；如果没有则会创建新的实例并且入栈到栈顶。

### singleTask

与 singleTop 不同，该启动方式，只要任务栈中存在该 Activity 实例，就会将该目标 Activity 上方的所有实例出栈，然后复用栈中的该实例。如果不存在，则会直接创建，并加入栈顶。

### singleInstance

创建一个新的任务栈来专门存储和管理该 Activity 的事务，并且会确保该 Activity 具有全局唯一性，也就是任何应用只要启动该 Activity，用的都是该实例

## Fragment

- 与 Activity 类似，也可以显示各种组件与布局的页面，也能进行嵌套，使用起来灵活性更高，便于复用，主要作用是为笨重的 Activity 引入**模块化和可复用性**，可以理解为缩小版的 Activity

- Fragment 的生命周期与 Activity 类似，下面给出其基本流程图：

  ![fragmentLifecycle](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/fragmentLifecycle.png)

## 面经

- 完整的生命周期流程及其作用：
  - 流程：`onCreate()->onStart()->onResume()->onPause()->onStop()->onDestroy()`
  - 作用：将本文上方各生命周期方法的描述
- 如果一个 Activity 正在运行，这时从前台切换到后台，然后再切回到前台，此过程中 Activity 的生命周期是怎么样的？
  - 从被创建到正在运行，依次调用了 onCreate()、onStart() 和 onResume() 方法
  - 从前台切换到后台，依次调用了 onPause()、onStop()方法
  - 又从后台切回前台，依次调用了 onRestart()、onStart() 和 onResume() 方法
- Activity 在横竖屏切换的时候的生命周期是怎么样的？
  - 当不设置 configChanges 属性时，Activity 在切换横竖屏的时候，会执行各个生命周期函数
  - 当为 Activity 设置 android:configChanges="orientation"后，再进行横竖屏切换的时候，Activity 不再执行生命周期其他方法，横竖屏各执行一次 onConfigurationChanged() 方法
  - 当为 Activity 设置 android:configChanges="orientation|screenSize"后，跟设置"orientation"的效果一样
- onNewIntent() 与 4 种启动模式有什么样的关系？
  - standard：默认情况下，每次启动 Activity，都会创建新的实例，但不会调用 onNewInent()
  - singleTop：在该模式下，每次的 Activity 只要在栈顶，就会复用该实例，然后就会触发 onNewIntent()，如果任务栈不存在该实例，就会创建新实例，但此时就不会调用 onNewIntent() 方法了
  - singleTask：在该模式下，启动的 Activity 只要在任务栈中，就会被复用，并会触发 onNewIntent() ，如果任务栈中不存在该实例，就会创建新的实例，此时就不会调用 onNewIntent()
  -  singleInstance：在该模式下，启动的 Activity 只要任务栈存在该实例，就会被复用，并触发 onNewIntent() 方法
  - 从上面的描述可以看出，onNewIntent
