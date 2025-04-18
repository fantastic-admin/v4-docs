import{_ as h,c as p,j as i,a,G as n,a2 as l,B as e,o as k}from"./chunks/framework.BlSEb1TI.js";const d="/v4-docs/menu-mode-head.png",g="/v4-docs/menu-mode-side.png",r="/v4-docs/menu-mode-single.png",E="/v4-docs/menu-mode-only-side.png",o="/v4-docs/menu-mode-only-head.png",y="/v4-docs/menu-mode-side-panel.png",F="/v4-docs/menu-mode-head-panel.png",u="/v4-docs/layout_1.gif",c="/v4-docs/layout_2.gif",m="/v4-docs/layout_3.gif",b="/v4-docs/layout_4.gif",N=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"guide/layout.md","filePath":"guide/layout.md"}'),v={name:"guide/layout.md"},C={id:"侧边栏精简模式",tabindex:"-1"},B={id:"顶部精简模式",tabindex:"-1"},x={id:"侧边栏面板模式",tabindex:"-1"},A={id:"顶部面板模式",tabindex:"-1"},D={id:"页宽模式",tabindex:"-1"};function f(S,s,q,P,z,M){const t=e("Badge");return k(),p("div",null,[s[26]||(s[26]=i("h1",{id:"布局",tabindex:"-1"},[a("布局 "),i("a",{class:"header-anchor",href:"#布局","aria-label":'Permalink to "布局"'},"​")],-1)),s[27]||(s[27]=i("p",null,[a("通过 7 种导航栏模式和 4 种页宽模式的组合搭配，可实现 28 种布局结构，再搭配默认提供的 6 款主题，"),i("strong",null,"即可实现上百种界面风格"),a("。")],-1)),s[28]||(s[28]=i("h2",{id:"导航栏模式",tabindex:"-1"},[a("导航栏模式 "),i("a",{class:"header-anchor",href:"#导航栏模式","aria-label":'Permalink to "导航栏模式"'},"​")],-1)),s[29]||(s[29]=i("p",null,"在应用配置中设置，可实现 7 种导航栏模式：",-1)),i("ul",null,[s[6]||(s[6]=i("li",null,"顶部模式",-1)),s[7]||(s[7]=i("li",null,"侧边栏模式（含主导航）",-1)),s[8]||(s[8]=i("li",null,"侧边栏模式（无主导航）",-1)),i("li",null,[s[0]||(s[0]=a("侧边栏精简模式 ")),n(t,{type:"pro",text:"专业版"})]),i("li",null,[s[1]||(s[1]=a("顶部精简模式 ")),n(t,{type:"pro",text:"专业版"})]),i("li",null,[s[2]||(s[2]=a("侧边栏面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[3]||(s[3]=a()),n(t,{type:"tip",text:"v4.9.0 新增"})]),i("li",null,[s[4]||(s[4]=a("顶部面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[5]||(s[5]=a()),n(t,{type:"tip",text:"v4.9.0 新增"})])]),s[30]||(s[30]=l('<h3 id="顶部模式" tabindex="-1">顶部模式 <a class="header-anchor" href="#顶部模式" aria-label="Permalink to &quot;顶部模式&quot;">​</a></h3><p><img src="'+d+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;head&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.9.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="侧边栏模式-含主导航" tabindex="-1">侧边栏模式（含主导航） <a class="header-anchor" href="#侧边栏模式-含主导航" aria-label="Permalink to &quot;侧边栏模式（含主导航）&quot;">​</a></h3><p><img src="`+g+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;side&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.9.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="侧边栏模式-无主导航" tabindex="-1">侧边栏模式（无主导航） <a class="header-anchor" href="#侧边栏模式-无主导航" aria-label="Permalink to &quot;侧边栏模式（无主导航）&quot;">​</a></h3><p><img src="`+r+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;single&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.9.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9)),i("h3",C,[s[9]||(s[9]=a("侧边栏精简模式 ")),n(t,{type:"pro",text:"专业版"}),s[10]||(s[10]=a()),s[11]||(s[11]=i("a",{class:"header-anchor",href:"#侧边栏精简模式","aria-label":'Permalink to "侧边栏精简模式 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[31]||(s[31]=l('<p><img src="'+E+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;only-side&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.9.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h3",B,[s[12]||(s[12]=a("顶部精简模式 ")),n(t,{type:"pro",text:"专业版"}),s[13]||(s[13]=a()),s[14]||(s[14]=i("a",{class:"header-anchor",href:"#顶部精简模式","aria-label":'Permalink to "顶部精简模式 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[32]||(s[32]=l('<p><img src="'+o+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;only-head&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// v4.9.0 之前版本为 menuMode</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h3",x,[s[15]||(s[15]=a("侧边栏面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[16]||(s[16]=a()),n(t,{type:"tip",text:"v4.9.0 新增"}),s[17]||(s[17]=a()),s[18]||(s[18]=i("a",{class:"header-anchor",href:"#侧边栏面板模式","aria-label":'Permalink to "侧边栏面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.9.0 新增" />"'},"​",-1))]),s[33]||(s[33]=l('<p><img src="'+y+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;side-panel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h3",A,[s[19]||(s[19]=a("顶部面板模式 ")),n(t,{type:"pro",text:"专业版"}),s[20]||(s[20]=a()),n(t,{type:"tip",text:"v4.9.0 新增"}),s[21]||(s[21]=a()),s[22]||(s[22]=i("a",{class:"header-anchor",href:"#顶部面板模式","aria-label":'Permalink to "顶部面板模式 <Badge type="pro" text="专业版" /> <Badge type="tip" text="v4.9.0 新增" />"'},"​",-1))]),s[34]||(s[34]=l('<p><img src="'+F+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  menu: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;head-panel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2)),i("h2",D,[s[23]||(s[23]=a("页宽模式 ")),n(t,{type:"pro",text:"专业版"}),s[24]||(s[24]=a()),s[25]||(s[25]=i("a",{class:"header-anchor",href:"#页宽模式","aria-label":'Permalink to "页宽模式 <Badge type="pro" text="专业版" />"'},"​",-1))]),s[35]||(s[35]=l('<p>在应用配置中设置，可实现 4 种基于页宽(页面宽度)模式：</p><ul><li>自适应</li><li>自适应（有最小宽度）</li><li>定宽居中</li><li>定宽居中（有最大宽度）</li></ul><h3 id="自适应" tabindex="-1">自适应 <a class="header-anchor" href="#自适应" aria-label="Permalink to &quot;自适应&quot;">​</a></h3><p><img src="'+u+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    widthMode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adaption&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="自适应-有最小宽度" tabindex="-1">自适应（有最小宽度） <a class="header-anchor" href="#自适应-有最小宽度" aria-label="Permalink to &quot;自适应（有最小宽度）&quot;">​</a></h3><p><img src="`+c+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    widthMode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;adaption-min-width&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="定宽居中" tabindex="-1">定宽居中 <a class="header-anchor" href="#定宽居中" aria-label="Permalink to &quot;定宽居中&quot;">​</a></h3><p><img src="`+m+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    widthMode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;center&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="定宽居中-有最大宽度" tabindex="-1">定宽居中（有最大宽度） <a class="header-anchor" href="#定宽居中-有最大宽度" aria-label="Permalink to &quot;定宽居中（有最大宽度）&quot;">​</a></h3><p><img src="`+b+`" alt="" data-zoomable=""></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    widthMode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;center-max-width&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>布局相关的变量存放在 <code>/src/assets/styles/globals.css</code> 文件中（注意看注释），均为 CSS 变量。</p><h2 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h2><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> globalSettings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">all</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  layout: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enableMobileAdaptation: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>开启移动端支持后，当页面宽度小于 <code>992px</code> 时会切换为移动端布局显示，移动端下不支持设置框架布局，以及部分不支持移动端的操作按钮也会进行隐藏，例如“全屏”按钮。</p><p>虽然框架本身兼容移动端，但由于后台系统在开发时可能会引用各类第三方插件，这部分的兼容性需要开发者自行适配。</p><div class="tip custom-block"><p class="custom-block-title">建议</p><p>由于后台系统属于生产效率工具，而移动端天生不适合复杂的操作，尤其是遇到一些比较复杂的表单，在移动端上操作是极其“恼火”的。</p><p>依据作者的开发经验，建议移动端后台可以独立开发一套，在功能上进行删减，保留轻量级的管理操作。</p><p>如果打算独立开发一套移动端的系统，建议使用 <a href="https://fantastic-mobile.hurui.me/" target="_blank" rel="noreferrer">Fantastic-mobile</a>。</p></div>`,22))])}const V=h(v,[["render",f]]);export{N as __pageData,V as default};
