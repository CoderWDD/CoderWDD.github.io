import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as c,c as d,a as e,d as r,e as i,b as a}from"./app.0cfadff4.js";const s={},n=i('<h2 id="\u534F\u7A0B\u8C03\u5EA6\u5668" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B\u8C03\u5EA6\u5668" aria-hidden="true">#</a> \u534F\u7A0B\u8C03\u5EA6\u5668</h2><h3 id="dispatchers-main" tabindex="-1"><a class="header-anchor" href="#dispatchers-main" aria-hidden="true">#</a> Dispatchers.Main</h3><ul><li>Android \u4E0A\u7684\u4E3B\u7EBF\u7A0B</li><li>\u7528\u6765\u5904\u7406 UI \u4EA4\u4E92\u548C\u4E00\u4E9B\u8F7B\u91CF\u7EA7\u7684\u4EFB\u52A1\uFF0C\u5982\uFF1A <ul><li>\u8C03\u7528 <code>suspend</code> \u51FD\u6570</li><li>\u8C03\u7528 UI \u51FD\u6570</li><li>\u66F4\u65B0 LiveData</li></ul></li></ul>',3),h={id:"dispatchers-io",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#dispatchers-io","aria-hidden":"true"},"#",-1),u=a(),_={href:"http://Dispatchers.IO",target:"_blank",rel:"noopener noreferrer"},f=a("Dispatchers.IO"),m=i('<ul><li>\u975E\u4E3B\u7EBF\u7A0B</li><li>\u4E13\u4E3A\u78C1\u76D8\u548C\u7F51\u7EDC IO \u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5E38\u7528\u4E8E\uFF1A <ul><li>\u6570\u636E\u5E93\u64CD\u4F5C</li><li>\u6587\u4EF6\u8BFB\u5199</li><li>\u7F51\u7EDC\u5904\u7406</li></ul></li></ul><h3 id="dispatchers-default" tabindex="-1"><a class="header-anchor" href="#dispatchers-default" aria-hidden="true">#</a> Dispatchers.Default</h3><ul><li>\u975E\u4E3B\u7EBF\u7A0B</li><li>\u4E13\u4E3A CPU \u5BC6\u96C6\u578B\u4EFB\u52A1\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5E38\u7528\u4E8E\uFF1A <ul><li>\u6570\u7EC4\u6392\u5E8F</li><li>JSON \u6570\u636E\u89E3\u6790</li><li>\u5904\u7406\u5DEE\u5F02\u5224\u65AD</li></ul></li></ul><h2 id="\u7ED3\u6784\u5316\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u5316\u5E76\u53D1" aria-hidden="true">#</a> \u7ED3\u6784\u5316\u5E76\u53D1</h2><h3 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h3><ul><li>\u53D6\u6D88\u4EFB\u52A1\uFF1A\u5F53\u67D0\u9879\u4EFB\u52A1\u4E0D\u518D\u9700\u8981\u65F6\u53EF\u4EE5\u53D6\u6D88</li><li>\u8FFD\u8E2A\u4EFB\u52A1\uFF1A\u5F53\u4EFB\u52A1\u6B63\u5728\u6267\u884C\u65F6\uFF0C\u53EF\u4EE5\u8FFD\u8E2A</li><li>\u53D1\u51FA\u9519\u8BEF\u4FE1\u53F7\uFF1A\u5F53\u534F\u7A0B\u5931\u8D25\u65F6\uFF0C\u53D1\u51FA\u9519\u8BEF\u4FE1\u53F7\u8868\u660E\u6709\u9519\u8BEF\u53D1\u751F</li></ul><h2 id="coroutinescope" tabindex="-1"><a class="header-anchor" href="#coroutinescope" aria-hidden="true">#</a> CoroutineScope</h2><p>\u534F\u7A0B\u4F5C\u7528\u57DF\uFF0C\u80FD\u8DDF\u8E2A\u534F\u7A0B\uFF0C\u8FD8\u53EF\u4EE5\u53D6\u6D88\u5176\u4F5C\u7528\u57DF\u5185\u7684\u6240\u4EE5\u534F\u7A0B</p><ul><li>GlobalScope\uFF1A\u751F\u547D\u5468\u671F\u662F <code>process</code> \u7EA7\u522B\u7684\uFF0C\u5373\u4F7F\u662F <code>Activity</code> \u6216 <code>Fragment</code> \u5DF2\u7ECF\u88AB\u9500\u6BC1\uFF0C\u534F\u7A0B\u4ECD\u7136\u5728\u6267\u884C</li><li>MainScope\uFF1A\u5728 <code>Activity</code> \u4E2D\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5728 <code>onDestroy()</code> \u4E2D\u53D6\u6D88\u534F\u7A0B</li><li>viewModelScope\uFF1A\u53EA\u80FD\u5728 <code>ViewModel</code> \u4E2D\u4F7F\u7528\uFF0C\u7ED1\u5B9A\u7684\u662F <code>ViewModel</code> \u7684\u751F\u547D\u5468\u671F</li><li>lifecycleScope\uFF1A\u53EA\u80FD\u5728 <code>Activity</code>\u3001<code>Fragment</code> \u4E2D\u4F7F\u7528\uFF0C\u4F1A\u7ED1\u5B9A <code>Activity</code>\u3001<code>Fragment</code> \u7684\u751F\u547D\u5468\u671F</li></ul><h2 id="\u534F\u7A0B\u7684\u542F\u52A8\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B\u7684\u542F\u52A8\u6A21\u5F0F" aria-hidden="true">#</a> \u534F\u7A0B\u7684\u542F\u52A8\u6A21\u5F0F</h2><ul><li><p>DEFAULT\uFF1A\u534F\u7A0B\u521B\u5EFA\u540E\uFF0C\u7ACB\u5373\u5F00\u59CB\u8C03\u5EA6\uFF0C\u5728\u8C03\u5EA6\u524D\u5982\u679C\u534F\u7A0B\u88AB\u53D6\u6D88\uFF0C\u5C06\u76F4\u63A5\u8FDB\u5165\u53D6\u6D88\u76F8\u5E94\u7684\u72B6\u6001</p></li><li><p>ATOMIC\uFF1A\u534F\u7A0B\u521B\u5EFA\u540E\uFF0C\u7ACB\u5373\u5F00\u59CB\u8C03\u5EA6\uFF0C\u534F\u7A0B\u6267\u884C\u5230\u7B2C\u4E00\u4E2A\u6302\u8D77\u70B9\u4E4B\u524D\u4E0D\u54CD\u5E94\u53D6\u6D88</p></li><li><p>LAZY\uFF1A\u53EA\u6709\u534F\u7A0B\u88AB\u9700\u8981\u65F6\uFF0C\u5305\u62EC\u4E3B\u52A8\u8C03\u7528\u534F\u7A0B\u7684 start\u3001join \u6216\u8005 await \u7B49\u51FD\u6570\u65F6\u624D\u4F1A\u5F00\u59CB\u8C03\u5EA6\uFF0C\u5982\u679C\u8C03\u5EA6\u524D\u5C31\u88AB\u53D6\u6D88\uFF0C\u90A3\u4E48\u8BE5\u534F\u7A0B\u5C06\u76F4\u63A5\u8FDB\u5165\u5F02\u5E38\u7ED3\u675F\u72B6\u6001</p></li><li><p>UNDISPATCHED\uFF1A\u534F\u7A0B\u521B\u5EFA\u540E\u7ACB\u5373\u5728 <strong>\u5F53\u524D\u51FD\u6570\u8C03\u7528\u6808</strong> \u4E2D\u6267\u884C\uFF0C\u76F4\u5230\u9047\u5230\u7B2C\u4E00\u4E2A\u771F\u6B63\u6302\u8D77\u7684\u70B9</p></li><li><p>\u6CE8\u610F\uFF1A<strong>\u5F00\u59CB\u8C03\u5EA6\uFF0C\u53EA\u662F\u5C06\u5F53\u524D\u4EFB\u52A1\u52A0\u5165\u5F85\u6267\u884C\u7684\u961F\u5217\uFF0C\u800C\u4E0D\u662F\u6307\u7ACB\u5373\u88AB\u6267\u884C</strong></p></li></ul>',11);function x(b,v){const l=t("ExternalLinkIcon");return c(),d("div",null,[n,e("h3",h,[p,u,e("a",_,[f,r(l)])]),m])}var I=o(s,[["render",x],["__file","Kotlin\u534F\u7A0B\u4E8C.html.vue"]]);export{I as default};
