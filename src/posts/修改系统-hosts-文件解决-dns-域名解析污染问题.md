---
title: 修改系统 hosts 文件解决 DNS 域名解析污染问题
mySlug: setting hosts to fix connection refused
tags:
  - 网络
date: 2020-06-06T05:02:10.714Z
description: 通过在 hosts 文件中配置域名和 IP 的映射，提高域名的解析速度。
---
解决办法：挂代理访问。如果在有代理的情况下也不能访问，就得修改电脑系统的 **hosts**（[hosts wiki](https://en.wikipedia.org/wiki/Hosts_(file))）文件。

简单说就是通过在 hosts 文件中配置域名和 IP 的映射，提高域名的解析速度。当我们访问域名时，由于有了域名和 IP 地址的映射关系，就不需要经过 DNS 解析，就可以快速解析出 IP 地址。这样也解决了 DNS 域名解析污染的问题。

## 修改 hosts 文件步骤**：**

### 获取 IP 地址

以 [raw.githubusercontent.com](http://raw.githubusercontent.com) 域名为例，使用 [IPAddress](https://www.ipaddress.com/) 网站，在网站输入框中键入域名来获取 IP 地址。

![获取IP地址](https://i.loli.net/2020/06/06/qEO9oFHv1WLiKsw.png)

### 修改 hosts 文件

Windows 系统 hosts 文件路径 `C:\Windows\System32\drivers\etc\hosts` ，Linux 系统 hosts 文件路径是 `\etc\hosts` ，使用管理员权限打开 hosts 文件，在里面添加以下内容，保存即可。

```bash
199.232.28.133 raw.githubusercontent.com
```