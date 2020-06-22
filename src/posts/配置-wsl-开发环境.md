---
title: 配置 Windows 终端 & WSL 开发环境
mySlug: how to setting up wsl
tags:
  - Linux
date: 2020-06-15T11:13:04.430Z
description: WSL 是 Windows Subsystem for Linux 的缩写，译为适用于Linux 的 windows 子系统。
---
## 介绍 WSL 

WSL 是 Windows Subsystem for Linux 的缩写，译为适用于Linux 的 windows 子系统。WSL 功能推出之前，在 Windows 上运行 Linux 需要将 Linux 发行版安装在虚拟机（比如 VMware、VirtualBox），使用此方法过程比较繁琐，容易出错，而且使用虚拟机运行 Llinux 个人觉得比较占用系统资源。现在使用 WSL ，只需要在微软商店安装相应的 Linux 发行版，就可以在本地环境中体验到 Linux 的所有功能。

当然如果你想体验 Linux 发行版的图形界面，WSL 是不支持的，这个时候还只有使用虚拟机或者安装 Linux 在本地磁盘两种方法了。

接下来我们就开始配置 WSL 。

## 设置 WSL

### 开启 WSL

打开「**控制面板**」>「**程序**」>「**启用或关闭 Windows 功能 **」，然后在「**适用于 Linux 的 Windows 子系统**」选项前面打勾。

小技巧：使用快捷键  `Win+s` 打开搜索功能，在搜索框中输入关键字 **Windows 功能**，可以快速打开「**启用或关闭 Windows 功能**」。

