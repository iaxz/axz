# axz

 - 积丝成寸，积寸成尺；寸尺水已，遂成丈匹。



<p align="center">
   <a href="https://iaxz.github.io/axz/views/specification/guide.html" target="_blank"><img alt="Read the Docs" src="https://img.shields.io/badge/Docs-GetStarted-red?style=flat-square&logo=buffer"></a>
   <a href="https://github.com/iaxz/axz" target="_blank"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-axz-d05577?style=flat-square&logo=github"></a>
   <br/>
   <a href="https://github.com/vuejs/vuepress" target="_blank"><img alt="VuePress" src="https://img.shields.io/badge/VuePress-build-05a564?style=flat-square&logo=vue.js"></a>
   <a href="https://github.com/vuepress-reco/vuepress-theme-reco" target="_blank"><img alt="Reco" src="https://img.shields.io/badge/Reco-theme-137cbd?style=flat-square&logo=vue.js"></a>
   <br/>
   <a href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="CC4.0 BY-SA" src="https://img.shields.io/static/v1?label=CC%20%204.0&message=BY-SA&color=yellow&style=flat-square"></a>
   <a href="LICENSE"><img alt="LICENSE" src="https://img.shields.io/badge/License-MIT-orange?style=flat-square"></a>
   <br/>
   <a href="https://x0916.gitee.io/axz/"><img alt="axz site" src="https://img.shields.io/badge/axz-pages-a06bc1?style=flat-square&logo=zulip"></a>
</p>



- 本仓库代码使用 [MIT](https://github.com/SigureMo/notev/blob/master/LICENSE) 协议进行开源，但是全部文档内容使用 [CC 4.0 BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) 协议进行发布
- 新增主题、添加了评论功能
- 已全局适配`手机模式`和`暗黑模式（iOS自适应）`
- 访问：[https://axz.xz.cn](https://axz.xz.cn)

![](/docs/.vuepress/public/vuepress/axz.png)

## 项目运行
- npm install -g yarn
- 查看版本：yarn --version
- Yarn 淘宝源安装，分别复制粘贴以下代码行到黑窗口运行即可
```lua
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```
- 在项目文件夹下执行命令，加载依赖：`yarn init # npm init （推荐 yarn）`
```lua
PS X:\temporary\axz-vuepress> yarn init
yarn init v1.22.17
question name (axz-vuepress): axz-vuepress
question version (1.0.0): 1.0.0
question description: axz-note
question entry point (index.js): index.js
question repository url: https://github.com/iaxz/axz
question author: axz
question license (MIT):
question private:
success Saved package.json
Done in 540.26s.
```
- 不再推荐全局安装 VuePress : yarn add -D vuepress # npm install -D vuepress
- node.js版本推荐V10以上
- 在项目文件夹下执行命令，运行项目：yarn docs:dev # npm run docs:dev
- 待启动成功后打开地址即可：[http://localhost/axz/](http://localhost/axz/)

## 项目架构

- 采用vuepress和主题reco二次构建

```lua
##需要自己写主题样式的话，在.vuepress/ 下新建theme文件夹并按如下目录布局
Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme  // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局(包括首页在内)
│   │    │   ├── styles  // 样式
│   │    │   ├── util 	 // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json  // 主题依赖
│   │    │   ├── README.md     // 主题说明
│   │    └── config.js
│   ├── about   // 项目模块
│   ├── views   // 项目模块
│   └── README.md   // 首页
└── package.json //项目依赖
```

## 项目介绍

- 知识点复习
- 技术栈知识点
- 个人生活记录）
- 其它...

## 开始编写markdown

- 参考示例：

```yaml
---
title: 文章标题
date: 2021-12-14
tags:
 - 标签
categories:
 - 分类
keys:
 - '123456' //文章加密密码
sticky: 1   //文章置顶 1, 2, 3, ...
isShowComments: false //是否开启评论
publish: true //文章是否发布
---

<Boxx/> //随机展示名人名言

[[toc]] //目录链接

- 这里可以写`摘要`等其它

<!-- more --> //在<!-- more -->之前的内容会展示为文章摘要

## 正式开始你的markdown

- I am the text...
```

