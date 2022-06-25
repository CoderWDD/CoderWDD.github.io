import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as s}from"./app.ee7538c1.js";const n={},a=s(`<h2 id="flex-\u5E03\u5C40\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#flex-\u5E03\u5C40\u662F\u4EC0\u4E48" aria-hidden="true">#</a> Flex \u5E03\u5C40\u662F\u4EC0\u4E48</h2><ul><li><p>Flex \u662F Flexible Box \u7684\u7F29\u5199\uFF0C\u610F\u4E3A\u201C\u5F39\u6027\u5E03\u5C40\u201D\uFF0C\u7528\u6765\u4E3A\u76D2\u72B6\u6A21\u578B\u63D0\u4F9B\u6700\u5927\u7684\u7075\u6D3B\u6027</p></li><li><p>\u4EFB\u4F55\u4E00\u4E2A\u5BB9\u5668\u90FD\u53EF\u4EE5\u6307\u5B9A\u4E3A Flex \u5E03\u5C40</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u884C\u5185\u5143\u7D20\u4E5F\u53EF\u4EE5\u4F7F\u7528 Flex \u5E03\u5C40</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Webkit \u5185\u6838\u7684\u6D4F\u89C8\u5668\uFF0C\u5FC5\u987B\u52A0\u4E0A<code>-webkit</code> \u7684\u524D\u7F00</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">diaplay</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span>      <span class="token comment">/* Safari */</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8BBE\u7F6E\u4E3A Flex \u5E03\u5C40\u540E\uFF0C\u5B50\u5143\u7D20\u7684 float\u3001clear \u548C vertical-align \u5C5E\u6027\u5C06\u5931\u6548</p></li></ul><h2 id="flex-\u5E03\u5C40\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#flex-\u5E03\u5C40\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> Flex \u5E03\u5C40\u57FA\u672C\u6982\u5FF5</h2><p>\u91C7\u7528Flex\u5E03\u5C40\u7684\u5143\u7D20\uFF0C\u79F0\u4E3AFlex\u5BB9\u5668\uFF08flex container\uFF09\uFF0C\u7B80\u79F0\u201D\u5BB9\u5668\u201D\u3002\u5B83\u7684\u6240\u6709\u5B50\u5143\u7D20\u81EA\u52A8\u6210\u4E3A\u5BB9\u5668\u6210\u5458\uFF0C\u79F0\u4E3AFlex\u9879\u76EE\uFF08flex item\uFF09\uFF0C\u7B80\u79F0\u201D\u9879\u76EE\u201D\u3002</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220624184833209.png" alt="image-20220624184833209" loading="lazy"></p><ul><li>\u5BB9\u5668\u9ED8\u8BA4\u5B58\u5728\u4E24\u6839\u8F74\uFF1A\u6C34\u5E73\u7684\u4E3B\u8F74\uFF08main axis\uFF09\u548C\u5782\u76F4\u7684\u4EA4\u53C9\u8F74\uFF08cross axis\uFF09\u3002\u4E3B\u8F74\u7684\u5F00\u59CB\u4F4D\u7F6E\uFF08\u4E0E\u8FB9\u6846\u7684\u4EA4\u53C9\u70B9\uFF09\u53EB\u505Amain start\uFF0C\u7ED3\u675F\u4F4D\u7F6E\u53EB\u505Amain end\uFF1B\u4EA4\u53C9\u8F74\u7684\u5F00\u59CB\u4F4D\u7F6E\u53EB\u505Across start\uFF0C\u7ED3\u675F\u4F4D\u7F6E\u53EB\u505Across end\u3002</li><li>\u9879\u76EE\u9ED8\u8BA4\u6CBF\u4E3B\u8F74\u6392\u5217\u3002\u5355\u4E2A\u9879\u76EE\u5360\u636E\u7684\u4E3B\u8F74\u7A7A\u95F4\u53EB\u505Amain size\uFF0C\u5360\u636E\u7684\u4EA4\u53C9\u8F74\u7A7A\u95F4\u53EB\u505Across size\u3002</li></ul><h2 id="flex-\u5BB9\u5668\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#flex-\u5BB9\u5668\u7684\u5C5E\u6027" aria-hidden="true">#</a> Flex \u5BB9\u5668\u7684\u5C5E\u6027</h2><h3 id="flex-direction-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#flex-direction-\u5C5E\u6027" aria-hidden="true">#</a> flex-direction \u5C5E\u6027</h3><p>flex-direction \u5C5E\u6027\u51B3\u5B9A\u4E3B\u8F74\u7684\u65B9\u5411\uFF08\u5373\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

flex-ditrction \u5C5E\u6027\u56DB\u4E2A\u503C\u7684\u542B\u4E49\uFF1A

row\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF
row-reserve \uFF1A\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u53F3\u7AEF
colum \uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF
colum-reserve \uFF1A\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0B\u6CBF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220624185117615.png" alt="image-20220624185117615" loading="lazy"></p><hr><h3 id="flex-wrap-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#flex-wrap-\u5C5E\u6027" aria-hidden="true">#</a> flex-wrap \u5C5E\u6027</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9879\u76EE\u90FD\u6392\u5728\u4E00\u6761\u7EBF\uFF08\u8F74\u7EBF\uFF09\u4E0A\uFF0Cflex-wrap \u5C5E\u6027\u5B9A\u4E49\u5982\u679C\u4E00\u6761\u8F74\u7EBF\u6392\u4E0D\u4E0B\uFF0C\u8BE5\u5982\u4F55\u8FDB\u884C\u6362\u884C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>b fvn xzn. n.   b fvb.    hhjgghj.  hjghjghjghjgjhnghjgb.   fgdfgdfg.  bgvbvgfcbg.  hnhj.                            
																										\`. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function i(l,t){return a}var d=e(n,[["render",i],["__file","Flex\u5E03\u5C40.html.vue"]]);export{d as default};
