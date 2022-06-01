---
category:
  - Android
  - View
index : true
title : Android styling system
---

## 优先级

Android的视图样式可以通过`themes`、`styles`、`view attributes`等多种方式改变，因此如果通过多种方式改变了视图的样式，最终应该展现哪一个的效果呢？答案就是，给各种方式加上优先级，优先级高的，会覆盖优先级低的设置。

- 优先级金字塔（越往上优先级越高）

![image-20220601114147767](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220601114147767.png)

## View attributes

- 即通过设置属性值来改变样式
- 例如通过`margin`设置外边距，通过`padding`设置内边距等
- 缺点是每个`View`都需要当都设置，繁琐、重复度高

## Styles

- 使用`style`可以创建一个样式体集合，即可以在设置不止一个属性
- `style`是可以复用的，在需要用到的地方引用一下就可以使用

## Default style

- Android提供的默认`style`，即如果没有指定自定义`style`，则使用默认的`style`

## Theme

- 应用了`theme`，则表示对整个app起作用，其作用域是整个app，例如指定了`noActionBar`的`theme`，则整个app都没有`ActionBar`
- 可以使用`theme`来为整个app设置字体

## TextAppearance

- 只能适用于`text`

## 参考资料

[官方参考资料](https://developer.android.com/codelabs/kotlin-android-training-styles-and-themes?index=..%2F..android-kotlin-fundamentals#2)
