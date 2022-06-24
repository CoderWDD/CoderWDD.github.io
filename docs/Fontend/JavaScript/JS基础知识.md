---
category:
  - Fontend
index : 1
title :  JS基础知识
author : 吴某人的宝贝
---

##   JS初体验

#### 行内式JS

```html 
<input type="button" value="点我试试" onclick="alert('哈哈哈哈哈哈哈哈哈哈哈猪头打开了这个链接')" />
```

- 可以将单行或者少量的 JS 代码写在 HTML 标签的事件属性中（以 on 开头的属性），如：onclick
- 注意单双引号的使用：在 HTML 中我们推荐使用双引号， JS 中我们推荐使用单引号
- 可读性差，在 HTML 中编写JS大量代码时，不方便阅读
- 引号易错，引号多层嵌套匹配时，非常容易弄混
- 特殊情况下使用

 #### 内嵌式JS

```javascript
<script>
		alert('Hello World!');
</script>
```

- 可以将多行JS代码写到`<script>`标签中
- 内嵌JS是学习时常用的方式

#### 外部JS文件

```html
<script src="my.js"></script>
```

- 利于HTML页面代码结构化，把大段 JS 代码独立到 HTML 页面之外，既美观，也方便文件级别的复用
- 引用外部 JS 文件的 script 标签中间不可以写代码
- 适合 JS 代码量比较大的情况

#### JavaScript输入输出语句

	为了方便信息的输入输出，JS 中提供了一些输入输出语句，其常用的语句如下

> alert(msg)：浏览器弹出警示框

```js
alert('计算的结果是：');
```

> Console.log(msg)：浏览器控制台打印输出信息

```js
console.log('我是程序员能看见的');
```

> prompt(info)：浏览器弹出输出框，用户可以输入

```js
prompt('请输入你的年龄：');
```

## 变量的使用

#### 声明变量

```js
//声明变量
var age; //声明一个名称为age的变量
```

- var 是一个 JS 关键字，用来声明变量。使用该关键字声明变量后，计算机会自动为变量分配内存空间
- age是程序员定义的变量名，我们需要通过变量名来访问内存中分配的空间

> 数字型变量的范围
>
> ```js
> alert(Number.MAX_VALUE);
> alert(Number.MIN_VALUE); 
> ```
>
> 数字型变量三个特殊值：
>
> - infinity，代表无穷大，大于任何数值
> - -infinity，代表无穷小，小于任何数值
> - NaN，Not a number，代表一个非数值
>
> isNaN()这个方法用来判断非数字，并且返回一个值如果是数字返回false，如果不是数字，则返回true
>
> ```js
> console.log(isNaN(12))
> 返回结果为：false
> console.log(isNaN('猪'))
> 返回结果为：true
> ```

## 数组的概念

#### 数组的创建方式

JS中创建数组由两种方式

- 利用new创建数组

```js
var 数组名 = new Array();
var arr= new Array();  //创建一个新的空数组
```

- 利用数组字面量创建数组

```js
//1.使用数组字面量方式创建空的数组
var 数组名 = [];
//2.使用数组字面量方式创建带初始值的数组
var 数组名 = ['小黑''小白''大黄''瑞奇']
```

- 数组的字面量是方括号[]
- 声明数组并赋值称为数组的初始化

> 数组元素的类型

```js
数组中可以存放任意类型的数据，如字符串，数字，布尔值等等，例如下面这种存放的方式也是合法的：
```

```js
var arrStus = ['小白',12,true,28.9];
```

## 函数

#### 形参与实参个数不匹配的情况

```js
function getSum(num1,num2){
	console.log(num1+nu2);
}
```

> 实参的个数等于形参的个数，则输出正常结果

```js
getSum(1,2);   //3
```

> 实参的个数多余形参的个数，会取到形参的个数

```js
getSum(1,2,3); //3
```

> 实参的个数小于形参的个数，多的形参定义为undefined，与undefined的计算结果为NaN

```js
getSum(1);			// 形参可以看作是不用声明的变量，num2是一个变量但是没有接受值。num2就是undefined
```

#### arguments的使用

		当我们不确定有多少个参数传递时，可以用arguments来获取。在JavaScript中，arguments实际上他是当前函数的一个内置 对象。所有函数都内置了一个arguments对象，arguments对象中存储了传递的所有实参。
	
		arguments的展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：

- 具有length属性
- 按索引方式储存数据
- 不具有数组的push，pop特点

#### 函数的两种声明方式

> 命名函数

```js
function fn() {
		
}
fn();
```

> 函数表达式(匿名函数)

