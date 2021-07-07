(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{647:function(e,t,r){"use strict";r.r(t);var a=r(16),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"使输入处理程序去除抖动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使输入处理程序去除抖动"}},[e._v("#")]),e._v(" 使输入处理程序去除抖动")]),e._v(" "),r("p",[e._v("输入处理程序可能是应用出现性能问题的原因，因为它们可能阻止帧完成，并且可能导致额外（且不必要）的布局工作。")]),e._v(" "),r("h3",{attrs:{id:"tl-dr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tl-dr"}},[e._v("#")]),e._v(" TL;DR")]),e._v(" "),r("ul",[r("li",[e._v("避免长时间运行输入处理程序；它们可能阻止滚动。")]),e._v(" "),r("li",[e._v("不要在输入处理程序中进行样式更改。")]),e._v(" "),r("li",[e._v("使处理程序去除抖动；存储事件值并在下一个 requestAnimationFrame 回调中处理样式更改。")])]),e._v(" "),r("h2",{attrs:{id:"避免长时间运行输入处理程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#避免长时间运行输入处理程序"}},[e._v("#")]),e._v(" 避免长时间运行输入处理程序")]),e._v(" "),r("p",[e._v("在最快的情况下，当用户与页面交互时，页面的合成器线程可以获取用户的触摸输入并直接使内容移动。这不需要主线程执行任务，主线程执行的是 JavaScript、布局、样式或绘制。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/rendering/images/debounce-your-input-handlers/compositor-scroll.jpg",alt:"轻量级滚动；仅合成器。"}})]),e._v(" "),r("p",[e._v("但是，如果您附加一个输入处理程序，例如 "),r("code",[e._v("touchstart")]),e._v("、"),r("code",[e._v("touchmove")]),e._v(" 或 "),r("code",[e._v("touchend")]),e._v("，则合成器线程必须等待此处理程序执行完成，因为您可能选择调用 "),r("code",[e._v("preventDefault()")]),e._v(" 并且会阻止触摸滚动发生。即使没有调用 "),r("code",[e._v("preventDefault()")]),e._v("，合成器也必须等待，这样用户滚动会被阻止，这就可能导致卡顿和漏掉帧。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/rendering/images/debounce-your-input-handlers/ontouchmove.jpg",alt:"大量滚动；合成器在 JavaScript 上被阻止。"}})]),e._v(" "),r("p",[e._v("总之，要确保您运行的任何输入处理程序应快速执行，并且允许合成器执行其工作。")]),e._v(" "),r("h2",{attrs:{id:"避免在输入处理程序中更改样式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#避免在输入处理程序中更改样式"}},[e._v("#")]),e._v(" 避免在输入处理程序中更改样式")]),e._v(" "),r("p",[e._v("与滚动和触摸的处理程序相似，输入处理程序被安排在紧接任何 "),r("code",[e._v("requestAnimationFrame")]),e._v(" 回调之前运行。")]),e._v(" "),r("p",[e._v("如果在这些处理程序之一内进行视觉更改，则在 "),r("code",[e._v("requestAnimationFrame")]),e._v(" 开始时，将有样式更改等待处理。如果按照“"),r("a",{attrs:{href:"https://developers.google.cn/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing",target:"_blank",rel:"noopener noreferrer"}},[e._v("避免大型、复杂的布局和布局抖动"),r("OutboundLink")],1),e._v("”的建议，在 requestAnimationFrame 回调开始时就读取视觉属性，您将触发强制同步布局！")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://developers.google.cn/web/fundamentals/performance/rendering/images/debounce-your-input-handlers/frame-with-input.jpg",alt:"大量滚动；合成器在 JavaScript 上被阻止。"}})]),e._v(" "),r("h2",{attrs:{id:"使滚动处理程序去除抖动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使滚动处理程序去除抖动"}},[e._v("#")]),e._v(" 使滚动处理程序去除抖动")]),e._v(" "),r("p",[e._v("上面两个问题的解决方法相同：始终应使下一个 "),r("code",[e._v("requestAnimationFrame")]),e._v(" 回调的视觉更改去除抖动：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function onScroll (evt) {\n\n  // Store the scroll value for laterz.\n  lastScrollY = window.scrollY;\n\n  // Prevent multiple rAF callbacks.\n  if (scheduledAnimationFrame)\n    return;\n\n  scheduledAnimationFrame = true;\n  requestAnimationFrame(readAndUpdatePage);\n}\n\nwindow.addEventListener('scroll', onScroll);\n")])])]),r("p",[e._v("这样做还有一个好处是使输入处理程序轻量化，效果非常好，因为现在您不用去阻止计算开销很大的代码的操作，例如滚动或触摸！")])])}),[],!1,null,null,null);t.default=n.exports}}]);