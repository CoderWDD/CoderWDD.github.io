---
category:
  - git
  - Others
index : 4
---

# Git教程

本页只介绍`Git`的简单应用，更多的用法，请参考文末的资料参考或者查看相关帮助文档。如果有遗漏或者缺少必要内容，欢迎留言评论补充！

## 常规操作

- 初始化Git仓库：

  ```shell
  git init
  ```

- 将文件添加到暂存区：

  ```shell
  git add <FileName>
  ```

- 将文件提交到仓库，并从暂存区移除：

  ```shell
  git commit -m "提交说明"
  ```

  `-m`指的是提交的说明，这一点对于协作很有用

- 查看文件较上次做了哪些修改：

  ```shell
  git diff <FileName>
  ```

- 查看当前的状态：

  ```shell
  git status
  ```

- 查看提交历史记录/版本`log`，以便确定要回退到哪个版本：

  ```shell
  git log
  ```

  值得注意的是，如果觉得输出信息太多，完全可以指定输出的内容，只需加上`--pretty=oneline`参数：

  ```shell
  git log --pretty=oneline
  ```

- 回退到指定历史版本：

  ```shell
  git reset --hard <Commit ID>
  
  eg：git reset --hard ae444ff93d82cd8a60736599a238e0441e5ca295
  ```

- 查看命令记录，并查看每个操作版本的`commit id`，实现版本回退的回退：

  ```shell
  git reflog
  ```

- 撤销工作区的文件操作的两种情形：**可以用于恢复删除文件**

  - 自文件修改后，还没有被放到暂存区，撤销操作会撤销到和版本库中一样的状态

  - 文件修改后被添加到暂存区了，则撤销操作会撤销到和暂存区中一样的状态

    ```shell
    git checkout -- <FileName>
    ```

    上面的`--` 不能省略，否则就变成了切换分支的操作了

- 撤销暂存区的文件修改操作：

  ```shell
  git restore --staged <FileName>
  ```

- 删除文件：

  - 从暂存区删除：

    ```shell
    git rm <Filename>
    ```

  - 从版本库删除：

    ```shell
    git rm <Filename>
    git commit -m "删除说明"
    ```

## 远程仓库

- 添加远程仓库：

  ```shell
  git remote add origin <RemoteRepoLink>
  eg: git remote add origin git@github.com:CoderWDD/GitLearning.git
  ```

- 把本地的`master`分支改为`main`：

  ```shell
  git branch -m master main
  ```

- 将本地的`main`分支推送到远程仓库：

  - 首次推送：

    ```shell
    git push -u origin main
    ```

  - 非首次推送：

    ```shell
    git push origin main
    ```

- 从远程仓库拉取：

  ```shell
  git clone <RemoteRepoLink>
  eg: git remote add origin git@github.com:CoderWDD/GitLearning.git
  ```

## 分支

- 创建分支：

  ```shell
  git branch <NewBranchName>
  ```

- 切换到分支：

  ```shell
  git checkout <BranchName>
  or
  git switch <BranchName>
  ```

  将上面两步合并，即创建新分支并切换过去：

  ```shell
  git checkout -b <NewBranchName>
  ```

- 查看当前分支：

  ```shell
  git branch
  ```

- 查看分支的工作流：

  ```shell
   git log --graph 
   or
    git log --graph --pretty=oneline --abbrev-commit
  ```

- 合并分支：

  ```shell
  git merge <BranchName>
  ```

  值得注意的是，合并分支，是将指定的分支合并到当前分支，即我们需要切换主分支，再将其他分支合并过来

- 删除分支：

  ```shell
  git branch -d <BranchName>
  ```

### Switch

- 创建并切换到新的分支：

  ```shell
  git switch -c <NewBranchName>
  ```

- 直接切换到已有的分支：

  ```shell
  git switch <BranchName>
  ```

## 学习资料推荐

- [廖雪峰的Git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
  - 全面且容易理解接受，文档有大量例子，学习讨论也很方便