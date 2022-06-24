---
index: 1
title : Java中判断对象相等
category : 
  - Java
  - interview
tag : 
  - Basics
---

## Java中的数据类型分类

### 基本数据类型

- byte
- short
- char
- int
- long
- float
- double
- boolean

### 引用类型

- 类
- 接口
- 数组

## == 与 equals

- 如果是基本数据类型之间，则用 **==** 进行比较，此时比较的是其字面量，也就是其值

- 如果是引用类型之间进行比较，则用 **==** 进行比较时，比较的是 **其内存地址**，也就是同一个对象才会为 **true**，而实际使用中，常常要比较的是两个对象内的值是否相等，则此时可以用 **equals** 进行比较，比较的就是对象内值是否相同了（需要重写，自定义比较规则）

- 值得注意的是：

  - 对象是放在堆中的，栈中存放的是对象的引用（地址）。由此可见，**双等号是对栈中的值进行比较的**。如果要比较堆中对象是否相同，那么就要重写 **equals** 方法了。

  - Java 的对象的公共父类是 Object，所有默认情况下，**equals** 方法也是继承自 **Object** 类的，而 **Object** 的 **equals** 方法主要是用来判断对象的内存地址引用是否是同一个地址，所以一般情况下，我们都需要覆盖 **equals** 方法，下面给出 **Object** 中 **equals** 方法的定义：

    ```java
    public boolean equals(Object obj) {  
        return (this == obj);  
    } 
    ```

##  参考

[Java中equals、hashcode和==的区别](https://blog.csdn.net/hla199106/article/details/46907725)