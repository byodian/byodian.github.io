---
title: 配置 WSL 开发环境
mySlug: how to setting up wsl
tags:
  - Linux
date: 2020-06-15T11:13:04.430Z
description: WSL 是 Windows Subsystem for Linux 的缩写，译为适用于Linux 的 windows 子系统。
---
## 介绍 WSL 

WSL 是 Windows Subsystem for Linux 的缩写，译为适用于Linux 的 windows 子系统。WSL 功能推出之前，在 Windows 上运行 Linux 需要将 Linux 发行版安装在虚拟机（比如 VMware、VirtualBox），使用此方法过程比较繁琐，容易出错，而且使用虚拟机运行 Llinux 个人觉得比较占用系统资源。现在使用 WSL ，只需要在微软商店下载相应的 Linux 发行版，通过简单的设置即可运行。

当然如果你想体验 Linux 发行版的图形界面，WSL 是不支持的，这个时候还只有使用虚拟机或者直接安装 Linux 在本地磁盘上了。

接下来我们就开始配置 WSL 。

## 设置适用于 Linux 的 windows 子系统（WSL）

### 1. 开启 Windows 功能  — WSL

打开 “**控制面板**” > “**程序**” > “**启用或关闭 Windows 功能 **”，然后在打开的 “**Windows 功能**” 设置中开启 “**适用于 Linux 的 Windows 子系统**” 选项。

![](https://i.loli.net/2020/06/15/IyZQHcswn9NEgDp.png)

快速打开 “**Windows 功能**” 设置的方法：使用快捷键  `Win+s` ，在打开的输入框中键入 “**Windows 功能**”，打开搜索结果即可。

### 2. 下载 & 安装 Linux 发行版

在 **微软商店** 安装 Linux 发行版，我推荐 [Ubuntu](https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)，因为它对新手会比较友好一点。当然这里还有很多发行版可以选择，像 Debian，kail Linux 以及 SUSE Linux 等。

![](https://i.loli.net/2020/06/15/5FkfX7I1eaJNHhS.png)

安装之前，确认设备是否满足系统要求。以 [Ubuntu](https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab) 为例，首先需要查看系统要求：进入安装界面，点击 “**系统要求**”，查看 **操作系统** 和 **体系结构** 的最低和推荐要求。

![](https://i.loli.net/2020/06/15/k3KxVfO7LCla1YH.png)

查看你的设备的操作系统和版本：打开 “**设置**” > “**系统**”> “**关于**”，然后在 “**Windows 规格**” 中就会看到你的设备信息。如果满足要求的话，就可以开始安装了，反之就不能安装，这时候你就得更新系统了。

![](https://i.loli.net/2020/06/15/qPzDbKpvBLfruGQ.png)

### 3. 创建用户

安装完成后，第一次启动 Ubuntu 会要求创建一个用户和登录密码，全部设置完成后即可运行。

![](https://i.loli.net/2020/06/15/RxthJjHEiCvqZGF.png)

无论你想要什么，都可以参考 Ubuntu 的安装文档，在 Ubuntu 上安装，比如 Ruby、NodeJs、Docker 或者 Python 等工具。现在我们还需要一个 Windows 终端来运行 Ubuntu，因为默认的终端是粗糙，难看的，不过只是个人观点，最好还是取决于你自己。

我推荐微软开发的 [Windows 终端](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)，下面是 [Microsoft 文档](https://docs.microsoft.com/zh-cn/windows/terminal/) 关于它的解释。

>Windows 终端是一个面向命令行工具和 shell（如命令提示符、PowerShell 和适用于 Linux 的 Windows 子系统 (WSL)）用户的新式终端应用程序。 它的主要功能包括多个选项卡、窗格、Unicode 和 UTF-8 字符支持、GPU 加速文本呈现引擎，还可以用于创建你自己的主题并自定义文本、颜色、背景和快捷键绑定。  

## 安装和设置 Windows 终端

### 安装

在 [**微软商店**](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab) 安装 Windows 终端，同样需要查看系统要求，在 **下载 & 安装 Linux 发行版** 小节中已经介绍过，这里不再赘述。

安装完成打开终端后，会默认打开 PowerShell。 当 Ubuntu Linux 安装成功后，Windows 终端会自动添加 Ubuntu 配置信息到设置中，你可以在 **Windows 终端的下拉菜单**中看到 Ubuntu选项。

![](https://i.loli.net/2020/06/15/pJ2hNrlEXde7ATV.png)

### 自定义设置

我们可以通过自定义设置，修改 Windows 终端的主题、快捷键绑定等等。你可以访问官方 [设置文档](https://docs.microsoft.com/zh-cn/windows/terminal/get-started) ，了解更多相关的信息。

这里做一些常规的设置，像主题、字体和快捷键，以及其他的默认配置。通过点击 Windows 终端的 “**下拉菜单**” > ”**设置**“ 或者直接使用快捷键 `ctrl+逗号` ，打开终端的配置文件 `setting.json`，进行自定义设置。

1. 设置 Ubuntu 主题

   设置 Ubuntu 命令行的配色方案，请添加 `colorScheme` 属性，并将配色方案的 `name` 作为值。

   ```json
   "colorScheme": "这里是主题的名字"
   ```

   Windows 终端内置了 Campbell、Campbell Powershell、Vintage、One Half Dark、One Half Light 等九种主题，你可以在官方文档 [Windows 终端中的配色方案](https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/color-schemes#tango-dark) 中看到以上所有的主题样式。这里选择 One Half Light 主题，下面是 `setting.json` 文件的部分配置信息：

   ```json
   {
     // 其他的配置信息
     "profiles": {
       "list": [
         {
           // 配置 ubuntu 命令行位置
           "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
           "hidden": false,
           "name": "Ubuntu",
           "source": "Windows.Terminal.Wsl",
           "colorScheme": "One Half Dark" // 设置 One Half Light 为 Ubuntu 命令行的主题
         }
       ]
     }
   }
   ```
   
   下面是 Ubuntu 默认主题和 One Half Dark 主题的对比展示：
   
   ![](https://i.loli.net/2020/06/15/Ta2n9oMdNt3rOL8.png)
   
   ![](https://i.loli.net/2020/06/15/Vb3ruT2CSozQWAl.png)

2. 字体

   微软提供了一种开源的字体 Cascadia Code ，该字体适用于终端应用程序和文本编辑器，比如 Windows 终端和  Visual Studio Code。

   你可以在 [Cascadia Code Github 发布页](https://github.com/microsoft/cascadia-code/releases)下载到该字体的所有版本。Windows 终端在其包中提供 Cascadia Code 和 Cascadia Mono，并默认使用 Cascadia Mono。

   如果需要修改终端的字体，请添加 `fontFace` 属性，并将字体方案的 `name` 作为值。

