---
index : 12
category :
  - Interview
  - Leetcode
tag : 
  - Map
  - Medium
title : Leetcode-1282 用户分组
---

## 题目

[链接](https://leetcode.cn/problems/group-the-people-given-the-group-size-they-belong-to/)

### 题意

- 有 n 个人被分成数量未知的组。每个人都被标记为一个从 `0` 到 `n - 1` 的唯一ID 。

- 给定一个整数数组 `groupSizes` ，其中 `groupSizes[i]` 是第 `i` 个人所在的组的大小。例如，如果 `groupSizes[1] = 3` ，则第 `1` 个人必须位于大小为 `3` 的组中。

- 返回一个组列表，使每个人 `i` 都在一个大小为 `groupSizes[i]` 的组中。

- 每个人应该 **恰好只** 出现在 **一个组** 中，并且每个人必须在一个组中。如果有多个答案，返回其中 **任何** 一个。可以 保证 **给定输入** 至少有一个 **有效的解**。

### 提示

- `groupSizes.length == n`
- `1 <= n <= 500`
- `1 <= groupSizes[i] <= n`

### 示例

- 示例一：

  ```
  输入：groupSizes = [3,3,3,3,3,1,3]
  输出：[[5],[0,1,2],[3,4,6]]
  解释：
  第一组是 [5]，大小为 1，groupSizes[5] = 1。
  第二组是 [0,1,2]，大小为 3，groupSizes[0] = groupSizes[1] = groupSizes[2] = 3。
  第三组是 [3,4,6]，大小为 3，groupSizes[3] = groupSizes[4] = groupSizes[6] = 3。 
  其他可能的解决方案有 [[2,1,6],[5],[0,4,3]] 和 [[5],[0,6,2],[4,3,1]]。
  ```

- 示例二：

  ```
  输入：groupSizes = [2,1,3,3,3,2]
  输出：[[1],[0,5],[2,3,4]]
  ```

## 分析

- 从题意分析可知，若 `groupSizes[i] == groupSizes[j]`，则 `i、j` 一定是在同一类里面
- 所以可以先按 `groupSizes` 进行分组，将相同 `groupSize` 的人划分在同一组，并放到 **map** 中，以 `groupSize[]` 为 **key**
- 遍历整个 **map**，按照 **key**  的大小进行再分组，此时的分组结果就是答案

## 代码

```java
class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        HashMap<Integer,List<Integer>> map = new HashMap();
        for (int i = 0; i < groupSizes.length; i++){
            int temp = groupSizes[i];
            if (map.containsKey(temp)){
                map.get(temp).add(i);
            }else {
                List<Integer> list = new LinkedList();
                list.add(i);
                map.put(temp,list);
            }
        }

        List<List<Integer>> res = new LinkedList();
        for (int key: map.keySet()){
            List<Integer> temp = map.get(key);
            int times = temp.size() / key;
            for (int i = 0; i < times; i++){
                List<Integer> subRes = new LinkedList();
                for (int j = 0; j < key; j++){
                    subRes.add(temp.get(i * key + j));
                }
                res.add(subRes);
            }
        }
        return res;
    }
}
```

