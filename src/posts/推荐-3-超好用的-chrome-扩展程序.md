---
title: 推荐 3 个超好用的 chrome 扩展程序
mySlug: the 3 best chrome extensions
tags:
  - chrome
date: 2020-03-15T15:40:22.107Z
description: vimium，The Greate Suspender 和 Push to Kindle
---
## [The Great Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg?hl=en)

同时打开太多的网页会极大的消耗电脑系统资源。The Great Suspender 会把长时间不用的网页冻结，从而释放被这些网页占据的内存和 CPU。

扩展安装完成后，会自动跳出设置界面。你可以设置在「多久后自动冻结标签」，建议选择一个比较短的时间。

![The Great Suspender 设置界面](https://i.loli.net/2020/03/15/iZ8wxqdtM7KjGNm.png)

进入 The Great Suspender 设置选项的方法：鼠标左键点击工具栏上该扩展按钮，点击「设置」选项即可。

![进入 The Great Suspender 设置界面的方法](https://i.loli.net/2020/03/15/weyhN29suYt51xb.png)

## [vimium](http://vimium.github.io/)

如果你是程序员，一定知道 vim 编辑器，这个扩展以 vim 的操作习惯为灵感，使用键盘快捷键导航网页。如果你不是程序员也没有关系，只需要记住几个快捷键就可以轻松的操控网页。

列出一些比较常用的操作，可以使用快捷键 **?** 获取更多详细操作。

**浏览页面**

- `j` 向下滚动
- `k` 向上滚动
- `d` (down) 向下滚动半页
- `u` (up) 向上滚动半页
- `gg` 回到页面顶部
- `G` 滚动到页面底部
- `r` 刷新网页
- `f` 在当前网页打开链接
- `?` 打开快捷键列表
- `yy` 复制当前网页地址到剪贴板
- `p` 在当前页面打开剪贴板的地址
- `P` 在新的标签页打开剪贴板的地址
- `ge` 编辑当前网页地址
- `gE` 编辑当前网页地址并在新的标签页中打开

**管理标签**

- `t` 新建标签页
- `x` 关闭当前页
- `X` 恢复被关闭的页面
- `W` 移动当前标签页到新窗口

**使用搜索**

- `/` 进入搜索模式，可搜索当前网页内容
- `n` 或者 `N` 在匹配的搜索结果中跳转

可以看看我录制的一段使用 vimium 导航网页的视频。

<div class="iframe-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZJtL0STNgLM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## [Push to Kindle](https://chrome.google.com/webstore/detail/push-to-kindle/pnaiinchjaonopoejhknmgjingcnaloc)

Push to kindle 是一个发送网页文章到 Kindle 阅读器的免费服务，通过安装它的浏览器扩展可实现一键发送。

安装完成后，你会在工具栏发现一个 Push to Kindle 的按钮。点击该按钮，它会将你喜欢的文章重新排版，这样做是为了在 Kindle 上有一个好的阅读体验，然后点击「Send」等待片刻就会发送成功。

![Push to Kindle](https://i.loli.net/2020/03/15/xoGy5DTtWsClO2R.gif)

这是网页文章在 Kindle 电子阅读器上的呈现效果图。

![Kindle 文章截图](https://i.loli.net/2020/03/15/vVgqzc5FKmndXyO.png)

使用前需要进行以下设置：

![Push to Kindle 设置](https://i.loli.net/2020/03/15/dcZMFAgK3HOXNEn.png)

1. 添加你的 Kindle 设备电子邮件地址到「Send to」字段
2. 增加「Send from」地址到亚马逊官网发件人电子邮箱列表。

**如何查找 Kindle 设备电子邮件地址**

登录亚马逊官网。鼠标左键依次点击「我的账号」>「管理我的内容和设备」>「设备」，在打开的页面中将会看到你的 Kindle 设备电子邮件地址。

![Kindle 设备电子邮件](https://i.loli.net/2020/03/15/JHr7cP2pSukxRI4.png)

**如何将「Send from」地址添加到到发件人电子邮箱列表。**

登录亚马逊官网。鼠标左键依次点击「我的账号」>「管理我的内容和设备」>「首选项」>「个人文档设置」>「添加认可的电子邮箱」，然后将「Send from」地址 kindle@fivefilters.org 添加进去即可。

![添加认可发件人电子邮件](https://i.loli.net/2020/03/15/QHRSLVmbtqa1Wxw.png)

## 离线安装 chrome 扩展程序的方法

在 chrome 浏览器地址栏输入 **chrome://extensions/** 打开扩展程序页面，开启「开发者模式」，然后将下载好的 crx 扩展程序拖进该页面安装即可。

![拖放安装](https://i.loli.net/2020/03/15/3kXE4NaMvS2ztHY.png)

如果安装不成功，并提示 **程序包无效: CRX_HEADER_INVALID"**，则需要将扩展程序文件 xxx.crx 命名为 xxx.zip，并解压到 xxx 文件夹中, 然后在扩展程序页面点击「加载已解压的扩展程序」将刚刚解压的文件加载进去即可安装成功。

![加载已解压的扩展程序](https://i.loli.net/2020/03/15/6ZFh9G2MquRP1Nx.gif)

以上所有的扩展程序可以在公众号后台回复 **007** 获取。