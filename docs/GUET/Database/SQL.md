---
category:
  - Database
index : 2
title: 第二章：SQL语法
---

# SQL

## 数据库中对象的命名机制

`ServerName.DatabaeName.SchemaName.TableName`

每一层之间有包含关系，即模式包含表，数据库包括模式，数据库服务器包含数据库

## SQL命令表

| SQL功能  |          命令          |
| :------: | :--------------------: |
| 数据查询 |         SELECT         |
| 数据定义 |  CREATE、DROP、ALTER   |
| 数据修改 | INSERT、UPDATE、DELETE |
| 数据控制 |     GRANT、REVOKE      |

## 模式（Schema）

- 定义：表示一个独立的（抽象）空间，其可以包含诸如表、视图、存储过程等数据库对象，以表示这些数据库对象的有效边界。模式的所有者通常是数据库用户，也可以是数据库角色或应用程序角色。

- 创建模式：

  ```sql
  CREATE SCHEMA <模式名> AUTHORIZATION <用户名>
  ```

- 删除模式：

  ```sql
  DROP SCHEMA <模式名>  <CASCADE|RESTRICT>
  
  CASCADE(级联)：删除模式的同时把该模式中所有的数据库对象全部删除；
  RESTRICT(限制)：如果该模式中定义了下属的数据库对象（如表、视图等），则拒绝该删除语句的执行。即当该模式中没有任何下属对象时， 才可以删除。
  ```

- 理解：定义模式实际上定义了一个**命名空间**

- 模式与基本表的关系：每一个基本表都属于某一个模式，一个模式包含多个基本表

## MySql

### 基本语法

- 修改表名：

  ```sql
  ALTER TABLE 旧表名 RENAME 新表名;
  eg：alter table stu rename student;
  ```

- 查看数据库中的所有表结构：

  ```sql
  SHOW TABLES;
  ```

- 查看表的基本结构：

  ```sql
  DESC TABLENAME;
  ```

- 修改表中属性名：

  ```sql
  ALTER TABLE 表名 CHANGE 旧属性名 新属性名 新数据类型  ;
  // 如果不需要修改属性的数据类型，可以把新字段的数据类型设置为和原来一样，但是！千万不要空着它！
  eg：alter table student change id stuid int(11);
  ```

- 修改属性的数据类型：

  ```sql
  ALTER TABLE 表名 MODIFY 字段名 数据类型;
  eg：alter table student modify Name varchar(30);
  ```

- 添加属性：

  ```sql
  ALTER TABLE 表名 ADD 新属性名 数据类型 [约束条件] [FIRST|AFTER] 已存在属性名;
  
  eg：alter table student add sex varchar(2) default '男' after Name;
  
  MySQL 中常用的约束:
  NOT NULL 约束：确保某列不能有 NULL 值。
  DEFAULT 约束：当某列没有指定值时，为该列提供默认值。
  UNIQUE 约束：确保某列中的所有值是不同的。
  PRIMARY Key 约束：唯一标识数据库表中的各行/记录。
  CHECK 约束：CHECK 约束确保某列中的所有值满足一定条件。
  
  不做[FIRST|AFTER]的位置说明，在添加属性时MySQL会默认把新属性加入到表的最后一列。
  
  如果我们想在第一列添加新的属性，只需做FIRST的位置说明。
  如果我们想在某一列后面添加新的属性，只需做AFTER的位置说明，然后注明你想让它添加在哪个属性的后面即可。
  ```

- 删除字段：

  ```sql
  ALTER TABLE 表名 DROP 字段名;
  eg：alter table student drop Salary;
  ```

- 向表中插入数据：

  ```sql
  INSERT INTO 表名 (属性名) VALUES (内容);
  eg：insert into product (maker,model,type) values ('X',6009,'laptop');
  ```

- 从逗号分隔的文件中读取所有数据插入表：

  ```sql
  LOAD DATA LOCAL INFILE '文件名' INTO TABLE 表名 character set gbk fields terminated by ',' ;
  eg：load data local infile 'src1/step1/product.csv' into table product character set gbk fields terminated by ',';
  ```

- 删除数据：

  ```sql
  DELETE FROM table1 WHERE ...;
  eg：delete from product where length(maker) != char_length(maker); // 删除表中maker属性含有中文的数据
  ```