```js
var fun = function(){
		console.log('我是函数表达式');
}
fun();
```

- fun是变量名，不是函数名
- 函数表达式的声明方式和声明变量差不多，只不过变量里面存的是值，而函数表达式里面存的是函数。
- 函数表达式也可以进行参数传递

## 作用域

> 作用域：就是代码名字（变量）在某个范围内起效果，目的是为了提高程序的可靠性，更重要的是要减少命名冲突

- 通常来说，

> JS的作用域(es6)之前
>
> > 全局作用域：整个 script 标签或者是一个单独的js文件
>
> > 局部作用域（函数作用域） ：在函数内部的就是局部作用域，这个代码的名字只在函数内部起效果和作用

#### 作用域链

- 只要是代码，就至少有一个作用域。
- 写在函数内部的局部作用域
- 如果函数之中还有函数，那么在这个作用域中又可以诞生一个作用域
- 根据在内部函数可以访问外部函数变量的这种机制，用链式查找决定哪些数据能被内部函数访问，就称作作用域链

## JavaScript预解析

- JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候分两步：预解析和代码执行。

- 预解析：js 引擎会把 js 里面所有的 var 还有 function 提升到当前作用域的最前面

  - 变量提升：就是把所有的变量声明提升到当前作用域的最前面，不提升赋值操作

    ```js
    console.log(num); // undefined
    var num = 10;
    相当于执行了以下代码：
    var num;
    console.log(num);
    num = 10;
    故程序运行的结果为undefined
    ```

  - 函数提升：把所有的函数声明提升到当前作用域的最前面，不调用函数 

- 代码执行：按照代码书写的顺序从上往下执行。

## 对象

#### 什么是对象

		在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等
	
		对象是由属性和方法组成的

- 属性：事物的特征，在对象中用属性来表示
- 方法：事物的行为，在对象中用方法来表示

#### 为什么需要对象

		保存一个值时，可以使用变量，保存多个值（一组值）时，可以用数组。保存一个人的信息，就可以用对象
	
		JavaScript中的对象表达结构更清晰，更强大。张三疯的个人信息在对象中的表达结构如下：

```js
张三疯.姓名 = '张三疯';					   person.name = '张三疯';
张三疯.性别 = '男'；							 	person.sex = '男';
张三疯.年龄 = 128;								 person.age = 128;
张三疯.身高 = 154;								 person.height = 154;
```

#### 利用字面量创建对象

- 对象字面量：就是花括号里面包含了这个具体事物的属性和方法

>```js
>var obj = {
>		uname: '张三疯',
>		age: 18,
>		sex: 男，
>		sayHi: function(){
>				console.log('hi~');
>		}
>}
>```
>
>- 里面的属性或者方法我们采取键值对的形式
>- 多个属性或者方法之间用逗号隔开
>- 方法冒号后面跟的是一个匿名函数
>- 调用对象的属性：我们采取 对象名.属性名  我们理解为  的
>- 调用属性还有一种方法   对象名['属性名']
>- 调用对象的方法  sayHi    对象名.方法名       例：obj.sayHi();

#### 变量、属性、函数和方法的区别

变量：单独声明赋值，使用的时候直接写变量名，单独存在

属性：在对象里面的不需要声明的，使用的时候必须是：对象.属性

函数：是单独声明，并且调用的：函数名()，是单独存在的

方法：在对象里面，调用的时候必须是：对象.方法();

#### 利用new Object创建对象

```js
var obj = new Object();
obj.name = '张三疯';
obj.age = 18;
obj.sex = '男';
obj.sayHi = function(){
		console.log('Hi~');
}
```

- 我们是利用等号赋值的方法，添加对象的属性和方法
- 每个属性和方法之间用分号结束

#### 利用构造函数创建对象

- 由于我们前面两种创建对象的方式一次只能创建一个对象，所以我们需要使用构造函数来创建对象。
- 构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，他总与 new 运算符一起使用。我们可以把对象中的一些公共的属性和方法抽取出来，然后封装到这个函数里面。构造函数的基本语法如下：

```js
function 构造函数名(){
		this.属性 = 值;
    this.方法 = function(){};
}
new 构造函数名();
```

- 例如：

```js
function Star(uname ,age ,sex){
    this.name = uname;
		this.age = age;
		this.sex = sex;
		this.sing = function(sang){
				console.log(sang);
		}
}
var ldh = new Star('刘德华', 18, '男');
```

- 构造函数的首字母要大写
- 构造函数不需要return就可以返回结果
- 我们调用构造函数必须使用 new
- 我们只要 new Star()，调用函数就创建一个对象
- 我们的属性和方法之前必须要添加this

