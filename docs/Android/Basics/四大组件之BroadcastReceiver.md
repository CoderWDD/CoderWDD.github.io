---
index: 8
icon: markdown
title: 四大组件之BroadcastReceiver
category:
  - AndroidBasics
  - Interview
tag:
  - Activity
  - 面试
---

## 作用

用于接收系统和其他应用发来的广播，也可以向其他应用或系统发送广播

## 动态注册和静态注册

### 动态注册

- 步骤：
  - 在 Activity 中创建一个**内部类**，并让该类继承自 BroadcastReceiver，然后在该类中重写 onReceiver() 方法。
  - 接着在 Activity 中调用 **registerReceiver**()，把刚刚定义好的内部类对象作为参数**传**进该方法（值得注意的是 registerReceiver() 接受两个参数，一个是**接收器对象**，另一个是 **IntentFilter 对象**，作用是设置对象的监听对象，即可以通过 action 指定监听的广播）

- 注销：
  - 调用 **unregisterReceiver**() 进行注销

### 静态注册

直接创建 BroadcastReceiver，就会自动注册，然后就可以在创建的类中的 onReceiver() 方法中实现要处理的逻辑

## Broadcast 的类型

### 普通 Broadcast

- 一种**完全异步**的 Broadcast，发出之后，**所有** BroadcastReceiver 都能在**同一时刻**接收到该 Broadcast 的信息；
- 优点：传递效率非常高
- 缺点：安全性不能保证，因为 BroadcastReceiver 不能拦截信息，这意味着所有的应用都可以无差别获得 Broadcast 的信息，显然这并不安全

### 有序 Broadcast

- 一种**同步执行**的 Broadcast，所以该 Broadcast 发出后，同一时刻只有一个 BroadcastReceiver 可以接收到该 Broadcast 的信息，并且**还能进行拦截**，当然也可以不进行拦截，这样就会顺次向下传递，**类似于一个 filter 的作用**
- 既然是有序的，那就意味着有优先级，BroadcastReceiver 的优先级可以在其 intent-filter 元素的 android-priority 属性中设置优先级，数越大，则优先级更高，取值范围为 [-1000,1000]。
- **注意**：
  - 如果优先级相同，则动态注册的 BroadcastReceiver 优先于静态注册的
  - 如果优先级和注册类型都相同，则按注册顺序决定谁先接收

### 本地 Broadcast

- 不同于普通 Broadcast 与 有序 Broadcast 可以被其他应用接收，本地 Broadcast 发出的信息**只能在一个应用内进行传播**，所以定义的 BroadcastReceiver 也只能接收来自该应用发出的 Broadcast 信息
- 优点：安全性得到保证，因为其他的应用无法接收到信息

## 发送 Broadcast

### 发送普通 Broadcast

```java
Intent intent = new Intent("action");
sendBroadcast(intent);
```

通过定义 intent 的 action 来区分每条 Broadcast，然后可以给自定义的 BroadcastReceiver 设置能匹配的 action，当 Broadcast 一发出去，就能进行匹配从而实现接收指定的 Broadcast

### 发送有序 Broadcast

```java
Intent intent = new Intent("action");
sendOrderedBroadcast(intent,null);
```

如果需要指定优先级，可以在注册 BroadcastReceiver 的时候，在其 intent-filter 元素的 android-priority 属性中设置优先级，数越大，则优先级更高，取值范围为 [-1000,1000]。

### 发送本地 Broadcast

```java
Intent intent = new Intent("action");
localBroadcastManager.sendBroadcast(intent);
```

依托于 **localBroadcastManager** 来进行发送、注册与注销

## 面经

- **为什么不要在 BroadcastReceiver 里进行耗时操作**？
  - 如果需要在 onReceive() 方法中进行**耗时**操作，应该考虑在 **Service** 中开启一个**新线程**来处理耗时操作，而**不应该在 BroadcastReceiver 中开启新线程**，因为 BroadcastReceiver 的**生命周期很短**，在执行完 onReceive() 之后就结束了，如果在其中开启一个新的线程，可以出现 BroadcastReceiver 退出了但是线程还在的情况，而此时该线程就会被标记为**空线程**（因为 BroadcastReceiver 已经销毁了，即进程销毁），根据 Android 内存管理策略，在系统内存不足时，会按照优先级来结束等级低的线程，而**空线程的优先级是最低的**，很容易被结束，这样就可能导致该线程中的耗时任务还没执行完成，就被强制结束了，最终出现一系列错误，以至于系统会在运行程序的时候报错
- **使用 BroadcastReceiver 需要注意什么？**
  - BroadcastReceiver 的作用类似于**可以发送消息的监听者**，这使得应用程序可以互相通信
  - 静态注册的 BroadcastReceiver 为常驻组件，**不受任何组件的生命周期影响**，缺点是耗电、占内存，因为应用会时刻监听 Broadcast 的情况
  - 动态注册的 BroadcastReceiver **不是常驻组件，非常灵活，跟随组件的生命周期变化**（组件结束 = Broadcast 结束，所以在组件结束前，必须移除 BroadcastReceiver）
  - 动态的 BroadcastReceiver 最好**在 Activity 的onResume() 里注册，在 onPause() 里注销**。因为对于动态的 Broadcast，有注册就必须要有注销，否则会导致内存泄漏，且重复注册和重复注销都是不被允许的操作
- **Broadcast 引起 ANR 的时间限制是多少？**
  - 超过 **10 秒**就会引发 ANR 问题
- **如何用 BroadcastReceiver 拦截一条短信？**
  - 首先**添加**接收短信的**权限**
  - 在 AndroidManifest.xml 中**注册 BroadcastReceiver**，最好将其优先级设置得高一些，防止被其他应用拦截
  - 创建一个 BroadcastReceiver 来实现处理 Broadcast，并**设置拦截器** abortBroadcast()
  - 注意：要有拦截能力的 BroadcastReceiver，必须要为**有序** Broadcast