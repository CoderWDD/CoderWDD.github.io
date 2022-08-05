---
index : 11
category :
  - Interview
  - Leetcode
tag : 
  - BFS
  - Medium
title : Leetcode-623 在二叉树中增加一行
---

## 题目

[链接](https://leetcode.cn/problems/add-one-row-to-tree/)

### 题意

- 给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。

- 注意，根节点 root 位于深度 1 。

- 加法规则如下:
  - 给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
  - cur 原来的左子树应该是新的左子树根的左子树。
  - cur 原来的右子树应该是新的右子树根的右子树。
  - 如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。

### 提示

- 节点数在 [1, 104] 范围内
- 树的深度在 [1, 104]范围内
- -100 <= Node.val <= 100
- -10^5 <= val <= 10^5
- 1 <= depth <= the depth of tree + 1

### 示例

- 示例一：

  ![image-20220805130507618](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220805130507618.png)

  ```
  输入: root = [4,2,6,3,1,5], val = 1, depth = 2
  输出: [4,1,1,2,null,null,6,3,1,5]
  ```

- 示例二：

  ![image-20220805130553642](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220805130553642.png)

  ```
  输入: root = [4,2,null,3,1], val = 1, depth = 3
  输出:  [4,2,null,1,1,3,null,null,1]
  ```

## 分析

- 因为是要将数据直接插入到二叉树的某一层中去，所以很容易想到应该用 BFS 的思路来遍历二叉树
- 又因为我们改将数插入第 `i` 层时，所以需要改变其第 `i - 1` 层的父节点的指针指向，因此可以判断当前遍历的层是否是第 `i - 1`  层，从而决定是否要插入
- 最后还需要特判一下往第一层里插的时候，因为第一层是没有父节点的，所以不适应上面的思路

## 代码

```java
class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (depth == 1) return new TreeNode(val,root,null);
        Queue<TreeNode> queue = new LinkedList();
        int cnt = 1;
        queue.offer(root);
        while (!queue.isEmpty()){
            int size = queue.size();
            for (int i = 0; i < size; i++){
                TreeNode temp = queue.poll();
                if (cnt == depth - 1){
                    TreeNode left = new TreeNode(val,temp.left,null);
                    TreeNode right = new TreeNode(val,null,temp.right);
                    temp.left = left;
                    temp.right = right;
                }
                if (temp.left != null) queue.offer(temp.left);
                if (temp.right != null) queue.offer(temp.right);
            }
            cnt++;
        }
        return root;
    }
}
```



