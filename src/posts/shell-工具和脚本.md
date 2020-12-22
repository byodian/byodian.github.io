---
title: 命令行和 Shell 工具
mySlug: shell-tools
tags:
  - shell
date: 2020-12-21T13:56:51.053Z
description: bash 基本操作、shell 编程
---

任务自动化是计算机设计的初衷，学习使用文本编辑、版本控制、文本处理等工具，可以极大的帮助我们减少重复操作，提高效率。

学习目的：
- 学习使用别名
- 使用脚本构建系统，自动化执行重复任务

## 认识 Shell
文字接口 Shell：允许执行程序，输入并获取某种半结构化的输出。

Bourne Again Shell，简称 bash，被最广泛使用的一种 Shell。

打开终端，会出现类似下面的提示符。

```bash
bashuser:~$ 
```

- `bashuser` 表示主机名
- `~` 表示你当前所在的位置是 `home`
- `$` 表示你的身份是普通用户（非 root 用户）

### 终端和 Shell区别

[Todo]

## 使用 Shell

**执行步骤**

1. Shell 基于空格分割命令并进行解析；
2. 执行第一个单词代表的程序，后续单词作为参数传递给程序；

也就是说，一个参数中如果存在空格会被当做多个参数处理，使用以下任意一种方式可实现在一个参数中使用空格：

- 使用单引号包裹
- 使用双引号包裹
- 使用 `\` 转义

```bash
bashuser~$ cd my\ projects
bashuser~/my projects$
```

Shell 如何寻找 `date` 和 `echo` 等命令？

类似与 Python 或 Ruby，Shell 是一个编程环境，它具备变量、条件、循环或函数。

当执行命令时，实际上我们是在执行一段 shell 可以解释执行的简短代码。在 shell 中执行某条指令，它会咨询环境变量 `$PATH` ，并列出进行程序搜索的路径：

```bash
bashuser:~$ ehco $PATH
/home/bashuser/.local/bin:/home/bashuser/.nvm/versions/node/v12.18.4/bin
bashuser:~$ which echo
/usr/bin/echo
bashuser:~$ /bin/echo hello
hello
```

在 `$PATH` 中搜索由 `:` 所分割的一系列目录，基于名字搜索该程序，找到命令就可执行。

确定某个指令名所代表的程序，可以使用 `which` 命令。

## 导航

shell 中的路径是一组被分割的目录，在 Linux 系统中使用 `/` 分割，Windows 中用 `\` 分割。

绝对路径以 `/` 开头，相对路径是指相对于当前工作目录的路径。

### 切换目录命令

`cd` change directory，传递路径参数，执行命令，可切换至相应的目录。

```bash
bashuser:~$ cd projects
bashuser:~/projects$ 
```

其中下面的字符作为参数：

- `/` 表示系统的根目录
- `~` 表示 home 目录
- `.` 表示当前目录
- `..` 表示上一级目录
- `-` 上一次打开的目录

### 查看当前目录路径

`pwd` 查看当前目录路径

### 列出当前目录下的文件

`ls` 列出当前目录下的文件，命令接受以 `-` 开头的标记和选项（带有值的标记）

`-l` 打印文件属性（详细信息）

```bash
bashuser:~$ ls -l /projects
drwx-xr-x 1 bashuser users 4096 Jul 26 11:51 alien_invasion
```

`drwx-xr--x` 代表文件的类型是权限

第一个字符代表文件是目录、文件或链接等，然后接下来九个字符，三个为一组，代表文件各自拥有者所具备的权限

- `d` 代表文件是目录
- `rwx` 代表文件拥有者可具备**读、写和执行**权限
- `-xr` 代表用户组账号具**写和执行**权限。
- `--x` 代表非本人和没有加入本用户组的其他账号的权限，仅可执行。

## 配置 Shell 提示符

显示各种有用的信息

## Shell 程序中的流概念

在 Shell 中，程序有两个主要的流：输入流和输出流。

重定向 `< file` 和 `> file` ，将程序的输入输出流分别重定向到文件。

```bash
bashuser:~$ echo hello > hello.txt
bashuser:~$ cat hello.txt
hello 
bashuser:~$ cat < hello.txt > hello2.txt
bashuser:~$ cat hello2.txt
hello
```

`>>` 向文件追加内容，使用管道，更好地利用文件的重定向。

`|` 操作符允许我们将一个程序的输出作为下一个程序的输入。

```bash
bashuser:~$ ls -l projects | tail -n1
drwx-xr-x 1 bashuser users 4096 Jul 26 11:51 alien_invasion
```

使用管道操作符，使 `ls -l projects` 的输出作为 `tail -n1` 的输入，结果将会在终端打印出 `ls -l projects` 输结果的最后一行。

## #!/bin/sh

```bash
#!/bin/sh
curl --head -=silent https://missing.csail.mit.edu
```

`#` 在 Bash 代表注释，而 `!` 具有特殊的含义。

## 常用命令

- `stat` 
- `tail`
- `head`
- `chomd`
- `date` 打印当前的日期和时间
- `echo` 

## 任务

写一段命令从 `/sys` 中获取笔记本的电量信息。