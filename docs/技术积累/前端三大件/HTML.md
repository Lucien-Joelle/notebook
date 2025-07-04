## 序章 HTML

>HTML 用于指定你的网页内容应被识别为段落、列表、标题、链接、图像、多媒体播放器、表单或是其他可用元素之一，甚至是你定义的新元素。

这里我们将学习：**HTML简介，多媒体和嵌入，HTML表格**

## 1 开始学习HTML

### 1.1 什么是HTML

HTML（HyperText Markup Language，超文本标记语言）是一种用来告知浏览器如何组织页面的*标记语言*。HTML 可复杂、可简单，一切取决于 web 开发者。HTML 由一系列的元素组成，这些元素可以用来包围或*标记*不同部分的内容，使其以某种方式呈现或者工作。两端的标签可以使内容变成超链接，以连接到另一个页面；使字体表现为斜体等。

> 其实md最终会渲染成html

我们使用标签对文本进行标记，注意，html标签并不区分大小写

>输入标签时既可以使用大写字母也可以使用小写字母。例如，标签`<title>`可以写作 `<title>`、`<TITLE>`、`<Title>`、`<TiTlE>` 等，也都可以正常工作。不过，从一致性、可读性来说，最好仅使用小写字母。

### 1.2 html组成

- **开始标签**（Opening tag）：包含元素的名称（本例为 *p*），被左、右角括号所包围。开头标签标志着元素开始或开始生效的地方。在这个示例中，它在段落文本的开始之前。
- **内容**（Content）：元素的内容，本例中就是段落的文本。
- **结束标签**（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这标志着该元素的结束。没有包含关闭标签是一个常见的初学者错误，它可能会产生奇特的结果。

```html
<p>
    I love learning HTML
</p>
```

我们可以使用**嵌套元素**，即一个标签中间还可以有另一组标签

### 1.3 块级元素和内联元素

- 块级元素在页面中以块的形式展现。一个块级元素会出现在新的一行，然后块级元素可以嵌套在块级元素中，但不会嵌套在内联元素中。通常是标题，段落，列表，导航菜单等。
- 内联元素通常出现在块级元素中并环绕文档内容的一小部分，而不是一整个段落或者一组内容。内联元素不会导致文本换行。它通常与文本一起使用，比如加粗、下划线等。

### 1.4 空元素

并不是所有都有开始和结束标签。比如图片`<img />`

### 1.5 属性

#### 1.5.1 属性基本须知

属性包含元素的额外信息，这些信息不会出现在实际的内容中。这个 **`class`** 属性是一个识别名称，以后为元素设置样式信息时更加方便。

```html
<p class="editor-note">
    I love learning HTML
</p>
```

基本组成：

- 一个空格，它在属性和元素名称之间。如果一个元素具有多个属性，则每个属性之间必须由空格分隔。
- 属性名称，后面跟着一个等于号。
- 一个属性值，由一对`""`引起来。

#### 1.5.2 将元素添加为属性

我们用`<a>`来进行讲解

> `<a>`元素是锚，使被包裹元素成为一个超链接。他可以添加多个属性

- `href`

  这个属性声明超链接的 web 地址。例如 `href="https://www.mozilla.org/"`。

- `title`

  `title` 属性为超链接声明额外的信息，比如你将链接至的那个页面。例如 `title="The Mozilla homepage"`，鼠标放上去会有显示

- `target`

  `target` 属性用于指定链接如何呈现出来。例如，`target="_blank"` 将在新标签页中显示链接。

  > 这个意思就是，点击链接之后在哪里显示。如果是`_blank`的话就是新开一个浏览器窗口，如果没有的话就是在本窗口打开

  eg

  ```html
  <p>
      link to my <a href="https://www.mozilla.org/" title="learning page" target="_blank">favourite website</a>
  </p>
  ```

  <p>
      link to my <a href="https://www.mozilla.org/" title="learning page" target="_blank">favourite website</a>
  </p>

#### 1.5.3 布尔属性

