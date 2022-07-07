---
index : 8
category :
  - Interview
  - Leetcode
tag : 
  - DictionaryTree
  - Tire
  - Medium
title : Leetcode-1200 最小绝对差
---

## 题目

### 链接

[Leetcode-648 单词替换](https://leetcode.cn/problems/replace-words/)

### 题意

- 在英语中，我们有一个叫做 `词根(root)` 的概念，可以词根**后面**添加其他一些词组成另一个较长的单词——我们称这个词为 `继承词`(successor)。例如，词根 `an`，跟随着单词 `other`(其他)，可以形成新的单词 `another`(另一个)。

- 现在，给定一个由许多**词根**组成的词典 `dictionary` 和一个用空格分隔单词形成的句子 `sentence`。你需要将句子中的所有**继承词**用**词根**替换掉。如果**继承词**有许多可以形成它的**词根**，则用**最短**的词根替换它。

- 你需要输出替换之后的句子。

### 提示

- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 100`
- `dictionary[i] 仅由小写字母组成。`
- `1 <= sentence.length <= 10^6`
- `sentence 仅由小写字母和空格组成。`
- `sentence 中单词的总量在范围 [1, 1000] 内。`
- `sentence 中每个单词的长度在范围 [1, 1000] 内。`
- `sentence 中单词之间由一个空格隔开。`
- `sentence 没有前导或尾随空格。`

### 示例

- 示例一：

  ```
  输入：dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
  输出："the cat was rat by the bat"
  ```

- 示例二：

  ```
  输入：dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
  输出："a a b c"
  ```

## 分析

- 由题目中的 `词根`，很容易就能联想到 **字典树**，下面分析如何用 **字典树** 解决本题
- 将给定的 `字典`，保存进 **字典树**，并将每个词根结尾进行标记
- 把给定的 `sentence` 的每个单词到字典树中进行查找，如果能找到词根，就返回词根，如果找不到，结果就是该单词本身

## 代码

```java
class Solution {
    // 因为 dictionary.length 为 1000，dictionary[i].length 为100，所以idx最大可能到100000
    int[][] son = new int[100010][26];
    int[] cnt = new int[100010];
    int idx = 0;
    public String replaceWords(List<String> dictionary, String sentence) {
        for (String str : dictionary) insert(str);
        String[] strs = sentence.split(" ");
        StringBuilder res = new StringBuilder();
        for (int i = 0; i < strs.length; i++){
            String ans = query(strs[i]);
            // 如果找不到字根，就是加原单词
            if (ans.equals("")) res.append(strs[i]);
            else res.append(ans);
            if (i != strs.length - 1) res.append(" ");
        }
        return res.toString();
    }

    void insert(String str){
        int p = 0,u;
        for (int i = 0; i < str.length(); i++){
            u = str.charAt(i) - 'a';
            if (son[p][u] == 0){
                son[p][u] = ++idx;
            }
            p = son[p][u];
        }
        // 单词结尾做标记
        cnt[p]++;
    }

    String query(String str){
        int p = 0,u;
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++){
            u = str.charAt(i) - 'a';
            // 如果已经找到字根
            if (cnt[p] != 0) return sb.toString();
            // 如果找一半就发现没有该单词或字根
            if (son[p][u] == 0) return "";
            sb.append(str.charAt(i));
            p = son[p][u];
        }
        // 如果整个单词都能找到
        return sb.toString();
    }
}
```

