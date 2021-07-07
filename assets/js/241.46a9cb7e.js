(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{659:function(t,e,r){"use strict";r.r(e);var a=r(16),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"使用-prpl-模式应用即时加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-prpl-模式应用即时加载"}},[t._v("#")]),t._v(" 使用 PRPL 模式应用即时加载")]),t._v(" "),r("p",[t._v("PRPL 是首字母缩略词，它描述一种用于使网页加载并变得交互式，更快的模式：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("推送")]),t._v("（或"),r("strong",[t._v("预加载")]),t._v("）最重要的资源。")]),t._v(" "),r("li",[t._v("尽快"),r("strong",[t._v("渲染")]),t._v("初始路线。")]),t._v(" "),r("li",[r("strong",[t._v("预缓存")]),t._v("剩余资产。")]),t._v(" "),r("li",[r("strong",[t._v("延迟加载")]),t._v("其他路由和非关键资产。")])]),t._v(" "),r("p",[t._v("在本指南中，了解这些技术如何融合在一起，但仍然可以独立使用以实现性能结果。")]),t._v(" "),r("h2",{attrs:{id:"使用-lighthouse-审核您的页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-lighthouse-审核您的页面"}},[t._v("#")]),t._v(" 使用 Lighthouse 审核您的页面"),r("a",{attrs:{href:"https://web.dev/apply-instant-loading-with-prpl/#audit-your-page-with-lighthouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("＃"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("运行 Lighthouse 以确定与 PRPL 技术保持一致的改进机会：")]),t._v(" "),r("ol",[r("li",[t._v("按"),r("code",[t._v("Control+Shift+J")]),t._v("（或"),r("code",[t._v("Command+Option+J")]),t._v("在 Mac 上）按打开 DevTools。")]),t._v(" "),r("li",[t._v("单击"),r("strong",[t._v("审核")]),t._v("选项卡。")]),t._v(" "),r("li",[t._v("选中“ "),r("strong",[t._v("性能")]),t._v("和**渐进式 Web 应用程序”**复选框。")]),t._v(" "),r("li",[t._v("单击"),r("strong",[t._v("运行审核")]),t._v("以生成报告。")])]),t._v(" "),r("p",[t._v("有关更多信息，请参阅"),r("a",{attrs:{href:"https://web.dev/discover-performance-opportunities-with-lighthouse",target:"_blank",rel:"noopener noreferrer"}},[t._v("通过 Lighthouse 发现性能机会"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"预紧关键资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预紧关键资源"}},[t._v("#")]),t._v(" 预紧关键资源"),r("a",{attrs:{href:"https://web.dev/apply-instant-loading-with-prpl/#preload-critical-resources",target:"_blank",rel:"noopener noreferrer"}},[t._v("＃"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("如果某些资源被解析并延迟获取，那么 Lighthouse 将显示以下失败的审核：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://webdev.imgix.net/apply-instant-loading-with-prpl/preload-requests.png",alt:"Lighthouse：预加载关键请求审核"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("预加载")]),r("OutboundLink")],1),t._v(" 是声明性的获取请求，它告诉浏览器尽快请求资源。通过在 HTML 文档的开头添加``标记 "),r("code",[t._v('rel="preload"')]),t._v("来预加载关键资源：")]),t._v(" "),r("p",[t._v("``")]),t._v(" "),r("p",[t._v("浏览器为资源设置了一个更合适的优先级，以便尝试尽快下载资源而不延迟"),r("code",[t._v("window.onload")]),t._v("事件。")]),t._v(" "),r("p",[t._v("有关预加载关键资源的更多信息，请参阅“ "),r("a",{attrs:{href:"https://web.dev/preload-critical-assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("预加载关键资产”"),r("OutboundLink")],1),t._v("指南。")]),t._v(" "),r("h2",{attrs:{id:"渲染尽快初始路径"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染尽快初始路径"}},[t._v("#")]),t._v(" 渲染尽快初始路径"),r("a",{attrs:{href:"https://web.dev/apply-instant-loading-with-prpl/#render-the-initial-route-as-soon-as-possible",target:"_blank",rel:"noopener noreferrer"}},[t._v("＃"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("当某些资源延迟"),r("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/user-centric-performance-metrics#first_paint_and_first_contentful_paint",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("First Paint")]),r("OutboundLink")],1),t._v("（网站在屏幕上渲染像素的那一刻）时，Lighthouse 将发出警告：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://webdev.imgix.net/apply-instant-loading-with-prpl/eliminate-render-blocking.png",alt:"灯塔：消除渲染阻止资源审核"}})]),t._v(" "),r("p",[t._v("为了改进 First Paint，Lighthouse 建议内嵌关键 JavaScript 并使用推迟其余部分 "),r("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("async")]),r("OutboundLink")],1),t._v("，以及内嵌在上面使用的关键 CSS。通过消除往返服务器以获取渲染阻止资产的往返操作，可以提高性能。但是，从开发角度看，内联代码更难维护，并且无法由浏览器单独缓存。")]),t._v(" "),r("p",[t._v("改进 First Paint 的另一种方法是在"),r("strong",[t._v("服务器端呈现")]),t._v("页面的初始 HTML。当脚本仍在获取，解析和执行时，这将立即向用户显示内容。但是，这会大大增加 HTML 文件的有效负载，这可能会损害"),r("a",{attrs:{href:"https://web.dev/interactive",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("Time to Interactive")]),r("OutboundLink")],1),t._v("，或者损害您的应用程序变为交互式并响应用户输入所花费的时间。")]),t._v(" "),r("p",[t._v("没有任何一种正确的解决方案可以减少应用程序中的 First Paint，并且只有在收益大于应用程序的权衡因素的情况下，才应考虑内联样式和服务器端渲染。您可以通过以下资源了解有关这两个概念的更多信息。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery",target:"_blank",rel:"noopener noreferrer"}},[t._v("优化 CSS 交付"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=GQzn7XRdzxY",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是服务器端渲染？"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://webdev.imgix.net/apply-instant-loading-with-prpl/service-workers.png",alt:"与服务人员的请求/响应"}})]),t._v(" "),r("h2",{attrs:{id:"预缓存资产"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预缓存资产"}},[t._v("#")]),t._v(" 预缓存资产"),r("a",{attrs:{href:"https://web.dev/apply-instant-loading-with-prpl/#pre-cache-assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("＃"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("通过充当代理，"),r("strong",[t._v("服务工作者")]),t._v("可以直接从缓存中获取资产，而无需在重复访问时从服务器获取资产。这不仅使用户可以在脱机时使用您的应用程序，还可以缩短重复访问时的页面加载时间。")]),t._v(" "),r("p",[t._v("除非您有比库所提供的缓存要求更复杂的缓存要求，否则请使用第三方库来简化生成服务工作者的过程。例如， "),r("a",{attrs:{href:"https://web.dev/workbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("Workbox"),r("OutboundLink")],1),t._v("提供了一系列工具，使您可以创建和维护服务工作者以缓存资产。有关服务人员和脱机可靠性的更多信息，请参阅可靠性学习路径中的"),r("a",{attrs:{href:"https://web.dev/service-workers-cache-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务人员指南"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"延迟加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#延迟加载"}},[t._v("#")]),t._v(" 延迟加载"),r("a",{attrs:{href:"https://web.dev/apply-instant-loading-with-prpl/#lazy-load",target:"_blank",rel:"noopener noreferrer"}},[t._v("＃"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("如果您通过网络发送太多数据，那么 Lighthouse 将显示审核失败。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://webdev.imgix.net/apply-instant-loading-with-prpl/enormous-payloads.png",alt:"灯塔：具有巨大的网络有效负载审核"}})]),t._v(" "),r("p",[t._v("这包括所有资产类型，但是由于浏览器需要很长时间才能解析和编译它们，因此大型 JavaScript 负载特别昂贵。适当时，灯塔也会为此提供警告。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://webdev.imgix.net/apply-instant-loading-with-prpl/js-bootup-high.png",alt:"Lighthouse：JavaScript启动时间审核"}})]),t._v(" "),r("p",[t._v("要发送较小的 JavaScript 有效负载，其中仅包含用户最初加载应用程序时所需的代码，请按需拆分整个捆绑包和"),r("a",{attrs:{href:"https://web.dev/reduce-javascript-payloads-with-code-splitting",target:"_blank",rel:"noopener noreferrer"}},[t._v("延迟加载"),r("OutboundLink")],1),t._v("块。")]),t._v(" "),r("p",[t._v("在设法拆分捆绑包之后，请预加载更重要的块（请参阅“ "),r("a",{attrs:{href:"https://web.dev/preload-critical-assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("预加载重要资产”"),r("OutboundLink")],1),t._v("指南）。预加载可确保浏览器更快地获取和下载更重要的资源。")]),t._v(" "),r("p",[t._v("除了按需拆分和加载不同的 JavaScript 块外，Lighthouse 还提供了对延迟加载非关键图像的审核。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://webdev.imgix.net/apply-instant-loading-with-prpl/defer-offscreen-images.png",alt:"灯塔：推迟屏幕外图像审核"}})]),t._v(" "),r("p",[t._v("如果您在网页上加载许多图像，请在加载页面时推迟所有折叠以下或设备视口之外的"),r("a",{attrs:{href:"https://web.dev/use-lazysizes-to-lazyload-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("图像"),r("OutboundLink")],1),t._v("（请参阅"),r("a",{attrs:{href:"https://web.dev/use-lazysizes-to-lazyload-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 lazysize 延迟"),r("OutboundLink")],1),t._v("加载"),r("a",{attrs:{href:"https://web.dev/use-lazysizes-to-lazyload-images",target:"_blank",rel:"noopener noreferrer"}},[t._v("图像"),r("OutboundLink")],1),t._v("）。")]),t._v(" "),r("h2",{attrs:{id:"下一步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[t._v("#")]),t._v(" 下一步"),r("a",{attrs:{href:"https://web.dev/apply-instant-loading-with-prpl/#next-steps",target:"_blank",rel:"noopener noreferrer"}},[t._v("＃"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("现在您已经了解了 PRPL 模式背后的一些基本概念，请继续阅读本节的下一个指南以了解更多信息。重要的是要记住，并非所有技术都需要一起应用。以下任何方面的任何努力都将提供显着的性能改进。")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("推送")]),t._v("（或"),r("strong",[t._v("预加载")]),t._v("）关键资源。")]),t._v(" "),r("li",[t._v("尽快"),r("strong",[t._v("渲染")]),t._v("初始路线。")]),t._v(" "),r("li",[r("strong",[t._v("预缓存")]),t._v("剩余资产。")]),t._v(" "),r("li",[r("strong",[t._v("延迟加载")]),t._v("其他路由和非关键资产。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);