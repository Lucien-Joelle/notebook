## 1 什么是CSS

使用 CSS，您可以精确控制 HTML 元素在浏览器中的外观，以您喜欢的任何设计和布局向用户展示您的文档。

> 美化html

* 文档通常是指使用标记语言结构化的文本文件，最常见的是 HTML（这些被称为 HTML 文档）。
* 向用户展示文档意味着将其转换为受众可用的形式。

CSS用来提升视觉效果。其中包括：

* 文本样式，例如，更改标题和链接的颜色和大小。
* 创建布局，例如，将单列文本转换为多列布局。
* 特效，例如动画。

### 1.1 CSS语法基础

CSS 是一种基于规则的语言——可以通过指定应用于网页上特定元素或元素组的样式组来定义规则。

例如，可以决定将页面上的主要标题样式设置为大的红色文本：

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

在这个例子中，我们正在样式化一级标题。花括号包含属性和值

CSS有很多这样的规则，我们需要一个接一个编写

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

### 1.2 CSS是如何应用到HTML上的

浏览器首先接收包含网页内容的 HTML 文档，并将其转换为 **DOM** 树。

然后将CSS规则应用于DOM树，生成渲染树，该渲染树被绘制到浏览器窗口中。

例如：

```html
<h1>CSS is great</h1>

<p>You can style text.</p>

<p>And create layouts and special effects.</p>
```

然后使用CSS进行渲染

```CSS
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

期中`h1`模块将所有一级标题进行渲染，`p`模块将所有正文部分进行渲染。



## 2 开始CSS

我们最想做的就是让 HTML 文档能够遵守我们给它的 CSS 规则。其实有三种方式可以实现，而目前我们更倾向于利用最普遍且有用的方式——在文档的开头链接 CSS。

我们需要在与HTML相同的文件目录下创建`.css`文件

为了把他们链接起来，我们可以在`head`模块中添加以下代码。

```html
<link rel="stylesheet" href="styles.css" />
```

在`link`语句块里面，我们用属性 `rel`，让浏览器知道有 CSS 文档存在（所以需要遵守 CSS 样式的规定），并利用属性 `href` 指定，寻找 CSS 文件的位置。

### 2.1 格式化HTML元素

我们可以用这个来设置颜色

```css
p {
  color: green;
}
```

同时也可以一次设置多个模块

```css
p,
li {
  color: green;
}
```

### 2.2 改变元素的默认行为

如果你看一个元素不顺眼，比如无序列表的那个点，我们大可以把他删掉

```css
li {
  list-style-type: none;
}
```

### 2.3 使用类名

如果我们像渲染某类特殊元素，我们可以个他家一个`class`属性

```html
<ul>
  <li>项目一</li>
  <li class="special">项目二</li>
  <li>项目 <em>三</em></li>
</ul>
```

这样我们就可以用`.special`来选择特定的模块

```css
.special {
  color: orange;
  font-weight: bold;
}
```

有的时候，HTML元素会和选择器类名一起出现

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

这个意思是说，“选中每个 `special` 类的 `li` 元素”。如果还有别的，再填上去就是了

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

### 2.4 根据元素在文档中的位置确定样式

比如我们现在有两个`<em>`元素，一个在段落中，一个在列表中，我们班像选择列表中的，加一个空格就可以了

```CSS
li em {
  color: rebeccapurple;
}
```

还有一种选择器：

```css
h1 + p {
  font-size: 200%;
}
```

`h1 + p`：这个选择器表示选择紧跟在 `<h1>` 元素后的第一个 `<p>` 元素（即相邻兄弟元素）。

> 只有当 `<p>` 是紧跟在 `<h1>` 元素之后时，才会被选中并应用样式。如果 `<p>` 元素在其他元素之后，或者中间有其他元素，则不会被选中。

### 2.5 根据状态确定样式

举个例子就是我们的链接标签。根据是否是未访问的、访问过的、被鼠标悬停的、被键盘定位的，亦或是正在被点击当中的状态，这个标签有着不同的状态。

比如，以下代码实现：没有被访问的链接颜色变为粉色、访问过的链接变为绿色。

```CSS
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

我们还可以改变链接被鼠标悬停的时候的样式，例如移除下划线，下面的代码就实现了这个功能。

```css
a:hover {
  text-decoration: none;
}
```

这样就可以让超链接更加鲜明了

### 2.6 同时使用多种

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

这就是，跟在一级标题后面的正文，然后带有`class`属性的，进行选择。



