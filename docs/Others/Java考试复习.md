---
category:
  - Others
index : 6
title :  Java考试复习
author : 吴某人的宝贝
---

# Java考试复习

## 题型

- 设计题要求

  - 写出类拿分，然后在考虑类与类之间的关系

  - 说明关键设计步骤和要点，如类名，类的属性和方法、调用关系（答法：有什么类，类里有什么东西，基于程序步骤的调用关系，分点答或者使用UML图）

  - 可以使用UML

  - 学习P109面向抽象编程例题（重点）

    ![image-20220607173201100](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607173201100.png)

    ![image-20220607173222994](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607173222994.png)

    ![image-20220607173249368](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607173249368.png)

  - P112的UML类图

    ![image-20220607173310249](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607173310249.png)

    ![image-20220607173327274](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607173327274.png)

- 分析题

  - 给一个写好的程序，填空｜有没有错，错在哪里，改正/改正之后的程序结果｜输出结果｜用了什么关键字（概念的解释）

- 编程题

  - 手写代码。。有可能会有填空题

## UML图

### UML类图（表示是什么类以及类中有什么属性）

- 在类的UML图中，使用一个长方形描述一个类，将长方形分成三部分
  - 第一层是名字层
    - 如果类的名字是常规字体，表示具体类
    - <font color="red">如果类的名字是斜体，表示抽象类</font>
  - 第二层是变量层
    - 列出类的成员变量以及类型，格式为：`“变量名字：类型”`，根据需要列出最重要的成员变量即可
  - 第三层是方法层
    - 列出类的方法，格式为：`方法名字(参数列表)：类型`，同样，列出最重要的方法即可

![image-20220607173931594](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607173931594.png)

### UML关联关系

- 如果A类中的成员变量是用B类声明的对象，就称A和B为关联关系。使用一个实线连接A和B的UML图，实线的起始端是A的UML图，终点端是B的UML图，在终点端使用一个方向箭头表示实线的结束
- 图中Pillar类中的bottom成员变量是用Circle类声明的对象，所以从Pillar类到Circle类连一条实线
- 一个类中的成员变量的类型是外部的类的时候，就是关联关系

![image-20220607174351812](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607174351812.png)

### UML依赖关系

- 如果A类中的某个方法的参数是用B类声明的对象或者某个方法返回的数据类型是B类对象，就是依赖关系
- 同关联关系一样，只不过中间用虚线连接

- 类中的方法引用了外部的类，但是成员变量里没有引用外部的类，就叫做依赖关系

![image-20220607174821601](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607174821601.png)

#### 依赖关系和关联关系的区别就是成员变量里面有没有引用外部的类，如果有使用就是依赖关系，没有使用就是关联关系

### UML继承关系

- 如果一个类是另一个类的子类，就通过一个实线来表示两者的继承关系，从子类指向父类<font color="red">注意：终点的箭头是空心的</font>

![image-20220607181254038](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607181254038.png)

### UML接口

- 接口的UML表示
  - 第一层是名字层，接口的名字必须是斜体，并且要用`<<interface>>`修饰，并且修饰和名字要分布在两行
  - 第二层是常量层，列出接口的常量和类型，格式为：`“常量名字：类型”`
  - 第三层是方法层，列出接口中的方法及其返回类型，格式为：`“方法名字（参数列表）：类型”`

![image-20220607181520128](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607181520128.png)

- 面向接口编程及UML类图例题：（重点）

  ![image-20220607182207945](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607182207945.png)

  ![image-20220607182228285](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607182228285.png)

  ![image-20220607182251768](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607182251768.png)

  ![image-20220607182302466](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607182302466.png)

## 第一章：面向对象入门、Java基础（默认你会）

### 什么是面向对象

- 面向对象编程是一类以对象作为基本程序结构.单位的程序编程思想。Java是面向对象编程语言中的的一种代表性语言。

- 对象是对问题领域中事物的抽象，万物皆为对象

