---
index : 8
category :
  - Interview
  - Leetcode
tag : 
  - TreeSet
  - Design
  - Easy
title : Leetcode-1200 最小绝对差
---

## 题目

### 链接

[Leetcode-729 我的日程安排表Ⅰ](https://leetcode.cn/problems/my-calendar-i/)

### 题意

- 实现一个 `MyCalendar` 类来存放你的日程安排。如果要添加的日程安排不会造成 **重复预订** ，则可以存储这个新的日程安排。

- 当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 **重复预订** 。

- 日程可以用一对整数 `start` 和 `end` 表示，这里的时间是半开区间，即 `[start, end)`, 实数 `x` 的范围为，  `start <= x < end` 。

- 实现 `MyCalendar` 类：

  - `MyCalendar()` 初始化日历对象。

  - `boolean book(int start, int end)` 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 `true` 。否则，返回 `false` 并且不要将该日程安排添加到日历中。

### 提示

- `0 <= start < end <= 109`
- 每个测试用例，调用 `book` 方法的次数最多不超过 `1000` 次

### 示例

```
输入：
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
输出：
[null, true, false, true]

解释：
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
myCalendar.book(20, 30); // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。
```

## 分析

### 暴力

- 从 `提示` 的数据量来看，本题就算是暴力解决，也不会 `TLE`，因此，有了以下的暴力法
- 将已经判断为合法的区间放入 `List`
- 每次有新的区间的时候，就跟已经在 `List` 中的区间对比
- 如果合法，就加入到 `List` ，否则返回 `false`

### 广义相等

- 因为要求 `区间不能有重叠`，可以将整个区间看出一个整体，采用 `Java` 的 `TreeSet`（为什么不是 `HashSet`，因为 `HashSet` 不能自定义比较器）
- 自定义 `TreeSet` 的比较器，当区间重叠时，认为两个区间相等
- 当有新区间的时候，就直接往 `TreeSet` 中添加，如果没有重叠则添加成功，否则失败

## 代码

### 暴力

```java
// 暴力解法
// 将已经判断为合法的区间放入List
// 每次有新的区间的时候，就跟已经在List中的区间对比
// 如果合法，就加入到List，否则返回false
class MyCalendar {
    List<int[]> calendar;
    public MyCalendar() {
        calendar = new ArrayList<>();
    }
    
    public boolean book(int start, int end) {
        for (int[] e : calendar){
            if (start < e[1] && end > e[0]) return false;
        }
        calendar.add(new int[]{start,end});
        return true;
    }
}
```

### TreeSet 巧解

```java
// TreeSet巧解，利用的是广义相等的概念，即自定义TreeSet的比较器，当区间重叠时，认为两个区间相等
 class MyCalendar {
    TreeSet<int[]> treeSet;
    public MyCalendar() {
        treeSet = new TreeSet<>((a,b)->{
            // 如果新加入的区间的start比已经加入的区间中的end大，则肯定是合法的
            if (a[1] <= b[0]) return -1;
            // 新区间的start比已经加入的区间的end小，则可能会重叠
            // 此时如果新区间的end比已经加入的区间的start小，则也是合法的
            else if (a[0] >= b[1]) return 1;
            // 到这里说明肯定有重叠
            return 0;
        });
    }
    
    public boolean book(int start, int end) {
        return treeSet.add(new int[]{start,end});
    }
}
```

