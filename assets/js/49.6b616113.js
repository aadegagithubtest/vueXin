(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{209:function(e,t,n){},232:function(e,t,n){"use strict";var r=n(209);n.n(r).a},235:function(e,t,n){"use strict";var r={name:"Input",components:{xIcon:n(189).a},props:{value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String,validator:function(e){return!(e.length>10)||console.error("不能多于十个字")}}},mounted:function(){this.disabled&&(this.$refs.cloak.style.width=getComputedStyle(this.$refs.wrapper).width)}},a=(n(232),n(1)),l=Object(a.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrapper",staticClass:"wrapper",attrs:{disabled:e.disabled}},[n("input",{ref:"input",class:{error:e.error},attrs:{type:"text",disabled:e.disabled,readonly:e.readonly},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){return e.$emit("change",t.target.value)},blur:function(t){return e.$emit("blur",t.target.value)},focus:function(t){return e.$emit("focus",t.target.value)}}}),e._v(" "),e.error?n("xIcon",{attrs:{name:"gantan",color:"#F1453D"}}):e._e(),e._v(" "),e.disabled?n("div",{ref:"cloak",staticClass:"cloak"}):e._e(),e._v(" "),e.error?n("span",{class:{errorMessage:e.error}},[e._v(e._s(e.error))]):e._e()],1)},[],!1,null,"66094aea",null);t.a=l.exports},479:function(e,t,n){"use strict";n.r(t);var r=n(195),a=n(194),l=n(235),o=n(196),i=n.n(o),s={name:"input-demo",data:function(){return{selectTab:[1],value:"只读模式",input1:'```html\n<x-Input  :value="value" readonly>\n</x-Input>\n```'}},methods:{toggle:function(){this.loading=!this.loading}},components:{"x-Input":l.a,"x-collapse":r.a,"x-collapse-item":a.a},computed:{html:function(){return i()(this.input1)}},beforeDestroy:function(){this.$el.remove()}},u=n(1),c=Object(u.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{"margin-top":"20px"}},[n("x-collapse",{attrs:{selected:e.selectTab,exhibition:""},on:{"update:selected":function(t){e.selectTab=t}}},[n("template",{slot:"description"},[n("div",{staticStyle:{"margin-top":"40px"}},[n("x-Input",{attrs:{value:e.value,readonly:""}})],1)]),e._v(" "),n("x-collapse-item",{attrs:{name:"1",title:"展示代码",title2:"隐藏代码"}},[n("div",{domProps:{innerHTML:e._s(e.html)}})])],2)],1)])},[],!1,null,null,null);t.default=c.exports}}]);