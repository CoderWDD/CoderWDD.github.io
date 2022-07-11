---
index : 12
category :
  - Jetpack Compose
tag :
  - Jetpack Compose
  - Android
  - Kotlin
  - BottomNavigation
  - Compose实战篇
title : Compose使用BottomNavigation
---

## 引入依赖

```groovy
dependencies {
    def nav_version = "2.5.0"

    implementation "androidx.navigation:navigation-compose:$nav_version"
}
```

- 注：最新的版本可以到[官网](https://developer.android.com/jetpack/compose/navigation?hl=zh-cn)进行查看

## 创建页面

- 创建几个不同的页面，用于 `BottomNavigation` 的 `item` 被点击时进行切换显示，这里为了方便，就在每个页面放个 `TextView` 进行区分

- 社区页面：

  ```kotlin
  @Composable
  fun CommunityPage(navController: NavController){
      Text(text = "CommunityPage", color = Color.Black)
  }
  ```

- 相册页面：

  ```kotlin
  @Composable
  fun PicBedPage(navController: NavController){
      Text(text = "PicBedPage", color = Color.Black)
  }
  ```

- 收藏页面：

  ```kotlin
  @Composable
  fun FavoritePage(navController: NavController){
      Text(text = "FavoritePage", color = Color.Black)
  }
  ```

## 创建 `NavContorller`

- `BottomNavigation` 只是一个底部导航栏，只是一个 UI 组件，本身并不能处理页面跳转的事件，要进行页面切换，还是的由 `NavController` 来负责，所以，下面先创建一个 `NavController`

  ```kotlin
  val navController = rememberNavController()
  ```

- 与 `jetpack Navigation` 一样，创建的 `NavControll` 也只是完成页面跳转的工作，而页面的管理，还是要交给 `NavHost`，所以下面再创建一个 `NavHost`，并将创建好的 `NavController` 作为参数传入，这样做是为了将页面管理与页面跳转建立其联系，同时，`NavHost` 既然是页面管理，那就还需要在其中声明相应的页面：

  ```kotlin
  @Composable
  fun MyNavigationHost(navController: NavHostController){
      NavHost(navController = navController, startDestination = NavRoutes.PicBedPage.route, builder = {
          composable(route = NavRoutes.PicBedPage.route, content = { PicBedPage(navController = navController)})
          composable(route = NavRoutes.CommunityPage.route, content = { CommunityPage(navController = navController) })
          composable(route = NavRoutes.Favorites.route, content = { FavoritePage(navController = navController) })
      })
  }
  ```

## 应用

- 上面已经配置好了 `NavHost` 与 `NavController`，下面就可以将其在 `BottomNavigation` 中引用，并处理相应的点击事件进行页面跳转了

- 声明 `BottomNavigation` 的子项

  ```kotlin
  // 为了便于管理，将显示的名字和跳转页面的url进行区别
  data class NavItem(val itemName: String,val pageName: String)
  val items = listOf(
      // NavRoutes.PicBedPage.route 就是对应页面的代号而已，可以自行替换
      NavItem(itemName = "图床", pageName = NavRoutes.PicBedPage.route),
      NavItem(itemName =  "社区", pageName = NavRoutes.CommunityPage.route),
      NavItem(itemName =  "收藏", pageName = NavRoutes.Favorites.route)
  )
  ```

- 在 `BottomNavigation` 的点击事件中处理：

  ```kotlin
  fun MyBottomBar(items: List<NavItem>,navController: NavHostController){
      var selectedItem by remember { mutableStateOf(0) }
      BottomNavigation() {
          items.forEachIndexed { index, item ->
              BottomNavigationItem(
                  modifier = Modifier.background(MaterialTheme.colors.primaryVariant),
                  selectedContentColor = Color.Black,
                  selected = selectedItem == index,
                  onClick = {
                      selectedItem = index
                      navController.navigate(item.pageName)
                  },
                  label = { Text(text = item.itemName, color = Color.Black) },
                  icon = {
                      when (index) {
                          0 -> Icon(
                              imageVector = if (selectedItem == index) Icons.Filled.Home else Icons.Outlined.Home,
                              contentDescription = item.itemName,
                              tint = if (selectedItem == index) Color.Black else MaterialTheme.colors.secondary
                          )
                          1 -> Icon(
                              imageVector = if (selectedItem == index) Icons.Filled.Create else Icons.Outlined.Create,
                              contentDescription = item.itemName,
                              tint = if (selectedItem == index) Color.Black else MaterialTheme.colors.secondary
                          )
                          2 -> Icon(
                              imageVector = if (selectedItem == index) Icons.Filled.Favorite else Icons.Outlined.Favorite,
                              contentDescription = item.itemName,
                              tint = if (selectedItem == index) Color.Black else MaterialTheme.colors.secondary
                          )
                      }
                  })
          }
      }
  }
  ```

- 将 `BottomNavigation` 配置到 `Scaffold` 中调用，同时让  `NavHost` 填充到页面中

  ```kotlin
  val navController = rememberNavController()
  val scaffoldState = rememberScaffoldState()
  val items = listOf(
      NavItem(itemName = "图床", pageName = NavRoutes.PicBedPage.route),
      NavItem(itemName =  "社区", pageName = NavRoutes.CommunityPage.route),
      NavItem(itemName =  "收藏", pageName = NavRoutes.Favorites.route)
  )
  
  Scaffold(
      scaffoldState = scaffoldState,
      topBar = {
          MyTopBar(appTitle = "PicSingular", scaffoldState = scaffoldState)
      },
      bottomBar = {
          MyBottomBar(items = items,navController = navController)
      }
  ) {
      Surface(
          modifier = Modifier.padding(it).fillMaxSize(),
      ) {
          MyNavigationHost(navController = navController)
      }
  }
  ```

## 完整代码

### 页面代码

- 社区页面：

  ```kotlin
  @Composable
  fun CommunityPage(navController: NavController){
      Text(text = "CommunityPage", color = Color.Black)
  }
  ```

- 相册页面：

  ```kotlin
  @Composable
  fun PicBedPage(navController: NavController){
      Text(text = "PicBedPage", color = Color.Black)
  }
  ```

- 收藏页面：

  ```kotlin
  @Composable
  fun FavoritePage(navController: NavController){
      Text(text = "FavoritePage", color = Color.Black)
  }
  ```

## 主页面调用

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            PicSingularTheme {
                rememberSystemUiController().setStatusBarColor(color = Color.Transparent)
                MyScaffold()
            }
        }
    }
}

