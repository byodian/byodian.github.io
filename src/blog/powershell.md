---
title: Powershell 终端配置
slug: how set up powershell
tags:
  - Shell
created: 2022-10-05
updated: 2023-03-14T07:26:12.923Z
description: PowerShell终端配置
---
请使用 Windwos 操作系统测试本文涉及的命令。

## 探索 Powershell

* `Get-Verb` Returns a list of verbs that most commands adhere to.
* `Get-command` retrieves a list of all commands installed on your machine.
* `Get-Member` operates on object based output and is able to discover what object, properties and methods are available for a command.
* `Get-Help` displays a help page describing various parts of a command.
* `Get-ChildItem` Gets the items and child items in one or more specified locations. (like `ls` for Unix)
* `$Env:<variable-name>` display and change the values of environment variables, for example `$Env:APPDATA`, `$Env:FOO = 'bar'
* `setx` Creates or modifies environment variables in the user or system environment

## 常用命令

1. `Install-Module posh-git -Scope CurrentUser -Force` - Install a module by name
2. `Uninstall-Module -Name oh-my-posh` - Uninstall a module by name
3. `Get-InstalledModule -Name oh-my-posh | Uninstall-Module` - Use the pipeline to uninstall a module
4. display all environment variable

   1. `Get-ChildItem -Path Env:` 
   2. `d﻿ir Env:`
   3. `l﻿s Env:`
5. `setx Path "$Env:Path;C:\Program Files\nodejs\node.exe"` permanently add node to the environment variable of the Path
6. `[guid]::NewGuid()` generate a Universally Unique Identifier

## 配置 [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/learn/tutorials/01-discover-powershell?view=powershell-7.2)

配置过程分两部分，基础配置和自定义配置两部分。在基础配置中我们会创建一些必要的 PowerShell 配置文件，包括 PowerShell 当前用户配置和自定义配置两个文件，而在自定义配置阶段，我们将会安装一些必要的插件以及编写 PowerShell 自定义配置文件。

**注意**：PowerShell 版本必须在 7.2 及以上

### 基础配置

1. 安装 [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2)，[微软商店入口](https://apps.microsoft.com/store/detail/powershell/9MZ1SNWT0N5D?hl=zh-cn&gl=cn)
2. 安装 [Windows terminal](https://docs.microsoft.com/en-us/windows/terminal/)
3. 安装 [scoop](https://scoop.sh/) - A command-line installer for Windows

   打开一个 PowerShell，运行命令

   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time
   irm get.scoop.sh | iex
   ```
