import{_ as a,c as d,j as e,a as s,G as o,a2 as n,B as p,o as l}from"./chunks/framework.BlSEb1TI.js";const u=JSON.parse('{"title":"高级 position:fixed","description":"","frontmatter":{},"headers":[],"relativePath":"guide/position-fixed.md","filePath":"guide/position-fixed.md"}'),r={name:"guide/position-fixed.md"},c={id:"高级-position-fixed",tabindex:"-1"};function h(k,i,g,x,E,f){const t=p("Badge");return l(),d("div",null,[e("h1",c,[i[0]||(i[0]=s("高级 position:fixed ")),o(t,{type:"pro",text:"专业版"}),i[1]||(i[1]=s()),i[2]||(i[2]=e("a",{class:"header-anchor",href:"#高级-position-fixed","aria-label":'Permalink to "高级 position:fixed <Badge type="pro" text="专业版" />"'},"​",-1))]),i[3]||(i[3]=n(`<p>我们都知道 <code>position:fixed</code> 是相对于浏览器窗口进行定位的，那在本框架中，要如何实现 <code>&lt;FixedActionBar /&gt;</code> 组件这种不管在任何布局场景下，始终固定在右侧内容区域内底部呢？</p><p>专业版已将这块处理封装成一个 HTML 的 data 属性了，就是 <code>data-fixed-calc-width</code> 。如果你有同样的需求，只需在最外层原本要设置 <code>position:fixed</code> 的 DOM 上增加 <code>data-fixed-calc-width</code> 即可。</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-fixed-calc-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,3))])}const y=a(r,[["render",h]]);export{u as __pageData,y as default};