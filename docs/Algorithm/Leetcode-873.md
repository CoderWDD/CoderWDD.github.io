---
index : 10
category :
  - Interview
  - Leetcode
tag : 
  - DP
  - Medium
title : Leetcode-873 最长的斐波那契子序列的长度
---

## 题目

### 链接

[Leetcode-873 最长的斐波那契子序列的长度](https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/)

### 题意

- 如果序列 `X_1, X_2, ..., X_n` 满足下列条件，就说它是 斐波那契式 的：

  - `n >= 3`

  - 对于所有 `i + 2 <= n`，都有 `X_i + X_{i+1} = X_{i+2}`

- 给定一个**严格递增**的正整数数组形成序列 arr ，找到 `arr` 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  `0` 。

- （回想一下，子序列是从原序列 `arr` 中派生出来的，它从 `arr` 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， `[3, 5, 8]` 是 `[3, 4, 5, 6, 7, 8]` 的一个子序列）

### 提示

-  `3 <= arr.length <= 1000`
- `1 <= arr[i] < arr[i + 1] <= 10^9`

### 示例

- 示例一：

  ```
  输入: arr = [1,2,3,4,5,6,7,8]
  输出: 5
  解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
  ```

- 示例二：

  ```
  输入: arr = [1,3,7,11,12,14,18]
  输出: 3
  解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。
  ```

## 分析

- 根据斐波那契数列的定义，一个斐波那契数列的长度至少为3
- 在斐波那契数列中，确定一个数的前提是能知道其所在的长度为 3 的数列中的另外两个数字，在本题中，可以将后两位作为依据，来唯一确定一个长度为 3 的斐波那契数列，所以，就有了如下的状态定义：
- **`dp[i][j]` ：表示以arr[i]、arr[j]结尾的斐波那契数列的最长长度**
- 求解 `dp[i][j]` 的过，可以通过枚举数列中的两个数，将第三个数用 map 存储，这样可以有效减低复杂度

## 代码

[Leetcode题解链接](https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence/solution/by-rrs6g3tz3u-qi57/)

```java
class Solution {
    public int lenLongestFibSubseq(int[] arr) {
        int n = arr.length;
        // 序列dp，最少三个数才能构成斐波那契数列，所以，需要以最后两个数字作为状态
        // dp[i][j] 表示以arr[i]、arr[j]结尾的斐波那契数列的最长长度
        int[][] dp = new int[n][n];

        // 建立数组元素与下标的map，方便由arr[i]直接获取到i
        HashMap<Integer,Integer> map = new HashMap<>();
        int res = 0;
        for (int i = 0; i < n; i++){
            for (int j = i - 1; j >= 0; j--){
                int temp = map.getOrDefault(arr[i] - arr[j],-1);
                // 如果不存在，或者该数已经被枚举过
                if (temp == -1 || temp >= j) continue;
                dp[i][j] = Math.max(3,dp[j][temp] + 1);
                res = Math.max(res,dp[i][j]);
            }
            // 枚举过的数就放进map里
            map.put(arr[i],i);
        }
        return res;
    }
}
```

