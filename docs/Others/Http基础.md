---
index: 6
icon: markdown
title: HTTP基础
category:
  - Others
  - Interview
  - Network
tag:
  - HTTP
  - 面试
---

## HTTP请求方法

### GET

- 获取资源
- 没有请求 `Body`
- 有响应 `Body`

### POST

- 增加或修改资源
- 有请求 `Body`
- 有响应 `Body`

### PUT

- 修改资源
- 有请求 `Body`

### DELETE

- 删除资源
- 没有请求 `Body`

### HEAD

- 获取资源信息
- 响应里面没有 `Body`

## HTTP 状态

- 1xx：临时性消息
  - 101：协议切换
- 2xx：成功
- 3xx：重定向
- 4xx：**客户端** 错误
  - 401：未授权
- 5xx：**服务器** 错误

## Header 和 Body

### Host

- 服务器地址

### Content-Type / Content-Length

- Content-Length：内容的长度（字节）
- Content-Type：内容类型
  - text/html ：html 文本，用于浏览器页面响应
  - application/x-www-form-urlencoded ：普通表单，encoded URL 格式
  - multipart/form-data ：多部分形式，一般用于传输包含二进制内容的多项内容
  - application/json ： json形式，用于 Web Api 的响应或 POST /PUT 请求
  - image/jpeg / application/zip .. ：单文件，用于 Web Api 响应或 POST /PUT 请求

### Location

- 重定向的目标 URL

### User-Agent

- 用户代理

### Range / Accept-Ranges

- 指定 Body 的接受范围

### Cache

- 缓存，加载完对数据进行缓存，方便下次使用
- 区别于 `Buffer`，`Buffer` 为缓冲，即先把数据缓冲起来，然后在使用的时候向外输出