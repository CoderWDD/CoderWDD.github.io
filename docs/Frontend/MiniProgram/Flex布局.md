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
.box{
	flex-wrap: nowrap | wrap | wrap-reverse;
}
```

![image-20220628105515050](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628105515050.png)

---

### flex-flow 属性

flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap

```css
.box {
	flex-flow: <flex-direction> <flex-wrap>;    
}
```

---

### justify-content 属性

justifu-content 属性定义了项目在主轴上的对齐方式（假设主轴从左到右）

```css
.box {
	justify-content: flex-start;        /*默认值：左对齐*/
    justify-content: flex-end;			/*右对齐*/
    justify-content: center;			/*居中*/
    justify-content: space-between;		/*两端对齐，项目之间的间隔相等*/
    justify-content: space-around;		/*每个项目的两侧间隔相等，所以项目之间的间隔比项目于边框的间隔大一倍
}
```

![image-20220628105833839](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628105833839.png)

---

### align-items 属性

定义在交叉轴上如何对齐（假设交叉轴从上到下）

```css
.box {
	align-items: flex-start;		/*交叉轴的起点对齐*/
    align-items: flex-end;			/*交叉轴的终点对齐*/
    align-items: center;			/*交叉轴的中点对齐*/
    align-items: baseline;			/*项目的第一行文字的基线对齐*/
    align-items: stretch;			/*默认值，如果项目未设置高度或者设为auto，将占满整个容器的高度*/
}
```

![image-20220628110143520](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628110143520.png)

---

### align-content 属性

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  	align-content: flex-start;				/*与交叉轴的起点对齐*/
    align-content: flex-end;				/*与交叉轴的终点对齐*/
    align-content: center;					/*与交叉轴的中点对齐*/
    align-content: space-between;			/*与交叉轴两端对齐，轴线之间的间隔平均分布*/
    align-content: space-around;			/*每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍*/
    align-content: stretch;					/*默认值，轴线占满整个交叉轴*/
}
```

## 项目的属性

### order 属性

定义了项目的排列顺序，数值越小，排列越靠前，默认值为0

```css
.item {
  	order: <integer>;
}
```

![image-20220628112127604](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628112127604.png)

---

### flex-grow 属性

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

```css
.item {
  	flex-grow: <number>; 		/* default 0 */
}
```

![image-20220628112205533](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628112205533.png)

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

---

### flex-shrink 属性

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  	flex-shrink: <number>; 			/* default 1 */
}
```

![image-20220628112326776](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628112326776.png)

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

---

### flex-basis 属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```css
.item {
  	flex-basis: <length> | auto; 			/* default auto */
}
```

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

---

### flex 属性

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```css
.item {
  	flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

---

### align-self 属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

```css
.item {
  	align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![image-20220628112540027](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220628112540027.png)

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。