- 面向对象程序设计有以下特点:

  - 将软件看作对象的集合，更接近人类思维方式;
  - 软件需求经常变更，对象不经常变更;
  - 在对象中，数据和方法封装在一起。确保了代码的相对独立性。
  - 支持封装、抽象、继承和多态等特征，提高了软件的可重用性、可维护性和可扩展性。

- 基本数据类型

  ![image-20220607192025528](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607192025528.png)

  

## 第二章：<font color="red">类和对象</font>、面向对象程序设计概念、方法、访问控制、Static修饰符（默认你会）

### 面向对象程序设计

- 先考虑有什么类，然后再考虑类之间的交互

![image-20220607192104008](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607192104008.png)

### 类与对象

- 对象是对问题领域中事物的抽象，对应了每个具体的事物。
- 类是一组具有相同属性方法的对象的抽象,对应了抽象的概念。类是对象的模板。
- 类实例化后是一个对象。对象是其对应类型的一个实例。

### 面向对象编程重要概念

- 消息与服务
- 接口
- 封装、透明
- 抽象
- <font color="red">继承</font>、扩展、覆盖
- 组合
- <font color="red">多态、动态绑定</font>

### 方法（重点）

```java
void speak(String s){
    System.out.println(s);
}

声明格式：
    
返回类型 方法名（参数列表）{
    方法主体
}
```

### 构造对象

- 构造器初始化

  ```java
  Student stu1 = new Student();
  stu1.name = "张三";
  stu1.grade = 2020;
  stu1.score = 85;
  上述方法可以实现，但是不大ok
  
  构造器初始化方式（比较好）
      
  Student stu2 = new Student("张三",2020,85)
  ```

- 构造器方法

  ```java
  public class Hello{
      public Hello(){...}
  }
  ```

  - 方法名必须与类名相同
  - 不能声明返回类型
  - 不能被 static、abstract 修饰

- 默认构造方法

  ```java
  public class Hello{}
  Hello h = new Hello();    //合法
  ```

  若类中定义有构造方法，且所有的构造方法都带有参数，则该类没有默认构造方法

  ```java
  public class Hello{
      public Hello(String word){....}
  }
  Hello h = new Hello();    //不合法
  ```

### 方法重载（根据给的参数不同，调用不同的方法）

- 类中的方法如果有多个方法拥有相同的名称，但是参数不一致时，JVM会根据实际调用时输入的参数调用对应的方法。这种行为被称为重载。

  ```java
  public void speak(){
      System.out.println("Hello World!");
  }
  public void speak(String words){
      System.out.println(words);
  }
  ```

### 访问控制

- 成员变量、成员方法和构造方法可以是四个级别的其中一个，顶层类只能是公开或者默认访问类别

![image-20220607193207315](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607193207315.png)

### Static修饰符（了解）

- 可以用来修饰以下内容：
  - 修饰成员变量/方法，表示静态变量/方法
  - 修饰程序代码块，JVM加载类时即执行（听不懂）
- 被 static 修饰的变量和方法可以直接通过类的名字访问，且被类的所有实例共享

### 变量作用域（理解）（可以用来考察程序有没有错，有没有问题）

- 变量的作用域指变量的存在范围，只有在对应范围内相应的变量才可以被访问。变量按作用域可分为以下类型:
  - 成员变量:在类中声明.
  - 局部变量:在方法或方法内的代码块声明。
  - 方法参数:方法或者构造方法的参数。
  - 异常处理参数: 类似方法参数。（没听过，不会）

### 参数传递

如果一个方法的参数是基本数据类型,则调用该方法时向其传递的是参数的值;如果参数是对象或数组(引用类型),则向其传递的是对象或数组的引用。

![image-20220607193740078](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607193740078.png)

![image-20220607193853900](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607193853900.png)

---

## 第三章：<font color="red">继承与多态</font>、方法重写、<font color="red">动态绑定</font>（分析题｜调用方法）、<font color="red">抽象类</font>

### 继承 inheritance（会写）

在 Java 中，用 extends 关键字表示一个类继承了另一个类

```java
public class SubClass extends SuperClass{
    ......
}
```

下面那个V3是默认访问类别，所以B中应该不能访问A中的v3

![image-20220607194046169](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607194046169.png)

### super 关键字

