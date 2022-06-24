---
category:
  - Frontend
index : 1
title : Vue基础
author : 吴某人的宝贝
---

## Vue监视数据的原理

### Vue会监视data中所有层次的数据

- Vue不但会监视data里面的属性，也会监视data里面的属性的属性
- 就是无论data有多少层，Vue都可以监视到

---

### Vue如何监视对象中的数据

通过setter实现监视，且要在new Vue的时候就传入要监测的数据

- 对象中后追加的属性，Vue默认不做响应式处理

- 如果需要给后添加的属性做响应式处理，需要用下列API：

  ```vue
  Vue.set(target,porpertyName/index,value)
  或
  vm.$set(target,porpertyName/index,value)
  ```

---

### Vue如何监测数组中的数据

通过包裹属于更新元素的方法实现，本质上做了如下两件事情：

- 调用原声对应的方法对数组进行更新
- 重新解析模版，进而更新页面

---

### 在Vue修改数组中的某个元素一定要用如下的方法

- 1、使用如下API（因为这些API会改变原数组）

  ```vue
  array.push()：在数组最后追加一个元素
  array.pop()：删除数组的最后一个元素
  array.shift()：删除数组的第一个元素
  array.unshift()：在数组的最前面添加一个元素
  array.splice()：用于添加或删除数组中的元素
  array.sort()：用于数组的排序
  array.reverse()：反转数组
  ```

- 2、使用`Vue.set()`或者`vm.$set()`

- 特别注意：

  - `array.splice()`的用法

    ```vue
    array.splice(a,b,c):从第a个元素开始，删除b个元素，并在原来的位置插入c元素，c元素可以为多个,返回值为删除元素的数组。
    
    		var fruits = ["Banana","Orange","Apple","Mango"];
    eg：
    		fruits.splice(2,0,"Lemon","Kiwi");
    		fruits的输出结果为： Banana,Orange,Lemon,Kiwi,Apple,Mango
    		fruits.splice的返回值为：""
    
    eg:
    		fruits.splice(2,1);
    		fruits的输出结果为：Banana,Orange,Mango
    		fruits.splice()的返回值为：["Apple"]
    
    eg:
    		fruits.splice(2);
    		fruits的输出结果为：Banana,Orange
    		fruits.splice()的返回值为：["Apple","Mango"]
    ```

  - `array.sort`(a,b)

    ```vue
    sort(a,b)方法用于对数组的元素进行排序。排序顺序可以是字母或数字，并按升序或降序。
    a和b两个参数控制着排序顺序，默认排序顺序为按字母升序。
    - return a-b; 则为默认升序
    - return b-a; 则为降序排列
    ```

  - `Vue.set()` 和`vm.$set()`方法不能给vm或者vm的跟数据对象添加属性

## Vue收集表单数据(一般用ajax收集数据)

- 情况一：

  ```html
  若<input type="text"/>，则v-model收集的是value值，用户输入的就是value值
  ```

- 情况二：

  ```html
  若<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值
  ```

- 情况三：

  ```html
  若<input type="checkbox"/>
  ```

  - 没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选 是bool值）
  - 配置input的value属性
    - v-model的初始值是非数组，那么收集的就是checked
    - v-model的初始值是数组，那么收集的就是value组成的数组

- v-model的三个修饰符

  - lazy：失去焦点再收集，适用于输入长文字的时候
  - number：通常与`<input type="number"/>`一起使用，使输入的字符串转为有效的数字
  - trim：过滤输入内容首尾的空格

## Vue过滤器

- 定义：对要显示的数据进行格式化后再显示（适用于一些简单逻辑的处理）

- 语法

  - 注册过滤器

  ```vue
  Vue.filter(name,callback)
  或
  new Vue(filters:{})
  ```

  - 使用过滤器

  ```vue
  {{ xxx | 过滤器名 }}
  或者
  v-bind:属性 = " xxx | 过滤器名 "
  ```

- 注意：

  - 过滤器也可以接收额外的参数，多个过滤器之间可以串联
  - 并没有改变原本的数据，是产生新的对应的数据

## Vue内置指令

### v-text

- 作用：设置标签的内容（text-Content），向其所在的节点中渲染文本内容
- 与差值语法的区别：v-text会替换掉节点中的全部内容，{{xx}}不会
- v-text内部支持写表达式，例如字符串的拼接

示例代码：

```vue
<div id="app">
  <h2 v-text="message + '!'"></h2>
  <h2 v-text="info">123123</h2>
  <h2>{{message}} 大笨猪</h2>
</div>
```

---

### v-html

- 作用：向指定节点中渲染包含html结构的内容
- 与差值语法的区别
  - v-html会替换掉节点中所有的内容，相当于设置了元素的innerHTML，而{{xx}}不会
  - v-html可以识别html标签
- 注意：
  - 在网站上动态渲染任意HTML是非常危险的，容易导致xss攻击
  - 一定要在可信的内容上使用v-html，v-html最好不要使用在用户提交的内容上

示例代码：

```vue
<div id = app>
  <p v-html="content"></p>
  <p v-text="content"></p>
</div>
```

---

### v-cloak(没有值)

- 本质是一个特殊属性，在Vue实例创建完毕并接管容器之后，v-cloak属性会被删除
- 使用css配合v-cloak使用可以解决网速慢的时候页面展示{{xxx}}的问题，通常用于向后段请求数据但是后段数据加载较慢的情况

示例代码：

```vue
<div id="app">
  <h2 v-cloak>{{name}}</h2>
</div>
搭配css使用：
<style>
  [v-cloak]{
    display: none;
  }
</style>
```

---

### v-once(没有值)

- v-once所在的节点在初次动态渲染之后，就视为静态内容了
- 也就是说v-once所在的节点里的值，是元素的初始值
- 之后数据的改变不会引起v-once所在结构的更新，可以用于性能优化

示例代码：

```vue
<div id="app">
  <h2 v-once>当前n的值是:{{n}}</h2>
  <h2>初始化的n的值是:{{n}}</h2>
  <button @click="n++">点我n + 1</button>
</div>
```

---

### v-pre

- 可以让Vue跳过其所在的节点的编译过程
- 可以利用它跳过：没有语法指令、没有使用插值语法的节点，会加快编译

示例代码：

```vue
<div id="app">
  <h2 v-pre>Vue不简单</h2>
  <h2>初始化的n的值是:{{n}}</h2>
  <button @click="n++">点我n + 1</button>
</div>
```

---

### 自定义指令

#### 定义语法

- 局部指令

  ```vue
  new Vue({
  	directives:{指令名：配置对象}
  })
  或
  new Vue({
  	directives{指令名：回调函数}
  })
  ```

- 全局指令

  ```vue
  Vue.directive(指令名，配置对象)
  或
  Vue.directive(指令名，回调函数)
  ```

#### 配置对象中常用的三个回调

- bind：指令与元素成功绑定时
- insterted：指令所在元素被插入页面时
- update：指令所在模版结构被重新解析时调用

#### 注意

- 指令定义的时候不用加v-，但是调用的时候要加v-
- 指令名如果是多个单词时，药水用kebab-case命名方法，不使用驼峰命名法

---

