有时候会有没有值的属性，称为布尔属性。它用来禁止输入元素

```HTML
<input type="text" disabled="disabled" />
<input type="text" disabled />
<input type="text" />
```

效果如下：就是前两个不能输入，最后一个可以输入

<P><input type="text" disabled="disabled" />
<input type="text" disabled />
<input type="text" /></P>

!!! warning "注意"
>
> 注意，虽然有单个属性的时候不加双引号也是可以的，但是出现了两个属性的话就会出问题。所以我们还是最好加上双引号

### 1.6 HTML文档构成

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的测试站点</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```

* 记住就行，`<!doctype html>`是最短的有效文档声明
* `<html></html>`: html元素。这个元素包裹了页面中所有的内容，有时被称为根元素。
* `<head></head>`: 这个元素是一个容器，它包含了所有你想包含在 HTML 页面中但==**不在 HTML 页面中显示**==的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述、CSS 样式、字符集声明等等。以后的章节中会学到更多相关的内容。

* `<title></title>`: 这设置了页面的标题，也就是出现在该页面加载的浏览器==标签中的内容==。当页面被加入书签时，页面标题也被用来描述该页面。
* `<body></body>`: 包含了你访问页面时所有显示在页面上的内容，包含文本、图片、视频、游戏、可播放音频轨道等等。

### 1.7 HTML中的空白

以下的代码是等价的：

```html
<p>狗 狗 很 呆 萌。</p>

<p>狗 狗        很
         呆 萌。</p>
```

无论你在 HTML 元素的内容中使用多少空格（包括一个或多个空白字符或换行），当渲染这些代码的时候，HTML 解释器会将连续出现的空白字符减少为==一个==单独的空格符。

我们写自己的HTML时一定要有一定的规律可言。

### 1.7 实体引用

在 HTML 中，字符 `<`、`>`、`"`、`'` 和 `&` 是特殊字符。

我们要使用表示字符的特殊编码，使他们可以使用。每个字符引用以符号 & 开始，以分号（;）结束。

| 原义字符 | 等价字符引用 |
| :------- | :----------- |
| <        | `<`          |
| >        | `>`          |
| "        | `"`          |
| '        | `'`          |
| &        | `&`          |

eg

```html
<p>HTML 中用 <p> 来定义段落元素。</p>
实质上应该写为：
<p>HTML 中用 &lt;p&gt; 来定义段落元素</p>
```

### 1.8 HTML注释

我们用

```html
<!--
	注释
-->
```



## 2 HTML元信息

> 元信息概述：在页面加载完成的时候，HTML 文档中的头部是不会显示在 web 浏览器的。它包含了诸如页面的标题、指向CSS的链接（如果你选择用 CSS 来为 HTML 内容添加样式）、指向自定义网页图标的链接和其他的元数据（描述 HTML 的数据，比如作者和描述文档的重要关键词）等信息。

### 2.1 添加标题

之前已经讲过`<title>`元素，它可以为文档添加标题。但别和 `<h1>` 元素搞混了，`<h1>` 是为 body 添加顶级标题的。有时候 `<h1>` 也叫作网页标题，但是二者并不相同。

### 2.2 元数据：`<meta>`元素

#### 2.2.1 指定字符编码

> 指定文档中的字符编码

```html
<meta charset="utf-8" />
```

这个元素简单的指定了文档的字符编码——在这个文档中被允许使用的字符集。`utf-8` 是一个通用的字符集，它包含了任何人类语言中的大部分的字符，意味着该 web 页面可以显示任意的语言；所以对于你的每一个页面都使用这个设置会是一个好主意！比如说，你的页面可以很好的处理英文和日文：

```HTML
<P>
    完熟芒果
</P>
```

假如你将字符集设置为 `ISO-8859-1`（拉丁字母表的字符集），那么页面将出现乱码。

#### 2.2.2 添加作者和描述

许多 `<meta>` 元素包含了 `name` 和 `content` 属性：

