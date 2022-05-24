---
category: 
  - kotlin
index : 3
---

# Null Safety

空安全，就是强制保证在运行过程中，避免出现NPE问题

如果允许让变量为Null，则容易导致常见的空指针异常`NullPointerException`，且这种异常，常发生在程序运行时，导致程序无法正常运行。所以，Kotlin`提前在编译器就强迫`我们重视起来，而不是等到运行时报错。

## 可空类型

- Kotlin的变量，都默认`不能被赋值为null`：

  ```kotlin
  var str: String = 'I am a string'	// work,默认为不可空(non-null)类型
  str = null	// compilation error,编译报错，视图给不可空变量赋空值
  ```

- 为了允许出现`null`，可以用`?`修饰变量:

  ```kotlin
  var str: String? = 'I am a string'
  str = null	// work
  ```

## 安全调用操作符

- 当一个变量为**可空类型**时，则调用该变量的属性时，需要使用安全调用操作符：`常被用于链式调用中`

  ```kotlin
  val a = "Kotlin"
  val b: String? = null
  println(b?.length) // will not be called
  println(a?.length) // Unnecessary safe call
  ```

  - 注：当b为`null`时，安全调用操作符`?.`就会**停止运行**该处代码，防止报错

## 非空断言操作符

- 当一个变量为**可空类型**时，则调用该变量的属性时，除了用`安全调用操作符`，还可以用非空断言操作符`!!.`：

- 代码执行逻辑：变量不为`null`时，就会执行，否则抛出异常

- 用法：

  - 为`null`时：

    ```kotlin
    fun main(args: Array<String>) {
        //可空类型变量
        var age: String? = null
        //使用非空断言修饰符
        val result = age!!.toInt()
        //打印结果
        println(result)
        //随便打印一句话
        println("非空断言修饰符后面的一句话")
    }
    ```

    运行结果：

    ```kotlin
    Exception in thread "main" kotlin.KotlinNullPointerException
    ```

  - 不为`null`时：

    ```kotlin
    fun main(args: Array<String>) {
        //可空类型变量
        var age: String? = "18"
        //使用非空断言修饰符
        val result = age!!.toInt()
        //打印结果
        println(result)
        //随便打印一句话
        println("非空断言修饰符后面的一句话")
    }
    ```

    运行结果：

    ```shell
    18
    非空断言修饰符后面的一句话
    ```

- 安全调用符和非空断言的对比：

  ![img](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/f694cdda90366f7e24e01b082697dfc5_1360x225.png)

- 注：非空断言操作符（!!.）会将任何变量（可空类型变量或者非空类型变量）转换为非空类型的变量，若该变量为空则抛出异常

## 空合并操作符（Elvis运算符）

- 如果要为可能为`null`的变量，设置默认值，可以使用空合并操作符`?:`

- 用法：

  ```kotlin
  var strA: String? = "Hello"
  strA = null
  len = strA.length ?: -1		// 正常运行，结果为-1
  ```

## 参考资料

[CSDN上的更全面的文章](https://blog.csdn.net/m0_37796683/article/details/107515659)