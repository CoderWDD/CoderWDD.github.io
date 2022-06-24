---
index : 1
category : 
  - BFS
  - Interview
  - Leetcode
tag : 
  - Medium
title : Leetcode-515在树的每行中找最大值
---

### 原题

### 链接

[Leetcode-515](https://leetcode.cn/problems/find-largest-value-in-each-tree-row/)

### 题意

- 给定一棵二叉树的根节点 `root` ，请找出该二叉树中每一层的最大值。

- 示例：

  ![](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/largest_e1.jpg)

  ```
  输入: root = [1,3,2,5,3,null,9]
  输出: [1,3,9]
  ```

### 提示

- 二叉树的节点个数的范围是 `[0,104]`
- -2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1

## 解决

### 分析

题目要求每一层的最大值，因此需要对树的每一层进行遍历，所以采用 **BFS** 进行遍历，需要注意的是，遍历的时候，需要一次遍历一层，否则无法求解。

### 代码

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> largestValues(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        List<Integer> res = new LinkedList<>();
		// 处理root为null的情况
        if (root == null) return res;

        queue.offer(root);

        while (!queue.isEmpty()){
            int size = queue.size();
            int max = Integer.MIN_VALUE;
            for (int i = 0; i < size; i++){
                TreeNode node = queue.poll();

                max = Math.max(max,node.val);

                if (node.left != null){
                    queue.offer(node.left);
                }

                if (node.right != null){
                    queue.offer(node.right);
                }
            }

            res.add(max);

        }

        return res;
    }
}
```

### 结果

![image-20220624130646712](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220624130646712.png)