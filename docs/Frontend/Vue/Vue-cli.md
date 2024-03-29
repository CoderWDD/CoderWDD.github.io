---
category:
  - Frontend
index : 3
title :  Vue-cli脚手架
---


## Vue脚手架

### 脚手架文件结构

- node_modules 
- public
  -  favicon.ico: 页签图标
  -  index.html: 主页面
-  src
  -  assets: 存放静态资源
    -  logo.png
  -  component: 存放组件
    - HelloWorld.vue
  - App.vue: 汇总所有组件
  - main.js: 入口文件
- .gitignore: git版本管制忽略的配置
- babel.config.js: babel的配置文件
- package.json: 应用包配置文件 
- README.md: 应用描述文件
- package-lock.json：包版本控制文件

### 提示

- 使用 import 导入第三方库的时候不需要 加 ‘./’

- 导入我们自己写的：

  ```vue
  import App from './App.vue'
  ```

- 导入第三方的

  ```vue
  import Vue from 'vue'
  ```

- 不需要在 from ‘vue’ 加 `'./'` 的原因是第三方库 node_modules 人家帮我们配置好了。

- 我们通过 import 导入第三方库，在第三方库的 package.json 文件中确定了我们引入的是哪个文件

  ![image-20220604020334362](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220604020334362.png)

### main.js中render函数

之前的写法是这样：

```javascript
import App from './App.vue'

new Vue({
	el:'#root',
	template:`<App></App>`,
	components:{App},
})
```

如果这样子写，运行的话会引发如下的报错

![在这里插入图片描述](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/watermark%252Ctype_d3F5LXplbmhlaQ%252Cshadow_50%252Ctext_Q1NETiBA5qC86Zu354uQ5oCd%252Csize_20%252Ccolor_FFFFFF%252Ct_70%252Cg_se%252Cx_16-20220604020727302.png)

报错的意思是，是在使用运行版本的 vue ，没有模板解析器。

从上面的小知识可以知道，我们引入的 vue 不是完整版的，是残缺的（为了减小vue的大小）。所以残缺的vue.js 只有通过 render 函数才能把项目给跑起来。

来解析一下render

```js
// render最原始写的方式
// render是个函数，还能接收到参数a
// 这个 createElement 很关键，是个回调函数
new Vue({
  render(createElement) {
      console.log(typeof createElement);
      // 这个 createElement 回调函数能创建元素
      // 因为残缺的vue 不能解析 template，所以render就来帮忙解决这个问题
      // createElement 能创建具体的元素
      return createElement('h1', 'hello')
  }
}).$mount('#app')
```

![在这里插入图片描述](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/watermark%252Ctype_d3F5LXplbmhlaQ%252Cshadow_50%252Ctext_Q1NETiBA5qC86Zu354uQ5oCd%252Csize_20%252Ccolor_FFFFFF%252Ct_70%252Cg_se%252Cx_16-20220604020817028.png)

因为 render 函数内并没有用到 this，所以可以简写成箭头函数。

```js
new Vue({
  // render: h => h(App),
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#app')
```

再简写：

```javascript
new Vue({
  // render: h => h(App),
  render: createElement => createElement(App)
}).$mount('#app')
```

最后把 createElement 换成 h 就完事了

### js中的简写

对象内写方法最原始的：

```js
let obj = {
    name: 'aaa',
    work: function (salary) {
        return '工资' + salary;
    }
}
```

ES6 简化版：

```js
let obj = {
    name: 'aaa',
    work(salary) {
        return '工资' + salary;
    }
}
```

箭头函数简化版:

```js
let obj = {
    name: 'aaa',
    work: (salary) => {
        return '工资' + salary;
    }
}
```

箭头函数再简化（最终版）：

```js
// 只有一个参数就可以把圆括号去了，函数体内部只有一个 return 就可以把大括号去掉，return去掉
let obj = {
    name: 'aaa',
    work: salary => '工资' + salary;
}
```

### 不同版本 vue 的区别

- vue.js是完整版的Vue，包含：核心功能+模板解析器。
- vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## vue 零碎的一些知识

### ref属性

- 被用来给元素或子组件注册引用信息（id的替代者）

- 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）

