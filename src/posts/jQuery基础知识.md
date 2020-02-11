---
title: jQuery 基础
mySlug: jQuery basics
tags:
  - javaScript
date: 2018-11-14T23:59:50.000Z
description: 这篇文章总结常用的 jQuery API 方法，但现在原生的 DOM API 越来越强大，已经可以取代 jQuery。
---



## jQuery HTML
### 获取内容
- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val()  - 设置或返回表单字段的值

### 获取属性
attr() 方法用于获取属性值

### 设置内容
- text()
- html()
- val()

语法：`$(selector).text("文本内容");`

### 设置属性

`attr()`, 设置单个属性语法：`$(selector).attr("title","文本内容")`

设置多个属性语法：
```js
$(selector).attr({
    "href" : "http://www.baidu.com",
    "title" : "百度"
})
```

### jQuery 添加

- append() - 在被选元素的结尾插入内容
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容

### jQuery 删除

- remove() - 删除被选元素（及其子元素）
- empty（）- 从被选元素中删除子元素

### 过滤被删除的元素
remove() 方法也可接受一个参数，允许对被删除的元素进行过滤。

举例
```js
// 删除 `class="italic"`的所有 p 元素
$("p").remove(".italic");
```
## jQuery CSS 
- addClass() - 添加类
- removeClass() - 删除类
- toggleClass() - 添加/删除类的切换操作
- css() - 设置或返回样式属性

### CSS 属性

返回指定的 CSS 属性的值，语法：`css("propertyname")`

设置指定的 CSS 属性，语法：`css("propertyname","value");`

设置多个 CSS 属性，语法：`css({"propertyname":"value","propertyname":"value",...});`


## jQuery 尺寸

- width() - 设置或返回元素的宽度（不包括内边距、边框或外边距）
- height() - 设置或返回元素的高度（不包括内边距、边框或外边距）
- innerWidth() - 返回元素的宽度（包括内边距）
- innerHeight() - 返回元素的高度（包括内边距）
- outerWidth() - 返回元素的宽度（包括内边距和边框）
- outerHeight() - 返回元素的高度（包括内边距和边框）
- outerWidth(true) - 返会元素的宽度（包括内边距、边框和外边距）
- outerHeight(true) - 返回元素的高度（包括内边距、边框和外边距）

## jQuery 遍历

### 祖先

- parent() - 返回被选元素的直接父元素
- parents() - 返回被选元素的所有祖先元素，它一路向上直到文档的根元素（html）
- parentsUntil() - 返回介于两个给定元素之间的所有祖先元素。

### 后代

- children() - 返回被选元素的所有直接子元素
- find() - 返回被选元素的后代元素，一路向下直到最后一个元素

### 举例

返回每个 div 元素的所有直接子元素

```js
$(document).ready(function () {
  // 返回被选元素的后代元素，一路向下直到最后一个后代
    $("div").children();
});
```

过滤元素

```js
//返回类名为 "的所有 p 元素，并且它们是 div 直接的子元素
$(document).ready(function (){
    $("div").children("p.1");
})
```


### jQuery 兄弟元素

- siblings() - 返回被选元素的所有同胞元素
- next() - 返回被选元素的下一个同胞元素
- nextAll() - 返回被选元素的所有跟随的同胞元素
- nextUntil() - 返回介于两个给定参数之间的所有跟随的同胞元素。
- prev()
- prevAll()
- prevUntil()

### jQuery 过滤

- first() - 返回被选元素的首个元素
- last() - 返回被选元素的最后一个元素
- eq() - 返回被选元素中带有指定索引号的元素
- filter() - 方法允许你规定一个标准，不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回
- not() - 返回不匹配标准的所有元素

## AJAX

### 简介

AJAX = 异步Javascript 和 XML （Asynchronous Javascript and XML）。间短说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上显示，实现了对部分网页的更新。

jQuery 提供多个与 AJAX 有关的方法。通过 jQuery AJAX 方法，你能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON ，同时能够把这些外部数据直接载入网页的被选元素中。

### 加载
load() 方法是简单但强大的 AJAX 方法。load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

## jQuery 选择器

### 基本选择器
- id 选择器 - $("#id")
- 类选择器  - $(".class")
- 元素选择器 - $("element")
- * 选择器- $("*")
- 集合选择器（selector1,selector2,...）- $("div,span,p.myClass")

### 层次选择器

层级选择器都有一个参考节点；后代选择器包含子选择器的选择的内容；一般兄弟选择器包含相邻兄弟选择的内容；相邻兄弟选择器和一般兄弟选择器所选择到的元素，必须在同一个父元素下
- 后代选择器 - `$("ancestor descendant")`
- 子选择器 - `$("parent > child")`
- 相邻兄弟选择器　- `$("prev + next")`，可以用 next() 代替
- 一般兄弟选择器 - `$("prev ~ next")`，可以用 nextAll() 代替

### 过滤选择器

- 基本过滤选择器
- 内容过滤选择器
- 可见性过滤选择器
- 属性过滤选择器
- 子元素过滤选择器
- 表单对象属性过滤选择器

基本过滤选择器

