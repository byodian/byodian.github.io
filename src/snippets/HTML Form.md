---
title: HTML Form
mySlug: html form
created: 2022-06-07
tags:
  - HTML
  - CSS
description: HTML 表单控件
---

## 什么是表单

HMLT 表单是用户和 web 站点或应用程序之间交互的主要内容之一。

HTML 表单和常规 HTML 文档的主要区别在于，大多数情况下，表单收集的数据被发送到 web 服务器。

从用户体验的角度来看，要记住：表单越大，失去用户的风险就越大。

## 表格元素

- `<form>`
- `<fieldset>`
- `<legend>`
- `<textarea>`
- `<label>`
- `<button>`
- `<input>` 常见的 input 控件分类
  - text
  - button
  - checkbox
  - radio
  - password
  - file
  - image
  - hidden
  - reset
  - submit

## HTML5 input 类别

HTML5 最新的 `input` 控件提供内建的客户端格式验证（client-side validation）和在触摸设备下更好的输入体验（使用时可根据控件类型不同，展示不同的键盘）。

- `email` 类型可结合 `multiple` 属性使用，多个值需要使用英文逗号分隔。触摸设备的键盘会展示 `@` 按键。
  ```html
  <input type="email" name="email" multiple />
  ```
- `tel` 电话号码类型。在触摸设备下，使用此控件会展示**电话号码键盘**。使用 HMLT `[pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)` 属性可以对输入值进行限制。
  ```html
  <input type="tel" name="tel" />
  ```
- `search` 与 `text` 类型相比主要区别是它的样式表现。它的样式在各主流浏览器下有不同的表现。比如有些版本的浏览器会展示一个清除内容的按钮。
  ```html
  <input type="search" name="search" />
  ```
- `url` 链接类型提供客户端检验，输入不是以 `http` 等协议（mail 协议除外）开头的链接会报告一个错误。触摸设备键盘显示 `/` `.com` 等按键。
  ```html
  <input type="url" name="url" />
  ```
