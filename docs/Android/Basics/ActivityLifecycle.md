---
index: 1
icon: markdown
title: 四大组件之Activity
category:
  - Android Basics
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

### 生命周期

