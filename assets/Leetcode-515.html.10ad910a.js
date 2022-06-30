import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as o,a as n,d as c,F as i,b as s,e as l}from"./app.c2a8fb5e.js";const u={},r=n("h3",{id:"\u539F\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u539F\u9898","aria-hidden":"true"},"#"),s(" \u539F\u9898")],-1),d=n("h3",{id:"\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u94FE\u63A5","aria-hidden":"true"},"#"),s(" \u94FE\u63A5")],-1),k={href:"https://leetcode.cn/problems/find-largest-value-in-each-tree-row/",target:"_blank",rel:"noopener noreferrer"},v=s("Leetcode-515"),m=l(`<h3 id="\u9898\u610F" tabindex="-1"><a class="header-anchor" href="#\u9898\u610F" aria-hidden="true">#</a> \u9898\u610F</h3><ul><li><p>\u7ED9\u5B9A\u4E00\u68F5\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9 <code>root</code> \uFF0C\u8BF7\u627E\u51FA\u8BE5\u4E8C\u53C9\u6811\u4E2D\u6BCF\u4E00\u5C42\u7684\u6700\u5927\u503C\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/largest_e1.jpg" alt="" loading="lazy"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: root = [1,3,2,5,3,null,9]
\u8F93\u51FA: [1,3,9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A</h3><ul><li>\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570\u7684\u8303\u56F4\u662F <code>[0,104]</code></li><li>-2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1</li></ul><h2 id="\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a> \u89E3\u51B3</h2><h3 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h3><p>\u9898\u76EE\u8981\u6C42\u6BCF\u4E00\u5C42\u7684\u6700\u5927\u503C\uFF0C\u56E0\u6B64\u9700\u8981\u5BF9\u6811\u7684\u6BCF\u4E00\u5C42\u8FDB\u884C\u904D\u5386\uFF0C\u6240\u4EE5\u91C7\u7528 <strong>BFS</strong> \u8FDB\u884C\u904D\u5386\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u904D\u5386\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4E00\u6B21\u904D\u5386\u4E00\u5C42\uFF0C\u5426\u5219\u65E0\u6CD5\u6C42\u89E3\u3002</p><h3 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     TreeNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     TreeNode(int val, TreeNode left, TreeNode right) <span class="token punctuation">{</span>
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> <span class="token function">largestValues</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TreeNode</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// \u5904\u7406root\u4E3Anull\u7684\u60C5\u51B5</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>

        queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>queue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MIN_VALUE<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">TreeNode</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h3><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220624130646712.png" alt="image-20220624130646712" loading="lazy"></p>`,11);function h(b,g){const a=t("ExternalLinkIcon");return p(),o(i,null,[r,d,n("p",null,[n("a",k,[v,c(a)])]),m],64)}var x=e(u,[["render",h],["__file","Leetcode-515.html.vue"]]);export{x as default};