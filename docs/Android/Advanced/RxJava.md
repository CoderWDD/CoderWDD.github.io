---
index : 1
title : RxJava
category: 
  - RxJava
---



## 创建操作符

作用：创建 被观察者 的各种操作符

- `create()`：创建一个 被观察者
- `just()`：创建一个 被观察者，并发送事件，发送的事件不能超过 10 个以上
- `From 操作符`：
  - `fromArray()`
  - `fromCallable()`
  - `fromFuture()`
  - `fromIterable()`
- `defer()`：这个方法的作用就是直到 被观察者 被 订阅 后才会创建 被观察者
- `timer()`：当到指定时间后就会发送一个 0L 的值给 观察者
- `interval()`：每隔一段时间就会发送一个事件，这个事件是从 0 开始的，不断增 1 的数字
- `intervalRange()`：可以指定发送事件的开始值和数量，其他与 `interval()` 的功能一样
- `range()`：同时发送一定范围的事件序列
- `rangeLong()`：作用与 `range()` 一样，只是数据类型为 Long
- `empty()`：直接发送 `onComplete()` 事件
- `never()`：不发送任何事件
- `error()`：发送 `onError()` 事件

## 转换操作符

- `map()`：可以将 被观察者 发送的数据类型转变成其他的类型
- `flatMap()`：可以将事件序列中的元素进行整合加工，返回一个新的 被观察者
- `concatMap()`：与 `flatMap()` 基本一样，只不过 `concatMap()` 转发的事件是有序的，而 `flatMap()` 是无序的
- `buffer()`：从需要发送的事件当中获取一定数量的事件，并将这些事件放到缓冲区当中一并发出
- `groupBy()`：将发送的数据进行分组，每个分组都会返回一个 被观察者
- `scan()`：将数据以一定的逻辑聚合起来
- `window()`：发送指定数量的事件时，就将这些事件分为一组，`window` 中的 `count` 参数代表指定的数量