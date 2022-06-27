---
category:
  - Frontend
index : 1
title :  Html中的JavaScript
author : 蛙蛙
---

## DOM 和 BOM

### DOM元素

文档对象模型（DOM，Document Object Model）是一个应用编程接口（api），用于在HTMl中使用扩展的XML。DOM将整个页面抽象为一组分层节点。HTML 或 XML 页面的每个组成部分都是一种节点，包含不同的数据。比如下面的HTML页面：

```html
<html>
    <head>
        <title>Sample</title>
    </head>
    <body>
        <p>
            Hello World!
        </p>
    </body>
</html>
```

这些代码通过DOM可以表示为一组分层节点

![image-20220625195715512](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220625195715512.png)

DOM通过创建表示文档的树，让开发者可以随心所欲的控制网页的内容和结构。使用DOM API可以轻松删除、添、替换和修改节点。

### BOM元素

浏览器对象模型(BOM) API，用于支持访问和操作浏览器的窗口。使用BOM，开发者可以操控浏览器显示页面之外的部分。

## `<script>`元素

- 无论是外部js文件还是内联js文件都会阻塞页面，包含了浏览器解析的时间，外部的js文件还包括了下载的时间
- js 文件下载是并发下载的，但是解释是按照顺序解释的
- [defer和async的区别](https://segmentfault.com/q/1010000000640869)
- [defer和async的区别图解](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
- [对于控制其他源的js加载](https://juejin.cn/post/6854573219010068493)
- script的加载标签是不受同源限制的，crossorigin属性是为了捕获非同源的脚本抛出的错误。[关于cross-origin属性](https://juejin.cn/post/6884547471440084999)
- [关于nonce属性](https://juejin.cn/post/6854573219010068493)

`script`的常用属性

- async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其 他脚本加载。只对外部脚本文件有效。
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据 标志，意味着出站请求会包含凭据。
- src：可选。表示包含要执行的代码的外部文件。
- type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"。如果这个值是 module，则代 码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。
- nonce：控制是否允许内连 js 的加载
- nomodule：如果当前环境不支持 es6 模块，才会执行该 script

---

### 标签位置

- 将`<script>`标签放在`<body>`标签前面的时候，会将所有的 js 代码下载、解析和解释完成后才会开始渲染页面，会导致页面渲染有明显的延迟
- 将`<script>`标签放在`<body></body>`中的页面元素之后时，会在处理 JavaScript代码之前渲染页面，减少空白页面的等待时间。

---

### 推迟执行脚本

`<script>`元素有一个叫做$defer$的属性。这个属性表示脚本在执行的时候不会改变页面的结构，也就是说这个脚本会被延迟到整个页面都解析完毕后再运行。相当于告诉浏览器立即下载但是延迟执行。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTML Page</title>
        <script defer src="example1.js"></script>
        <script defer src="example2.js"></script>        
    </head>
    <body>
        <--页面内容 -->
    </body>
</html>
```

- 规范要求脚本按照出现顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，且两者都会在 DOMContentLoaded 事件之前执行。

- 由于在实际生活中，推迟的脚本不一定会按照顺序执行或者在DOMContentLoaded 事件之前执行，因此文件中最好只包含一个这样的脚本。
- 对于 XHTML 文档，指定 defer 属性的时候要写成 `defer = "defer"`。

---

### 异步执行脚本

`<script>`元素有一个叫做$async$的属性。他与$defer$一样都只适用于外部脚本，都会立即开始下载 JavaScript，但是$async$不能保证脚本按顺序执行。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTML Page</title>
        <script async src="example1.js"></script>
        <script async src="example2.js"></script>        
    </head>
    <body>
        <--页面内容 -->
    </body>
</html>
```

- 异步脚本不应该在加载期间修改 DOM。原因是$async$的属性是为了让浏览器不必等脚本下载并执行完成之后再加载页面，也不必等到该异步脚本下载和执行后再加载其他脚本
- 对于 XHTML 文档，指定 async 属性的时候要写成 `async = "async"`。

---

### 动态加载脚本

```javascript
let script = document.createElement('script');
script.src = 'gibberish.js';
document.head.appendchild(script);
```

默认情况下，这种加载`<script>`元素的方式是异步的，相当于添加了$async$属性，但不是所有的浏览器都支持$async$属性。因此，如果要统一脚本的加载行为，可以明确的将脚本设置为同步加载：

```javascript
let script = document.createElement('script');
script.src = 'gibberish.js';
script.async = false;
document.head.appendchild(script);
```

以这种方式获取的资源对浏览器的预加载器是不可见的，会严重影响他们在资源获取队列中的优先级，可能会严重影响性能。想让预加载器知道这些动态请求文件的存在，可以在文档头部显式声明他们：

```html
<link rel="preload" href="gibberish.js">
```

---

### 行内代码与外部文件

推荐使用外部代码文件的理由如下：

- 可维护性
- 缓存
- 适应未来

---

### `<noscript>`元素

包含在`<noscript>`中的内容被渲染的条件：（满足一个就渲染）

- 浏览器不支持脚本
- 浏览器对脚本的支持被关闭

`<noscript>`元素用于给不支持 JavaScript 的浏览器提供替代的内容。



























