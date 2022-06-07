---
title: HTML Table
mySlug: table
tags:
  - HTML
  - CSS
created: 2022-06-07
description: 表格美化
---

## 什么是表格

表格是由行和列组成的结构化的数据集（表格数据）。

> CSS 将表模型定义为“以行为主（row primacy）”。换句话说，这个模型假设创作者创建的标记语言会显示声明行，而列是从单元格行的布局推导出来的。 —— 《CSS 权威指南》

## 不使用表格布局的原因

1. 表格布局减少了视觉受损的用户可访问性
2. 表格会产生很多标签，不利于编写、维护、调试
3. 表格不能自动响应

   当你使用正确的布局容器（比如 header，section，article 或 div），它们的默认宽度是父元素的 100%。而表格的默认大小是根据其内容而定的。

## table 元素

- `td` 最小单位的内容 （td 代表 table data）
- `th` 标题行 （th 代表 table head）**默认样式，加粗和居中**。
- `tr` 表格的行 （tr 代表 table row）
- `col` 表格列元素
- `caption` 为表格增加一个标题，可使用 `caption-side` 规定标题在表格中的位置，可选的值有：`top`、`bottom`。

  ```css
  caption {
    caption-side: top;
  }
  ```

## table 属性

- `scope` 这个属性应用于 `th` 元素，允许每个标题与相同行或列中的所有数据相关联，可提高可访问性。屏幕阅读设备能一次读出一列或一行的数据。此属性有`row`、`col`、 `colgroup` 、`rowgroup` 四个可选的属性。
- `colspan` 合并列单元格，值为数字
- `rowspan` 合并行单元格，值为数字

## CSS 属性

在美化表格时，常用到的 CSS 规则。

- `letter-spacing`
- `white-space`
- `text-overflow`
- `overflow`
- `padding`
- `position: sticky;`

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
  border-collapse: collapse;
}

td {
  overflow: hidden;
  text-overflow: ellipais;
  white-space: nowrap;
}
```

## 表格美化技巧

- `table-layout: fixed;` - 计算表格宽度的算法为**固定**，
  当表格首行下载和分析完毕后，整个表格的宽度就会被确定。与自动宽度算法相比，这种方法可以加快渲染速度。

  表格的最终宽度，取表格的宽度（需要显示设置）与列宽、单元格间隔和边框共同组成的宽度之间的最大值。

  每列的宽度由第一行单元格的宽度或者 `col` 元素的宽度决定，第一行之后的单元格不会影响表格列宽。

  下面表示 3\*3 表格，其最终宽度是：`600px + 单元格间隔 + 边框宽度`，`table` 元素的宽度不会起作用。

  ```css
  table {
    // 无效宽度
    width: 400px;
  }

  th {
    width: 200px;
  }
  ```

- `border-collapse: collapse;` - 合并表格元素边框
- `thead`,`tbody`,`tfoot` - 使表格更具逻辑
- `text-align` - 对齐 `th` 、`td` 元素内容。

## 例子：固定表格表头和第一列

<style>
  table {
    border-collapse: collapse;
    letter-spacing: 1px;
    font-size: 2rem;
  }

  tbody {
    font-size: 90%;
    font-style: italic;
  }

  th,
  td {
    empty-cells: hide;
    padding: 5px;
  }

  tr:nth-child(even) td,
  tr:nth-child(even) th {
    background-color: rgb(250, 250, 250);
  }

  tr:nth-child(odd) td,
  tr:nth-child(odd) th {
    background-color: rgb(245, 245, 245);
  }

  tfoot {
    font-weight: bold;
  }

  caption {
    padding: 2rem 0;
    caption-side: bottom;
    text-align: left;
    font-style: italic;
    color: #666;
  }

  .table-wrapper {
    margin-bottom: 2rem;
    height: 250px;
    overflow: scroll;
  }

  .table {
    width: 900px;
    table-layout: fixed;
    margin: 0 auto;
  }

  .table--first caption {
    caption-side: top;
  }

  .table thead tr {
    background-color: rgb(250, 250, 250);
    position: sticky;
    top: 0;
    z-index: 3;
  }

  .table thead th:nth-child(1),
  .table thead th:nth-child(2),
  .table thead th:nth-child(4) {
    width: 200px;
  }

  .table thead th:nth-child(3),
  .table thead th:nth-child(5) {
    width: 100px;
  }

  .table--first thead th:first-child,
  .table--first tbody th {
    position: sticky;
    left: 0;
    z-index: 2;
  }
</style>

<div class="table-wrapper table-wrapper--first">
  <table class="table table--first">
    <caption>How I chose to spend my money</caption>
    <thead>
      <tr>
        <th scope="col">Purchase</th>
        <th scope="col">Location</th>
        <th scope="col">Date</th>
        <th scope="col">Evaluation</th>
        <th scope="col">Cost (€)</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td class="align-center" colspan="4">SUM</td>
        <td>118</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <th scope="row">Haircut</th>
        <td>Hairdresser</td>
        <td>12/09</td>
        <td>Great idea</td>
        <td>30</td>
      </tr>
      <tr>
        <th scope="row">Lasagna</th>
        <td>Restaurant</td>
        <td>12/09</td>
        <td>Regrets</td>
        <td>18</td>
      </tr>
      <tr>
        <th scope="row">Shoes</th>
        <td>Shoeshop</td>
        <td>13/09</td>
        <td>Big regrets</td>
        <td>65</td>
      </tr>
      <tr>
        <th scope="row">Toothpaste</th>
        <td>Supermarket</td>
        <td>13/09</td>
        <td>Good</td>
        <td>5</td>
      </tr>
      <tr>
        <th scope="row">Toothpaste</th>
        <td>Supermarket</td>
        <td>13/09</td>
        <td>Good</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
</div>

```css
table {
  border-collapse: collapse;
  letter-spacing: 1px;
  font-size: 2rem;
}