- `name` 指定了 meta 元素的类型；说明该元素包含了什么类型的信息。==注意这不是之前的那个标题了==
- `content` 指定了实际的元数据内容。

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications." />
```

这样在搜索网页的时候就会简单方便的多。

>比如：
>
>```html
><meta
>name="description"
>content="The MDN Web Docs site
>provides information about Open Web technologies
>including HTML, CSS, and APIs for both Web sites and
>progressive web apps." />
>```
>
>![“MDN Web Docs”的搜索结果](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/mdn-search-result.png)
>
>我们可以看到描述。
>
!!! note "注意"
>>
>> 一个网页可以有多个`meta`，但是一个`meta`一般就只有一个`name`和`content`对

### 2.3 其他类型的元数据

可能是专有创作，为某些网站提供特定的信息。



## 3 HTML的基本语法

### 3.1 标题和段落

在 HTML 中，每个段落是通过`<p>`元素进行定义的，比如下面这样：

```html
<p>我是一个段落，千真万确。</p>
```

每个标题都必须被包裹在一个标题元素中：

```html
<h1>我是文章的标题</h1>
```

一共有6 级标题，同md

> 排版什么的同md

### 3.2 强调

* 斜体：`<em>`
* 加粗：`<strong>`

!!! warning "注意"
>
> - **`<b>`**：用于将文本设置为粗体，但不表达任何强调或重要性，纯粹是样式。
> - **`<i>`**：用于将文本设置为斜体，也不表达任何语义，仅用于样式。
> - **`<u>`**：用于将文本添加下划线，也是仅改变样式，不传递语义。
>
> 这些标签通常仅用于样式的展示，适合用于一些需要单纯修改外观的地方。
>
> 相对地，下面这些标签更加符合语义化的 HTML 使用原则：
>
> - **`<strong>`**：表示文本具有“强烈的强调”或重要性，通常用于需要突出显示的部分，例如重要的警告信息。
> - **`<em>`**：表示文本需要被“强调”，通常用斜体显示，但它的语义是表明文本在语境中具有特别的强调意义。
> - **`<mark>`**：表示标记文本，通常用于高亮显示，表明这部分文本在某个特定上下文中是重要的。
> - **`<span>`**：一个通用的内联容器，通常用于没有其他语义元素时，适合用来包裹文本并通过 CSS 或 JavaScript 控制样式。

### 3.3 列表

#### 3.3.1**无序列表**

用`<ul>`包裹

```html
<ul>
  豆浆
  油条
  豆汁
  焦圈
</ul>
```

然后用`<li>`把每一项包裹起来

```html
<ul>
  <li>豆浆</li>
  <li>油条</li>
  <li>豆汁</li>
  <li>焦圈</li>
</ul>
```

#### 3.3.2 **有序列表**

类似的，我们用`<ol>`进行包裹

```html
<ol>
  <li>沿这条路走到头</li>
  <li>右转</li>
  <li>直行穿过第一个十字路口</li>
  <li>在第三个十字路口处左转</li>
  <li>继续走 300 米，学校就在你的右手边</li>
</ol>
```

#### 3.3.3 描述列表

我们用`<dl>`包裹，然后对于每一项用`<dt>`包裹，然后对于这一项的描述我们用`<dd>`包裹。

```html
<dl>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
</dl>
```

浏览器的默认样式会在描述列表的术语及其定义之间产生缩进。

```
内心独白
	戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
语言独白
	戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
旁白
	戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
```

最后可能产生这个效果

#### 3.3.4 单个术语的多个描述

```html
<dl>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
  <dd>
    写作中，指与当前主题相关的一段内容，通常不适于直接置于内容主线中，因此置于附近的其他位置（通常位于主线内容旁边一个文本框内）。
  </dd>
</dl>
```



## 4 文本格式进阶

### 4.1 引用

#### 4.1.1 块引用

比如有一个页面的内容是这样的，我们现在要引用他们

```html
<p>
  <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em
    >HTML 块级引用元素</em
  >）表示所附文本为扩展引用。