- 修改数据：

  ```sql
  UPDATE  表名
  SET 字段名1 = 内容1,  字段名2 =  内容2, 字段名3 =  内容3
  WHERE 过滤条件;
  
  eg：update product set maker='JD' where maker='A';
  ```

- 集合并操作：

  ```sql
  select * from R union select * from S;
  ```

- 集合交操作：

  ```sql
  select * from R intersect select * from S;
  ```

- 集合差操作：

  ```sql
  select * from R except select * from S;
  ```

- 查找指定数量的记录：

  ```sql
  SELECT * FROM 表名 LIMIT 指定数量;
  
  eg：
  	SELECT * FROM Customers LIMIT 3;
  	SELECT * FROM Customers WHERE Country='Germany' LIMIT 3;
  ```

- 取MIN、MAX

  ```sql
  SELECT MIN(column_name) FROM table_name WHERE condition;
  SELECT MAX(column_name) FROM table_name WHERE condition;
  eg：
  	SELECT MIN(Price) AS SmallestPrice FROM Products;
  	SELECT MAX(Price) AS LargestPrice FROM Products;
  ```

- 统计个数：

  ```sql
  SELECT COUNT(column_name) FROM table_name WHERE condition;
  eg：
  	SELECT COUNT(ProductID) FROM Products;
  ```

- 求平均值：

  ```sql
  SELECT AVG(column_name)
  FROM table_name
  WHERE condition;
  
  eg：
  SELECT AVG(Price)
  FROM Products;
  ```

- 求和：

  ```sql
  SELECT SUM(column_name)
  FROM table_name
  WHERE condition;
  
  eg：
  SELECT SUM(Quantity)
  FROM OrderDetails;
  ```

- 模糊查找：

  - The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.

  - There are two wildcards often used in conjunction with the 

    ```
    LIKE
    ```

     operator:

    - The percent sign (%) represents zero, one, or multiple characters
    - The underscore sign (_) represents one, single character

  ```sql
  SELECT column1, column2, ...
  FROM table_name
  WHERE columnN LIKE pattern;
  
  eg：
  SELECT * FROM Customers
  WHERE CustomerName LIKE 'a%';
  
  SELECT * FROM Customers
  WHERE CustomerName NOT LIKE 'a%';
  ```

