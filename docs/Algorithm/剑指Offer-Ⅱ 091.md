---
index : 2
category : 
  - DP
  - Interview
  - Leetcode
  - 剑指Offer
tag : 
  - Medium
title : 粉刷房子
---

## 原题

### 链接

[剑指Offer Ⅱ-091](https://leetcode.cn/problems/JEj789/)

### 题意

假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。

例如，`costs[0][0]` 表示第 0 号房子粉刷成红色的成本花费；`costs[1][2]` 表示第 1 号房子粉刷成绿色的花费，以此类推。

请计算出粉刷完所有房子最少的花费成本。

```
输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
输出: 10
解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。
     最少花费: 2 + 5 + 3 = 10。
```

```
输入: costs = [[7,6,2]]
输出: 2
```

### 提示

- `costs.length == n`
- `costs[i].length == 3`
- `1 <= n <= 100`
- `1 <= costs[i][j] <= 20`

## 解决

### 分析

- 因为每个房子都有不同的选择，且都会与前面的房子的状态有关联，所以，直接采用动态规划的方法，下面给出动态规划的状态转移方程：
  - $dp[i][j]=dp[i-1][k],j=1,2,3 \space and \space k \in j \space and \space j!=k$

### 代码

```java
class Solution {
    public int minCost(int[][] costs) {
        int n = costs.length;
        // dp[i][j] ：前i个号房子粉刷成j颜色的最少成本
        int[][] dp = new int[n + 1][3];
        for (int i = 1; i <= n; i++){
            dp[i][0] = Math.min(dp[i-1][1],dp[i-1][2]) + costs[i-1][0];
            dp[i][1] = Math.min(dp[i-1][0],dp[i-1][2]) + costs[i-1][1];
            dp[i][2] = Math.min(dp[i-1][1],dp[i-1][0]) + costs[i-1][2];
        }
        return Math.min(dp[n][2],Math.min(dp[n][0],dp[n][1]));
    }
}
```

由上面状态转移方程，可以看到第 i 个房子的状态，只与第 **i-1** 个房子的状态有关，因此，在进行状态计算的时候，就不需要保存所有的房子的状态，所以可以将状态压缩到一维，具体代码如下：

```java
class Solution {
    public int minCost(int[][] costs) {
        int n = costs.length;
        int[] dp = new int[3];
        for (int i = 0; i < n; i++){
            // 因为在状态更新的时候，需要用到前一个循环中的状态，所以，不能直接改变dp数组，而要等所有的改变完成后，再修改dp[]
            int[] temp = new int[3];
            temp[0] = Math.min(dp[1],dp[2]) + costs[i][0];
            temp[1] = Math.min(dp[0],dp[2]) + costs[i][1];
            temp[2] = Math.min(dp[1],dp[0]) + costs[i][2];
            dp = temp;
        }
        return Math.min(Math.min(dp[0],dp[1]),dp[2]);
    }
}
```

