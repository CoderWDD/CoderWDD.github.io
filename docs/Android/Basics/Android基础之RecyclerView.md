---
index : 2
title : Android基础之RecyclerView
category:
  - AndroidBasics
tag :
  - Basics
---

## 简介

`RecyclerView`，正如其名字一样，会自动**回收**其中的`item`，且当列表项滚动出屏幕时，`RecyclerView`不会销毁其视图。相反的，`RecyclerView`会对屏幕上滚动的新列表项重用该`item`视图，这种重用可以显著提高性能，改善应用响应能力并降低功耗

## 关键类

- `RecyclerView.Adapter`：即`RecyclerView`对应的适配器类，可以具体指定每个`item`的点击事件、内容、形状、动画等
- `ViewHolder`：在`RecyclerView`中的每一个`item`元素，都由一个`ViewHolder`对象进行定义，创建`ViewHolder`时，它并没有任何关联的数据，只有创建完成后，才会将其与具体的数据信息进行绑定
- `LayoutManager`：负责处理`RecyclerView`中的各个元素的**排列方式**，可以用系统自带的`Manager`进行实现，也可以自定义自己的`LayoutManager`
  - 三种常见布局：
    - `LinearLayoutManager`：线性布局
    - `GridLayoutManager`：网格布局
    - `StaggeredGridLayoutManager`：网格布局，但不要求每个格子都对齐排列

## 基本使用

- 继承`RecyclerView.Adapter`类，并需要重写的三个重要方法：
  - `onCreateViewHolder`：创建视图，即创建一个`ViewHolder`对象，用于保存**单个列表项的所有 `view`**
  - `onBindViewHolder`：将数据绑定到视图上，值得注意的是，使用缓存时可只用该方法来更新数据
  - `getItemCount`：获取`item`数量

- 使用实例：

  - 声明布局：

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:layout_behavior="@string/appbar_scrolling_view_behavior">
    
        <androidx.recyclerview.widget.RecyclerView
            android:id="@+id/recyclerViewTodos"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:scrollbars="vertical" />
    
    </androidx.constraintlayout.widget.ConstraintLayout>
    ```

  - `RecyclerView`中每个`item` 的布局：

    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <androidx.appcompat.widget.LinearLayoutCompat xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">
    
        <CheckBox
            android:id="@+id/cdTodoDone"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginStart="@dimen/margin_medium"/>
    
        <TextView
            android:id="@+id/tvTodoTitle"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="@dimen/padding_large"
            android:textSize="@dimen/font_large"/>
    
    </androidx.appcompat.widget.LinearLayoutCompat>
    ```

  - 为`RecyclerView`配置适配器：

    ```kotlin
    
    class MainActivity : AppCompatActivity() {
    
        private lateinit var binding: ActivityMainBinding
        private lateinit var contentMainBinding: ContentMainBinding
    
        override fun onCreate(savedInstanceState: Bundle?) {
            WindowCompat.setDecorFitsSystemWindows(window, false)
            super.onCreate(savedInstanceState)
    
            binding = ActivityMainBinding.inflate(layoutInflater)
            setContentView(binding.root)
            // 下面的dataList需要根据实际情况获取设置
            binding.recyclerViewTodos.adapter = RecyclerListAdapter(dataList)
        }
    }
    ```

  - `RecyclerListAdapter`类实现：

    ```kotlin
    class RecyclerListAdapter(private val items: MutableList<TodoItem>) : RecyclerView.Adapter<RecyclerListAdapter.ViewHolder>(){
        class ViewHolder(listItemView: View): RecyclerView.ViewHolder(listItemView) {
            private val tvTodoItem: TextView = listItemView.findViewById(R.id.tvTodoTitle)
            private val cbTodoDone: CheckBox = listItemView.findViewById(R.id.cdTodoDone)
    
            fun bindItem(todoItem: TodoItem){
                tvTodoItem.text = todoItem.title
                cbTodoDone.isChecked = false
            }
        }
    
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
            val itemView: View = LayoutInflater.from(parent.context).inflate(R.layout.todo_item,parent,false)
            return ViewHolder(itemView)
        }
    
        override fun onBindViewHolder(holder: ViewHolder, position: Int) {
            holder.bindItem(items[position])
        }
    
        override fun getItemCount() = items.size
    }
    ```

    