## 3 CSS选择器

### 3.1 选择器列表

我们可以把所有的同一个属性的合在一起

```css
h1, .special {
  color: blue;
}
```

或者另起一行

```css
h1,
.special {
  color: blue;
}
```

**但是注意**，组合起来的如果一个无效的话，另外一个也会无效的

### 3.2 选择器种类

#### 1. **类型选择器 (Type Selector)**

类型选择器选择所有特定类型的 HTML 元素。例如，`h1` 选择器会选择页面中的所有 `<h1>` 元素。

```css
h1 {
  color: blue;
}
```

- **作用**：将所有 `<h1>` 元素的文本颜色设置为蓝色。

#### 2. **类选择器 (Class Selector)**

类选择器用于选择具有特定 `class` 属性的元素。类选择器以点号（`.`）开头。

```css
.box {
  background-color: yellow;
}
```

- **作用**：将所有 class 为 `box` 的元素背景色设置为黄色。类选择器可以应用到多个元素上。

#### 3. **ID 选择器 (ID Selector)**

ID 选择器用于选择具有特定 `id` 属性的元素。ID 选择器以井号（`#`）开头。

```css
#unique {
  font-size: 20px;
}
```

- **作用**：将 `id` 为 `unique` 的元素的字体大小设置为 20px。ID 选择器应该在页面中唯一，确保每个 ID 只用于一个元素。

#### 4. **标签属性选择器 (Attribute Selector)**

标签属性选择器根据元素的属性值来选择元素。它有多种形式，以下是常见的几种：

- **选择具有特定属性的元素**：
   例如，`a[title]` 选择所有具有 `title` 属性的 `<a>` 元素。

  ```css
  a[title] {
    color: red;
  }
  ```

  - **作用**：将所有具有 `title` 属性的 `<a>` 元素的文字颜色设置为红色。

- **选择具有特定属性值的元素**：
   例如，`a[href="https://example.com"]` 选择所有 `href` 属性值为 `https://example.com` 的 `<a>` 元素。

  ```css
  a[href="https://example.com"] {
    font-weight: bold;
  }
  ```

  - **作用**：将所有 `href` 属性值为 `https://example.com` 的链接文本加粗。

#### 5. **伪类与伪元素 (Pseudo-classes and Pseudo-elements)**

伪类和伪元素选择器是对元素状态或某部分的特殊选择。

- **伪类**：用来选择处于某种状态的元素，例如 `:hover` 伪类会在鼠标悬停到元素上时触发。

  ```css
  a:hover {
    color: green;
  }
  ```

  - **作用**：当鼠标悬停在 `<a>` 元素上时，文本颜色变为绿色。

- **伪元素**：用来选择元素的某部分，而不仅仅是整个元素。例如，`::first-line` 伪元素选择一个段落的第一行文本。

  ```css
  p::first-line {
    font-weight: bold;
  }
  ```

  - **作用**：将 `<p>` 元素的第一行文本加粗。

#### 6. **组合选择器 (Combinator Selectors)**

组合选择器通过运算符将多个选择器结合起来，进行更复杂的选择。

- **子选择器（>）**：选择指定元素的直接子元素。

  ```css
  article > p {
    margin-top: 20px;
  }
  ```

  - **作用**：将所有直接位于 `<article>` 元素下的 `<p>` 元素的上边距设置为 20px。注意，这里只选择 `<article>` 的直接子元素，而不是所有嵌套的 `<p>` 元素。



## 4 属性选择器

### 4.1 Presence and value selectors

#### 1. **`[attr]` 选择器**

这个选择器会选择所有具有某个属性的元素，而不管该属性的值是什么。

```css
a[title] {
  color: red;
}
```

**作用**：选择所有具有 `title` 属性的 `<a>` 元素，并将它们的文字颜色设置为红色。这里不关心 `title` 属性的值，只关心是否存在这个属性。

#### 2. **`[attr=value]` 选择器**

这个选择器选择那些具有指定属性并且该属性的值正好为某个特定值的元素。

```css
a[href="https://example.com"] {
  color: blue;
}
```

**作用**：选择所有 `href` 属性值为 `https://example.com` 的 `<a>` 元素，并将它们的文字颜色设置为蓝色。

#### 3. **`[attr~=value]` 选择器**

这个选择器用来选择属性值中包含某个特定的**单一词汇**（使用空格分隔）的元素。也就是说，它会匹配属性值中包含某个特定单词的元素，即使这个单词是属性值中的一部分。

