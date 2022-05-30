import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{d as n}from"./app.237dacf0.js";const l={},e=n(`<h2 id="\u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u7684\u5B9A\u4E49\u53CA\u5176\u8C03\u7528</h2><ul><li><p>\u6784\u9020\u51FD\u6570\u662F\u5728\u521B\u5EFA\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528\u7ED9\u5B9A\u7684\u503C\u6765\u5C06\u5BF9\u8C61\u521D\u59CB\u5316</p></li><li><p>\u6784\u9020\u51FD\u6570\u53EF\u4EE5\u5E26\u53C2\u6570\u3001\u53EF\u4EE5\u91CD\u8F7D\uFF0C\u540C\u65F6\u6CA1\u6709\u8FD4\u56DE\u503C</p></li><li><p>\u6784\u9020\u51FD\u6570\u662F\u7C7B\u7684\u6210\u5458\u51FD\u6570\uFF0C\u7CFB\u7EDF\u7EA6\u5B9A\u6784\u9020\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\u3002\u6784\u9020\u51FD\u6570\u63D0\u4F9B\u4E86\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u4E00\u79CD\u7B80\u5355\u7684\u65B9\u6CD5\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u4F7F\u7528\u6784\u9020\u51FD\u6570\u4F7F\u9700\u8981\u6CE8\u610F\u7684\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6784\u9020\u51FD\u6570\u4F7F\u9700\u8981\u6CE8\u610F\u7684\u70B9" aria-hidden="true">#</a> \u4F7F\u7528\u6784\u9020\u51FD\u6570\u4F7F\u9700\u8981\u6CE8\u610F\u7684\u70B9</h3><ul><li><p>\u6784\u9020\u51FD\u6570\u7684\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\u3002\u6784\u9020\u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5B8C\u6210\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u4EE5\u53CA\u5176\u5B83\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\u3002</p></li><li><p>\u6784\u9020\u51FD\u6570\u7684\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\u3002\u6784\u9020\u51FD\u6570\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u5B8C\u6210\u521D\u59CB\u5316\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u4EE5\u53CA\u5176\u5B83\u7684\u521D\u59CB\u5316\u5DE5\u4F5C\u3002</p></li><li><p>\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9A\u4E49\u82E5\u5E72\u4E2A\u6784\u9020\u51FD\u6570\u3002\u5F53\u5B9A\u4E49\u591A\u4E2A\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u5FC5\u987B\u6EE1\u8DB3\u51FD\u6570\u91CD\u8F7D\u7684\u539F\u5219\u3002</p></li><li><p>\u4E00\u4E2A\u7C7B\u53EF\u4EE5\u5B9A\u4E49\u82E5\u5E72\u4E2A\u6784\u9020\u51FD\u6570\u3002\u5F53\u5B9A\u4E49\u591A\u4E2A\u6784\u9020\u51FD\u6570\u65F6\uFF0C\u5FC5\u987B\u6EE1\u8DB3\u51FD\u6570\u91CD\u8F7D\u7684\u539F\u5219\u3002</p></li><li><p>\u82E5\u5B9A\u4E49\u7684\u7C7B\u8981\u8BF4\u660E\u8BE5\u7C7B\u7684\u5BF9\u8C61\u65F6\uFF0C\u6784\u9020\u51FD\u6570\u5FC5\u987B\u662F\u516C\u6709\u7684\u6210\u5458\u51FD\u6570\u3002\u5982\u679C\u5B9A\u4E49\u7684\u7C7B\u4EC5\u7528\u4E8E\u6D3E\u751F\u5176\u5B83\u7C7B\u65F6\uFF0C\u5219\u53EF\u5C06\u6784\u9020\u51FD\u6570\u5B9A\u4E49\u4E3A\u4FDD\u62A4\u7684\u6210\u5458\u51FD\u6570\u3002</p></li><li><p>\u7531\u4E8E\u6784\u9020\u51FD\u6570\u5C5E\u4E8E\u7C7B\u7684\u6210\u5458\u51FD\u6570\uFF0C\u5B83\u5BF9\u79C1\u6709\u6570\u636E\u6210\u5458\u3001\u4FDD\u62A4\u7684\u6570\u636E\u6210\u5458\u548C\u516C\u6709\u7684\u6570\u636E\u6210\u5458\u5747\u80FD\u8FDB\u884C\u521D\u59CB\u5316\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
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
{   A  a1, a2(20.0), a3(3.0,  7.0);
      a1.Print(); 
      a2.Print();
      a3.Print();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6BCF\u4E00\u4E2A\u5BF9\u8C61\u90FD\u9700\u8981\u6709\u4E0E\u4E4B\u76F8\u5BF9\u5E94\u7684\u6784\u9020\u51FD\u6570\uFF0C\u82E5\u6784\u9020\u51FD\u6570\u4E0D\u88AB\u663E\u5F0F\u5B9A\u4E49\uFF0C\u5219\u7CFB\u7EDF\u4F1A\u5E2E\u6211\u4EEC\u8865\u4E0A\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF08\u4E0D\u4F1A\u51FA\u73B0\u5728\u4EE3\u7801\u5757\u4E2D\uFF09\uFF0C\u5373\u4E3A\u5BF9\u8C61\u5F00\u8F9F\u4E86\u7A7A\u95F4\uFF0C\u4F46\u662F\u6CA1\u6709\u521D\u59CB\u5316\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
	float  x,y;
public:
	A(){}	 
	void  Print(void) {	
    cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;  
  }
};

\u82E5\u662F\u5982\u6B64\u5B9A\u4E49\u7684\u6784\u9020\u51FD\u6570\uFF0C\u90A3\u4E48\u5728\u5B9A\u4E49\u5BF9\u8C61\u7684\u65F6\u5019\u53EA\u80FD\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A
  
  A a1,a2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u5BF9\u8C61\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u5BF9\u8C61\u5728\u4EC0\u4E48\u65F6\u5019\u4F1A\u8C03\u7528\u6784\u9020\u51FD\u6570</h3><ul><li><p>\u5BF9\u5C40\u90E8\u5BF9\u8C61\uFF0C\u9759\u6001\u5BF9\u8C61\uFF0C\u5168\u5C40\u5BF9\u8C61\u7684\u521D\u59CB\u5316\u5BF9\u4E8E\u5C40\u90E8\u5BF9\u8C61\uFF0C\u6BCF\u6B21\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u90FD\u8981\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u5BF9\u4E8E\u9759\u6001\u5BF9\u8C61\uFF0C\u662F\u5728\u9996\u6B21\u5B9A\u4E49\u5BF9\u8C61\u65F6\uFF0C\u8C03\u7528\u6784\u9020\u51FD\u6570\u7684\uFF0C\u4E14\u7531\u4E8E\u5BF9\u8C61\u4E00\u76F4\u5B58\u5728\uFF0C\u53EA\u8C03\u7528\u4E00\u6B21\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u5BF9\u4E8E\u5168\u5C40\u5BF9\u8C61\uFF0C\u662F\u5728main\u51FD\u6570\u6267\u884C\u4E4B\u524D\u8C03\u7528\u6784\u9020\u51FD\u6570\u7684\u3002</p><p>\u4F8B\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class  A{
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
A a0(100.0);//\u5B9A\u4E49\u5168\u5C40\u5BF9\u8C61
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u51FD\u6570" aria-hidden="true">#</a> \u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u51FD\u6570</h3><ul><li><p>\u5982\u679C\u6784\u9020\u51FD\u6570\u6CA1\u6709\u53C2\u6570\uFF0C\u6216\u8005\u6784\u9020\u51FD\u6570\u7684\u6240\u6709\u53C2\u6570\u90FD\u6709\u9ED8\u8BA4\u503C\uFF0C\u5C31\u53EF\u4EE5\u79F0\u5176\u4E3A\u7F3A\u7701\u6784\u9020\u51FD\u6570\u3002</p></li><li><p>\u7701\u7684\u6784\u9020\u51FD\u6570\u5E76\u4E0D\u5BF9\u6240\u4EA7\u751F\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u8D4B\u521D\u503C\uFF1B\u5373\u65B0\u4EA7\u751F\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u7684\u503C\u662F\u4E0D\u786E\u5B9A\u7684</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>  class A{
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
     x=a;	y=b;	
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6240\u6709\u7684\u5BF9\u8C61\u5728\u5B9A\u4E49\u65F6\uFF0C\u5FC5\u987B\u8C03\u7528\u6784\u9020\u51FD\u6570\uFF0C\u4E0D\u5B58\u5728\u6CA1\u6709\u6784\u9020\u51FD\u6570\u7684\u5BF9\u8C61</p></li><li><p>\u5728\u7C7B\u4E2D\uFF0C\u82E5\u5B9A\u4E49\u4E86\u6CA1\u6709\u53C2\u6570\u7684\u6784\u9020\u51FD\u6570\uFF0C\u6216\u5404\u53C2\u6570\u5747\u6709\u7F3A\u7701\u503C\u7684\u6784\u9020\u51FD\u6570\u4E5F\u79F0\u4E3A\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\uFF0C\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\u53EA\u80FD\u6709\u4E00\u4E2A\u3002</p></li><li><p>\u4EA7\u751F\u5BF9\u8C61\u65F6\uFF0C\u7CFB\u7EDF\u5FC5\u5B9A\u8981\u8C03\u7528\u6784\u9020\u51FD\u6570\u3002\u6240\u4EE5\u4EFB\u4E00\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u5FC5\u987B\u552F\u4E00\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u6790\u6784\u51FD\u6570\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u6790\u6784\u51FD\u6570\u7684\u7279\u70B9" aria-hidden="true">#</a> \u6790\u6784\u51FD\u6570\u7684\u7279\u70B9</h3><ul><li><p>\u6790\u6784\u51FD\u6570\u662F\u6210\u5458\u51FD\u6570\uFF0C\u51FD\u6570\u4F53\u53EF\u5199\u5728\u7C7B\u4F53\u5185\uFF0C\u4E5F\u53EF\u5199\u5728\u7C7B\u4F53\u5916\u3002</p></li><li><p>\u6790\u6784\u51FD\u6570\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u6210\u5458\u51FD\u6570\uFF0C\u51FD\u6570\u540D\u5FC5\u987B\u4E0E\u7C7B\u540D\u76F8\u540C\uFF0C\u5E76\u5728\u5176\u524D\u9762\u52A0\u4E0A\u5B57\u7B26&quot;~&quot;\uFF0C\u4EE5\u4FBF\u548C\u6784\u9020\u51FD\u6570\u540D\u76F8\u533A\u522B\u3002</p></li><li><p>\u6790\u6784\u51FD\u6570\u4E0D\u80FD\u5E26\u6709\u4EFB\u4F55\u53C2\u6570\uFF0C\u4E0D\u80FD\u6709\u8FD4\u56DE\u503C\uFF0C\u4E0D\u6307\u5B9A\u51FD\u6570\u7C7B\u578B\u3002</p></li><li><p>\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2A\u6790\u6784\u51FD\u6570\uFF0C\u6790\u6784\u51FD\u6570\u4E0D\u5141\u8BB8\u91CD\u8F7D\u3002</p></li><li><p>\u6790\u6784\u51FD\u6570\u662F\u5728\u64A4\u6D88\u5BF9\u8C61\u65F6\u7531\u7CFB\u7EDF\u81EA\u52A8\u8C03\u7528\u7684\u3002</p></li><li><p>\u5728\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5F53\u9047\u5230\u67D0\u4E00\u5BF9\u8C61\u7684\u751F\u5B58\u671F\u7ED3\u675F\u65F6\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u8C03\u7528\u6790\u6784\u51FD\u6570\uFF0C\u7136\u540E\u518D\u6536\u56DE\u4E3A\u5BF9\u8C61\u5206\u914D\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class A{
	float x,y;
public:
  A(float a,float b){	
    x=a;
    y=b;
    cout&lt;&lt;&quot;\u8C03\u7528\u975E\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\\n&quot;;
  }
  A()	 {  
    x=0;  
    y=0;  
    cout&lt;&lt;&quot;\u8C03\u7528\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570\\n&quot; ;
  }
  ~A() {	
    cout&lt;&lt;&quot;\u8C03\u7528\u6790\u6784\u51FD\u6570\\n&quot;;
  }
  void Print(void) {    
    cout&lt;&lt;x&lt;&lt;&#39;\\t&#39;&lt;&lt;y&lt;&lt;endl;	
  }
};
void main(void)
{	
  A  a1; 
	A  a2(3.0,30.0);
	cout&lt;&lt;&quot;\u9000\u51FA\u4E3B\u51FD\u6570\\n&quot;;
}

\u8BE5\u4EE3\u7801\u8FD0\u884C\u7684\u7ED3\u679C\u4E3A\uFF1A
  
 	\u8C03\u7528\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570
  \u8C03\u7528\u975E\u7F3A\u7701\u7684\u6784\u9020\u51FD\u6570
  \u9000\u51FA\u4E3B\u51FD\u6570
  \u8C03\u7528\u6790\u6784\u51FD\u6570
  \u8C03\u7528\u6790\u6784\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u7A0B\u5E8F\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u8C61\u5982\u679C\u7528new\u8FD0\u7B97\u7B26\u5F00\u8F9F\u4E86\u7A7A\u95F4\uFF0C\u5219\u5728\u7C7B\u4E2D\u5E94\u8BE5\u5B9A\u4E49\u4E00\u4E2A\u6790\u6784\u51FD\u6570\uFF0C\u5E76\u5728\u6790\u6784\u51FD\u6570\u4E2D\u4F7F\u7528delete\u5220\u9664\u7531new\u5206\u914D\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u56E0\u4E3A\u5728\u64A4\u6D88\u5BF9\u8C61\u65F6\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u6536\u56DE\u4E3A\u5BF9\u8C61\u6240\u5206\u914D\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u800C\u4E0D\u80FD\u81EA\u52A8\u6536\u56DE\u7531new\u5206\u914D\u7684\u52A8\u6001\u5B58\u50A8\u7A7A\u95F4\u3002</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>class Str{
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
{   cout&lt;&lt;&quot;\u8FDB\u5165main()\u51FD\u6570\\n&quot;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><hr><h3 id="\u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570" aria-hidden="true">#</a> \u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570</h3><ul><li><p>\u82E5\u5728\u7C7B\u7684\u5B9A\u4E49\u4E2D\u6CA1\u6709\u663E\u5F0F\u5730\u5B9A\u4E49\u6790\u6784\u51FD\u6570\u65F6\uFF0C\u5219\u7F16\u8BD1\u5668\u81EA\u52A8\u5730\u4EA7\u751F\u4E00\u4E2A\u7F3A\u7701\u7684\u6790\u6784\u51FD\u6570\uFF0C\u5176\u683C\u5F0F\u4E3A\uFF1A</p><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>ClassName::~ClassName() { };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4EFB\u4F55\u5BF9\u8C61\u90FD\u5FC5\u987B\u6709\u6784\u9020\u51FD\u6570\u548C\u6790\u6784\u51FD\u6570\uFF0C\u4F46\u5728\u64A4\u6D88\u5BF9\u8C61\u65F6\uFF0C\u8981\u91CA\u653E\u5BF9\u8C61\u7684\u6570\u636E\u6210\u5458\u7528new\u8FD0\u7B97\u7B26\u5206\u914D\u7684\u52A8\u6001\u7A7A\u95F4\u65F6\uFF0C\u5FC5\u987B\u663E\u5F0F\u5730\u5B9A\u4E49\u6790\u6784\u51FD\u6570\u3002</p></li></ul><hr><h2 id="\u987A\u5E8F\u7EBF\u6027\u8868\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u987A\u5E8F\u7EBF\u6027\u8868\u6982\u5FF5" aria-hidden="true">#</a> \u987A\u5E8F\u7EBF\u6027\u8868\u6982\u5FF5</h2><h2 id="\u7C7B\u7EE7\u627F\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7EE7\u627F\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u7C7B\u7EE7\u627F\u7684\u5B9E\u73B0</h2><h2 id="\u6D3E\u751F\u7C7B\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6D3E\u751F\u7C7B\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u6D3E\u751F\u7C7B\u7684\u5B9E\u73B0</h2><h2 id="\u865A\u51FD\u6570\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u865A\u51FD\u6570\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u865A\u51FD\u6570\u7684\u5B9E\u73B0</h2><h2 id="\u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B\u7684\u5B9E\u73B0</h2>`,37);function d(s,v){return e}var u=i(l,[["render",d],["__file","\u8003\u8BD5\u91CD\u70B9.html.vue"]]);export{u as default};
