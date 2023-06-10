---
title: 如何在新 PC 中安装 Windows 操作系统
mySlug: how to install windows os in new PC
tags:
  - 装机
created: 2022-10-04
updated: 2023-06-10T13:15:53.020Z
description: 如何在新PC中安装Windows操作系统
---
使用 U 盘启动器是安装操作系统常用的方法。而制作一个 U 盘启动器，对于 U 盘的大小和文件系统格式都有一定的要求。

本文介绍如何制作一个 U 盘启动器，以及一些必要的知识。

## 文件系统类型

选择与操作系统兼容的文件格式很重要。最常用的文件系统包括：

* **FAT32**：这是一个常用选项，因为它与 Mac®、Windows® 和 Linux® 操作系统以及游戏主机和其他带 USB 端口的设备兼容。但是，这种文件系统的主要缺点是无法提供安全性，而且文件大小不能超过 4GB。
* **exFAT**：这也是一个常用选项，它没有 4GB 的文件大小限制，并且与大多数 Windows 和 Mac 操作系统兼容。不过，旧操作系统可能需要更新才能正确读写使用 exFAT 文件系统的驱动器。
* **NTFS**：Microsoft Windows 在安装过程中默认使用的一种格式。这种格式的最大文件大小要大得多，但是，在 macOS® X 上只能读取（除非安装第三方 NTFS 读/写实用程序）。
* **APFS**：从 MacOS 10.13 开始供 Mac 用户使用的原生解决方案。如果仅在 macOS 上使用驱动器，则使用此选项。如果不使用第三方实用程序，Windows 将无法检测到这种文件系统。
* **Ext4（第四种扩展文件系统）**：是 Linux 默认使用的日志文件系统，并且是作为 ext3 的后续产品开发的。

这里我们选择 U 盘的文件格式为 FAT32。

## [如何格式化固态硬盘](https://www.kingston.com/cn/blog/personal-storage/how-to-format-ssd?utm_source=pocket_mylist)

