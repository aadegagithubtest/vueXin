(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},212:function(e,t,n){"use strict";n(50);var o=n(189),i={name:"x-menu-item",inject:["root"],created:function(){this.root.addItem(this),this.initialColor()},beforeDestroy:function(){clearTimeout(this.timer)},props:{name:{type:String,required:!0},iconName:{type:String},disabled:{type:Boolean,default:!1}},components:{"x-icon":o.a},data:function(){return{selected:!1,vertical:!1,textColor:null,activeColor:null,activeBackGroundColor:null}},methods:{onClick:function(){if(!this.disabled){this.root.selectedArr=[],this.$emit("menuItemUpdate",this.name);var e=this.$parent.$el.classList.contains("x-sub-menu"),t=this.$parent.$el.classList.contains("x-menu-item-group");this.root.selectedArr.unshift(this.name),e||t?(this.root.selectedArr=[],this.root.selectedArr.unshift(this.name),this.tellParents(this),this.$parent.childClosePopover()):console.log(this.root.selectedArr)}},tellParents:function(e){this.disabled||("x-sub-menu"===e.$parent.$parent.$options.name||"x-menu-item-group"===e.$parent.$parent.$options.name?(this.root.selectedArr.unshift(e.$parent.name),this.tellParents(e.$parent)):(this.root.selectedArr.unshift(e.$parent.name),console.log(this.root.selectedArr)))},addHoverColor:function(){this.disabled||(this.activeColor&&(this.$refs.item.style.color=this.activeColor),this.activeBackGroundColor&&(this.$refs.item.style.backgroundColor=this.activeBackGroundColor))},removeHoverColor:function(){this.disabled||(this.activeColor&&!this.selected&&(this.$refs.item.style.color=this.textColor),this.activeBackGroundColor&&!this.selected&&(this.$refs.item.style.backgroundColor=null))},beforeEnter:function(e){e.style.position="relative",e.style.left="50%",e.style.width=0},enter:function(e){setTimeout(function(){e.style.width="100%",e.style.left="0"})},leave:function(e){e.style.position="relative",e.style.left="50%",e.style.width=0},beforeLeave:function(e){e.style.width="100%",e.style.left="0"},theFirstItem:function(){return"x-menu"===this.$parent.$options.name},changeXianColor:function(e){this.disabled||(this.$refs.xian.style.borderBottomColor=e)},initialColor:function(){var e=this;this.disabled||this.$nextTick(function(){e.activeColor&&e.selected&&(e.$refs.item.style.color=e.activeColor)})}},watch:{selected:function(){this.selected&&this.activeColor?(this.$refs.item.style.backgroundColor=this.activeBackGroundColor,this.$refs.item.style.color=this.activeColor):(this.$refs.item.style.backgroundColor=null,this.$refs.item.style.color=this.textColor)}}},r=(n(220),n(1)),a=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"item",staticClass:"x-menu-item",class:{active:e.selected,vertical:e.vertical,disabled:e.disabled},style:{color:e.textColor},on:{mouseenter:e.addHoverColor,mouseleave:e.removeHoverColor,click:e.onClick}},[e.iconName?n("x-icon",{staticStyle:{"margin-right":"6px",color:"#515a6e"},attrs:{color:e.selected?e.activeColor:e.textColor,name:e.iconName}}):e._e(),e._v(" "),e._t("default")],2),e._v(" "),n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"before-leave":e.beforeLeave,leave:e.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.selected&&e.theFirstItem()&&!e.vertical,expression:"selected&&theFirstItem()&&!vertical"}],ref:"xian",staticClass:"xian"})])],1)},[],!1,null,"634e175e",null);t.a=a.exports},213:function(e,t,n){"use strict";n(50),n(8);var o={name:"x-menu",props:{selected:{type:Array,default:function(){return[]}},single:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},backGroundColor:{type:String},textColor:{type:String},activeColor:{type:String},activeBackGroundColor:{type:String},opacity:{type:Boolean,default:!1}},data:function(){return{items:[],selectedArr:[]}},provide:function(){return{root:this}},mounted:function(){this.isOpacity(),this.tellChildrenColor(),this.tellChilcVertical(),this.updateChild(),this.watchChild()},updated:function(){this.updateChild()},methods:{addItem:function(e){this.items.push(e)},updateChild:function(){var e=this;this.items.forEach(function(t){e.selected.indexOf(t.name)>-1?t.selected=!0:t.selected=!1})},watchChild:function(){var e=this;this.items.forEach(function(t){t.$on("menuItemUpdate",function(t){if(e.single)e.$emit("update:selected",[t]);else if(e.selected.indexOf(t)<0){var n=JSON.parse(JSON.stringify(e.selected));n.push(t),e.$emit("update:selected",n)}})})},tellChilcVertical:function(){this.vertical&&this.$children.forEach(function(e){e.vertical=!0,"x-sub-menu"===e.$options.name&&e.tellChilcVertical()})},tellChildrenColor:function(){var e=this;this.textColor&&this.backGroundColor&&this.activeColor&&this.$children.forEach(function(t){t.textColor=e.textColor,t.changeXianColor(e.activeColor),e.activeColor&&(t.activeColor=e.activeColor),e.activeBackGroundColor&&(t.activeBackGroundColor=e.activeBackGroundColor),"x-sub-menu"===t.$options.name&&(t.tellChildrenColor(e.backGroundColor),e.backGroundColor&&(t.backGroundColor=e.backGroundColor))})},isOpacity:function(){this.opacity&&(this.$refs.menu.style.opacity=.7)},fadeIn:function(){this.opacity&&(this.$refs.menu.style.opacity=1)},fadeOut:function(){this.opacity&&(this.$refs.menu.style.opacity=.7)}}},i=(n(219),n(1)),r=Object(i.a)(o,function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"menu",staticClass:"x-menu",class:{vertical:this.vertical},style:{backgroundColor:this.backGroundColor,color:this.textColor},on:{mouseleave:this.fadeOut,mouseenter:this.fadeIn}},[this._t("default")],2)},[],!1,null,"7f3c37bb",null);t.a=r.exports},214:function(e,t,n){"use strict";n(8),n(50);var o=n(189),i={name:"x-sub-menu",inject:["root"],data:function(){return{open:!1,vertical:!1,textColor:null,activeColor:null,activeBackGroundColor:null,backGroundColor:null}},computed:{active:function(){return this.root.selectedArr.indexOf(this.name)>-1},notStandFirst:function(){return"x-menu"!==this.$parent.$options.name},isActive:function(){return this.active?"#f89708":"#bfbfbf"},iconActive:function(){return!!this.open}},props:{name:{type:String,required:!0},iconName:{type:String}},components:{"x-icon":o.a},methods:{tellChilcVertical:function(){this.$children.forEach(function(e){e.vertical=!0,"x-sub-menu"!==e.$options.name&&"x-menu-item-group"!==e.$options.name||e.tellChilcVertical()})},openPopover:function(){this.vertical||(clearTimeout(this.timer),this.open=!0,this.onlyOneOpen())},onlyOneOpen:function(){var e=this;this.$parent.$children.forEach(function(t){t.open&&t.name!==e.name&&(t.open=!1)})},closePopover:function(){var e=this;this.vertical||(this.timer=setTimeout(function(){e.open=!1,clearTimeout(e.timer)},450))},clickOpen:function(){this.vertical&&(this.open=!this.open)},childClosePopover:function(){this.open=!1,"x-sub-menu"===this.$parent.$options.name&&this.$parent.childClosePopover()},beforeEnter:function(e){e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.overflow="hidden",e.style.transition=".3s all ease-in-out"},enter:function(e){e.style.height=e.scrollHeight+"px"},afterEnter:function(e){e.style.overflow="",this.vertical&&(e.style.height="")},afterLeave:function(e){e.style.overflow="",this.vertical&&(e.style.height="")},beforeLeave:function(e){e.style.height=e.scrollHeight+"px",e.style.overflow="hidden",e.style.transition=".1s all ease-in-out",this.vertical&&(e.style.transition=".3s all")},tellChildrenColor:function(e){var t=this;this.$children.forEach(function(n){t.activeColor&&(n.activeColor=t.activeColor),t.activeBackGroundColor&&(n.activeBackGroundColor=t.activeBackGroundColor),n.textColor=t.textColor,"x-sub-menu"===n.$options.name&&(n.tellChildrenColor(e),e&&(n.backGroundColor=e)),"x-menu-item-group"===n.$options.name&&(n.tellChildrenColor(e),e&&(n.backGroundColor=e))})},leave:function(e){setTimeout(function(){e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0})},changeXianColor:function(e){this.$refs.xian.style.borderBottomColor=e},theFirstItem:function(){return"x-menu"===this.$parent.$options.name},beforeEnterXian:function(e){e.style.position="relative",e.style.left="50%",e.style.width=0},enterXian:function(e){setTimeout(function(){e.style.width="100%",e.style.left="0"})},leaveXian:function(e){e.style.position="relative",e.style.left="50%",e.style.width=0},beforeLeaveXian:function(e){e.style.width="100%",e.style.left="0"}},watch:{active:function(){this.active?(this.$refs.title.style.backgroundColor=this.activeBackGroundColor,this.$refs.title.style.color=this.activeColor):(this.$refs.title.style.backgroundColor=null,this.$refs.title.style.color=null)}}},r=(n(221),n(1)),a=Object(r.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"x-sub-menu",class:{vertical:e.vertical}},[n("span",{ref:"title",staticClass:"x-sub-menu-title",class:{active:e.active},style:{color:e.textColor},on:{mouseleave:e.closePopover,mouseenter:e.openPopover,click:e.clickOpen}},[e.iconName?n("x-icon",{staticClass:"title-icon",attrs:{color:e.active?e.activeColor:e.textColor,name:e.iconName}}):e._e(),e._v(" "),e._t("title"),e._v(" "),e.notStandFirst?n("x-icon",{staticStyle:{width:".6em","margin-left":"5px"},attrs:{name:"arrow",color:e.isActive}}):e._e(),e._v(" "),e.notStandFirst?e._e():n("x-icon",{staticClass:"firstIcon",class:{firstIconactive:e.iconActive},staticStyle:{width:".6em","margin-left":"5px"},attrs:{name:"xia",color:e.isActive}})],2),e._v(" "),n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"x-popover",style:{backgroundColor:e.backGroundColor},on:{mouseenter:e.openPopover,mouseleave:e.closePopover}},[e._t("default")],2)]),e._v(" "),n("transition",{on:{"before-enter":e.beforeEnterXian,enter:e.enterXian,"before-leave":e.beforeLeaveXian,leave:e.leaveXian}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.active&&e.theFirstItem()&&!e.vertical,expression:"active&&theFirstItem()&&!vertical"}],ref:"xian",staticClass:"xian"})])],1)},[],!1,null,"3aa22eb8",null);t.a=a.exports},219:function(e,t,n){"use strict";var o=n(201);n.n(o).a},220:function(e,t,n){"use strict";var o=n(202);n.n(o).a},221:function(e,t,n){"use strict";var o=n(203);n.n(o).a},473:function(e,t,n){"use strict";n.r(t);var o=n(213),i=n(212),r=n(214),a=n(195),l=n(194),s=n(196),c=n.n(s),u={name:"menu-default",data:function(){return{selected:["support"],selectTab1:[1],input1:'```html\n<x-menu :selected.sync="selected"\n               opacity\n               text-color="#fff"\n                 active-color="#ffd04b"\n              active-back-ground-color="#515151"\n                  back-ground-color="#545c64"\n                    >\n          <x-sub-menu name="extension">\n                   <template slot="title">扩展</template>\n                     <x-menu-item name="mac">for Mac</x-menu-item>\n                   <x-menu-item name="windows">for Windows</x-menu-item>\n                </x-sub-menu>\n              <x-sub-menu name="learn">\n                   <template slot="title">如何使用</template>\n                       <x-menu-item name="fast">快速入门</x-menu-item>\n                    <x-menu-item name="advanced">进阶配置</x-menu-item>\n                      <x-menu-item name="language">多语言支持</x-menu-item>\n                <x-sub-menu name="package">\n            <template slot="title">打包管理</template>\n                 <x-sub-menu name="webpack">\n                  <template slot="title">webpack</template>\n                   <x-menu-item name="rookie">webpack快速上手</x-menu-item>\n                 <x-menu-item name="master">webpack从入门到入土</x-menu-item>\n                    <x-menu-item name="fuck">配你🐴呢</x-menu-item>\n                    </x-sub-menu>\n                <x-menu-item name="parcel">使用parcel</x-menu-item>\n              </x-sub-menu>\n              </x-sub-menu>\n                <x-menu-item name="connect">联系我们</x-menu-item>\n                    <x-menu-item name="support">其他支持</x-menu-item>\n   </x-menu>\n```'}},components:{"x-menu":o.a,"x-menu-item":i.a,"x-sub-menu":r.a,"x-collapse":a.a,"x-collapse-item":l.a},computed:{html:function(){return c()(this.input1)}},beforeDestroy:function(){this.$el.remove()}},m=n(1),v=Object(m.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"50px"}},[n("x-collapse",{attrs:{selected:e.selectTab1,exhibition:""},on:{"update:selected":function(t){e.selectTab1=t}}},[n("template",{slot:"description"},[n("div",{staticStyle:{color:"#999999"}},[n("x-menu",{attrs:{selected:e.selected,opacity:"","text-color":"#fff","active-color":"#ffd04b","active-back-ground-color":"#515151","back-ground-color":"#545c64"},on:{"update:selected":function(t){e.selected=t}}},[n("x-sub-menu",{attrs:{name:"extension"}},[n("template",{slot:"title"},[e._v("扩展")]),e._v(" "),n("x-menu-item",{attrs:{name:"mac"}},[e._v("for Mac")]),e._v(" "),n("x-menu-item",{attrs:{name:"windows"}},[e._v("for Windows")])],2),e._v(" "),n("x-sub-menu",{attrs:{name:"learn"}},[n("template",{slot:"title"},[e._v("如何使用")]),e._v(" "),n("x-menu-item",{attrs:{name:"fast"}},[e._v("快速入门")]),e._v(" "),n("x-menu-item",{attrs:{name:"advanced"}},[e._v("进阶配置")]),e._v(" "),n("x-menu-item",{attrs:{name:"language"}},[e._v("多语言支持")]),e._v(" "),n("x-sub-menu",{attrs:{name:"package"}},[n("template",{slot:"title"},[e._v("打包管理")]),e._v(" "),n("x-sub-menu",{attrs:{name:"webpack"}},[n("template",{slot:"title"},[e._v("webpack")]),e._v(" "),n("x-menu-item",{attrs:{name:"rookie"}},[e._v("webpack快速上手")]),e._v(" "),n("x-menu-item",{attrs:{name:"master"}},[e._v("webpack从入门到入土")]),e._v(" "),n("x-menu-item",{attrs:{name:"fuck"}},[e._v("配你🐴呢")])],2),e._v(" "),n("x-menu-item",{attrs:{name:"parcel"}},[e._v("使用parcel")])],2)],2),e._v(" "),n("x-menu-item",{attrs:{name:"connect"}},[e._v("联系我们")]),e._v(" "),n("x-menu-item",{attrs:{name:"support"}},[e._v("其他支持")])],1),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v("\n                使用 "),n("code",[e._v("opacity")]),e._v("，不处于hover状态有一个半透明效果\n            ")],1)]),e._v(" "),n("x-collapse-item",{attrs:{name:"1",title:"展示代码",title2:"隐藏代码"}},[n("div",{domProps:{innerHTML:e._s(e.html)}})])],2)],1)},[],!1,null,"3df7b2f7",null);t.default=v.exports}}]);