data class NavItem(val itemName: String,val pageName: String)

@Preview
@Composable
fun MyScaffold() {
    val navController = rememberNavController()
    val items = listOf(
        NavItem(itemName = "图床", pageName = NavRoutes.PicBedPage.route),
        NavItem(itemName =  "社区", pageName = NavRoutes.CommunityPage.route),
        NavItem(itemName =  "收藏", pageName = NavRoutes.Favorites.route)
    )

    Scaffold(
        bottomBar = {
            MyBottomBar(items = items,navController = navController)
        }
    ) {
        Surface(
            modifier = Modifier.padding(it).fillMaxSize(),
        ) {
            MyNavigationHost(navController = navController)
        }
    }
}



@Composable
fun MyNavigationHost(navController: NavHostController){
    NavHost(navController = navController, startDestination = NavRoutes.PicBedPage.route, builder = {
        composable(route = NavRoutes.PicBedPage.route, content = { PicBedPage(navController = navController)})
        composable(route = NavRoutes.CommunityPage.route, content = { CommunityPage(navController = navController) })
        composable(route = NavRoutes.Favorites.route, content = { FavoritePage(navController = navController) })
    })
}

@Composable
fun MyBottomBar(items: List<NavItem>,navController: NavHostController){
    var selectedItem by remember { mutableStateOf(0) }
    BottomNavigation() {
        items.forEachIndexed { index, item ->
            BottomNavigationItem(
                modifier = Modifier.background(MaterialTheme.colors.primaryVariant),
                selectedContentColor = Color.Black,
                selected = selectedItem == index,
                onClick = {
                    selectedItem = index
                    navController.navigate(item.pageName)
                },
                label = { Text(text = item.itemName, color = Color.Black) },
                icon = {
                    when (index) {
                        0 -> Icon(
                            imageVector = if (selectedItem == index) Icons.Filled.Home else Icons.Outlined.Home,
                            contentDescription = item.itemName,
                            tint = if (selectedItem == index) Color.Black else MaterialTheme.colors.secondary
                        )
                        1 -> Icon(
                            imageVector = if (selectedItem == index) Icons.Filled.Create else Icons.Outlined.Create,
                            contentDescription = item.itemName,
                            tint = if (selectedItem == index) Color.Black else MaterialTheme.colors.secondary
                        )
                        2 -> Icon(
                            imageVector = if (selectedItem == index) Icons.Filled.Favorite else Icons.Outlined.Favorite,
                            contentDescription = item.itemName,
                            tint = if (selectedItem == index) Color.Black else MaterialTheme.colors.secondary
                        )
                    }
                })
        }
    }
}
```





