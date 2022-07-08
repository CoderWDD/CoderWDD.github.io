import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c as p,a as n,d as c,F as l,b as s,e as i}from"./app.6e098039.js";const d={},u=n("h2",{id:"\u9898\u76EE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9898\u76EE","aria-hidden":"true"},"#"),s(" \u9898\u76EE")],-1),r=n("h3",{id:"\u94FE\u63A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u94FE\u63A5","aria-hidden":"true"},"#"),s(" \u94FE\u63A5")],-1),k={href:"https://leetcode.cn/problems/my-calendar-i/",target:"_blank",rel:"noopener noreferrer"},v=s("Leetcode-729 \u6211\u7684\u65E5\u7A0B\u5B89\u6392\u8868\u2160"),m=i(`<h3 id="\u9898\u610F" tabindex="-1"><a class="header-anchor" href="#\u9898\u610F" aria-hidden="true">#</a> \u9898\u610F</h3><ul><li><p>\u5B9E\u73B0\u4E00\u4E2A <code>MyCalendar</code> \u7C7B\u6765\u5B58\u653E\u4F60\u7684\u65E5\u7A0B\u5B89\u6392\u3002\u5982\u679C\u8981\u6DFB\u52A0\u7684\u65E5\u7A0B\u5B89\u6392\u4E0D\u4F1A\u9020\u6210 <strong>\u91CD\u590D\u9884\u8BA2</strong> \uFF0C\u5219\u53EF\u4EE5\u5B58\u50A8\u8FD9\u4E2A\u65B0\u7684\u65E5\u7A0B\u5B89\u6392\u3002</p></li><li><p>\u5F53\u4E24\u4E2A\u65E5\u7A0B\u5B89\u6392\u6709\u4E00\u4E9B\u65F6\u95F4\u4E0A\u7684\u4EA4\u53C9\u65F6\uFF08\u4F8B\u5982\u4E24\u4E2A\u65E5\u7A0B\u5B89\u6392\u90FD\u5728\u540C\u4E00\u65F6\u95F4\u5185\uFF09\uFF0C\u5C31\u4F1A\u4EA7\u751F <strong>\u91CD\u590D\u9884\u8BA2</strong> \u3002</p></li><li><p>\u65E5\u7A0B\u53EF\u4EE5\u7528\u4E00\u5BF9\u6574\u6570 <code>start</code> \u548C <code>end</code> \u8868\u793A\uFF0C\u8FD9\u91CC\u7684\u65F6\u95F4\u662F\u534A\u5F00\u533A\u95F4\uFF0C\u5373 <code>[start, end)</code>, \u5B9E\u6570 <code>x</code> \u7684\u8303\u56F4\u4E3A\uFF0C <code>start &lt;= x &lt; end</code> \u3002</p></li><li><p>\u5B9E\u73B0 <code>MyCalendar</code> \u7C7B\uFF1A</p><ul><li><p><code>MyCalendar()</code> \u521D\u59CB\u5316\u65E5\u5386\u5BF9\u8C61\u3002</p></li><li><p><code>boolean book(int start, int end)</code> \u5982\u679C\u53EF\u4EE5\u5C06\u65E5\u7A0B\u5B89\u6392\u6210\u529F\u6DFB\u52A0\u5230\u65E5\u5386\u4E2D\u800C\u4E0D\u4F1A\u5BFC\u81F4\u91CD\u590D\u9884\u8BA2\uFF0C\u8FD4\u56DE <code>true</code> \u3002\u5426\u5219\uFF0C\u8FD4\u56DE <code>false</code> \u5E76\u4E14\u4E0D\u8981\u5C06\u8BE5\u65E5\u7A0B\u5B89\u6392\u6DFB\u52A0\u5230\u65E5\u5386\u4E2D\u3002</p></li></ul></li></ul><h3 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A</h3><ul><li><code>0 &lt;= start &lt; end &lt;= 109</code></li><li>\u6BCF\u4E2A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u8C03\u7528 <code>book</code> \u65B9\u6CD5\u7684\u6B21\u6570\u6700\u591A\u4E0D\u8D85\u8FC7 <code>1000</code> \u6B21</li></ul><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A
[&quot;MyCalendar&quot;, &quot;book&quot;, &quot;book&quot;, &quot;book&quot;]
[[], [10, 20], [15, 25], [20, 30]]
\u8F93\u51FA\uFF1A
[null, true, false, true]

\u89E3\u91CA\uFF1A
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False \uFF0C\u8FD9\u4E2A\u65E5\u7A0B\u5B89\u6392\u4E0D\u80FD\u6DFB\u52A0\u5230\u65E5\u5386\u4E2D\uFF0C\u56E0\u4E3A\u65F6\u95F4 15 \u5DF2\u7ECF\u88AB\u53E6\u4E00\u4E2A\u65E5\u7A0B\u5B89\u6392\u9884\u8BA2\u4E86\u3002
myCalendar.book(20, 30); // return True \uFF0C\u8FD9\u4E2A\u65E5\u7A0B\u5B89\u6392\u53EF\u4EE5\u6DFB\u52A0\u5230\u65E5\u5386\u4E2D\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u4E2A\u65E5\u7A0B\u5B89\u6392\u9884\u8BA2\u7684\u6BCF\u4E2A\u65F6\u95F4\u90FD\u5C0F\u4E8E 20 \uFF0C\u4E14\u4E0D\u5305\u542B\u65F6\u95F4 20 \u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><h3 id="\u66B4\u529B" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B" aria-hidden="true">#</a> \u66B4\u529B</h3><ul><li>\u4ECE <code>\u63D0\u793A</code> \u7684\u6570\u636E\u91CF\u6765\u770B\uFF0C\u672C\u9898\u5C31\u7B97\u662F\u66B4\u529B\u89E3\u51B3\uFF0C\u4E5F\u4E0D\u4F1A <code>TLE</code>\uFF0C\u56E0\u6B64\uFF0C\u6709\u4E86\u4EE5\u4E0B\u7684\u66B4\u529B\u6CD5</li><li>\u5C06\u5DF2\u7ECF\u5224\u65AD\u4E3A\u5408\u6CD5\u7684\u533A\u95F4\u653E\u5165 <code>List</code></li><li>\u6BCF\u6B21\u6709\u65B0\u7684\u533A\u95F4\u7684\u65F6\u5019\uFF0C\u5C31\u8DDF\u5DF2\u7ECF\u5728 <code>List</code> \u4E2D\u7684\u533A\u95F4\u5BF9\u6BD4</li><li>\u5982\u679C\u5408\u6CD5\uFF0C\u5C31\u52A0\u5165\u5230 <code>List</code> \uFF0C\u5426\u5219\u8FD4\u56DE <code>false</code></li></ul><h3 id="\u5E7F\u4E49\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#\u5E7F\u4E49\u76F8\u7B49" aria-hidden="true">#</a> \u5E7F\u4E49\u76F8\u7B49</h3><ul><li>\u56E0\u4E3A\u8981\u6C42 <code>\u533A\u95F4\u4E0D\u80FD\u6709\u91CD\u53E0</code>\uFF0C\u53EF\u4EE5\u5C06\u6574\u4E2A\u533A\u95F4\u770B\u51FA\u4E00\u4E2A\u6574\u4F53\uFF0C\u91C7\u7528 <code>Java</code> \u7684 <code>TreeSet</code>\uFF08\u4E3A\u4EC0\u4E48\u4E0D\u662F <code>HashSet</code>\uFF0C\u56E0\u4E3A <code>HashSet</code> \u4E0D\u80FD\u81EA\u5B9A\u4E49\u6BD4\u8F83\u5668\uFF09</li><li>\u81EA\u5B9A\u4E49 <code>TreeSet</code> \u7684\u6BD4\u8F83\u5668\uFF0C\u5F53\u533A\u95F4\u91CD\u53E0\u65F6\uFF0C\u8BA4\u4E3A\u4E24\u4E2A\u533A\u95F4\u76F8\u7B49</li><li>\u5F53\u6709\u65B0\u533A\u95F4\u7684\u65F6\u5019\uFF0C\u5C31\u76F4\u63A5\u5F80 <code>TreeSet</code> \u4E2D\u6DFB\u52A0\uFF0C\u5982\u679C\u6CA1\u6709\u91CD\u53E0\u5219\u6DFB\u52A0\u6210\u529F\uFF0C\u5426\u5219\u5931\u8D25</li></ul><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><h3 id="\u66B4\u529B-1" tabindex="-1"><a class="header-anchor" href="#\u66B4\u529B-1" aria-hidden="true">#</a> \u66B4\u529B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u66B4\u529B\u89E3\u6CD5</span>
<span class="token comment">// \u5C06\u5DF2\u7ECF\u5224\u65AD\u4E3A\u5408\u6CD5\u7684\u533A\u95F4\u653E\u5165List</span>
<span class="token comment">// \u6BCF\u6B21\u6709\u65B0\u7684\u533A\u95F4\u7684\u65F6\u5019\uFF0C\u5C31\u8DDF\u5DF2\u7ECF\u5728List\u4E2D\u7684\u533A\u95F4\u5BF9\u6BD4</span>
<span class="token comment">// \u5982\u679C\u5408\u6CD5\uFF0C\u5C31\u52A0\u5165\u5230List\uFF0C\u5426\u5219\u8FD4\u56DEfalse</span>
<span class="token keyword">class</span> <span class="token class-name">MyCalendar</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> calendar<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">MyCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        calendar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">book</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> e <span class="token operator">:</span> calendar<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> e<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> end <span class="token operator">&gt;</span> e<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        calendar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>start<span class="token punctuation">,</span>end<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="treeset-\u5DE7\u89E3" tabindex="-1"><a class="header-anchor" href="#treeset-\u5DE7\u89E3" aria-hidden="true">#</a> TreeSet \u5DE7\u89E3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// TreeSet\u5DE7\u89E3\uFF0C\u5229\u7528\u7684\u662F\u5E7F\u4E49\u76F8\u7B49\u7684\u6982\u5FF5\uFF0C\u5373\u81EA\u5B9A\u4E49TreeSet\u7684\u6BD4\u8F83\u5668\uFF0C\u5F53\u533A\u95F4\u91CD\u53E0\u65F6\uFF0C\u8BA4\u4E3A\u4E24\u4E2A\u533A\u95F4\u76F8\u7B49</span>
 <span class="token keyword">class</span> <span class="token class-name">MyCalendar</span> <span class="token punctuation">{</span>
    <span class="token class-name">TreeSet</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> treeSet<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">MyCalendar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        treeSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token comment">// \u5982\u679C\u65B0\u52A0\u5165\u7684\u533A\u95F4\u7684start\u6BD4\u5DF2\u7ECF\u52A0\u5165\u7684\u533A\u95F4\u4E2D\u7684end\u5927\uFF0C\u5219\u80AF\u5B9A\u662F\u5408\u6CD5\u7684</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">// \u65B0\u533A\u95F4\u7684start\u6BD4\u5DF2\u7ECF\u52A0\u5165\u7684\u533A\u95F4\u7684end\u5C0F\uFF0C\u5219\u53EF\u80FD\u4F1A\u91CD\u53E0</span>
            <span class="token comment">// \u6B64\u65F6\u5982\u679C\u65B0\u533A\u95F4\u7684end\u6BD4\u5DF2\u7ECF\u52A0\u5165\u7684\u533A\u95F4\u7684start\u5C0F\uFF0C\u5219\u4E5F\u662F\u5408\u6CD5\u7684</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5230\u8FD9\u91CC\u8BF4\u660E\u80AF\u5B9A\u6709\u91CD\u53E0</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">book</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> treeSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>start<span class="token punctuation">,</span>end<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function b(h,y){const a=t("ExternalLinkIcon");return o(),p(l,null,[u,r,n("p",null,[n("a",k,[v,c(a)])]),m],64)}var g=e(d,[["render",b],["__file","Leetcode-729.html.vue"]]);export{g as default};
