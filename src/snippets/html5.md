---
title: HTML Boilerplate
mySlug: html boilerplate
tags: 
  - HTML
description: HTML 样板文件
---

{{ description }}

```html
<!DOCTYPE html>
<head>
  <title>{{ description }}</title>
  <meta charset="utf-8">
  <meta 
    name="viewport" 
    content="width=device-width, initial-scale=1.0"
  > 
  <meta name="author" content="byodian">
  <meta name="description" content="描述网页的关键字内容...">

  <!-- open graph protocol -->
  <meta property="og:title" content="byodian's blog">
  <meta property="og:type" content="website">
  <meta property="og:image" content="{{ setting.ogImage }}">
  <meta property="og:url" content="{{ setting.siteUrl  }}">
  <meta property="og:description" content="描述网页的关键字内容...">

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="app"></div>
  <script src="app.js"></script>
</body>

```
