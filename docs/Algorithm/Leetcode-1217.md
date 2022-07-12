---
index : 9
category :
  - Interview
  - Leetcode
tag : 
  - Greedy
  - Easy
title : Leetcode-1217 玩筹码
---

## 题目

### 链接

[Leetcode-1217 玩筹码](https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/)

### 题意

- 有 `n` 个筹码。第 `i` 个筹码的位置是 `position[i]` 。

- 我们需要把所有筹码移到同一个位置。在一步中，我们可以将第 `i` 个筹码的位置从 `position[i]` 改变为:
  - `position[i] + 2 或 position[i] - 2 ，此时 cost = 0`
  - `position[i] + 1 或 position[i] - 1 ，此时 cost = 1`
- 返回将所有筹码移动到同一位置上所需要的 最小代价 。

### 提示

- `1 <= chips.length <= 100`
- `1 <= chips[i] <= 10^9`

### 示例

- 示例一：

  ```
  输入：position = [1,2,3]
  输出：1
  解释：第一步:将位置3的筹码移动到位置1，成本为0。
  第二步:将位置2的筹码移动到位置1，成本= 1。
  总成本是1。
  ```

- 示例二：

  ```
  输入：position = [2,2,2,3,3]
  输出：2
  解释：我们可以把位置3的两个筹码移到位置2。每一步的成本为1。总成本= 2。
  ```

## 分析

- 由题知，将筹码一次移动两个位置，是不用付出代价的，因此，一种简单的贪心策略如下
- 可以先把处于奇数位的筹码移动到一起，此时代价为0
- 再把处于偶数位的筹码移动到一起，此时代价为0
- 为了尽量移动少的步数，需要将奇数和偶数位的筹码移到相邻的两个位置
- 此时问题转换为是将奇数位的筹码移到偶数位还是将偶数位的筹码移动到奇数位
- 因为移动一格的代价是一样的，所以只需对两者取个 `min`，即为答案

## 代码

```java
class Solution {
    public int minCostToMoveChips(int[] position) {
        int sum_j = 0;
        int sum_o = 0;
        for (int i = 0; i < position.length; i++){
            if (position[i] % 2 == 0) sum_o += 1;
            else sum_j += 1;
        }
        return Math.min(sum_j,sum_o);
    }
}
```

