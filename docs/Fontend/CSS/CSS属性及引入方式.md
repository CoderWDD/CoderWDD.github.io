---
category:
  - Fontend
index : 2
title :  CSS属性及引入方式
author : 吴某人的宝贝
---

### CSS字体属性

```中文
CSS Font属性用于定义字体系列、大小、粗细和文字样式（如斜体）
```

1、字体系列

```中文
CSS使用font-family属性定义文本的字体系列。基本语法格式如下：
```

```css
p { 
    font-family:"微软雅黑";
}
div { 
    font-family:Arial,"Microsoft Yahei", "微软雅黑";
}
```

- 各种字体之间必须用英文状态下的逗号隔开
- 一般情况下，如果有空格隔开的多个单词组成的字体，加引号
- 尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示
- 最常见的几个字体：body{font-family:'Microsoft YaHei',Tahoma,arial,'Hiragino Sans GB';}

2、字体大小

	CSS使用font-size属性定义字体大小

```css
p {
	font-size: 20px;
}
```

- px（像素）大小是我们网页的最常用的单位
- 谷歌浏览器的默认文字的大小为16px
- 不同浏览器可能默认显示的字号大小不一致，我们尽量给一个明确值大小，不要默认大小
- 可以给body指定整个 页面文字的大小

3、字体粗细

	CSS使用font-weight属性，基本语法格式如下：

```css
p {
	font-size: bold;
}
```

