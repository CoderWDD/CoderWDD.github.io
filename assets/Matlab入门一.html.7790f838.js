import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{e as i}from"./app.0adb8866.js";const a={},e=i(`<h2 id="\u53D8\u91CF\u4E0E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u4E0E\u51FD\u6570" aria-hidden="true">#</a> \u53D8\u91CF\u4E0E\u51FD\u6570</h2><h3 id="matlab\u4E2D\u53D8\u91CF\u7684\u547D\u540D\u89C4\u5219\u662F" tabindex="-1"><a class="header-anchor" href="#matlab\u4E2D\u53D8\u91CF\u7684\u547D\u540D\u89C4\u5219\u662F" aria-hidden="true">#</a> MATLAB\u4E2D\u53D8\u91CF\u7684\u547D\u540D\u89C4\u5219\u662F</h3><ul><li>\u53D8\u91CF\u540D\u5FC5\u987B\u662F\u4E0D\u542B\u7A7A\u683C\u7684\u5355\u4E2A\u8BCD</li><li>\u53D8\u91CF\u540D\u533A\u5206\u5927\u5C0F\u5199</li><li>\u53D8\u91CF\u540D\u6700\u591A\u4E0D\u8D85\u8FC719\u4E2A\u5B57\u7B26</li><li>\u53D8\u91CF\u540D\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u4E4B\u540E\u53EF\u4EE5\u662F\u4EFB\u610F\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u6216\u8005\u4E0B\u5212\u7EBF\uFF0C\u53D8\u91CF\u4E2D\u4E0D\u5141\u8BB8\u4F7F\u7528\u6807\u70B9\u7B26\u53F7</li></ul><h3 id="m\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#m\u6587\u4EF6" aria-hidden="true">#</a> M\u6587\u4EF6</h3><p>MATLAB\u7684\u5185\u90E8\u51FD\u6570\u7684\u4E8B\u975E\u5E38\u6709\u9650\u7684\uFF0C\u6709\u65F6\u4E3A\u4E86\u7814\u7A76\u67D0\u4E00\u4E2A\u51FD\u6570\u7684\u5404\u79CD\u5F62\u6001\uFF0C\u9700\u8981\u4E3AMATLAB\u5B9A\u4E49\u65B0\u51FD\u6570\uFF0C\u4E3A\u6B64\u5FC5\u987B\u7F16\u5199\u51FD\u6570\u6587\u4EF6\uFF0C\u51FD\u6570\u6587\u4EF6\u662F\u6587\u4EF6\u540D\u540E\u7F00\u4E3AM\u7684\u6587\u4EF6\uFF0C\u8FD9\u7C7B\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u5FC5\u987B\u662F\u4EE5\u7279\u6B8A\u5B57\u7B26 function \u5F00\u59CB\uFF0C\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-matlab ext-matlab line-numbers-mode"><pre class="language-matlab"><code><span class="token keyword">function</span> \u56E0\u53D8\u91CF\u540D <span class="token operator">=</span> \u51FD\u6570\u540D\uFF08\u81EA\u53D8\u91CF\u540D\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u51FD\u6570\u503C\u7684\u83B7\u5F97\u5FC5\u987B\u901A\u8FC7\u5177\u4F53\u7684\u8FD0\u7B97\u5B9E\u73B0\uFF0C\u5E76\u8D4B\u503C\u7ED9\u56E0\u53D8\u91CF</p><p>M\u6587\u4EF6\u5EFA\u7ACB\u65B9\u6CD5\uFF1A</p><ul><li>\u5728MATLAB\u4E2D\uFF0C\u70B9\uFF1AFile-&gt;New-&gt;M-file</li><li>\u5728\u7F16\u8F91\u7A97\u53E3\u4E2D\u8F93\u5165\u7A0B\u5E8F\u5185\u5BB9</li><li>\u70B9\uFF1AFile -&gt; Save\uFF0C\u5B58\u76D8\uFF0CM\u6587\u4EF6\u540D\u5FC5\u987B\u4E0E\u51FD\u6570\u540D\u4FDD\u6301\u4E00\u81F4</li></ul><p>Matlab\u7684\u5E94\u7528\u7A0B\u5E8F\u4E5F\u4EE5M\u6587\u4EF6\u4FDD\u5B58</p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><h3 id="\u521B\u5EFA\u7B80\u5355\u7684\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7B80\u5355\u7684\u6570\u7EC4" aria-hidden="true">#</a> \u521B\u5EFA\u7B80\u5355\u7684\u6570\u7EC4</h3><ul><li>x = [a b c d e f] \u521B\u5EFA\u5305\u542B\u6307\u5B9A\u5143\u7D20\u7684\u884C\u5411\u91CF</li><li>x = first: last \u521B\u5EFA\u4ECE first \u5F00\u59CB\uFF0C\u52A0 1 \u8BA1\u6570\uFF0C\u5230 last \u7ED3\u675F\u7684\u884C\u5411\u91CF</li><li>x = first: incremen: last \u521B\u5EFA\u4ECE first \u5F00\u59CB\uFF0C\u52A0 incremen \u8BA1\u6570\uFF0C\u5230 last \u7ED3\u675F\u7684\u884C\u5411\u91CF</li><li>x = linspace(first, last, n) \u521B\u5EFA\u4ECE first \u5F00\u59CB\u5230 last \u7ED3\u675F\uFF0C\u6709 n \u4E2A\u5143\u7D20\u7684\u884C\u5411\u91CF</li><li>x = logspace(first, last, n) \u521B\u5EFA\u4ECE first \u5F00\u59CB\u5230 last \u7ED3\u675F\uFF0C\u6709n\u4E2A\u5143\u7D20\u7684\u5BF9\u6570\u5206\u5272\u884C\u5411\u91CF</li></ul><h3 id="\u6570\u7EC4\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8FD0\u7B97" aria-hidden="true">#</a> \u6570\u7EC4\u8FD0\u7B97</h3><h2 id="\u77E9\u9635\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u77E9\u9635\u8FD0\u7B97" aria-hidden="true">#</a> \u77E9\u9635\u8FD0\u7B97</h2><h3 id="\u77E9\u9635\u5982\u4F55\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u77E9\u9635\u5982\u4F55\u8FD0\u7B97" aria-hidden="true">#</a> \u77E9\u9635\u5982\u4F55\u8FD0\u7B97</h3><ul><li>\u77E9\u9635\u53EA\u6709\u4E09\u5219\u8FD0\u7B97\uFF1A\u52A0\u3001\u51CF\u3001\u4E58\uFF08\u65E0\u9664\u6CD5\uFF09</li></ul><h3 id="\u77E9\u9635\u8FD0\u7B97\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u77E9\u9635\u8FD0\u7B97\u7684\u6761\u4EF6" aria-hidden="true">#</a> \u77E9\u9635\u8FD0\u7B97\u7684\u6761\u4EF6</h3><ul><li>\u52A0\u3001\u51CF\u8FD0\u7B97\u4E2D\uFF0C\u8FD0\u7B97\u7684\u77E9\u9635\u5FC5\u987B\u4E3A<strong>\u540C\u578B\u77E9\u9635</strong>\uFF1A\u5373\u884C\u6570\u548C\u5217\u6570\u5206\u522B\u76F8\u7B49</li><li>\u4E58\u6CD5\u8FD0\u7B97\uFF1A <ul><li>\u6570\u4E58</li><li>\u77E9\u9635\u4E58\uFF1A\u5185\u6807\u786E\u5B9A\u80FD\u5426\u76F8\u4E58\uFF0C\u5916\u6807\u786E\u5B9A\u8FD0\u7B97\u7ED3\u679C\u7684\u77E9\u9635\u7684\u578B\uFF0C<strong>eg\uFF1AA<sub>2x3</sub> x B<sub>3x4</sub> = C<sub>2x4</sub></strong></li></ul></li></ul><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><h3 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h3><ul><li>Matlab \u4E2D\u7684\u53D8\u91CF\uFF0C\u5982\u679C\u6CA1\u6709\u547D\u540D\uFF0C\u5219\u9ED8\u8BA4\u4E3A ans</li><li>\u5982\u679C\u5728\u547D\u4EE4\u540E\u52A0 <code>;</code> \uFF0C\u5219\u4E0D\u4F1A\u5C06\u7ED3\u679C\u6253\u5370\u5728\u547D\u4EE4\u884C\u7A97\u53E3</li><li>\u6DFB\u52A0\u6CE8\u91CA\u7684\u65B9\u6CD5\u4E3A <code>%</code></li><li>clc \u4E3A\u6E05\u9664\u5DE5\u4F5C\u533A\uFF0Cclear \u4E3A\u6E05\u9664\u53D8\u91CF</li><li>Matlab \u5BF9\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u4E14\u53D8\u91CF\u540D\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC731\u4E2A\u5B57\u7B26</li><li>\u7279\u6B8A\u53D8\u91CF\u540D\uFF1A <ul><li>ans</li><li>pi\uFF1A\u5706\u5468\u7387</li><li>inf\uFF1A\u6B63\u65E0\u7A77\uFF0C\u52A0\u8D1F\u53F7\u5373\u4E3A\u8D1F\u65E0\u7A77</li><li>NaN\uFF1A\u4E0D\u5B9A\u5F0F\uFF08not a number \uFF09</li></ul></li><li>\u77E9\u9635/\u6570\u7EC4\u5B9A\u4E49\uFF1A\u4EE5 <code>;</code> \u6362\u884C <ul><li>[1,2,3]</li><li>[1 2 3]</li></ul></li><li>Matlab \u4E2D\u6570\u7EC4<strong>\u4E0B\u6807\u4ECE 1 \u5F00\u59CB</strong></li></ul><h3 id="\u5E38\u89C1\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u51FD\u6570" aria-hidden="true">#</a> \u5E38\u89C1\u51FD\u6570</h3><ul><li><p>\u6C42\u548C\u51FD\u6570\uFF1A<code>sum()</code></p><ul><li>\u8C03\u7528\uFF1A<code>sum(A)</code></li><li>\u4F5C\u7528\uFF1A\u6C42\u6570\u7EC4 A \u4E2D\u7684\u6240\u6709\u5143\u7D20\u4E4B\u548C</li><li>\u6CE8\u610F\uFF1A<strong>\u5982\u679C A \u662F\u4E00\u7EF4\u7684\uFF0C\u5219\u6C42\u7684\u662F\u6574\u884C\u7684\u548C\uFF0C\u5982\u679C\u662F\u4E8C\u7EF4\u7684\uFF0C\u5219\u6C42\u7684\u662F\u6BCF\u4E00\u5217\u7684\u548C</strong></li></ul></li><li><p>\u6C42\u524D n \u9879\u7684\u548C\uFF1A<code>cumsum()</code></p><ul><li>\u8C03\u7528\uFF1A<code>cumsum(A)</code></li><li>\u4F5C\u7528\uFF1A\u6C42\u6570\u7EC4 A \u7684\u524D n \u9879\u4E4B\u548C</li><li>\u6CE8\u610F\uFF1A\u5982\u679C A \u662F\u4E8C\u7EF4\u7684\uFF0C\u5219\u6C42\u7684\u662F\u524D n \u5217\u7684\u548C</li></ul></li><li><p>\u6C42\u957F\u5EA6\u51FD\u6570\uFF1A<code>length()</code></p><ul><li>\u8C03\u7528\uFF1A<code>length(A)</code></li><li>\u4F5C\u7528\uFF1A\u6C42 <code>max(\u884C\u6570,\u5217\u6570)</code></li></ul></li><li><p>\u6C42\u77E9\u9635\u957F\u5BBD\u6570\uFF1A<code>size()</code></p><ul><li>\u8C03\u7528\uFF1A<code>[m,n] = size(A)</code></li><li>\u4F5C\u7528\uFF1A\u6C42\u77E9\u9635\u884C\u6570\u548C\u5217\u6570\uFF0C\u5206\u522B\u8FD4\u56DE m \u548C n</li></ul></li><li><p>\u6C42\u5E73\u5747\u503C\uFF1A<code>mean()</code></p><ul><li>\u8C03\u7528\uFF1A<code>mean(A)</code></li><li>\u4F5C\u7528\uFF1A\u6C42\u77E9\u9635 A \u7684\u5E73\u5747\u503C</li></ul></li><li><p>\u6C42\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\uFF1A<code>max()\u3001min()</code></p><ul><li>\u8C03\u7528\uFF1A<code>max(A)\u3001min(A)</code></li><li>\u4F5C\u7528\uFF1A\u8FD4\u56DE\u4E00\u4E2A\u884C\u5411\u91CF\uFF0C\u5411\u91CF\u7684\u7B2C i \u4E2A\u5143\u7D20\u662F\u77E9\u9635 A \u7684\u7B2C i \u5217\u4E0A\u7684\u6700\u5927/\u5C0F\u503C</li></ul></li><li><p>\u8BFB\u53D6 Excel \u8868\u683C\u5185\u5BB9\uFF1A<code>xlsread()</code></p><ul><li>\u8C03\u7528\uFF1A<code>xlsread(path)</code></li><li>\u4F5C\u7528\uFF1A\u628A path \u8DEF\u5F84\u7684 excel \u8868\u683C\u8F7D\u5165\uFF0C\u5E76\u5C06\u5176\u4E2D\u6570\u636E\u8BFB\u51FA\u8FD4\u56DE</li></ul></li></ul><h2 id="matlab-\u7ED8\u56FE" tabindex="-1"><a class="header-anchor" href="#matlab-\u7ED8\u56FE" aria-hidden="true">#</a> Matlab \u7ED8\u56FE</h2><h3 id="\u7ED8\u5236\u4E8C\u7EF4\u56FE\u5F62" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u4E8C\u7EF4\u56FE\u5F62" aria-hidden="true">#</a> \u7ED8\u5236\u4E8C\u7EF4\u56FE\u5F62</h3><ul><li><p><code>plot()</code>\u51FD\u6570</p><ul><li><p>\u8C03\u7528\uFF1A</p><ul><li><p><code>plot(y,&#39;\u9009\u9879&#39;)</code>\uFF1A\u82E5 y \u4E3A\u5B9E\u6570\u6570\u7EC4\u6216\u5411\u91CF\uFF0C\u5219\u4EE5 y \u7684\u4E0B\u6807\u5E8F\u53F7\u4E3A\u6A2A\u5750\u6807\uFF0C\u4EE5 y \u5BF9\u5E94\u5143\u7D20\u503C\u4F5C\u4E3A\u7EB5\u5750\u6807\u7ED8\u5236\u4E8C\u7EF4\u56FE\u5F62\uFF0C\u82E5 y \u4E3A\u5B9E\u6570\u77E9\u9635\uFF0C\u5219\u6309\u6BCF\u5217\u4E2D\u5143\u7D20\u7684\u4E0B\u6807\u4F5C\u4E3A\u6A2A\u5750\u6807\uFF0C\u5143\u7D20\u7684\u503C\u4E3A\u7EB5\u5750\u6807\u7ED8\u5236\u591A\u6761\u8FDE\u7EED\u66F2\u7EBF\uFF0C\u66F2\u7EBF\u6761\u6570\u5373\u4E3A\u77E9\u9635\u5217\u6570\u3002</p></li><li><p><code>plot(x,y,&#39;\u9009\u9879&#39;)</code>\uFF1A</p><ul><li><p>\u5C5E\u6027\u8BBE\u7F6E\uFF1A\u82E5 x,y \u4E3A\u5411\u91CF\uFF0C\u5219\u4EE5\u5BF9\u5E94\u5143\u7D20\u4E3A\u6A2A\u3001\u7EB5\u5750\u6807\u7ED8\u5236\u4E8C\u7EF4\u56FE\u5F62\u3002</p></li><li><p>\u56FE\u5F62\u5C5E\u6027\u8BBE\u7F6E\uFF1A\u4E3A\u4E86\u4F7F\u56FE\u5F62\u66F4\u5177\u8868\u73B0\u529B\uFF0C\u66F4\u52A0\u6E05\u6670\u6613\u8BFB\uFF0C\u5E38\u5E38\u9700\u8981\u5BF9\u56FE\u5F62\u7684\u82E5\u5E72\u5C5E\u6027\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u5176\u4E2D\u6700\u91CD\u8981\u7684\u662F\u8BBE\u7F6E\u66F2\u7EBF\u7684\u7C7B\u578B\u3001\u989C\u8272\u548C\u6570\u636E\u70B9\u6807\u8BB0</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220615142422533.png" alt="image-20220615142422533" loading="lazy"></p></li></ul></li></ul></li></ul></li></ul><h2 id="matlab\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#matlab\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> Matlab\u8FD0\u7B97\u7B26</h2><h3 id="\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6BD4\u8F83\u8FD0\u7B97\u7B26</h3><ul><li>\u76F8\u7B49\uFF1A<code>==</code></li><li>\u4E0D\u7B49\uFF1A<code>~=</code></li><li>\u5927\u4E8E\uFF1A<code>&gt;</code></li><li>\u5927\u4E8E\u7B49\u4E8E\uFF1A<code>&gt;=</code></li><li>\u5C0F\u4E8E\uFF1A<code>&lt;</code></li><li>\u5C0F\u4E8E\u7B49\u4E8E\uFF1A<code>&lt;=</code></li></ul><h3 id="\u903B\u8F91\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u903B\u8F91\u8FD0\u7B97\u7B26</h3><ul><li>\u4E0E\uFF1A<code>&amp;&amp;</code></li><li>\u6216\uFF1A<code>||</code></li><li>\u975E\uFF1A<code>~</code></li></ul>`,32);function d(r,c){return e}var o=l(a,[["render",d],["__file","Matlab\u5165\u95E8\u4E00.html.vue"]]);export{o as default};
