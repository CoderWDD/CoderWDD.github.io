---
index: 9
icon: markdown
title: 四大组件之ContentProvider
category:
  - AndroidBasics
  - Interview
tag:
  - ContentProvider
  - 面试
---

## 作用

- 对要共享给其他应用的数据创建了外部访问接口，其他应用只需调用这些接口就能访问到要交互的数据了

- 注意：

  - 要访问数据，就必须要知道其内容的 Uri 是什么，因为它是 ContentProvider 的数据的唯一标识，由 authority、path 和协议声明组成。
  - 其中 authority 采用包名命名，区分了不同应用程序
  - path 可命名为 "/表名"，用来区分同一应用程序中不同的表，最后再加上协议声明

- Uri 的标准写法：

  ```java
  content://包名/表名
  content://com....
  ```

## 系统 ContentProvider

- 对于系统已经封装实现的 ContentProvider （通讯录、短信等），我们不需要关心其具体实现，就可以直接使用：
  - 获取 ContentResolver 实例：getContentResolver()
  - 解析 Uri：Uri.parse('内容 Uri')
  - 调用增删改查方法：跟 SQLite 数据库的增删改查方法类似

## 自定义 ContentProvider

- 将自定义的 ContentProvider 继承自 ContentProvider 类，然后重写以下抽象方法：	
  - onCreate()
  - query()
  - insert()
  - update()
  - delete()
  - getType()

## 面经

- **ContentProvider 的作用？**
  - 是 Android 以结构化方式存储的数据工具，能以相对安全的方式封装数据并且提供简易的处理机制。且ContentProvider 提供了不同进程间数据交互的标准化接口来供外部调用
- **ContentProvider、ContentResolver、ContentObserver之间的关系？**
  - 通过 ContentResolver 来对 ContentProvider 提供的数据进行访问与修改，并且通过注册 ContentObserver 来监听数据的变化情况