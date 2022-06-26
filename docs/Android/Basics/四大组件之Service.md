---
index: 7
icon: markdown
title: 四大组件之Service
category:
  - AndroidBasics
  - Interview
tag:
  - Activity
  - 面试
---

## 生命周期

| 方法             | 含义                                                         |
| ---------------- | ------------------------------------------------------------ |
| onCreate()       | 首次创建服务时，系统将调用此方法。                           |
| onStartCommand() | 当另一个组件通过调用请求启动服务时，系统将调用此方法         |
| onDestroy()      | 当服务不再使用且将被销毁时，系统将调用此方法                 |
| onBind()         | 当另一个组件通过调用 bindService() 与服务绑定时，系统将调用此方法。 |
| onUnbind()       | 当另一个组件通过调用 unbindService() 与服务解绑时，系统将调用此方法。 |
| onRebind()       | 当旧的组件与服务解绑后，另一个新的组件与服务绑定 onUnbind()，返回true时，系统将调用此方法。 |

- 下面给出 Service 的生命周期流程图：

  ![service_lifecycle](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/service_lifecycle.png)

### 注意

- 每个 Service 都只存在一个实例，所以要停止 Service 时，只需要调用一次 stopService()，不管调用了多少次 startService() 方法
- 要实现 Activity 与 Service 交互，只需要在 Activity 中调用 bindService() 方法，就可以获取 Service 的 onBind() 里返回的 IBinder对象实例
- 当要停止 Service 时，可以调用 unbindService() 方法，其 onDestroy() 就会被自动执行
- 如果同时调用了 startService() 与 bindService() 方法，那么在停止 Service 时，就需要同时调用 stopService() 与 unbindService()

## 类型

### 普通 Service

没有特别声明，一般创建的就是普通的Service，启动是方式有 startService() 和bindService()

### 前台 Service

- 可以一直运行，不会被系统回收，比如：在手机状态栏显示的应用的图标，其实就是开启了 **前台Service**。

- 权限：

  ```xml
  <manifest xmlns:android="http://schemas.android.com/apk/res/android" ...>
  
      <uses-permission android:name="android.permission.FOREGROUND_SERVICE"/>
  
      <application ...>
          ...
      </application>
  </manifest>
  ```

### 意图 Service

- IntentService，由于服务默认运行在主线程，所以如果直接使用它来处理一些耗时操作，会很容易出现 ANR 问题，所以此时可以使用 IntentService，它可以说是一般服务的升级版，继承自 Service，相比于一般 Service，它有独立的线程来处理 Intent 请求和各种耗时的操作，所以不用开发者自己动手创建线程。另外，当处理完所有请求后，它会自动停止，所以也不用自己动手调用 stopService() 方法

## 常见问题

- 为什么不能在子线程中更新UI？
  - 因为 Google 在设计 Android 时设定了 UI 控件线程是不安全的，所以在多线程中并发访问可能会导致 UI 控件处于不可预期的状态。如果像 Java 那样，给 UI 控件的访问加上锁机制，会让 UI 控件变得复杂和低效，也可能会阻塞某些进程的执行
  - 所以当要在子线程中对 UI 进行操作时，就要使用异步消息机制如 Handler 和 AsyncTask 等

## 推荐阅读

[Service生命周期全面解析](https://cloud.tencent.com/developer/article/1394219)

