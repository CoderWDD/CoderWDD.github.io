---
index : 5
category : 
  - memoization
  - Interview
  - Leetcode
tag : 
  - Medium
title : Leetcode-241 为运算表达式设计优先级
---

## 原题

### 链接

[Leetcode-241 为运算表达式设计优先级](https://leetcode.cn/problems/different-ways-to-add-parentheses/)

### 题意

- 给你一个由数字和运算符组成的字符串 `expression` ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。你可以 **按任意顺序** 返回答案。

- 生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 `10<sup>4</sup> `。

### 提示

- `1 <= expression.length <= 20`
- `expression` 由数字和算符 `'+'`、`'-'` 和 `'*'` 组成。
- 输入表达式中的所有整数值在范围 `[0, 99] `

### 示例

- 示例一：

  ```
  输入：expression = "2-1-1"
  输出：[0,2]
  解释：
  ((2-1)-1) = 0 
  (2-(1-1)) = 2
  ```

- 示例二：

  ```
  输入：expression = "2*3-4*5"
  输出：[-34,-14,-10,-10,10]
  解释：
  (2*(3-(4*5))) = -34 
  ((2*3)-(4*5)) = -14 
  ((2*(3-4))*5) = -10 
  (2*((3-4)*5)) = -10 
  (((2*3)-4)*5) = 10
  ```

## 分析

- 自由组合运算顺序，其实就是将运算符作为分割，然后分别对其左右两边进行求解，本质上就是 **分治** 的思想
- 所以，可以枚举每一个运算符，然后分别利用 `diffWaysToCompute(expression)` 进行求解，因为 `diffWaysToCompute(expression)` 的定义就是对表达式 `expression` 进行求解
- 求解的过程中需要注意，对于只有操作数，而没有运算符的表达式，则该表达式就是其操作，如 `expression` 为`[2]` 时，其运算结果就为 2
- 因为对表达式的求解过程中，可能存在同样的 `expression` ，所以可以利用 `memoization` 的方法，对求解过的 `expression` 进行保存，当再次遇到相同的 `expression` 时，就不用再次进行求解了
- `memoization` 的时候，可以用 `Map` 进行保存，因为其查找时间复杂度足够优秀

## 代码

```java
class Solution {
    HashMap<String,List<Integer>> map = new HashMap<>();
    // 计算一个表达式的值
    public List<Integer> diffWaysToCompute(String expression) {
        if (expression.length() == 0) return new LinkedList<Integer> ();
        // 如果该表达式之前已经计算过了
        if (map.containsKey(expression)) return map.get(expression);

        int index = 0;
        int num = 0;
        // 计算出操作数
        while (index < expression.length() && !isOperation(expression.charAt(index))){
            num = num * 10 + expression.charAt(index) - '0';
            index++;
        }

        List<Integer> partRes = new LinkedList<>();

        // 如果表达式中没有运算符，只有数字，则直接进map，并返回即可
        if (index == expression.length()){
            partRes.add(num);
            map.put(expression,partRes);
            return partRes;
        }

        // 遍历每一个字符，以运算符为分割，分别计算运算符两边的结果
        for (int i = 0; i < expression.length(); i++){
            if (isOperation(expression.charAt(i))){
                char operation = expression.charAt(i);
                List<Integer> res1 = diffWaysToCompute(expression.substring(0,i));
                List<Integer> res2 = diffWaysToCompute(expression.substring(i + 1));
                for (int num1 : res1){
                    for (int num2 : res2){
                        partRes.add(cal(num1,operation,num2));
                    }
                }
            }
        }
        // 将当前表达式的结果保存，后面再计算到的时候就不用再计算了
        map.put(expression,partRes);
        return partRes;
    }

    int cal(int num1,char operation,int num2){
        switch (operation){
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
        }
        return 0;
    }

    boolean isOperation(char temp){
        switch (temp) {
            case '+':
            case '-':
            case '*':
                return true;
            default: return false;
        }
    }
}
```



