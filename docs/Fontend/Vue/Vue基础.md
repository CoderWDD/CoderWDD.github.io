---
category:
  - Fontend
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

---

