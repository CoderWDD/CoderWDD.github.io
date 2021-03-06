---
index: 4
title : Serializable与Parcelable
category : 
  - Java
  - interview
tag : 
  - Basics
---

## Java中序列化的方式

实现Serializable接口和实现Parcelable接口。

## Serializable与Parcelable的区别

- Serializable **是 Java的序列化接口**。特点是**简单**，直接实现该接口就行了，其他工作都被系统完成了，但是对于内存**开销大**，序列化和反序列化需要很多的 I/O 流操作。

- Parcelable **是Android的序列化方式**，主要用于在内存序列化上，采用该方法需要实现该接口并且手动实现序列化过程，相对复杂点。如果序列化到存储设备（文件等）或者网络传输，**比较复杂**，建议用Serializable 方式。

- **最大的区别就是存储媒介的不同：**Serializable 使用IO读写存储在硬盘上，Parcelable 是直接在内存中读写，内存读写速度远大于IO读写，所以Parcelable 更加高效。Serializable在序列化过程中会产生大量的临时变量，会引起频繁的GC，效率低下。