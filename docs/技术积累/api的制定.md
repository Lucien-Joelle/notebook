## 1 API的作用

API（Application Programming Interface，应用程序编程接口）是前端和后端进行通信和交换数据的一种规范。我们在API中确定前后端交互的路径、方法和参数。

> HTTP的工作原理是**客户端（client）**向**服务器（server）**发送**请求（request）**，服务器收到后返回**响应（response）**即相应的资源。

> api相当于一个咒语，我们用它和神明（服务器）对话，这样可以得到一个答复

### 1.1 **API 的组成**

为了更好地理解 API，我们可以把它拆解成几个关键部分，每个部分都有其重要作用。这里我列举几个主要组成部分，并用简单的例子来解释它们：

- **Application（应用程序）**：API 是应用程序的一部分，它允许其他程序与它进行交互。
- **Protocol （协议）：规定两个端之间的传输应该遵从什么规则，**常见的协议有 HTTP、HTTPS 等。就像我们说话需要遵循语法和词汇，API 通信也需要遵守这些协议。
- **Interface（接口）：可以类比为银行中的窗口，不用接口对应不同的服务窗口。**
- **Format（格式）：两个端之间传输的介质，比如** **JSON/XML**

# 2 API的制定和规范

> `https://api.abc.com/PROG/user/get` 为例

## 2.1 URL 的构成

- `https://api.abc.com/PROG/` 是基础前缀，拆分如下：
  - `https://`：安全协议（一般使用 HTTPS）
  - `api.abc.com`：主机地址，微信小程序必须使用域名，普通项目也可以是 IP:Port
  - `PROG`：项目名称，用于一级模块划分
  - ⚠️ *前端建议把这一部分写成常量，而不是手动拼接字符串；后端建议在代理层（如 Nginx）配置前缀，路由只处理后半部分*
- `/user/get` 是路由路径：
  - 按模块（如 user）和功能（如 get）划分
  - 前端框架处理：
    - `create-react-app` 需要注册路由
    - `vite` 通常无需额外注册路由

## 2.2 HTTP 方法简介

>HTTP 方法（HTTP Methods），有时也称为 HTTP 动词（HTTP Verbs），是客户端（例如网页浏览器）向服务器发起请求时，**指定对目标资源（例如一个网页、一张图片、一个 API 端点）期望执行的操作类型**。

| 方法   | 用途                     |
| ------ | ------------------------ |
| GET    | 获取资源（常用于查）     |
| POST   | 提交资源（常用于增、改） |
| PUT    | 替换资源（全量更新）     |
| DELETE | 删除资源                 |
| HEAD   | 获取响应头，不返回内容体 |

## 2.3 Get方法

get通常采用的传参方式有查询参数（字符串、参数数组、参数对象）、路径参数（url参数），一般查询字符串最为常见和通用

- 查询字符串
  - 使用?将参数附加到url末尾，多个参数之间使用&符号分隔
  - 例如 `/api/user?id=123&name=xyz`，下面是在CC98查询关注用户发布帖子的请求url，使用的即是query string方法

- url参数
  - 将参数作为url的一部分，一般用于表示资源的唯一标识或路径参数
  - 例如`/user/getById/abc123` 
  - 后端Tips：绝大多数框架的路由支持子路径统配，例如此处路径写为`/user/getById/{:id}`

>查询特定路径

- 参数数组
  - 使用相同的参数名，但允许多个值的情况，参数值使用[]表示
  - 例如`api/user?filter[]=admin&filter[]=active`

> 筛选多个条件

- 参数对象
  - 将参数封装在一个对象中，然后将该对象作为查询字符串的值传递
  - 例如`/api/user?filter={"role":"admin", "status":"active"}`

> 不推荐

## 2.4 Post方法

post通常采用的传参方式有json数据、表单数据和文件上传，一般以json传参为主。

下面是一个以json数据作为传参方法的post函数，其中Content-Type是传参方式，即application/json。相应的，表单为application/x-www-form-urlencoded，文件为multipart/form-data。

# 3 开发者工具简介

在前端中，使用较多的功能有Elements（元素）、Console（控制台）、Network（网络）、Application（应用）。

- Elements
  - 查看和编辑HTML和CSS
  - 查找元素的层级结构和属性

- Console
  - 执行JS代码
  - 查看日志、错误和警告信息

- Network
  - 监控网络请求和响应

- Application
  - 查看和管理存储在本地存储、会话存储、cookies存储中的数据

# 4 **Apifox**

简化api的设计
