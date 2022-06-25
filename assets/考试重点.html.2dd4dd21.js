import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.028d872b.js";const l={},e=n(`<h2 id="\u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528</h2><ul><li><p>\u6784\u9020\u51FD\u6570\u662F\u5728\u521B\u5EFA\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528\u7ED9\u5B9A\u7684\u503C\u6765\u5C06\u5BF9\u8C61\u521D\u59CB\u5316</p></li><li><p>\u6784\u9020\u51FD\u6570\u53EF\u4EE5\u5E26\u53C2\u6570\u3001\u53EF\u4EE5\u91CD\u8F7D\uFF0C\u540C\u65F6\u6CA1\u6709\u8FD4\u56DE\u503C</p></li><li><p>\u6784\u9020\u51FD\u6570\u662F\u7C7B\u7684\u6210\u5458\u51FD\u6570\uFF0C\u7CFB\u7EDF\u7EA6\u5B9A\u6784\u9020\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\u3002\u6784\u9020\u51FD\u6570\u63D0\u4F9B\u4E86\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u4E00\u79CD\u7B80\u5355\u7684\u65B9\u6CD5\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std; 

class A{
    float  x,y;
public:
	A(float a,float b){  
 		x=a;   
 		y=b;
	}//\u6784\u9020\u51FD\u6570\uFF0C\u521D\u59CB\u5316\u5BF9\u8C61
	float Sum(void) {   
 		return  x+y;   
	}
	void Set(float a,float b) {    
  		x=a;	
  		y=b;
	}
	Print(void) {  
		cout&lt;&lt;&quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;endl;
	}
};
void main(void)
{	
 	A a1(2.0, 3.0);//\u5B9A\u4E49\u65F6\u8C03\u7528\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316
	A a2(1.0,2.0);
	a2.Set(10.0, 20.0);   //\u5229\u7528\u6210\u5458\u51FD\u6570\u91CD\u65B0\u4E3A\u5BF9\u8C61\u8D4B\u503C 
  	a1.Print();
	a2.Print();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u4F7F\u7528\u6784\u9020\u51FD\u6570\u4F7F\u9700\u8981\u6CE8\u610F\u7684\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6784\u9020\u51FD\u6570\u4F7F\u9700\u8981\u6CE8\u610F\u7684\u70B9" aria-hidden="true">#</a> \u4F7F\u7528\u6784\u9020\u51FD\u6570\u4F7F\u9700\u8981\u6CE8\u610F\u7684\u70B9</h3><ul><li><p>\u6784\u9020\u51FD\u6570\u7684\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\u3002\u6784\u9020\u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5B8C\u6210\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u4EE5\u53CA\u5176\u5B83\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\u3002</p></li><li><p>\u5728\u5B9A\u4E49\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u4E0D\u80FD\u6307\u5B9A\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\uFF0C\u4E5F\u4E0D\u80FD\u6307\u5B9A\u4E3Avoid\u7C7B\u578B\u3002</p></li><li><p>\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9A\u4E49\u82E5\u5E72\u4E2A\u6784\u9020\u51FD\u6570\u3002\u5F53\u5B9A\u4E49\u591A\u4E2A\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u5FC5\u987B\u6EE1\u8DB3\u51FD\u6570\u91CD\u8F7D\u7684\u539F\u5219\u3002</p></li><li><p>\u6784\u9020\u51FD\u6570\u53EF\u4EE5\u6307\u5B9A\u53C2\u6570\u7684\u7F3A\u7701\u503C</p></li><li><p>\u82E5\u5B9A\u4E49\u7684\u7C7B\u8981\u8BF4\u660E\u8BE5\u7C7B\u7684\u5BF9\u8C61\u65F6\uFF0C\u6784\u9020\u51FD\u6570\u5FC5\u987B\u662F\u516C\u6709\u7684\u6210\u5458\u51FD\u6570\u3002\u5982\u679C\u5B9A\u4E49\u7684\u7C7B\u4EC5\u7528\u4E8E\u6D3E\u751F\u5176\u5B83\u7C7B\u65F6\uFF0C\u5219\u53EF\u5C06\u6784\u9020\u51FD\u6570\u5B9A\u4E49\u4E3A\u4FDD\u62A4\u7684\u6210\u5458\u51FD\u6570\u3002</p></li><li><p>\u7531\u4E8E\u6784\u9020\u51FD\u6570\u5C5E\u4E8E\u7C7B\u7684\u6210\u5458\u51FD\u6570\uFF0C\u5B83\u5BF9\u79C1\u6709\u6570\u636E\u6210\u5458\u3001\u4FDD\u62A4\u7684\u6570\u636E\u6210\u5458\u548C\u516C\u6709\u7684\u6570\u636E\u6210\u5458\u5747\u80FD\u8FDB\u884C\u521D\u59CB\u5316\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
	A(float a, float b=10){  
    	x=a;   
    	y=b;  
  	} //\u5E26\u53C2\u6570\u7684\u6784\u9020\u51FD\u6570
	A()	{    
    	x=0;  
    	y=0;
  	} //\u4E0D\u5E26\u53C2\u6570\u7684\u6784\u9020\u51FD\u6570
	void  Print(void) {	
    	cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
  	}
};
void main(void)
{   
    A  a1, a2(20.0), a3(3.0,  7.0);
    a1.Print(); 
    a2.Print();
    a3.Print();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u9700\u8981\u6709\u4E0E\u4E4B\u76F8\u5BF9\u5E94\u7684\u6784\u9020\u51FD\u6570\uFF0C\u82E5\u6784\u9020\u51FD\u6570\u4E0D\u88AB\u663E\u5F0F\u5B9A\u4E49\uFF0C\u5219\u7CFB\u7EDF\u4F1A\u5E2E\u6211\u4EEC\u8865\u4E0A\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF08\u4E0D\u4F1A\u51FA\u73B0\u5728\u4EE3\u7801\u5757\u4E2D\uFF09\uFF0C\u5373\u4E3A\u5BF9\u8C61\u5F00\u8F9F\u4E86\u7A7A\u95F4\uFF0C\u4F46\u662F\u6CA1\u6709\u521D\u59CB\u5316\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float  x,y;
public:
	A(){}	 
	void  Print(void) {	
    cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
  }
};

\u82E5\u662F\u5982\u6B64\u5B9A\u4E49\u7684\u6784\u9020\u51FD\u6570\uFF0C\u90A3\u4E48\u5728\u5B9A\u4E49\u5BF9\u8C61\u7684\u65F6\u5019\u53EA\u80FD\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A
  
  A a1,a2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u5BF9\u8C61\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u5BF9\u8C61\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570</h3><ul><li><p>\u5BF9\u5C40\u90E8\u5BF9\u8C61\uFF0C\u9759\u6001\u5BF9\u8C61\uFF0C\u5168\u5C40\u5BF9\u8C61\u7684\u521D\u59CB\u5316</p></li><li><p>\u5BF9\u4E8E\u5C40\u90E8\u5BF9\u8C61\uFF0C\u6BCF\u6B21\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u90FD\u8981\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u5BF9\u4E8E\u9759\u6001\u5BF9\u8C61\uFF0C\u662F\u5728\u9996\u6B21\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u8C03\u7528\u6784\u9020\u51FD\u6570\u7684\uFF0C\u4E14\u7531\u4E8E\u5BF9\u8C61\u4E00\u76F4\u5B58\u5728\uFF0C\u53EA\u8C03\u7528\u4E00\u6B21\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u5BF9\u4E8E\u5168\u5C40\u5BF9\u8C61\uFF0C\u662F\u5728main\u51FD\u6570\u6267\u884C\u4E4B\u524D\u8C03\u7528\u6784\u9020\u51FD\u6570\u7684\u3002</p><p>\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
   A(float a, float b){
       x=a;
       y=b;
       cout&lt;&lt;&quot;\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61\\n&quot;;
   }
   A(){	
       x=0;  
       y=0;  
       cout&lt;&lt;&quot;\u521D\u59CB\u5316\u9759\u6001\u5C40\u90E8\u5BF9\u8C61\\n&quot;;
   }
   A(float  a){	
       x=a;  
       y=0;  
       cout&lt;&lt;&quot;\u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61\\n&quot;; 
   }
   void  Print(void){  
       cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
   }
};
A a0(10
     0.0);//\u5B9A\u4E49\u5168\u5C40\u5BF9\u8C61
void f(void)
{  
    cout&lt;&lt;&quot; \u8FDB\u5165f()\u51FD\u6570\\n&quot;;
    A a2(1,2);
    static  A  a3;  //\u521D\u59CB\u5316\u5C40\u90E8\u9759\u6001\u5BF9\u8C61 
}
void main(void)
{    
    cout&lt;&lt;&quot;\u8FDB\u5165main\u51FD\u6570\\n&quot;;
    A  a1(3.0,  7.0);//\u5B9A\u4E49\u5C40\u90E8\u81EA\u52A8\u5BF9\u8C61
    f();    
    f();   
}

\u8BE5\u4EE3\u7801\u8FD0\u884C\u7684\u6D41\u7A0B\u4E3A\uFF1A
    \u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61-&gt;\u8FDB\u5165main\u51FD\u6570-&gt;\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61-&gt;\u8FDB\u5165f()\u51FD\u6570-\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61-&gt;\u521D\u59CB\u5316\u5C40\u90E8\u9759\u6001\u53D8\u91CF-&gt;\u8FDB\u5165f()\u51FD\u6570-&gt;\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u51FD\u6570" aria-hidden="true">#</a> \u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u51FD\u6570</h3><ul><li><p>\u5982\u679C\u6784\u9020\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u6216\u8005\u6784\u9020\u51FD\u6570\u7684\u6240\u6709\u53C2\u6570\u90FD\u6709\u9ED8\u8BA4\u503C\uFF0C\u5C31\u53EF\u4EE5\u79F0\u5176\u4E3A\u7F3A\u7701\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u7701\u7684\u6784\u9020\u51FD\u6570\u5E76\u4E0D\u5BF9\u6240\u4EA7\u751F\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u8D4B\u521D\u503C\uFF1B\u5373\u65B0\u4EA7\u751F\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u7684\u503C\u662F\u4E0D\u786E\u5B9A\u7684</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
    float  x,y;
