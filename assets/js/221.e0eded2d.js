(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{622:function(e,t,r){"use strict";r.r(t);var a=r(16),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"javascript-启动优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-启动优化"}},[e._v("#")]),e._v(" JavaScript 启动优化")]),e._v(" "),r("p",[e._v("在构建严重依赖 JavaScript 的网站时，我们有时会在不知不觉中为所发送的内容付出代价。 在本文中，我们将说明当您希望网站在移动设备上快速加载和交互时，遵守几项"),r("strong",[e._v("规则")]),e._v("的重要性。 减少传递的 JavaScript 数量意味着减少网络传输时间、解压缩代码的成本以及花费在解析和编译 JavaScript 上的时间。")]),e._v(" "),r("h2",{attrs:{id:"网络"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[e._v("#")]),e._v(" 网络")]),e._v(" "),r("p",[e._v("大部分开发者在考虑 JavaScript 的成本时，考虑的都是"),r("strong",[e._v("下载和执行成本")]),e._v("。 通过网络发送较多的 JavaScript 字节时，用户的连接越慢，花费的时间就越长。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_U00XcnhqoczTuJ8NH8UhOw.png",alt:"当浏览器请求资源时，需要先提取该资源，然后将其解压缩。  对于 JavaScript 等资源，必须先进行解析和编译，然后才能执行资源。"}})]),e._v(" "),r("p",[e._v("这可能会成为一个问题，即使在第一世界国家也是如此，因为用户的"),r("strong",[e._v("有效网络连接类型")]),e._v("实际上可能不是 3G、4G 或 Wi-Fi。 您可能使用的是咖啡店的 Wi-Fi，但连接到 2G 速度的蜂窝热点。")]),e._v(" "),r("p",[e._v("您可以通过以下方法"),r("strong",[e._v("降低")]),e._v(" JavaScript 的网络传输成本：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("仅发送用户所需的代码")]),e._v(" "),r("p",[e._v("。")]),e._v(" "),r("ul",[r("li",[e._v("使用"),r("a",{attrs:{href:"https://developers.google.cn/web/updates/2017/06/supercharged-codesplit",target:"_blank",rel:"noopener noreferrer"}},[e._v("代码拆分"),r("OutboundLink")],1),e._v("将 JavaScript 分解成关键部分和非关键部分。 "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v(" 等模块捆绑程序支持"),r("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[e._v("代码拆分"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("li",[e._v("延迟加载非关键代码。")])])]),e._v(" "),r("li",[r("p",[e._v("源码压缩")]),e._v(" "),r("ul",[r("li",[e._v("使用 "),r("a",{attrs:{href:"https://github.com/mishoo/UglifyJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("UglifyJS"),r("OutboundLink")],1),e._v(" 来"),r("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#minification_preprocessing_context-specific_optimizations",target:"_blank",rel:"noopener noreferrer"}},[e._v("压缩"),r("OutboundLink")],1),e._v(" ES5 代码。")]),e._v(" "),r("li",[e._v("使用 "),r("a",{attrs:{href:"https://github.com/babel/minify",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel-minify"),r("OutboundLink")],1),e._v(" 或 "),r("a",{attrs:{href:"https://www.npmjs.com/package/uglify-es",target:"_blank",rel:"noopener noreferrer"}},[e._v("uglify-es"),r("OutboundLink")],1),e._v(" 来压缩 ES2015+。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("压缩")])]),e._v(" "),r("ul",[r("li",[e._v("至少使用 "),r("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#text_compression_with_gzip",target:"_blank",rel:"noopener noreferrer"}},[e._v("gzip"),r("OutboundLink")],1),e._v(" 来压缩基于文本的资源。")]),e._v(" "),r("li",[e._v("考虑使用 "),r("a",{attrs:{href:"https://www.smashingmagazine.com/2016/10/next-generation-server-compression-with-brotli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brotli"),r("OutboundLink")],1),e._v(" ~"),r("a",{attrs:{href:"https://twitter.com/paulcalvano/status/924660429846208514",target:"_blank",rel:"noopener noreferrer"}},[e._v("q11"),r("OutboundLink")],1),e._v("。 Brotli 在压缩比率方面优于 gzip， 已帮助 CertSimple 节省 "),r("a",{attrs:{href:"https://speakerdeck.com/addyosmani/the-browser-hackers-guide-to-instant-loading?slide=30",target:"_blank",rel:"noopener noreferrer"}},[e._v("17%"),r("OutboundLink")],1),e._v(" 的压缩 JS 字节大小，并且帮助 LinkedIn 节省 "),r("a",{attrs:{href:"https://engineering.linkedin.com/blog/2017/05/boosting-site-speed-using-brotli-compression",target:"_blank",rel:"noopener noreferrer"}},[e._v("4%"),r("OutboundLink")],1),e._v(" 的加载时间。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("移除未使用的代码")]),e._v("。")]),e._v(" "),r("ul",[r("li",[e._v("识别可以使用 "),r("a",{attrs:{href:"https://developers.google.cn/web/updates/2017/04/devtools-release-notes#coverage",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevTools 代码覆盖"),r("OutboundLink")],1),e._v("来移除或延迟加载代码的机会。")]),e._v(" "),r("li",[e._v("使用 "),r("a",{attrs:{href:"https://github.com/babel/babel/tree/master/packages/babel-preset-env",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel-preset-env"),r("OutboundLink")],1),e._v(" 和 browserlist，避免转译现代浏览器中已有的功能。 高级开发者可能会发现仔细"),r("a",{attrs:{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",target:"_blank",rel:"noopener noreferrer"}},[e._v("分析其 webpack 软件包"),r("OutboundLink")],1),e._v("有助于找到裁减非必要依赖项的机会。")]),e._v(" "),r("li",[e._v("要删除代码，请查看 "),r("a",{attrs:{href:"https://webpack.js.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tree-shaking"),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://developers.google.cn/closure/compiler",target:"_blank",rel:"noopener noreferrer"}},[e._v("Closure Compiler"),r("OutboundLink")],1),e._v(" 的高级优化和库裁剪插件（例如 "),r("a",{attrs:{href:"https://github.com/lodash/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer"}},[e._v("lodash-babel-plugin"),r("OutboundLink")],1),e._v("）或者 webpack 的 "),r("a",{attrs:{href:"https://iamakulov.com/notes/webpack-front-end-size-caching/#moment-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("ContextReplacementPlugin"),r("OutboundLink")],1),e._v("（适用于 Moment.js 等库）。")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("缓存代码以最大限度减少网络往返次数。")])]),e._v(" "),r("ul",[r("li",[e._v("使用 "),r("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/http-caching",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP 缓存"),r("OutboundLink")],1),e._v("来确保浏览器缓存有效响应。 确定脚本的最佳生命周期 (max-age)，并提供验证令牌 (ETag) 以避免传输未更改的字节。")]),e._v(" "),r("li",[e._v("Service Worker 缓存可使您的应用网络更有弹性，并允许您对 "),r("a",{attrs:{href:"https://v8project.blogspot.com/2015/07/code-caching.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("V8 的代码缓存"),r("OutboundLink")],1),e._v("等功能进行 Eager 访问。")]),e._v(" "),r("li",[e._v("使用长期缓存以避免重新提取尚未更改的资源。 如果您使用 Webpack，请参阅"),r("a",{attrs:{href:"https://webpack.js.org/guides/caching/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文件名哈希"),r("OutboundLink")],1),e._v("。")])])])]),e._v(" "),r("h2",{attrs:{id:"解析-编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解析-编译"}},[e._v("#")]),e._v(" 解析/编译")]),e._v(" "),r("p",[e._v("下载 JavaScript 之后，JS 引擎"),r("strong",[e._v("解析/编译")]),e._v("此代码的时间成为 JavaScript "),r("strong",[e._v("最大的")]),e._v("成本之一。 在 "),r("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools"),r("OutboundLink")],1),e._v(" 中，解析和编译是 Performance 面板中黄色“脚本”时间的一部分。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1__4gNDmBlXxOF2-KmsOrKkw.png",alt:"img"}})]),e._v(" "),r("p",[e._v("Bottom-Up 和 Call Tree 选项卡显示确切的解析/编译时间：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_GdrVt_BTTzzBOIoyZZsQZQ.png",alt:"img"}}),e._v("Chrome DevTools Performance 面板 > Bottom-Up。 启用 V8 的 Runtime Call Stats 后，我们可以看到在解析和编译等阶段花费的时间")]),e._v(" "),r("p",[e._v("注：Performance 面板对 Runtime Call Stats 的支持目前处于实验阶段。 若要启用支持，请转到 chrome://flags/#enable-devtools-experiments -> 重新启动 Chrome -> 转到 DevTools -> Settings -> Experiments -> 按 Shift 6 次 -> 勾选名为 "),r("code",[e._v("Timeline: V8 Runtime Call Stats on Timeline")]),e._v(" 的选项，然后关闭再重新打开 DevTools。")]),e._v(" "),r("p",[e._v("但是，为什么该支持很重要？")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_Dirw7RdQj9Dktc-Ny6-xbA.png",alt:"img"}})]),e._v(" "),r("p",[e._v("花费很长时间来解析/编译代码会严重推迟用户与网站交互的时间。 发送的 JavaScript 越多，在网站可进行交互之前就要花费越长的时间来解析和编译。")]),e._v(" "),r("blockquote",[r("p",[e._v("就字节而言，"),r("strong",[e._v("浏览器处理 JavaScript 的成本高于 相同大小的图像或网页字体")]),e._v(" - Tom Dale")])]),e._v(" "),r("p",[e._v("与 JavaScript 相比，处理相同大小的图像涉及多项成本（仍要对其进行解码！），但在普通移动硬件上，JS 更有可能对页面的交互性产生负面影响。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_PRVzNizF9jQ_QADF5lQHpA.png",alt:"img"}}),e._v("JavaScript 与图像字节的成本大不相同。 在解码和光栅化图像的过程中，通常不会阻止主线程或界面交互。 但是，JS 可能会因为解析、编译和执行成本而延迟交互。")]),e._v(" "),r("p",[e._v("谈及解析和编译的速度较慢时，需要考虑环境；在这里，我们谈论的是"),r("strong",[e._v("普通")]),e._v("手机。 "),r("strong",[e._v("普通用户使用的可能是 CPU 和 GPU 速度缓慢、没有 L2/L3 缓存，甚至内存量也很有限的手机。")])]),e._v(" "),r("blockquote",[r("p",[e._v("网络能力与设备能力并不总是相称。 拥有高速光纤连接的用户 不一定使用最好的 CPU 来 解析和评估发送到其所用设备上的 JavaScript。 反过来也是如此，网络连接速度慢，但是 CPU 速度很快。 - Kristofer Baxter，LinkedIn")])]),e._v(" "),r("p",[e._v("我们可以从下图中看到在低端和高端硬件上解析大约 1MB 解压缩（简单）JavaScript 的成本。 "),r("strong",[e._v("就市面上速度最快的手机与普通手机而言，解析/编译代码所花费的时间有 2 到 5 倍的差距")]),e._v("。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_8BQ3bCYu1AVvJWPR1x8Yig.png",alt:"img"}}),e._v("此图表突出显示在不同等级的桌面设备和移动设备上，1MB 的 JavaScript 软件包（gzip 压缩大小约为 250KB）的解析时间。 查看解析成本时，要考虑的是解压缩后的数字，例如，大约 250KB 的 gzip 压缩 JS 解压缩为大约 1MB 的代码。")]),e._v(" "),r("p",[e._v("在 CNN.com 等实际网站上情况如何？")]),e._v(" "),r("p",[r("strong",[e._v("在高端 iPhone 8 上，只需大约 4 秒即可解析/编译 CNN 的 JS，而在 Moto G4 等普通手机上，需花费大约 13 秒的时间")]),e._v("。 这会显著影响用户与此网站完全交互的速度。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_7ysArXJ4nN0rQEMT9yZ_Sg.png",alt:"img"}}),e._v("上图将 Apple 的 A11 仿生芯片的性能与普通 Android 硬件上的 Snapdragon 617 作对比，显示各自的解析时间。")]),e._v(" "),r("p",[e._v("此图着重强调务必在"),r("strong",[e._v("普通")]),e._v("硬件（例如，Moto G4）上进行测试，而不仅仅在您所用手机上进行测试，这一点很重要。 但是，环境也很重要："),r("strong",[e._v("请针对您的设备和网络情况进行优化。")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_6oEpMEi_pjRNjmtN9i2TCA.png",alt:"img"}}),e._v("Google Analytics 可以帮助您了解实际用户用来访问网站的移动设备等级。 这样，您就有机会了解用户实际的 CPU/GPU 限制情况。")]),e._v(" "),r("p",[r("strong",[e._v("我们是否确实发送了过多的 JavaScript？不见得如此 😃")])]),e._v(" "),r("p",[e._v("通过使用 HTTP Archive（大约前 50 万个网站）来分析"),r("a",{attrs:{href:"http://beta.httparchive.org/reports/state-of-javascript#bytesJs",target:"_blank",rel:"noopener noreferrer"}},[e._v("移动设备上的 JavaScript"),r("OutboundLink")],1),e._v(" 状态，我们可以看到，50% 的网站需要经过 14 秒以上的时间才能交互。 这些网站用来解析和编译 JS 的时间就多达 4 秒。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_sVgunAoet0i5FWEI9NSyMg.png",alt:"img"}})]),e._v(" "),r("p",[e._v("考虑到提取和处理 JS 及其他资源所花费的时间，用户会觉得需要等待片刻才能使用页面也不足为奇。 在这方面，我们绝对可以做得更好。")]),e._v(" "),r("p",[r("strong",[e._v("从页面中移除非关键 JavaScript 可以减少传输时间、CPU 密集型解析和编译以及潜在的内存开销。 这也有助于加快页面的交互速度。")])]),e._v(" "),r("h2",{attrs:{id:"执行时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行时间"}},[e._v("#")]),e._v(" 执行时间")]),e._v(" "),r("p",[e._v("并不是只有解析和编译会产生成本。 "),r("strong",[e._v("执行 JavaScript")]),e._v("（在解析/编译后运行代码）是必须在主线程中执行的其中一项操作。 较长的执行时间也可能会推迟用户与您网站交互的时间。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_ec0wEKKVl7iQidBks3oDKg.png",alt:"img"}})]),e._v(" "),r("blockquote",[r("p",[e._v("如果执行脚本所花费的时间超过 50 毫秒，那么交互时间就会因为下载、编译和执行 JS 所需的 "),r("em",[e._v("全部")]),e._v("时间而推迟 - Alex Russell")])]),e._v(" "),r("p",[e._v("为解决此问题，可以将 JavaScript 分成"),r("strong",[e._v("小型代码段")]),e._v("，以避免锁定主线程。 了解您能否减少执行期间完成的工作量。")]),e._v(" "),r("h2",{attrs:{id:"其他成本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他成本"}},[e._v("#")]),e._v(" 其他成本")]),e._v(" "),r("p",[e._v("JavaScript 可以在其他方面影响页面性能：")]),e._v(" "),r("ul",[r("li",[e._v("内存。 页面可能会因为 GC（垃圾回收）而出现卡顿或频繁暂停现象。 当浏览器收回内存时，就会暂停执行 JS，因此频繁收集垃圾的浏览器会导致暂停执行的频率超出我们的容忍程度。 请避免"),r("a",{attrs:{href:"https://developers.google.cn/web/tools/chrome-devtools/memory-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("内存泄漏"),r("OutboundLink")],1),e._v("和频繁的 GC 暂停，以消除页面卡顿。")]),e._v(" "),r("li",[e._v("在运行时，长时间运行的 JavaScript 可能会阻塞主线程，从而导致页面无响应。 将工作分为较小的块（使用 "),r("code",[e._v("requestAnimationFrame()")]),e._v(" 或 "),r("code",[e._v("requestIdleCallback()")]),e._v(" 排程）可以最大限度减少无响应问题。")])]),e._v(" "),r("h2",{attrs:{id:"减少-javascript-交付成本的模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#减少-javascript-交付成本的模式"}},[e._v("#")]),e._v(" 减少 JavaScript 交付成本的模式")]),e._v(" "),r("p",[e._v("如果您想保持较短的 JavaScript 解析/编译及网络传输时间，不妨试试基于路由的分块或 "),r("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/performance/prpl-pattern",target:"_blank",rel:"noopener noreferrer"}},[e._v("PRPL"),r("OutboundLink")],1),e._v(" 等模式。")]),e._v(" "),r("h3",{attrs:{id:"prpl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prpl"}},[e._v("#")]),e._v(" PRPL")]),e._v(" "),r("p",[e._v("PRPL（推送、渲染、预先缓存、延迟加载）是一种通过激进代码拆分和缓存来优化交互性的模式：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_VgdNbnl08gcetpqE1t9P9w.png",alt:"img"}})]),e._v(" "),r("p",[e._v("上图直观地呈现出 PRPL 的影响。")]),e._v(" "),r("p",[e._v("我们使用 V8 的 Runtime Call Stats 来分析热门移动网站和渐进式网页应用的加载时间。 正如我们所见，许多网站都将大部分的时间用在解析（以橙色显示）上：")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_9BMRW5i_bS4By_JSESXX8A.png",alt:"img"}})]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.wego.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wego"),r("OutboundLink")],1),e._v(" 网站使用 PRPL 来保持较短的路由解析时间，从而快速进行交互。 上述许多其他网站采用代码拆分和性能预算来尝试降低其 JS 成本。")]),e._v(" "),r("h3",{attrs:{id:"渐进式引导"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渐进式引导"}},[e._v("#")]),e._v(" 渐进式引导")]),e._v(" "),r("p",[e._v("许多网站以交互性为代价来优化内容可见性。 为在确实有大型 JavaScript 软件包时快速进行首次绘制，开发者有时会利用服务器端渲染；然后将其“升级”，以便最终提取 JavaScript 时附加事件处理程序。")]),e._v(" "),r("p",[e._v("请慎重思考，因为这种方法自身也会产生成本。 您 1) 通常会发送"),r("em",[e._v("大型")]),e._v(" HTML 响应，这可能会推动交互性，2) 也可能会让用户处于“恐怖谷”，即在 JavaScript 完成处理之前，半数体验实际上都没有交互性。")]),e._v(" "),r("p",[e._v("或许渐进式引导是更好的方法。 发送具有最低限度功能的页面（仅由当前路由所需的 HTML/JS/CSS 组成）。 当有更多资源到达时，应用可以进行延迟加载，并解锁更多功能。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_zY03Y5nVEY21FXA63Qe8PA.png",alt:"img"}}),r("a",{attrs:{href:"https://twitter.com/aerotwist/status/729712502943174657",target:"_blank",rel:"noopener noreferrer"}},[e._v("渐进式引导"),r("OutboundLink")],1),e._v("，发布人：Paul Lewis")]),e._v(" "),r("p",[e._v("加载与视图中显示的内容成比例的代码是诀窍所在。 PRPL 和渐进式引导模式可以帮助您实现这一点。")]),e._v(" "),r("h2",{attrs:{id:"结论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[e._v("#")]),e._v(" 结论")]),e._v(" "),r("p",[r("strong",[e._v("传输大小对于低端网络极为关键。 在 CPU 处理能力有限的设备上，解析时间十分重要。 应该尽量降低这两个指标。")])]),e._v(" "),r("p",[e._v("某些团队已成功通过采用严格的性能预算来保持较短的 JavaScript 传输和解析/编译时间。 请参阅 Alex Russell 的“"),r("a",{attrs:{href:"https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/",target:"_blank",rel:"noopener noreferrer"}},[e._v("您能否承受？： 真实的网络性能预算"),r("OutboundLink")],1),e._v("”，以获取有关适用于移动设备的预算指南。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_U8PJVNrA_tYADQ6_S4HUYw.png",alt:"img"}}),e._v("最好考虑一下我们所作的架构决策有多少 JS“余量”可供我们用于应用逻辑。")]),e._v(" "),r("p",[e._v("如果您正在构建面向移动设备的网站，请尽量在有代表性的硬件上进行开发，保持较短的 JavaScript 解析/编译时间，并采用性能预算来确保团队能够密切关注其 JavaScript 成本。")]),e._v(" "),r("h2",{attrs:{id:"了解详情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#了解详情"}},[e._v("#")]),e._v(" 了解详情")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=_srJ7eHS3IM",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome 开发峰会 2017 - 现代加载最佳做法"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/reloading/javascript-start-up-performance-69200f43b201",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript 启动性能"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://nolanlawson.github.io/frontendday-2016/",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决网络性能危机"),r("OutboundLink")],1),e._v(" - Nolan Lawson")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/",target:"_blank",rel:"noopener noreferrer"}},[e._v("您能否承受？真实的性能预算"),r("OutboundLink")],1),e._v(" - Alex Russell")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/kristoferbaxter/status/908144931125858304",target:"_blank",rel:"noopener noreferrer"}},[e._v("评估网络框架和库"),r("OutboundLink")],1),e._v(" - Kristofer Baxter")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.cloudflare.com/results-experimenting-brotli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudflare 的 Brotli 压缩实验结果"),r("OutboundLink")],1),e._v("（请注意，较高质量的动态 Brotli 会导致初始页面渲染延迟，因此务必谨慎评估。 您可能想改为使用静态压缩。）")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://medium.com/@samccone/performance-futures-bundling-281543d9a0d5",target:"_blank",rel:"noopener noreferrer"}},[e._v("性能的未来"),r("OutboundLink")],1),e._v(" - Sam Saccone")])])])}),[],!1,null,null,null);t.default=n.exports}}]);