```css
p[class~="special"] {
  font-weight: bold;
}
```

**作用**：选择所有 `class` 属性值中包含单词 `special` 的 `<p>` 元素。如果某个元素的 `class` 属性是 `"special"`, `"my special class"`, `"another special item"` 等，都会被选中。

- 例如，以下的元素都会被选中：

  ```css
  <p class="special">内容1</p>
  <p class="my special class">内容2</p>
  <p class="another special item">内容3</p>
  ```

- 但如果 `class` 值为 `“a special”` 或 `“nonspecial”`，则不会匹配。

#### 4. **`[attr|=value]` 选择器**

这个选择器选择那些属性值**以特定值开始，并且后面紧跟着一个==连字符==**的元素。这个选择器通常用于语言属性（如 `lang`）的匹配。

```css
div[lang|="zh"] {
  background-color: yellow;
}
```

**作用**：选择所有 `lang` 属性值以 `zh` 开头的 `<div>` 元素，并将它们的背景色设置为黄色。例如：

- `lang="zh"`（精确匹配）会被选中。
- `lang="zh-cn"`（值以 `zh` 开头）也会被选中。
- `lang="zh-tw"`（值以 `zh` 开头）也会被选中。
- 但 `lang="en"` 或 `lang="zhh"` 不会被选中。

### 4.2 字符串选择匹配器

| 选择器          | 示例                | 描述                                                         |
| :-------------- | :------------------ | :----------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 匹配带有一个名为*attr*的属性的元素，其值开头为*value*子字符串。 |
| `[attr$=value]` | `li[class$="-box"]` | 匹配带有一个名为*attr*的属性的元素，其值结尾为*value*子字符串 |
| `[attr*=value]` | `li[class*="box"]`  | 匹配带有一个名为*attr*的属性的元素，其值的字符串中的任何地方，至少出现了一次*value*子字符串。 |

### 4.3 大小写敏感

正常的CSS和HTML是大小写敏感的，但是我们可以让它不敏感：在中括号结束前加一个`]`

```CSS
li[classs="a" i]
```

这样就也可以匹配`A`





## 5 伪类和伪元素

>伪类是选择器的一种，它用于选择处于特定状态的元素，比如当它们是这一类型的第一个元素时，或者是当鼠标指针悬浮在元素上面的时候。它们表现得会像是你向你的文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。

>伪类就是开头为冒号的关键字。例如，`:hover` 就是一个伪类。

### 5.1 简单的伪类

```css
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}
```

这样我们就选择了article中的第一段。这个还可以用在无序列表中等

此外还有`last-child`，就是最后一个

### 5.2 用户行为类伪类

> 动态伪类

- `:hover`——上面提到过，只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
- `:focus`——只会在用户使用键盘控制，选定元素的时候激活。

```css
a:link,                         //原来的
a:visited {                     //访问过的
  color: rebeccapurple;
  font-weight: bold;              
}

a:hover {                       //鼠标悬浮
  color: hotpink;
}
```

### 5.3 伪元素

伪元素开头为双冒号 `::`。比如，`::before` 就是一个伪元素的示例。

>`::first-line`伪元素选择器会值得信赖地做到这件事——即使单词/字符的数目改变，它也只会选中第一行。
>
>```css
>article p::first-line {
>  font-size: 120%;
>  font-weight: bold;
>}
>```
>
>这个会把所有article中段落的第一行执行操作

### 5.4 伪类和伪元素结合

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

### 5.5 生成带有::before 和::after 的内容

有一组特别的伪元素，可以使用 CSS 将内容插入到你的文档中。

```html
<p class="box">我的 HTML 页面的盒子中的内容。</p>
```

```css
.box::before {
  content: "这应该显示在其他内容之前。";
}
```

这样就插入到html的内容之前了

但是我们不推荐这么插入文本，因为浏览器不同，可能这些内容是不可见的，所以我们可以加入一些图标什么的



## 6 关系选择器

### 6.1 后代选择器

**后代选择器** 是用来选择某个元素的所有后代元素的 CSS 选择器。它使用一个 **空格** 来分隔选择器（比如 `body article p`）。这种选择器的意思是：选择一个元素，该元素是另一个元素的后代，后代元素的==层级可以是多层的==（即祖先、父元素、子元素等）。

```
父元素 后代元素
```

- **父元素** 是你选择的一个父级元素，后代元素是位于这个父元素内的任何子元素（包括子孙元素，不限层级）。
- 使用一个空格 (`" "`) 作为分隔符来组合选择器。

