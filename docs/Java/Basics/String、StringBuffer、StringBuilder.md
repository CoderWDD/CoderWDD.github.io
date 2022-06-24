---
index: 2
title : String、StringBuffer、StringBuilder
category : 
  - Java
  - interview
tag : 
  - Basics
  - String
  - StringBuffer
  - StringBuilder
---

## String

- String 定义：

  ```java
  public final class String
      implements java.io.Serializable, Comparable<String>, CharSequence,
                 Constable, ConstantDesc {...}
  ```

  可以看到，String 类被 `final` 关键字修饰，这决定了它是不可变的

- Java中的字符串都是不可变的，即都是常量，这意味着，如果用 String 存储字符串，并对字符串内容进行修改时，本质上并不是修改了字符串本身，而是创建了一个新的 String 字符串，但正因为其是不可变的，所以可以共享，下面来看看共享的好处：

  ```java
  String s1 = "asd";
  String s2 = "asd";
  System.out.println(s1 == s2);
  ```

  上面这段代码的运行结果为 `true`，因为 s1 和 s2，虽然是两个对象，但其字符串常量是一样的，所以是一个字符串常量被复用，故虽然是两个变量，但其引用的却是同一个变量（关于引用和值的比较，可以参考`Java中判断对象相等`）

## StringBuffer

- StringBuffer 定义：

  ```java
   public final class StringBuffer
      extends AbstractStringBuilder
      implements Serializable, Comparable<StringBuffer>, CharSequence
  {...}
  ```

- StringBuffer 本质上是讲字符串以单个字符的形式存储和操作，所以，StringBuffer 的内容不是 String 而是字符，也就是，其内容是可以被修改的，且在修改的时候，是修改了原有字符串（被转换为字符）的内容，而不会 new 出来一个新的字符串
- StringBuffer 除了构造器方法之外，所有的 public 方法，都用了 `synchronized` 修饰，这使得 StringBuffer 在多线程中也是安全的，但加锁必然会导致性能降低，因此其性能必然没有 `StringBuilder` 来得高

## StringBuilder

- StringBuilder 定义：

  ```java
  public final class StringBuilder
      extends AbstractStringBuilder
      implements java.io.Serializable, Comparable<StringBuilder>, CharSequence
  {...}
  ```

  可以看到StringBuilder 和 StringBuffer 类的定义都是一样的，区别只在于其 public 方法有没有被 `synchronized` 修饰而已

- 因为 StringBuilder 与 StringBuffer 定义相同，且都是调用的其父类中的方法来实现的，所以二者的实现原理也相同，**只是前者是线程不安全的，后者是线程安全的**

## 总结

- 运行效率：$StringBuilder>StringBuffer>String$
  - 分析：
    - StringBuilder 和 StringBuffer 要保证线程安全，就必须牺牲效率，所以，线程安全的 StringBuffer 效率自然没有 StringBuilder 高
    - String 是不可改变的对象，这意味着每次有新的字符串都需要重新 new 一个新的对象，而 new 对象的过程，必然是要比在原字符串上进行修改来的慢的，不管是否是线程安全，所以在字符串较多时， String 的效率必然是最差的
- 选择策略：
  - 字符串不多时：String
  - 多线程共享字符串：StringBuffer
  - 单线程、大量字符串：StringBuilder

## 相关文章

[博客园-String、StringBuffer和StringBuilder的区别](https://www.cnblogs.com/coding8832/p/14462841.html)

[非常有意思的对话式学习](https://blog.51cto.com/u_11520563/2911819)