1. 使用 [kingston SSD Manager](https://www.kingston.com/tw/support/technical/ssdmanager) 或者 BIOS 安全擦除数据
2. 在 Windows 中，通过磁盘管理工具格式化 U 盘
3. 在 Mac 中，最简单的方法是使用磁盘工具（disk utility），从左侧列表中选择你的硬盘，然后单击「抹掉」，输入驱动器的「名称」，然后选择「格式」（文件系统），点击确定

## 如何制作 Windows 系统的 U 盘启动器（命令行工具）

简而言之，使用 Mac 或者 Windows 操作系统的文件资源管理器将 Windows 产品 DVD 或 ISO 的全部内容都复制并粘贴到 USB 闪存驱动器即可。

由于 FAT32 文件系统的大小限制，写入文件最大为 4GB，且 Win10 wim 镜像文件大多超过 4GB，无法直接复制到 FAT32 格式的 U 盘 。我们可以将 wim 镜像文件分解为多个较小的 swm 文件，然后将这些小文件复制到 U 盘对应的文件夹，下一节介绍如何拆解 wim 镜像文件。

1. 下载 Windows 镜像文件（ISO）
2. 将 U 盘插入你的电脑
3. 使用 **Mac 磁盘管理工具 （Disk Utility）** 或者 **Windows 磁盘管理**将 U 盘格式化为 **Windows FAT32** 格式。
4. 挂载 Windows 镜像文件，可以使用鼠标双击或者使用命令行工具挂载镜像

   ```bash
   # Mac 操作系统
   hdiutil mount ~/Downloads/win10_your_download.iso
   ```
5. 将 Windows 镜像文件复制到你的 USB 驱动器
6. 将 Windows 安装到新的 PC

   1. 将 USB 驱动器连接到新 PC
   2. 打开 PC，通过 BIOS 面板设置 U 盘为第一启动项
   3. Windows 安装程序启动，根据说明执行安装系统步骤

### 如何复制大于 4GB 的 Windows 镜像文件

在 Mac 系统中使用 [wimlib](https://formulae.brew.sh/formula/wimlib) 管理 Windows 镜像，可以执行诸如创建、拉取和修改镜像等操作，你可以使用 **[brew](https://brew.sh/)** 包管理工具安装 **wimlib** 工具。而在 Windows 系统中，[Dism](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/what-is-dism?view=windows-11) 是部署镜像服务和管理的命令行工具，此工具已内置于 Windows 中，不需要下载。

1. 首先复制除 **sources/install.wim** 之外所有的文件，使用鼠标拖放或者命令行工具执行复制操作。在 Windows 系统中命令行工具可以使用 [xcopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/xcopy) 或者 [robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy)，在 Mac 系统中可以使用[rsync](https://linux.die.net/man/1/rsync)

   ```bash
   # Mac 操作系统终端输入命令
   # /Volumes/CCCOMA_X64FRE_ZH-CN_DV9 为挂载的镜像文件路径
   # /Volumes/WIN10 为 U 盘路径。
   rsync -vha --max-size=4.5G /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/* /Volumes/WIN10
   ```

   ```powershell
   # Windows 操作系统 cmd or powershell 输入命令
   # D:\ - 挂载的镜像驱动器路径
   # E:\ - U 盘驱动器路径
   # exclude.txt 文件内容为 install.wim
   xcopy D:\ E:\ /s /e /h /i /exclude:exclude.txt

   # or
   robocopy D:\ E:\ /s /max:3800000000
   ```
2. 接着拆解 wim 镜像文件为多个小于 4GB 的 swm 文件，这里我选择分解后的文件大小为 2.5GB

   ```bash
   # Mac
   # /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/sources/install.wsm 为挂载的镜像文件路径
   # /Volumes/WIN10 为 U 盘路径。
   wimlib-imagex split /Volumes/CCCOMA_X64FRE_ZH-CN_DV9/sources/install.wim /Volumes/WIN10/sources/install.swm 2500
   ```

   ```powershell
   # Windows
   # D:\ - 挂载的镜像驱动器路径
   # E:\ - U 盘驱动器路径
   Dism /Split-Image /ImageFile:D:\sources\install.wim /SWMFile:E:\sources\split.swm /FileSize:2500
   ```

   请注意分解操作完成后，**wim** 会被拆解为多个 swm 文件，Windows 安装程序会自动识别这些文件，所以拆解完成后不需要执行任何操作，只需要确保所有分解的文件已经存在于 U 盘指定文件夹中即可。

### 如何下载 Windows 操作系统镜像文件

1. [UUP dump](https://uupdump.net/?dark=0&lang=zh-cn)，下载步骤[参考UUP dump｜3分鐘學會如何下載整合更新的Win10/Win11映像檔(ISO)](https://adersaytech.com/online-tool/uup-dump-review.html)
2. [微软官网下载](https://www.microsoft.com/en-us/software-download/)

## 如何制作 Windows 系统的 U 盘启动器（软件操作）

在 Windows 电脑下制作 U 盘启动器相对来说比较简单，直接使用软件，执行相关操作就可以制作完成。

1. [Rufus](https://rufus.ie/en/) (for Windows)
2. [balenaEtcher](https://www.balena.io/etcher/) (for Mac)
3. [WoeUSB](https://github.com/slacka/WoeUSB) （for Linux）
4. [Windows 11 安装助手](https://www.microsoft.com/zh-CN/software-download/windows11)
5. [Windows 10 安装助手](https://www.microsoft.com/zh-CN/software-download/windows10)

## 参考

* [如何格式化固态硬盘](https://www.kingston.com/cn/blog/personal-storage/how-to-format-ssd)
* [如何使用 Mac 制作 Windows 10 U 盘启动盘](https://chinese.freecodecamp.org/news/how-make-a-windows-10-usb-using-your-mac-build-a-bootable-iso-from-your-macs-terminal/)
* [从 USB 闪存驱动器安装 Windows](https://learn.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/install-windows-from-a-usb-flash-drive?view=windows-11)
* [创建可启动 Windows PE 介质](https://learn.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/winpe-create-usb-bootable-drive?view=windows-11)
* [Windows PE](https://learn.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/winpe-intro?view=windows-11)