</p>
```

我们引用他们的写法是：

```html
<p>这是块引用：</p>
<blockquote cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 元素</strong>（或<em
      >HTML 块级引用元素</em
    >）表示所附文本为扩展引用。
  </p>
</blockquote>
```

就是相当于在前面用`<blockquote>`引用，这里可以加一个属性，就是引用的地址

#### 4.1.2 行内引用

```html
<p>
  引用元素 <code>&lt;q&gt;</code> 是
  <q cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q">
    用于不需要段落分隔的短引用。
  </q>
</p>
```

这个啊就和`blockquote`差不多，就是这个引用的内容不能换行

### 4.2 缩略语

```html
<p>我们使用 <abbr>HTML</abbr> 超文本标记语言来组织网页文档。</p>

<p>
  第 33 届<abbr title="夏季奥林匹克运动会">奥运会</abbr>已于 2024 年 7
  月在法国巴黎举行。
</p>
```

这样“夏季奥林匹克运动会就成了奥运会的缩略语了

### 4.3 标记联系方式

用`<address>`来括起来联系方式，里面其实可以有更多内容

### 4.4 上下标

用`<sup>`括起来上标，用`<sub>`括起来下标

### 4.5 代码块

- `<code>`：用于标记计算机通用代码。
- `<pre>`：用于保留空白字符（通常用于代码块）——如果文本中使用了缩进或多余的空白，浏览器将==忽略==它，你将不会在渲染的页面上看到它。但是，如果你将文本包含在 `<pre></pre>` 标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
- `<var>`：用于标记具体变量名。
- `<kbd>`：用于标记输入电脑的键盘（或其他类型）输入。
- `<samp>`：用于标记计算机程序的输出。

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('噢，噢，噢，别点我了。');
}</code></pre>
```

### 4.6 时间

用`<time>`模块



## 5 创建超链接

### 5.1 链接的解析

我们用`<a>`来包裹超链接，并给他一个基本的`href`属性，来创建一个基本的链接

```html
<p>
  我创建了一个指向
  <a href="https://www.mozilla.org/zh-CN/">Mozilla 主页</a>的链接。
</p>
```

效果如下：

<p>
  我创建了一个指向
  <a href="https://www.mozilla.org/zh-CN/">Mozilla 主页</a>的链接。
</p>

同样的，块级元素同样也可以成为超链接

```html
<a href="https://developer.mozilla.org/zh-CN/">
  <h1>MDN Web 文档</h1>
</a>
<p>自从 2005 年起，就开始记载包括 CSS、HTML、JavaScript 等网络技术。</p>
```

### 5.2 图片链接

```html
<a href="https://developer.mozilla.org/zh-CN/">
  <img src="mdn_logo.svg" alt="MDN Web 文档" />
</a>
```

**解释：**

1. `<a href="https://developer.mozilla.org/zh-CN/">`
    这里的 `<a>` 标签创建了一个超链接，`href` 属性指定了链接的目标地址。当用户点击这个链接时，浏览器会导航到指定的 URL（在此例中为 MDN Web 文档的中文页面）。
2. `<img src="mdn_logo.svg" alt="MDN Web 文档" />`
    `<img>` 标签用于插入图片，`src` 属性指定图片的来源，`alt` 属性提供图片的替代文本，这对于屏幕阅读器和在图片加载失败时非常有用。

### 5.3 使用`title`属性添加额外信息

```html
<p>
  我创建了一个指向
  <a
    href="https://www.mozilla.org/zh-CN/"
    title="了解 Mozilla 使命以及如何参与贡献的最佳站点。">
    Mozilla 主页</a
  >的超链接。
</p>
```

我们用这个title属性添加额外信息，即光标放到上面可以看到的信息

效果：

<p>
  我创建了一个指向
  <a
    href="https://www.mozilla.org/zh-CN/"
    title="了解 Mozilla 使命以及如何参与贡献的最佳站点。">
    Mozilla 主页</a
  >的超链接。
</p>
### 5.4 统一资源定位符（URL）与路径（path）

