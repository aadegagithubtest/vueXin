(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{187:function(t,e,n){},188:function(t,e,n){"use strict";var o=n(3),i=n(13),r=n(16),s=n(67),l=n(65),c=n(6),a=n(87).f,v=n(86).f,u=n(9).f,p=n(191).trim,f=o.Number,d=f,h=f.prototype,_="Number"==r(n(66)(h)),b="trim"in String.prototype,m=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,o,i,r=(e=b?e.trim():p(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var s,c=e.slice(2),a=0,v=c.length;a<v;a++)if((s=c.charCodeAt(a))<48||s>i)return NaN;return parseInt(c,o)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(_?c(function(){h.valueOf.call(n)}):"Number"!=r(n))?s(new d(m(e)),n,f):m(e)};for(var x,g=n(7)?a(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;g.length>w;w++)i(d,x=g[w])&&!i(f,x)&&u(f,x,v(d,x));f.prototype=h,h.constructor=f,n(11)(o,"Number",f)}},190:function(t,e,n){"use strict";var o=n(187);n.n(o).a},191:function(t,e,n){var o=n(10),i=n(17),r=n(6),s=n(192),l="["+s+"]",c=RegExp("^"+l+l+"*"),a=RegExp(l+l+"*$"),v=function(t,e,n){var i={},l=r(function(){return!!s[t]()||"​"!="​"[t]()}),c=i[t]=l?e(u):s[t];n&&(i[n]=c),o(o.P+o.F*l,"String",i)},u=v.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(a,"")),t};t.exports=v},192:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},193:function(t,e,n){"use strict";var o={name:"x-button",components:{"x-icon":n(189).a},methods:{onClick:function(){this.$emit("click"),this.dangerAnimation(),this.loading},dangerAnimation:function(){var t=this.$refs.button.classList;t.remove("loop"),t.add("loop"),setTimeout(function(){t.remove("loop")},300)},focusOn:function(){},blurIt:function(){}},computed:{disabledStyle:function(){if(this.disabled)return"fill:#ccc; pointer-events: none;"},typeStyle:function(){if(this.type)return"type-".concat(this.type)},sizeStyle:function(){if(this.size)return"size-".concat(this.size)},roundStyle:function(){if(this.round)return"border-radius:21px;"},circleStyle:function(){if(this.circle)return"circle"},plainStyle:function(){if(this.plain)return"plain"},dangerStyle:function(){if(this.danger)return"danger"},dashedStyle:function(){if(this.dashed)return"dashed"},loadingStyle:function(){if(this.loading)return"loadingCloak"}},props:{icon:{type:String},disabled:{type:Boolean,default:!1},type:{type:String,validator:function(t){return["primary","success","warn","error","info"].indexOf(t)>-1}},plain:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:function(t){return["big","medium","small","mini"].indexOf(t)>-1}},round:{type:Boolean,default:!1},color:{type:String,default:function(){return this.type?"white":"black"}},loading:{type:Boolean,default:!1},danger:{type:Boolean,default:!1},position:{type:String,default:"left",validator:function(t){return!("left"!==t&&"right"!==t)}},dashed:{type:Boolean,default:!1},circle:{type:Boolean,default:!1}}},i=(n(190),n(1)),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{ref:"button",staticClass:"x-button",class:[["icon-"+t.position],t.typeStyle,t.sizeStyle,t.plainStyle,t.dangerStyle,t.dashedStyle,t.loadingStyle,t.circleStyle],style:t.roundStyle,attrs:{disabled:t.disabled},on:{click:t.onClick,focus:t.focusOn,blur:t.blurIt}},[t.icon||t.loading?n("x-icon",{class:{loading:t.loading},style:t.disabledStyle,attrs:{name:t.icon,color:t.color}}):t._e(),t._v(" "),n("div",{staticClass:"x-button-content",style:t.disabledStyle},[t._t("default")],2),t._v(" "),t.disabled?n("div",{staticClass:"cloakLeft"}):t._e(),t._v(" "),t.disabled?n("div",{staticClass:"cloakRight"}):t._e()],1)},[],!1,null,"64eb5124",null);e.a=r.exports},210:function(t,e,n){},233:function(t,e,n){"use strict";var o=n(210);n.n(o).a},234:function(t,e,n){"use strict";n(188),n(8);var o={name:"x-popover",data:function(){return{visible:!1,outClick:!1}},mounted:function(){this.addEventListener()},beforeDestroy:function(){this.removeAll()},props:{position:{type:String,default:"top",validator:function(t){return["top","topLeft","topRight","bottomLeft","bottom","bottomRight","leftTop","left","leftBottom","rightTop","right","rightBottom"].indexOf(t)>-1}},trigger:{type:String,default:"click",validator:function(t){return["click","hover","focus"].indexOf(t)>-1}},theme:{type:String,default:"blackBorder",validator:function(t){return["blackBorder","whiteBg"].indexOf(t)>-1}}},computed:{themeStyle:function(){if("whiteBg"===this.theme)return"theme2"}},methods:{removeAll:function(){var t=this,e=this.$refs,n=e.popover,o=e.contentWrapper;this.event[this.trigger].event.forEach(function(e){n.removeEventListener(e,t.event[t.trigger].fun)}),this.$el.remove(),o.remove(),clearTimeout(this.timer)},contentPosition:function(){var t=this.$refs,e=t.contentWrapper,n=t.trigger;document.body.appendChild(e);var o=n.getBoundingClientRect(),i=o.top,r=o.left,s=o.height,l=o.width,c=e.clientWidth,a=e.clientHeight,v=-(Number(c)-l),u=-(Number(a)-s),p={topLeft:{top:i+window.scrollY,left:r+window.scrollX,transition:"translate(0,-100%)"},top:{top:i+window.scrollY,left:r+window.scrollX,transition:"translate(".concat(v/2,"px,-100%)")},topRight:{top:i+window.scrollY,left:r+window.scrollX,transition:"translate(calc(-100% + ".concat(l,"px),-100%)")},leftTop:{top:i+window.scrollY,left:r+window.scrollX,transition:"translate(-100%,0)"},left:{top:i+window.scrollY,left:r+window.scrollX,transition:"translate(-100%,".concat(u/2,"px)")},leftBottom:{top:i+window.scrollY,left:r+window.scrollX,transition:"translate(-100%,-50%)"},bottomLeft:{top:i+s+window.scrollY,left:r+window.scrollX,transition:"translate(0,0)"},bottom:{top:i+s+window.scrollY,left:r+window.scrollX,transition:"translate(".concat(v/2,"px,0)")},bottomRight:{top:i+s+window.scrollY,left:r+window.scrollX,transition:"translate(calc(-100% + ".concat(l,"px),0)")},rightTop:{top:i+window.scrollY,left:r+l+window.scrollX,transition:"translate(0,0)"},right:{top:i+window.scrollY,left:r+l+window.scrollX,transition:"translate(0,".concat(u/2,"px)")},rightBottom:{top:i+window.scrollY,left:r+l+window.scrollX,transition:"translate(0,-50%)"}};e.style.left=p[this.position].left+"px",e.style.top=p[this.position].top+"px",e.style.transform=p[this.position].transition},addEventListener:function(){var t=this,e=this.$refs.popover;this.event={click:{event:["click"],fun:this.onClick},hover:{event:["mouseenter","mouseleave"],fun:this.hoverToggle},focus:{event:["click"],fun:this.focusToggle}},this.event[this.trigger].event.forEach(function(n){e.addEventListener(n,t.event[t.trigger].fun)})},listenerDocument:function(){document.addEventListener("click",this.eventHandler)},removeListener:function(){document.removeEventListener("click",this.eventHandler)},isconWrapepr:function(t){var e=this;return t.path.some(function(t){return t===e.$refs.contentWrapper})},isPopover:function(t){var e=this;return t.path.some(function(t){return t===e.$refs.popover})},hoverOutAndClose:function(){var t=this;clearTimeout(this.timer),"hover"===this.trigger&&(this.timer=setTimeout(function(){t.visible=!1},120))},hoverInOPen:function(){clearTimeout(this.timer),this.outClick||"hover"!==this.trigger||(this.visible=!0)},outerClick:function(){this.outClick=!0,this.visible=!1},clickCloseAll:function(){this.visible=!1,this.removeListener()},eventHandler:function(t){this.isPopover(t)||this.isconWrapepr(t)||this.isconWrapepr(t)||!this.$refs.popover||this.$refs.popover===t.target||this.$refs.popover.contains(t.target)||this.clickCloseAll()},clickToggle:function(){var t=this;this.visible=!this.visible,this.visible?this.$nextTick(function(){t.contentPosition(),t.listenerDocument()}):this.removeListener()},hoverToggle:function(t){var e=this;clearTimeout(this.timer),this.outClick=!1,"mouseenter"===t.type?(this.visible=!0,this.$nextTick(function(){e.contentPosition()})):this.timer=setTimeout(function(){e.visible=!1},120)},focusToggle:function(){var t=this;this.$refs.trigger.children[0]===document.activeElement?(this.visible=!0,this.$nextTick(function(){t.contentPosition(),t.listenerDocument()})):this.removeListener()},onClick:function(){"click"===this.trigger&&this.$refs.trigger.contains(event.target)&&this.clickToggle()},beforeEnter:function(t){this.$refs.contentSlot.style.overflow="",t.style.opacity=0},enter:function(t){setTimeout(function(){t.style.opacity=1},30)},leave:function(t){t.style.opacity=0},beforeLeave:function(t){t.style.opacity=1,this.$refs.contentSlot.style.overflow="hidden"},afterLeave:function(){this.outClick=!1,this.$refs.contentSlot&&(this.$refs.contentSlot.style.overflow="")}}},i=(n(233),n(1)),r=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"popover",staticClass:"popover"},[n("transition",{on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],ref:"contentWrapper",staticClass:"content-wrapper",class:[["position-"+t.position],t.themeStyle],on:{mouseenter:t.hoverInOPen,mouseleave:t.hoverOutAndClose}},[n("div",{ref:"contentSlot",staticClass:"contentSlot"},[t._t("content",null,{close:t.outerClick})],2)])]),t._v(" "),n("span",{ref:"trigger",staticStyle:{display:"inline-block"}},[t._t("default")],2)],1)},[],!1,null,"6e3e32ed",null);e.a=r.exports},470:function(t,e,n){"use strict";n.r(e);var o=n(234),i=n(195),r=n(194),s=n(193),l=n(196),c=n.n(l),a={name:"grid-arrange",data:function(){return{selectTab:[1],input1:'\n```html\n<x-popover position="left">\n<template slot="content" slot-scope="close">\n <div>支持内部关闭</div>\n <x-button @click="close.close">关闭</x-button>\n</template>\n  <x-button>左边</x-button>\n</x-popover>\n\n<x-popover position="bottom">\n<template slot="content">\n  <div>popover内容</div>\n  </template>\n <x-button>底部</x-button>\n</x-popover>\n\n<x-popover>\n<template slot="content">\n <div>\n <a href="https://www.baidu.com">去百度</a>\n </div>\n</template>\n<x-button>顶部</x-button>\n</x-popover>\n\n<x-popover position="right">\n<template slot="content">\n   <div>popover内容</div>\n</template>\n<x-button>右边</x-button>\n</x-popover>\n\n<x-popover position="right" theme="whiteBg">\n<template slot="content">\n   <div>popover内容</div>\n  </template>\n  <x-button>右边</x-button>\n</x-popover>\n\n```'}},methods:{},components:{"x-popover":o.a,"x-collapse":i.a,"x-collapse-item":r.a,"x-button":s.a},computed:{html:function(){return c()(this.input1)}},beforeDestroy:function(){this.$el.remove()}},v=n(1),u=Object(v.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("div",{staticStyle:{"margin-top":"20px"}},[n("x-collapse",{attrs:{selected:t.selectTab,exhibition:""},on:{"update:selected":function(e){t.selectTab=e}}},[n("template",{slot:"description"},[n("div",{staticStyle:{"margin-left":"100px"}},[n("x-popover",{attrs:{position:"left"},scopedSlots:t._u([{key:"content",fn:function(e){return[n("div",[t._v("支持内部关闭")]),t._v(" "),n("x-button",{on:{click:e.close}},[t._v("关闭")])]}}])},[t._v(" "),n("x-button",[t._v("左边")])],1),t._v(" "),n("x-popover",{attrs:{position:"bottom"}},[n("template",{slot:"content"},[n("div",[t._v("popover内容")])]),t._v(" "),n("x-button",[t._v("底部")])],2),t._v(" "),n("x-popover",[n("template",{slot:"content"},[n("div",[n("a",{attrs:{href:"https://www.baidu.com"}},[t._v("去百度")])])]),t._v(" "),n("x-button",[t._v("顶部")])],2),t._v(" "),n("x-popover",{attrs:{position:"right"}},[n("template",{slot:"content"},[n("div",[t._v("popover内容")])]),t._v(" "),n("x-button",[t._v("右边")])],2)],1),t._v(" "),n("div",{staticStyle:{"margin-left":"100px","margin-top":"60px"}},[n("x-popover",{attrs:{position:"left",theme:"whiteBg"},scopedSlots:t._u([{key:"content",fn:function(e){return[n("div",[t._v("支持内部关闭")]),t._v(" "),n("x-button",{on:{click:e.close}},[t._v("关闭")])]}}])},[t._v(" "),n("x-button",[t._v("左边")])],1),t._v(" "),n("x-popover",{attrs:{position:"bottom",theme:"whiteBg"}},[n("template",{slot:"content"},[n("div",[t._v("popover内容")])]),t._v(" "),n("x-button",[t._v("底部")])],2),t._v(" "),n("x-popover",{attrs:{theme:"whiteBg"}},[n("template",{slot:"content"},[n("div",{staticClass:"xxx"},[n("div",{staticClass:"xx"},[n("x-button",[t._v("点我")])],1)]),t._v(" "),n("div",[n("a",{attrs:{href:"https://www.baidu.com"}},[t._v("去百度")])])]),t._v(" "),n("x-button",[t._v("顶部")])],2),t._v(" "),n("x-popover",{attrs:{position:"right",theme:"whiteBg"}},[n("template",{slot:"content"},[n("div",[t._v("popover内容")])]),t._v(" "),n("x-button",[t._v("右边")])],2),t._v(" "),n("x-popover",{attrs:{position:"top",theme:"whiteBg"}},[n("template",{slot:"content"},[n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")]),t._v(" "),n("x-button",[t._v("点我")])],1),t._v(" "),n("x-button",[t._v("超出")])],2)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticStyle:{color:"#666666"}},[t._v("通过设置 "),n("code",[t._v("position")]),t._v(" 可以改变气泡框弹出的位置\n                    "),n("br"),t._v("\n                    默认位置是在顶部\n                    "),n("br"),t._v("\n                    内部可嵌入元素调用外面close关闭的功能，只需绑定slot-scope。\n\n                    "),n("br"),t._v("\n                    可以设置 "),n("code",[t._v("theme")]),t._v("改变气泡的样式，目前只有默认的和"),n("code",[t._v("whiteBg")]),t._v("主题。\n                    "),n("br"),t._v("\n                    规定了气泡的大小，如果超出会以scroll展示\n                ")])]),t._v(" "),n("x-collapse-item",{attrs:{name:"1",title:"展示代码",title2:"隐藏代码"}},[n("div",{domProps:{innerHTML:t._s(t.html)}})])],2)],1)])},[],!1,null,"0937cb4d",null);e.default=u.exports}}]);