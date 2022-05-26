---
category: 
  - kotlin
index : 4
title : Kotlin常用语法
---

# Kotlin常用语法

本页主要内容采摘自[Kotlin官网整理](https://kotlinlang.org/docs/idioms.html)，主要是一些常用的，但不方便单独整理的Kotlin语法。如果你觉得还有一些其他语法需要被记录，欢迎留言，收录会记录语法提供者

## Create DTOs（POJOs/POCOs）

- 当你需要创建一个数据类，同时需要该类实现以下方法时（这并不少见）：

  - 类属性的`getter`、`setter`
  - `equals()`
  - `hashCode()`
  - `toString()`
  - `copy()`
  - `componentN()`：一个重要的应用是：可以实现`解构声明`

- 用`data`关键字声明为`数据类`：编译器就会自动生成上述方法

  ```kotlin
  data class ClassName(parameters)
  ```

- 细节：
  - 为了保证代码一致性，`数据类`需要还需要满足以下的要求：
    - 主构造函数需要有最少一个参数（否则就不会生成`ComponentN()`）
    - 主构造函数的参数，都需要被`val`或`var`修饰（为了统一）
    - 被声明为`数据类`的类，不能被`abstract`、`open`、`sealed`、`inner`修饰
  - 次构造函数里的赋值不会被copy到新对象，所以要注意次构造函数里的赋值操作
  
- 更多说明：参考官方文档关于[Data Classes的说明](https://kotlinlang.org/docs/data-classes.html#data-classes-and-destructuring-declarations)

## 类参数的默认值

- 如果你需要为类里面的参数，设置默认值，以防在未传响应参数时报错，就需要用到Kotlin对于类成员变量的默认值设置语法

- 用法：

  ```kotlin
  fun ClassName(a: Int = 0, b: String = "") { ... }
  ```

## 集合过滤器（filter）

- 当你需要对一个`list`中的每个成员按照一定条件进行过滤时，就需要用到Kotlin提供的`filter()`函数

- 用法：

  ```kotlin
  val positives = list.filter { x -> x > 0 }
  ```

  `or`：

  ```kotlin
  val positives = list.filter { it > 0 }
  ```

- 注：与Java不同的不同点，参考官方文档[Java与Kotlin关于Filter语法的对比](https://kotlinlang.org/docs/java-to-kotlin-idioms-strings.html#create-a-string-from-collection-items)

## 遍历Map、Pairs

- 如果你需要对一个`Map`集合或者一个类型为`Pair`的`List`集合进行遍历时，就可以用到该语法，比Java更方便简介

- 用法：

  ```kotlin
  for ((key,name) in map){
      println("$key -> $name")
  }
  ```

## 扩展函数

- 当你需要觉得某个类型提供的功能不够好，并且希望为其添加特定功能时，就需要用到该语法

  ```kotlin
  fun String.spaceToCamelCase() { ... }
  "Convert this to camelcase".spaceToCamelCase()
  ```

- 泛型扩展函数：

  ```kotlin
  fun <T> T.myPrintFunc(): T{
      println(this)
      return this
  }
  "abs".myPrintFunc()
  ```

## 交换两个变量的值（优雅永不过时）

- 当你需要交互两个变量的值，但又想优雅得实现时，就可以利用`also`语法优雅实现

- 用法：

  ```kotlin
  var a = 1
  var b = 2
  a = b.also { b = a }
  ```

## TODO()函数

- 在编写代码的过程中，当你需要先调用某个函数，但又不想马上实现时，就可以利用Kotlin提供的`TODO函数`，这样你就可以专注于当前逻辑代码的实现了。

- 细节：

  - `TODO()`与注解的`TODO`的比较：

    - `TODO()`是能直接调用的，而且有返回值，类型为`Nothing`，这决定了任意类型都可以接受它
    - `TODO()`和`TODO`都可以被`IDEA`识别到，并自动添加到`TODO tool`栏目中

  - `TODO()`有两种默认实现：

    - 有参：只有**一个参数**，用于说明原因，相当于`自定义异常`的简单使用

      ```kotlin
      fun calcTaxes(): BigDecimal = TODO("Waiting for feedback from accounting")
      ```

    - 无参：没有参数，直接抛出`NotImplementedError`异常，说明默认为`An operation is not implemented.`

      ```kotlin
      fun calcTaxes(): BigDecimal = TODO()
      ```