#### 5.4.1 **URL** (统一资源定位符)

URL 是一种用于指定互联网上资源位置的字符串，它描述了如何定位和获取某个资源。一个完整的 URL 通常由多个部分组成：

**URL 的结构：**

```bash
scheme://domain:port/path?query#fragment
```

- **scheme**（协议）：指定了资源访问使用的协议或方式（如 `http`、`https`、`ftp` 等）。
- **domain**（域名）：指定资源所在服务器的域名或 IP 地址。例如，`www.example.com` 或 `192.168.1.1`。
- **port**（端口号）：通常是可选的，指定了服务器的端口。HTTP 协议通常使用端口 80，HTTPS 使用端口 443。如果省略，浏览器会默认使用标准端口。
- **path**（路径）：指定了服务器上的资源或文件的路径。它通常是服务器文件系统中相对文件的位置，例如 `/index.html`。
- **query**（查询参数）：通常用于传递参数给服务器，它以 `?` 开始，多个参数之间使用 `&` 分隔。例如，`?id=123&name=Tom`。
- **fragment**（片段）：是一个指向文档内部某个特定部分的标识符，通常以 `#` 开头。例如，`#section1`。

#### 示例：

```bash
https://www.example.com:443/path/to/resource?id=123&name=Tom#section2
```

- `https`：协议
- `www.example.com`：域名
- `443`：端口（可选，HTTPS 协议的默认端口）
- `/path/to/resource`：路径
- `?id=123&name=Tom`：查询参数
- `#section2`：片段

#### 5.4.2 **Path**（路径）

**Path** 是 URL 中用于指定服务器上资源的位置的部分，它指向服务器文件系统中的一个具体文件或目录。路径通常跟在域名后面，以 `/` 开头，指明你想要访问的资源。例如，`/images/logo.png` 指定了访问网站服务器上 `images` 目录下的 `logo.png` 文件。

#### 例子：

假设 URL 是：

```bash
https://www.example.com/products/item1.html
```

在这个 URL 中：

- `https://` 是协议
- `www.example.com` 是域名
- `/products/item1.html` 是路径，指向服务器上 `products` 文件夹中的 `item1.html` 页面

==补充概念==

* 绝对URL 就是互联网上的绝对位置
* 相对URL就是相对你的文件的位置

!!! note "注意"
>
> - **指向当前目录**：==就是平级==如果你想在 `index.html`（顶层 `index.html`）中包含一个指向 `contacts.html` 的超链接，你只需要指定想要链接到的文件名。因为它与当前文件是在同一个目录的，所以你应该使用的 URL 是 `contacts.html`：
>
>   ```html
>   <p>
>     要联系某位工作人员，请访问我们的<a href="contacts.html">联系人页面</a>。
>   </p>
>   ```
>
> - **指向子目录**：==就是下一级==如果你想在 `index.html` （顶层 `index.html`）中包含一个指向 `projects/index.html` 的超链接，你需要先进入 `projects` 项目目录，然后通过指定目录的名称，然后是正斜杠，然后是文件的名称指明要链接到的文件 `index.html`。因此你要使用的 URL 是 `projects/index.html`：
>
>   ```html
>   <p>请访问我的<a href="projects/index.html">项目主页</a>。</p>
>   ```
>
> - **指向上级目录**：==就是上一级==如果你想在 `projects/index.html` 中包含一个指向 `pdfs/project-brief.pdf` 的超链接，你必须先返回上级目录，然后再回到 `pdfs` 目录。“返回上一个目录级”使用两个英文点号表示（`..`），因此你应该使用的 URL 是 `../pdfs/project-brief.pdf`：
>
>   ```html
>   <p>点击打开<a href="../pdfs/project-brief.pdf">项目简介</a>。</p>
>   ```

### 5.5 链接到文档内部分

超链接除了可以链接到文档外，也可以链接到 HTML 文档的特定部分（被称为**文档片段**）。要做到这一点，你必须首先给要链接到的元素分配一个`id`]属性。通常情况下，链接到一个特定的标题是有意义的，这看起来就像下面这样：