Java通过 super 关键字来实现对父类成员的访问

```java
	super.age;
    super.method();

//子类构造方法中
	super();
```

### 方法重写和方法重载

- 方法重写需要参数一致，重载参数不一致
- 方法重写需要返回类型益智，重载没限制
- 方法重写只能用于子类覆盖父类的方法，重载用于同一个类中的所有方法，包括继承来的方法

### 多态（重要）

```java
Animal animal = new Dog();
animal = new Cat(); //没有的话是Dog的eat方法，有的话就是Cat的eat方法
animal.eat(food);

//增加其他类，满足可扩展性
class fish(){
    eat(){.....}
}
```

![image-20220607203557482](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607203557482.png)

![image-20220607203640836](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607203640836.png)

![image-20220607212228212](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607212228212.png)

![image-20220607203932123](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607203932123.png)

![image-20220607204002219](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204002219.png)

属性都是静态绑定的，在编译时候只看本身的类

![image-20220607204113934](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204113934.png)

![image-20220607204140387](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204140387.png)

### abstract修饰符

```java
public abstract class Base{     //抽象类
    abstract void method();     //抽象方法
    void method2(){
        .....
    }
}
```

- 抽象类中可以没有抽象方法，但是有抽象方法的类必须声明为抽象类
- 如果子类没有实现父类中的所有抽象方法，则改子类也必须要声明为抽象类
- 抽象类不能被实例化

```java
public abstract class Animal{
    abstract void eat();
};

public class Dog extends Animal{
    //Dog的具体实现
}
```

### 面向抽象编程

- 所谓面向抽象编程，指当涉及某种重要的类的时候，不应该让类面相具体的类，而是面向抽象类

- 就是在程序中要使用某些类的时候，引用该类的变量类型不要定义为具体类型而是定义为抽象类型

- 例题：在本篇第一个提到的P109的内容

  ![image-20220607204718121](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204718121.png)

  ![image-20220607204732722](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204732722.png)

  ![image-20220607204744905](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204744905.png)

  ![image-20220607204803418](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204803418.png)

  ![image-20220607204817576](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607204817576.png)

## 第四章：<font color="red">接口</font>、接口设计模式

### 什么是接口

- 用于明确的描述系统对外提供的所有服务，他能够清晰的把系统的实现细节与接口分离
- 接口不能被实例化，在接口类中声明了系统对外所能提供的服务，但不给出具体实现

### 接口的声明

- 表示所有能拍照的工具类型

  ```java
  public interface Photographale{
      public void takePhoto();
  }
  ```

### 接口的使用

- 一个类只能继承一个直接父类，但是可以实现多个接口

  ```java
  public class MyApp extends JavaApp implements Runnable,MouseLisetener{...}
  ```

### 面向接口编程

- 接口用来明确系统中某些功能所需要实现的服务

  ![image-20220607205329083](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607205329083.png)

  ![image-20220607205343573](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607205343573.png)

## 第五章：内部类与<font color="red">异常处理</font>（好好了解）

### 异常处理机制

- 将不同类型的异常进行分类。通过异常类来表示异常信息
- 异常流程和正常流程代码分离
- 灵活处理异常，当前方法能处理就处理，不能就给到上一级的调用者去处理

### 异常类声明

```java
public class CarException extends Exception{
    public CarException(){}
    public CarException(String msg){
        super(msg);
    }
}
```

### 运用异常处理机制（肯定考）

- throws子句：声明可能会出现的异常

  ```java
  public void run() throws CarException，SQLException{
      ...
      if(无法启动){
          throw new CarException("无法启动")
      }
      if(打不开门){
          throw new SQLException("打不开门")
      }
  }
  ```

  ![image-20220607210008748](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210008748.png)

  ![image-20220607210032109](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210032109.png)

  ![image-20220607210049833](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210049833.png)

- Try-catch语句：捕获异常（如果显示声明throws抛出异常，一定要写）

  ```java
  try{
      run();
  }catch(CarException e){
      处理CarException类型的异常
  }catch(SQLException e){
  	处理SQL操作的异常
  }finally{  //没有也没关系
      ...
  }
  ```

