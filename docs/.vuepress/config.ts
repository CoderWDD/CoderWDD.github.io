import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "瓜娃子",
  description: "A blog for daily learning!",

  base: "/",

  theme,
});
