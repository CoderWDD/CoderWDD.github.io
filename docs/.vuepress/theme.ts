import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://coderwdd.github.io/",

  author:     {
    name: "瓜瓜",
    url: "https://github.com/CoderWDD",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.svg",

  repo: "https://github.com/CoderWDD",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,
  navbarIcon: true,

  // sidebar
  sidebar: sidebar,

  // sidebar嵌套的标题深度
  headerDepth: 4,

  footer: "瓜娃子日寄",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime","PageView"],

  blog: {
    description: "呱呱（安卓）与蛙蛙（前端）的二人博客",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/CoderWDD",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  // 是否显示页面最后更新时间
  lastUpdated:true,

  // 是否显示页面贡献者
  contributors:true,

  // 是否展示编辑此页链接
  editLink:false,

  // 默认的版权信息，设置为 false 来默认禁用它
  copyright:false,

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      container: true,
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