- SQL通配符（**SQL Wildcard Characters**）：

  - A wildcard character is used to substitute one or more characters in a string.
  - Wildcard characters are used with the `[LIKE](<https://www.w3schools.com/sql/sql_like.asp>)` operator. The `LIKE` operator is used in a `WHERE` clause to search for a specified pattern in a column.

  [Wildcard Characters in SQL Server](https://www.notion.so/b25ce6aa647a438190fa6e6e039aa680)

  ```sql
  SELECT * FROM Customers
  WHERE City LIKE '_ondon';
  ```

- SQL IN 操作：

  - The `IN` operator allows you to specify multiple values in a `WHERE` clause.
  - The `IN` operator is a shorthand for multiple `OR` conditions.

  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE column_name IN (value1, value2, ...);
  eg：
  ```

- SQL BETWEEN 操作：

  - The `BETWEEN` operator selects values within a given range. The values can be numbers, text, or dates.
  - The `BETWEEN` operator is inclusive: begin and end values are included.

  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE column_name BETWEEN value1 AND value2;
  ```

- SQL 别名：

  - An alias only exists for the duration of that query.
  - An alias is created with the `AS` keyword.

  ```sql
  SELECT column_name AS alias_name
  FROM table_name;
  
  SELECT column_name(s)
  FROM table_name AS alias_name;
  
  eg：
  SELECT CustomerID AS ID, CustomerName AS Customer
  FROM Customers;
  
  SELECT CustomerName AS Customer, ContactName AS [Contact Person]
  FROM Customers;
  ```

- SQL JOIN：

  ![image-20220523202254943](https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220523202254943.png)

  - （INNER） JOIN：Returns records that have matching values in both tables

    - **Note:** The `INNER JOIN` keyword selects all rows from both tables as long as there is a match between the columns. If there are records in the "Orders" table that do not have matches in "Customers", these orders will not be shown!

    ```sql
    SELECT column_name(s)
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;
    ```

  - LEFT （OUTER） JOIN：Returns all records from the left table, and the matched records from the right table

    - **Note:** The `LEFT JOIN` keyword returns all records from the left table (Customers), even if there are no matches in the right table (Orders).

    ```sql
    SELECT column_name(s)
    FROM table1
    LEFT JOIN table2
    ON table1.column_name = table2.column_name;
    ```

  - RIGHT （OUTER） JOIN：Returns all records from the right table, and the matched records from the left table

    - **Note:** The `RIGHT JOIN` keyword returns all records from the right table (Employees), even if there are no matches in the left table (Orders).

    ```sql
    SELECT column_name(s)
    FROM table1
    RIGHT JOIN table2
    ON table1.column_name = table2.column_name;
    ```

  - FULL （OUTER） JOIN：Returns all records when there is a match in either left or right table

    - The `FULL OUTER JOIN` keyword returns all records when there is a match in left (table1) or right (table2) table records.
    - **Note:** The `FULL OUTER JOIN` keyword returns all matching records from both tables whether the other table matches or not. So, if there are rows in "Customers" that do not have matches in "Orders", or if there are rows in "Orders" that do not have matches in "Customers", those rows will be listed as well.

    ```sql
    SELECT column_name(s)
    FROM table1
    FULL OUTER JOIN table2
    ON table1.column_name = table2.column_name
    WHERE condition;
    ```

- SQL GROUP BY：

  - The `GROUP BY` statement groups rows that have the same values into summary rows,

  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE condition
  GROUP BY column_name(s)
  ORDER BY column_name(s);
  
  eg：
  SELECT COUNT(CustomerID), Country
  FROM Customers
  GROUP BY Country;
  ```

- SQL HAVING Clause：

  - The `HAVING` clause was added to SQL because the `WHERE` keyword cannot be used with aggregate functions.

  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE condition
  GROUP BY column_name(s)
  HAVING condition
  ORDER BY column_name(s);
  
  eg：
  SELECT COUNT(CustomerID), Country
  FROM Customers
  GROUP BY Country
  HAVING COUNT(CustomerID) > 5;
  ```

- SQL EXISTS 操作：

  - The `EXISTS` operator is used to test for the existence of any record in a subquery.
  - The `EXISTS` operator returns TRUE if the subquery returns one or more records.

  ```sql
  SELECT column_name(s)
  FROM table_name
  WHERE EXISTS
  (SELECT column_name FROM table_name WHERE condition);
  
  eg：
  SELECT SupplierName
  FROM Suppliers
  WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);
  ```

- SQL ANY and ALL 操作：

  - The `ANY` and `ALL` operators allow you to perform a comparison between a single column value and a range of other values.

  - The `ANY` operator:

    - returns a boolean value as a result
    - returns TRUE if ANY of the subquery values meet the condition
    - `ANY` means that the condition will be true if the operation is true for **any** of the values in the range.

    ```sql
    SELECT column_name(s)
    FROM table_name
    WHERE column_name operator ANY
      (SELECT column_name
      FROM table_name
      WHERE condition);
    ```

  - The `ALL` operator:

    - returns a boolean value as a result
    - returns TRUE if ALL of the subquery values meet the condition
    - is used with `SELECT`, `WHERE` and `HAVING` statements
    - `ALL` means that the condition will be true only if the operation is true for **all** values in the range.

    ```sql
    SELECT ALL column_name(s)
    FROM table_name
    WHERE condition;
    ```

- SQL SELECT INTO ：

  - The `SELECT INTO` statement copies data from one table into a new table.

  ```sql
  SELECT *
  INTO newtable [IN externaldb]
  FROM oldtable
  WHERE condition;
  
  eg：
  SELECT * INTO CustomersBackup2017
  FROM Customers;
  ```

- SQL INSERT INTO SELECT ：

  - The `INSERT INTO SELECT` statement copies data from one table and inserts it into another table.
  - The `INSERT INTO SELECT` statement requires that the data types in source and target tables match.The `INSERT INTO SELECT` statement requires that the data types in source and target tables match.
  - **Note:** The existing records in the target table are unaffected.

  ```sql
  INSERT INTO table2
  SELECT * FROM table1
  WHERE condition;
  
  eg：
  INSERT INTO Customers (CustomerName, City, Country)
  SELECT SupplierName, City, Country FROM Suppliers;
  ```

- SQL CASE：

  - The `CASE` statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the `ELSE` clause.
  - If there is no `ELSE` part and no conditions are true, it returns NULL.

  ```sql
  CASE
      WHEN condition1 THEN result1
      WHEN condition2 THEN result2
      WHEN conditionN THEN resultN
      ELSE result
  END;
  
  eg：
  SELECT OrderID, Quantity,
  CASE
      WHEN Quantity > 30 THEN 'The quantity is greater than 30'
      WHEN Quantity = 30 THEN 'The quantity is 30'
      ELSE 'The quantity is under 30'
  END AS QuantityText
  FROM OrderDetails;
  ```

- SQL NULL Funtions： **IFNULL(), ISNULL(), COALESCE(), and NVL() Functions**

  - The function lets you return an alternative value if an expression is NULL:

  ```sql
  SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
  FROM Products;
  
  SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
  FROM Products;
  
  SELECT ProductName, UnitPrice * (UnitsInStock + ISNULL(UnitsOnOrder, 0))
  FROM Products;
  ```

- SQL BACKUP DATABASE：

  - The `BACKUP DATABASE` statement is used in SQL Server to create a full back up of an existing SQL database.

    ```sql
    BACKUP DATABASE databasename
    TO DISK = 'filepath';
    ```

  - A differential back up only backs up the parts of the database that have changed since the last full database backup.

    ```sql
    BACKUP DATABASE databasename
    TO DISK = 'filepath'
    WITH DIFFERENTIAL;
    ```

- SQL Constraints：

  - • NOT NULL：Ensures that a column cannot have a NULL value

    ```sql
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255) NOT NULL,
        Age int
    );
    
    ALTER TABLE Persons
    MODIFY Age int NOT NULL;
    ```

  - UNIQUE：Ensures that all values in a column are different

    ```sql
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        UNIQUE (ID)
    );
    
    ALTER TABLE Persons
    ADD UNIQUE (ID);
    
    ALTER TABLE Persons
    DROP INDEX UC_Person;
    ```

  - PRIMARY KEY：A combination of a `NOT NULL` and `UNIQUE`. Uniquely identifies each row in a table

    ```sql
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        PRIMARY KEY (ID)
    );
    
    ALTER TABLE Persons
    ADD PRIMARY KEY (ID);
    ```

  - FOREIGN KEY：Prevents actions that would destroy links between tables

    ```sql
    CREATE TABLE Orders (
        OrderID int NOT NULL,
        OrderNumber int NOT NULL,
        PersonID int,
        PRIMARY KEY (OrderID),
        FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
    );
    
    ALTER TABLE Orders
    ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
    
    ALTER TABLE Orders
    DROP FOREIGN KEY FK_PersonOrder;
    ```

  - CHECK：Ensures that the values in a column satisfies a specific condition

    ```sql
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        CHECK (Age>=18)
    );
    
    ALTER TABLE Persons
    ADD CHECK (Age>=18);
    
    ALTER TABLE Persons
    DROP CHECK CHK_PersonAge;
    ```

  - DEFAULT：Sets a default value for a column if no value is specified

    ```sql
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        City varchar(255) DEFAULT 'Sandnes'
    );
    
    ALTER TABLE Persons
    ALTER City SET DEFAULT 'Sandnes';
    
    ALTER TABLE Persons
    ALTER City DROP DEFAULT;
    ```

  - CREATE INDEX：Used to create and retrieve data from the database very quickly

    ```sql
    CREATE INDEX index_name
    ON table_name (column1, column2, ...);
    
    eg：
    CREATE INDEX idx_lastname
    ON Persons (LastName);
    
    ALTER TABLE table_name
    DROP INDEX index_name;
    ```

- SQL AUTO INCREMENT Field：

  - Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.
  - Often this is the primary key field that we would like to be created automatically every time a new record is inserted.

  ```sql
  CREATE TABLE Persons (
      Personid int NOT NULL AUTO_INCREMENT,
      LastName varchar(255) NOT NULL,
      FirstName varchar(255),
      Age int,
      PRIMARY KEY (Personid)
  );
  
  eg：
  ALTER TABLE Persons AUTO_INCREMENT=100;
  ```

- SQL Date Data Types：

  - DATE：format YYYY-MM-DD
  - DATETIME：format: YYYY-MM-DD HH:MI:SS
  - TIMESTAMP：format: YYYY-MM-DD HH:MI:SS
  - YEAR：format YYYY or YY

## 参考资料

[w3schools关于MySql的教程](https://www.w3schools.com/mysql/default.asp)
