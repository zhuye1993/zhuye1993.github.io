(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{419:function(v,_,t){v.exports=t.p+"assets/img/6.b2ff047e.jpg"},420:function(v,_,t){v.exports=t.p+"assets/img/5.8eb24cb5.jpg"},421:function(v,_,t){v.exports=t.p+"assets/img/4.84cee6fd.jpg"},422:function(v,_,t){v.exports=t.p+"assets/img/7.69a38734.png"},423:function(v,_,t){v.exports=t.p+"assets/img/8.0f3e45b4.jpg"},424:function(v,_,t){v.exports=t.p+"assets/img/9.4c3190d6.jpg"},425:function(v,_,t){v.exports=t.p+"assets/img/10.aa487aed.jpg"},426:function(v,_,t){v.exports=t.p+"assets/img/11.5eecc17d.jpg"},582:function(v,_,t){"use strict";t.r(_);var e=t(33),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"浏览器输入url后发生了什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器输入url后发生了什么"}},[v._v("#")]),v._v(" 浏览器输入URL后发生了什么")]),v._v(" "),e("h2",{attrs:{id:"dns-域名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-域名解析"}},[v._v("#")]),v._v(" DNS 域名解析")]),v._v(" "),e("p",[v._v("在网络世界，你肯定记得住网站的名称，但是很难记住网站的 IP 地址，因而也需要一个地址簿，就是 DNS 服务器。DNS 服务器是高可用、高并发和分布式的，它是树状结构，如图：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(419),alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("根 DNS 服务器 ：返回顶级域 DNS 服务器的 IP 地址")]),v._v(" "),e("li",[v._v("顶级域 DNS 服务器：返回权威 DNS 服务器的 IP 地址")]),v._v(" "),e("li",[v._v("权威 DNS 服务器 ：返回相应主机的 IP 地址")])]),v._v(" "),e("p",[v._v("DNS的域名查找，在客户端和浏览器，本地DNS之间的查询方式是递归查询；在本地DNS服务器与根域及其子域之间的查询方式是迭代查询；")]),v._v(" "),e("p",[e("img",{attrs:{src:t(420),alt:""}})]),v._v(" "),e("p",[v._v("在客户端输入 URL 后，会有一个递归查找的过程，"),e("strong",[v._v("从浏览器缓存中查找->本地的hosts文件查找->找本地DNS解析器缓存查找->本地DNS服务器查找")]),v._v("，这个过程中任何一步找到了都会结束查找流程。")]),v._v(" "),e("p",[e("strong",[v._v("如果本地DNS服务器无法查询到，则根据本地DNS服务器设置的转发器进行查询。若未用转发模式，则"),e("code",[v._v("迭代查找")]),v._v("过程如下图：")])]),v._v(" "),e("p",[e("img",{attrs:{src:t(421),alt:""}})]),v._v(" "),e("p",[e("strong",[v._v("浏览器通过向 DNS 服务器发送域名，DNS 服务器查询到与域名相对应的 IP 地址，然后返回给浏览器，浏览器再将 IP 地址打在协议上，同时请求参数也会在协议搭载，然后一并发送给对应的服务器。")])]),v._v(" "),e("p",[v._v("当然，值得注意的是，浏览器提供了DNS数据缓存功能。即如果一个域名已经解析过，那会把解析的结果缓存下来，下次处理直接走缓存，不需要经过 DNS解析。")]),v._v(" "),e("h2",{attrs:{id:"发起-tcp-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发起-tcp-连接"}},[v._v("#")]),v._v(" 发起 TCP 连接")]),v._v(" "),e("p",[e("strong",[v._v("首先，判断是不是https的，如果是，则HTTPS其实是HTTP + SSL / TLS 两部分组成，也就是在HTTP上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据。")])]),v._v(" "),e("p",[v._v("HTTP报文是包裹在TCP报文中发送的，服务器端收到TCP报文时会解包提取出HTTP报文。")]),v._v(" "),e("p",[v._v("但是这个过程中存在一定的风险，HTTP报文是明文，如果中间被截取的话会存在一些信息泄露的风险。那么在进入TCP报文之前对HTTP做一次加密就可以解决这个问题了。")]),v._v(" "),e("p",[v._v("HTTPS协议的本质就是HTTP + SSL(or TLS)。在HTTP报文进入TCP报文之前，先使用SSL对HTTP报文进行加密。从网络的层级结构看它位于HTTP协议与TCP协议之间。")]),v._v(" "),e("p",[e("img",{attrs:{src:t(422),alt:""}})]),v._v(" "),e("p",[v._v("TCP连接建立，两次不安全，四次浪费资源，三次刚刚好。")]),v._v(" "),e("p",[v._v("从最开始双方都处于"),e("code",[v._v("CLOSED")]),v._v("状态。然后服务端开始监听某个端口，进入了"),e("code",[v._v("LISTEN")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第一次握手")])]),v._v(" "),e("p",[v._v("客户端主动发起连接，发送"),e("code",[v._v("SYN")]),v._v(", 发送完毕后，客户端进入"),e("code",[v._v("SYN-SENT")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第二次握手")])]),v._v(" "),e("p",[v._v("服务端接收到，返回"),e("code",[v._v("SYN和ACK")]),v._v("(对应客户端发来的SYN)，发送完毕后，服务器端进入"),e("code",[v._v("SYN_RCVD")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第三次握手")])]),v._v(" "),e("p",[v._v("客户端再发送"),e("code",[v._v("ACK")]),v._v("给服务端，发送完毕后，客户端进入"),e("code",[v._v("ESTABLISHED")]),v._v("状态；服务端收到ACK之后，也进入"),e("code",[v._v("ESTABLISHED")]),v._v("状态，TCP 握手结束。")]),v._v(" "),e("p",[v._v("SSL握手过程")]),v._v(" "),e("ol",[e("li",[v._v("第一阶段 建立安全能力 包括协议版本 会话Id 密码构件 压缩方法和初始随机数")]),v._v(" "),e("li",[v._v("第二阶段 服务器发送证书 密钥交换数据和证书请求，最后发送请求-相应阶段的结束信号")]),v._v(" "),e("li",[v._v("第三阶段 如果有证书请求客户端发送此证书 之后客户端发送密钥交换数据 也可以发送证书验证消息")]),v._v(" "),e("li",[v._v("第四阶段 变更密码构件和结束握手协议")])]),v._v(" "),e("p",[e("strong",[v._v("完成了之后，客户端和服务器端就可以开始传送数据。")])]),v._v(" "),e("h2",{attrs:{id:"发送http请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送http请求"}},[v._v("#")]),v._v(" 发送HTTP请求")]),v._v(" "),e("p",[v._v("TCP连接建立后，浏览器就可以利用 HTTP／HTTPS 协议向服务器发送请求了。")]),v._v(" "),e("p",[v._v("浏览器发 HTTP 请求要携带三样东西：请求行（request line）、请求头（header）和请求体（body）。")]),v._v(" "),e("p",[v._v("请求行：")]),v._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 请求方法是GET，路径为根路径，HTTP协议版本为1.1")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[v._v("GET")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[v._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("1.1")]),v._v("\n")])])]),e("p",[v._v("请求头：")]),v._v(" "),e("p",[v._v("请求报头允许客户端向服务器传递请求的附加信息和客户端自身的信息。")]),v._v(" "),e("p",[v._v("比如我们之前说的"),e("code",[v._v("Cache-Control")]),v._v("、"),e("code",[v._v("If-Modified-Since")]),v._v("、"),e("code",[v._v("If-None-Match")]),v._v("都由可能被放入请求头中作为缓存的标识信息。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\nCache-Control: no-cache\nConnection: keep-alive\nCookie: /* 省略cookie信息 */\nHost: www.baidu.com\nPragma: no-cache\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1\n")])])]),e("p",[e("strong",[v._v("最后是请求体，也就是请求正文，请求体只有在"),e("code",[v._v("POST")]),v._v("方法下存在，常见的场景是表单提交")]),v._v("。")]),v._v(" "),e("p",[v._v("服务器接受到请求，就解析请求头，如果头部有缓存相关信息如"),e("code",[v._v("if-none-match")]),v._v("与"),e("code",[v._v("if-modified-since")]),v._v("，则验证缓存是否有效，若有效则返回状态码为304，若无效则重新返回资源，状态码为200.")]),v._v(" "),e("p",[v._v("这里有发生的一个过程可参考 "),e("RouterLink",{attrs:{to:"/web/browser/2.html"}},[v._v("《HTTP缓存机制》")])],1),v._v(" "),e("h2",{attrs:{id:"服务器处理请求并返回响应结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器处理请求并返回响应结果"}},[v._v("#")]),v._v(" 服务器处理请求并返回响应结果")]),v._v(" "),e("p",[v._v("HTTP 请求到达服务器，服务器进行对应的处理。最后要把数据传给浏览器，也就是返回网络响应。")]),v._v(" "),e("p",[v._v("跟请求部分类似，网络响应具有三个部分：响应行、响应头和响应体。")]),v._v(" "),e("p",[v._v("响应行类似下面这样:")]),v._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[v._v("HTTP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("1.1")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[v._v("200")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[v._v("OK")]),v._v("\n")])])]),e("p",[v._v("由HTTP协议版本、状态码和状态描述组成。")]),v._v(" "),e("p",[v._v("响应头：包含了服务器及其返回数据的一些信息, 服务器生成数据的时间、返回的数据类型以及对即将写入的Cookie信息。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("Cache-Control: no-cache\nConnection: keep-alive\nContent-Encoding: gzip\nContent-Type: text/html;charset=utf-8\nDate: Wed, 04 Dec 2019 12:29:13 GMT\nServer: apache\nSet-Cookie: rsv_i=f9a0SIItKqzv7kqgAAgphbGyRts3RwTg%2FLyU3Y5Eh5LwyfOOrAsvdezbay0QqkDqFZ0DfQXby4wXKT8Au8O7ZT9UuMsBq2k; path=/; domain=.baidu.com\n")])])]),e("p",[v._v("响应体：")]),v._v(" "),e("p",[v._v("服务器返回给浏览器的文本信息，通常HTML, CSS, JS, 图片等文件就放在这一部分。")]),v._v(" "),e("p",[v._v("紧接着，会把数据渲染到页面~~")]),v._v(" "),e("h2",{attrs:{id:"浏览器解析渲染页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析渲染页面"}},[v._v("#")]),v._v(" 浏览器解析渲染页面")]),v._v(" "),e("p",[v._v("按照渲染的时间顺序，流水线可分为如下几个子阶段：构建 DOM 树、样式计算、布局阶段、分层、栅格化和显示。如图：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(423),alt:""}})]),v._v(" "),e("ol",[e("li",[v._v("渲染进程将 HTML 内容转换为能够读懂 DOM 树结构。")]),v._v(" "),e("li",[v._v("渲染引擎将 CSS 样式表转化为浏览器可以理解的styleSheets，计算出 DOM 节点的样式。")]),v._v(" "),e("li",[v._v("创建布局树，并计算元素的布局信息。")]),v._v(" "),e("li",[v._v("对布局树进行分层，并生成分层树。")]),v._v(" "),e("li",[v._v("为每个图层生成绘制列表，并将其提交到合成线程。合成线程将图层分图块，并栅格化将图块转换成位图。")]),v._v(" "),e("li",[v._v("合成线程发送绘制图块命令给浏览器进程。浏览器进程根据指令生成页面，并显示到显示器上。")])]),v._v(" "),e("h3",{attrs:{id:"一、构建-dom-树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、构建-dom-树"}},[v._v("#")]),v._v(" 一、构建 DOM 树")]),v._v(" "),e("h3",{attrs:{id:"二、样式计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、样式计算"}},[v._v("#")]),v._v(" 二、样式计算")]),v._v(" "),e("p",[v._v("关于CSS样式，它的来源一般是三种:")]),v._v(" "),e("ol",[e("li",[e("strong",[v._v("link标签引用")])]),v._v(" "),e("li",[e("strong",[v._v("style标签中的样式")])]),v._v(" "),e("li",[e("strong",[v._v("元素的内嵌style属性")])])]),v._v(" "),e("ul",[e("li",[v._v("格式化：")])]),v._v(" "),e("p",[v._v("首先，浏览器是无法直接识别 CSS 样式文本的，因此渲染引擎需要将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。")]),v._v(" "),e("ul",[e("li",[v._v("标准化：")])]),v._v(" "),e("p",[v._v("有一些 CSS 样式的数值并不容易被渲染引擎所理解，因此需要在计算样式之前将它们标准化，如"),e("code",[v._v("em")]),v._v("->"),e("code",[v._v("px")]),v._v(", "),e("code",[v._v("red")]),v._v("->"),e("code",[v._v("#ff0000")]),v._v(", "),e("code",[v._v("bold")]),v._v("->"),e("code",[v._v("700")]),v._v("等等。")]),v._v(" "),e("ul",[e("li",[v._v("计算规则：\n"),e("ul",[e("li",[v._v("继承：每个子节点都会默认继承父节点的样式属性，如果父节点中没有找到，就会采用浏览器默认样式，也叫UserAgent样式。")]),v._v(" "),e("li",[v._v("层叠：CSS 最大的特点在于它的层叠性，也就是最终的样式取决于各个属性共同作用的效果，甚至有很多诡异的层叠现象，看过《CSS世界》的同学应该对此深有体会，具体的层叠规则属于深入 CSS 语言的范畴，这里就不过多介绍了。")])])])]),v._v(" "),e("h3",{attrs:{id:"三、生成布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、生成布局"}},[v._v("#")]),v._v(" 三、生成布局")]),v._v(" "),e("p",[v._v("在已经生成了DOM树和DOM样式，接下来要做的就是通过浏览器的布局系统确定元素的位置，也就是要生成一棵布局树(Layout Tree)。")]),v._v(" "),e("p",[v._v("布局树生成的大致工作如下:")]),v._v(" "),e("ol",[e("li",[v._v("遍历生成的 DOM 树节点，并把他们添加到"),e("code",[v._v("布局树中")]),v._v("。")]),v._v(" "),e("li",[v._v("计算布局树节点的坐标位置。")])]),v._v(" "),e("p",[e("img",{attrs:{src:t(424),alt:""}})]),v._v(" "),e("p",[v._v("注意：生成时会排除 "),e("code",[v._v("display: none")]),v._v(" 的节点，并且这个过程需要注意的是"),e("code",[v._v("回流和重绘")]),v._v("。")]),v._v(" "),e("p",[e("strong",[v._v("布局完成过程中，如果有js操作或者其他操作，对元素的颜色，背景等作出改变就会引起重绘，如果有对元素的大小、定位等有改变则会引起回流。")])]),v._v(" "),e("h3",{attrs:{id:"四、建图层树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、建图层树"}},[v._v("#")]),v._v(" 四、建图层树")]),v._v(" "),e("p",[v._v("页面中有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree），如图：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(425),alt:""}})]),v._v(" "),e("p",[v._v('如果你熟悉 PS，相信你会很容易理解图层的概念，正是这些图层叠加在一起构成了最终的页面图像。在浏览器中，你可以打开 Chrome 的"开发者工具"，选择"Layers"标签。渲染引擎给页面分了很多图层，这些图层按照一定顺序叠加在一起，就形成了最终的页面。')]),v._v(" "),e("p",[v._v("并不是布局树的每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于父节点的图层。那么需要满足什么条件，渲染引擎才会为特定的节点创建新的层呢？"),e("code",[v._v("待定？？")])]),v._v(" "),e("h3",{attrs:{id:"五、栅格化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、栅格化"}},[v._v("#")]),v._v(" 五、栅格化")]),v._v(" "),e("p",[v._v("合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图。如图：")]),v._v(" "),e("p",[e("img",{attrs:{src:t(426),alt:""}})]),v._v(" "),e("p",[v._v("通常一个页面可能很大，但是用户只能看到其中的一部分，我们把用户可以看到的这个部分叫做视口（viewport）。在有些情况下，有的图层可以很大，比如有的页面你使用滚动条要滚动好久才能滚动到底部，但是通过视口，用户只能看到页面的很小一部分，所以在这种情况下，要绘制出所有图层内容的话，就会产生太大的开销，而且也没有必要。")]),v._v(" "),e("h3",{attrs:{id:"六、显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、显示"}},[v._v("#")]),v._v(" 六、显示")]),v._v(" "),e("p",[v._v("通常一个页面可能很大，但是用户只能看到其中的一部分，我们把用户可以看到的这个部分叫做视口（viewport）。在有些情况下，有的图层可以很大，比如有的页面你使用滚动条要滚动好久才能滚动到底部，但是通过视口，用户只能看到页面的很小一部分，所以在这种情况下，要绘制出所有图层内容的话，就会产生太大的开销，而且也没有必要。")]),v._v(" "),e("p",[e("strong",[v._v("渲染过程参考")])]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000014520786",target:"_blank",rel:"noopener noreferrer"}},[v._v("浏览器渲染流程&Composite（渲染层合并）简单总结"),e("OutboundLink")],1)])]),v._v(" "),e("h2",{attrs:{id:"断开连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#断开连接"}},[v._v("#")]),v._v(" 断开连接")]),v._v(" "),e("p",[v._v("四次挥手后，client和server成功地断开了连接~")]),v._v(" "),e("p",[v._v("刚开始双方处于"),e("code",[v._v("ESTABLISHED")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第一次挥手")])]),v._v(" "),e("p",[v._v("客户端想要关闭连接，向服务器发送"),e("code",[v._v("FIN")]),v._v("报文，发送完毕后，客户端进入"),e("code",[v._v("FIN_WAIT_1")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第二次挥手")])]),v._v(" "),e("p",[v._v("服务端收到该"),e("code",[v._v("FIN")]),v._v("报文后，就向客户端发送"),e("code",[v._v("ACK")]),v._v("应答报文，接着服务端进入"),e("code",[v._v("CLOSED_WAIT")]),v._v("状态。")]),v._v(" "),e("p",[v._v("客户端接收到服务端的"),e("code",[v._v("ACK")]),v._v("应答报文后，进入"),e("code",[v._v("FIN_WAIT_2")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第三次挥手")])]),v._v(" "),e("p",[v._v("服务端处理完数据后，向客户端发送"),e("code",[v._v("FIN")]),v._v("报文，发送完毕后，服务器端进入"),e("code",[v._v("LAST_ACK")]),v._v("状态。")]),v._v(" "),e("ul",[e("li",[v._v("第四次挥手")])]),v._v(" "),e("p",[v._v("客户端接收到来自服务端的"),e("code",[v._v("FIN")]),v._v("报文后，回一个"),e("code",[v._v("ACK")]),v._v("应答报文，并进入"),e("code",[v._v("TIME_WAIT")]),v._v("状态。")]),v._v(" "),e("p",[v._v("服务端接收到这个确认包之后，关闭连接，进入"),e("code",[v._v("CLOSED")]),v._v("状态，至此"),e("strong",[v._v("服务端已经完成连接的关闭")]),v._v("。")]),v._v(" "),e("p",[v._v("客户端等待了"),e("code",[v._v("2MSL")]),v._v("之后，自动进入"),e("code",[v._v("CLOSED")]),v._v("状态，"),e("strong",[v._v("至此客户端也完成连接的关闭")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000006879700",target:"_blank",rel:"noopener noreferrer"}},[v._v("前端经典面试题: 从输入URL到页面加载发生了什么？"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/DLq_GIkdnuOayThfi3jI0A",target:"_blank",rel:"noopener noreferrer"}},[v._v("面试官：浏览器输入URL后发生了什么？"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);