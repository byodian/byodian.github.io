---
title: "HTML Bead"
mySlug: "What is the head"
tags: 
  - HTML
created: 2022-06-05
description: 'head 是 HTML 文档的一部分，但其内容不会在网页中展示。'
---

HTML 文档的 head 在网页内容加载完成后，其内容不会被显示。它包含了网页的一些信息，比如网页的标题、指向外部的样式和脚本链接以及页面的元数据等。

## 什么是 head

HTML 文档的 head 包含在 `<head>` 元素中，它的工作是展示网页文档的**元数据**
（[metadata](https://en.wikipedia.org/wiki/Metadata)）和引入外部文件。元数据的定义很简单，即描述数据的数据，在这里描述 HTML 文档。

## 常用的标签类型

- title
- meta
- link
- script

## title

页面的标题，在浏览器的标签中显示。

```html
<title>The Document title</title>
```

## meta

HTML 文档的元数据包括在 `<meta>` 标签中，许多的 `<meta>` 元素包括 `name` 和 `content`
属性。

- `name` 指定 meta 元素的类型
- `description` 指定实际的 meta 内容

### author 和 description

- **author** 定义页面的作者
- **description** 指定描述页面内容的关键字，此类型有利用搜索引擎优化 (SEO)

```html
<meta name="author" content="byodian">
<meta
  name="description"
  content="byodian's blog - 博客内容主要是前端编程学习、个人周报以及效率相关的工作流总结"
>
```

当你使用搜索引擎搜索 **byodiandev.com** 时，此网页的 `<title>` 和 description `<meta>` 内容会出现在搜索结果中。

### 指定文档的字符类型

```html
<meta charset="utf-8">
```

`utf-8` 是一种通用的字符设置，它包含了任意人类语言中相当多的字符。

## 其他类型的 meta

### [Open Graph Data](https://ogp.me/)

Open Graph 协议会使一个在社交媒体中分享的网页链接变成一个富文本对象。

**Open Graph 协议中基础的 metadata**

| 属性             | 描述                                                              |
| ---------------- | ----------------------------------------------------------------- |
| `og:title`       | 富文本对象的标题                                                  |
| `og:description` | 富文本对象的描述性文本                                            |
| `og:type`        | 富文本对象的类型，比如 `video.movie`、`website` 和 `music.song`等 |
| `og:image`       | 富文本对象的图片链接                                              |
| `og:url`         | 富文本对象指向的链接                                              |

```html
<meta property="og:title" content="byodian'blog">
<meta
  property="og:description"
  content="byodian's blog - 博客内容主要是前端编程学习、个人周报以及效率相关的工作流总结"
>
<meta property="og:type" content="website">
<meta property="og:image" content="https://byodiandev.com/static/img/avatar-3x.png">
<meta property="og:url" content="htttps://byodiandev.com">
```

### [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

使用 Twitter
卡片，可以将你的网站通过富文本的形式附加至推文中，下面是在推文嵌入视频播放器卡片的例子。

![player card](https://i.imgur.com/TGFF3ZF.png)

twitter 卡片有四种类型：
- `summary`
- `summary_large_image`
- `app`
- `image2|image3|image6|image7`

| 类型             | 描述                                                  |
| ---- | ----------------------------------------------------------------- |
| [总结类卡片](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary) | 显示标题、描述和缩略图 |
| [带大图片的总结类卡片](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image) | 与总结卡片类似，但图片更大 |
| [应用卡片](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card) | 直接下载应用的卡片 |
| [播放器卡片](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card) | 展示视频、音频的卡片 |

在推文中，嵌入一个**总结卡片**链接的步骤

1. 选择总结卡片类型
2. 增加正确的 [meta](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) 标签到页面中
3. 通过 [validator tools](https://cards-dev.twitter.com/validator) 测试链接
4. 在你的推文中嵌入具有总结卡片的链接

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="byodian's blog">
<meta name="twitter:image" content="https://byodiandev.com/static/img/avatar-3x.png">
<!-- @username for the website used in the card footer -->
<meta name="twitter:site" content="@byodian">
<!-- @username for the content creator / author-->
<meta name="twitter:creator" content="@byodian">
<meta 
  name="twitter:descriptoin" 
  content="byodian's blog - 博客内容主要是前端编程学习、个人周报以及效率相关的工作流总结"
>
```

Twitter 卡片和 Open Graph 协议结合使用时，很多 Open Graph 的 meta
内容可以复用，比如 `og:title`、`og:description` 和 `og:image`。

```html

<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@byodian">
<meta name="twitter:creator" content="@byodian">
<meta property="og:title" content="byodian'blog">
<meta
  property="og:description"
  content="byodian's blog - 博客内容主要是前端编程学习、个人周报以及效率相关的工作流总结"
>
<meta property="og:image" content="https://byodiandev.com/static/img/avatar-3x.png">
```
