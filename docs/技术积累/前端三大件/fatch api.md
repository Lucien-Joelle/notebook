# Fetch API

Fetch API 是一种现代的、功能强大的网络请求工具，它允许你通过 JavaScript 异步地请求资源，而不需要使用传统的 XMLHttpRequest 对象。

Fetch API 可以简洁地发起 HTTP 请求，并处理服务器的响应。

Fetch API 基于 Promise 设计，使得异步操作更加简洁和易于理解。

**Fetch 优点：**

- 基于 **Promises**，代码更加简洁和易读。
- 更好的错误处理机制：只在网络错误（如无法连接服务器）时返回 `catch`，而非状态码错误。
- 支持多种数据格式（JSON、文本、二进制等）。
- 可以处理跨域请求，通过 `CORS` 机制配置。

### fetch 的基本用法

fetch 的语法相当简洁，最基本的形式是：

```js
fetch(url)
  .then(response => response.json()) // 解析 JSON 数据
  .then(data => console.log(data))   // 处理数据
  .catch(error => console.error('Error:', error)); // 错误处理
```

具体意思就是：

```js
fetch(url)
  ↓ 发起网络请求
.then(response => response.json())
  ↓ 解析响应为 JSON
.then(data => 处理这个 JSON 数据)
  ↓ 如果上面任何一步出错
.catch(error => 错误处理)
```