public:
    A(){}//\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7F16\u8BD1\u5668\u81EA\u52A8\u4EA7\u751F,\u53EF\u4EE5\u4E0D\u5199
    float Sum(void) {   
        return  x+y;  
    }
    void Set(float a,float b) {    
        x=a;	
        y=b;
    }
    void Print(void) {	
        cout&lt;&lt;&quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;endl;   
    }
};
void main(void)
{	
    A a1,a2;//\u4EA7\u751F\u5BF9\u8C61\u65F6\uFF0C\u81EA\u52A8\u8C03\u7528\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u8D4B\u503C
  	a1.Set (2.0,4.0);
  	cout&lt;&lt;&quot;a1:  &quot;;
    a1.Print ();
  	cout&lt;&lt;&quot;a1.sum=&quot;&lt;&lt;a1.Sum ()&lt;&lt;endl;
  	a2.Print();//\u6253\u5370\u968F\u673A\u503C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u5B9A\u4E49\u7C7B\u65F6\uFF0C\u53EA\u8981\u663E\u5F0F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u5219\u7F16\u8BD1\u5668\u5C31\u4E0D\u4EA7\u751F\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
	float x,y;
public:
    A(float a,float b)	{	
        x=a;	
        y=b;	
    }
    void Print(void){	
       cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;	
    }
};
void main(void)
{	
    A  a1;  //\u6B64\u884C\u9519\u8BEF\uFF01\u5E94\u4E3A\u4E0D\u5B58\u5728\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u4F9B\u5176\u8C03\u7528
	A  a2(3.0,30.0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6240\u6709\u7684\u5BF9\u8C61\u5728\u5B9A\u4E49\u65F6\uFF0C\u5FC5\u987B\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u5B58\u5728\u6CA1\u6709\u6784\u9020\u51FD\u6570\u7684\u5BF9\u8C61</p></li><li><p>\u5728\u7C7B\u4E2D\uFF0C\u82E5\u5B9A\u4E49\u4E86\u6CA1\u6709\u53C2\u6570\u7684\u6784\u9020\u51FD\u6570\uFF0C\u6216\u5404\u53C2\u6570\u5747\u6709\u7F3A\u7701\u503C\u7684\u6784\u9020\u51FD\u6570\u4E5F\u79F0\u4E3A\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u53EA\u80FD\u6709\u4E00\u4E2A\u3002</p></li><li><p>\u4EA7\u751F\u5BF9\u8C61\u65F6\uFF0C\u7CFB\u7EDF\u5FC5\u5B9A\u8981\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002\u6240\u4EE5\u4EFB\u4E00\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u5FC5\u987B\u552F\u4E00\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
    float x,y;
public:
    A(float a=10,float b=20){	
        x=a;
        y=b;	
    }
    A(){}
    void Print(void){	
        cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;	
    }
};
void main(void)
{	
    A  a1;   //\u6B64\u884C\u9519\u8BEF\uFF01\u4E24\u4E2A\u51FD\u6570\u5747\u4E3A\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF0C\u6545a1\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u4E0D\u552F\u4E00
	A  a2(3.0,30.0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u6784\u9020\u51FD\u6570\u4E0Enew\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u4E0Enew\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u4E0Enew\u8FD0\u7B97\u7B26</h3><ul><li><p>\u53EF\u4EE5\u4F7F\u7528new\u8FD0\u7B97\u7B26\u6765\u52A8\u6001\u5730\u5EFA\u7ACB\u5BF9\u8C61\u3002\u5EFA\u7ACB\u65F6\u8981\u81EA\u52A8\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u4EE5\u4FBF\u5B8C\u6210\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u3002\u6700\u540E\u8FD4\u56DE\u8FD9\u4E2A\u52A8\u6001\u5BF9\u8C61\u7684\u8D77\u59CB\u5730\u5740\u3002</p></li><li><p>\u7528new\u8FD0\u7B97\u7B26\u4EA7\u751F\u7684\u52A8\u6001\u5BF9\u8C61\uFF0C\u5728\u4E0D\u518D\u4F7F\u7528\u8FD9\u79CD\u5BF9\u8C61\u65F6\uFF0C\u5FC5\u987B\u7528delete\u8FD0\u7B97\u7B26\u6765\u91CA\u653E\u5BF9\u8C61\u6240\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4</p></li><li><p>\u7528new\u5EFA\u7ACB\u7C7B\u7684\u5BF9\u8C61\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u53C2\u6570\u521D\u59CB\u5316\u52A8\u6001\u7A7A\u95F4\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
	A(float a, float b)	{	
        x=a;
        y=b;	
    }
	A()	{	
        x=0;  
        y=0;	
    }
	void  Print(void)	{  
        cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
    }
};
void main(void)
{   
    A   *pa1,*pa2;
    pa1=new  A(3.0, 5.0);//\u7528new\u52A8\u6001\u5F00\u8F9F\u5BF9\u8C61\u7A7A\u95F4\uFF0C\u521D\u59CB\u5316
    pa2=new A;//\u7528new\u52A8\u6001\u5F00\u8F9F\u7A7A\u95F4\uFF0C\u8C03\u7528\u6784\u9020\u51FD\u6570\u521D\u59CB\u5316
    pa1-&gt;Print();
    pa2-&gt;Print();
    delete  pa1;  //\u7528delete\u91CA\u653E\u7A7A\u95F4
    delete  pa2; //\u7528delete\u91CA\u653E\u7A7A\u95F4
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362\u7684\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362\u7684\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u5B9E\u73B0\u7C7B\u578B\u8F6C\u6362\u7684\u6784\u9020\u51FD\u6570</h3><ul><li><p>\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\u53EF\u4EE5\u76F8\u4E92\u8D4B\u503C\uFF0C\u76F8\u5F53\u4E8E\u7C7B\u4E2D\u7684\u6570\u636E\u6210\u5458\u76F8\u4E92\u8D4B\u503C\uFF1B</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
	float x,y;
public:
    A(float a,float b) {
        x=a;
        y=b;
        cout&lt;&lt;&quot;\u8C03\u7528\u6784\u9020\u51FD\u6570\\n&quot;;
    }
    ~A()	 {	
        cout&lt;&lt;&quot;\u8C03\u7528\u6790\u6784\u51FD\u6570\\n&quot;;
    }
    void Print(void) {    
        cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;	
    }
};
void main(void)
{ 
    A  a1(1.0, 10.0); 
    a1.Print();
    a1=A(3.0 ,  30.0);  //\u4EA7\u751F\u4E34\u65F6\u5BF9\u8C61\uFF0C\u521D\u59CB\u5316\u5E76\u8D4B\u503C\u540E\u7ACB\u5373\u91CA\u653E
    a1.Print();
    cout&lt;&lt;&quot;\u9000\u51FA\u4E3B\u51FD\u6570\\n&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5982\u679C\u76F4\u63A5\u5C06\u6570\u636E\u8D4B\u7ED9\u5BF9\u8C61\uFF0C\u6240\u8D4B\u5165\u7684\u6570\u636E\u9700\u8981\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362\uFF0C\u8FD9\u79CD\u8F6C\u6362\u9700\u8981\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class B{
	float x;
public:   
    B(float a) {
        x=a;  
        cout&lt;&lt;&quot;\u8C03\u7528\u6784\u9020\u51FD\u6570\\n&quot;;
    }
    ~B(){  
        cout&lt;&lt;&quot;\u8C03\u7528\u6790\u6784\u51FD\u6570\\n&quot;;
    }
    void Print(void) {    
        cout&lt;&lt;x&lt;&lt;endl;  
    }
};
void main(void)
{
    B  b1(1.0) ;	
    b1.Print();
    B  b2=100;  //\u5355\u4E2A\u53C2\u6570\u53EF\u4EE5\u8FD9\u6837\u8D4B\u503C
    b2.Print();  
    b1=10;
    b1.Print();
    cout&lt;&lt;&quot;\u9000\u51FA\u4E3B\u51FD\u6570\\n&quot;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570</h3><ul><li><p>\u53EF\u4EE5\u5728\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\u7528\u53E6\u4E00\u4E2A\u5BF9\u8C61\u4E3A\u5176\u521D\u59CB\u5316\uFF0C\u5373\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u662F\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u8FD9\u79CD\u6784\u9020\u51FD\u6570\u5E38\u4E3A\u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570\u7684\u4E00\u822C\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>ClassName::ClassName(ClassName  &amp;&lt;\u53D8\u91CF\u540D&gt;)
{	
  ......//   \u51FD\u6570\u4F53\u5B8C\u6210\u5BF9\u5E94\u6570\u636E\u6210\u5458\u7684\u8D4B\u503C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
    A(float a=0, float b=0){
        x=a;  
        y=b;
    }
    A(A &amp;a){ //\u5F62\u53C2\u5FC5\u987B\u662F\u540C\u7C7B\u578B\u5BF9\u8C61\u7684\u5F15\u7528
        x=a.x;  
        y=a.y;
    }
};
void main(void)
{   
    A   a1(1.0,2.0);
    A   a2(a1); //\u5B9E\u53C2\u662F\u540C\u7C7B\u578B\u7684\u5BF9\u8C61
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7F16\u8BD1\u5668\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u9690\u542B\u7684\u5B8C\u6210\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570\uFF0C\u4F9D\u6B21\u5B8C\u6210\u7C7B\u4E2D\u5BF9\u5E94\u6570\u636E\u6210\u5458\u7684\u62F7\u8D1D\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>A::A(A &amp;a)   //\u9690\u542B\u7684\u5177\u6709\u62F7\u8D1D\u529F\u80FD\u7684\u6784\u9020\u51FD\u6570
{
    x=a.x;
    y=a.y;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
    A(float a=0, float b=0){
        x=a; 
        y=b;
        cout&lt;&lt;&quot;\u8C03\u7528\u4E86\u6784\u9020\u51FD\u6570\\n&quot;;
    }
    void  Print(void){
        cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
    }
    ~A() {
        cout&lt;&lt;&quot;\u8C03\u7528\u4E86\u6790\u6784\u51FD\u6570\\n&quot;;   
    }
};
void main(void)
{   
    A   a1(1.0,2.0);
    A   a2(a1);
    A   a3=a1;//\u53EF\u4EE5\u8FD9\u6837\u8D4B\u503C
    a1.Print();
    a2.Print();	
    a3.Print();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u6790\u6784\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u6790\u6784\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528" aria-hidden="true">#</a> \u6790\u6784\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528</h2><ul><li><p>\u6790\u6784\u51FD\u6570\u662F\u5728\u7CFB\u7EDF\u91CA\u653E\u5BF9\u8C61\u524D\uFF0C\u5BF9\u5BF9\u8C61\u505A\u4E00\u4E9B\u5584\u540E\u5DE5\u4F5C\u3002</p></li><li><p>\u5B9A\u4E49\u6790\u6784\u51FD\u6570\u7684\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>ClassName::~ClassName( ){
   ......   //\u51FD\u6570\u4F53;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u6790\u6784\u51FD\u6570\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6790\u6784\u51FD\u6570\u7684\u7279\u70B9" aria-hidden="true">#</a> \u6790\u6784\u51FD\u6570\u7684\u7279\u70B9</h3><ul><li><p>\u6790\u6784\u51FD\u6570\u662F\u6210\u5458\u51FD\u6570\uFF0C\u51FD\u6570\u4F53\u53EF\u5199\u5728\u7C7B\u4F53\u5185\uFF0C\u4E5F\u53EF\u5199\u5728\u7C7B\u4F53\u5916\u3002</p></li><li><p>\u6790\u6784\u51FD\u6570\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6210\u5458\u51FD\u6570\uFF0C\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\uFF0C\u5E76\u5728\u5176\u524D\u9762\u52A0\u4E0A\u5B57\u7B26&quot;~&quot;\uFF0C\u4EE5\u4FBF\u548C\u6784\u9020\u51FD\u6570\u540D\u76F8\u533A\u522B\u3002</p></li><li><p>\u6790\u6784\u51FD\u6570\u4E0D\u80FD\u5E26\u6709\u4EFB\u4F55\u53C2\u6570\uFF0C\u4E0D\u80FD\u6709\u8FD4\u56DE\u503C\uFF0C\u4E0D\u6307\u5B9A\u51FD\u6570\u7C7B\u578B\u3002</p></li><li><p>\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u6790\u6784\u51FD\u6570\uFF0C\u6790\u6784\u51FD\u6570\u4E0D\u5141\u8BB8\u91CD\u8F7D\u3002</p></li><li><p>\u6790\u6784\u51FD\u6570\u662F\u5728\u64A4\u6D88\u5BF9\u8C61\u65F6\u7531\u7CFB\u7EDF\u81EA\u52A8\u8C03\u7528\u7684\u3002</p></li><li><p>\u5728\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5F53\u9047\u5230\u67D0\u4E00\u5BF9\u8C61\u7684\u751F\u5B58\u671F\u7ED3\u675F\u65F6\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u8C03\u7528\u6790\u6784\u51FD\u6570\uFF0C\u7136\u540E\u518D\u6536\u56DE\u4E3A\u5BF9\u8C61\u5206\u914D\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

class A {
    float x, y;
public:
    A(float a, float b) {
        x = a;
        y = b;
        cout &lt;&lt; &quot;\u8C03\u7528\u975E\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\\n&quot;;
    }

    A() {
        x = 0;
        y = 0;
        cout &lt;&lt; &quot;\u8C03\u7528\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\\n&quot;;
    }

    ~A() {
        cout &lt;&lt; &quot;\u8C03\u7528\u6790\u6784\u51FD\u6570\\n&quot;;
    }

    void Print(void) {
        cout &lt;&lt; x &lt;&lt; &#39;\\t&#39; &lt;&lt; y &lt;&lt; endl;
    }
};

int main(void) {
    A a1;
    A a2(3.0, 30.0);
    cout &lt;&lt; &quot;\u9000\u51FA\u4E3B\u51FD\u6570\\n&quot;;
    return 0;
}

\u8BE5\u4EE3\u7801\u8FD0\u884C\u7684\u7ED3\u679C\u4E3A\uFF1A
  
 	\u8C03\u7528\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570
	\u8C03\u7528\u975E\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570
  	\u9000\u51FA\u4E3B\u51FD\u6570
  	\u8C03\u7528\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u6790\u6784\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u8C61\u5982\u679C\u7528new\u8FD0\u7B97\u7B26\u5F00\u8F9F\u4E86\u7A7A\u95F4\uFF0C\u5219\u5728\u7C7B\u4E2D\u5E94\u8BE5\u5B9A\u4E49\u4E00\u4E2A\u6790\u6784\u51FD\u6570\uFF0C\u5E76\u5728\u6790\u6784\u51FD\u6570\u4E2D\u4F7F\u7528delete\u5220\u9664\u7531new\u5206\u914D\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u56E0\u4E3A\u5728\u64A4\u6D88\u5BF9\u8C61\u65F6\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u6536\u56DE\u4E3A\u5BF9\u8C61\u6240\u5206\u914D\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u800C\u4E0D\u80FD\u81EA\u52A8\u6536\u56DE\u7531new\u5206\u914D\u7684\u52A8\u6001\u5B58\u50A8\u7A7A\u95F4\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Str{
	char *Sp;    
  	int Length;
public:
	Str(char *string){   
    if(string){	
      	Length=strlen(string);
	    Sp=new char[Length+1]; //\u5728\u6784\u9020\u51FD\u6570\u4E2D\u5C06\u6210\u5458\u6570\u636E\u6307\u9488\u6307\u5411\u52A8\u6001\u5F00\u8F9F\u7684\u5185\u5B58
		strcpy(Sp,string);  //\u7528\u521D\u503C\u4E3A\u5F00\u8F9F\u7684\u5185\u5B58\u8D4B\u503C
	}
    else      
      	Sp=0;
	}
	void Show(void){	
    	cout&lt;&lt;Sp&lt;&lt;endl;	
  	}
	~Str()	{  
    	if(Sp)	
      		delete []Sp;	//\u6790\u6784\u51FD\u6570\uFF0C\u5F53\u91CA\u653E\u5BF9\u8C61\u65F6\u6536\u56DE\u7528new\u5F00\u8F9F\u7684\u7A7A\u95F4
  	}
};
void main(void)
{	
  	Str s1(&quot;Study C++&quot;);
	s1.Show();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u4E0D\u540C\u5B58\u50A8\u7C7B\u578B\u7684\u5BF9\u8C61\u8C03\u7528\u6784\u9020\u51FD\u6570\u53CA\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u5B58\u50A8\u7C7B\u578B\u7684\u5BF9\u8C61\u8C03\u7528\u6784\u9020\u51FD\u6570\u53CA\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> \u4E0D\u540C\u5B58\u50A8\u7C7B\u578B\u7684\u5BF9\u8C61\u8C03\u7528\u6784\u9020\u51FD\u6570\u53CA\u6790\u6784\u51FD\u6570</h3><ul><li><p>\u5BF9\u4E8E\u5168\u5C40\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF08\u5728\u51FD\u6570\u5916\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF09\uFF0C\u5728\u7A0B\u5E8F\u5F00\u59CB\u6267\u884C\u65F6\uFF0C\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF1B\u5230\u7A0B\u5E8F\u7ED3\u675F\u65F6\uFF0C\u8C03\u7528\u6790\u6784\u51FD\u6570\u3002</p></li><li><p>\u5BF9\u4E8E\u5C40\u90E8\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF08\u5728\u51FD\u6570\u5185\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF09\uFF0C\u5F53\u7A0B\u5E8F\u6267\u884C\u5230\u5B9A\u4E49\u5BF9\u8C61\u7684\u5730\u65B9\u65F6\uFF0C\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF1B\u5728\u9000\u51FA\u5BF9\u8C61\u7684\u4F5C\u7528\u57DF\u65F6\uFF0C\u8C03\u7528\u6790\u6784\u51FD\u6570\u3002</p></li><li><p>\u7528static\u5B9A\u4E49\u7684\u5C40\u90E8\u5BF9\u8C61\uFF0C\u5728\u9996\u6B21\u5230\u8FBE\u5BF9\u8C61\u7684\u5B9A\u4E49\u65F6\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF1B\u5230\u7A0B\u5E8F\u7ED3\u675F\u65F6\uFF0C\u8C03\u7528\u6790\u6784\u51FD\u6570</p></li><li><p>\u5BF9\u4E8E\u7528new\u8FD0\u7B97\u7B26\u52A8\u6001\u751F\u6210\u7684\u5BF9\u8C61\uFF0C\u5728\u4EA7\u751F\u5BF9\u8C61\u65F6\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u53EA\u6709\u4F7F\u7528delete\u8FD0\u7B97\u7B26\u6765\u91CA\u653E\u5BF9\u8C61\u65F6\uFF0C\u624D\u8C03\u7528\u6790\u6784\u51FD\u6570\u3002\u82E5\u4E0D\u4F7F\u7528delete\u6765\u64A4\u6D88\u52A8\u6001\u751F\u6210\u7684\u5BF9\u8C61\uFF0C\u7A0B\u5E8F\u7ED3\u675F\u65F6\uFF0C\u5BF9\u8C61\u4ECD\u5B58\u5728\uFF0C\u5E76\u5360\u7528\u76F8\u5E94\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5373\u7CFB\u7EDF\u4E0D\u80FD\u81EA\u52A8\u5730\u8C03\u7528\u6790\u6784\u51FD\u6570\u6765\u64A4\u6D88\u52A8\u6001\u751F\u6210\u7684\u5BF9\u8C61\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
   	A(float a, float b){
     	x=a;
     	y=b;
     	cout&lt;&lt;&quot;\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61\\n&quot;;
   	}
   	A(){	
     	x=0;  
     	y=0;  
     	cout&lt;&lt;&quot;\u521D\u59CB\u5316\u9759\u6001\u5C40\u90E8\u5BF9\u8C61\\n&quot;;
   	}
   	A(float  a){	
     	x=a;  
     	y=0;  
     	cout&lt;&lt;&quot;\u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61\\n&quot;; 
   	}
   	~A(){  
     	cout&lt;&lt;&quot;\u8C03\u7528\u6790\u6784\u51FD\u6570&quot;&lt;&lt;endl;  
   	}
};
A  a0(100.0);//\u5B9A\u4E49\u5168\u5C40\u5BF9\u8C61
void f(void)
{  
  	cout&lt;&lt;&quot; \u8FDB\u5165f()\u51FD\u6570\\n&quot;;
  	A  ab(10.0,  20.0);//\u5B9A\u4E49\u5C40\u90E8\u81EA\u52A8\u5BF9\u8C61
  	static  A  a3;  //\u521D\u59CB\u5316\u5C40\u90E8\u9759\u6001\u5BF9\u8C61 
}
void main(void)
{    
  	cout&lt;&lt;&quot;\u8FDB\u5165main\u51FD\u6570\\n&quot;;
	f();     	
  	f();   
}

\u8BE5\u7A0B\u5E8F\u8FD0\u884C\u7684\u7ED3\u679C\u4E3A\uFF1A
  	\u521D\u59CB\u5316\u5168\u5C40\u5BF9\u8C61
  	\u8FDB\u5165main\u51FD\u6570
  	\u8FDB\u5165f()\u51FD\u6570
  	\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61
  	\u521D\u59CB\u5316\u9759\u6001\u5C40\u90E8\u5BF9\u8C61
  	\u8C03\u7528\u6790\u6784\u51FD\u6570
  	\u8FDB\u5165f()\u51FD\u6570
  	\u521D\u59CB\u5316\u81EA\u52A8\u5C40\u90E8\u5BF9\u8C61
  	\u8C03\u7528\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u6790\u6784\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7528new\u8FD0\u7B97\u7B26\u6765\u52A8\u6001\u751F\u6210\u5BF9\u8C61\u6570\u7EC4\u65F6\uFF0C\u81EA\u52A8\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u800C\u7528delete\u8FD0\u7B97\u7B26\u6765\u91CA\u653Ep1\u6240\u6307\u5411\u7684\u5BF9\u8C61\u6570\u7EC4\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u65F6\uFF0C\u5728\u6307\u9488\u53D8\u91CF\u7684\u524D\u9762\u5FC5\u987B\u52A0\u4E0A[ ]\uFF0C \u624D\u80FD\u5C06\u6570\u7EC4\u5143\u7D20\u6240\u5360\u7528\u7684\u7A7A\u95F4\u5168\u90E8\u91CA\u653E\u3002\u5426\u5219\uFF0C\u53EA\u91CA\u653E\u7B2C0\u4E2A\u5143\u7D20\u6240\u5360\u7528\u7684\u7A7A\u95F4\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float   x,y;
public:
    A(float a=0, float b=0){
      	x=a;  
      	y=b;
      	cout&lt;&lt;&quot;\u8C03\u7528\u4E86\u6784\u9020\u51FD\u6570\\n&quot;;
    }
    void  Print(void){  
      	cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
    }
    ~A() {  
      	cout&lt;&lt;&quot;\u8C03\u7528\u4E86\u6790\u6784\u51FD\u6570\\n&quot;;   
    }
};
void main(void)
{   	
    cout&lt;&lt;&quot;\u8FDB\u5165main()\u51FD\u6570\\n&quot;;
    A   *pa1;
    pa1=new  A[3];//\u5F00\u8F9F\u6570\u7EC4\u7A7A\u95F4
	cout&lt;&lt;&quot;\\n\u5B8C\u6210\u5F00\u8F9F\u6570\u7EC4\u7A7A\u95F4\\n\\n&quot;;
    delete  [ ]pa1;  //\u5FC5\u987B\u7528[]\u5220\u9664\u5F00\u8F9F\u7684\u7A7A\u95F4
    cout&lt;&lt;&quot;\u9000\u51FAmain()\u51FD\u6570\\n&quot;;
}

\u8BE5\u7A0B\u5E8F\u7684\u8FD0\u884C\u7ED3\u679C\u4E3A\uFF1A
	\u8FDB\u5165\u4E86main()\u51FD\u6570
  	\u8C03\u7528\u4E86\u6784\u9020\u51FD\u6570
  	\u8C03\u7528\u4E86\u6784\u9020\u51FD\u6570
  	\u8C03\u7528\u4E86\u6784\u9020\u51FD\u6570
  	\u5B8C\u6210\u5F00\u8F9F\u6570\u7EC4\u7A7A\u95F4
  	\u8C03\u7528\u4E86\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u4E86\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u4E86\u6790\u6784\u51FD\u6570
  	\u9000\u51FAmain()\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> \u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570</h3><ul><li><p>\u82E5\u5728\u7C7B\u7684\u5B9A\u4E49\u4E2D\u6CA1\u6709\u663E\u5F0F\u5730\u5B9A\u4E49\u6790\u6784\u51FD\u6570\u65F6\uFF0C\u5219\u7F16\u8BD1\u5668\u81EA\u52A8\u5730\u4EA7\u751F\u4E00\u4E2A\u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570\uFF0C\u5176\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>ClassName::~ClassName() { };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4EFB\u4F55\u5BF9\u8C61\u90FD\u5FC5\u987B\u6709\u6784\u9020\u51FD\u6570\u548C\u6790\u6784\u51FD\u6570\uFF0C\u4F46\u5728\u64A4\u6D88\u5BF9\u8C61\u65F6\uFF0C\u8981\u91CA\u653E\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u7528new\u8FD0\u7B97\u7B26\u5206\u914D\u7684\u52A8\u6001\u7A7A\u95F4\u65F6\uFF0C\u5FC5\u987B\u663E\u5F0F\u5730\u5B9A\u4E49\u6790\u6784\u51FD\u6570\u3002</p></li></ul><hr><h2 id="\u987A\u5E8F\u7EBF\u6027\u8868\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u987A\u5E8F\u7EBF\u6027\u8868\u6982\u5FF5" aria-hidden="true">#</a> \u987A\u5E8F\u7EBF\u6027\u8868\u6982\u5FF5</h2><ul><li><p>\u7EBF\u6027\u8868\u7528\u6765\u5B58\u653E\u82E5\u5E72\u4E2A\u6574\u6570\uFF0C\u7528\u4E00\u4E2A\u6307\u9488\u6307\u5411\u5176\u5B58\u653E\u6574\u6570\u7684\u9996\u5730\u5740\u3002\u5F53\u5B58\u653E\u7684\u6570\u636E\u5927\u4E8E\u539F\u5148\u5F00\u8F9F\u7684\u7A7A\u95F4\u65F6\uFF0C\u7EBF\u6027\u8868\u81EA\u52A8\u52A8\u6001\u5F00\u8F9F\u7A7A\u95F4\uFF0C\u50A8\u5B58\u6240\u6709\u7684\u6574\u6570\u3002</p></li><li><p>\u7EBF\u6027\u8868\u6709\u4E09\u4E2A\u53C2\u6570\u6765\u63CF\u8FF0\uFF1A\u6307\u5411\u7EBF\u6027\u8868\u5B58\u50A8\u7A7A\u95F4\u9996\u5730\u5740\u7684\u6307\u9488\u53D8\u91CFList\uFF1B\u65E0\u7B26\u53F7\u6574\u6570nMax\uFF0C\u6307\u793A\u8868\u7684\u6700\u5927\u957F\u5EA6\uFF1B\u65E0\u7B26\u53F7\u6574\u6570nElem\uFF0C\u6307\u793A\u8868\u4E2D\u5B9E\u9645\u6240\u653E\u7684\u6570\u636E\u4E2A\u6570\u3002</p></li><li><p>\u5B9E\u9645\u4E0A\uFF0C\u7EBF\u6027\u8868\u76F8\u5F53\u4E8E\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0CList\u4E3A\u6570\u7EC4\u7684\u9996\u5730\u5740\uFF0CnMax\u4E3A\u6570\u7EC4\u5728\u5185\u5B58\u5F00\u8F9F\u7684\u7A7A\u95F4\u6570\uFF0CnElem\u4E3A\u6570\u7EC4\u4E2D\u5B9E\u9645\u5B58\u653E\u7684\u5143\u7D20\u4E2A\u6570\u3002\u53EA\u4E0D\u8FC7\u6570\u7EC4\u7684\u7A7A\u95F4\u662F\u52A8\u6001\u5F00\u8F9F\u7684\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class ListClass{
  	int *List;                                //\u6307\u5411\u7EBF\u6027\u8868\u7684\u6307\u9488
  	unsigned nMax;                            //\u8868\u7684\u6700\u5927\u957F\u5EA6
  	unsigned nEleml;                          //\u8868\u4E2D\u5F53\u524D\u7684\u5143\u7D20\u4E2A\u6570
  	......
public:
  	void Init(int n = 10);                    //\u521D\u59CB\u5316\u9488\u8868\uFF0C\u6700\u5927\u957F\u5EA6\u7684\u7F3A\u7701\u503C\u4E3A10
  	void Elem(int);                           //\u5728\u7EBF\u6027\u8868\u8868\u5C3E\u589E\u52A0\u4E00\u4E2A\u5143\u7D20
  	int &amp;Elem(unsigned n);                    //\u8FD4\u56DE\u7EBF\u6027\u8868\u4E2D\u7B2Cn\u4E2A\u5143\u7D20\u7684\u5F15\u7528
  	unsigned Elem(void);                      //\u8FD4\u56DE\u5F53\u524D\u7EBF\u6027\u8868\u4E2D\u5143\u7D20\u7684\u4E2A\u6570
  	unsigned Max(void);                       //\u8FD4\u56DE\u7EBF\u6027\u8868\u7684\u957F\u5EA6\uFF08\u5360\u7528\u7A7A\u95F4\u6570\uFF09
  	void Print(void);	                        //\u8F93\u51FA\u7EBF\u6027\u8868\u4E2D\u6240\u6709\u7684\u5143\u7D20
	int GetElem(int i);	                      //\u8FD4\u56DE\u7EBF\u6027\u8868\u4E2D\u7B2Ci\u4E2A\u5143\u7D20\u7684\u503C
	void Destroy(void);	                      //\u6536\u56DE\u7EBF\u6027\u8868\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4
};

void ListClass::Elem (int elem) //\u5728\u7EBF\u6027\u8868\u5C3E\u589E\u52A0\u4E00\u4E2A\u5143\u7D20
{	
  	nElem=nElem+1;
	if(nElem&gt;nMax){		//\u7A7A\u95F4\u4E0D\u591F\uFF0C\u52A8\u6001\u5F00\u8F9F\u5B58\u50A8\u7A7A\u95F4
    	int *list;
		list=new int[nMax+1]; //\u5F00\u8F9F\u4E00\u8F83\u5927\u7684\u7A7A\u95F4
		for(int i=0;i&lt;nMax;i++)
			list[i]=List[i];
		nMax=nMax+1;
		list[i]=elem;
		delete []List;
		List=list;		
	}
	else{	
   	 	List[nElem-1]=elem;	
  	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u7C7B\u7EE7\u627F\u548C\u6D3E\u751F\u7C7B\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EE7\u627F\u548C\u6D3E\u751F\u7C7B\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u7C7B\u7EE7\u627F\u548C\u6D3E\u751F\u7C7B\u7684\u5B9E\u73B0</h2><h3 id="\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a> \u5F15\u5165</h3><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Student
{   
  int num;
  char name[30];
  char sex;
public:                             
  void display( ){                    //\u5BF9\u6210\u5458\u51FD\u6570display\u7684\u5B9A\u4E49
    cout&lt;&lt;&quot;num: &quot;&lt;&lt;num&lt;&lt;endl;
    cout&lt;&lt;&quot;name: &quot;&lt;&lt;name&lt;&lt;endl;
    cout&lt;&lt;&quot;sex: &quot;&lt;&lt;sex&lt;&lt;endl; 
  } 
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62E5\u6709\u4E00\u4E2A\u5982\u4E0A\u7684\u7C7B\uFF0C\u8981\u5728\u8BE5\u7C7B\u7684\u57FA\u7840\u4E0A\u6DFB\u52A0\u51E0\u4E2A\u51FD\u6570\u6210\u4E3A\u53E6\u4E00\u4E2A\u7C7B</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Studend1
{    
  int num;          //\u6B64\u884C\u539F\u6765\u5DF1\u6709
  char name[20];       //\u6B64\u884C\u539F\u6765\u5DF1\u6709
  char sex;         //\u6B64\u884C\u539F\u6765\u5DF1\u6709
  int age;
  char addr\uFF3B20\uFF3D; 
public:            
  void display( ){        //\u6B64\u884C\u539F\u6765\u5DF1\u6709
    cout&lt;&lt;&quot;num: &quot;&lt;&lt;num&lt;&lt;endl;    //\u6B64\u884C\u539F\u6765\u5DF1\u6709
    cout&lt;&lt;&quot;name: &quot;&lt;&lt;name&lt;&lt;endl;//\u6B64\u884C\u539F\u6765\u5DF1\u6709
    cout&lt;&lt;&quot;sex: &quot;&lt;&lt;sex&lt;&lt;endl;      //\u6B64\u884C\u539F\u6765\u5DF1\u6709
    cout&lt;&lt;&quot;age: &quot;&lt;&lt;age&lt;&lt;endl;
    cout&lt;&lt;&quot;address: &quot;&lt;&lt;addr&lt;&lt;endl;
  }                 
}; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u4EE3\u7801\u7684\u91CD\u590D\u6027\u8FC7\u9AD8\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u8981\u505A\u8BB8\u591A\u91CD\u590D\u7684\u5DE5\u4F5C\uFF0C\u6240\u4EE5c++\u63D0\u51FA\u4E86\u7C7B\u7EE7\u627F\u7684\u6982\u5FF5\u3002\u5728C++\u4E2D\u6240\u8C13&quot;\u7EE7\u627F&quot;\u5C31\u662F\u5728\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u7C7B\u7684\u57FA\u7840\u4E0A\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684\u7C7B\u3002\u5DF2\u5B58\u5728\u7684\u7C7B\u79F0\u4E3A&quot;\u57FA\u7C7B(base class)&quot;\u6216&quot;\u7236\u7C7B(father class)&quot;\u3002\u65B0\u5EFA\u7ACB\u7684\u7C7B\u79F0\u4E3A&quot;\u6D3E\u751F\u7C7B(derived class)&quot;\u6216&quot;\u5B50\u7C7B(son class)&quot;\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Student1: public Student//\u58F0\u660E\u57FA\u7C7B\u662FStudent
{
private:
  	int age;    //\u65B0\u589E\u52A0\u7684\u6570\u636E\u6210\u5458
  	string addr;  //\u65B0\u589E\u52A0\u7684\u6570\u636E\u6210\u5458
public:
  	void display_1(){  //\u65B0\u589E\u52A0\u7684\u6210\u5458\u51FD\u6570
    	cout&lt;&lt;&quot;age: &quot;&lt;&lt;age&lt;&lt;endl; 
    	cout&lt;&lt;&quot;address: &quot;&lt;&lt;addr&lt;&lt;endl;
  	}   
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728C++\u8BED\u8A00\u4E2D\uFF0C\u4E00\u4E2A\u6D3E\u751F\u7C7B\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u57FA\u7C7B\u6D3E\u751F\uFF0C\u4E5F\u53EF\u4EE5\u4ECE\u591A\u4E2A\u57FA\u7C7B\u6D3E\u751F\u3002\u4ECE\u4E00\u4E2A\u57FA\u7C7B\u6D3E\u751F\u7684\u7EE7\u627F\u79F0\u4E3A\u5355\u7EE7\u627F\uFF1B\u4ECE\u591A\u4E2A\u57FA\u7C7B\u6D3E\u751F\u7684\u7EE7\u627F\u79F0\u4E3A\u591A\u7EE7\u627F\u3002</li><li>\u901A\u8FC7\u7EE7\u627F\u673A\u5236\uFF0C\u53EF\u4EE5\u5229\u7528\u5DF2\u6709\u7684\u6570\u636E\u7C7B\u578B\u6765\u5B9A\u4E49\u65B0\u7684\u6570\u636E\u7C7B\u578B\u3002\u6240\u5B9A\u4E49\u7684\u65B0\u7684\u6570\u636E\u7C7B\u578B\u4E0D\u4EC5\u62E5\u6709\u65B0\u5B9A\u4E49\u7684\u6210\u5458\uFF0C\u800C\u4E14\u8FD8\u540C\u65F6\u62E5\u6709\u65E7\u7684\u6210\u5458\u3002\u6211\u4EEC\u79F0\u5DF2\u5B58\u5728\u7684\u7528\u6765\u6D3E\u751F\u65B0\u7C7B\u7684\u7C7B\u4E3A\u57FA\u7C7B\uFF0C\u53C8\u79F0\u4E3A\u7236\u7C7B\u3002\u7531\u5DF2\u5B58\u5728\u7684\u7C7B\u6D3E\u751F\u51FA\u7684\u65B0\u7C7B\u79F0\u4E3A\u6D3E\u751F\u7C7B\uFF0C\u53C8\u79F0\u4E3A\u5B50\u7C7B\u3002</li></ul><hr><h3 id="\u6D3E\u751F\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6D3E\u751F\u7C7B" aria-hidden="true">#</a> \u6D3E\u751F\u7C7B</h3><ul><li><p>\u5728\u5EFA\u7ACB\u6D3E\u751F\u7C7B\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u57FA\u7C7B\u4E0D\u4F1A\u505A\u4EFB\u4F55\u6539\u53D8\uFF0C\u6D3E\u751F\u7C7B\u5219\u9664\u4E86\u7EE7\u627F\u57FA\u7C7B\u7684\u6240\u6709\u53EF\u5F15\u7528\u7684\u6210\u5458\u53D8\u91CF\u548C\u6210\u5458\u51FD\u6570\u5916\uFF0C\u8FD8\u53EF\u53E6\u5916\u5B9A\u4E49\u672C\u8EAB\u7684\u6210\u5458\u53D8\u91CF\u548C\u5904\u7406\u8FD9\u4E9B\u53D8\u91CF\u7684\u51FD\u6570\uFF0C\u7531\u4E8E\u6D3E\u751F\u7C7B\u53EF\u7EE7\u627F\u57FA\u7C7B\u7684\u6210\u5458\u53D8\u91CF\u548C\u6210\u5458\u51FD\u6570\uFF0C\u56E0\u6B64\u5728\u57FA\u7C7B\u4E2D\u5B9A\u4E49\u597D\u7684\u6570\u636E\u548C\u51FD\u6570\u7B49\u7684\u7A0B\u5E8F\u4EE3\u7801\u53EF\u91CD\u590D\u4F7F\u7528\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u7A0B\u5E8F\u7684\u53EF\u9760\u6027\u3002</p></li><li><p>\u5F53\u4ECE\u5DF2\u6709\u7684\u7C7B\u4E2D\u6D3E\u751F\u51FA\u65B0\u7684\u7C7B\u65F6\uFF0C\u53EF\u4EE5\u5BF9\u6D3E\u751F\u7C7B\u505A\u4EE5\u4E0B\u51E0\u79CD\u53D8\u5316\uFF1A</p><ul><li>\u53EF\u4EE5\u7EE7\u627F\u57FA\u7C7B\u7684\u6210\u5458\u6570\u636E\u6216\u6210\u5458\u51FD\u6570\u3002</li><li>\u53EF\u4EE5\u589E\u52A0\u65B0\u7684\u6210\u5458\u53D8\u91CF\u3002</li><li>\u53EF\u4EE5\u589E\u52A0\u65B0\u7684\u6210\u5458\u51FD\u6570\u3002</li><li>\u53EF\u4EE5\u91CD\u65B0\u5B9A\u4E49\u5DF2\u6709\u7684\u6210\u5458\u51FD\u6570\u3002</li><li>\u53EF\u4EE5\u6539\u53D8\u73B0\u6709\u7684\u6210\u5458\u5C5E\u6027\u3002</li></ul></li><li><p>\u5728C++\u4E2D\u6709\u4E8C\u79CD\u7EE7\u627F\uFF1A\u5355\u4E00\u7EE7\u627F\u548C\u591A\u91CD\u7EE7\u627F\u3002\u5F53\u4E00\u4E2A\u6D3E\u751F\u7C7B\u4EC5\u7531\u4E00\u4E2A\u57FA\u7C7B\u6D3E\u751F\u65F6\uFF0C\u79F0\u4E3A\u5355\u4E00\u7EE7\u627F\uFF1B\u800C\u5F53\u4E00\u4E2A\u6D3E\u751F\u7C7B\u7531\u4E8C\u4E2A\u6216\u66F4\u591A\u4E2A\u57FA\u7C7B\u6240\u6D3E\u751F\u65F6\uFF0C\u79F0\u4E3A\u591A\u91CD\u7EE7\u627F\u3002</p></li><li><p>\u4ECE\u4E00\u4E2A\u57FA\u7C7B\u6D3E\u751F\u4E00\u4E2A\u7C7B\u7684\u4E00\u822C\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class ClassName:&lt;Access&gt;BaseClassName{
  	private:
  		......
  	public:
  		......
 	protected:
  		......
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u6D3E\u751F\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6D3E\u751F\u7684\u5206\u7C7B" aria-hidden="true">#</a> \u6D3E\u751F\u7684\u5206\u7C7B</h3><h4 id="\u516C\u6709\u6D3E\u751F" tabindex="-1"><a class="header-anchor" href="#\u516C\u6709\u6D3E\u751F" aria-hidden="true">#</a> \u516C\u6709\u6D3E\u751F</h4><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class ClassName: public BaseClassName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u516C\u6709\u6D3E\u751F\u65F6\uFF0C\u57FA\u7C7B\u4E2D\u6240\u6709\u6210\u5458\u5728\u6D3E\u751F\u7C7B\u4E2D\u4FDD\u6301\u5404\u4E2A\u6210\u5458\u7684\u8BBF\u95EE\u6743\u9650</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220530185201942.png" alt="image-20220530185201942" loading="lazy"></p></li><li><p>\u5728\u57FA\u7C7B\u4E2D\uFF1A</p><ul><li>public\uFF1A\u5728\u6D3E\u751F\u7C7B\u548C\u7C7B\u5916\u53EF\u4EE5\u4F7F\u7528</li><li>protected\uFF1A\u5728\u6D3E\u751F\u7C7B\u4E2D\u4F7F\u7528</li><li>private\uFF1A\u4E0D\u80FD\u5728\u6D3E\u751F\u7C7B\u4E2D\u4F7F\u7528</li></ul><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A {   
  	int  x;
protected:   
  	int y;
public:      
  	int z;
  	A(int a,int b,int c){
    	x=a;
    	y=b;
    	z=c;
  	}//\u57FA\u7C7B\u521D\u59CB\u5316
  	int  Getx(){
    	return x;
  	}	//\u8FD4\u56DEx
  	int  Gety(){
    	return y;
  	}	//\u8FD4\u56DEy\uFF0C\u56E0\u4E3Ay\u662F\u57FA\u7C7B\u4FDD\u62A4\uFF0C\u6240\u4EE5\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\u3002\u800C\u5728\u7C7B\u5916\u4E0D\u53EF\u76F4\u63A5\u5F15\u7528\u3002
  	void ShowA(){
    	cout&lt;&lt; &quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;z=&quot;&lt;&lt;z&lt;&lt;&#39;\\n&#39;;
  	}
};
class B:public A{  //\u516C\u6709\u6D3E\u751F
	int m,n;
public:	
    B(int a,int b,int c,int d,int e):A(a,b,c){ //\u5BF9\u57FA\u7C7B\u521D\u59CB\u5316
  		m=d;
  		n=e;
	}
  	void Show(){
    	cout&lt;&lt;&quot;m=&quot;&lt;&lt;m&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;n=&quot;&lt;&lt;n&lt;&lt;&#39;\\n&#39;;
    	cout&lt;&lt;&quot;x=&quot;&lt;&lt;Getx()&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;z=&quot;&lt;&lt;z&lt;&lt;&#39;\\n&#39;;
    	//\u56E0\u4E3Az\u662F\u57FA\u7C7B\u516C\u6709\uFF0C\u6240\u4EE5\u5728\u6D3E\u751F\u7C7B\u4E2D\u548C\u7C7B\u5916\u5747\u53EF\u76F4\u63A5\u5F15\u7528\u3002
  	}
  	int Sum(){
    	return ( Getx()+y+z+m+n); //\u56E0\u4E3Ax\u662F\u57FA\u7C7B\u79C1\u6709\uFF0C\u6240\u4EE5\u5728\u6D3E\u751F\u7C7B\u548C\u7C7B\u5916\u4E2D\u4E0D\u80FD\u76F4\u63A5\u5F15\u7528
  	}
};
void  main(void)
{    
  	B b1(1,2,3,4,5);
  	b1.ShowA();	       
  	b1.Show();
  	cout&lt;&lt; &quot;Sum=&quot;&lt;&lt;b1.Sum()&lt;&lt;&#39;\\n&#39;;
  	cout&lt;&lt;&quot;x=&quot;&lt;&lt;b1.Getx()&lt;&lt;&#39;\\t&#39;;     
  	cout &lt;&lt; &quot;y=&quot; &lt;&lt;b1.Gety()&lt;&lt;&#39;\\t&#39;;	
  	cout &lt;&lt; &quot;z=&quot;&lt;&lt;b1.z&lt;&lt;&#39;\\n&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h4 id="\u79C1\u6709\u6D3E\u751F" tabindex="-1"><a class="header-anchor" href="#\u79C1\u6709\u6D3E\u751F" aria-hidden="true">#</a> \u79C1\u6709\u6D3E\u751F</h4><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class ClassName: private BaseClassName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u79C1\u6709\u6D3E\u751F\u65F6\uFF0C\u57FA\u7C7B\u4E2D\u516C\u6709\u6210\u5458\u548C\u4FDD\u62A4\u6210\u5458\u5728\u6D3E\u751F\u7C7B\u4E2D\u5747\u53D8\u4E3A\u79C1\u6709\u7684\uFF0C\u5728\u6D3E\u751F\u7C7B\u4E2D\u4ECD\u53EF\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u6210\u5458\uFF0C\u57FA\u7C7B\u4E2D\u7684\u79C1\u6709\u6210\u5458\uFF0C\u5728\u6D3E\u751F\u7C7B\u4E2D\u4E0D\u53EF\u76F4\u63A5\u4F7F\u7528\u3002</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220530192418073.png" alt="image-20220530192418073" loading="lazy"></p></li><li><p>\u5728\u57FA\u7C7B\u4E2D\uFF1A</p><ul><li>public\uFF1A\uFF08\u53D8\u4E3A\u79C1\u6709\uFF09\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EF\u4EE5\u4F7F\u7528\uFF0C\u7C7B\u5916\u4E0D\u80FD\u4F7F\u7528</li><li>protected\uFF1A\uFF08\u53D8\u4E3A\u79C1\u6709\uFF09\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EF\u4EE5\u4F7F\u7528\uFF0C\u5728\u7C7B\u5916\u4E0D\u80FD\u4F7F\u7528</li><li>private\uFF1A\u4E0D\u80FD\u5728\u6D3E\u751F\u7C7B\u548C\u7C7B\u5916\u4E2D\u4F7F\u7528</li></ul><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A {   
  	int  x;  //\u56E0\u4E3Ax\u662F\u57FA\u7C7B\u79C1\u6709\uFF0C\u6240\u4EE5\u5728\u6D3E\u751F\u7C7B\u548C\u7C7B\u5916\u4E2D\u4E0D\u80FD\u76F4\u63A5\u5F15\u7528
protected:   
  	int y;  //y\u662F\u57FA\u7C7B\u4FDD\u62A4\uFF0C\u6240\u4EE5\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EF\u4EE5\u76F4\u63A5\u5F15\u7528\u3002\u800C\u5728\u7C7B\u5916\u4E0D\u53EF\u76F4\u63A5\u5F15\u7528\u3002
public:      
  	int z;  //z\u662F\u57FA\u7C7B\u516C\u6709\uFF0C\u79C1\u6709\u6D3E\u751F\u53D8\u4E3A\u79C1\u6709\uFF0C\u6240\u4EE5\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EF\u76F4\u63A5\u5F15\u7528\uFF0C\u800C\u5728\u7C7B\u5916\u4E0D\u53EF\u3002
  	A(int a,int b,int c){
    	x=a;
    	y=b;
    	z=c;
  	}//\u57FA\u7C7B\u521D\u59CB\u5316
  	int  Getx(){
    	return x;
  	}	//\u8FD4\u56DEx
   	int  Gety(){
    	return y;
  	}	//\u8FD4\u56DEy
  	void ShowA(){
    	cout&lt;&lt; &quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;z=&quot;&lt;&lt;z&lt;&lt;&#39;\\n&#39;;
  	}
};
class B:private A{
	int m,n;
public:	
    B(int a,int b,int c,int d,int e):A(a,b,c){
  		m=d;
  		n=e;
	}
  	void Show(){
   	 	cout&lt;&lt;&quot;m=&quot;&lt;&lt;m&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;n=&quot;&lt;&lt;n&lt;&lt;&#39;\\n&#39;;
    	cout&lt;&lt;&quot;x=&quot;&lt;&lt;Getx()&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;z=&quot;&lt;&lt;z&lt;&lt;&#39;\\n&#39;;  
  	}
  	int Sum(){
    	return ( Getx()+y+z+m+n);
  	}
};
void  main(void)
{    
  	B b1(1,2,3,4,5);
 	 b1.ShowA();	       
  	b1.Show();
  	cout&lt;&lt; &quot;Sum=&quot;&lt;&lt;b1.Sum()&lt;&lt;&#39;\\n&#39;;
  	cout&lt;&lt;&quot;x=&quot;&lt;&lt;b1.Getx()&lt;&lt;&#39;\\t&#39;;
  	cout &lt;&lt; &quot;y=&quot; &lt;&lt;b1.Gety()&lt;&lt;&#39;\\t&#39;;
  	cout &lt;&lt; &quot;z=&quot;&lt;&lt;b1.z&lt;&lt;&#39;\\n&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h4 id="\u4FDD\u62A4\u6D3E\u751F" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u62A4\u6D3E\u751F" aria-hidden="true">#</a> \u4FDD\u62A4\u6D3E\u751F</h4><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class ClassName: protected BaseClassName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>\u4FDD\u62A4\u6D3E\u751F\u65F6\uFF0C\u57FA\u7C7B\u4E2D\u516C\u6709\u6210\u5458\u548C\u4FDD\u62A4\u6210\u5458\u5728\u6D3E\u751F\u7C7B\u4E2D\u5747\u53D8\u4E3A\u4FDD\u62A4\u7684\u548C\u79C1\u6709\u7684\uFF0C\u5728\u6D3E\u751F\u7C7B\u4E2D\u4ECD\u53EF\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E9B\u6210\u5458\uFF0C\u57FA\u7C7B\u4E2D\u7684\u79C1\u6709\u6210\u5458\uFF0C\u5728\u6D3E\u751F\u7C7B\u4E2D\u4E0D\u53EF\u76F4\u63A5\u4F7F\u7528\u3002</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220530193311250.png" alt="image-20220530193311250" loading="lazy"></p></li><li><p>\u5728\u57FA\u7C7B\u4E2D\uFF1A</p><ul><li>public: (\u53D8\u4E3A\u4FDD\u62A4)\u5728\u6D3E\u751F\u7C7B\u4E2D\u4F7F\u7528\uFF0C\u7C7B\u5916\u4E0D\u53EF\u4F7F\u7528</li><li>protected: (\u53D8\u4E3A\u79C1\u6709\uFF09\u5728\u6D3E\u751F\u7C7B\u4E2D\u4F7F\u7528\uFF0C\u7C7B\u5916\u4E0D\u53EF\u4F7F\u7528</li><li>private: \u4E0D\u80FD\u5728\u6D3E\u751F\u7C7B\u4E2D\u548C\u7C7B\u5916\u4F7F\u7528</li></ul></li><li><p>protected \u6210\u5458\u662F\u4E00\u79CD\u5177\u6709\u8840\u7F18\u5173\u7CFB\u5185\u5916\u6709\u522B\u7684\u6210\u5458\u3002\u5B83\u5BF9\u6D3E\u751F\u7C7B\u7684\u5BF9\u8C61\u800C\u8A00\uFF0C\u662F\u516C\u5F00\u6210\u5458\uFF0C\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5BF9\u8840\u7F18\u5916\u90E8\u800C\u8A00\uFF0C\u4E0E\u79C1\u6709\u6210\u5458\u4E00\u6837\u88AB\u9690\u853D\u3002</p></li></ul><hr><h3 id="\u591A\u91CD\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u591A\u91CD\u7EE7\u627F" aria-hidden="true">#</a> \u591A\u91CD\u7EE7\u627F</h3><ul><li><p>\u591A\u91CD\u7EE7\u627F\u7684\u683C\u5F0F\u4E00\u822C\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  \u7C7B\u540D:&lt;Access&gt;\u7C7B\u540D1,..., &lt;Access&gt;\u7C7B\u540Dn
{
    private:     ...... \uFF1B   //\u79C1\u6709\u6210\u5458\u8BF4\u660E;
    public:      ...... \uFF1B   //\u516C\u6709\u6210\u5458\u8BF4\u660E;
    protected:   ...... \uFF1B   //\u4FDD\u62A4\u7684\u6210\u5458\u8BF4\u660E;
};
class  D: public  A, protected B, private C 
{   
	....//\u6D3E\u751F\u7C7B\u4E2D\u65B0\u589E\u52A0\u6210\u5458
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{	
  	int x1,y1;
public:	
  	A(int a,int b)	{ 
  		x1=a; 
  		y1=b;	
	}
	void ShowA(void){ 
  		cout&lt;&lt;&quot;A.x=&quot;&lt;&lt;x1&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;A.y=&quot;&lt;&lt;y1&lt;&lt;endl;  
	}
};
class  B{
  	int x2,y2;
public:	
  	B(int a,int b)	{
    	x2=a; 
    	y2=b;	
  	}
  	void ShowB(void){ 
    	cout&lt;&lt;&quot;B.x=&quot;&lt;&lt;x2&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;B.y=&quot;&lt;&lt;y2&lt;&lt;endl;  
  	}
};
class  C:public A,private B{ //A\u4E3A\u516C\u6709\u6D3E\u751F\uFF0CB\u4E3A\u79C1\u6709\u6D3E\u751F
	int x,y;
public:	
  	C(int a,int b,int c,int d,int e,int f):A(a,b),B(c,d)	{
    	x=e; 
    	y=f;	
  	}    
 	void ShowC(void){
    	cout&lt;&lt;&quot;C.x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;C.y=&quot;&lt;&lt;y&lt;&lt;endl;
		ShowA();  //\u4ECD\u4E3A\u516C\u6709
    	ShowB();	//\u6210\u4E3A\u79C1\u6709
  	}
};
void main(void)
{	
  	C c(1,2,3,4,5,6);
	c.ShowC();
	c.ShowA ();
	c.ShowB ();  //\u975E\u6CD5\uFF0C\u79C1\u6709\u7C7B\u5916\u4E0D\u53EF\u8C03\u7528
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u521D\u59CB\u5316\u57FA\u7C7B\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u57FA\u7C7B\u6210\u5458" aria-hidden="true">#</a> \u521D\u59CB\u5316\u57FA\u7C7B\u6210\u5458</h3><ul><li><p>\u6784\u9020\u51FD\u6570\u4E0D\u80FD\u88AB\u7EE7\u627F,\u6D3E\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570\u5FC5\u987B\u8C03\u7528\u57FA\u7C7B\u7684\u6784\u9020\u51FD\u6570\u6765\u521D\u59CB\u5316\u57FA\u7C7B\u6210\u5458\u57FA\u7C7B\u5B50\u5BF9\u8C61\u3002</p></li><li><p>\u6D3E\u751F\u7C7B\u6784\u9020\u51FD\u6570\u7684\u8C03\u7528\u987A\u5E8F\u5982\u4E0B\uFF1A</p><ul><li>\u57FA\u7C7B\u7684\u6784\u9020\u51FD\u6570</li><li>\u5B50\u5BF9\u8C61\u7C7B\u7684\u6784\u9020\u51FD\u6570</li><li>\u6D3E\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570</li></ul><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class B:public A{
  	int  y; 
      A  a1;
public:
  	B(int a, int b):A(a),a1(3){
    	y=b;
  	}
 	 .......
};

A(a)\u4E3A\u57FA\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0Ca1(3)\u4E3A\u5B50\u5BF9\u8C61\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0Cy=b\u4E3A\u6D3E\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5F53\u64A4\u9500\u6D3E\u751F\u7C7B\u5BF9\u8C61\u65F6\uFF0C\u6790\u6784\u51FD\u6570\u7684\u8C03\u7528\u6B63\u597D\u76F8\u53CD</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  Base1 {	
  	int  x;
public:  
  	Base1(int a){	
    	x=a;
    	cout&lt;&lt;&quot;\u8C03\u7528\u57FA\u7C7B1\u7684\u6784\u9020\u51FD\u6570!\\n&quot;;	
  	}
	~Base1( ){	
    	cout&lt;&lt;&quot;\u8C03\u7528\u57FA\u7C7B1\u7684\u6790\u6784\u51FD\u6570!\\n&quot;;	
  	}
};
class  Base2 {	
  	int y;
public: 
  	Base2(int a){	
    	y=a;
    	cout&lt;&lt;&quot;\u8C03\u7528\u57FA\u7C7B2\u7684\u6784\u9020\u51FD\u6570!\\n&quot;;	
  	}
	~Base2( ){	
    	cout&lt;&lt;&quot;\u8C03\u7528\u57FA\u7C7B2\u7684\u6790\u6784\u51FD\u6570!\\n&quot;;	
  	}
};
class Derived:public Base2, public  Base1{
	int z;
public:  
  	Derived(int a,int b):Base1(a),Base2(20){
    	z=b;   
    	cout&lt;&lt;&quot;\u8C03\u7528\u6D3E\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570!\\n&quot;;
  	}
  	~Derived( ){
    	cout&lt;&lt;&quot;\u8C03\u7528\u6D3E\u751F\u7C7B\u7684\u6790\u6784\u51FD\u6570!\\n&quot;;
  	}
};
void  main(void)
{	
  	Derived   c(100,200);
}

\u8BE5\u7A0B\u5E8F\u7684\u8FD0\u884C\u7ED3\u679C\u4E3A
  	\u8C03\u7528\u57FA\u7C7B2\u7684\u6784\u9020\u51FD\u6570
  	\u8C03\u7528\u57FA\u7C7B1\u7684\u6784\u9020\u51FD\u6570
  	\u8C03\u7528\u6D3E\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570
  	\u8C03\u7528\u6D3E\u751F\u7C7B\u7684\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u57FA\u7C7B1\u7684\u6790\u6784\u51FD\u6570
  	\u8C03\u7528\u57FA\u7C7B2\u7684\u6790\u6784\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5F53\u6D3E\u751F\u7C7B\u4E2D\u65B0\u589E\u52A0\u7684\u6570\u636E\u6216\u51FD\u6570\u4E0E\u57FA\u7C7B\u4E2D\u539F\u6709\u7684\u540C\u540D\u65F6\uFF0C\u82E5\u4E0D\u52A0\u9650\u5236\uFF0C\u5219\u4F18\u5148\u8C03\u7528\u6D3E\u751F\u7C7B\u4E2D\u7684\u6210\u5458\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
public:	
  	int x;
	void Show(){
    	cout &lt;&lt;&quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\n&#39;;
  	}
};
class B{
public:	
  	int y;
	void Show(){
    	cout &lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&#39;\\n&#39;;
  	}
};
class C:public A,public B{
public:	
  int y; //\u7C7BB\u548C\u7C7BC\u5747\u6709y\u7684\u6210\u5458
};
void  main(void)
{  
  	C c1;	           
  	c1.x=100;
  	c1.y=200;	//\u7ED9\u6D3E\u751F\u7C7B\u4E2D\u7684y\u8D4B\u503C
  	c1.B::y=300;	//\u7ED9\u57FA\u7C7BB\u4E2D\u7684y\u8D4B\u503C
  	c1.A::Show();		
  	c1.B::Show();	//\u7528\u4F5C\u7528\u57DF\u8FD0\u7B97\u7B26\u9650\u5B9A\u8C03\u7528\u7684\u51FD\u6570
  	cout &lt;&lt;&quot;y=&quot;&lt;&lt;c1.y&lt;&lt;&#39;\\n&#39;;	//\u8F93\u51FA\u6D3E\u751F\u7C7B\u4E2D\u7684y\u503C
  	cout &lt;&lt;&quot;y=&quot;&lt;&lt;c1.B::y&lt;&lt;&#39;\\n&#39;;	//\u8F93\u51FA\u57FA\u7C7BB\u4E2D\u7684y\u503C
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u57FA\u7C7B\u4E0E\u5BF9\u8C61\u6210\u5458" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7C7B\u4E0E\u5BF9\u8C61\u6210\u5458" aria-hidden="true">#</a> \u57FA\u7C7B\u4E0E\u5BF9\u8C61\u6210\u5458</h3><ul><li><p>\u4EFB\u4E00\u57FA\u7C7B\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EA\u80FD\u7EE7\u627F\u4E00\u6B21\uFF0C\u5426\u5219\uFF0C\u4F1A\u9020\u6210\u6210\u5458\u540D\u7684\u51B2\u7A81</p></li><li><p>\u82E5\u5728\u6D3E\u751F\u7C7B\u4E2D\uFF0C\u786E\u5B9E\u8981\u6709\u4E8C\u4E2A\u4EE5\u4E0A\u57FA\u7C7B\u7684\u6210\u5458\uFF0C\u5219\u53EF\u7528\u57FA\u7C7B\u7684\u4E8C\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u6D3E\u751F\u7C7B\u7684\u6210\u5458\u3002</p></li><li><p>\u628A\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u6D3E\u751F\u7C7B\u7684\u57FA\u7C7B\u6216\u628A\u4E00\u4E2A\u7C7B\u7684\u5BF9\u8C61\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u7684\u6210\u5458\uFF0C\u5728\u4F7F\u7528\u4E0A\u662F\u6709\u533A\u522B\u7684\uFF1A\u5728\u6D3E\u751F\u7C7B\u4E2D\u53EF\u76F4\u63A5\u4F7F\u7528\u57FA\u7C7B\u7684\u6210\u5458\uFF08\u8BBF\u95EE\u6743\u9650\u5141\u8BB8\u7684\u8BDD\uFF09\uFF0C\u4F46\u8981\u4F7F\u7528\u5BF9\u8C61\u6210\u5458\u7684\u6210\u5458\u65F6\uFF0C\u5FC5\u987B\u5728\u5BF9\u8C61\u540D\u540E\u52A0\u4E0A\u6210\u5458\u8FD0\u7B97\u7B26&quot;.&quot;\u548C\u6210\u5458\u540D\u3002</p></li><li><p>\u4F8B\uFF1A\u5728\u5E73\u9762\u4E0A\u4F5C\u4E24\u4E2A\u70B9\uFF0C\u8FDE\u4E00\u76F4\u7EBF\uFF0C\u6C42\u76F4\u7EBF\u7684\u957F\u5EA6\u548C\u76F4\u7EBF\u4E2D\u70B9\u7684\u5750\u6807\u3002\u57FA\u7C7B\u4E3ADot\uFF0C\u6709\u4E24\u4E2A\u516C\u6709\u6570\u636E\u6210\u5458\uFF0C\u5373\u5E73\u9762\u4E0A\u7684\u5750\u6807\uFF08x,y)\uFF0C\u540C\u65F6\u6709\u6784\u9020\u51FD\u6570\u53CA\u6253\u5370\u51FD\u6570\u3002\u6D3E\u751F\u7C7B\u4E3ALine\uFF0C\u6709\u4E24\u4E2A\u57FA\u7C7BDot\u5BF9\u8C61\uFF0C\u5206\u522B\u5B58\u653E\u4E24\u70B9\u7684\u5750\u6807\uFF0C\u540C\u65F6\uFF0C\u4ECE\u57FA\u7C7B\u7EE7\u627F\u4E86\u4E00\u4E2ADot\u6570\u636E\uFF0C\u5B58\u653E\u76F4\u7EBF\u4E2D\u70B9\u7684\u5750\u6807\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Dot{
public:	
  	float x,y;
	Dot(float a=0,float b=0){ 
    	x=a;
    	y=b;
  	}
	void Show(void){
    	cout&lt;&lt;&quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;endl;
  	}
};
class Line:public Dot{
	Dot d1,d2;
public:	
  	Line(Dot dot1,Dot dot2):d1(dot1),d2(dot2){ 
    	x=(d1.x+d2.x)/2;
    	y=(d1.x+d2.y)/2;
  	}
 	void Showl(void){ 
    	cout&lt;&lt;&quot;Dot1:  &quot;; 
    	d1.Show(); 
    	cout&lt;&lt;&quot;Dot2:  &quot;;
    	d2.Show();
    	cout&lt;&lt;&quot;Length=&quot;&lt;&lt;sqrt((d1.x-d2.x)*(d1.x-d2.x)+(d1.y-d2.y)*(d1.y-d2.y))&lt;&lt;endl;
   	 	cout&lt;&lt;&quot;Center:  &quot;&lt;&lt;&quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;endl;	
  	}
};
void main(void)
{   
  	float a,b;
  	cout&lt;&lt;&quot;Input Dot1: \\n&quot;;  
  	cin&gt;&gt;a&gt;&gt;b;
  	Dot dot1(a,b);//\u8C03\u7528Dot\u7684\u6784\u9020\u51FD\u6570
  	cout&lt;&lt;&quot;Input Dot2: \\n&quot;;
  	cin&gt;&gt;a&gt;&gt;b;
  	Dot dot2(a,b);  
  	Line line(dot1,dot2);   
  	line.Showl();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u865A\u51FD\u6570\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u865A\u51FD\u6570\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u865A\u51FD\u6570\u7684\u5B9E\u73B0</h2><ul><li><p>\u53EF\u4EE5\u5728\u7A0B\u5E8F\u8FD0\u884C\u65F6\u901A\u8FC7\u8C03\u7528\u76F8\u540C\u7684\u51FD\u6570\u540D\u800C\u5B9E\u73B0\u4E0D\u540C\u529F\u80FD\u7684\u51FD\u6570\u79F0\u4E3A\u865A\u51FD\u6570\u3002\u5B9A\u4E49\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>virtual &lt;type&gt; FuncName(&lt;Arglist&gt;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4E00\u65E6\u628A\u57FA\u7C7B\u7684\u6210\u5458\u51FD\u6570\u5B9A\u4E49\u4E3A\u865A\u51FD\u6570\uFF0C\u7531\u57FA\u7C7B\u6240\u6D3E\u751F\u51FA\u6765\u7684\u6240\u6709\u6D3E\u751F\u7C7B\u4E2D\uFF0C\u8BE5\u51FD\u6570\u5747\u4FDD\u6301\u865A\u51FD\u6570\u7684\u7279\u6027\u3002</p></li><li><p>\u5728\u6D3E\u751F\u7C7B\u4E2D\u91CD\u65B0\u5B9A\u4E49\u57FA\u7C7B\u4E2D\u7684\u865A\u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u4E0D\u7528\u5173\u952E\u5B57virtual\u6765\u4FEE\u9970\u8FD9\u4E2A\u6210\u5458\u51FD\u6570 \u3002</p></li><li><p>\u865A\u51FD\u6570\u662F\u7528\u5173\u952E\u5B57virtual\u4FEE\u9970\u7684\u67D0\u57FA\u7C7B\u4E2D\u7684protected\u6216public\u6210\u5458\u51FD\u6570\u3002\u5B83\u53EF\u4EE5\u5728\u6D3E\u751F\u7C7B\u4E2D\u91CD\u65B0\u5B9A\u4E49\uFF0C\u4EE5\u5F62\u6210\u4E0D\u540C\u7248\u672C\u3002\u53EA\u6709\u5728\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F9D\u636E\u6307\u9488\u5177\u4F53\u6307\u5411\u54EA\u4E2A\u7C7B\u5BF9\u8C61\uFF0C\u6216\u4F9D\u636E\u5F15\u7528\u54EA\u4E2A\u7C7B\u5BF9\u8C61\uFF0C\u624D\u80FD\u786E\u5B9A\u6FC0\u6D3B\u54EA\u4E00\u4E2A\u7248\u672C\uFF0C\u5B9E\u73B0\u52A8\u6001\u805A\u675F\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
protected:	
  	int x;
public:
  	A(){	
        x =1000;
    }   
	virtual void  print(){	
    	cout &lt;&lt;&quot;x=&quot;&lt;&lt;x&lt;&lt;&quot;\\t&quot;;	
  	}//\u865A\u51FD\u6570
};
class B:public A{	
  	int y;
public:	
  	B() { 
   	 	y=2000;
  	}
	void  print(){	
    	cout &lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&quot;\\t&quot;;	
  	}//\u6D3E\u751F\u865A\u51FD\u6570
};	
class C:public A{	
  	int z;
public:	
  	C(){
    	z=3000;
  	}
	void  print(){	
    	cout &lt;&lt;&quot;z=&quot;&lt;&lt;z&lt;&lt;&quot;\\n&quot;;
  	}//\u6D3E\u751F\u865A\u51FD\u6570
};
void  main(void )
{   
  	A  a, *pa;
  	B  b;	C  c;
  	a.print();   
  	b.print();
  	c.print();  //\u9759\u6001\u8C03\u7528
  	pa=&amp;a; 
  	pa-&gt;print();//\u8C03\u7528\u7C7BA\u7684\u865A\u51FD\u6570
  	pa=&amp;b;
  	pa-&gt;print();//\u8C03\u7528\u7C7BB\u7684\u865A\u51FD\u6570
  	pa=&amp;c;   
  	pa-&gt;print();//\u8C03\u7528\u7C7BC\u7684\u865A\u51FD\u6570
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u5173\u4E8E\u865A\u51FD\u6570\u7684\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u865A\u51FD\u6570\u7684\u8BF4\u660E" aria-hidden="true">#</a> \u5173\u4E8E\u865A\u51FD\u6570\u7684\u8BF4\u660E</h3><ul><li>\u5F53\u5728\u57FA\u7C7B\u4E2D\u628A\u6210\u5458\u51FD\u6570\u5B9A\u4E49\u4E3A\u865A\u51FD\u6570\u540E\uFF0C\u5728\u5176\u6D3E\u751F\u7C7B\u4E2D\u5B9A\u4E49\u7684\u865A\u51FD\u6570\u5FC5\u987B\u4E0E\u57FA\u7C7B\u4E2D\u7684\u865A\u51FD\u6570\u540C\u540D\uFF0C\u53C2\u6570\u7684\u7C7B\u578B\u3001\u987A\u5E8F\u3001\u53C2\u6570\u7684\u4E2A\u6570\u5FC5\u987B\u4E00\u4E00\u5BF9\u5E94\uFF0C\u51FD\u6570\u7684\u8FD4\u56DE\u7684\u7C7B\u578B\u4E5F\u76F8\u540C\u3002\u82E5\u51FD\u6570\u540D\u76F8\u540C\uFF0C\u4F46\u53C2\u6570\u7684\u4E2A\u6570\u4E0D\u540C\u6216\u8005\u53C2\u6570\u7684\u7C7B\u578B\u4E0D\u540C\u65F6\uFF0C\u5219\u5C5E\u4E8E\u51FD\u6570\u7684\u91CD\u8F7D\uFF0C\u800C\u4E0D\u662F\u865A\u51FD\u6570\u3002\u82E5\u51FD\u6570\u540D\u4E0D\u540C\uFF0C\u663E\u7136\u8FD9\u662F\u4E0D\u540C\u7684\u6210\u5458\u51FD\u6570\u3002</li><li>\u5B9E\u73B0\u8FD9\u79CD\u52A8\u6001\u7684\u591A\u6001\u6027\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u57FA\u7C7B\u7C7B\u578B\u7684\u6307\u9488\u53D8\u91CF\uFF0C\u5E76\u4F7F\u8BE5\u6307\u9488\u6307\u5411\u4E0D\u540C\u7684\u6D3E\u751F\u7C7B\u5BF9\u8C61\uFF0C\u5E76\u901A\u8FC7\u8C03\u7528\u6307\u9488\u6240\u6307\u5411\u7684\u865A\u51FD\u6570\u624D\u80FD\u5B9E\u73B0\u52A8\u6001\u7684\u591A\u6001\u6027\u3002</li><li><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220530200614373.png" alt="image-20220530200614373" loading="lazy"></li><li>\u865A\u51FD\u6570\u5FC5\u987B\u662F\u7C7B\u7684\u4E00\u4E2A\u6210\u5458\u51FD\u6570\uFF0C\u4E0D\u80FD\u662F\u53CB\u5143\u51FD\u6570\uFF0C\u4E5F\u4E0D\u80FD\u662F\u9759\u6001\u7684\u6210\u5458\u51FD\u6570\u3002</li><li>\u5728\u6D3E\u751F\u7C7B\u4E2D\u6CA1\u6709\u91CD\u65B0\u5B9A\u4E49\u865A\u51FD\u6570\u65F6\uFF0C\u4E0E\u4E00\u822C\u7684\u6210\u5458\u51FD\u6570\u4E00\u6837\uFF0C\u5F53\u8C03\u7528\u8FD9\u79CD\u6D3E\u751F\u7C7B\u5BF9\u8C61\u7684\u865A\u51FD\u6570\u65F6\uFF0C\u5219\u8C03\u7528\u5176\u57FA\u7C7B\u4E2D\u7684\u865A\u51FD\u6570\u3002</li><li>\u53EF\u628A\u6790\u6784\u51FD\u6570\u5B9A\u4E49\u4E3A\u865A\u51FD\u6570\uFF0C\u4F46\u662F\uFF0C\u4E0D\u80FD\u5C06\u6784\u9020\u51FD\u6570\u5B9A\u4E49\u4E3A\u865A\u51FD\u6570\u3002</li><li>\u865A\u51FD\u6570\u4E0E\u4E00\u822C\u7684\u6210\u5458\u51FD\u6570\u76F8\u6BD4\u8F83\uFF0C\u8C03\u7528\u65F6\u7684\u6267\u884C\u901F\u5EA6\u8981\u6162\u4E00\u4E9B\u3002\u4E3A\u4E86\u5B9E\u73B0\u591A\u6001\u6027\uFF0C\u5728\u6BCF\u4E00\u4E2A\u6D3E\u751F\u7C7B\u4E2D\u5747\u8981\u4FDD\u5B58\u76F8\u5E94\u865A\u51FD\u6570\u7684\u5165\u53E3\u5730\u5740\u8868\uFF0C\u51FD\u6570\u7684\u8C03\u7528\u673A\u5236\u4E5F\u662F\u95F4\u63A5\u5B9E\u73B0\u7684\u3002\u56E0\u6B64\uFF0C\u9664\u4E86\u8981\u7F16\u5199\u4E00\u4E9B\u901A\u7528\u7684\u7A0B\u5E8F\uFF0C\u5E76\u4E00\u5B9A\u8981\u4F7F\u7528\u865A\u51FD\u6570\u624D\u80FD\u5B8C\u6210\u5176\u529F\u80FD\u8981\u6C42\u5916\uFF0C\u901A\u5E38\u4E0D\u5FC5\u4F7F\u7528\u865A\u51FD\u6570\u3002</li><li>\u4E00\u4E2A\u51FD\u6570\u5982\u679C\u88AB\u5B9A\u4E49\u6210\u865A\u51FD\u6570\uFF0C\u5219\u4E0D\u7BA1\u7ECF\u5386\u591A\u5C11\u6B21\u6D3E\u751F\uFF0C\u4ECD\u5C06\u4FDD\u6301\u5176\u865A\u7279\u6027\uFF0C\u4EE5\u5B9E\u73B0&quot;\u4E00\u4E2A\u63A5\u53E3\uFF0C\u591A\u4E2A\u5F62\u6001&quot;\u3002</li></ul><h3 id="\u865A\u51FD\u6570\u7684\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u865A\u51FD\u6570\u7684\u8BBF\u95EE" aria-hidden="true">#</a> \u865A\u51FD\u6570\u7684\u8BBF\u95EE</h3><ul><li><p>\u7528\u57FA\u6307\u9488\u8BBF\u95EE\u4E0E\u7528\u5BF9\u8C61\u540D\u8BBF\u95EE</p><ul><li>\u7528\u57FA\u6307\u9488\u8BBF\u95EE\u865A\u51FD\u6570\u65F6\uFF0C\u6307\u5411\u5176\u5B9E\u9645\u6D3E\u751F\u7C7B\u5BF9\u8C61\u91CD\u65B0\u5B9A\u4E49\u7684\u51FD\u6570\u3002\u5B9E\u73B0\u52A8\u6001\u805A\u675F\u3002</li><li>\u901A\u8FC7\u4E00\u4E2A\u5BF9\u8C61\u540D\u8BBF\u95EE\u65F6\uFF0C\u53EA\u80FD\u9759\u6001\u805A\u675F\u3002\u5373\u7531\u7F16\u8BD1\u5668\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u51B3\u5B9A\u8C03\u7528\u54EA\u4E2A\u51FD\u6570\u3002</li></ul><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Point{  
  	float x,y;
public:	
  	Point(){}
	Point(float i,float j){	
    	x=i;	
    	y=j;	
  		}
	virtual  float area(void)	{  
    	return 0.0;   
  	}//\u58F0\u660E\u4E3A\u865A\u51FD\u6570
};
const float Pi=3.14159;
class Circle:public Point{		//\u7C7BPoint\u7684\u6D3E\u751F\u7C7B
	float radius;
public:	
 	Circle(float r){	
    	radius=r;	
  	}
	float area(void)	{  
    	return Pi*radius*radius;
  	}//\u865A\u51FD\u6570\u518D\u5B9A\u4E49
};
void main(void)
{     
  	Point *pp;	     //\u57FA\u7C7B\u6307\u9488\uFF0C\u53EF\u4EE5\u5C06\u6D3E\u751F\u7C7B\u5BF9\u8C61\u7684\u5730\u5740\u8D4B\u7ED9\u57FA\u7C7B\u6307\u9488
  	Circle c(5.4321);
  	cout&lt;&lt;c.area()&lt;&lt;endl;       
  	cout&lt;&lt;c.Point::area()&lt;&lt;endl;	
  	cout&lt;&lt;c.Circle::area ()&lt;&lt;endl;
}
\u53EF\u89C1\uFF0C\u5229\u7528\u5BF9\u8C61\u540D\u8FDB\u884C\u8C03\u7528\u4E0E\u4E00\u822C\u7684\u975E\u865A\u51FD\u6570\u6CA1\u6709\u533A\u522B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\uFF1A</p><div class="language-C++ ext-C++ line-numbers-mode"><pre class="language-C++"><code>class base0{
public:	
  	void v(void){	
    	cout&lt;&lt;&quot;base0\\n&quot;;	
  	}
};
class base1:public base0{
public:	
  	virtual void v(void){  
    	cout&lt;&lt;&quot;base1\\n&quot;;  
    }
};
class A1:public base1{
public:	
  	void v(){	
    	cout&lt;&lt;&quot;A1\\n&quot;;
  	}
};
class A2:public A1{
public:	
  	void v(void){	
    	cout&lt;&lt;&quot;A2\\n&quot;;
  	}
};
class B1:private base1{
public:	
  	void v(void){
    	cout&lt;&lt;&quot;B1\\n&quot;;	
  	}
};
class B2:public B1{
public:
  	void v(void){
    	cout&lt;&lt;&quot;B2\\n&quot;;
  	}
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0</h2><h3 id="\u62BD\u8C61\u7C7B\u4E0E\u4FDD\u62A4\u7684\u6210\u5458\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u4E0E\u4FDD\u62A4\u7684\u6210\u5458\u51FD\u6570" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u4E0E\u4FDD\u62A4\u7684\u6210\u5458\u51FD\u6570</h3><ul><li><p>\u5F53\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u53EA\u80FD\u7528\u4F5C\u57FA\u7C7B\u6765\u6D3E\u751F\u51FA\u65B0\u7684\u7C7B\uFF0C\u800C\u4E0D\u80FD\u7528\u8FD9\u79CD\u7C7B\u6765\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u79F0\u8FD9\u79CD\u7C7B\u4E3A\u62BD\u8C61\u7C7B\u3002\u5F53\u5BF9\u67D0\u4E9B\u7279\u6B8A\u7684\u5BF9\u8C61\u8981\u8FDB\u884C\u5F88\u597D\u5730\u5C01\u88C5\u65F6\uFF0C\u9700\u8981\u5B9A\u4E49\u62BD\u8C61\u7C7B\u3002</p></li><li><p>\u5C06\u7C7B\u7684\u6784\u9020\u51FD\u6570\u6216\u6790\u6784\u51FD\u6570\u7684\u8BBF\u95EE\u6743\u9650\u5B9A\u4E49\u4E3A\u4FDD\u62A4\u7684\u65F6\uFF0C\u8FD9\u79CD\u7C7B\u4E3A\u62BD\u8C61\u7C7B\u3002</p></li><li><p>\u5F53\u628A\u7C7B\u4E2D\u7684\u6784\u9020\u51FD\u6570\u6216\u6790\u6784\u51FD\u6570\u8BF4\u660E\u4E3A\u79C1\u6709\u7684\u65F6\uFF0C\u6240\u5B9A\u4E49\u7684\u7C7B\u901A\u5E38\u662F\u6CA1\u6709\u4EFB\u4F55\u5B9E\u7528\u610F\u4E49\u7684\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u7528\u5B83\u6765\u4EA7\u751F\u5BF9\u8C61\uFF0C\u4E5F\u4E0D\u80FD\u7528\u5B83\u6765\u4EA7\u751F\u6D3E\u751F\u7C7B\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A {   
  	int  x, y;
protected: 
 	A(int a,int b){
    	x=a;
    	y=b;
  	}//\u57FA\u7C7B\u521D\u59CB\u5316
public:
  	void ShowA(){
    	cout&lt;&lt; &quot;x=&quot;&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;&quot;y=&quot;&lt;&lt;y&lt;&lt;&#39;\\n&#39;;
  	}
};
class B: public  A{
	int m;
  	A  a1;	//\u5728\u6D3E\u751F\u7C7B\u4E2D\u4E5F\u4E0D\u53EF\u4EE5\u5B9A\u4E49A\u7684\u5BF9\u8C61\uFF0C\u5B9E\u9645\u4E0A\u8FD8\u662F\u7C7B\u5916\u8C03\u7528
public:   
  	B(int a,int b,int c):A(a,b){//\u53EF\u4EE5\u5728\u6D3E\u751F\u7C7B\u4E2D\u8C03\u7528A\u7684\u6784\u9020\u51FD
    	m=c;
  	}
  	void Show(){      
    	cout&lt;&lt;&quot;m=&quot;&lt;&lt;m&lt;&lt;&#39;\\n&#39;;    
    	ShowA();  
  	}   
};
void  main(void)
{  
  	B b1(1,2,3); //\u53EF\u4EE5\u5B9A\u4E49\u6D3E\u751F\u7C7B\u5BF9\u8C61
  	b1.Show();
  	A  aa;	//\u4E0D\u53EF\u5B9A\u4E49A\u7684\u5BF9\u8C61          
}     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u53CB\u5143" tabindex="-1"><a class="header-anchor" href="#\u53CB\u5143" aria-hidden="true">#</a> \u53CB\u5143</h2><h3 id="\u53CB\u5143\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u53CB\u5143\u51FD\u6570" aria-hidden="true">#</a> \u53CB\u5143\u51FD\u6570</h3><ul><li><p>\u5B9A\u4E49\uFF1A\u53EF\u4EE5\u5B9A\u4E49\u5728\u7C7B\u5916\u90E8\u7684\u666E\u901A\u51FD\u6570</p></li><li><p>\u7279\u70B9\uFF1A\u7279\u70B9\u662F\u80FD\u591F\u8BBF\u95EE\u7C7B\u4E2D<strong>\u79C1\u6709\u6210\u5458\u548C\u4FDD\u62A4\u6210\u5458</strong>\uFF0C\u5373\u4E0D\u53D7\u8BBF\u95EE\u6743\u9650\u7684\u9650\u5236</p></li><li><p>\u58F0\u660E\u5173\u952E\u5B57\uFF1A<code>friend</code></p></li><li><p>\u683C\u5F0F\uFF1A\u5728\u666E\u901A\u51FD\u6570\u524D\u9762\u52A0\u4E0A\u5173\u952E\u5B57<code>friend</code>\u5373\u53EF\u58F0\u660E\u4E3A\u53CB\u5143\u51FD\u6570</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>friend  &lt;type&gt; FuncName(&lt;args&gt;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5B9E\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;
class A{
    float  x,y;
public:
    A(float a,float b){x=a; y=b;}
    float Sum(){return x+y;}
    friend float Sum(A &amp;a);
};

float Sum(A &amp;a) {
    return a.x + a.y;
}

int main()
{   A t1(4,5),t2(10,20);
    cout&lt;&lt;t1.Sum()&lt;&lt;endl;
    cout&lt;&lt;Sum(t2)&lt;&lt;endl;
    return 0;
}

// \u8FD0\u884C\u7ED3\u679C\uFF1A
9
30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u53CB\u5143\u51FD\u6570\u4E0D\u80FD\u4F7F\u7528<code>this</code>\u6307\u9488\uFF0C\u539F\u56E0\u4E5F\u5F88\u597D\u7406\u89E3\uFF0C\u56E0\u4E3A\u53CB\u5143\u51FD\u6570\u53EF\u4EE5\u5728\u7C7B\u5916\u90E8\u5B9A\u4E49\uFF0C\u5BB9\u6613\u9020\u6210<code>this</code>\u6307\u4EE3\u4E0D\u6E05\u7684\u60C5\u51B5</p></li></ul><h3 id="\u53CB\u5143\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u53CB\u5143\u7C7B" aria-hidden="true">#</a> \u53CB\u5143\u7C7B</h3><p>\u4E0E\u53CB\u5143\u51FD\u6570\u7C7B\u4F3C\uFF0C\u53CB\u5143\u7C7B\u7684\u5B9A\u4E49\uFF0C\u662F\u5728\u666E\u901A\u7C7B\u524D\u9762\u52A0\u4E0A<code>friend</code>\u5173\u952E\u5B57\u5373\u53EF</p><ul><li><p>\u683C\u5F0F\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>friend class className;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5B9E\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

const float PI = 3.1415926;

class A {
    float r;
    float h;
public:
    A(float a, float b) {
        r = a;
        h = b;
    }

    friend class B;//\u5B9A\u4E49\u7C7BB\u4E3A\u7C7BA\u7684\u53CB\u5143
};

class B {
    int number;
public:
    B(int n = 1) { number = n; }

    void Show(A &amp;a) { cout &lt;&lt; PI * a.r * a.r * a.h * number &lt;&lt; endl; }//\u6C42\u7C7BA\u7684\u67D0\u4E2A\u5BF9\u8C61*n\u7684\u4F53\u79EF
};

int main(void) {
    A a1(25, 40), a2(10, 40);
    B b1(2);
    b1.Show(a1);
    b1.Show(a2);
    return 0;
}

// \u8FD0\u884C\u7ED3\u679C\uFF1A
157080
25132.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u7684\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u53CB\u5143\u7C7B\u7684\u5DE6\u53F3\uFF0C\u5927\u6982\u5C31\u662F\u5C06\u4E00\u4E2A\u7C7B\u7684\u51FD\u6570\uFF0C\u76F4\u63A5\u7ED9\u5230\u53E6\u4E00\u4E2A\u7C7B\u4E2D\u3002</p></li></ul><h2 id="\u8FD0\u7B97\u7B26\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26\u91CD\u8F7D" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26\u91CD\u8F7D</h2><ul><li><p>\u683C\u5F0F\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>&lt;\u7C7B\u540D&gt;  operator&lt;\u8FD0\u7B97\u7B26&gt;(&lt;\u53C2\u6570\u8868&gt;) {	\u51FD\u6570\u4F53	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5B9E\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>A operator+(A &amp;a){
    A c;
    c.x = this.x + a.x;
    return c;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u8FD0\u7B97\u7B26\u91CD\u8F7D\uFF0C\u5E76\u4E0D\u80FD\u6539\u53D8\u8FD0\u7B97\u7B26\u672C\u8EAB\u7684\u4F18\u5148\u7EA7\u548C\u7ED3\u5408\u5F8B</p></li></ul><h2 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F</h2><h3 id="\u51FD\u6570\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u6A21\u677F" aria-hidden="true">#</a> \u51FD\u6570\u6A21\u677F</h3><ul><li><p>\u4F5C\u7528\uFF1A \u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u901A\u7528\u529F\u80FD\u7684\u51FD\u6570\uFF0C\u4EE5\u652F\u6301\u591A\u79CD\u4E0D\u540C\u7C7B\u578B\u7684\u5F62\u53C2\uFF0C\u8FDB\u4E00\u6B65\u7B80\u5316\u91CD\u8F7D\u51FD\u6570\u7684\u51FD\u6570\u4F53\u8BBE\u8BA1</p></li><li><p>\u683C\u5F0F\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>template &lt;typename T&gt; type funName(){...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5B9E\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

template&lt;typename T&gt; T getPrint(T temp){
    return temp;
}
int main(void) {
    string res = getPrint(&quot;printContent&quot;);
    cout &lt;&lt; res &lt;&lt; endl;
    return 0;
}

// \u8FD0\u884C\u7ED3\u679C\uFF1A

printContent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u7C7B\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u6A21\u677F" aria-hidden="true">#</a> \u7C7B\u6A21\u677F</h2><ul><li><p>\u683C\u5F0F\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code> template &lt;class T&gt; class className{...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5B9E\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>#include &quot;iostream&quot;

using namespace std;

template&lt;class T&gt; class Name{
private:
    T temp;
public:
    T getTemp();
    void setTemp(T t);
};

template&lt;class T&gt;
T Name&lt;T&gt;::getTemp() {
    return temp;
}

template&lt;class T&gt;
void Name&lt;T&gt;::setTemp(T t) {
    temp = t;
}

int main() {
    Name&lt;string&gt; name;
    name.setTemp(&quot;my Name&quot;);
    string temp = name.getTemp();
    cout &lt;&lt; temp &lt;&lt; endl;

    return 0;
}

// \u8FD0\u884C\u7ED3\u679C\uFF1A
my Name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,90);function d(s,v){return e}var u=i(l,[["render",d],["__file","\u8003\u8BD5\u91CD\u70B9.html.vue"]]);export{u as default};