#### new在执行时会做四件事情

- 在内存中创建一个新的空对象
- 让this指向这个新的对象
- 执行构造函数里面的代码，给这个新对象添加属性和方法
- 返回这个新对象（所以构造函数里不需要return）

#### 遍历对象属性

- for...in 语句用于对数组或者对象的属性进行循环操作

>for in 遍历我们的对象
>
>```js
>for(var k in obj){
>		console.log(k);					输出得到属性名
>		console.log(obj[k]);		输出得到属性值
>}
>// 我们使用for in里面的变量，我们喜欢写k或者key。
>```

- 对象可以让代码结构更清晰
- 对象复杂数据类型object
- 本质：对象就是一组无序的相关属性和方法的集合
- 构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果，统称为苹果
- 对象实例特指一个事物，比如这个苹果
- for...in 语句用于对对象的属性进行循环操作

## JavaScript内置对象

#### 内置对象

- JavaScript中的对象分为三种：自定义对象，内置对象和浏览器对象
- 前面两种对象是 JS 基础内容，属于ECMAScript；第三个浏览器对象属于我们 JS 独有的，我们 JS API讲解
- 内置对象就是 JS 语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的或是最基本而必要的功能（属性和方法）
- 内置对象的最大的优点就是帮助我们快速开发
- JavaScript提供了多个内置对象：Math，Date，Array，String等

 #### Math对象

利用对象封装自己的数学对象，里面有 PI ，最大值和最小值

```html
 <script>
        // 利用对象封装自己的税额对象，里面有 PI 最大值和最小值
        var myMath={
            PI: 3.141592653,
            max: function(){
                var max = arguments[0];
                for(var i = 0 ; i < arguments.length; i++){
                    if(arguments[i] > max){
                        max = arguments[i];
                    }
                }
                return max;
            },
            min: function(){
                var min = arguments[0];
                for(var i = 0 ; i < arguments.length; i++){
                    if(arguments[i] > min){
                        min = arguments[i];
                    }
                }
                return min;
            }
        }
    </script>
```

> 绝对值方法

```js
console.log(Math.abs(1));				// 1
console.log(Math.abs(-1));			// 1
console.log(Math.abs('-1'));		// 隐式转换 会把字符串型 -1 转换为数字型
console.log(Math.abs('猪'))		 // NaN
```

> 向下取整

```js
console.log(Math.floor(1.1));		// 1
console.log(Math.floor(1.9));		// 1
```

> 向上取整

```html
console.log(Math.ceil(1.1));		// 2
console.log(Math.ceil(1.9));		// 2
```

> 四舍五入：其他数字四舍五入，但 .5特殊，往上取整，例 -1.5

```js
console.log(Math.round(1.1));			// 1
console.log(Math.round(1.5));			// 2
console.log(Math.round(1.9));			// 2
console.log(Math.round(-1.1));		// -1
console.log(Math.round(-1.5));		// -1
```

> 随机数方法

```js
1.Math对象随机数方法 randon() 返回一个随机的小数 0<= x < 1
2.这个方法里面不跟参数
3.我们想要两个数之间的随机整数，并且包含着两个整数
console.log(Math.random());
function getRandom(min,max){
		return Math.floor(Math.random()*(max - min + 1)) + min;
}
console.log(getRandom(1,10));
```

#### 日期对象

```js
// Date() 日期对象，是一个构造函数，必须使用new来调用我们创建的日期对象
var arr = new Array();      // 创建了一个数组对象
var obj = new Object();			// 创建了一个对象实例
// 1.使用Date  如果没有参数，返回当前系统的当前时间
var date = new Date();
console.log(date);
// 2.参数常用的写法	数字型	2019，10，01	或者是字符串型'2019-10-1 8:8:8'
var date1 = new Date(2019,10,1);
console.log(date1) //返回的是11月不是10月，从0-11。
var date2 = new Date(2019-10-1 8:8:8);
```

#### 日期格式化

```javascript
var date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
```

#### 获取日期的总的毫秒形式

```javascript
//获得Date总的毫秒书 不是当前时间的毫秒数，而是距离1970年1月1日过了多少毫秒
//1、valuOf() getTime()
var date = new Date();
console.log(data.valueOf()); //就是我们现在时间距离1970.1.1总的毫秒数
console.log(data.getTime());
//2、简单的写法
var date1 = +new Date(); //+new date()  返回的是总的毫秒数
console.log(date1);
//3、H5新增
console.log(Date.now())
```