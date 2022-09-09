import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,d as o,b as s,e as l,r as c}from"./app.006ed22f.js";const i={},u=n("h2",{id:"\u9898\u76EE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE","aria-hidden":"true"},"#"),s(" \u9898\u76EE")],-1),r={href:"https://leetcode.cn/problems/add-one-row-to-tree/",target:"_blank",rel:"noopener noreferrer"},d=s("\u94FE\u63A5"),k=l(`<h3 id="\u9898\u610F" tabindex="-1"><a class="header-anchor" href="#\u9898\u610F" aria-hidden="true">#</a> \u9898\u610F</h3><ul><li><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\u7684\u6839 root \u548C\u4E24\u4E2A\u6574\u6570 val \u548C depth \uFF0C\u5728\u7ED9\u5B9A\u7684\u6DF1\u5EA6 depth \u5904\u6DFB\u52A0\u4E00\u4E2A\u503C\u4E3A val \u7684\u8282\u70B9\u884C\u3002</p></li><li><p>\u6CE8\u610F\uFF0C\u6839\u8282\u70B9 root \u4F4D\u4E8E\u6DF1\u5EA6 1 \u3002</p></li><li><p>\u52A0\u6CD5\u89C4\u5219\u5982\u4E0B:</p><ul><li>\u7ED9\u5B9A\u6574\u6570 depth\uFF0C\u5BF9\u4E8E\u6DF1\u5EA6\u4E3A depth - 1 \u7684\u6BCF\u4E2A\u975E\u7A7A\u6811\u8282\u70B9 cur \uFF0C\u521B\u5EFA\u4E24\u4E2A\u503C\u4E3A val \u7684\u6811\u8282\u70B9\u4F5C\u4E3A cur \u7684\u5DE6\u5B50\u6811\u6839\u548C\u53F3\u5B50\u6811\u6839\u3002</li><li>cur \u539F\u6765\u7684\u5DE6\u5B50\u6811\u5E94\u8BE5\u662F\u65B0\u7684\u5DE6\u5B50\u6811\u6839\u7684\u5DE6\u5B50\u6811\u3002</li><li>cur \u539F\u6765\u7684\u53F3\u5B50\u6811\u5E94\u8BE5\u662F\u65B0\u7684\u53F3\u5B50\u6811\u6839\u7684\u53F3\u5B50\u6811\u3002</li><li>\u5982\u679C depth == 1 \u610F\u5473\u7740 depth - 1 \u6839\u672C\u6CA1\u6709\u6DF1\u5EA6\uFF0C\u90A3\u4E48\u521B\u5EFA\u4E00\u4E2A\u6811\u8282\u70B9\uFF0C\u503C val \u4F5C\u4E3A\u6574\u4E2A\u539F\u59CB\u6811\u7684\u65B0\u6839\uFF0C\u800C\u539F\u59CB\u6811\u5C31\u662F\u65B0\u6839\u7684\u5DE6\u5B50\u6811\u3002</li></ul></li></ul><h3 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A</h3><ul><li>\u8282\u70B9\u6570\u5728 [1, 104] \u8303\u56F4\u5185</li><li>\u6811\u7684\u6DF1\u5EA6\u5728 [1, 104]\u8303\u56F4\u5185</li><li>-100 &lt;= Node.val &lt;= 100</li><li>-10^5 &lt;= val &lt;= 10^5</li><li>1 &lt;= depth &lt;= the depth of tree + 1</li></ul><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><ul><li><p>\u793A\u4F8B\u4E00\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220805130507618.png" alt="image-20220805130507618" loading="lazy"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: root = [4,2,6,3,1,5], val = 1, depth = 2
\u8F93\u51FA: [4,1,1,2,null,null,6,3,1,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u793A\u4F8B\u4E8C\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220805130553642.png" alt="image-20220805130553642" loading="lazy"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: root = [4,2,null,3,1], val = 1, depth = 3
\u8F93\u51FA:  [4,2,null,1,1,3,null,null,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><ul><li>\u56E0\u4E3A\u662F\u8981\u5C06\u6570\u636E\u76F4\u63A5\u63D2\u5165\u5230\u4E8C\u53C9\u6811\u7684\u67D0\u4E00\u5C42\u4E2D\u53BB\uFF0C\u6240\u4EE5\u5F88\u5BB9\u6613\u60F3\u5230\u5E94\u8BE5\u7528 BFS \u7684\u601D\u8DEF\u6765\u904D\u5386\u4E8C\u53C9\u6811</li><li>\u53C8\u56E0\u4E3A\u6211\u4EEC\u6539\u5C06\u6570\u63D2\u5165\u7B2C <code>i</code> \u5C42\u65F6\uFF0C\u6240\u4EE5\u9700\u8981\u6539\u53D8\u5176\u7B2C <code>i - 1</code> \u5C42\u7684\u7236\u8282\u70B9\u7684\u6307\u9488\u6307\u5411\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5224\u65AD\u5F53\u524D\u904D\u5386\u7684\u5C42\u662F\u5426\u662F\u7B2C <code>i - 1</code> \u5C42\uFF0C\u4ECE\u800C\u51B3\u5B9A\u662F\u5426\u8981\u63D2\u5165</li><li>\u6700\u540E\u8FD8\u9700\u8981\u7279\u5224\u4E00\u4E0B\u5F80\u7B2C\u4E00\u5C42\u91CC\u63D2\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u5C42\u662F\u6CA1\u6709\u7236\u8282\u70B9\u7684\uFF0C\u6240\u4EE5\u4E0D\u9002\u5E94\u4E0A\u9762\u7684\u601D\u8DEF</li></ul><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">addOneRow</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token keyword">int</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span>root<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> temp <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt <span class="token operator">==</span> depth <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">TreeNode</span> left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span>temp<span class="token punctuation">.</span>left<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">TreeNode</span> right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>temp<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    temp<span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
                    temp<span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function m(v,h){const a=c("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[d,o(a)])]),k])}var g=e(i,[["render",m],["__file","Leetcode-623.html.vue"]]);export{g as default};