```html
<h2 id="Mailing_address">邮寄地址</h2>
```

为了链接到那个特定的 `id`，要将它放在 URL 的末尾，并在前面包含井号（`#`），例如：

```
<p>
  要提供意见和建议，请将信件邮寄至
  <a href="contacts.html#Mailing_address">
  我们的地址
  </a>。
</p>
```



## 6 HTML中的图片

### 6.1 基本属性

我们嵌入图片需要两个属性：`src`和`alt`。

我们`src`用于嵌入地址（绝对地址或相对地址）

```html
<img src="images/dinosaur.jpg" alt="恐龙" />
```

```html
<img src="https://www.example.com/images/dinosaur.jpg" alt="恐龙" />
```

然而，不建议使用绝对 URL 进行链接。你需要托管你想要在网站上使用的图像，在比较简单的情况下，通常我们会把网站的图像保存在与 HTML 相同的服务器上。此外，从维护的角度来说，使用相对 URL 比绝对 URL 更有效率（当你将网站迁移到不同的域名时，你不需要更新所有 URL，使其包含新域名）。

!!! danger "危险"
>
> `<img>`没有结束标签

### 6.2 宽度和高度

你可以用 `width`和 `height`属性来指定你的图片的宽度和高度。它们的值是不带单位的整数，以像素为单位表示图像的宽度和高度。

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341" />
```

### 6.3 图像标题

#类似于超链接，你可以通过给图片增加 `title` 属性来提供更多的信息。在我们的例子中，可以这样做：

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
  width="400"
  height="341"
  title="A T-Rex on display in the Manchester University Museum" />
```

这回给我们鼠标悬停提示



## 7 视频和音频内容

现在我们已经可以轻松地为网页添加简单的图像，下一步我们开始为 HTML 文档添加音频和视频播放器。在这篇文章中，我们会使用`<video>`和`<audio>`来完成这件事；然后我们还会了解如何为视频添加标题/字幕。

### 7.1 `<video>`元素

你可以借助`<video>`元素来轻松地嵌入视频。一个简单的例子如下：

```
<video src="rabbit320.webm" controls>
  <p>
    你的浏览器不支持 HTML 视频。可点击<a href="rabbit320.mp4">此链接</a>观看。
  </p>
</video>
```

值得注意的特性有：

- `src`

  和`<img>`中的url差不多，就是视频地址。

- `controls`

  用户应当能够控制视频和音频的播放。你必须使用 `controls` 属性来让视频或音频包含浏览器自带的控制界面。

- `<video>`的段内元素

  这个叫做**后备内容**，当浏览器不支持 `<video>` 元素的时候，就会显示这段内容，借此我们能够对旧的浏览器提供回退。



### 7.2 视频兼容性问题

HTML 中的 **视频兼容问题** 主要来源于不同浏览器对视频格式的支持差异。不同的浏览器和操作系统可能支持不同的视频文件格式，因此需要在网页中提供多个格式的视频，以确保视频可以在各种设备和浏览器上正常播放。

**常见的视频格式**

HTML5 的 `<video>` 标签支持多种视频格式，最常见的几种包括：

- **MP4 (`.mp4`)**：基于 H.264 视频编码和 AAC 音频编码，几乎所有现代浏览器都支持。
- **WebM (`.webm`)**：开放的格式，支持 VP8/VP9 视频编码和 Vorbis/Opus 音频编码，较新的浏览器支持较好。
- **Ogg (`.ogv`)**：较少使用，支持 Theora 视频编码和 Vorbis 音频编码，适用于某些开源浏览器。

**如何解决兼容问题**

为了确保视频在各个浏览器中都能播放，常见的做法是提供多个格式的视频，并通过 `<video>` 标签的多个 `<source>` 子标签来实现。

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>你的浏览器不支持此视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

