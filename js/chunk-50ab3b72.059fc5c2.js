(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ab3b72"],{"2ae4":function(e,i,t){"use strict";t.r(i);var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("div",{staticClass:"area"},[t("h2",[e._v("Verticle images")]),e._m(0),t("p",[e._v("Clipper-basic will set it’s layout ratio same as image.")]),t("p",[e._v("Clipper-fixed will set it’s layout ratio same as its “ratio” attribute.")]),e._m(1),e._m(2),e._m(3),t("h3",[e._v("upload image")]),t("img",{staticClass:"pic",attrs:{src:"long.jpg"}}),t("h3",[e._v("Clipper-fixed")]),t("p",[e._v("Clipper-fixed will set it’s layout ratio same as its “ratio” attribute (default 1).")]),t("clipper-fixed",{staticClass:"sample",attrs:{src:"long.jpg"}}),t("h3",[e._v("Clipper-basic")]),t("p",[e._v("Clipper-basic will set it’s layout ratio same as image.")]),t("p",[e._v("It becomes too long.")]),t("clipper-basic",{staticClass:"sample",attrs:{src:"long.jpg"}}),t("p",[e._v("To avoid this, just use clipper-fixed instead, or you need to do some extra work.")])],1),t("div",{staticClass:"area"},[t("h2",[e._v("Clipper-basic based on height")]),t("h3",[e._v("implement load event")]),e._m(4),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.html,expression:"code.html"}]},[t("code",{staticClass:"html"})]),t("p",[e._v("then you can implement the load event, if it's a verticle image, calc max-width based on your maxHeight, otherwise use maxWidth directly.")]),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.code.js,expression:"code.js"}]},[t("code",{staticClass:"javascript"})]),t("clipper-upload",{model:{value:e.src,callback:function(i){e.src=i},expression:"src"}},[e._v("upload image")]),t("clipper-basic",{ref:"clipper",style:e.basicStyle,attrs:{src:e.src},on:{load:e.imgLoad}},[t("div",{attrs:{slot:"placeholder"},slot:"placeholder"},[e._v("No image")])])],1)])},s=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Clipper-basic, which acts like a "),t("i",[e._v("img")]),e._v(" element, will automatically set its height "),t("b",[e._v("based on width")]),e._v(". ")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("For example you set both clipper-basic and clipper-fixed to have max-width 500 pixels, \n        upload a image which width and height are "),t("u",[e._v("4:3")]),e._v(", then clipper-basic will be "),t("u",[e._v("500 x 375")]),e._v(".")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Assume clipper-fixed has attribute ratio set to 1, then clipper-fixed will be "),t("u",[e._v("500 x 500")]),e._v(".")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("This might not be an good idea for clipper-basic when uploading a verticle image, if you upload an image which is 1:2, \n        clipper-basic will become "),t("u",[e._v("500 x 1000")]),e._v(" that might ruin the layout of the page.\n        ")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("First add a "),t("i",[e._v("v-on")]),e._v(" to clipper-basic's load event, and binding style to a style object.")])}],l=t("09b5"),r={data:function(){return{code:l["c"],src:"long.jpg",maxWidth:700,maxHeight:500,based:850}},methods:{imgLoad:function(){var e=this.$refs.clipper.imgRatio;this.based=e<1?this.maxHeight*e:this.maxWidth}},computed:{basicStyle:function(){return{maxWidth:this.based+"px"}}}},c=r,o=(t("b0ee"),t("2877")),p=Object(o["a"])(c,a,s,!1,null,"31ebd3fe",null);p.options.__file="Ex-verticle-images.vue";i["default"]=p.exports},6210:function(e,i,t){},b0ee:function(e,i,t){"use strict";var a=t("6210"),s=t.n(a);s.a}}]);
//# sourceMappingURL=chunk-50ab3b72.059fc5c2.js.map