tbody {
  font-size: 90%;
  font-style: italic;
}

th,
td {
  empty-cells: hide;
  padding: 5px;
}

tr:nth-child(even) td,
tr:nth-child(even) th {
  background-color: rgb(250, 250, 250);
}

tr:nth-child(odd) td,
tr:nth-child(odd) th {
  background-color: rgb(245, 245, 245);
}

tfoot {
  font-weight: bold;
}

caption {
  padding: 2rem 0;
  caption-side: bottom;
  text-align: left;
  font-style: italic;
  color: #666;
}

.table-wrapper {
  width: 80%;
  overflow: scroll;
}

.table-wrapper--first {
  width: 500px;
  height: 150px;
  margin-bottom: 2rem;
}

.table {
  width: 100%;
  table-layout: fixed;
  margin: 0 auto;
}

.table--first caption {
  caption-side: top;
}

.table thead tr {
  background-color: rgb(250, 250, 250);
  position: sticky;
  top: 0;
  z-index: 3;
}

.table thead th:nth-child(1),
.table thead th:nth-child(2),
.table thead th:nth-child(4) {
  width: 200px;
}

.table thead th:nth-child(3),
.table thead th:nth-child(5) {
  width: 100px;
}

.table--first thead th:first-child,
.table--first tbody th {
  position: sticky;
  left: 0;
  z-index: 2;
}
```

```html
<div class="table-wrapper table-wrapper--first">
  <table class="table table--first">
    <caption>
      How I chose to spend my money
    </caption>
    <thead>
      <tr>
        <th scope="col">Purchase</th>
        <th scope="col">Location</th>
        <th scope="col">Date</th>
        <th scope="col">Evaluation</th>
        <th scope="col">Cost (€)</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td class="align-center" colspan="4">SUM</td>
        <td>118</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <th scope="row">Haircut</th>
        <td>Hairdresser</td>
        <td>12/09</td>
        <td>Great idea</td>
        <td>30</td>
      </tr>
      <tr>
        <th scope="row">Lasagna</th>
        <td>Restaurant</td>
        <td>12/09</td>
        <td>Regrets</td>
        <td>18</td>
      </tr>
      <tr>
        <th scope="row">Shoes</th>
        <td>Shoeshop</td>
        <td>13/09</td>
        <td>Big regrets</td>
        <td>65</td>
      </tr>
      <tr>
        <th scope="row">Toothpaste</th>
        <td>Supermarket</td>
        <td>13/09</td>
        <td>Good</td>
        <td>5</td>
      </tr>
      <tr>
        <th scope="row">Toothpaste</th>
        <td>Supermarket</td>
        <td>13/09</td>
        <td>Good</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
</div>
```
