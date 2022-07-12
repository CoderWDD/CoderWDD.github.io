import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.b529e5a5.js";const t={},e=p(`<h2 id="\u5206\u6CBB\u7684\u4E00\u822C\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5206\u6CBB\u7684\u4E00\u822C\u7B56\u7565" aria-hidden="true">#</a> \u5206\u6CBB\u7684\u4E00\u822C\u7B56\u7565</h2><ul><li>\u5C06\u539F\u95EE\u9898\u53EF\u4EE5\u5212\u5206\u4E3A\u89C4\u6A21\u8F83\u5C0F\u7684\u5B50\u95EE\u9898\uFF1A <ul><li>\u5B50\u95EE\u9898\u4E0E\u539F\u95EE\u9898\u5177\u6709\u76F8\u540C\u7684\u6027\u8D28</li><li>\u5B50\u95EE\u9898\u7684\u6C42\u89E3\u6279\u6B21\u72EC\u7ACB</li><li>\u5212\u5206\u65F6\u5B50\u95EE\u9898\u7684\u89C4\u6A21\u5C3D\u53EF\u80FD\u5747\u8861</li><li>\u5F53\u5B50\u95EE\u9898\u89C4\u6A21\u8DB3\u591F\u5C0F\u65F6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6C42\u89E3</li></ul></li><li>\u5B50\u95EE\u9898\u7684\u89E3\u8FDB\u884C\u7EFC\u5408\u5F97\u5230\u539F\u95EE\u9898\u7684\u89E3</li><li><strong>\u7B97\u6CD5\u8BBE\u8BA1</strong>\u4E00\u822C\u91C7\u7528<strong>\u9012\u5F52</strong>\u7B97\u6CD5</li><li><strong>\u7B97\u6CD5\u5206\u6790</strong>\u91C7\u7528<strong>\u9012\u5F52\u8868\u8FBE\u5F0F</strong></li></ul><h2 id="\u9012\u5F52\u6811\u6C42\u89E3" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u6811\u6C42\u89E3" aria-hidden="true">#</a> \u9012\u5F52\u6811\u6C42\u89E3</h2><ul><li><p>\u5728\u9012\u5F52\u6811\u4E2D\uFF0C\u6BCF\u4E2A\u7ED3\u70B9\u8868\u793A\u4E00\u4E2A\u5B50\u95EE\u9898\u7684\u4EE3\u4EF7\uFF0C\u5B50\u95EE\u9898\u5BF9\u5E94\u67D0\u6B21\u9012\u5F52\u51FD\u6570\u8C03\u7528</p></li><li><p>\u6C42\u89E3\u6B65\u9AA4\uFF1A</p><ul><li>\u6811\u4E2D\u6BCF\u5C42\u4E2D\u7684\u4EE3\u4EF7\u6C42\u548C\uFF0C\u5F97\u5230\u6BCF\u5C42\u4EE3\u4EF7</li><li>\u5C06\u6240\u6709\u5C42\u7684\u4EE3\u4EF7\u6C42\u548C\uFF0C\u5F97\u5230\u6240\u6709\u5C42\u6B21\u9012\u5F52\u8C03\u7528\u7684\u603B\u4EE3\u4EF7</li></ul></li><li><p>\u793A\u4F8B\uFF1A</p><ul><li><p>\u6C42\u89E3\uFF1A$T(n)=3T(n/4)+O(n^2)$</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220617084913361.png" alt="image-20220617084913361"></p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220617084927688.png" alt="image-20220617084927688"></p></li></ul></li></ul><h2 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a> \u63D2\u5165\u6392\u5E8F</h2><h3 id="\u4F2A\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4F2A\u4EE3\u7801" aria-hidden="true">#</a> \u4F2A\u4EE3\u7801</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>\u8F93\u5165\uFF1An\u4E2A\u5143\u7D20\u7684\u6570\u7EC4A
\u8F93\u51FA\uFF1A\u6309\u975E\u964D\u5E8F\u6392\u5217\u7684\u6570\u7EC4A
<span class="token function">InsertSort</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>m<span class="token punctuation">)</span>
	<span class="token keyword">if</span> n \u2265 <span class="token number">2</span>
		<span class="token function">InsertSort</span><span class="token punctuation">(</span>A<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
		x \u2190 A<span class="token punctuation">[</span>n<span class="token punctuation">]</span>
		j \u2190 n <span class="token operator">-</span> <span class="token number">1</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token function">and</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
			A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> \u2190 A<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
			j \u2190 j <span class="token operator">-</span> <span class="token number">1</span>
		A<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> \u2190 x
	<span class="token keyword">return</span> A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u5EA6</h3><p>$$T(x)= \\begin{cases} 1 &amp; \\text{n=1}\\ T(n-1)+n-1&amp; \\text{n&gt;1} \\end{cases}$$</p><h2 id="\u5F52\u5E76\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5F52\u5E76\u6392\u5E8F" aria-hidden="true">#</a> \u5F52\u5E76\u6392\u5E8F</h2><h3 id="\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#\u601D\u60F3" aria-hidden="true">#</a> \u601D\u60F3</h3><ul><li>\u5206\u89E3 -&gt; \u89E3\u51B3 -&gt; \u5408\u5E76</li><li>\u5206\u89E3\uFF1A\u5C06\u5F85\u6392\u5E8F\u7684 n \u4E2A\u5143\u7D20\u7684\u6570\u7EC4\u5206\u89E3\u6210\u5404\u5177 $\\frac{n}{2}$ \u4E2A\u5143\u7D20\u7684\u4E24\u4E2A\u5B50\u6570\u7EC4</li><li>\u89E3\u51B3\uFF1A\u8C03\u7528\u5F52\u5E76\u6392\u5E8F\u7B97\u6CD5\u9012\u5F52\u5730\u6392\u5E8F\u4E24\u4E2A\u5B50\u6570\u7EC4</li><li>\u5408\u5E76\uFF1A\u5408\u5E76\u4E24\u4E2A\u5DF2\u6392\u5E8F\u7684\u5B50\u6570\u7EC4</li></ul><h3 id="\u4F2A\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u4F2A\u4EE3\u7801-1" aria-hidden="true">#</a> \u4F2A\u4EE3\u7801</h3><ul><li>\u9012\u5F52\u6392\u5E8F\uFF1A</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>\u8F93\u5165\uFF1A\u6570\u7EC4L<span class="token punctuation">[</span>p<span class="token punctuation">.</span>r<span class="token punctuation">]</span><span class="token punctuation">.</span>
\u8F93\u51FA\uFF1A\u6309\u7167\u9012\u589E\u987A\u5E8F\u6392\u597D\u5E8F\u7684\u6570\u7EC4L<span class="token punctuation">[</span>pr<span class="token punctuation">]</span>
<span class="token function">MergeSort</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
	<span class="token keyword">if</span> p <span class="token operator">&lt;</span> r then
        q \u2190 <span class="token punctuation">(</span>p <span class="token operator">+</span> r<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
        <span class="token function">MergeSort</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q<span class="token punctuation">)</span>
        <span class="token function">MergeSort</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>q <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>r<span class="token punctuation">)</span>
        <span class="token function">Merge</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
	<span class="token keyword">return</span> L<span class="token punctuation">[</span>p<span class="token punctuation">.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5408\u5E76\uFF1A</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">Merge</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
n1 \u2190 q <span class="token operator">-</span> p <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>n2 \u2190 r <span class="token operator">-</span> q
\u5C06L<span class="token punctuation">[</span>p<span class="token punctuation">.</span><span class="token punctuation">.</span>q<span class="token punctuation">]</span>\u590D\u5236\u5230A<span class="token punctuation">[</span><span class="token number">1.</span><span class="token punctuation">.</span>n1<span class="token punctuation">]</span>
\u5C06L<span class="token punctuation">[</span>q<span class="token operator">+</span><span class="token number">1.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span>\u590D\u5236\u5230B<span class="token punctuation">[</span><span class="token number">1.</span><span class="token punctuation">.</span>n2<span class="token punctuation">]</span>
i \u2190 <span class="token number">1</span><span class="token punctuation">,</span>j \u2190 <span class="token number">1</span><span class="token punctuation">,</span>k \u2190 p
<span class="token keyword">while</span> i \u2264 n1 and j <span class="token operator">&lt;</span>n2 <span class="token keyword">do</span>
    <span class="token keyword">if</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span> \u2264 B<span class="token punctuation">[</span>j<span class="token punctuation">]</span> then
        L<span class="token punctuation">[</span>k<span class="token punctuation">]</span>\u2190A<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        i \u2190 i <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">else</span> L<span class="token punctuation">[</span>k<span class="token punctuation">]</span> \u2190 B<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
    	j \u2190 j <span class="token operator">+</span> <span class="token number">1</span>
    k\u2190k<span class="token operator">+</span><span class="token number">1</span>
<span class="token keyword">if</span> i <span class="token operator">&lt;</span> n1 then \u5C06A<span class="token punctuation">[</span>i<span class="token punctuation">.</span><span class="token punctuation">.</span>n<span class="token punctuation">]</span>\u590D\u5236\u5230L<span class="token punctuation">[</span>k<span class="token punctuation">.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span>
<span class="token keyword">if</span> j <span class="token operator">&lt;</span> n2 then \u5C06B<span class="token punctuation">[</span>j<span class="token punctuation">.</span><span class="token punctuation">.</span>n2<span class="token punctuation">]</span>\u590D\u5236\u5230L<span class="token punctuation">[</span>k<span class="token punctuation">.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u590D\u6742\u5EA6-1" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6-1" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u5EA6</h3><p>$$O(nlogn)$$</p><h3 id="\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a> \u7A7A\u95F4\u590D\u6742\u5EA6</h3><p>$$O(n)$$</p><h2 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h2><h3 id="\u601D\u60F3-1" tabindex="-1"><a class="header-anchor" href="#\u601D\u60F3-1" aria-hidden="true">#</a> \u601D\u60F3</h3><ul><li><p>\u5206\u89E3\uFF1A</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>L<span class="token punctuation">[</span>p<span class="token punctuation">.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span>\u88AB\u5212\u5206\u6210\u4E24\u4E2A\uFF08\u53EF\u80FD\u4E3A\u7A7A\uFF09\u5B50\u6570\u7EC4L<span class="token punctuation">[</span>p<span class="token punctuation">.</span><span class="token punctuation">.</span>q<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>\u548CL<span class="token punctuation">[</span>q<span class="token operator">+</span><span class="token number">1.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span>\u4F7F\u5F97\uFF1A
	L<span class="token punctuation">[</span>p<span class="token punctuation">.</span><span class="token punctuation">.</span>q<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u5C0F\u4E8E\u7B49\u4E8EL<span class="token punctuation">[</span>q<span class="token punctuation">]</span>\uFF0C
	L<span class="token punctuation">[</span>q<span class="token punctuation">]</span>\u4E5F\u5C0F\u4E8E\u7B49\u4E8EL<span class="token punctuation">[</span>q<span class="token operator">+</span><span class="token number">1.</span><span class="token punctuation">.</span>r<span class="token punctuation">]</span>\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u89E3\u51B3\uFF1A\u4F7F\u7528\u5FEB\u901F\u6392\u5E8F\u7B97\u6CD5\u9012\u5F52\u5730\u6392\u5E8F\u4E24\u4E2A\u5B50\u6570\u7EC4</p></li></ul><h3 id="\u4F2A\u4EE3\u7801-2" tabindex="-1"><a class="header-anchor" href="#\u4F2A\u4EE3\u7801-2" aria-hidden="true">#</a> \u4F2A\u4EE3\u7801</h3><ul><li>\u5FEB\u901F\u6392\u5E8F\uFF1A <ul><li>\u521D\u59CB\u8C03\u7528\uFF1A<code>QuickSort(L,1,n)</code></li><li>\u7A7A\u95F4\u590D\u6742\u5EA6\uFF1A$O(n)$</li></ul></li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>\u8F93\u5165\uFF1A\u6570\u7EC4L<span class="token punctuation">[</span>p<span class="token punctuation">.</span>r<span class="token punctuation">]</span><span class="token punctuation">.</span>
\u8F93\u51FA\uFF1A\u6309\u7167\u9012\u589E\u987A\u5E8F\u6392\u597D\u5E8F\u7684\u6570\u7EC4L<span class="token punctuation">[</span>pr<span class="token punctuation">]</span>
<span class="token function">QuickSort</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
    <span class="token keyword">if</span> p <span class="token operator">&lt;</span> r then
        q \u2190 <span class="token function">Partition</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
        L<span class="token punctuation">[</span>p<span class="token punctuation">]</span> \u2190\u2192 L<span class="token punctuation">[</span>q<span class="token punctuation">]</span>
        <span class="token function">QuickSort</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>q <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">QuickSort</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>q <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>r<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Partition\uFF1A</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">Partition</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>p<span class="token punctuation">,</span>r<span class="token punctuation">)</span>
    x \u2190 L<span class="token punctuation">[</span>p<span class="token punctuation">]</span>
    i \u2190 p
    <span class="token number">1</span> \u2190 r <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">while</span> true <span class="token keyword">do</span>
        repeat j \u2190 j <span class="token operator">-</span> <span class="token number">1</span> until L<span class="token punctuation">[</span>j<span class="token punctuation">]</span> \u2264 x
        repeat i \u2190 i <span class="token operator">+</span> <span class="token number">1</span> until L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> x
        <span class="token keyword">if</span> i <span class="token operator">&lt;</span> j then L<span class="token punctuation">[</span>i<span class="token punctuation">]</span> \u2190\u2192 L<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> j
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u590D\u6742\u5EA6-2" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u5EA6-2" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u5EA6</h3><ul><li>\u6700\u574F\u65F6\u95F4\uFF1A$O(n^2)$</li><li>\u5E73\u5747\u65F6\u95F4\uFF1A$O(nlogn)$</li><li>\u6700\u597D\u65F6\u95F4\uFF1A$O(nlogn)$</li></ul><h3 id="\u7A7A\u95F4\u590D\u6742\u5EA6-1" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u95F4\u590D\u6742\u5EA6-1" aria-hidden="true">#</a> \u7A7A\u95F4\u590D\u6742\u5EA6</h3><ul><li>\u4E00\u822C\uFF1A$O(n)$</li><li>\u4F18\u5316\u540E\uFF1A$O(logn)$</li></ul><h2 id="\u5FEB\u901F\u9009\u62E9\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u9009\u62E9\u7B97\u6CD5" aria-hidden="true">#</a> \u5FEB\u901F\u9009\u62E9\u7B97\u6CD5</h2><h3 id="\u601D\u60F3-2" tabindex="-1"><a class="header-anchor" href="#\u601D\u60F3-2" aria-hidden="true">#</a> \u601D\u60F3</h3><ul><li>\u4EE5\u6570\u7EC4L\u7684\u67D0\u4E2A\u5143\u7D20 m \u4F5C\u4E3A\u6807\u51C6\uFF0C\u5C06L\u5212\u5206\u4E3A\u4E24\u4E2A\u5B50\u6570\u7EC4L<sub>1</sub>\u548CL<sub>2</sub>\uFF0C\u5176\u4E2D\uFF1AL<sub>1</sub>\u4E2D\u7684\u5143\u7D20\u6BD4m<em>\u5C0F\uFF0CL<sub>2</sub>\u4E2D\u7684\u5143\u7D20\u6BD4m</em>\u5927\u3002\u5219\u6709\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5\uFF1A <ul><li>|L| \u2265 k\uFF1A\u5219\u5728L<sub>1</sub>\u4E2D\u627E\u7B2Ck\u5C0F\u7684\u5B50\u95EE\u9898\u3002</li><li>|L|+1= k\uFF1A\u5219 m \u5C31\u662F\u6240\u8981\u627E\u7684\u7B2Ck\u5C0F\u7684\u5143\u7D20\u3002</li><li>|L|+1&lt; k\uFF1A\u5219\u5728L<sub>2</sub>\u4E2D\u627E\u7B2C k-L<sub>1</sub>-1 \u5C0F\u7684\u5B50\u95EE\u9898\u3002</li></ul></li></ul><h3 id="\u4F2A\u4EE3\u7801-3" tabindex="-1"><a class="header-anchor" href="#\u4F2A\u4EE3\u7801-3" aria-hidden="true">#</a> \u4F2A\u4EE3\u7801</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token function">Select</span><span class="token punctuation">(</span><span class="token punctuation">(</span>L<span class="token punctuation">,</span>k<span class="token punctuation">)</span>
    \u5C06L\u5212\u5206\u6210<span class="token number">5</span>\u4E2A\u4E00\u7EC4\uFF0C\u5171<span class="token punctuation">[</span>n<span class="token operator">/</span><span class="token number">5</span><span class="token punctuation">]</span>\u4E2A\u7EC4\uFF0C\u5E76\u5BF9\u6BCF\u7EC4\u5143\u7D20\u8FDB\u884C\u6392\u5E8F\uFF0C\u7136\u540E\u786E\u5B9A\u6BCF\u7EC4\u5143\u7D20\u7684\u4E2D\u4F4D\u6570\uFF0C\u628A\u8FD9\u4E9B\u4E2D\u4F4D\u6570\u653E\u5230\u96C6\u5408M\u4E2D
    m <span class="token operator">&lt;</span><span class="token operator">-</span> <span class="token function">Select</span><span class="token punctuation">(</span>M<span class="token punctuation">,</span><span class="token punctuation">[</span>M<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    \u2225\u9009M\u7684\u4E2D\u4F4D\u6570m<span class="token punctuation">,</span>\u5C06L\u4E2D\u7684\u5143\u7D20\u5212\u5206\u6210A<span class="token punctuation">,</span>B<span class="token punctuation">,</span>C<span class="token punctuation">,</span>D\u5C06A\u548CD\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u4E0Em\u6BD4\u8F83\uFF0C\u5C0F\u7684\u6784\u6210L1<span class="token punctuation">,</span>\u5927\u7684\u6784\u6210L2
    L1 <span class="token operator">&lt;</span><span class="token operator">-</span>L1 U C<span class="token punctuation">;</span>L2 <span class="token operator">&lt;</span><span class="token operator">-</span>L2 U B
    <span class="token keyword">if</span> <span class="token operator">|</span>L1<span class="token operator">|</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">=</span> k then <span class="token keyword">return</span> m
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token operator">|</span>L1<span class="token operator">|</span> <span class="token operator">&gt;=</span> k then <span class="token function">Select</span><span class="token punctuation">(</span>L1<span class="token punctuation">,</span>k<span class="token punctuation">)</span>
    <span class="token keyword">else</span> <span class="token function">Select</span><span class="token punctuation">(</span>L2<span class="token punctuation">,</span>k<span class="token operator">-</span><span class="token operator">|</span>L1<span class="token operator">|</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u65F6\u95F4\u590D\u6742\u6027" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u590D\u6742\u6027" aria-hidden="true">#</a> \u65F6\u95F4\u590D\u6742\u6027</h3><p>$O(n)$</p>`,40),o=[e];function c(i,l){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","\u5206\u6CBB\u7B97\u6CD5.html.vue"]]);export{k as default};
