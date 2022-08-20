import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "吴某人",
  description: "A blog for daily learning!",

  base: "/",

  theme,
});