```html
<div class="box">
  <p>Text in .box</p>
</div>
<p>Text not in .box</p>
```

```css
.box p {
  color: red;
}
```

###### 解释：

- `.box p` 是一个后代选择器。它选择的是所有在 **`.box`** 类元素内的 `<p>` 元素。
- **`.box p`** 的意思是：选择所有在 `.box` 元素内部的 `<p>` 标签，且层级不限，只要 `<p>` 标签是 `.box` 元素的**后代**（无论是直接子元素，还是孙子、曾孙子元素等）。

### 6.2 子代选择器

**子代选择器**（Child Selector）是 CSS 中用于选择某个元素的**直接子元素**的选择器。与**后代选择器**不同，子代选择器只会匹配那些直接嵌套在父元素内部的子元素，不包括孙子元素、曾孙元素等。

```css
ul > li {
  border-top: 5px solid red;
}
```

### 6.3 邻接兄弟

```css
h1 + p {
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

选择紧跟着一级标题的段落。前文已有，这里不再赘述

### 6.3 通用兄弟

如果你想选中一个元素的兄弟元素，即使它们不直接相邻，你还是可以使用通用兄弟关系选择器（`~`）。要选中所有的`<p>`元素后*任何地方*的`<img>`元素，我们会这样做：

```css
p ~ img
```



## 7 盒模型

![image-20250505212801884](../../assets/图片/image-20250505212801884.png)

- **Margin(外边距)** - 清除边框外的区域，外边距是透明的。
- **Border(边框)** - 围绕在内边距和内容外的边框。
- **Padding(内边距)** - 清除内容周围的区域，内边距是透明的。
- **Content(内容)** - 盒子的内容，显示文本和图像。

### 7.1 CSS标注盒模型

假设一个盒子的CSS如下：

```css
.box {
  width: 350px;
  height: 150px;          //这个是content的长和宽
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

### 7.2 替代盒模型

在标准盒模型中，`width` 和 `height` 仅控制**内容区域**的大小。**内边距（padding）**和**边框（border）**会在总尺寸计算时额外加上，从而使元素的总尺寸大于你设置的 `width` 和 `height`。

在替代盒模型中，`width` 和 `height` 是元素的**总宽度**和**总高度**，包括内容区域、内边距和边框的尺寸。因此，设置 `width` 和 `height` 时，内边距和边框的大小会自动包含在内，而不会被加到总尺寸中。

```css
.box {
  width: 350px;
  inline-size: 350px;
  height: 150px;
  block-size: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

### 7.3 外边距

外边距是盒子周围一圈看不到的空间。它会把其他元素退推离盒子。外边距属性值可以为正也可以为负。在盒子一侧设置负值会导致盒子和页面上的其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

我们可以使用 `margin`属性一次性控制一个元素的所有外边距，或者每边单独使用等价的普通属性控制：

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

类似的，内边距也有这些属性的。

### 7.4 边框

相比之下，边框的属性更多一些

欲分别设置每边的属性，可以使用：

- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

欲设置所有边的宽度、样式或颜色，可以使用：

- `border-width`
- `border-style`
- `border-color`

欲设置单条边的宽度、样式或颜色，可以使用最细粒度的普通属性之一：

- `border-top-width`

### 7.5 行内盒模型

- 行内盒模型用于**行内元素（如 `<span>`、`<a>`）**的布局。
- 与块级盒模型不同，**行内盒不会打断一行**，多个行内盒会在同一行排列，直到排不下才换行。

```css
span {
  margin: 20px;
  padding: 20px;
  width: 80px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid blue;
  display: inline-block;
}
```



## 8 层叠、优先级与继承

### 8.1 层叠

样式表**层叠**——简单的说，就是 CSS 规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

下面的示例中，我们有两个关于 `<h1>` 的规则。`<h1>` 最后显示蓝色——这两个规则来自同一个源，且具有相同的元素选择器，有相同的优先级，所以顺序在最后的生效。

```css
<h1>这是我的标题。</h1>
```

```css
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

### 8.2 优先级

- 一个元素选择器不是很具体，则会选择页面上该类型的所有元素，所以它的优先级就会低一些。
- 一个类选择器稍微具体点，则会选择该页面中有特定 `class` 属性值的元素，所以它的优先级就要高一点。

下面我们再来介绍两个适用于 `<h1>` 的规则。下面的 `<h1>` 最后会显示红色——类选择器 `main-heading` 有更高的优先级，因此就会被应用——即使元素选择器顺序在它后面。

```html
<h1 class="main-heading">这是我的标题。</h1>
```

```css
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

### 8.3 继承

CSS 的继承是指：**某些 CSS 属性会自动从父元素“传递”到子元素**，子元素会默认使用父元素设置的这些属性值。

就像现实中，孩子可能会“继承”父母的某些特征，网页中的元素也可以“继承”一些样式。

主要是跟**文字和排版相关**的属性，比如：

- `color`（文字颜色）
- `font-size`（字体大小）
- `font-family`（字体类型）
- `line-height`（行高）
- `letter-spacing`（字间距）
- `text-align`（文字对齐方式）
- `visibility`（可见性）

大多数 **布局和盒模型相关的属性不会继承**，比如：

- `margin` / `padding` / `border`
- `width` / `height`
- `background`
- `display`
- `position`
- `box-shadow`

这些不继承是为了避免子元素样式混乱。

### 8.4 控制继承

| 属性值         | 作用                                                         |
| -------------- | ------------------------------------------------------------ |
| `inherit`      | 明确让当前元素**继承**父元素的属性值（即使该属性默认不继承也会继承）。 |
| `initial`      | 重置为**CSS规范中的默认初始值**（不是浏览器样式，是标准定义的默认值）。 |
| `revert`       | 还原为**浏览器默认样式**（也就是 user agent stylesheet 的值），而不是 CSS 规范里的“初始值”。常用于覆盖用户或作者样式。 |
| `revert-layer` | 恢复为在**上一个样式层（layer）中定义的值**，用于 cascade layers（需要 `@layer` 支持，较高级）。 |
| `unset`        | 取决于属性是否继承：如果这个属性是可继承的，就相当于 `inherit`；如果不可继承，就相当于 `initial`。是一个通用“取消设定”的方式。 |

例如：

```html
<ul>
  <li>默认<a href="#">链接</a>颜色</li>
  <li class="my-class-1">继承<a href="#">链接</a>颜色</li>
  <li class="my-class-2">重置<a href="#">链接</a>颜色</li>
  <li class="my-class-3">取消<a href="#">链接</a>颜色的设置</li>
</ul>
```

```css
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```

### 8.5 重置所有属性值

CSS 的简写属性 `all` 可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个（`inherit`、`initial`、`unset` 或 `revert`）。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。

就是把什么color什么的全部重置

```css
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}
```



## 9 CSS值和单位

### 9.1 数值 长度和百分比

以下全部归类为数值：

| 数据类型       | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| `<integer>`    | `<integer>` 是一个整数，比如 `1024` 或 `-55`。               |
| `<number>`     | `<number>` 表示一个十进制数——它可能有小数部分，也可能没有。例如 `0.255`、`128` 或 `-1.2`。 |
| `<dimension>`  | `<dimension>` 是一个 `<number>`。它有一个附加的单位，例如 `45deg`、`5s` 或 `10px`。`<dimension>` 是一个伞形类别，包括 `<length>`、`<angle>`、`<time>` 和 `<resolution>` 类型。 |
| `<percentage>` | `<percentage>` 表示一些其他值的一部分，例如 `50%`。百分比值总是相对于另一个量。例如，一个元素的长度相对于其父元素的长度。 |

以下都是**绝对**长度单位——它们与其他任何东西都没有关系，通常被认为总是相同的大小。

| 单位 | 名称         | 等价换算                |
| :--- | :----------- | :---------------------- |
| `cm` | 厘米         | 1cm = 37.8px            |
| `mm` | 毫米         | 1mm = 3.78px            |
| `Q`  | 四分之一毫米 | 1Q = 0.945px = 0.25mm   |
| `in` | 英寸         | 1in = 96px = 2.54cm     |
| `pc` | 派卡         | 1pc = 16px ≈ 0.4233cm   |
| `pt` | 磅           | 1pt = 4/3 px ≈ 0.3527mm |
| `px` | 像素         | 1px ≈ 0.2646mm          |

这些单位大多在用于印刷而非屏幕输出时更有用。例如，我们通常不在屏幕上使用 `cm`（厘米）。你唯一应该常用的值是 `px`（像素） 。

**相对长度单位**

相对长度单位是相对于其他某些东西的。例如：

- `em` 相对于本元素的字体大小，或者在用于 `font-size`时相对于父元素的字体大小。`rem` 相对于根元素的字体大小。
- `vh` 和 `vw` 分别相对于视口的高度和宽度。

🔸 举个例子：

```css
html {
  font-size: 16px;
}

