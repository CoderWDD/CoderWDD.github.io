---
title : Flutter安装过程
index : 5
category:
  - AndroidBasics
  - Flutter
tag :
  - Flutter
  - Basics
---

## 安装步骤

- 使用 `git` 命令拉取安装：

  - 在想要安装的位置运行下面代码：

    ```git
    git clone https://github.com/flutter/flutter.git -b stable
    ```

- 将 Flutter 配置到 `PATH`：

  - 将刚刚拉取的 flutter 里的 bin 文件夹的绝对路径添加到用户组 Path 中

    ![image-20220614222047230](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220614222047230.png)

- 重启 cmd 窗口，运行以下命令：

  ```shell
  where flutter dart
  ```

  此时会输出刚刚安装的 flutter 和 Dart 的路径

  ![image-20220614222230699](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220614222230699.png)

  可以看到，**flutter 安装好后，是自带了 Dart 的，所以我们不需要再去额外配置安装 Dart 了**

- 查看是否还缺少依赖：

  ```shell
  flutter doctor
  ```

  ![image-20220614222428936](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220614222428936.png)

- 按相应的报错进行解决即可

## 错误处理

- 报 `Connection error` 相关的错误，一般是代理的问题，此时需要设置代理，让你的终端也走代理（在代理软件里看系统代理的端口，比如我的是8889）：

  ```shell
  set http_proxy=http://127.0.0.1:8889
  set https_proxy=http://127.0.0.1:8889
  ```

## 参考

[官方文档](https://docs.flutter.dev/get-started/install)
