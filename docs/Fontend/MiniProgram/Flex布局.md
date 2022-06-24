---
category:
  - Fontend
index : 1
title :  Flex布局
author : 吴某人的宝贝
---

## Flex布局是什么

- Flex 是 Flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性

- 任何一个容器都可以指定为 Flex 布局

  ```css
  .box{
      display: flex;
  }
  ```

- 行内元素也可以使用 Flex 布局

  ```css
  .box{
      display: inline-flex;
  }
  ```

- Webkit 内核的浏览器，必须加上`-webkit` 的前缀

  ```css
  .box{
      diaplay: -webkit-flex;      /* Safari */
      display:flex
  }
  ```

- 设置为 Flex 布局后，子元素的 float、clear 和 vertical-align 属性将失效

