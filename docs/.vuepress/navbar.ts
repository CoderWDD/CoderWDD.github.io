import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // Android 选项
  {
    text:"Android",
    icon:"logo",
    prefix:"/Android/",
    children:[
      {
        text:"Kotlin",
        link:"Kotlin/"
      },
      {
        text:"Android Basics",
        link:"Basics/"
      },
      {
        text:"Android Intermediate",
        link:"Intermediate/"
      },
      {
        text:"Android Advanced",
        link:"Advanced/"
      }
    ]
  },
  // Java 选项
  {
    text:"Java",
    prefix:"/Java/",
    children:[
      {
        text:"Java Basics",
        link:"Basics/"
      },
      {
        text:"Java GUI",
        link:"GUI/"
      },
      {
        text:"Java Advanced",
        link:"Advanced/"
      }
    ]
  },
  // C++ 选项
  {
    text: "C++",
    prefix: "/C++/",
    children:[
      {
        text: "C++基础入门",
        link: "C++基础入门/"
      }
    ]
  },
  // Fontend 选项
  {
    text:"Fontend",
    prefix:"/Fontend/",
    children:[
      {
        text:"HTML",
        link:"HTML/"
      },
      {
        text:"CSS",
        link:"CSS/"
      },
      {
        text:"JavaScript",
        link:"JavaScript/"
      },
      {
        text:"Vue",
        link:"Vue/"
      }
    ]
  },
  // Algorithm 选项
  {
    text:"Algorithm",
    prefix:"/Algorithm/",
    children:[
      {
        text:"课程笔记",
        link:"ACM笔记/"
      },
    ]
  },
  // Linux 选项
  {
    text:"Linux",
    link:"/Linux/"
  },
  // Database 选项
  {
    text:"Database",
    link:"/Database/"
  },
  // Others 选项
  {
    text:"Others",
    link:"/Others/"
  },
]);