p {
  font-size: 1.5em; /* 1.5 * 16px = 24px */
}

.container {
  font-size: 2em;   /* 2 * 16px = 32px */
}
.container p {
  font-size: 1.5em; /* 1.5 * 32px = 48px */
}
```

> 所以：`em` 是“级联放大”的，容易产生 **递归放大问题**，在布局复杂时可能不稳定。

------

==rem机制：==

- 始终是 **相对于根元素 `<html>` 的字体大小**。
- 不受嵌套层级影响，**计算更稳定、更可控**。

```css
html {
  font-size: 16px;
}

p {
  font-size: 1.5rem; /* 始终是 1.5 * 16px = 24px */
}

.container {
  font-size: 2rem; /* 始终是 2 * 16px = 32px */
}
.container p {
  font-size: 1.5rem; /* 依然是 24px，不会乘父级 */
}
```

### 9.2 行高单位

####  `lh`：基于当前元素的 **计算行高**

- `1lh` = 当前元素的实际 `line-height` 值（**不是 `font-size`**）。
- 可用于设置高度、间距等，与文字行高保持一致。

```css
p {
  font-size: 16px;
  line-height: 1.5; /* 1.5 * 16px = 24px */
  margin-bottom: 1lh; /* 24px */
}
```

👉 实际效果：`margin-bottom: 1lh` 会等于 `24px`，即该段落的实际行高。

------

#### `rlh`：基于根元素的 **计算行高**

- `1rlh` = 根元素的 `line-height`（不是字体大小）。
- 保持整个页面布局在统一的基准线上非常有用。

```css
html {
  font-size: 16px;
  line-height: 1.5; /* 24px */
}

