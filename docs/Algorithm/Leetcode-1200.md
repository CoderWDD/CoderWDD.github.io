---
index : 7
category :
  - Interview
  - Leetcode
tag : 
  - Sort
  - Easy
title : Leetcode-1200 最小绝对差
---

## 题目

### 链接

[Leetcode-1200 最小绝对差](https://leetcode.cn/problems/minimum-absolute-difference/)

### 题意

- 给你个整数数组 `arr`，其中每个元素都 **不相同**。

- 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

### 提示

- 2 <= arr.length <= 10<sup>5</sup>
- -10<sup>6</sup> <= arr[i] <= 10<sup>6</sup>

### 示例

- 示例一：

  ```
  输入：arr = [4,2,1,3]
  输出：[[1,2],[2,3],[3,4]]
  ```

- 示例二：

  ```
  输入：arr = [1,3,6,10,15]
  输出：[[1,3]]
  ```

- 示例三：

  ```
  输入：arr = [3,8,-10,23,19,-4,-14,27]
  输出：[[-14,-10],[19,23],[23,27]]
  ```


## 分析

- 最小绝对差，当两个数大小越接近时，其绝对值之差就越小，而要令整个数组中两两之间的绝对值之差最小，即要让每个数都与其最接近的数做减法，因此，可以对整个数组进行**排序**。然后两两相减，此时总体的最小的绝对值之差就出现在其中
- 在两两相减中**找出最小的绝对差**
- **将等于绝对差的数对添加到结果中**

## 代码

### Java代码

```java
class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        int min = Integer.MAX_VALUE;
        // 找出最小绝对差
        for (int i = 1; i < arr.length; i++){
            if (Math.abs(arr[i] - arr[i - 1]) < min){
                min = Math.abs(arr[i] - arr[i - 1]);
            }
        }
        List<List<Integer>> res = new LinkedList<>();
        // 将最小绝对差的数对放入res中
        for (int i = 1; i < arr.length; i++){
            if (Math.abs(arr[i] - arr[i - 1]) == min){
                List<Integer> temp = new LinkedList<>();
                temp.add(arr[i - 1]);
                temp.add(arr[i]);
                res.add(temp);
            }
        }

        return res;
    }
}
```

