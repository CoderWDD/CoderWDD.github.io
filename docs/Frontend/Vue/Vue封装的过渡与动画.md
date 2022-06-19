---
category:
  - Frontend
index : 6
title :  Vue封装的过渡与动画
author : 吴某人的宝贝
---

## Vue封装的过渡与动画

- 作用：在插入、更新或者移除DOM元素的时候，在合适的时候给元素添加样式的名称

- 图示

  ![image-20220612221518326](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220612221518326.png)

### 写法

- 准备好样式

  - 元素进入的样式
    - v-enter：进入的起点
    - v-enter-active：进入的过程中
    - v-enter-to：进入的终点
  - 元素离开的样式
    - v-leave：离开的起点
    - v-leave-active：离开的过程中
    - v-leave-to：离开的终点

- 使用`<transition>`包裹要过渡的元素，并且配置name属性：

  ```html
  <transition name="hello">
  	<h1 v-show="isShow">你好啊！</h1>
  </transition>
  ```

- 有多个元素需要过渡的时候，就需要使用`<transition-group>`，并且每一个元素都需要指定key的值

- 具体案例

  - 单个元素过渡

    ```vue
    <template>
    	<div>
    		<button @click="isShow = !isShow">显示/隐藏</button>
    		<transition appear>
    			<h1 v-show="isShow">你好啊！</h1>
    		</transition>
    	</div>
    </template>
    
    <script>
    	export default {
    		name:'Test',
    		data() {
    			return {
    				isShow:true
    			}
    		},
    	}
    </script>
    
    <style scoped>
    	h1{
    		background-color: orange;
    	}
    
    	.v-enter-active{
    		animation: move 0.5s linear;
    	}
    
    	.v-leave-active{
    		animation: move 0.5s linear reverse;
    	}
    
    	@keyframes move {
    		from{
    			transform: translateX(-100%);
    		}
    		to{
    			transform: translateX(0px);
    		}
    	}
    </style>
    ```

    - name的作用可以让不同的元素有不同的动画效果

    ```vue
    <template>
    	<div>
    		<button @click="isShow = !isShow">显示/隐藏</button>
    		<transition name="hello" appear>
    			<h1 v-show="isShow">你好啊！</h1>
    		</transition>
    	</div>
    </template>
    
    <script>
    	export default {
    		name:'Test',
    		data() {
    			return {
    				isShow:true
    			}
    		},
    	}
    </script>
    
    <style scoped>
    	h1{
    		background-color: orange;
    	}
    
    	.hello-enter-active{
    		animation: move 0.5s linear;
    	}
    
    	.hello-leave-active{
    		animation: move 0.5s linear reverse;
    	}
    
    	@keyframes move {
    		from{
    			transform: translateX(-100%);
    		}
    		to{
    			transform: translateX(0px);
    		}
    	}
    </style>
    ```

  - 多个元素过渡

    ```vue
    <template>
    	<div>
    		<button @click="isShow = !isShow">显示/隐藏</button>
    		<transition-group name="hello" appear>
    			<h1 v-show="!isShow" key="1">你好啊！</h1>
    			<h1 v-show="isShow" key="2">尚硅谷！</h1>
    		</transition-group>
    	</div>
    </template>
    
    <script>
    	export default {
    		name:'Test',
    		data() {
    			return {
    				isShow:true
    			}
    		},
    	}
    </script>
    
    <style scoped>
    	h1{
    		background-color: orange;
    	}
    	/* 进入的起点、离开的终点 */
    	.hello-enter,.hello-leave-to{
    		transform: translateX(-100%);
    	}
    	.hello-enter-active,.hello-leave-active{
    		transition: 0.5s linear;
    	}
    	/* 进入的终点、离开的起点 */
    	.hello-enter-to,.hello-leave{
    		transform: translateX(0);
    	}
    </style>
    ```

    - 引入第三方库的案例

      - 库的名称：Animate.css
      - 安装：npm i animate.css
      - 引入：import 'animate.css'
    
    ```vue
    <template>
    	<div>
    		<button @click="isShow = !isShow">显示/隐藏</button>
    		<transition-group 
    			appear
    			name="animate__animated animate__bounce" 
    			enter-active-class="animate__swing"
    			leave-active-class="animate__backOutUp"
    		>
    			<h1 v-show="!isShow" key="1">你好啊！</h1>
    			<h1 v-show="isShow" key="2">尚硅谷！</h1>
    		</transition-group>
    	</div>
    </template>
    
    <script>
    	import 'animate.css'
    	export default {
    		name:'Test',
    		data() {
    			return {
    				isShow:true
    			}
    		},
    	}
    </script>
    
    <style scoped>
    	h1{
    		background-color: orange;
    	}
    </style>
    ```
    
    

​      