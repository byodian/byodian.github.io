---
title: Styling text
mySlug: styling text
tags: 
  - HTML
  - CSS
created: 2022-07-18
description: 基础的文本和字体格式化
---

```css
p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: red;
  font-size: 20px;
  font-family: Helvetica sans-serif;
  font-style: italic;
  font-weight: bold;
  /* text-transform = uppercase|none|lowercase|capitalize|full-width */
  text-transform: capitalize;
 
  /* text-decoration-line = underline|overline|line-through|none*/
  /* text-decoration-style = wavy|solid|dashed|dotted|double; */
  /* text-decoration 为属性简写：text-decoration-line, text-decoration-style, text-decoration-color */
  text-decoration: underline black dotted;
  /* text-underline-position = under|left|right|auto */
  text-underline-position: under;
  
  /* text-align = left|right|center|justify */
  text-align: left;
  /* 一段文本中最后一行的对齐规则 */
  text-align-last: center;
  /* Switch on and off hyphenation for supported languages. */
  hyphens: auto;
  
  /* text-overflow = auto|ellipsis|clip|<string> e.g. "-" |fade*/
  /* text-overflow property only affects content that is overflowing a block container element in its inline progression direction. */
  /* text-overflow 不会强制一个溢出发生，你必须设置其他的 CSS 属性：overflow 或者 white-space 才能使得文本溢出它的父容器。 */
  /* text-overflow 只配合 overflow 值 hidden 使用，只能在一个英文单词宽度大于父容器宽度的时候有效 */
  text-overflow: ellipsis;
  overflow: hidden;
 
    /* white-space 处理一个元素内的空白字符 */
    /* white-space = normal|nowrap|pre|pre-wrap|pre-line|break-spaces   
     normal: 合并空白字符，换行字符被当作空白字符对待，根据需要换行
     nowrap: 合并空白字符，但是阻止换行
     pre: 保留空白字符，换行情况：遇到换行字符或者使用 <br> 元素的时候
     pre-wrap: 保留空白字符，换行情况：遇到换行字符、使用 <br> 元素或者根据需要
     pre-line: 合并空白字符，换行情况：遇到换行字符、使用 <br> 元素或者根据需要
    */
    /* The property specifies two things:
      - Whether and how white space is collapsed
      - Whether lines may wrap at soft-wrap opportunities 
    */
  
  white-space: normal;
  /* 设置如何断开带有标点符号的中文、日文或韩文的行 */
  /* line-break = normal|auto|anywhere|loose|strict */
  line-break: auto;
  
  /* 控制 Non CJK 文本换行的 CSS 属性：word-break, overflow-wrap */
  /* work-break 不应该被用来设置 中文/日文/韩文（简称 CJK）文本 */
  /* word-break = normal|break-all|keep-all */
  /* break-all 阻止内容溢出，除了中文/日文/韩文 */
  /* keep-all 非 CJK 文本的行为同 normal  */
  /* `word-break: break-all` will create a break at the exact place where text would otherwise overflow its container. */
  word-break: normal;
  
  /* 应用于 non-replaced inline elements */
  /* overflow-wrap = normal|anywhere|break-word */
  /* overflow-wrap will only create a break if an entire word cannot be placed on its own line without overflowing. */
  overflow-wrap: normal;
  
  /* `writing-mode` `direction` `text-orientation` */
}
```
<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="YzaNdzq" data-user="byodian" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/byodian/pen/YzaNdzq">
  Untitled</a> by byodian (<a href="https://codepen.io/byodian">@byodian</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

**参考**

[Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
