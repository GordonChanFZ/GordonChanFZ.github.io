(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1477:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-build异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-build异常"}},[s._v("#")]),s._v(" 1.build异常")]),s._v(" "),a("p",[s._v("资源加载失败，基本都是路径出了问题。查看dist/index.html文件可以看到，资源路径都写的是根目录下 / ：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(509),alt:"img"}})]),s._v(" "),a("p",[s._v("这里的根目录 / 路径是我们之前在/docs/.vuepress/config.js中配置的base字段：")]),s._v(" "),a("p",[a("img",{attrs:{src:t(510),alt:"img"}})]),s._v(" "),a("p",[s._v('把base更改为：  base"./"')]),s._v(" "),a("blockquote",[a("p",[s._v("本地开发时，把base注释掉，不然会出现 cannot get")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(511),alt:"img"}})]),s._v(" "),a("p",[s._v("然后最重要的一步"),a("br"),s._v("\n最重要是在node_modules找到这个文件")]),s._v(" "),a("p",[s._v("在node_modules/@vuepress/core/lib/client/app.js这个文件注释掉mode: 'history',")]),s._v(" "),a("p",[a("img",{attrs:{src:t(512),alt:"img"}})]),s._v(" "),a("p",[a("img",{attrs:{src:t(513),alt:"img"}})]),s._v(" "),a("p",[s._v("最后再打包一下就可以了。")]),s._v(" "),a("h2",{attrs:{id:"_2-文章中的图片引用问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-文章中的图片引用问题"}},[s._v("#")]),s._v(" 2.文章中的图片引用问题")]),s._v(" "),a("p",[s._v("Vuepress中静态资源放在public下，但是typora编辑的时候使用相对文档，使用偏好是在哪个目录下编辑，图片就生成在哪个目录下。")]),s._v(" "),a("p",[s._v("解决办法"),a("br"),s._v("\n下载解析插件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save-dev markdown-it-disable-url-encode\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置 .vuepress/config.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理路径问题")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("markdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("extendMarkdown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("md")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("breaks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"markdown-it-disable-url-encode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("3.打包的js文件超过500kb报错")]),s._v(" "),a("p",[s._v("下载包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" increase-memory-limit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("调大参数")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windows ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("--max_old_space_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#linux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("--max_old_space_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("4.格式异常，特别是网络连接图片")]),s._v(" "),a("p",[a("img",{attrs:{src:t(514),alt:"img"}})]),s._v(" "),a("p",[s._v("解决：修改为小写png格式")])])}),[],!1,null,null,null);a.default=e.exports},509:function(s,a,t){s.exports=t.p+"assets/img/e2bedeb3df624a7f8e6f64e6483c661f.0ca4cde5.png"},510:function(s,a,t){s.exports=t.p+"assets/img/6467d258a36b41309c765e907f86890b.4e1345c4.png"},511:function(s,a,t){s.exports=t.p+"assets/img/a62383281cd244acaadf5e1abfbff7f8.f72afb70.png"},512:function(s,a,t){s.exports=t.p+"assets/img/c3f40a8989604df3b9d7697dfc355bd3.40f5c0a0.png"},513:function(s,a,t){s.exports=t.p+"assets/img/385c2c650c8e48b2894346dddb8f42a4.13bda6d5.png"},514:function(s,a,t){s.exports=t.p+"assets/img/2381632-20210710194626619-615715622.b97104c9.png"}}]);