![](https://i.loli.net/2020/06/15/IyZQHcswn9NEgDp.png)

### 安装 Ubuntu

在 **微软商店** 可以搜索到很多 Linux 发行版，我推荐 [Ubuntu](https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)，因为它对新手会比较友好一点。当然你可以根据个人喜好选择 Debian，kail Linux 或者 SUSE Linux 等等 Linux 发行版。

![](https://i.loli.net/2020/06/15/5FkfX7I1eaJNHhS.png)

**安装之前，需要确认设备是否满足安装要求**。以 [Ubuntu](https://www.microsoft.com/zh-cn/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab) 为例：在微软商店搜索 Ubuntu，进入产品的安装界面，然后点击 「**系统要求**」，查看设备是否满足产品的系统要求。如果你的设备符合要求，就会显示 **此产品应该可以在此设备上运行** 的字眼。

![](https://i.loli.net/2020/06/15/k3KxVfO7LCla1YH.png)

在你的 Windows 设备上依次打开「**设置**」>「**系统**」>「**关于**」，然后在「**Windows 规格**」 中会看到你的设备操作系统版本号。如果不符合 Ubuntu 产品系统要求的话，就得赶紧更新系统了。

![](https://i.loli.net/2020/06/15/qPzDbKpvBLfruGQ.png)

### 创建用户

安装完成后，第一次启动 Ubuntu 会要求创建一个用户和登录密码，全部设置完成后即可运行。

![](https://i.loli.net/2020/06/15/RxthJjHEiCvqZGF.png)

无论你想要什么，都可以参考 Ubuntu 的安装文档进行下载安装，比如 Ruby、NodeJs、Docker 或者 Python 等工具。现在还需要一个 Windows 终端，因为默认的 Ubuntu 终端界面有点粗糙，我推荐使用微软开发的 [Windows 终端](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)，下面是 [Microsoft 文档](https://docs.microsoft.com/zh-cn/windows/terminal/) 关于它的解释。

>Windows 终端是一个面向命令行工具和 shell（如命令提示符、PowerShell 和适用于 Linux 的 Windows 子系统 (WSL)）用户的新式终端应用程序。 它的主要功能包括多个选项卡、窗格、Unicode 和 UTF-8 字符支持、GPU 加速文本呈现引擎，还可以用于创建你自己的主题并自定义文本、颜色、背景和快捷键绑定。  
>
>[控制台、终端和 shell 之间的区别？](https://www.hanselman.com/blog/WhatsTheDifferenceBetweenAConsoleATerminalAndAShell.aspx)

## 安装 Windows 终端

在 [**微软商店**](https://www.microsoft.com/zh-cn/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab) 安装 Windows 终端，同样需要查看产品的系统要求，在 **安装 Ubuntu** 小节中已经介绍过，这里不再赘述。

当 Ubuntu 安装成功后，Windows 终端将自动为你创建 Ubuntu 配置文件，并且可以在 **Windows 终端的下拉菜单** 中看到 Ubuntu 选项了。

![](https://i.loli.net/2020/06/15/pJ2hNrlEXde7ATV.png)

## 配置 Windows 终端

通过点击 Windows 终端的下拉菜单「**∨**」>「**设置**」或者直接使用快捷键 `ctrl+逗号` ，可以在默认的文本编辑器中打开配置文件 `setting.json` 。

我们可以通过修改配置文件在 Windows 终端上做很多的自定义设置。下面我们将进行全局设置、配色方案、快捷键绑定以及字体的修改。

我的终端配置效果图：

![terminal](https://i.loli.net/2020/06/22/TAYxb5aKUfDrWHw.png)

### 全局设置
`setting.json` 配置文件根目录下的属性将影响整个终端窗口，像  `defaultProfile`、`theme` 、`initialRows`、`initialCols`、`initialPosition`。

#### 默认配置文件

属性 `defaultProfile` 表示打开 Windows 终端时，默认打开的命令行工具或者 shell。值为字符串形式的 GUID，默认值为 PowerShell 的 GUID。Windows 终端上的每一个命令行工具或者 shell 都有一个唯一的 GUID 值。我习惯将 Ubuntu 设置为默认打开的配置文件。

```json
// 设置 Ubuntu 的 GUID 为默认的配置文件
defaultProfile: "{2c4de342-38b7-51cf-b940-2309a097f518}"
```

#### 深色/浅色主题

设置属性 `theme` ，修改 Windows 终端的主题颜色。值有三个，分别为：`"system"`、`"dark"`、`"light"`。`"system"` 表示跟随系统主题颜色。

```json
"system": "dark"
```

#### 窗口大小

属性 `initialCols` 设置首次启动时的列，属性 `initialRows` 设置首次启动时的行。

```json
"initialCols": "60",
"initialRows": "20"
```

#### 窗口位置

属性 `initialPosition` 设置 Windows 终端在打开时窗口的位置。值为字符串形式的坐标值，比如：`"200, 200"`，表示 x 坐标为 200 ，y 坐标为 200。

```json
"initialPosition": "200, 200"
```

### Windwos 终端中配置文件设置

下面列出的设置特定于每个唯一的配置文件。这里的配置文件指的是：Windows 终端中的命令行工具或者 shell 程序的配置文件。如果希望将某个设置应用于所有配置文件，可以将其添加到 settings.json 文件中的配置文件列表上方的 `defaults` 部分。

```json
"defaults": {
    // 设置应用于所有的配置文件
},
"list": [
    // 配置文件列表
]
```

#### 修改配色方案

设置 Windows 终端中某一个命令行或者 shell 的配色方案，请在指定的位置添加 `colorScheme` 属性，并将配色方案的 `name` 作为值。

```json
"colorScheme": "配色方案主题的名字"
```

Windows 终端内置了 Campbell、Campbell Powershell、Vintage、One Half Dark、One Half Light 等九种主题，你可以在官方文档 [Windows 终端中的配色方案](https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/color-schemes#tango-dark) 中看到以上所有配色方案的样式。

以配置 Ubuntu 命令行配色方案为例：在 Ubuntu 配置信息中添加 `"colorScheme"："One Half Light"` ，修改 `setting.json` 文件如下：

```json
{
    "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "colorScheme": "One Half Dark" // 设置 One Half Light 主题为 Ubuntu 命令行配
}
```

 Ubuntu 默认配色（左）和 One Half Dark 配色方案（右）的对比图：

![One Half Dark](https://i.loli.net/2020/06/22/9SUoHBsEyOaeWfJ.png)

#### 修改 dircolors

`dircolors` 命令设置 `ls` 、`tree` 命令在显示目录或文件时所用的色彩。`dircolors` 还可根据色彩配置文件来设置 `LS_COLORS` 环境变量。

设置 dircolors 主题为 [Nord dircolors](https://www.nordtheme.com/ports/dircolors) 。Nord dircolors 是一个开源的 dircolors 主题，以冷色系颜色为主调，使用它会让你的终端看起来更加的优雅和整洁。以配置 Ubuntu 命令行 `dircolor` 主题为例：

![Nord dircolors 主题](https://i.loli.net/2020/06/21/mWN51JTaVfpSwiK.png)

**快速开始**

1. 在 [nord-dircolors](https://github.com/arcticicestudio/nord-dircolors) Github 仓库主页下载 `src` 的 `dir_colors` 文件，重命名为 `.dir_colors` ，并将它移动到 `~`（使用 `cd` 命令改变当前目录为根目录）。

2. 为了让 `dircolors` 命令读取到 `~/.die_colors` 文件，还需要将以下内容添加到 `~/.bashrc` 文件中。

   ```bash
   eval "$(dircolors ~/.dir_colors)"
   ```

3. 在终端运行以下命令即可生效：

   ```bash
   source ~/.bashrc
   ```

   Nord dircolors 主题实际效果：
   
   ![dircolors](https://i.loli.net/2020/06/22/5hliIakPVL9nzqJ.png)

### 字体

微软提供了一种开源的字体 Cascadia Code ，该字体适用于终端应用程序和文本编辑器，比如 Windows 终端和  Visual Studio Code。

你可以在 [Cascadia Code Github 发布页](https://github.com/microsoft/cascadia-code/releases) 下载到该字体的所有版本。Windows 终端在其包中提供 Cascadia Code 和 Cascadia Mono，并默认使用 Cascadia Mono。

如果需要修改终端的字体，请添加 `fontFace` 属性，并将字体的 `name` 作为属性值。如下：

```json
"fontFace": "字体名字"
```

以配置 Ubuntu 命令行字体为例：下载 & 安装 Google Fonts [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=roboto+mono) 粗体，设置 `Roboto Mono` 为 `fontFace` 属性值。修改配置文件如下：

```json
{
    "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "fontFace": "Roboto Mono"      // 设置 Roboto Mono 字体
}
```

Roboto Mono 字体效果图：

![Roboto Mono](https://i.loli.net/2020/06/22/cYrb79aJx5QtZDn.png)

#### 光标设置

Windows 终端提供五种光标形状，分别是：`"bar"` ( ┃ )、`"vintage"` ( ▃ )、`"underscore"` ( ▁ )、`"filledBox"` ( █ )、`"emptyBox"` ( ▯ )。

修改光标形状，请添加 `cursorShape` 属性，选择一种光标形状，并将光标形状的名字作为属性值。以配置 Ubuntu 命令行光标形状为例：

```json
{
    "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "cursorShape": "filledBox"      // 设置光标形状
}
```

#### 终端起始目录

Windows 终端中的 WSL 默认的起始目录在 `/mnt/c/Users/用户名`。如果你想修改 Linux 的起始目录为主目录， 可以添加属性 `startingDirectory `，属性值设置为你的 WSL 主目录的网络路径。下面是我的配置文件修改：

```json
// WSL 为 Ubuntu
{
    "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
    "hidden": false,
    "name": "Ubuntu",
    "source": "Windows.Terminal.Wsl",
    "startingDirectory": "//wsl$/Ubuntu/home/byo"
}
```

```json
// WSL 为 Ubuntu-18.04
{
    "guid": "{c6eaf9f4-32a7-5fdc-b5cf-066e8a4b1e40}",
    "hidden": false,
    "name": "Ubuntu-18.04",
    "source": "Windows.Terminal.Wsl",
	"startingDirectory": "//wsl$/Ubuntu-18.04/home/byo"
}
```

## 修改终端提示符

终端的提示符通过环境变量 `PS1`（Prompt String 1）设置。有许多的转移字符可以插入终端的提示符，比如：

- `\u` ：用户名
- `\h`：短的主机名
- `\W`：当前工作目录的名字
- `\w`：当前工作目录的路径

更多详细介绍请参考 [Bash Prompt Escape Sequences](https://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html) 。

推荐一个可以自动生成 `PS1` 变量的网站 [EZPROMPT](http://ezprompt.net/)。将生成的代码复制并且粘贴在 `~/.bashrc` 文件夹中，在终端运行以下命令即可生效。

```shell
source ~/.bashrc
```

下面是我的 Prompt 配置信息：

```shell
# get current branch in git repo
function parse_git_branch() {
	BRANCH=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'`
	if [ ! "${BRANCH}" == "" ]
	then
		STAT=`parse_git_dirty`
		echo "[${BRANCH}${STAT}]"
	else
		echo ""
	fi
}

# get current status of git repo
function parse_git_dirty {
	status=`git status 2>&1 | tee`
	dirty=`echo -n "${status}" 2> /dev/null | grep "modified:" &> /dev/null; echo "$?"`
	untracked=`echo -n "${status}" 2> /dev/null | grep "Untracked files" &> /dev/null; echo "$?"`
	ahead=`echo -n "${status}" 2> /dev/null | grep "Your branch is ahead of" &> /dev/null; echo "$?"`
	newfile=`echo -n "${status}" 2> /dev/null | grep "new file:" &> /dev/null; echo "$?"`
	renamed=`echo -n "${status}" 2> /dev/null | grep "renamed:" &> /dev/null; echo "$?"`
	deleted=`echo -n "${status}" 2> /dev/null | grep "deleted:" &> /dev/null; echo "$?"`
	bits=''
	if [ "${renamed}" == "0" ]; then
		bits=">${bits}"
	fi
	if [ "${ahead}" == "0" ]; then
		bits="*${bits}"
	fi
	if [ "${newfile}" == "0" ]; then
		bits="+${bits}"
	fi
	if [ "${untracked}" == "0" ]; then
		bits="?${bits}"
	fi
	if [ "${deleted}" == "0" ]; then
		bits="x${bits}"
	fi
	if [ "${dirty}" == "0" ]; then
		bits="!${bits}"
	fi
	if [ ! "${bits}" == "" ]; then
		echo " ${bits}"
	else
		echo ""
	fi
}

export PS1="\u@ubuntu:\[\033[1;34m\]\w\[\033[0m\]\`parse_git_branch\`$ "
```

效果如下：

![prompt](https://i.loli.net/2020/06/22/6hLJDAo9wVRFGKi.png)

## 快捷键介绍

Windows 终端默认的快捷键配置在 `defaults.json` 文件中，可按住 `alt` 键并点击设置按钮来访问该文件。

- `Ctrl+,` ：打开设置文件

- `Ctrl+shift+space` ：打开下拉菜单
- `alt+enter`：切换全屏
- `ctrl+shift+f`：查找内容
- `ctrl+shift+w`：关闭窗口
- `ctrl+shift+t`：新建选项卡
- `ctrl+tab`：切换选项卡
- `alt+shift+-`：垂直拆分窗格
- `alt+shift++`：水平拆分窗格
- `alt+方向键`：移动窗格焦点
- `alt+shift+方向键`：调整窗格大小
- `ctrl+shift+c`：复制内容到剪贴板
- `ctrl+shift+v`：粘贴剪贴板上复制的内容

更多快捷键介绍请参考 [Windows 终端中的自定义键绑定](https://docs.microsoft.com/zh-cn/windows/terminal/customize-settings/key-bindings)。

## 参考

- [How to Change / Set up bash custom prompt (PS1) in Linux](https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)
- [How To Set Windows Terminal Starting Directory for WSL](https://wespeter.com/posts/how-to-set-windows-terminal-starting-directory/)
- [Bash prompt tips and tricks](https://opensource.com/article/17/7/bash-prompt-tips-and-tricks)
- [Bash Prompt Escape Sequences](https://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/bash-prompt-escape-sequences.html)
- [Windows 终端文档](https://docs.microsoft.com/zh-cn/windows/terminal/)