- 使用方式：

  - `<h1 ref="xxx">...</h1>`或者`<School ref="xxx"></School>`
  - `this.$refs.xxx`
  - 案例

  ```vue
  <template>
  	<div>
  		<h1 v-text="msg" ref="title"></h1>
  		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
  		<School ref="sch"/>
  	</div>
  </template>
  
  <script>
  	//引入School组件
  	import School from './components/School'
  
  	export default {
  		name:'App',
  		components:{School},
  		data() {
  			return {
  				msg:'欢迎学习Vue！'
  			}
  		},
  		methods: {
  			showDOM(){
  				console.log(this.$refs.title) //真实DOM元素
  				console.log(this.$refs.btn) //真实DOM元素
  				console.log(this.$refs.sch) //School组件的实例对象（vc）
  			}
  		},
  	}
  </script>
  ```

### props配置项

- 功能：让组件接收外部传过来的数据，不让修改props的值，但如果props传过来的值是一个对象，那么改对象里面的属性的时候，不会被Vue监视到。也就是说Vue只能监视props的表层数据。

- 传递数据：`<Demo name="xxx"/>`

- 接收数据：

  - 第一种方式（只接收）：`props:['name']`

  - 第二种方式（限制类型）：`props:{name:String}`

  - 第三种方式（限制类型、限制必要性、指定默认值）：

    ```js
    props:{
    	name:{
            type:String, //类型
            required:true, //必要性
            default:'老王' //默认值
    	}
    }
    ```

- props是只读的，Vue底层会监视你对props的修改，如果进行了修改会发出警告。如果业务需求确实需要修改所传进来的值，那么就需要先把props中的内容复制到data中，然后去修改data中的数据

  ```vue
  <script>
  	export default {
          name: 'Student',
          data() {
  			return {
  				msg: 'xiaoyao',
                  myAge: this.age
              }
          },
          methods: {
              updateAge(){
                  this.myAge++
              }
          },
          props:['name','age','sex']  //先加载
      }
  </script>
  ```

- props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

- 示例代码：

  - 父组件给子组件传数据
  - App.vue

  ```vue
  <template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <Student></Student>
      <School name="haha" :age="this.age"></School>
    </div>
  </template>
  
  <script>
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  
  export default {
    name: 'App',
    data () {
      return {
        age: 360  
      }
    },
    components: {
      School,
      Student
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  ```

  - School.vue

  ```vue
  <template>
    <div class="demo">
      <h2>学校名称：{{ name }}</h2>
      <h2>学校年龄：{{ age }}</h2>
      <h2>学校地址：{{ address }}</h2>
      <button @click="showName">点我提示学校名</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "School",
    // 最简单的写法：props: ['name', 'age']
    props: {
      name: {
        type: String,
        required: true // 必须要传的
      },
      age: {
        type: Number,
          default: 999 //默认值，不给我传我就用这个
      }
    },
    data() {
      return {
        address: "北京昌平",
      };
    },
    methods: {
      showName() {
        alert(this.name);
      },
    },
  };
  </script>
  
  <style>
  .demo {
    background-color: orange;
  }
  </style>
  ```

### mixin(混入)

- 混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

- 示例

  ```js
  // 定义一个混入对象
  var myMixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }
  
  // 定义一个使用混入对象的组件
  var Component = Vue.extend({
    mixins: [myMixin]
  })
  ```

- 选项合并

  - 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
  - 比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。

  ```js
  var mixin = {
    data: function () {
      return {
        message: 'hello',
        foo: 'abc'
      }
    }
  }
  
  new Vue({
    mixins: [mixin],
    data: function () {
      return {
        message: 'goodbye',
        bar: 'def'
      }
    },
    created: function () {
      console.log(this.$data)
      // => { message: "goodbye", foo: "abc", bar: "def" }
    }
  })
  ```

  - 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。

  ```js
  var mixin = {
    created: function () {
      console.log('混入对象的钩子被调用')
    }
  }
  
  new Vue({
    mixins: [mixin],
    created: function () {
      console.log('组件钩子被调用')
    }
  })
  
  // => "混入对象的钩子被调用"
  // => "组件钩子被调用"
  ```

  - 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

  ```js
  var mixin = {
    methods: {
      foo: function () {
        console.log('foo')
      },
      conflicting: function () {
        console.log('from mixin')
      }
    }
  }
  
  var vm = new Vue({
    mixins: [mixin],
    methods: {
      bar: function () {
        console.log('bar')
      },
      conflicting: function () {
        console.log('from self')
      }
    }
  })
  
  vm.foo() // => "foo"
  vm.bar() // => "bar"
  vm.conflicting() // => "from self"
  ```

