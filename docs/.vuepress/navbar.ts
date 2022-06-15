import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // Android 选项
  {
    text: "Android",
    icon: "logo",
    prefix: "/Android/",
    children: [
      {
        text: "Kotlin",
        link: "Kotlin/"
      },
      {
        text: "Android Basics",
        link: "Basics/"
      },
      {
        text: "Android Intermediate",
        link: "Intermediate/"
      },
      {
        text: "Android Advanced",
        link: "Advanced/"
      }
    ]
  },
  // Java 选项
  {
    text: "Java",
    prefix: "/Java/",
    children: [
      {
        text: "Java Basics",
        link: "Basics/"
      },
      {
        text: "Java GUI",
        link: "GUI/"
      },
      {
        text: "Java Advanced",
        link: "Advanced/"
      }
    ]
  },
  // Fontend 选项
  {
    text: "Fontend",
    prefix: "/Fontend/",
    children: [
      {
        text: "HTML",
        link: "HTML/"
      },
      {
        text: "CSS",
        link: "CSS/"
      },
      {
        text: "JavaScript",
        link: "JavaScript/"
      },
      {
        text: "Vue",
        link: "Vue/"
      }
    ]
  },
  // Algorithm 选项
  {
    text: "Algorithm",
    link: "/Algorithm/"
  },
  // Linux 选项
  {
    text: "Linux",
    link: "/Linux/"
  },
  // GUET 选项
  {
    text: "Guet",
    prefix: "/GUET/",
    children:
      [
        // C++ 选项
        {
          text: "C++",
          link: "C++/"
        },
        // 数据库选项
        {
          text: "Database",
          link: "Database/"
        },
        // Java选项
        {
          text: "Java",
          link: "Java/"
        },
        // ACM Algorithm 选项
        {
          text: "ACM Algorithm",
          link: "ACM笔记/"
        },
        // 数学建模 选项
        {
          text: "数学建模",
          link: "数学建模/"
        },
      ]
  },
  // Others 选项
  {
    text: "Others",
    link: "/Others/"
  },
]);
