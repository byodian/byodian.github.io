---
title: Powershell 终端配置
mySlug: how set up powershell
tags: 
  - Shell
created: 2022-10-05
description: PowerShell终端配置
---

请使用 Windwos 操作系统测试本文涉及的命令。

## 探索 Powershell
- `Get-Verb` Returns a list of verbs that most commands adhere to.
- `Get-command` retrieves a list of all commands installed on your machine.
- `Get-Member` operates on object based output and is able to discover what object, properties and methods are available for a command.
- `Get-Help` displays a help page describing various parts of a command.
- `$env:APPDATA` returns APPDATA path
- `Get-ChildItem` for examples, `Get-ChildItem -Path Env:`

## 配置 [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/learn/tutorials/01-discover-powershell?view=powershell-7.2)
配置过程分两部分，基础配置和自定义配置两部分。在基础配置中我们会创建一些必要的 PowerShell 配置文件，包括 PowerShell 当前用户配置和自定义配置两个文件，而在自定义配置阶段，我们将会安装一些必要的插件以及编写 PowerShell 自定义配置文件。

### 基础配置
1. 安装 [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2)
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

    |host-specific profiles|variable|
    |---|---|
    |Current User, Current Host|`$PROFILE`|
    |Current User, Current Host|`$PROFILE.CurrentUserCurrentHost`|
    |Current User, All Hosts|`$PROFILE.CurrentUserAllHosts`|``
    |All Users, Current Host|`$PROFILE.AllUsersCurrentHost`|
    |All Users, All Hosts|`$PROFILE.AllUsersAllHosts`|
    
    以上所有的操作成功后，表示基础的配置准备已经完成，接下来进入安装插件阶段。

### 自定义配置（安装插件） 
1. 配置 prompt，下载 [oh-my-posh](https://ohmyposh.dev/) (A prompt theme engine for any shell)，安装步骤可以参考 [oh-my-posh 官网安装教程](https://ohmyposh.dev/docs/installation/windows)
    - Prompt for Git repositories
 
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
    
    ```
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
   
   ```
   # user_profile.ps1
   Import-Module posh-git
   ```
   
3. 安装 nvm
    
    ```powershell
    scoop install nvm
    ```
    
4. 安装 [terminal icons](https://github.com/devblackops/Terminal-Icons)
    
    ```powershell
    # Install-Module
    Install-Module -Name Terminal-Icons -Repository PSGallery -Force
    
    # or use scoop
    scoop bucket add extras
    scoop install terminal-icons
    
    Import-Module Terminal-Icons
    ```
    
5. 安装 z
    
    ```powershell
    Install-Module -Name z -Force 
    ```
    
6. 安装 [PSReadLine](https://github.com/PowerShell/PSReadLine) - autocompletion 
    
    [How to use PSReadLine](https://docs.microsoft.com/en-us/powershell/module/psreadline/?view=powershell-7.2)
    
    ```powershell
    Install-Module -Name PowerShellGet -Force
    Install-Module -Name PSReadLine -Force -SkipPublisherCheck -AllowPrerelease
    ```
    
    To start using, just import the module:
    
    `Import-Module PSReadLine`
    
    To view the current key bindings:
    
    `Get-PSReadLineKeyHandler`
    
    To use Emacs key bindings, you can use:
    
    `Set-PSReadLineOption -EditMode Emacs`
    
    Specifies the source for PSReadLine to get predictive suggestions.
    
    `Set-PSReadLineOption -PredictionSource Hisory`
    
    Sets the style for the display of the predictive text. The default is **InlineView**.
    
    `Set-PSReadLineOption -PredictionViewStyle ListView`
    
    ```powershell
    # user_profile.ps1
    Import-Module PSReadLine
    Set-PSReadLineOption -EditMode Emacs
    Set-PSReadLineOption -PredictionSource HisoryAndPlugin
    Set-PSReadLineOption -PredictionViewStyle ListView
    ```
    
7. 安装 `fzf` [PSFzf](https://github.com/kelleyma49/PSFzf)
    
    ```powershell
    scoop install fzf
    Install-Module -Name PSFzf -Scope CurrentUser -Force
    ```
## 常用命令
1. `Install-Module posh-git -Scope CurrentUser -Force`
1. `Uninstall-Module -Name oh-my-posh` - Uninstall a module
1. `Get-InstalledModule -Name oh-my-posh | Uninstall-Module` - Use the pipeline to uninstall a module
1. `setx` Creates or modifies environment variables in the user or system environment

## about_Environment_Provider
The environment Environment provider lets you get, add, change, clear, delete environment variables and values in Powershell.

Windows and Powershell use Environment variables to store persistent information that affect system and process execution.

Unlike PowerShell variables, environment variables are not subject to scope constraints.

The Environment provider supports the following cmdlets.

- [Get-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-location?view=powershell-7.2)
- [Set-Location](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location?view=powershell-7.2)
- [Get-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-item?view=powershell-7.2)
- [New-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-item?view=powershell-7.2)
- [Remove-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.2)
- [Clear-Item](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/clear-item?view=powershell-7.2)

## [about_Environment_Variables](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.2)
Environment variables store information about the operating system environment. 

The environment variables store data that is used by the operating system and other programs.

## [about_CommonParameters](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_commonparameters?view=powershell-7.2)
描述可与任何 cmdlet 一起使用的参数。

## 常见问题

### Windows terminal 下 git bash 乱码问题
在相应的 git-for-windows 的安装路径文件 `**\Git\etc\bash.bashrc` 末尾添加

```bash
# 让ls和dir命令显示中文和颜色 
alias ls='ls --show-control-chars --color' 
alias dir='dir -N --color' 
# 设置为中文环境，使提示成为中文 
export LANG="zh_CN" 
# 输出为中文编码 
export OUTPUT_CHARSET="utf-8"

# 可以输入中文 
set meta-flag on 
set output-meta on 
set convert-meta off
```

## 命令
- 生成唯一标识 guid `[guid]::NewGuid()`
- 设置代理
    
    ```powershell
    # powershell
    $env:HTTP_PROXY="http://127.0.0.1:1080"
    $env:HTTPS_PROXY="http://127.0.0.1:1080"
    
    # cmd
    set http_proxy=http://127.0.0.1:1080
    ```

## 技巧
1. 按 tab 键可自动补全命令
2. Reset your video devicer: `Ctrl+shift+win+B`

## 资源
- [https://www.powershellgallery.com/packages/PSFzf/2.0.0](https://www.powershellgallery.com/packages/PSFzf/2.0.0)
- [https://www.powershellgallery.com/](https://www.powershellgallery.com/)

## 参考
- [PowerShell module](https://ohmyposh.dev/docs/migrating)
