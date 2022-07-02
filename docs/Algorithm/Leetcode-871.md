---
index : 6
category : 
  - Greedy
  - Interview
  - Leetcode
tag : 
  - Hard
title : Leetcode-241 为运算表达式设计优先级
---

## 题目

### 链接

[最低加油次数](https://leetcode.cn/problems/minimum-number-of-refueling-stops/)

### 题意

- 汽车从起点出发驶向目的地，该目的地位于出发位置东面 `target` 英里处。

- 沿途有加油站，每个 `station[i]` 代表一个加油站，它位于出发位置东面 `station[i][0]` 英里处，并且有 `station[i][1]` 升汽油。

- 假设汽车油箱的容量是无限的，其中最初有 `startFuel` 升燃料。它每行驶 1 英里就会用掉 1 升汽油。

- 当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。

- 为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 `-1` 。

- 注意：如果汽车到达加油站时剩余燃料为 0，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 0，仍然认为它已经到达目的地。

### 提示

- `1 <= target, startFuel, stations[i][1] <= 10<sup>9</sup>`
- `0 <= stations.length <= 500`
- `0 < stations[0][0] < stations[1][0] < ... < stations[stations.length-1][0] < target`

### 示例

- 示例一：

  ```
  输入：target = 1, startFuel = 1, stations = []
  输出：0
  解释：我们可以在不加油的情况下到达目的地。
  ```

- 示例二：

  ```
  输入：target = 100, startFuel = 1, stations = [[10,100]]
  输出：-1
  解释：我们无法抵达目的地，甚至无法到达第一个加油站。
  ```

- 示例三：

  ```
  输入：target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
  输出：2
  解释：
  我们出发时有 10 升燃料。
  我们开车来到距起点 10 英里处的加油站，消耗 10 升燃料。将汽油从 0 升加到 60 升。
  然后，我们从 10 英里处的加油站开到 60 英里处的加油站（消耗 50 升燃料），
  并将汽油从 10 升加到 50 升。然后我们开车抵达目的地。
  我们沿途在1两个加油站停靠，所以返回 2 。
  ```

## 分析

- 一个贪心策略，就是每次都从已经经过的没有加过油的加油站中取出油量最大的加油站，将油加入到车中
- 因为每次要取最大油量的加油站，所以需要用 `优先队列` 来保存处理已经访问过的加油站
- 每次加过油的加油站就将其出队

## 代码

```java
class Solution {
    public int minRefuelStops(int target, int startFuel, int[][] stations) {
        // 用优先队列保存已经访问过的加油站的油量
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>((num1,num2)-> num2 - num1);
        int res = 0;
        for (int i = 0; i < stations.length; i++){
            // 如果到达第i个加油站时，油不够，就在队列里拿油，一直拿到够了或没油了再继续
            // 每拿一次油意味着要在一个加油站加油，所以让res + 1
            while (startFuel < stations[i][0] && !priorityQueue.isEmpty()){
                startFuel += priorityQueue.poll();
                res++;
            }
            // 如果队列里的油都拿完了，还不够，则说明无法到达
            if (startFuel < stations[i][0] && priorityQueue.isEmpty()) return -1;
            // 加入队列的条件是，能到达该加油站才将其加入，否则不行
            priorityQueue.offer(stations[i][1]);
        }
        // 对最后一个加油站到终点进行计算，如果当前油量不够，则在队列里拿油，一直拿到够了或者没油了再继续
        while (startFuel < target && !priorityQueue.isEmpty()){
            startFuel += priorityQueue.poll();
            res++;
        }
        // 如果所有的油都拿完了，还是到不了
        if (startFuel < target) return -1;
        
        return res;
    }
}
```