h1 {
  margin-bottom: 2rlh; /* 48px */
}
```

### 9.3 百分比

百分比是相对父元素来计算的

### 9.4 数字

补充一下`opacity`控制元素的不透明度，从0（完全透明）到1（不透明）

### 9.5 颜色

现代计算机支持的标准颜色系统是 24 位色，它通过红、绿、蓝三个通道的不同组合来显示约 1670 万种不同的颜色，每个通道有 256 种不同的值（256 x 256 x 256 = 16,777,216）。

#### 9.5.1 颜色关键字

> 颜色关键字数量有限，一般不会在产生环境的网站中使用

#### 9.5.2 16进制RGB值

**6位格式：`#RRGGBB`**

- `RR`：代表红色的强度，用两位16进制数表示（范围从 `00` 到 `FF`）。
- `GG`：代表绿色的强度，用两位16进制数表示（范围从 `00` 到 `FF`）。
- `BB`：代表蓝色的强度，用两位16进制数表示（范围从 `00` 到 `FF`）。
- 每一对16进制数可以表示从0（无该颜色成分）到255（该颜色成分最强）的值。例如，`#FF0000` 表示纯红色（红色为FF即255，绿色为00，蓝色为00）。

**3位格式：`#RGB`**

- 这是6位格式的缩写形式。当每对16进制数字相同时（例如，`RR` 中的两个R相同，`GG` 中的两个G相同，`BB` 中的两个B相同），可以将其缩写。
- 例如，`#F00` 等同于 `#FF0000`（纯红色），`#0F0` 等同于 `#00FF00`（纯绿色），`#ABC` 等同于 `#AABBCC`。

比如：

```css
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

#### 9.5.3 RGB值

基本形式就是`rgb()`

```css
.three {
  background-color: rgb(18 138 125);
}
```

#### 9.5.4 HSL

- **色相（Hue）**
- **饱和度（Saturation）**：颜色的饱和度是多少？它接受一个 0–100% 的值，其中 0 表示无颜色（会显示为灰色），100% 表示完全饱和的颜色。
- **亮度（Lightness）**：颜色的亮度或明度是多少？它接受一个 0–100% 的值，其中 0 表示无亮度（会显示为完全黑色），100% 表示完全亮度（会显示为完全白色）。

```css
.one {
  background-color: hsl(188 97% 28%);
}
```

### 9.6 图像

```css
.image {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 100%)
  );
}
```



### 9.7 位置

`<position>`值类型表示一组二维坐标，用于定位背景图像等元素。它可以接受诸如 `top`、`left`、`bottom`、`right` 和 `center` 等关键字，将元素与二维盒子的特定边界对齐，同时还可以使用长度值来表示从盒子顶部和左侧边缘的偏移量。