### 插件

- 插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制。

- 通过全局方法 `Vue.use()` 使用插件。它需要在你调用 `new Vue()` 启动应用之前完成：

  ```js
  // 调用 `MyPlugin.install(Vue)`
  Vue.use(MyPlugin)
  
  new Vue({
    // ...组件选项
  })
  ```

- 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

- 定义插件：

  ```js
  对象.install = function (Vue, options) {
      // 1. 添加全局过滤器
      Vue.filter(...)
  
      // 2. 添加全局指令
      Vue.directive(...)
                    
      // 3. 配置全局混入(合)
      Vue.mixin(...)
  
      // 4. 添加实例方法
      Vue.prototype.$myMethod = function () {...}
      Vue.prototype.$myProperty = xxxx
  }
  ```

- 具体案例：

  - plugin.js（放在src目录下）

  ```js
  export default {
      install(Vue, x, y, z) {
          console.log(x, y, z)
          //全局过滤器
          Vue.filter('mySlice', function (value) {
              return value.slice(0, 4)
          })
  
          //定义全局指令
          Vue.directive('fbind', {
              //指令与元素成功绑定时（一上来）
              bind(element, binding) {
                  element.value = binding.value
              },
              //指令所在元素被插入页面时
              inserted(element, binding) {
                  element.focus()
              },
              //指令所在的模板被重新解析时
              update(element, binding) {
                  element.value = binding.value
              }
          })
  
          //定义混入
          Vue.mixin({
              data() {
                  return {
                      x: 100,
                      y: 200
                  }
              },
          })
  
          //给Vue原型上添加一个方法（vm和vc就都能用了）
          Vue.prototype.hello = () => { alert('你好啊aaaa') }
      }
  }
  ```

  - main.js

  ```js
  // 引入插件
  import plugin from './plugin'
  
  // 使用插件
  Vue.use(plugin)
  ```

### scoped样式

- 作用：让样式在局部生效，防止冲突。

- 写法：`<style scoped>`

  ```css
  <style lang="less" scoped>
  	.demo{
  		background-color: pink;
  		.atguigu{
  			font-size: 40px;
  		}
  	}
  </style>
  ```

## Vue脚手架配置代理（解决跨域问题）

  ### 产生跨域问题的原因

![image-20220612222243113](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220612222243113.png)

### 方法一：

- 在vue.config.js中添加如下配置

  ```js
  devServer:{
    proxy:"http://localhost:5000"   //为本地服务器的地址	
  }
  ```

  - 优点：配置简单，请求资源的时候直接发送给前端（8080）即可
  - 缺点：不能配置多个代理，不能灵活的控制请求的时候是否走代理
  - 工作方式：若按照上述配置代理，当请求了前端不存在的资源的时候，这个请求会被转发给服务器（优先匹配前端资源）

### 方法二：

- 编写vue.config.js配置具体代理规则

  ```js
  module.exports = {
  	devServer: {
        proxy: {
        '/api1': {// 匹配所有以 '/api1'开头的请求路径
          target: 'http://localhost:5000',// 代理目标的基础路径
          changeOrigin: true,
          pathRewrite: {'^/api1': ''}//代理服务器将请求地址转给真实服务器时会将 /api1 去掉
        },
        '/api2': {// 匹配所有以 '/api2'开头的请求路径
          target: 'http://localhost:5001',// 代理目标的基础路径
          changeOrigin: true,
          pathRewrite: {'^/api2': ''}
        }
      }
    }
  }
  /*
     changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
     changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
     changeOrigin默认值为true
  */
  ```

  - 使用如上方法配置代理的时候，当后端给的地址并没有我们想要的api的时候，我们可以在封装axios的时候以下代码

  ```js
  //利用axios对象的方法create，去创建一个axios实例
  const instance = axios.create({
      //配置对象
      //基础路径，发请求的时候，路径中会出现api
      baseURL: "/api", 
      //请求超时的时间为5s
      timeout:5000,
      withCredentials:true,
  })
  ```

  