## 第六章：常用实用类、<font color="red">String类</font>（截取｜前后空格｜找一个字母）

- 重点是String类

![image-20220607210111242](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210111242.png)

### 字符串输出（最后一个为%m.nf）

![image-20220607210139969](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210139969.png)

```java
int a = 1;
System.out.println("output:%3d",a);

output：  1（前面含有两个空格）
```

```java
int b = 2;
System.out.println("output:%-5d",b)
    
output：2    （四个空格，占-5行，就是往左对齐）
```

### Java集合

![image-20220607210316036](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210316036.png)

### 数组声明

![image-20220607210334839](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607210334839.png)

### 数组初始化

```java
int[] scores = new int[5];
for(int i = 0; i < 5; i++){
    scores[i] = i;
}
```

```java
int[] a = {3,2,1};
int[] b = new int[]{5,4,3,2,1};
```

### 遍历数组

- foreach语句

  ```java
  int[] array = {1,2,3};
  for(int x : array}{
      System.out.println(x);
  }
  ```

- 打印数组内容

  ```java
  int[] array = {1,2,3};
  System.out.println(Array.toString(array));
  //[1,2,3]
  ```

## 第七章：<font color="red">Java GUI编程</font>（基本写法编程题必出）

### 创建GUI的基本步骤（重点）

### 窗口及组件（重点）

- 声明窗口和组件，作为成员变量声明

- 在构造函数内做布局设置参数

- ![image-20220607184458140](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607184458140.png)

- 主程序中实例化

  ![image-20220607184534122](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607184534122.png)

### 布局管理器（不是重点）

### 事件处理（重点）

- 最通用的方式，传自定义的event，固定写法

![image-20220607184658388](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607184658388.png)

- myEvent的定义

  ![image-20220607184756722](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607184756722.png)

​	![image-20220607184832364](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607184832364.png)

### 需掌握：实验三-简单计算程序和引入的包

## 第八章：<font color="red">多线程</font>、<font color="red">输入输出流</font>（基本写法编程题必出）

### 多线程（概念：了解）

- 进程是指运行中的应用程序，每个进程拥有独立的内存空间。一个应用程序内可以同时启动多个进程
- 线程指进程中的一个执行流程。一个进程中可以同时运行多个不同的线程。当进程中多个线程同时运行的时候，称为并发运行

### 创建线程的方式

- 扩展java.lang.Thread类

  - 扩展实现run方法

  ![image-20220607185416947](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607185416947.png)

- 实现Runnable接口（一般使用）

  - 实例化实现run方法的类
  - 实例化线程类，将上面的示例传进去，线程就会调用Runnable内的run方法

  ![image-20220607185511527](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607185511527.png)

### 线程调度

同时启动多个线程，不能保证各个线程轮流获得均等的时间，若希望一个线程给另一个线程运行机会：

- 调整各个线程的优先级
- 运行线程调用Thread.sleep()方法（主要掌握）
  - 阻塞当前线程，让这个线程停止多长时间
  - 
- 运行线程调用Thread.yield()方法
- 运行线程调用另一个线程的join()方法

### 线程的写法

![image-20220607185945474](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607185945474.png)

---

可以通过传入相同的参数构建两个线程，可以实现同步锁（当一个线程被调用的时候，另一个需要等这个线程调用完毕后才可以调用）。。。（了解即可）

![image-20220607190234030](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607190234030.png)

### 线程同步（了解）

![image-20220607190527384](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607190527384.png)

![image-20220607190541243](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607190541243.png)

![image-20220607190550844](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607190550844.png)

### 输入与输出（I/O）

- 有两种数据流：

  - 字节流：流中最小的数据单元是字节。对应 java.io.InputStream 和 java.io.OutputStream
  - 字符流：流中最小的数据单元是字符。对应 java.io.Reader 和 java.io.Writer

  以上都是抽象类

- 实例化 java.io.InputStream 类后调用里面的方法（重点掌握后面两个）

  ![image-20220607191006627](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607191006627.png)

  ![image-20220607191359282](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220607191359282.png)

  



