[![TZXhKs.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/TZXhKs.png)](https://imgtu.com/i/TZXhKs)

4、字体样式

	CSS使用font-style属性设置文本的风格

```css
p {
	font-style: normal;
}
```

[![TZjndP.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/TZjndP.png)](https://imgtu.com/i/TZjndP)

- 平时很少给文字加斜体，反而要给斜体标签（em，i）改为不倾斜字体。

5、字体复合属性

	字体属性可以吧以上文字样式综合来写，这样可以更节约代码

```css
body {
	font: font-style font-weight font-size/line-height font-family;
}
```

- 使用font属性时，必须按照上面的语法格式的顺序书写，不能变换顺序，并且每个属性之间用空格隔开
- 不需要设置的属性可以省略（取默认值），但必须保留font-size和font-family属性，否则font属性将不起作用

6、字体属性总结

[![TZvM01.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/TZvM01.png)](https://imgtu.com/i/TZvM01)

### CSS文本属性

```中文
CSS Text（文本）属性可以定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩紧、行间距等
```

1、文本颜色

> color用于定义文本的颜色

```css
div {
	color: red;
}
```

[![Tean0O.png](https://s4.ax1x.com/2021/12/19/Tean0O.png)](https://imgtu.com/i/Tean0O)

2、对齐文本

```中文
text-align属性用于 设置元素内文本内容的水平对齐方式
```

```css
div {
	text-align: center;
}
```

[![Teayj0.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/Teayj0.png)](https://imgtu.com/i/Teayj0)

3、装饰文本

```中文
text-decoration属性规定添加到文本的修饰，可以给文本添加下划线，删除线，上划线等，基本语法格式如下：
```

```css
div {
	text-decoration: underline;
}
```

[![Tednvq.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/Tednvq.png)](https://imgtu.com/i/Tednvq)

> 取消a默认的下划线

```css
a {
	text-decoration: none;
}
```

4、文本缩进

```中文
text-indent属性用来指定文本第一行的缩进，通常是段落的首行缩进，基本语法格式如下：
```

```html
div {
	text-indent: 10px;
}
```

```中文
	通过设置该属性，所有元素的第一行都可以缩进一个给定的长度，甚至该长度可以为负值
```

```css
p {
	text-indent: 2em;
}
```

```中文
em是一个相对单位，就是当前元素（font-size）1个文字的大小，如果当前元素没有设置大小，则会按照父元素的1个文字大小
```

5、行间距

```中文
line-height属性用于设置行间的距离（行高）。可以控制文字行与行之间的距离，基本语法格式如下
```

```css
p {
	line-height: 26px;
}
```

 [![TerA9e.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/TerA9e.png)](https://imgtu.com/i/TerA9e)

## CSS的背景

​		通过CSS背景书写，可以给页面元素添加背景样式

​		背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等

> 背景颜色

​		background-color属性定义了元素的背景颜色

```html
background-color: 颜色值
```

​		一般情况下元素背景颜色默认值是 transparent（透明的），我们也可以手动指定背景颜色为透明色

> 背景图片

​		backgron-image属性描述了元素的背景图像，实际开发常见于logo或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置（精灵图也是一种运用场景）

```html
background-image: none | url(url)
```

[![TKFX5D.png](https://s4.ax1x.com/2021/12/21/TKFX5D.png)](https://imgtu.com/i/TKFX5D)

> 背景平铺

​		如果需要在HTML页面上对背景图像进行平铺，可以用background-repeat属性

```html
background-repeat: repeat | no-repeat | repeat-x | repeat-y
```

> 背景图片位置

​		利用background-position属性可以改变图片在背景中的位置，基本语法格式如下：

```html
background-position: x y;
```

​		参数代表的意思是x坐标和y坐标，可以用方位名词或者精确单位

[![TKNsz9.png](https://s4.ax1x.com/2021/12/21/TKNsz9.png)](https://imgtu.com/i/TKNsz9)

1、参数是方位名词

-  如果指定的两个值都是方位名词，则两个值前后顺序无关，比如left top和top left效果一致
- 如果只制定了一个方位名词，另一个值省略，则默认第二个值居中对齐

2、参数是精确单位

- 如果参数值是精确单位，那第一个肯定是 x 坐标，第二个肯定是 y 坐标
- 如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中

3、参数是混合单位

- 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是 x 坐标，第二个值是 y 坐标 

> 背景图像固定（图像附着）

​		background-attachment属性设置背景图像是否固定或者随着页面的其余部分滚动

​		background-attachment后期可以制作视差滚动的效果

```html
background-attachment: scroll(默认) | fixed
```

[![TKX8f0.png](https://s4.ax1x.com/2021/12/21/TKX8f0.png)](https://imgtu.com/i/TKX8f0)

> 背景复合写法

​		为了简化背景属性的代码，我们可以将这些属性合并简写在同一个属性background中，从而节约代码量

​		当使用简写属性时，没有特定的书写习惯，一般习惯约定为

​		background:背景颜色  背景图片地址  背景平铺  背景图像滚动  背景图片位置

> 背景色半透明

​		CSS3为我们提供了背景颜色半透明的效果

```html
background: rbag(0,0,0,0.3);
```

- 最后一个参数时alpha透明度，取值范围在0～1
- 背景半透明是指盒子背景半透明，盒子里面的内容不受影响

> 背景总结
>
> [![TM3FfA.png](https://s4.ax1x.com/2021/12/21/TM3FfA.png)](https://imgtu.com/i/TM3FfA)

### CSS的引入方式

1、CSS的三种样式表

> 内部样式表

```中文
是写到html页面内部，是将所有的CSS代码抽出来，单独放到一个<style>标签中，例如：
```

> ```css
> <style>
> div {
>  color: red;
>  font-size: 12px;
> }
> </style>
> ```

- 理论上<style>标签可以放在HTML文档的任何地方，但一般会放在文档的<head>标签中

- 通过此种方式，可以方便控制当前整个页面中的元素样式设置

- 代码结构清晰，但是没有实现结构与样式完全分离

- 使用内部样式表设定CSS，通常也被称为嵌入式引入。

> 行内样式表

```中文
	是在元素标签内部的<style>属性中设置CSS样式，适合于修改简单样式

	基本语法格式如下：
```

```html
<div style="color: red; font-size: 12px;">光武哥哥是猪头</div>
```

- style其实就是标签的属性
- 在双引号中间，写法要符合CSS规范
- 可以控制当前的标签设置样式
- 由于书写繁琐，并且没有体现出结构与样式相分离的思想，所以不推荐大量使用，只有对当前元素添加简单样式的时候，可以考虑使用
- 使用行内样式表设定CSS，通常也被称为行内式引入

> 外部样式表

```中文
	适合于样式比较多的情况，核心是：样式单独写到CSS文件中，之后吧CSS文件引入到HTML页面中使用

	引用外部样式表分为两步：
```

- 新建一个后缀名为.css的样式文件，把所有的CSS代码都放入此文件中
- 在HTMl页面中，使用<link>标签引入这个文件，基本语法格式如下

```html
<link rel="stylesheet" herf="css文件路径">
```

[![Te6tud.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/Te6tud.png)](https://imgtu.com/i/Te6tud)

- 使用外部样式表设定CSS，通常也被称为外链式或者链接式引入，这是开发中最常用的方式

2、CSS引入方式总结

[![Tecxwn.png](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/Tecxwn.png)](https://imgtu.com/i/Tecxwn)
