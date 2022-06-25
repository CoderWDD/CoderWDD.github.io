---
category:
  - Frontend
index : 1
title :  Flex布局
author : 蛙蛙
---

## Flex 布局是什么

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

## Flex 布局基本概念

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

![image-20220624184833209](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220624184833209.png)

- 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
- 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## Flex 容器的属性

### flex-direction 属性

flex-direction 属性决定主轴的方向（即项目的排列方向）

```css
.box{
    flex-direction: row | row-reverse | column | column-reverse;
}

flex-ditrction 属性四个值的含义：

row（默认）：主轴为水平方向，起点在左端
row-reserve ：主轴为水平方向，起点在右端
colum ：主轴为垂直方向，起点在上沿
colum-reserve ：主轴为垂直方向，起点在下沿
```

![image-20220624185117615](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220624185117615.png)

---

### flex-wrap 属性

默认情况下，项目都排在一条线（轴线）上，flex-wrap 属性定义如果一条轴线排不下，该如何进行换行

```css
b fvn xzn. n.   b fvb.    hhjgghj.  hjghjghjghjgjhnghjgb.   fgdfgdfg.  bgvbvgfcbg.  hnhj.                            
																										`. 
```

