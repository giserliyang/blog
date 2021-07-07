(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{620:function(t,e,a){"use strict";a.r(e);var l=a(16),r=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网页存储概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页存储概览"}},[t._v("#")]),t._v(" 网页存储概览")]),t._v(" "),a("p",[t._v("选择正确的存储机制对于本地设备存储和基于云的服务器存储都非常重要。 良好的存储引擎可确保以可靠的方式保存信息，并减少带宽和提升响应能力。正确的存储缓存策略是实现离线移动网页体验的核心构建基块。")]),t._v(" "),a("p",[t._v("本文为评估存储 API 和服务提供简要的基础，然后，我们将提供一个比较表格和一些通用的指南。近期，为方便您更深入地理解选择的存储主题，我们计划增加相关资源。")]),t._v(" "),a("h2",{attrs:{id:"存储分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储分类"}},[t._v("#")]),t._v(" 存储分类")]),t._v(" "),a("p",[t._v("首先，我们了解一下分析网络应用的数据存储时可以依据的一些标准。 稍后，我们将使用此框架枚举和评估为网页开发者提供的许多存储选项。")]),t._v(" "),a("h3",{attrs:{id:"数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),a("p",[t._v("用于存储数据单元的模型可确定在内部组织数据的方式，这会影响存储的易用性、成本和性能以及检索请求。")]),t._v(" "),a("ul",[a("li",[t._v("**结构化：**在具有预定义字段的表格中存储数据，与典型的基于 SQL 的数据库管理系统一样，非常适用于灵活的动态查询，其中所有查询类型可能不是一个可知的先验。浏览器中的 IndexedDB 是结构化数据存储区的一个突出例子。")]),t._v(" "),a("li",[a("strong",[t._v("键/值：")]),t._v(" 键/值数据存储区和相关的 NoSQL 数据库让您可以存储和检索按唯一键值索引的非结构化的数据。键/值数据存储区与哈希值表格相似，它们都允许在固定时间访问已编入索引的不透明数据。键/值数据存储区的突出例子包括浏览器中的 Cache API 以及服务器上的 Apache Cassandra。")]),t._v(" "),a("li",[a("strong",[t._v("字节流：")]),t._v(" 这个简单模型以可变长度、不透明的字节字符串形式存储数据，将任意形式的内部组织置于应用层。此模型特别适合文件系统和其他按层次结构组织的数据块。 字节流数据存储区的突出例子包括文件系统和云端存储服务。")])]),t._v(" "),a("h3",{attrs:{id:"持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[t._v("#")]),t._v(" 持久化")]),t._v(" "),a("p",[t._v("网络应用的存储方法，可根据使数据持久化的作用域进行分析。")]),t._v(" "),a("ul",[a("li",[t._v("**会话持久化：**仅在一个网页会话或浏览器标签处于活动状态时保留此类别中的数据。 Session Storage API 是采用会话持久化的存储机制的一个例子。")]),t._v(" "),a("li",[a("strong",[t._v("设备持久化：")]),t._v(" 在特定设备中跨会话和浏览器标签/窗口保留此类别中的数据。 Cache API 是采用设备持久化的存储机制的一个例子。")]),t._v(" "),a("li",[t._v("**全局持久化：**跨会话和设备保留此类别中的数据。 因此，它是最可靠的数据持久化形式。Google 云端存储是采用全局持久化的存储机制的一个例子。")])]),t._v(" "),a("h3",{attrs:{id:"浏览器支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[t._v("#")]),t._v(" 浏览器支持")]),t._v(" "),a("p",[t._v("开发者应选择一个最适合他们的问题域的 API；不过，开发者还应考虑到标准化和完全确立的 API 优于自定义或专有界面这一事实，因为这些 API 往往使用寿命更长并能够得到更广泛的支持。开发者还会享有更广泛的知识库和更丰富的开发者生态系统。")]),t._v(" "),a("h3",{attrs:{id:"事务处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务处理"}},[t._v("#")]),t._v(" 事务处理")]),t._v(" "),a("p",[t._v("通常，它对于是否能以原子方式成功收集相关存储操作非常重要。 数据库管理系统在传统上使用事务处理模型支持此功能，其中可能会将相关更新组合到任意单元。尽管不是始终需要，但在某些问题域，它是一个便捷的功能，并且有时候非常重要。")]),t._v(" "),a("h3",{attrs:{id:"同步-异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步-异步"}},[t._v("#")]),t._v(" 同步/异步")]),t._v(" "),a("p",[t._v("由于存储或检索请求会阻止当前活动的线程直到请求已完成，因此，某些存储 API 是同步的。 这在网页浏览器中是特别沉重的负担，其中存储请求会与 UI 共享主线程。出于效率和性能的考虑，将异步存储 API 作为首选。")]),t._v(" "),a("h2",{attrs:{id:"比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较"}},[t._v("#")]),t._v(" 比较")]),t._v(" "),a("p",[t._v("在此部分中，我们看一下网页开发者当前可用的 API，并根据上述标准比较它们的异同。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("API")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("数据模型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("持久化")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("浏览器支持")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("事务处理")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("同步/异步")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/FileSystem",target:"_blank",rel:"noopener noreferrer"}},[t._v("File system"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("字节流")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://caniuse.com/#feat=filesystem",target:"_blank",rel:"noopener noreferrer"}},[t._v("52%"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("异步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Storage"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键/值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://caniuse.com/#feat=namevalue-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("93%"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("同步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session Storage"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键/值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("会话")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://caniuse.com/#feat=namevalue-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("93%"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("同步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("结构化")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("同步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.w3.org/TR/webdatabase/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSQL"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("结构化")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://caniuse.com/#feat=sql-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("77%"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("异步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cache"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键/值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://caniuse.com/#feat=serviceworkers",target:"_blank",rel:"noopener noreferrer"}},[t._v("60%"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("异步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("IndexedDB"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("混合")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://caniuse.com/#feat=indexeddb",target:"_blank",rel:"noopener noreferrer"}},[t._v("83%"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("异步")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://cloud.google.com/storage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cloud storage"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("字节流")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("全局")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("两者皆有")])])])]),t._v(" "),a("p",[t._v("如上所述，最好选择在尽可能多的浏览器上受广泛支持的 API，其可提供异步调用模型，以最大程度提高与 UI 的互操作性。这些条件自然会产生以下技术选择：")]),t._v(" "),a("ul",[a("li",[t._v("对于设备本地键/值存储：使用 Cache API。")]),t._v(" "),a("li",[t._v("对于设备本地结构化存储：使用 IndexedDB。")]),t._v(" "),a("li",[t._v("对于全局字节流存储：使用云端存储服务。")])]),t._v(" "),a("p",[t._v("这种组合可满足许多移动网络应用的基本存储需求。我们即将发表的一篇文章，在该文章中详细介绍了如何处理常见存储模式，并随附代码示例，敬请期待！")]),t._v(" "),a("h2",{attrs:{id:"调试-chrome-devtools-中的存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试-chrome-devtools-中的存储"}},[t._v("#")]),t._v(" 调试 Chrome DevTools 中的存储")]),t._v(" "),a("p",[t._v("请查看以下文档，了解有关使用 Chrome DevTools 检查和调试您选择的网络存储 API 的更多信息。 此处未提及 DevTools 中不支持或不适用的 API。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/manage-data/local-storage#local-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Storage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/manage-data/local-storage#session-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session Storage"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/manage-data/cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookies"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/manage-data/local-storage#web-sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web SQL"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/progressive-web-apps#caches",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cache"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/manage-data/local-storage#indexeddb",target:"_blank",rel:"noopener noreferrer"}},[t._v("IndexedDB"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("如果您目前使用多个存储 API，请查看 DevTools 的 Clear Storage 功能。 此功能允许您通过点击一个按钮清除多个存储。 如需了解详细信息，请参阅"),a("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/manage-data/local-storage#clear-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("清除服务工作线程、存储、数据库和缓存"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"后续计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续计划"}},[t._v("#")]),t._v(" 后续计划…")]),t._v(" "),a("p",[t._v("现在，我们已介绍了一些考虑存储机制的相关方法，并比较了目前可用的最常见的 API 和服务的异同，不久，我们将添加更多内容以深入探讨一个或多个关注的主题：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/instant-and-offline/web-storage/offline-for-pwa",target:"_blank",rel:"noopener noreferrer"}},[t._v("针对 Progressive Web App 的离线存储建议"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("常用存储模式（即将推出）")]),t._v(" "),a("li",[t._v("建议的后端存储方法（即将推出）")]),t._v(" "),a("li",[t._v("深度教程：IndexedDB（即将推出）")]),t._v(" "),a("li",[t._v("深度教程：Cache API（即将推出）")]),t._v(" "),a("li",[t._v("对常见存储框架进行分析（即将推出）")])])])}),[],!1,null,null,null);e.default=r.exports}}]);