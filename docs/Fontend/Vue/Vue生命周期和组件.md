---
category:
  - Fontend
index : 2
title :  Vue生命周期和组件
author : 吴某人的宝贝
---

## Vue生命周期

### 生命周期

- 生命周期又名回调函数、生命周期函数、生命周期钩子
- 生命周期函数时Vue在关键时候会调用的一些特殊的函数
- 生命周期函数的名字不能更改，但是函数的具体内容是我们根据需求自己编写的
- 生命周期函数中的this指向是vm或者组件实例对象

![img](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/watermark%252Ctype_d3F5LXplbmhlaQ%252Cshadow_50%252Ctext_Q1NETiBA5qC86Zu354uQ5oCd%252Csize_20%252Ccolor_FFFFFF%252Ct_70%252Cg_se%252Cx_16.png)

---

### 生命周期钩子

- <b>beforeCreate</b>：数据监测(getter和setter)和初始化事件还未开始，此时 data 的响应式追踪、event/watcher 都还没有被设置，也就是说不能访问到data、computed、watch、methods上的方法和数据。
- <b>created</b>：实例创建完成，实例上配置的 options 包括 data、computed、watch、methods 等都配置完成，但是此时渲染得节点还未挂载到 DOM，所以不能访问到 `$el`属性。
- <b>beforeMount</b>：在挂载开始之前被调用，相关的render函数首次被调用。此阶段Vue开始解析模板，生成虚拟DOM存在内存中，还没有把虚拟DOM转换成真实DOM，插入页面中。所以网页不能显示解析好的内容。
- <b>mounted</b>：在el被新创建的 vm.$el（就是真实DOM的拷贝）替换，并挂载到实例上去之后调用（将内存中的虚拟DOM转为真实DOM，真实DOM插入页面）。此时页面中呈现的是经过Vue编译的DOM，这时在这个钩子函数中对DOM的操作可以有效，但要尽量避免。一般在这个阶段进行：开启定时器，发送网络请求，订阅消息，绑定自定义事件等等
- <b>beforeUpdate</b>：响应式数据更新时调用，此时虽然响应式数据更新了，但是对应的真实 DOM 还没有被渲染（数据是新的，但页面是旧的，页面和数据没保持同步呢）。
- <b>updated</b>：在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。此时 DOM 已经根据响应式数据的变化更新了。调用时，组件 DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
- <b>beforeDestroy</b>：实例销毁之前调用。这一步，实例仍然完全可用，`this` 仍能获取到实例。在这个阶段一般进行关闭定时器，取消订阅消息，解绑自定义事件。
- <b>destroyed</b>：实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务端渲染期间不被调用。

---

### 常用的生命周期钩子

- mounted：发送ajax请求、启动定时器、绑定自定义时间、订阅消息等（初始化操作）
- beforeDestroy：清除定时器、解绑自定义时间、取消订阅消息等（收尾工作）

---

### 关于销毁Vue实例

- 销毁后借助Vue开发工具看不到任何信息
- 销毁后自定义事件会失效，但是原生DOM事件依然有效
- 一般不会在beforeDestroy操作数据，因为即使操作数据，也不会在触发更新流程（Vue的生命周期是逐步向下的）

## Vue组件化编程

组件是实现应用中局部功能代码和资源的集合

### 模块

- 模块向外提供特定功能的js程序，一般就是一个js文件
- 为什么要使用模块：js文件很多很复杂
- 模块用于复用js，简化js的编写，提高js的运行效率

### 组件

- 组件是用来实现局部（特定）功能效果的代码集合（html/css/js/image……）
- 为什么要使用组件：一个界面的功能非常复杂
- 组件用于复用编简化项目编码，提高运行效率

### Vue中使用组件的三大步骤

- 定义组件

  - 使用Vue.extend(options)创建，其中options和new Vue(options)时传入的options几乎一样，但有点区别：

    - el不写——最终所有的组件都要经过一个vm的管理，又vm中的el决定服务于哪个容器
    - data必须写成函数——避免组件被复用的时候，数据之间存在引用关系

    ```vue
    <script>
    	let data = {
        	a: 99,
        	b: 100
    	}
    
    	let x = data;
    	let y = data;
    	// x 和 y 引用的都是同一个对象，修改 x 的值， y 的值也会改变
    	x.a = 66;
    	console.loh(x); // a:66 b:100
    	console.log(y); // a:66 b:100
    	//每次调用data给一个全新的对象
    </script>
    ```

  - 使用template可以配置组件结构

    ```vue
    <script type="text/javascript">
        Vue.config.productionTip = false
        //第一步：创建school组件
        const school = Vue.extend({
            template:`
            <div class="demo">
            	<h2>学校名称：{{schoolName}}</h2>
    			<h2>学校地址：{{address}}</h2>
    			<button @click="showName">点我提示学校名</button>	
        	</div>
    		`,
            // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
            data(){
                return {
                    schoolName:'尚硅谷',
                    address:'北京昌平'
                }
            },
            methods: {
                showName(){
                    alert(this.schoolName)
                }
            },
        })
    
        //第一步：创建student组件
        const student = Vue.extend({
            template:`
    		<div>
            	<h2>学生姓名：{{studentName}}</h2>
    			<h2>学生年龄：{{age}}</h2>
        	</div>
    		`,
            data(){
                return {
                    studentName:'张三',
                    age:18
                }
            }
        })
    
        //第一步：创建hello组件
        const hello = Vue.extend({
            template:`
    		<div>	
    			<h2>你好啊！{{name}}</h2>
    	    </div>
    		`,
            data(){
                return {
                    name:'Tom'
                }
            }
        })
    </script>
    ```

- 注册组件

  - 局部注册：靠new Vue的时候传入components选项

    ```vue
    <script>
    	//创建vm
        new Vue({
            el: '#root',
            data: {
                msg:'你好啊！'
            },
            //第二步：注册组件（局部注册）组件取的名字在前
            components: {
                school: school,
                student: student
                // ES6简写形式
                // school,
                // student
            }
        })
    </script>
    ```

  - 全局注册

    ```vue
    <script>
    	//第二步：全局注册组件
    	Vue.component('hello', hello)
    </script>
    ```

- 写组件标签

  ```vue
  <!-- 准备好一个容器-->
  <div id="root">
      <hello></hello>
      <hr>
      <h1>{{msg}}</h1>
      <hr>
      <!-- 第三步：编写组件标签 -->
      <school></school>
      <hr>
      <!-- 第三步：编写组件标签 -->
      <student></student>
  </div>
  ```

#### 几个注意点

- 关于组件名

  - 一个单词组成

    - 首字母小写：school
    - 首字母大写：School

  - 多个单词组成

    - kebab-case命名：my-school
    - CamelCase命名：MySchool（需要Vue脚手架支持）

  - 注意：

    - 组件名尽可能回避HTML中已有的元素名称
    - 可以使用name配置项指定组件在开发者工具中呈现的名字

    ```vue
    <script>
    	const s = Vue.extend({
    		name:'hello',  //在开发者工具内体现的名字
            template:``,
            data(){}
        })
    </script>
    ```

- 关于组件标签

  - 第一种写法：`<school></school>`
  - 第二种写法：`<school/>` 
  - 注意：不使用脚手架的时候，`<school/>`会导致后续组件不能渲染

- 一个简写方式

  ```vue
  <script>
  	const school = Vue.extend(options) 
      //可以简写为：
      const school = options
  </script>
  ```