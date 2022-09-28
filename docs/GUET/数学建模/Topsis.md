---
index: 4
category: 
    - Matlab
    - 数学建模
title: Topsis
---

## Topsis

- 又叫 **优劣解距离法**，是一种常用的 **综合评价方法**，能充分利用原始数据的信息，其结果能精确地反映各评价方案之间的差距

## 核心思想

- 计算各个数据与其对应的 **最大值的距离** 和 **最小值的距离**

- 公式：

  ![image-20220912210106967](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220912210106967.png)

## 基本步骤

### 统一指标类型（一般正向化处理）

- 正向化，就是要将所有的指标类型统一转化为极大型指标

- 矩阵正向化的四种指标：

  ![image-20220912210322042](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220912210322042.png)

### 标准化消除量纲影响

![image-20220912210640671](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220912210640671.png)

### 计算得分并归一化

![image-20220912210710493](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220912210710493.png)

## 扩展

- 上面的一般模型，默认不同的指标对结果的影响权重是一致的，但是，如果当权重不相同时，应该怎么改呢？
- **可以在归一化时，将权重带入公式** （权重，可以用 **层次分析法** 确定不同指标的权重）

![image-20220912211432342](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220912211432342.png)