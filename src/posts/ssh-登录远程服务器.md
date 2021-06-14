---
title: SSH 登录远程服务器
mySlug: ssh
tags:
  - ssh
date: 2021-06-14T08:39:50.946Z
description: 使用 ssh 登录远程服务器
---
## SSH 基础知识

SSH （Secure Shell）是一种网络协议，用于加密两台计算机之间的通信，并且支持各种身份验证机制。

主要用于保证远程登录和远程通信的安全，任何网络服务都可以用这个协议来加密。

OpenSSH 是一个完全的 SSH 2.0 协议实现，为 OpenBSD 的开源项目。目前几乎所有的 LInux 的发行版都自带 OpenSSH。

SSH 的软件架构是服务器-客户端模式（Serve - Client）。客户端（Client）负责向服务器发出请求，OpenSSH 的实现为 *ssh*；服务器 （server）接受客户端的请求，OpenSSH 的实现为 *sshd*。

### 辅助软件

- ssh-keygen
- ssh-agent
- shh-add

### 客户端工具

- scp
- sftp

## 安装

Ubuntu 操作系统下，安装 OpenSSH 客户端和服务器端应用。

```bash
# 安装客户端
sudo apt install openssh-client

# 安装服务器端应用
sudo apt install openssh-server
```

## 更新客户端和服务器配置

### 服务器端配置

服务器端配置文件在 `/etc/ssh` 目录，主配置文件为 `sshd_config`，此目录下还有一些安装时生成的密钥文件。

### **sshd 命令**

- `sshd -t` 检查配置文件的语法
- `sshd -f [filename]` 指定 sshd 的配置文件

修改 sshd 配置文件后，并不会自动生效，必须重新启动 sshd。

```bash
# 重启
sudo systemctl restart sshd.service

# 启动
sudo systemctl start sshd.service

# 停止
sudo systemctl stop sshd.service
```

### **sshd 密钥**

sshd 有自己的一对或多对密钥，它使用密钥向客户端证明自己的身份。可以通过配置文件 `sshd_config` 的 `HostKey` 配置项指定默认密钥文件。

密钥文件位于 `/etc/ssh` 目录，所有的公钥和私钥都是成对出现，公钥文件名一般是以 `.pub` 后缀结尾。

### 客户端配置

SSH 客户端的主配置文件在 `/etc/ssh/ssh_config`，用户个人配置文件在 `~/.ssh/config` ，优先级高于全局配置文件。

除了配置文件，`～/.ssh` 还有一些用户个人的密钥文件 `*.pub` 和存放 SSH 服务器的公钥指纹文件 `known_hosts`。

### 用户个人的配置文件

`~/.ssh/config` 可以按照不同的服务器，列出各自的连接参数，简化 ssh 登录过程。

```bash
Host *
      Port 2222
Host remoteServer
      HostName 145.89.30.234
      User root
      Port 2323
```

## 客户端 ssh

### ssh 命令

- `ssh user@hostname` 登录服务器基本用法
- `ssh user@hostname -p 29393` 指定端口
- `ssh -l username host` 使用 `l` 参数，主机和用户名不需要写在一起

### ssh 连接过程

1. 验证远端服务器是否为陌生地址，第一次连接会提示不认识这台机器，提醒用户确认是否需要连接
2. 用户点击确认后，服务器公钥指纹会被存储在 `~/.ssh/known_hosts` 文件中。每次连接服务器时，通过该文件判断是否为陌生主机。
3. 如果服务器公钥指纹发生变更，我们也需要更新 `~/.ssh/known_hosts` 文件，将原来的公钥指纹从该文件中删除，然后使用 `ssh` 重新连接服务器将新的指纹加入 `known_hosts` 文件。

## ssh 密钥登录

SSH 默认采用密码登录，密码登录存在很多缺点。

- 简单密码不安全
- 复杂密码，记忆较困难，每次都需要手动输入，比较麻烦。

### 密钥登录过程

1. 将客户端的公钥加入到远程服务器的 `~/.ssh/authorized_keys` 文件。
2. 客户端向服务器发起 SSH 登录的请求
3. 服务器收到用户 SSH 登录的请求，发送一些随机数据给用户，要求用户证明自己的身份。
4. 客户端收到服务器发来的数据，使用私钥对数据进行签名，然后再发送给服务器。
5. 服务器收到客户端发来的加密签字后，使用对应的公钥解密，然后跟原始数据比较。如果一致，就允许用户登录。

### 生成密钥

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@domain.com"
```

### ssh-keygen 命令配置项

- `b` 指定密钥的二进制位数
- `C` 参数可以为密钥文件指定的注释
- `f` 指定生成的私钥文件名称
- `F` 检查某个主机名是否在 `known_hosts` 文件里面
- `N` 指定私钥的密码
- `p` 重新指定私钥的密码
- `R` 将指定的主机公钥移除 `known_hosts` 文件

### 手动上传公钥

生成的公钥必须上传到服务器，才能使用公钥登录。

OpenSSH 规定，用户公钥保存在服务器的 `~/.ssh/authorized_keys` 文件。每个公钥占据一行，`authorized_keys` 的权限应该设置为 `644`

```bash
cat ~/.ssh/id_rsa.pub | ssh user@host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

```bash
chmod 644 ~/.ssh/authorized_keys
```

只要公钥上传到服务器，下次登录时，OpenSSH 就会自动采用密钥登录，不再提示输入密码。

### 自动上传公钥

OpenSSH 自带一个 `ssh-copy-id` 命令，可以自动将公钥拷贝到远程服务器的 `~/.ssh/authorized_keys` 。如果此文件不存在，`ssh-copy-id` 会自动创建该文件。

```bash
ssh-copy-id -i id_rsa.pub user@host
```

- `i` 指定公钥文件名。

## ssh-agent 命令，ssh-add 命令

私钥设置密码后，每次使用都必须输入密码，很浪费时间。比如连续使用 `scp` 命令远程拷贝文件时，每次都要求输入密码。`ssh-agent` 命令就是为了解决这个问题而设计，它让用户在整个 bash 对话（session）之中，只在第一次使用 SSH 命令时输入密码，然后将私钥保存在内存中，后续的操作都不需要输入私钥的密码。

### 基本用法

1. 新建命令行对话，`ssh-agent bash` 这里可以是任何 shell 程序，比如 zsh
2. 在新建的 shell 对话中，使用 `ssh-add` 命令添加默认的私钥。添加私钥时，会要求输入密码，以后，在这个对话里面在使用密钥时，就不需要输入私钥的密码了，因为密钥密码已经被加入到内存中了。
3. 使用 ssh 命令正常登录远程服务器
4. 若要退出 ssh-agent 对话，可以直接退出 Shell （快捷键 ctrl+d），也可以使用 `ssh-agent -k` 命令。

### 关闭密码登录

修改服务器 sshd 配置文件 `/etc/ssh/sshd_config` ，将`PasswordAuthentication` 这一项设置为 `no`，修改配置文件以后，需要重新启动 sshd。