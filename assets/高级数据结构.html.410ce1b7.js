import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.5e47de8d.js";const p={},e=t(`<h2 id="\u5806\u548C\u4F18\u5148\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5806\u548C\u4F18\u5148\u961F\u5217" aria-hidden="true">#</a> \u5806\u548C\u4F18\u5148\u961F\u5217</h2><h3 id="\u4E00\u68F5\u6811\u8981\u6210\u4E3A\u5927\u6839\u5806\u7684\u4E24\u4E2A\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E00\u68F5\u6811\u8981\u6210\u4E3A\u5927\u6839\u5806\u7684\u4E24\u4E2A\u6761\u4EF6" aria-hidden="true">#</a> \u4E00\u68F5\u6811\u8981\u6210\u4E3A\u5927\u6839\u5806\u7684\u4E24\u4E2A\u6761\u4EF6</h3><ul><li>\u7ED3\u70B9\u6309\u987A\u5E8F\u4ECE\u5DE6\u5230\u53F3\u7D27\u6328\u7740\u4F9D\u6B21\u6392\u5217</li><li>\u53CC\u4EB2\u7ED3\u70B9\u7684\u503C\u5927\u4E8E\u6240\u6709\u5B50\u7ED3\u70B9\u7684\u503C</li></ul><h3 id="\u8868\u793A\u5806\u7684\u6570\u7EC4a\u5305\u542B\u4E24\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u8868\u793A\u5806\u7684\u6570\u7EC4a\u5305\u542B\u4E24\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> \u8868\u793A\u5806\u7684\u6570\u7EC4A\u5305\u542B\u4E24\u4E2A\u5C5E\u6027</h3><ul><li>A.length\uFF1A\u6570\u7EC4\u5143\u7D20\u7684\u4E2A\u6570</li><li>A.heapsize\uFF1A\u6709\u591A\u5C11\u4E2A\u5806\u5143\u7D20\u5B58\u50A8\u5728\u8BE5\u6570\u7EC4\u4E2D</li></ul><p>\u7ED3\u70B9\u7684\u9AD8\u5EA6\u8868\u793A\u7ED3\u70B9\u8DDD\u79BB\u6811\u53F6\u7684\u4F4D\u7F6E</p><h3 id="\u5806\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u5806\u7684\u7279\u6027" aria-hidden="true">#</a> \u5806\u7684\u7279\u6027</h3><ul><li>\u542B\u6709n\u4E2A\u5143\u7D20\u7684\u5806\u7684\u9AD8\u5EA6\u4E3AO(logn)</li><li>\u5728\u5927\u6839\u5806\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u7ED3\u70B9\u90FD\u6EE1\u8DB3\u5927\u6839\u5806\u7684\u6982\u5FF5\uFF0C\u5373\u53C8\u5927\u6839\u5806\u5206\u89E3\u51FA\u6765\u7684\u5B50\u6811\u4E5F\u6EE1\u8DB3\u5927\u6839\u5806\u7684\u6982\u5FF5</li><li>\u7528\u6570\u7EC4\u5B58\u50A8\u7B2Cn\u4E2A\u5143\u7D20\u7684\u5806\u7684\u65F6\u5019\uFF0C\u53F6\u5B50\u7ED3\u70B9\u7684\u4E0B\u6807\u5206\u522B\u662F[n/2]+1\uFF0C[n/2]+2\uFF0C...\uFF0Cn</li></ul><h3 id="\u7EF4\u62A4\u5927\u6839\u5806-max-heapify-a-i" tabindex="-1"><a class="header-anchor" href="#\u7EF4\u62A4\u5927\u6839\u5806-max-heapify-a-i" aria-hidden="true">#</a> \u7EF4\u62A4\u5927\u6839\u5806\uFF08Max-Heapify(A,i)\uFF09</h3><div class="language-\u4F2A\u4EE3\u7801 ext-\u4F2A\u4EE3\u7801 line-numbers-mode"><pre class="language-\u4F2A\u4EE3\u7801"><code>l &lt;- 2i;
r &lt;- 2i + 1
if l &lt;= A.heapsize and A[l] &gt; A[i] then
    largest &lt;- l
else
    largest &lt;- i
if r &lt;= A.heapsize and A[r] &gt; A[largest] then
	largest &lt;- r
if largest != i then
	A[i] &lt;-&gt; A[largest]
	Max-Heapify(A,largest)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A\uFF1AO(logn)</li></ul><h3 id="\u5EFA\u5927\u6839\u5806-build-max-heap-a" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u5927\u6839\u5806-build-max-heap-a" aria-hidden="true">#</a> \u5EFA\u5927\u6839\u5806\uFF08Build-Max-Heap(A)\uFF09</h3><div class="language-\u4F2A\u4EE3\u7801 ext-\u4F2A\u4EE3\u7801 line-numbers-mode"><pre class="language-\u4F2A\u4EE3\u7801"><code>A.heapsize &lt;- A.length
