import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.fa8c7f72.js";const e={},a=t('<h2 id="android\u56DB\u5927\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#android\u56DB\u5927\u7EC4\u4EF6" aria-hidden="true">#</a> Android\u56DB\u5927\u7EC4\u4EF6</h2><p>\u4F5C\u4E3AAndroid\u5F00\u53D1\u8005\uFF0C\u4E0D\u53EF\u907F\u514D\u5730\u8981\u63A5\u89E6\u5230Android\u7684\u56DB\u5927\u7EC4\u4EF6\uFF0C\u56E0\u6B64\uFF0C\u5173\u4E8E\u8FD9\u90E8\u5206\u7684\u77E5\u8BC6\u70B9\uFF0C\u4E5F\u662F\u5728\u5DE5\u4F5C\u9762\u8BD5\u4E2D\u7684\u91CD\u70B9\uFF0C\u6240\u4EE5\uFF0C\u5728<code>Android\u56DB\u5927\u7EC4\u4EF6</code>\u8FD9\u4E2A\u7CFB\u5217\u91CC\uFF0C\u6211\u6574\u7406\u4E86\u8FD9\u65B9\u9762\u7684\u91CD\u8981\u6982\u5FF5\u548C\u9AD8\u9891\u5E38\u89C1\u95EE\u9898\uFF0C\u4E00\u65B9\u9762\u7528\u4E8E\u6211\u81EA\u5DF1\u7684\u590D\u4E60\u4E0E\u603B\u7ED3\uFF0C\u53E6\u4E00\u65B9\u9762\u4E5F\u5E0C\u671B\u770B\u6587\u7684\u5C0F\u4F19\u4F34\u80FD\u6709\u6240\u6536\u83B7\u3002</p><ul><li>Android\u56DB\u5927\u7EC4\u4EF6\u5206\u522B\u662F\u4EC0\u4E48\u5462\uFF1F <ul><li>Activity\uFF08\u6D3B\u52A8\uFF09\uFF1A\u5373\u7528\u6237\u770B\u5230\u7684\u754C\u9762</li><li>Service\uFF08\u670D\u52A1\uFF09\uFF1A\u4F1A\u5728\u540E\u53F0\u4E00\u76F4\u8FD0\u884C\uFF0C\u751A\u81F3\u5728\u5E94\u7528\u9000\u51FA\u540E\uFF0C\u4ECD\u7136\u80FD\u7EE7\u7EED\u8FD0\u884C\uFF08\u6BD4\u5982\u6253\u4E0D\u6B7B\u7684\u5E7F\u544A\uFF09</li><li>Broadcast\uFF08\u5E7F\u64AD\u63A5\u6536\u5668\uFF09\uFF1A\u7528\u4E8E\u63A5\u6536\u7CFB\u7EDF\u548C\u5176\u4ED6\u5E94\u7528\u53D1\u9001\u8FC7\u6765\u7684\u5E7F\u64AD\u6D88\u606F\uFF0C\u5F53\u7136\uFF0C\u4E5F\u80FD\u5411\u7CFB\u7EDF\u8D27\u5176\u4ED6\u5E94\u7528\u53D1\u9001\u5E7F\u64AD\u4FE1\u606F</li><li>ContentProvider\uFF08\u5185\u5BB9\u63D0\u4F9B\u8005\uFF09\uFF1A\u5E94\u7528\u4E4B\u95F4\u6570\u636E\u4EA4\u4E92\u7684\u6865\u6881\uFF0C\u4E3A\u6570\u636E\u63D0\u4F9B\u4E86\u4F9B\u5916\u754C\u8BBF\u95EE\u7684\u5404\u79CD\u63A5\u53E3</li></ul></li></ul><h2 id="activity" tabindex="-1"><a class="header-anchor" href="#activity" aria-hidden="true">#</a> Activity</h2><p>\u5173\u4E8EActivity\u7684\u4E3B\u8981\u5185\u5BB9\uFF0C\u4E3B\u8981\u5C31\u56F4\u7ED5\u4E09\u4E2A\u65B9\u9762\u8F6C\uFF0C\u5206\u522B\u4E3A\uFF1A\u751F\u547D\u5468\u671F\u3001\u542F\u52A8\u6A21\u5F0F\u3001\u788E\u7247\uFF08Fragment\uFF09</p><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><ul><li>onCreate()\uFF1A\u5728\u7CFB\u7EDF\u9996\u6B21\u521B\u5EFA Activity \u65F6\u89E6\u53D1\uFF0C\u8BE5\u56DE\u8C03\u7ED3\u675F\u540E\uFF0C Activity \u8FDB\u5165\u201C\u5DF2\u5F00\u59CB\u201D\uFF0C\u72B6\u6001\uFF0C\u4E4B\u540E\u4F1A\u8C03\u7528 <code>onStart()</code> \u65B9\u6CD5</li><li>onStart()\uFF1A\u5F53 Activity \u8FDB\u5165\u201C\u5DF2\u5F00\u59CB\u201D\u72B6\u6001\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u8C03\u7528\u6B64\u56DE\u8C03\u3002\u53EF\u4EE5\u5728\u6B64\u4E3A Activity \u8FDB\u5165\u524D\u53F0\u5E76\u652F\u6301\u4E92\u52A8\u505A\u51C6\u5907\uFF0C\u5373\u8BA9 Activity \u7531\u4E0D\u53EF\u89C1\u72B6\u6001\u53D8\u4E3A\u53EF\u89C1\u72B6\u6001\u3002\u4F8B\u5982\uFF0C\u5E94\u7528\u901A\u8FC7\u6B64\u65B9\u6CD5\u6765\u521D\u59CB\u5316\u7EF4\u62A4\u754C\u9762\u7684\u4EE3\u7801\u3002\u56DE\u8C03\u7ED3\u675F\u4E4B\u540E\uFF0CActivity \u8FDB\u5165\u201C\u5DF2\u6062\u590D\u201D \u72B6\u6001\uFF0C\u4E4B\u540E\u4F1A\u8C03\u7528 <code>onResume()</code></li><li>onResume()\uFF1A\u5904\u4E8E\u8FD0\u884C\u72B6\u6001\u65F6\u8C03\u7528\uFF0C\u7528\u6237\u53EF\u8FDB\u884C\u89E6\u78B0\u70B9\u51FB\u9875\u9762\u4E0A\u7684\u5404\u79CD\u7EC4\u4EF6\uFF0C\u4ECE\u800C\u4E0E\u6D3B\u52A8\u8FDB\u884C\u4EA4\u4E92\uFF0C\u76F4\u5230 Activity \u5931\u53BB\u7126\u70B9</li><li>onPause()\uFF1A\u5F53\u524D Activity \u53BB\u542F\u52A8\u5176\u4ED6\u6D3B\u52A8\u65F6\u8C03\u7528</li><li>onStop()\uFF1AActivity \u5904\u4E8E\u5B8C\u5168\u4E0D\u53EF\u89C1\u72B6\u6001\u5C31\u8C03\u7528</li><li>onDestroy()\uFF1AActivity \u9500\u6BC1\u524D\u8C03\u7528\uFF0C\u8C03\u7528\u4E4B\u540E Activity \u5C31\u4F1A\u88AB\u9500\u6BC1</li><li>onRestart()\uFF1A\u5F53 Activity \u91CD\u65B0\u88AB\u542F\u52A8\u65F6\u8C03\u7528\uFF0C\u7531\u505C\u6B62\u72B6\u6001\u53D8\u4E3A\u53EF\u89C1\u72B6\u6001\uFF0C\u7136\u540E\u7EE7\u7EED\u8FD0\u884C</li></ul><p>\u4E0B\u9762\u7ED9\u51FA\u8FDB\u7A0B\u72B6\u6001\u3001Activity \u72B6\u6001\u4EE5\u53CA\u7CFB\u7EDF\u7EC8\u6B62\u8FDB\u7A0B\u7684\u53EF\u80FD\u6027\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/image-20220625124027142.png" alt="image-20220625124027142" loading="lazy"></p><p>\u4E0B\u9762\u662F\u5404\u751F\u547D\u5468\u671F\u4E4B\u95F4\u7684\u6D41\u7A0B\u56FE\uFF08\u6765\u81EA\u5B98\u65B9\uFF09\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/Activity\u751F\u547D\u5468\u671F.png" alt="Activity\u751F\u547D\u5468\u671F" loading="lazy"></p><h2 id="\u542F\u52A8\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u6A21\u5F0F" aria-hidden="true">#</a> \u542F\u52A8\u6A21\u5F0F</h2><h3 id="\u8BBE\u7F6E\u542F\u52A8\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u542F\u52A8\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u7F6E\u542F\u52A8\u6A21\u5F0F</h3><ul><li>\u7B2C\u4E00\u79CD\u65B9\u6CD5\uFF1A\u5728\u914D\u7F6E\u6587\u4EF6 AndroidManifest.xml \u91CC\u7528 android:launchMode \u6765\u6307\u5B9A\uFF0C\u5206\u522B\u53EF\u4EE5\u6307\u5B9A\u4E3A <code>standard</code>\u3001<code>singleTop</code>\u3001<code>singleTask</code>\u548C<code>singleInstance</code></li><li>\u7B2C\u4E8C\u79CD\u65B9\u6CD5\uFF1A\u5728 Intent \u4E2D\u8BBE\u7F6E\u6807\u8BB0 flag \u6765\u6307\u5B9A\u542F\u52A8\u6A21\u5F0F</li></ul><h3 id="standard" tabindex="-1"><a class="header-anchor" href="#standard" aria-hidden="true">#</a> standard</h3><p>\u9ED8\u8BA4\u7684\u542F\u52A8\u6A21\u5F0F\uFF0C\u6BCF\u6B21\u542F\u52A8\u4E00\u4E2A\u6D3B\u52A8\u65F6\uFF0C\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u8FD0\u884C\u5728\u542F\u52A8\u8BE5\u6D3B\u52A8\u7684\u6D3B\u52A8\u6808\u7684\u6808\u9876</p><h3 id="singletop" tabindex="-1"><a class="header-anchor" href="#singletop" aria-hidden="true">#</a> singleTop</h3><p>\u5982\u679C\u4EFB\u52A1\u6808\u6808\u9876\u4E2D\u5B58\u5728\u8BE5 Activity \u5B9E\u4F8B\uFF0C\u5219\u76F4\u63A5\u590D\u7528\uFF0C\u5E76\u4F1A\u8C03\u7528 <code>onNewIntent()</code>\u65B9\u6CD5\uFF1B\u5982\u679C\u6CA1\u6709\u5219\u4F1A\u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\u5E76\u4E14\u5165\u6808\u5230\u6808\u9876\u3002</p><h3 id="singletask" tabindex="-1"><a class="header-anchor" href="#singletask" aria-hidden="true">#</a> singleTask</h3><p>\u4E0E singleTop \u4E0D\u540C\uFF0C\u8BE5\u542F\u52A8\u65B9\u5F0F\uFF0C\u53EA\u8981\u4EFB\u52A1\u6808\u4E2D\u5B58\u5728\u8BE5 Activity \u5B9E\u4F8B\uFF0C\u5C31\u4F1A\u5C06\u8BE5\u76EE\u6807 Activity \u4E0A\u65B9\u7684\u6240\u6709\u5B9E\u4F8B\u51FA\u6808\uFF0C\u7136\u540E\u590D\u7528\u6808\u4E2D\u7684\u8BE5\u5B9E\u4F8B\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u76F4\u63A5\u521B\u5EFA\uFF0C\u5E76\u52A0\u5165\u6808\u9876\u3002</p><h3 id="singleinstance" tabindex="-1"><a class="header-anchor" href="#singleinstance" aria-hidden="true">#</a> singleInstance</h3><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4EFB\u52A1\u6808\u6765\u4E13\u95E8\u5B58\u50A8\u548C\u7BA1\u7406\u8BE5 Activity \u7684\u4E8B\u52A1\uFF0C\u5E76\u4E14\u4F1A\u786E\u4FDD\u8BE5 Activity \u5177\u6709\u5168\u5C40\u552F\u4E00\u6027\uFF0C\u4E5F\u5C31\u662F\u4EFB\u4F55\u5E94\u7528\u53EA\u8981\u542F\u52A8\u8BE5 Activity\uFF0C\u7528\u7684\u90FD\u662F\u8BE5\u5B9E\u4F8B</p><h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2><ul><li><p>\u4E0E Activity \u7C7B\u4F3C\uFF0C\u4E5F\u53EF\u4EE5\u663E\u793A\u5404\u79CD\u7EC4\u4EF6\u4E0E\u5E03\u5C40\u7684\u9875\u9762\uFF0C\u4E5F\u80FD\u8FDB\u884C\u5D4C\u5957\uFF0C\u4F7F\u7528\u8D77\u6765\u7075\u6D3B\u6027\u66F4\u9AD8\uFF0C\u4FBF\u4E8E\u590D\u7528\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u4E3A\u7B28\u91CD\u7684 Activity \u5F15\u5165<strong>\u6A21\u5757\u5316\u548C\u53EF\u590D\u7528\u6027</strong>\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u7F29\u5C0F\u7248\u7684 Activity</p></li><li><p>Fragment \u7684\u751F\u547D\u5468\u671F\u4E0E Activity \u7C7B\u4F3C\uFF0C\u4E0B\u9762\u7ED9\u51FA\u5176\u57FA\u672C\u6D41\u7A0B\u56FE\uFF1A</p><p><img src="https://raw.githubusercontent.com/CoderWDD/myImages/main/blog_images/fragmentLifecycle.png" alt="fragmentLifecycle" loading="lazy"></p></li></ul><h2 id="\u9762\u7ECF" tabindex="-1"><a class="header-anchor" href="#\u9762\u7ECF" aria-hidden="true">#</a> \u9762\u7ECF</h2><ul><li>\u5B8C\u6574\u7684\u751F\u547D\u5468\u671F\u6D41\u7A0B\u53CA\u5176\u4F5C\u7528\uFF1A <ul><li>\u6D41\u7A0B\uFF1A<code>onCreate()-&gt;onStart()-&gt;onResume()-&gt;onPause()-&gt;onStop()-&gt;onDestroy()</code></li><li>\u4F5C\u7528\uFF1A\u5C06\u672C\u6587\u4E0A\u65B9\u5404\u751F\u547D\u5468\u671F\u65B9\u6CD5\u7684\u63CF\u8FF0</li></ul></li><li>\u5982\u679C\u4E00\u4E2A Activity \u6B63\u5728\u8FD0\u884C\uFF0C\u8FD9\u65F6\u4ECE\u524D\u53F0\u5207\u6362\u5230\u540E\u53F0\uFF0C\u7136\u540E\u518D\u5207\u56DE\u5230\u524D\u53F0\uFF0C\u6B64\u8FC7\u7A0B\u4E2D Activity \u7684\u751F\u547D\u5468\u671F\u662F\u600E\u4E48\u6837\u7684\uFF1F <ul><li>\u4ECE\u88AB\u521B\u5EFA\u5230\u6B63\u5728\u8FD0\u884C\uFF0C\u4F9D\u6B21\u8C03\u7528\u4E86 onCreate()\u3001onStart() \u548C onResume() \u65B9\u6CD5</li><li>\u4ECE\u524D\u53F0\u5207\u6362\u5230\u540E\u53F0\uFF0C\u4F9D\u6B21\u8C03\u7528\u4E86 onPause()\u3001onStop()\u65B9\u6CD5</li><li>\u53C8\u4ECE\u540E\u53F0\u5207\u56DE\u524D\u53F0\uFF0C\u4F9D\u6B21\u8C03\u7528\u4E86 onRestart()\u3001onStart() \u548C onResume() \u65B9\u6CD5</li></ul></li><li>Activity \u5728\u6A2A\u7AD6\u5C4F\u5207\u6362\u7684\u65F6\u5019\u7684\u751F\u547D\u5468\u671F\u662F\u600E\u4E48\u6837\u7684\uFF1F <ul><li>\u5F53\u4E0D\u8BBE\u7F6E configChanges \u5C5E\u6027\u65F6\uFF0CActivity \u5728\u5207\u6362\u6A2A\u7AD6\u5C4F\u7684\u65F6\u5019\uFF0C\u4F1A\u6267\u884C\u5404\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570</li><li>\u5F53\u4E3A Activity \u8BBE\u7F6E android:configChanges=&quot;orientation&quot;\u540E\uFF0C\u518D\u8FDB\u884C\u6A2A\u7AD6\u5C4F\u5207\u6362\u7684\u65F6\u5019\uFF0CActivity \u4E0D\u518D\u6267\u884C\u751F\u547D\u5468\u671F\u5176\u4ED6\u65B9\u6CD5\uFF0C\u6A2A\u7AD6\u5C4F\u5404\u6267\u884C\u4E00\u6B21 onConfigurationChanged() \u65B9\u6CD5</li><li>\u5F53\u4E3A Activity \u8BBE\u7F6E android:configChanges=&quot;orientation|screenSize&quot;\u540E\uFF0C\u8DDF\u8BBE\u7F6E&quot;orientation&quot;\u7684\u6548\u679C\u4E00\u6837</li></ul></li><li>onNewIntent() \u4E0E 4 \u79CD\u542F\u52A8\u6A21\u5F0F\u6709\u4EC0\u4E48\u6837\u7684\u5173\u7CFB\uFF1F <ul><li>standard\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u6B21\u542F\u52A8 Activity\uFF0C\u90FD\u4F1A\u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\uFF0C\u4F46\u4E0D\u4F1A\u8C03\u7528 onNewInent()</li><li>singleTop\uFF1A\u5728\u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u6BCF\u6B21\u7684 Activity \u53EA\u8981\u5728\u6808\u9876\uFF0C\u5C31\u4F1A\u590D\u7528\u8BE5\u5B9E\u4F8B\uFF0C\u7136\u540E\u5C31\u4F1A\u89E6\u53D1 onNewIntent()\uFF0C\u5982\u679C\u4EFB\u52A1\u6808\u4E0D\u5B58\u5728\u8BE5\u5B9E\u4F8B\uFF0C\u5C31\u4F1A\u521B\u5EFA\u65B0\u5B9E\u4F8B\uFF0C\u4F46\u6B64\u65F6\u5C31\u4E0D\u4F1A\u8C03\u7528 onNewIntent() \u65B9\u6CD5\u4E86</li><li>singleTask\uFF1A\u5728\u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u542F\u52A8\u7684 Activity \u53EA\u8981\u5728\u4EFB\u52A1\u6808\u4E2D\uFF0C\u5C31\u4F1A\u88AB\u590D\u7528\uFF0C\u5E76\u4F1A\u89E6\u53D1 onNewIntent() \uFF0C\u5982\u679C\u4EFB\u52A1\u6808\u4E2D\u4E0D\u5B58\u5728\u8BE5\u5B9E\u4F8B\uFF0C\u5C31\u4F1A\u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\uFF0C\u6B64\u65F6\u5C31\u4E0D\u4F1A\u8C03\u7528 onNewIntent()</li><li>singleInstance\uFF1A\u5728\u8BE5\u6A21\u5F0F\u4E0B\uFF0C\u542F\u52A8\u7684 Activity \u53EA\u8981\u4EFB\u52A1\u6808\u5B58\u5728\u8BE5\u5B9E\u4F8B\uFF0C\u5C31\u4F1A\u88AB\u590D\u7528\uFF0C\u5E76\u89E6\u53D1 onNewIntent() \u65B9\u6CD5</li><li>\u4ECE\u4E0A\u9762\u7684\u63CF\u8FF0\u53EF\u4EE5\u770B\u51FA\uFF0ConNewIntent</li></ul></li></ul>',26);function n(l,o){return a}var c=i(e,[["render",n],["__file","Activity.html.vue"]]);export{c as default};
