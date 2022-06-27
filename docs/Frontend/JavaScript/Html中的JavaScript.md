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

`script`的常用属性

- async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其 他脚本加载。只对外部脚本文件有效。
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据 标志，意味着出站请求会包含凭据。
- src：可选。表示包含要执行的代码的外部文件。
- type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"。如果这个值是 module，则代 码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。
- nonce：控制是否允许内连 js 的加载
- nomodule：如果当前环境不支持 es6 模块，才会执行该 script

### 标签位置

- 将`<script>`标签放在`<body>`标签前面的时候，会将所有的 js 代码下载、解析和解释完成后才会开始渲染页面，会导致页面渲染有明显的延迟
- 将`<script>`标签放在`<body></body>`中的页面元素之后时，会在处理 JavaScript代码之前渲染页面，减少空白页面的等待时间。

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

规范要求脚本在



