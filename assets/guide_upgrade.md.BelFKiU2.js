import{_ as a,c as t,a2 as o,o as r}from"./chunks/framework.BlSEb1TI.js";const m=JSON.parse('{"title":"框架更新","description":"","frontmatter":{},"headers":[],"relativePath":"guide/upgrade.md","filePath":"guide/upgrade.md"}'),p={name:"guide/upgrade.md"};function i(n,e,d,l,s,c){return r(),t("div",null,e[0]||(e[0]=[o('<h1 id="框架更新" tabindex="-1">框架更新 <a class="header-anchor" href="#框架更新" aria-label="Permalink to &quot;框架更新&quot;">​</a></h1><p>首先明确一点，Fantastic-admin 无法像 npm 的插件一样更新，不仅我们的框架如此，其实大部分管理系统框架都是如此。</p><p>因为本质上这类框架其实是一个初始模板，开发者会根据自身需求去修改，然后基于业务开展业务代码编写。</p><p>所以一旦下载开始使用，基本是无法更新的，你在哪个时间点开始使用，项目就固定在什么版本了。</p><blockquote><p>虽然有小部分框架选择将部分核心源码封装成 npm 依赖包，由作者全权维护，这样的处理在一定程度上有解决版本更新的问题，但弊端也很明显，开发者在二次开发上会有明显的局限，作者认为是得不偿失的。</p></blockquote><p>那有没有解决办法么？其实也有，参考如下：</p><ol><li>在基于 Fantastic-admin 做项目开发时尽量避免框架自带模块或组件的改动，或者改动地方做一个文档记录，可以清楚知道改动了哪些，这样当你需要进行新版本更新时，按照之前记录的文档可以有个大致的迁移方案，而业务代码则可以直接拷贝过去。</li><li>我们尽量在提交代码时标明每次提交改动的变更记录说明，这样你可以选择性的更新部分新代码到项目中，也就是局部更新。这种方案也是作者在公司内部项目经常使用的，因为大部分项目是无需全局更新到新版的，只需将必要的一些新特性或 bug 修复同步到原有项目中即可。</li><li>使用文件比较工具，例如 <strong>Beyond Compare</strong>，这款工具可以直接对比文件夹，可以清晰的列出文件夹内所有文件的差异，可以协助升级工作开展。</li></ol><p>当然个人建议是，做为一个中后台系统框架，稳定是第一诉求，不到万不得已不建议频繁更新，因为更新的成本挺高的，每一次大更新，都需要一次完整的回归测试，以确保功能正常运行。</p>',8)]))}const g=a(p,[["render",i]]);export{m as __pageData,g as default};