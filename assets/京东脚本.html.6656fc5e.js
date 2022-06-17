import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{d as i}from"./app.2a4eab05.js";const n={},l=i(`<h1 id="\u4EAC\u4E1C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4EAC\u4E1C\u811A\u672C" aria-hidden="true">#</a> \u4EAC\u4E1C\u811A\u672C</h1><h2 id="\u9752\u9F99\u9762\u677F\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u9752\u9F99\u9762\u677F\u642D\u5EFA" aria-hidden="true">#</a> \u9752\u9F99\u9762\u677F\u642D\u5EFA</h2><ul><li><p>\u65B0\u5EFA\u6587\u4EF6\u5939\uFF0C\u7528\u4E8E\u5B58\u653E\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> qinglong
<span class="token builtin class-name">cd</span> qinglong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>docker-compose.yml</code>\uFF1A</p><ul><li><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://raw.githubusercontent.com/whyour/qinglong/develop/docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u81EA\u884C\u5EFA\u7ACB\u4E00\u4E2A <code>docker-compose.yml</code>\u6587\u4EF6\uFF0C\u624B\u52A8\u590D\u5236\u4E0B\u9762\u5185\u5BB9\u5230\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u3002</li></ul><div class="language-shel ext-shel line-numbers-mode"><pre class="language-shel"><code>version: &#39;2&#39;
services:
  web:
    image: whyour/qinglong:latest
    volumes:
      - ./data/config:/ql/config
      - ./data/log:/ql/log
      - ./data/db:/ql/db
      - ./data/scripts:/ql/scripts
      - ./data/repo:/ql/repo
      - ./data/raw:/ql/raw
    ports:
      - &quot;0.0.0.0:5700:5700&quot;
    restart: unless-stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u4F7F\u7528docker-compose\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6CE8\uFF1A\u5728\u653E\u7F6E<code> docker-compose.yml</code> \u7684\u6587\u4EF6\u5939\u4E0B\u8FD0\u884C</li></ul></li><li><p>\u5230\u6D4F\u89C8\u5668\u4E2D\u914D\u7F6E\uFF1A</p><ul><li>\u6D4F\u89C8\u5668\u8F93\u5165<code>ip:5700</code>\u5373\u53EF\u8FDB\u5165\u9762\u677F</li></ul></li></ul><hr><h2 id="\u62C9\u811A\u672C\u8DD1\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u62C9\u811A\u672C\u8DD1\u4EFB\u52A1" aria-hidden="true">#</a> \u62C9\u811A\u672C\u8DD1\u4EFB\u52A1</h2><ul><li><p>\u6DFB\u52A0\u5B9A\u65F6\u4EFB\u52A1\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20211216184720.png" alt="img" loading="lazy"></p></li><li><p>\u62C9\u53D6\u811A\u672C\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20211216185453.png" alt="img" loading="lazy"></p><ul><li><p>\u5B9A\u65F6\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u79D2 \u5206 \u65F6 \u5929 \u6708 \u5468
\u4F8B\u5982\uFF1A\u5982\u679C\u9700\u8981\u6BCF\u592912:23:45\u6267\u884C\u4E00\u6B21\uFF0C\u5219\u5E94\u8BE5\u8FD9\u4E48\u914D\u7F6E\uFF1A45 23 12 * * *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u62C9\u53D6\u547D\u4EE4\u8BF4\u660E\uFF1A</p><ul><li><p>\u62C9\u4E00\u4E2A\u5E93\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ql repo <span class="token operator">&lt;</span>repourl<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>blacklist<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>dependence<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u62C9\u4E00\u4E2A\u811A\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ql raw &lt;fileurl&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u62C9\u5E93\u51FA\u73B0\u7684\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u51FA\u73B0\u8FD9\u79CD\u9519\u8BEF\uFF1A
Cannot find module &#39;xxxx&#39;
\u4F9D\u8D56\u4E0D\u5B8C\u6574\uFF0C\u89E3\u51B3\u65B9\u6CD5\uFF1A
docker exec -it qinglong(\u5BB9\u5668\u540D\u79F0) bash
cd /ql/scripts/
pnpm install &#39;xxxx&#39;
npm install &#39;xxxx&#39;
\u8FD9\u4E24\u4E2A\u5B89\u88C5\u547D\u4EE4\u90FD\u53EF\u4EE5\u7528
2.\u51FA\u73B0\u8FD9\u79CD\u9519\u8BEF\uFF1A
Cannot find module &#39;./xxxx&#39;
\u90A3\u5C31\u5F88\u6709\u662F\u62C9\u5E93\u547D\u4EE4\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u68C0\u67E5\u6216\u590D\u5236\u5B8C\u6574\u7684\u62C9\u5E93\u547D\u4EE4\u3002
\u90E8\u5206\u9700\u8981\u7684\u4F9D\u8D56\uFF1A\u81EA\u884C\u5B89\u88C5
&quot;npm install -g npm&quot;
&quot;pip3 install requests&quot;
&quot;pip3 install pytz&quot;
&quot;npm install -g download&quot;
&quot;pnpm install jsdom&quot;
&quot;apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev &amp;&amp; cd scripts &amp;&amp; npm install canvas png-js md5 date-fns axios crypto-js tslib ts-md5 @types/node --build-from-source&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u83B7\u53D6\u4EAC\u4E1CCookie\uFF1A</p><ul><li><p>\u7535\u8111\u6253\u5F00<code>m.jd.com</code>\u7F51\u7AD9\uFF0C\u767B\u5F55\uFF0C\u83B7\u53D6Cookie\uFF08\u53EA\u9700\u8981<code>pt_key</code>\u4E0E<code>pt_pin</code>\uFF09</p></li><li><p><strong>\u6CE8\uFF1A\u53D8\u91CF\u540D\u4E00\u5B9A\u8981\u4E3A<code>JD_COOKIE</code></strong></p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20211216190257.png" alt="img" loading="lazy"></p></li></ul></li><li><p>\u5F00\u542F\u4EAC\u4E1C\u6E38\u620F\u4EFB\u52A1\uFF08\u7B2C\u4E00\u6B21\u9700\u624B\u52A8\u5F00\u542F\uFF09\uFF1A</p><ul><li>\u4EAC\u4E1CAPP\uFF1A <ul><li>\u6447\u94B1\u6811\uFF1A\u4EAC\u4E1CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684\u2192\u4E2D\u95F4\u66F4\u591A\u5DE5\u5177</li><li>\u4E1C\u4E1C\u840C\u5BA0\uFF1A\u4EAC\u4E1CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li><li>\u5BA0\u6C6A\u6C6A\uFF1A\u4EAC\u4E1CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li><li>\u4E1C\u4E1C\u519C\u573A\uFF1A\u4EAC\u4E1CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li></ul></li><li>\u4EAC\u559CAPP\uFF1A <ul><li>\u4EAC\u559C\u5DE5\u5382\uFF1A\u60CA\u559CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li><li>\u4EAC\u559C\u7267\u573A\uFF1A\u60CA\u559CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li><li>\u4EAC\u559C\u8D22\u5BCC\u5C9B\uFF1A\u60CA\u559CAPP\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li></ul></li><li>\u4EAC\u4E1C\u6781\u901F\u7248\uFF1A <ul><li>\u53D1\u8D22\u5927\u8D62\u5BB6\uFF1A\u4EAC\u4E1C\u6781\u901F\u7248\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li><li>\u6C6A\u6C6A\u4E50\u56ED\uFF1A\u4EAC\u4E1C\u6781\u901F\u7248\u2192\u53F3\u4E0B\u89D2\u6211\u7684</li></ul></li></ul></li></ul><hr><h2 id="\u9752\u9F99\u9762\u677F\u6279\u91CF\u90E8\u7F72\u4F9D\u8D56\u5E93" tabindex="-1"><a class="header-anchor" href="#\u9752\u9F99\u9762\u677F\u6279\u91CF\u90E8\u7F72\u4F9D\u8D56\u5E93" aria-hidden="true">#</a> \u9752\u9F99\u9762\u677F\u6279\u91CF\u90E8\u7F72\u4F9D\u8D56\u5E93</h2><ul><li><p>\u65B9\u6CD5\u4E00\uFF1A</p><ul><li><p>\u8FDB\u5165\u9752\u9F99\u7684\u5BB9\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it qinglong_web_1 <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4E00\u952E\u5B89\u88C5\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -fsSL https://ghproxy.com/https://raw.githubusercontent.com/shufflewzc/QLDependency/main/Shell/QLOneKeyDependency.sh | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>\u65B9\u6CD5\u4E8C\uFF1A</p><ul><li><p>\u70B9\u51FB\u5DE6\u4FA7\u83DC\u5355<code>\u4F9D\u8D56\u7BA1\u7406</code>\uFF08IP/dependence\uFF09\uFF0C\u518D\u5728\u53F3\u4E0A\u89D2\u70B9\u51FB<code>\u6DFB\u52A0\u4F9D\u8D56</code></p><ul><li>\u6CE8\uFF1A\u4F9D\u8D56\u7C7B\u578B\u5206\u4E09\u79CD\uFF0C\u5206\u522B\u662F\uFF1ANodeJs\u3001Python3\u3001Linux</li></ul><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/20220413101255.png" alt="img" loading="lazy"></p></li><li><p>NodeJs\u7C7B\u578B\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>crypto-js
prettytable
dotenv
jsdom
date-fns
tough-cookie
tslib
ws@7.4.3
ts-md5
jsdom -g
jieba
fs
form-data
json5
global-agent
png-js
@types/node
require
typescript
js-base64
axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Python3\u7C7B\u578B\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>requests
canvas  
ping3
jieba
aiohttp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Linux\u7C7B\u578B\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bizCode
bizMsg  
lxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,9);function s(a,d){return l}var o=e(n,[["render",s],["__file","\u4EAC\u4E1C\u811A\u672C.html.vue"]]);export{o as default};