for i &lt;- [A.length/2] downto 1 do
	Max-Heapify(A,i)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)</p><h3 id="\u5806\u6392\u5E8F\u7B97\u6CD5-heapsort" tabindex="-1"><a class="header-anchor" href="#\u5806\u6392\u5E8F\u7B97\u6CD5-heapsort" aria-hidden="true">#</a> \u5806\u6392\u5E8F\u7B97\u6CD5\uFF08HeapSort\uFF09</h3><div class="language-\u4F2A\u4EE3\u7801 ext-\u4F2A\u4EE3\u7801 line-numbers-mode"><pre class="language-\u4F2A\u4EE3\u7801"><code>Input : An array A[1...n] of n elements
Output : Array A sorted on nondecreasing order

Build-Max-Heap(A)
for i &lt;- A.length downto 2 do
	A[1] &lt;-&gt; A[i]
	A.heapsize &lt;- A.heapsize - 1
	Max-Heapify(A,1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(nlogn)</li></ul><h3 id="\u57FA\u4E8E\u5927\u6839\u5806\u5B9E\u73B0\u4F18\u5148\u961F\u5217-extract-max-a" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u5927\u6839\u5806\u5B9E\u73B0\u4F18\u5148\u961F\u5217-extract-max-a" aria-hidden="true">#</a> \u57FA\u4E8E\u5927\u6839\u5806\u5B9E\u73B0\u4F18\u5148\u961F\u5217\uFF08Extract-Max(A)\uFF09</h3><div class="language-\u4F2A\u4EE3\u7801 ext-\u4F2A\u4EE3\u7801 line-numbers-mode"><pre class="language-\u4F2A\u4EE3\u7801"><code>max &lt;- A[1]
A[1] &lt;- A[A.heapsize]
A.heapsize = A.heapsize - 1
Max-Heapify(A,1)
return max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="increase-key-a-i-k" tabindex="-1"><a class="header-anchor" href="#increase-key-a-i-k" aria-hidden="true">#</a> Increase-Key(A,i,k)</h3><div class="language-\u4F2A\u4EE3\u7801 ext-\u4F2A\u4EE3\u7801 line-numbers-mode"><pre class="language-\u4F2A\u4EE3\u7801"><code>A[i] &lt;- k
while i &gt; 1 and A[i] &gt; A[i/2] do
	A[i] &lt;-&gt; A[i/2]
	i &lt;- i/2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insert-a-x" tabindex="-1"><a class="header-anchor" href="#insert-a-x" aria-hidden="true">#</a> Insert(A,x)</h3><div class="language-\u4F2A\u4EE3\u7801 ext-\u4F2A\u4EE3\u7801 line-numbers-mode"><pre class="language-\u4F2A\u4EE3\u7801"><code>A.heapsize &lt;- A.heapsize + 1
A[A.heapsize] &lt;- \u221E
Increase-Key(A,A.heapsize,x)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5806\u548C\u4F18\u5148\u961F\u5217\u7684\u7ED3\u5408" tabindex="-1"><a class="header-anchor" href="#\u5806\u548C\u4F18\u5148\u961F\u5217\u7684\u7ED3\u5408" aria-hidden="true">#</a> \u5806\u548C\u4F18\u5148\u961F\u5217\u7684\u7ED3\u5408</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Heap</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> heapsize<span class="token punctuation">;</span>
    <span class="token keyword">int</span> data<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>A<span class="token punctuation">;</span>

<span class="token keyword">int</span> largest <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">//\u7EF4\u62A4\u5927\u6839\u5806</span>
<span class="token keyword">void</span> <span class="token function">Max_Heapify</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>i<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> A<span class="token punctuation">.</span>heapsize <span class="token operator">&amp;&amp;</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>l<span class="token punctuation">]</span> <span class="token operator">&gt;</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        largest <span class="token operator">=</span> l<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        largest <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>r <span class="token operator">&lt;=</span> A<span class="token punctuation">.</span>heapsize <span class="token operator">&amp;&amp;</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">&gt;</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        largest <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>largest <span class="token operator">!=</span> i<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>largest<span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>largest<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token function">Max_Heapify</span><span class="token punctuation">(</span>largest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5EFA\u5927\u6839\u5806</span>
<span class="token keyword">void</span> <span class="token function">build_max_heap</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    A<span class="token punctuation">.</span>heapsize <span class="token operator">=</span> A<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> A<span class="token punctuation">.</span>length<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">Max_Heapify</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5806\u6392\u5E8F</span>
<span class="token keyword">void</span> <span class="token function">HeapSort</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">build_max_heap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> A<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>heapsize <span class="token operator">=</span> A<span class="token punctuation">.</span>heapsize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token function">Max_Heapify</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u57FA\u4E8E\u5927\u6839\u5806\u5B9E\u73B0\u4F18\u5148\u961F\u5217</span>
<span class="token keyword">int</span> <span class="token function">Extract_Max</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    A<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>A<span class="token punctuation">.</span>heapsize<span class="token punctuation">]</span><span class="token punctuation">;</span>
    A<span class="token punctuation">.</span>heapsize <span class="token operator">=</span> A<span class="token punctuation">.</span>heapsize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">Max_Heapify</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Increase_Key</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> k<span class="token punctuation">)</span><span class="token punctuation">{</span>
    A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        i <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
    A<span class="token punctuation">.</span>heapsize <span class="token operator">=</span> A<span class="token punctuation">.</span>heapsize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>A<span class="token punctuation">.</span>heapsize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0xffffffff</span><span class="token punctuation">;</span>
    <span class="token function">Increase_Key</span><span class="token punctuation">(</span>A<span class="token punctuation">.</span>heapsize<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>A<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> A<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">build_max_heap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> A<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d  &quot;</span><span class="token punctuation">,</span>A<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">//\u5806\u6392\u5E8F</span>
<span class="token comment">//    HeapSort();</span>
<span class="token comment">//    for(int i = A.length; i &gt; 0; i--){</span>
<span class="token comment">//        printf(&quot;%d  &quot;,A.data[i]);</span>
<span class="token comment">//    }</span>

<span class="token comment">//\u8FD4\u56DE\u4F18\u5148\u961F\u5217\u4E2D\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u5143\u7D20</span>
<span class="token comment">//    int max = Extract_Max();</span>
<span class="token comment">//    printf(&quot;%d\\n&quot;,max);</span>
    
<span class="token comment">//\u5C06\u4F18\u5148\u961F\u5217\u4E2D\u7684\u7B2C9\u4F4D\u7684\u4F18\u5148\u7EA7\u63D0\u9AD8\u5230100</span>
<span class="token comment">//    Increase_Key(9, 100);</span>
<span class="token comment">//    for(int i = 1; i &lt; A.heapsize + 1; i++){</span>
<span class="token comment">//        printf(&quot;%d  &quot;,A.data[i]);</span>
<span class="token comment">//    }</span>
    
<span class="token comment">//\u5C06\u5143\u7D2068\u63D2\u5165\u7531\u5927\u6839\u5806\u5B9E\u73B0\u7684\u4F18\u5148\u961F\u5217\u4E2D</span>
<span class="token comment">//    Insert(68);</span>
<span class="token comment">//    for(int i = 1; i &lt; A.heapsize + 1; i++){</span>
<span class="token comment">//        printf(&quot;%d  &quot;,A.data[i]);</span>
<span class="token comment">//    }</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u9884\u671F\u8F93\u5165\uFF1A10</span>
<span class="token comment">//        49 38 65 87 13 27 76 90 12</span>
<span class="token comment">//\u5EFA\u7ACB\u7684\u521D\u59CB\u5806\u987A\u5E8F\u4E3A\uFF1A97 90 65 76 49 13 27 49 38 12</span>
<span class="token comment">//\u6267\u884C\u5806\u6392\u5E8F\u540E\u8F93\u51FA\u7684\u7ED3\u679C\u4E3A\uFF1A97 90 76 65 49 49 38 27 13 12</span>
<span class="token comment">//\u7528\u5927\u6839\u5806\u5B9E\u73B0\u4F18\u5148\u961F\u5217\uFF0C\u8FD4\u56DE\u4F18\u5148\u961F\u5217\u4E2D\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u5143\u7D20\u4E3A\uFF1A97</span>
<span class="token comment">//\u5C06\u4F18\u5148\u961F\u5217\u4E2D\u7684\u7B2C\u4E5D\u4F4D\u7684\u4F18\u5148\u7EA7\u63D0\u9AD8\u5230100\u540E\u904D\u5386\u5927\u6839\u5806\u7684\u7ED3\u679C\u4E3A\uFF1A100 97 65 90 49 13 27 49 76 12</span>
<span class="token comment">//\u5C06\u5143\u7D2068\u63D2\u5165\u7531\u5927\u6839\u5806\u5B9E\u73B0\u7684\u4F18\u5148\u961F\u5217\u540E\u904D\u5386\u5927\u6839\u5806\u7684\u7ED3\u679C\u4E3A\uFF1A97  90  65  76  68  13  27  49  38  12  49</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),i=[e];function o(c,l){return s(),a("div",null,i)}var d=n(p,[["render",o],["__file","\u9AD8\u7EA7\u6570\u636E\u7ED3\u6784.html.vue"]]);export{d as default};
