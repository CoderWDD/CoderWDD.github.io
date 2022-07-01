---
index: 11
icon: markdown
title: Android框架之数据库
category:
  - AndroidBasics
  - Interview
tag:
  - SQLite
  - 面试
---

## SQLite

### 特点

- 关系型数据库
- 原生的
- 运算速度快
- 可以存储大量且比较复杂的数据

## LitePal

### 特点

- 对象关系映射模式
- 不需要使用 `SQL` 语句，直接使用封装好的 API 就可以实现 **建表** 和 **CRUD** 操作

## 面经

- **Android 的数据存储方式有哪些？**
  - 使用 `SharedPreferences` 存储数据，通过 **键值对** 形式保存一些 **简单** 的数据
  - **文件存储数据**，通过文件流形式去保存一些 **简单** 的数据
  - `SQLite` 数据库存储数据，Android **自带的小型关系型数据库**，其强大的 API 直接可对数据进行**增删改查**
  - **网络存储数据**，可以使用各种网络请求框架的缓存机制进行存储数据
  - `ContentProvider` 存储数据，定义统一的接口**供外部**对数据进行存储等操作
  - 其他的第三方数据库框架（如 `LitePal` 和 `GreenDao` 等）

- **使用 SQLite 时，有什么可以优化的地方？**

  - 创建索引：可以**提高查询效率，但是添加、更新、删除操作效率降低**

    ```sql
    CREATE INDEX INDEX_NAME ON TABLE_NAME
    ```

  - **使用显示事务**：将批量的数据库更新得到的 journal 文件打开关闭降到 1 次，不要出现多次打开文件和读写再关闭的操作，从而完成原子操作和回滚功能
  - 查询时按需求进行查询，不做无关查询
  - **使用异步机制去处理数据库操作**
  - 将 sql 语句编译成对应的 SQLiteStatement，而如果是批量操作，就重用 SQLiteStatement
  - 及时关闭 Cursor

- **SharedPreferences 的 commit() 和 apply() 的比较？**

  - 都是提交 SharedPreferences 的修改
  - `commit()` 采用**同步机制**将数据提交到本地，因此当并发提交的时候，要等正在 `commit` 的数据保存成功后再进行操作；
  - `apply()` 是原子提交，采用**异步机制**将数据提交，因此可以并发提交
  - `commit()` 具**有返回值**，返回值是 boolean 类型，表示提交是否成功；
  - `apply()` **没有返回值**，即使提交失败也不会报错，没有任何提示信息
