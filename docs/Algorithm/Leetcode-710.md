---
index : 3
category : 
  - Map
  - Interview
  - Leetcode
tag : 
  - Hard
title : Leetcode-710 黑名单中的随机数
---

## 题目

### 链接

[Leetcode-710 黑名单中的随机数](https://leetcode.cn/problems/random-pick-with-blacklist/)

### 题意

- 给定一个整数 n 和一个 无重复 黑名单整数数组 blacklist 。设计一种算法，从 [0, n - 1] 范围内的任意整数中选取一个 未加入 黑名单 blacklist 的整数。任何在上述范围内且不在黑名单 blacklist 中的整数都应该有 同等的可能性 被返回。

- 优化你的算法，使它最小化调用语言 内置 随机函数的次数。

- 实现 Solution 类:
  - Solution(int n, int[] blacklist) 初始化整数 n 和被加入黑名单 blacklist 的整数
  - int pick() 返回一个范围为 [0, n - 1] 且不在黑名单 blacklist 中的随机整数

### 提示

- 1 <= n <= 10<sup>9</sup>
- 0 <= blacklist.length <= min(10<sup>5</sup>, n - 1)
- 0 <= blacklist[i] < n
- blacklist 中所有值都不同
- pick 最多被调用 2 * 10<sup>4</sup> 次

### 示例

```
输入
["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"]
[[7, [2, 3, 5]], [], [], [], [], [], [], []]
输出
[null, 0, 4, 1, 6, 1, 0, 4]

解释
Solution solution = new Solution(7, [2, 3, 5]);
solution.pick(); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，
                 // 0、1、4和6的返回概率必须相等(即概率为1/4)。
solution.pick(); // 返回 4
solution.pick(); // 返回 1
solution.pick(); // 返回 6
solution.pick(); // 返回 1
solution.pick(); // 返回 0
solution.pick(); // 返回 4
```

## 分析

- 因为黑名单 blacklist 中的数，都是在 0~n 之间，只是其数字是分散的。问题就转换为在 0~n 之间找不在 blacklist[] 中的数，并随机返回即可
- blacklist 中的数是无规律的，所以需要用 map 来存储，又 Random 类只能生成一段区间内的随机数，所以，如果我们可以将 blacklist 中的数都统一划分到一个区间，我们就可以用总的区间长度 n，减去 blacklist 所在区间，然后直接调用随机函数取值即可了
- 所以，我们可以将 blacklist 中的数，都放到总区间 [0,n] 的后半段[m,n]，然后在 [0,m] 中随机返回一个数即可，下面来看看具体做法：
  - 如果 blacklist[i] 本身就是 [m,n] 之间，则不用处理
  - 如果 blacklist[i] 在 [0,m] 之间，则意味着需要将其移到 [m,n] 之中，这里可以用一个map，来记录将 blacklist[i] 移动到哪里，也就是将原始位置和移动之后的位置做了一个映射，所以就不需要真正去执行移动的操作了

### 代码

```java
class Solution {
    HashMap<Integer,Integer> map ;
    Random random;
    int bound;
    public Solution(int n, int[] blacklist) {
        map = new HashMap<>();
        random = new Random();
        int m = blacklist.length;
        bound = n - m;
        // 用black来记录原本就在blacklist中的数，便于后面在需要进行移动blacklist[i]的时候，判断该位置是否已经被占据了
        Set<Integer> black = new HashSet<>();
        for (int b : blacklist){
            if (b >= bound){
                black.add(b);
            }
        }
		// w 表示可以移动的位置
        int w = bound;
        for (int b : blacklist){
            if (b < bound){
                while (black.contains(w)){
                    ++w;
                }
                // 将需要移动的数与移动到的目标位置进行映射
                map.put(b,w);
                ++w;
            }
        }
    }
    
    public int pick() {
        // 直接在[0,m]之间随机取数即可
        int x = random.nextInt(bound);
        return map.getOrDefault(x,x);
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(n, blacklist);
 * int param_1 = obj.pick();
 */
```

