---
title: Win最佳下载工具
mySlug: download tool idm
tags:
  - Tool
date: 2019-01-06T17:51:37.000Z
description: 高速下载，续传功能，高级浏览器集成功能，网站链接嗅探和抓取器，支持多种协议下载。
---

Internet Download Manager（IDM）windows 系统下极速下载工具。

## 特点
 
下载提速，续传功能，高级浏览器集成功能，网站链接嗅探和抓取器，支持多种协议下载。

### 下载提速

IDM 采用智能动态文件分段技术，可以将下载速度提高多达 5 倍。

以下是我使用浏览器和 IDM 下载同一文件的速度比较，浏览器下载速度维持在 1MB/s 左右，而IDM 下载速度基本可以维持在 5MB/s 左右。很明显可以看出 IDM的下载速度提升了 5倍之多。当然，具体下载速度还取决于你的宽带大小。

![浏览器下载速度](https://raw.githubusercontent.com/byodian/logpic/master/原速.gif)

![IDM 下载速度](https://raw.githubusercontent.com/byodian/logpic/master/提速.gif)

### 续传功能

IDM 可以从断线、网络异常、连接丢失等问题中恢复未完成的下载，而不是重新连接从头下载。

### 高级浏览器集成功能

IDM 支持所有主流浏览器，包括 IE、谷歌浏览器、火狐、opera，Safari 等主流浏览器，通过给浏览器自动添加 IDM 扩展程序来接管浏览器。

### 网站链接嗅探和抓取器

IDM 可以自动抓取网站多媒体文件，例如来自网站的所有图片、视频和音频等。

### 支持的协议

IDM 支持 HTTP、FTP、HTTPS 和 MMS 协议，不支持 P2P 协议，因此 IDM 不能下载 BT 和 磁力链接。

但是凭借独特的下载方式，IDM 能够使得下载 HTTP/HTTPS 链接十分快，而且很稳定。

## 安装

[IDM 官网](https://www.internetdownloadmanager.com/download.html)

![软件界面](https://raw.githubusercontent.com/byodian/logpic/master/界面.png)

IDM 安装很简单。但是安装完成后，IDM 会检测电脑上的浏览器，自动为其安装 IDM 扩展程序，从而接管浏览器去执行下载任务。

以 Chrome 为例，它会提示你 IDM 扩展成功安装，你必须在浏览器中启用。

![自动添加浏览器功能](https://raw.githubusercontent.com/byodian/logpic/master/IDM自动添加.png)

## 应用场景

IDM 接管浏览器，可执行下载任务，从而极大的提高了下载速度。

### 下载主流视频网站内容

IDM 的自动嗅探和抓取技术，可以下载网站视频和音频等多媒体文件。IDM 支持下载大多数视频网站内容。

以 Youtube 视频网站为例，当你打开一个视频时，IDM 会在该播放器上显示一个下载浮动条，点击此浮动条，会出现不同分辨率的视频文件，点击即可下载。

![视频下载浮动条](https://raw.githubusercontent.com/byodian/logpic/master/youtube%20下载.png)

### 高速下载度盘资源

解决方法：通过浏览器扩展程序 Tampermonkey ，安装百度网盘直接下载助手脚本，就可以在浏览器中直接提取百度网盘资源下载链接，从而借助 IDM 实现高速下载度盘资源。

使用工具：[Tampermonkey ](https://tampermonkey.net/)、[百度网盘直接下载助手脚本](https://greasyfork.org/zh-CN/scripts/39504-%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B-%E7%9B%B4%E9%93%BE%E5%8A%A0%E9%80%9F%E7%89%88)、IDM 。

Tampermonkey  是一个用户脚本管理器，通过安装脚本，可自动为用户访问的网站添加功能。其最为人广之的名字叫油猴，最初在火狐浏览器发布，名字为 Greasemonkey。

Tampermonkey 支持大多数主流的浏览器，像 Chrome、Mircosoft Edge、火狐浏览器、Opera 等。所以你可以在这些不同的浏览器应用市场中下载到此脚本管理器。

![Tampermonkey官网](https://raw.githubusercontent.com/byodian/logpic/master/tampermonkey.png)

以 Chrome 浏览器为例，介绍使用 IDM 下载度盘资源的方法。

第一步：安装 Tampermonkey。如果你可以访问[谷歌应用市场](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?utm_source=chrome-ntp-icon)，你可以在那里搜索安装。或者关注微信公众号：工具速递，回复 005 获取。

将下载的 .crx 文件拖入扩展程序页面安装即可。

扩展程序页面打开方式：浏览器输入 chrome://extensions 或者找到浏览器菜单 > 更多工具 > 扩展程序。

![扩展程序打开方式](https://raw.githubusercontent.com/byodian/logpic/master/extensions.png)

第二步：安装百度网盘直接下载助手脚本。可以在 [Greasy Fork](https://greasyfork.org/zh-CN/scripts) 脚本网站下载

![Greasy Fork官网](https://raw.githubusercontent.com/byodian/logpic/master/百度网盘直接下载助手.png)

第三步：开始下载。打开百度网盘网页端，选中文件后会，网页端出现下载助手的功能。然后点击下载助手 > API 下载 > 显示链接 > 右击某一个链接 > 使用 IDM 下载

![下载步骤](https://raw.githubusercontent.com/byodian/logpic/master/下载助手.png)

![下载步骤](https://raw.githubusercontent.com/byodian/logpic/master/下载助手2.png)

## 基本设置

### 添加浏览器

如果你的浏览器没有被 IDM 捕获下载行为，你可以在选项 > 常规设置中将其添加进去。

![设置浏览器](https://raw.githubusercontent.com/byodian/logpic/master/添加浏览器.png)

### 文件类型

如果你不想 IDM 下载某种类型的文件，比如 MP3 ，你可以在选项 > 文件类型设置中将 MP3 字段删除。

![设置文件类型](https://raw.githubusercontent.com/byodian/logpic/master/文件类型.png)

### 设置代理服务器

如果你想下载 YouTube 视频，而且在你可以科学上网的情况下，你需要设置 IDM 代理服务器地址。打开选项 > 代理服务器设置 > 选择使用自动配置脚本 > 从 IE 获取。

![设置代理服务器](https://raw.githubusercontent.com/byodian/logpic/master/代理服务器.png)

## 正版团购活动

团购活动由[胡萝卜周](http://www.carrotchou.blog/)联合[艾维商城](https://www.aiviy.com)共同发起，让网友享受最优价格购买该软件。


IDM 提供 30 天免费试用，终身授权版官网售价 170 元，[艾维商城](https://www.aiviy.com/)提供 129 元的优惠价。
[试用版下载](http://internetdownloadmanager.com/download.html)


**通过胡萝卜周提供的 30 元专属优惠券，即可享受 99元/终身版。**

### 优惠券：CARROTCHOUIDM

参考链接：[http://www.carrotchou.blog/13075.html](http://www.carrotchou.blog/13075.html)