- `number` 数字类型。在触摸设备下，使用它输入内容会展示数字键盘，只允许输入浮点类型的数字。但默认情况下此控件输入值只能是整数，指定 `step` 的属性值为 `any` 或其他浮点数才能输入浮点类型的值。`step` 默认值为 1。

  ```html
  <!-- 输入浮点类型的值 step="any" -->
  <input type="numebr" name="number" step="any" />

  <!-- 输入浮点类型的值 step="0.1" -->
  <input type="numebr" name="number" step="0.1" />
  ```

  - `min` 和 `max` 属性可以指定最小和最大输入值。
  - `min` 和 `step` 的值会定义输入值的合法性，比如 `min="2.1"` 和 `step="2”`，合法的输入值有 2.1、4.1、6.1、 8.1 等等必须是以 `.1` 结尾的偶数值，任何整数、奇数形式的 `.1` 和其他形式的浮点数都是非法值。参考 [min impact on step](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step#min_impact_on_step)
    ```html
    <!-- 合法值：2.1, 4.1, 6.1, 8.1 等等 -->
    <!-- 非法值：整数和 奇数形式的 3.1, 5.1, 6.1 以及其他不是 .1 结尾的浮点数-->
    <input type="number" min="2.1" step="2" />
    ```

- `range` 滑块控件。通常与 `min`、`max` 和 `step` 属性结合使用。
  
  ```html
  <input type="range" min="20" max="100" step="10" value="30"> 
  ```

### Date and time pickers

所有的日期和时间控件的值都可以使用 `min`、`max` 属性进行限制，也可以使用 `step` 属性进行更进一步的限制。

- `datetime-local`
- `month`
- `time`
- `week`
- `date`

## Multi-line text fields

`<textarea>` 默认值在开启和关闭标签之间，而 `<input>` 是一个没有关闭标签空元素，它的默认值应该放在 `value` 属性中。

在非表单元素中使用 `contenteditable` 属性可以开启编辑功能。

HMTL 属性

- `cols`
- `rows`

CSS 属性

- `resize` - 调整输入框大小
  - `both` - 默认值
  - `horizontal`
  - `vertical`

```html
<textarea cols="30" rows="8">这里是 textarea 默认值</textarea>

<input type="text" value="这里是 input 的默认值" />
```

## 下拉选择控件

修改下拉控件的样式很难，因为它的内部结构很复杂，且在不同的浏览器中样式存在差异。

### 组成元素

- `<select>`
- `<option>`
- `<optgroup>` 结合 `label` 属性使用

### `<select>` 元素属性

- `name`
- `required`
- `disabled`
- `autocomplete`
- `autofocus`
- `size`
- `multiple`

```html
<div>
  <label for="simple-select">SimpleSelect</label>
  <select name="simple-select" id="simple-select">
    <option value="">--Please choose an option --</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
    <option value="lemon">Lemon</option>
  </select>
</div>

<div>
  <label for="advanced-select">AdvancedSelect</label>
  <select name="advanced-select" id="advanced-select" multiple size="3">
    <optgroup label="fruits">
      <option value="banana">Banana</option>
      <option value="cherry">Cherry</option>
      <option value="lemon">Lemon</option>
    </optgroup>
    <optgroup label="vegetables">
      <option value="carrot">Carrot</option>
      <option value="eggplant">Eggplant</option>
      <option value="potato">Potato</option>
    </optgroup>
  </select>
</div>
```

## 自动补全的 input 控件

- `<input>` 结合 `list` 属性
- `<datalist>` 结合子元素 `<option>` 使用

```html
<div>
  <label for="myFruit">What's your favorite fruit?</label>
  <input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
  <datalist id="mySuggestion">
    <option>Apple</option>
    <option>Banana</option>
    <option>Blackberry</option>
    <option>Blueberry</option>
    <option>Lemon</option>
    <option>Lychee</option>
    <option>Peach</option>
    <option>Pear</option>
  </datalist>
</div>
```

## Meters and progress bars

A process bar represents a value that changes over time up to a maximum values specified by the `max` attribute.

```html
<progress max="100" value="75">75/100</progress>
```

## 表单美化

表单控件有非常复杂的结构，除了修改一些基础的样式（比如改变宽度、外边距、边框），我们很难修改控件内部组件的样式。

如果你想要自定义表单控件，你必须通过 HTML、CSS 和 JavaScript 创建属于自己的表单控件或者使用第三方库。

### 使用 CSS 容易美化的表单控件

- `<form>`
- `<fieldset>` 和 `<legend>`
- 单行文本 `<input>`，除了 `<input type="search">`
- 多行 `<textarea>`
- 按钮
- `<label>`
- `<output>`

使用**字体和文本属性**

默认情况下，一些表单控件不会从它们的父元素继承 `font-family` 和 `font-size` 属性。许多的浏览器使用系统的默认表现代替。为了使表单的表现与其他内容保持一致，你可以在样式表中添加一下规则。

```css
button,
input,
select,
textare {
  font-family: inherit;
  font-size: 100%;
}
```

L**egend placement**

`<legend>` 元素对于可访问性来说是非常重要的，辅助设备会读出它的内容，其的样式也容易调整。

```css
fieldset {
  position: relative;
}

legend {
  position: absolute;
  bottom: 0;
  right: 0;
}
```

### 使用 CSS 较难美化的表单控件

- 单选框和复选框
- `<input type="search">`

使用 **appearance**

CSS `appearance` 属性控制着系统级别的样式。一般情况下 `appearance: none;` 会移除 `border` 的样式。

```css
-webkit-appearance: none;
appearance: none;
```

### 不能使用 CSS 样式化的表单控件

- `<input type="color">`
- 日期对应的控件
- `<input type="range">`
- `<input type="file">`
- `<select>` 、`<option>` 、`<progress>`、`<datalist>`
- `<progress>` 和 `<meter>`
- `<input type="number">` 调整数字大小的按钮, date 控件内部的组件，他们的样式不能通过 `appearance: none;` 被移除。
- `<input type="color">` 只能通过 CSS 移除此控件的 `border` 和 `padding` 属性。
- `<input type="range">` 你只能修改滑块控件的轨道样式，无法修改拖拽按钮的样式。
- `<input type="file">` 文件控件的按钮的样式不能被修改。你可以隐藏此按钮，通过相关联的 `<label>` 标签激活此按钮。比如：

  ```css
  input[type='file'] {
    width: 0;
    height: 0;
    padding: 0;
    opacity: 0;
  }

  label[for='file'] {
    display: block;
    box-shadow: 1px 1px 3px #ccc;
    background: linear-gradient(to bottom, #eee, #ccc);
    border: 1px solid rbg(169, 169, 169);
    border-radius: 5px;
    text-align: center;
    line-height: 1.5;
  }
  ```

对于修改上面提到的控件样式，我们没有好的解决办法，但可以做一些基础的修改。比如添加下面的 CSS 重置规则：

```css
button,
label,
input,
select,
progress,
meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type='color'],
input[type='datetime-local'],
input[type='text'],
select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

## UI 伪类

TODO

## 自定义表单控件

TODO

## 第三方库

### 框架

- https://github.com/draganbabic/uni-form
- [Formalize](https://formalize.me/)

### 处理 HTML 表单控件

- [jQuery UI](https://jqueryui.com/)
- [Bootstrap](https://getbootstrap.com/docs/5.1/forms/overview/) can help normalize your forms.
- [WebShim](https://afarkas.github.io/webshim/demos/) is a huge tool that can help you deal with browser HTML5 support. The web forms part can be really helpful.

## References

**[An Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)**

**[7 Basic Best Practices for Buttons](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php)**

**[Pagination in Web Forms | Evaluating the Effectiveness of Web Forms](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)**

**[Web forms — Working with user data](https://developer.mozilla.org/en-US/docs/Learn/Forms)**

[https://uxdesign.smashingmagazine.com/category/forms](https://uxdesign.smashingmagazine.com/category/forms)
