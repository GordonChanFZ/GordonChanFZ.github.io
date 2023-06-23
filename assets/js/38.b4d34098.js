(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1470:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"git修改远程仓库地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git修改远程仓库地址"}},[a._v("#")]),a._v(" git修改远程仓库地址")]),a._v(" "),s("p",[s("code",[a._v("git remote -v")]),a._v("     查看关联远程仓库地址")]),a._v(" "),s("p",[s("code",[a._v("git remote set-url origin 新的地址")]),a._v("      修改远程仓库地址")]),a._v(" "),s("p",[s("code",[a._v("git remote -v")]),a._v("     查看是否修改成功")]),a._v(" "),s("h2",{attrs:{id:"git-clone-远程仓库的某个分支-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-clone-远程仓库的某个分支-tag"}},[a._v("#")]),a._v(" git clone 远程仓库的某个分支/tag")]),a._v(" "),s("p",[s("code",[a._v("git clone -b 分支名/tag xxx.git")])]),a._v(" "),s("h2",{attrs:{id:"添加远程仓库地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库地址"}},[a._v("#")]),a._v(" 添加远程仓库地址")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" upstream ssh://主仓库地址\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"git-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-tag"}},[a._v("#")]),a._v(" git tag")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"message"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 为特定的commit创建tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit_sha"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tag 推送指定版本到远程版本库")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tag 推送到远程版本库")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tags")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tags")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1.0*"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获取标签的详细信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" show "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除远程仓库的tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin :refs/tags/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将远程仓库的标签拉取（同步）到当前分支")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--tags")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换tag")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("h2",{attrs:{id:"远程分支改变-如何同步本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程分支改变-如何同步本地"}},[a._v("#")]),a._v(" 远程分支改变，如何同步本地？")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" master main\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch origin\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" origin/main main\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote set-head origin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"git强制提交本地代码到远程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git强制提交本地代码到远程"}},[a._v("#")]),a._v(" git强制提交本地代码到远程")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" origin 远程仓库地址\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(' “添加注释信息"\n'),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#强制提交")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" origin master "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"版本回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[a._v("#")]),a._v(" 版本回退")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看历史提交日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log  \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pretty")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("oneline\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看历史命令")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reflog\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#回退指定版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hard")]),a._v(" commit_id\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##HEAD代表当前版本，一个^代表向上回退一个版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--hard")]),a._v(" HEAD^\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h2",{attrs:{id:"中文乱码问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中文乱码问题"}},[a._v("#")]),a._v(" 中文乱码问题")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# git status 乱码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" core.quotepath "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#git commit 乱码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" i18n.commitencoding utf-8\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#git status 乱码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" i18n.logoutputencoding utf-8\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("注意：如果是Linux系统，需要设置环境变量 "),s("code",[a._v("export LESSCHARSET=utf-8")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/ayseeing/p/4203679.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Git for windows 中文乱码解决方案"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"git在-gitignore添加忽略文件不起作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git在-gitignore添加忽略文件不起作用"}},[a._v("#")]),a._v(" git在.gitignore添加忽略文件不起作用")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--cached")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("重新"),s("code",[a._v("add")]),a._v("和"),s("code",[a._v("commit")]),a._v("即可解决")]),a._v(" "),s("h2",{attrs:{id:"多分支合并代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多分支合并代码"}},[a._v("#")]),a._v(" 多分支合并代码")]),a._v(" "),s("p",[a._v("对于多分支的代码库，将代码从一个分支转移到另一个分支是常见需求。")]),a._v(" "),s("p",[a._v("这时分两种情况。一种情况是，你需要另一个分支的所有代码变动，那么就采用合并（"),s("code",[a._v("git merge")]),a._v("）。另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用 Cherry pick。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 得到最新一次提交的commitHash（类似5b6612d84a7f401f4519b73f38348bc094ba5501）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("format:"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%H"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 可以查看所有的提交信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Cherry pick 支持一次转移多个提交")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("HashA"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("HashB"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("参看："),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("git cherry-pick 教程（阮一峰的网络日志）"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"merge-和-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge-和-rebase"}},[a._v("#")]),a._v(" merge 和 rebase")]),a._v(" "),s("p",[a._v("比如"),s("code",[a._v("git pull")]),a._v("这个命令，我们经常会用，它默认是使用"),s("code",[a._v("merge")]),a._v("方式将远端别人的修改拉到本地；如果带上上参数"),s("code",[a._v("git pull -r")]),a._v("，就会使用"),s("code",[a._v("rebase")]),a._v("的方式将远端修改拉到本地。")]),a._v(" "),s("p",[a._v("这二者最直观的区别就是："),s("code",[a._v("merge")]),a._v("方式合并的分支会有很多「分叉」，而"),s("code",[a._v("rebase")]),a._v("方式合并的分支就是一条直线。")]),a._v(" "),s("p",[s("strong",[a._v("对于多人协作，"),s("code",[a._v("merge")]),a._v("方式并不好")]),a._v("。")]),a._v(" "),s("p",[a._v("那么问题来了，"),s("code",[a._v("rebase")]),a._v("是如何将两条不同的分支合并到同一条分支的呢：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202112200947816.png",alt:"image-20211220094646114"}})]),a._v(" "),s("p",[s("strong",[a._v("首先，找到这两条分支的最近公共祖先"),s("code",[a._v("LCA")]),a._v("，然后从"),s("code",[a._v("master")]),a._v("节点开始，重演"),s("code",[a._v("LCA")]),a._v("到"),s("code",[a._v("dev")]),a._v("几个"),s("code",[a._v("commit")]),a._v("的修改")]),a._v("，如果这些修改和"),s("code",[a._v("LCA")]),a._v("到"),s("code",[a._v("master")]),a._v("的"),s("code",[a._v("commit")]),a._v("有冲突，就会提示你手动解决冲突，最后的结果就是把"),s("code",[a._v("dev")]),a._v("的分支完全接到"),s("code",[a._v("master")]),a._v("上面。")]),a._v(" "),s("p",[a._v('假设你现在基于远程分支"origin"，创建一个叫"mywork"的分支。')]),a._v(" "),s("p",[a._v('但是与此同时，有些人也在"origin"分支上做了一些修改并且做了提交了. 这就意味着"origin"和"mywork"这两个分支各自"前进"了，它们之间"分叉"了。')]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202112201109279.png",alt:"image-20211220110915080"}})]),a._v(" "),s("p",[a._v('在这里，你可以用"pull"命令把"origin"分支上的修改拉下来并且和你的修改合并； 结果看起来就像一个新的"合并的提交"(merge commit)：')]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202112201110093.png",alt:"image-20211220111009074"}})]),a._v(" "),s("p",[a._v('但是，如果你想让"mywork"分支历史看起来像没有经过任何合并一样，你也许可以用 git rebase:')]),a._v(" "),s("p",[s("img",{attrs:{src:"https://typecho-1300745270.cos.ap-shanghai.myqcloud.com/typora/202112201110178.png",alt:"image-20211220111043121"}})]),a._v(" "),s("p",[a._v("解决冲突：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("git rebase --continue")]),a._v("：这样git会继续应用(apply)余下的补丁。")]),a._v(" "),s("li",[s("code",[a._v("git rebase --abort")]),a._v('：在任何时候，你可以用--abort参数来终止rebase的行动，并且"mywork" 分支会回到rebase开始前的状态。')])]),a._v(" "),s("p",[a._v("对于使用 git merge 来合并所看到的commit的顺序（从新到旧）是： C7 , C6 , C4, C5 , C3 ,C2,C1"),s("br"),a._v("\n对于使用 git rebase 来合并所看到的commit的顺序（从新到旧）是： C7 , C6‘,C5' ,C4,C3, C2,C1")]),a._v(" "),s("h2",{attrs:{id:"git-merge技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-merge技巧"}},[a._v("#")]),a._v(" git merge技巧")]),a._v(" "),s("h3",{attrs:{id:"合并单个commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并单个commit"}},[a._v("#")]),a._v(" 合并单个commit")]),a._v(" "),s("p",[a._v("首先，我们需要把A分支上提交的部分代码，放在B分支上")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout B  // 切换到B分支\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick 43aea9af  // 把某一次的commit合并到B分支，其中’43aea9af‘是某次commit提交记录的ID\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin B  // 把分支B推送到远程仓库\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"合并连续的多个commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并连续的多个commit"}},[a._v("#")]),a._v(" 合并连续的多个commit")]),a._v(" "),s("p",[a._v("果我们想要合并多个连续的commit，用上面的第一种方法，显然效率不高，可以使用一下方法："),s("br"),a._v("\n比如我们再A分支上有43aea9af到70dfeec2a的连续的10个commit要合并到B分支上")]),a._v(" "),s("p",[a._v("首先基于A分支创建一个临时分支temp，并指明新分支的最后一个commit")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" temp 70dfeec2a\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("将temp分支上的从43aea9af到最后一个commit，也就是70dfeec2a的commit合并到B分支上")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--into")]),a._v(" B 43aea9af^\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"多个commit合成一个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个commit合成一个"}},[a._v("#")]),a._v(" 多个commit合成一个")]),a._v(" "),s("p",[a._v("参看： "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/507794054",target:"_blank",rel:"noopener noreferrer"}},[a._v("如何将git的多个commit合成一个了?"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改 commit -m 的备注信息")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这时候就会弹出一个操作框需要会点基本的vim操作")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--amend")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 后续commit提交前操作")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --no-edit就是表示我们不修改了还是和前面那个提交同一个提交")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--amend")]),a._v(" --no-edit\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 后续commit已提交操作")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" HEAD~2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("版本号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);