4. 安装 [Winget](https://docs.microsoft.com/en-us/windows/package-manager/winget/)  - Install and manage applications
5. 安装 [git for windows](https://gitforwindows.org/) - Offer a lightweight, native set of tools

   ```powershell
   winget install -e --id Git.Git
   ```
6. 安装 `gcc` 、 `neovim`

   ```powershell
   scoop install gcc neovim
   ```
7. 创建 PowerShell 配置文件 

   创建 `$PROFILE.CurrentUserCurrentHost` 文件，生成的文件路径为`$Home\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`

   ```powershell
   # Create a profile
   New-Item -Path $PROFILE.CurrentUserCurrentHost -ItemType "file" -Force

   # or use notepad commond
   notepad $PROFILE
   ```

   创建 PowerSehll 自定义配置文件 `user_profile.ps1`

   ```powershell
   # $Home\Documents\PowerShell 获取文件的上级路径 
   Split-Path $PROFILE.CurrentUserCurrentHOST

   mkdir $Home\.config\powershell
   New-Item $Home\.config\powershell\user_profile.ps1
   ```

   要使自定义配置文件生效需要在 `$PROFILE.CurrentUserCurrentHost` 文件中添加以下内容，并重新启动终端。

   ```powershell
   # $Home\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
   . $env:USEPROFILE\.config\powershell\user_profile.ps1
   ```

   **The `$PROFILE` variable** 👉 [about_profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.2)

   This variable stores the path to the "**Current User, Current Host**" profile. The other profiles are saved in note properties of the `$PROFILE` variable. For example:

   | host-specific profiles     | variable                          |     |
   | -------------------------- | --------------------------------- | --- |
   | Current User, Current Host | `$PROFILE`                        |     |
   | Current User, Current Host | `$PROFILE.CurrentUserCurrentHost` |     |
   | Current User, All Hosts    | `$PROFILE.CurrentUserAllHosts`    | ``  |
   | All Users, Current Host    | `$PROFILE.AllUsersCurrentHost`    |     |
   | All Users, All Hosts       | `$PROFILE.AllUsersAllHosts`       |     |

   以上所有的操作成功后，表示基础的配置准备已经完成，接下来进入安装插件阶段。

### 自定义配置（安装插件）

1. 配置 prompt，下载 [oh-my-posh](https://ohmyposh.dev/) (A prompt theme engine for any shell)，安装步骤可以参考 [oh-my-posh 官网安装教程](https://ohmyposh.dev/docs/installation/windows)

   * Prompt for Git repositories

   打开 PowerShell 终端，输入命令

   ```powershell
   winget install JanDeDobbeleer.OhMyPosh -s winget
   # or
   scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json
   ```

   安装完成后，重启你的 PowerShell 终端，开始配置 prompt 主题。编辑之前创建的自定义配置文件，终端输入下面命令可打开此文件

   ```powershell
   notepad $Home\.config\powershell\user_profile.ps1
   ```

   然后在配置文件中键入以下内容，开启主题的使用。Oh My Posh 内建了许多开箱即用的[主题](https://ohmyposh.dev/docs/themes)，这里我选择 robbyrussel 主题。

   ```powershell
   oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\robbyrussel.omp.json" | Invoke-Expression
   ```

   重启 PowerShell 终端，查看 robbyrussel 主题是否生效。

   你也可以自定义主题样式，详细步骤请参考[Customize](https://ohmyposh.dev/docs/configuration/overview)
2. 安装 [posh-git](https://github.com/dahlbyk/posh-git)

   posh-git 是一个 PowerShell 模块，整合 git 和 PowerShell，提供 git 状态信息，此状态信息可以展示在终端 prompt 中，也提供 tab 键自动补全 git 命令、分支名称和路径等支持。安装步骤参考[posh-git installation](https://github.com/dahlbyk/posh-git#installation)，简单步骤如下：

   ```powershell
   # Installing posh-git via PowerShellGet
   PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force

   # or Installing posh-git via Chocolatey
   choco install poshgit

   # or Installing posh-git via Scoop
   scoop bucket add extras
   scoop install posh-git
   ```

   在自定义配置文件中添加一行，重启终端即可生效。

   ```powershell
   # user_profile.ps1
   Import-Module posh-git
   ```
3. 安装 [terminal icons](https://github.com/devblackops/Terminal-Icons)

   一个展示文件和文件夹的图标的 PowerShell 模块。

   此模块必须依赖 [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) 字体，在 [download](https://www.nerdfonts.com/font-downloads) 页面选择一款字体，下载并安装字体。

   在终端管理员模式下输入命令安装 Terminal-Icons 模块

   ```powershell
   # Install-Module
   Install-Module -Name Terminal-Icons -Repository PSGallery -Force

   # or use scoop
   scoop bucket add extras
   scoop install terminal-icons
   ```

   添加下面的内容到自定义配置文件

   ```powershell
   # user_profile.ps1
   Import-Module Terminal-Icons
   ```
4. 安装 z

   基于你的 cd 命令历史，z 让你在 PowerShell 中快速导航文件系统。在终端管理员模式下输入命令安装 z 模块

   ```powershell
   Install-Module -Name z -Force -AllowClobber 
   ```

   配置自定义文件，重启终端

   ```powershell
   # user_profile.ps1
   Import-Module z
   ```
5. 安装 [PSReadLine](https://github.com/PowerShell/PSReadLine) - autocompletion 

   [How to use PSReadLine](https://docs.microsoft.com/en-us/powershell/module/psreadline/?view=powershell-7.2)

   ```powershell
   Install-Module -Name PowerShellGet -Force
   Install-Module -Name PSReadLine -Force -SkipPublisherCheck
   ```

   To start using, just import the module:

   `Import-Module PSReadLine`

   To view the current key bindings:

   `Get-PSReadLineKeyHandler`

   To use Emacs key bindings, you can use:

   `Set-PSReadLineOption -EditMode Emacs`

   Specifies the source for PSReadLine to get predictive suggestions.

   `Set-PSReadLineOption -PredictionSource History`

   Sets the style for the display of the predictive text. The default is **ListView**.

   `Set-PSReadLineOption -PredictionViewStyle`**InlineView**

   ```powershell
   # user_profile.ps1
   Import-Module PSReadLine
   Set-PSReadLineOption -EditMode Emacs
   Set-PSReadLineOption -PredictionSource HisoryAndPlugin
   Set-PSReadLineOption -PredictionViewStyle ListView
   ```
6. 安装 `fzf` [PSFzf](https://github.com/kelleyma49/PSFzf)

   PSFzf is a PowerShell module that wraps fzf, a fuzzy file finder for the command line. [Failed to import module](https://github.com/kelleyma49/PSFzf/issues/190)

   ```powershell
   # 安装 fzf
   scoop install fzf
   # 安装 PSFzf
   Install-Module -Name PSFzf -RequiredVersion 2.0.0 -Scope CurrentUser -Force
   ```

   自定义文件添加下面的内容

   ```powershell
   Import-Module PSFzf
   Set-PsFzfOption -PSReadLineChordProvider 'Ctrl+f' -PSReadLineChordReverseHistory 'Ctrl+r'
   ```
7. 重启配置文件

  ```powershell
  . $PROFILE
  ```

## user_profile.ps1 自定义配置文件

```powershell
Import-Module posh-git
Import-Module Terminal-Icons
Import-Module z
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\robbyrussel.omp.json" | Invoke-Expression

# PSReadLine
Import-Module PSReadLine
Set-PSReadLineOption -EditMode Emacs
Set-PSReadLineOption -PredictionSource History
Set-PSReadLineOption -PredictionViewStyle InlineView

# fzf
Import-Module PSFzf
Set-PsFzfOption -PSReadLineChordProvider 'Ctrl+f' -PSReadLineChordReverseHistory 'Ctrl+r'

# Alias
Set-Alias ll ls
Set-Alias c clear
Set-Alias less 'C:\Program Files\Git\usr\bin\less.exe'
Set-Alias tig 'C:\Program Files\Git\usr\bin\tig.exe'

function which($command) {
  Get-command -Name $command -ErrorAction SilentlyContinue | 
    Select-Object -ExpandProperty Path -ErrorAction SilentlyContinue
}
```

## 资源

* <https://www.powershellgallery.com/packages/PSFzf/2.0.0>
* <https://www.powershellgallery.com/>
* [about_Environment_Provider](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_provider?view=powershell-7.2)
  The environment Environment provider lets you get, add, change, clear, delete environment variables and values in Powershell.

  Windows and Powershell use Environment variables to store persistent information that affect system and process execution.

  Unlike PowerShell variables, environment variables are not subject to scope constraints.

  The Environment provider supports the following cmdlets.

  * [Get-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-7.2)
  * [Set-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location?view=powershell-7.2)
  * [Get-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-item?view=powershell-7.2)
  * [New-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-item?view=powershell-7.2)
  * [Remove-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.2)
  * [Clear-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/clear-item?view=powershell-7.2)
  * [aA﻿bout Modules](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_modules?view=powershell-7.3)
  * [about_PSReadLine](https://learn.microsoft.com/en-us/powershell/module/psreadline/about/about_psreadline?view=powershell-7.3)
* [about_Environment_Variables](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.2)
  Environment variables store information about the operating system environment. 

  The environment variables store data that is used by the operating system and other programs.
* [about_CommonParameters](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.2)
  描述可与任何 cmdlet 一起使用的参数。

## 参考

* [PowerShell module](https://ohmyposh.dev/docs/migrating)