在这里我们将 `src` 属性从 `<video>` 元素中移除，转而将它放在几个单独的`<source>`元素当中，这些元素分别指向各自的资源。WebM 和 MP4 这两种格式在目前已经足够，只要视频支持这两种格式，那么其在大多数平台和浏览器上都能正确播放。

### 7.3 其他`<video>`属性

```html
<video
  controls
  width="400"
  height="400"         //控制视频属性
  autoplay             //这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。
  loop                 //这个属性可以让视频（或者音频）文件在结束时再次开始播放。这个也很恼人，同样不建议使用，除非必要。
  muted                //这个属性会导致媒体播放时，默认关闭声音。
  preload="auto"        //这个属性被用来缓冲较大的文件，有三个值可选
  poster="poster.png">        //这个属性指向了一个图像的 URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>你的浏览器不支持此视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

### 7.4 `<audio>`元素

`<audio>`和`<video>`基本完全相同，一个例子如下：

```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>你的浏览器不支持该音频，可点击<a href="viper.mp3">此链接</a>收听。</p>
</audio>
```

> 还有显示文本的属性，此处略



## 8 HTML调试

我们可以用https://validator.w3.org/来测试和调试错误信息。



## 9 补充 html表单

HTML 表单用于收集用户的输入信息。

HTML 表单表示文档中的一个区域，此区域包含交互控件，将用户收集到的信息发送到 Web 服务器。

HTML 表单通常包含各种输入字段、复选框、单选按钮、下拉列表等元素。

以下是一个简单的HTML表单的例子：

- `<form>` 元素用于创建表单，`action` 属性定义了表单数据提交的目标 URL，`method` 属性定义了提交数据的 HTTP 方法（这里使用的是 "post"）。
- `<label>` 元素用于为表单元素添加标签，提高可访问性。
- `<input>` 元素是最常用的表单元素之一，它可以创建文本输入框、密码框、单选按钮、复选框等。`type` 属性定义了输入框的类型，`id` 属性用于关联 `<label>` 元素，`name` 属性用于标识表单字段。
- `<select>` 元素用于创建下拉列表，而 `<option>` 元素用于定义下拉列表中的选项。

实例

```html
<form action="">
Username: <input type="text" name="user"><br>
Password: <input type="password" name="password">
</form>
```

效果：

<form action="">
Username: <input type="text" name="user"><br>
Password: <input type="password" name="password">
</form>

多数情况下被用到的表单标签是输入标签 **<input>**。

输入类型是由 **type** 属性定义。

### 9.1 文本域

文本域通过 **<input type="text">** 标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域。

### 9.2 密码字段

密码字段通过标签 **<input type="password">** 来定义:

### 9.3 单选按钮

**<input type="radio">** 标签定义了表单的单选框选项:

```html
<form action="">
<input type="radio" name="sex" value="male">男<br>
<input type="radio" name="sex" value="female">女
</form>
```

显示效果：

<form action="">
<input type="radio" name="sex" value="male">男<br>
<input type="radio" name="sex" value="female">女
</form>
### 9.4 复选框

**<input type="checkbox">** 定义了复选框。

```html
<form>
<input type="checkbox" name="vehicle[]" value="Bike">我喜欢自行车<br>
<input type="checkbox" name="vehicle[]" value="Car">我喜欢小汽车
</form>
```

显示效果：

<form>
<input type="checkbox" name="vehicle[]" value="Bike">我喜欢自行车<br>
<input type="checkbox" name="vehicle[]" value="Car">我喜欢小汽车
</form>

------

### 9.5 提交按钮

**<input type="submit">** 定义了提交按钮。

当用户单击确认按钮时，表单的内容会被传送到服务器。表单的动作属性 **action** 定义了服务端的文件名。

**action** 属性会对接收到的用户输入数据进行相关的处理:

```html
<form name="input" action="html_form_action.php" method="get">
Username: <input type="text" name="user">
<input type="submit" value="Submit">
</form>
```

浏览器显示效果如下:

<form name="input" action="html_form_action.php" method="get">
Username: <input type="text" name="user">
<input type="submit" value="Submit">
</form>