- :first - 单个元素
- :last - 单个元素
- :not(selector) - 去除所有与给定选择器匹配的元素
- :even - 选取索引为偶数的所有的元素
- :odd - 选取索引为奇数的所有元素
- :eq(index) - 单个元素，选取索引等于 index 的元素
- :gt(index) - 选取索引大于 index 的元素
- :lt(index) - 选取索引小于 index 的元素
- :header - 选取所有的标题元素
- :animated - 选取当前正在执行动画的所有元素
- :focus - 选取当前获取焦点的元素

内容过滤选择器

- :contains(text) - 查找“指定文本”的元素
- :empty - 选取不包含子元素或者文本的空元素
- :parent - 选取含有子元素或者文本的元素
- :has(seector) - 查找“指定元素”的元素

可见性过滤选择器

- :hidden - 选取所有不可见的元素
- :visible - 选取所有可见的元素

属性过滤选择器

- [attribute]
- [attribute=value]
- [attribute!=value]
- [attribute^=value]
- [attribute$=value]
- [attribute*=value]
- [attribute|=value]
- [attribute~=value]
- [attribute1][attribute2][attribute3]

子元素选择器

- :nth-child(index/even/odd/equation) - 集合元素,选取每个父元素下的第 index 个子元素或者奇偶元素（index从1算起）
- :first-child - 集合元素
- :last-child
- :only-child

表单对象属性过滤选择器

- :enabled - 单选框
- :disabled - 单选框
- :checked - 复选框
- :selected -下拉列表

### 表单选择器
- :input
- :text
- :password
- :radio
- :checkbox
- :submit
- :image
- :reset
- :button
- :file
- :hidden

## jQuery DOM操作

### 查找节点

- 查找元素节点
- 查找属性节点 - `attr()` 方法

### 创建节点

- 创建元素节点 - `$(html)` 

  动态创建的新元素节点不会被自动添加到文档中，需要使用其他方法将其插入文档中。

  当创建单个元素时，需要闭合标签和使用标准的 XHTML 格式。
- 创建文本节点 
- 创建属性节点

举例：

```js
// 创建元素节点
var $li_1 = $("<li><li/>"); //创建第一个 li 元素
var $li_1 = $("<li><li/>"); //创建第二个 li 元素
$("ul").apend($li_1).append($li_2);

//创建文本节点
var $li_1 = $("<li>香蕉<li/>");
$("ul").append($li_1);

// 创建属性节点
var $li_1 = $("<li title='雪梨'>雪梨<li/>");
$("ul").append($li_1);
```

### 插入节点

- append() - 向每个匹配的元素内部追加内容
- appendTo() - 将所有匹配的元素加到元素中，与append() 颠倒。`$(A).append(B)`，将 A 追加到 B 中。
- prepend() - 向每个匹配的元素内部前置内容。
- prependTo()
- after() - 向每个匹配的元素之后插入内容。
- insertAfter - 将所有匹配的元素插入到指定元素的后面。
- before() - 在每个匹配的元素之前插入内容
- insertBefore() - 将所有匹配的元素插入到指定元素的前面。

### 删除节点
- remove()
- detach()
- empty()

### 复制节点
- clone()

### 替换节点
- replaceWith()
- replaceAll()

### 包裹节点
- wrap()
- wrapAll()
- wrapInner()

### 属性操作
- 获取属性和设置属性 attr()
- 删除元素属性 removeAttr()

### 样式操作
- 获取样式和设置样式
- 追加样式
- 移除样式
- 切换样式
- 判断样式是否存在

### 设置和获取 HTML 、文本和值
- html()
- text()
- val()

### 遍历节点
- parent()
- parents()
- children()
- find()
- next()
- nextAll()
- prev()
- prevAll()
- siblings()
- closest()
- filter()

find() 和 filter() 的区别

- find() 会在元素内寻找匹配的元素，而 filter() 则是筛选元素。
- find() 是对它的子集进行操作，filter() 是对自身集合元素进行筛选。

### CSS-DOM 操作

- css()
- offest()
- position()
- scrollTop() 和 scrollLeft()

### jQuery 事件

- 事件绑定
- 事件冒泡 - 事件的触发会按照特定 DOM 的层次结构像水泡一样不断向上直至顶端
- 事件捕获 - 从顶端开始往下触发

### 事件冒泡

事件冒泡引发的问题：会引起预料之外的效果，有必要对事件的作用范围进行限制。

事件冒泡的解决办法：使用事件对象阻止事件冒泡

```js
$("element").click(function(event){        // event: 事件对象
    ...
    event.stopPropagation();  // 停止事件冒泡
})
```

阻止默认行为
```js
$("element").click(function(event){        // event: 事件对象
    ...
    event.preventDefault();  // 停止事件冒泡
})
```

### jQuery 动画
### 显示隐藏

- 改变元素的 display 属性值
  `show()`
  `hide()`
- 改变元素不透明度
  `fadeIn()`
  `fadeOut()`
  `fadeToggle()`
  `fadeTo()`
- 改变元素高度
  `slideUp()`
 `slideDown()`
  `slideToggle()`

### 自定义动画 animate()

`animate()` 

语法：`animate({params},speed,callback)`


