---
index : 4
category : 
  - Math
  - Interview
  - Leetcode
tag : 
  - Easy
title : Leetcode-1175 质数排列
---

## 题目

### 链接

[Leetcode-1175 质数排列](https://leetcode.cn/problems/prime-arrangements/)

### 题意

- 请你帮忙给从 `1` 到 `n` 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。

- 让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。

- 由于答案可能会很大，所以请你返回答案 模 mod `10^9 + 7` 之后的结果即可。

### 提示

- `1 <= n <= 100`

### 示例

- 示例一：

  ```
  输入：n = 5
  输出：12
  解释：举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。
  ```

- 示例二：

  ```
  输入：n = 100
  输出：682289015
  ```

## 分析

- 题目可以理解为 `1~n` 中，分别对质数进行全排列，再对非质数进行全排列，最后将两个结果进行相乘即为结果
- 求解质数，可以用**质数筛**的方法求解
- 非质数个数即总数减去质数的个数
- 注意：
  - 求解过程中会爆 `int`，所以计算过程中需要用 `long` 承载，最后再将结果转为 `int`

## 代码

### Java代码

```java
class Solution {
    int mod = 1000000000 + 7;
    public int numPrimeArrangements(int n) {
        boolean[] st = new boolean[n + 1];
        int cnt = 0;
        Arrays.fill(st,true);
        for (int i = 2; i <= n; i++){
            if (st[i]){
                cnt ++;
                for (int j = 2; j * i <= n; j ++){
                    st[j * i] = false;
                }
            }
        }
        return (int)((getKth(cnt) * getKth(n - cnt)) % mod);
    }

    long getKth(int numk){
        long temp = 1;
        for (int i = numk; i > 0; i --){
            temp = (temp * i) % mod;
        }
        return temp;
    }
}
```

