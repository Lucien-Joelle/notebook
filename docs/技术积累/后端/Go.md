```markdown
## 一个Go程序由哪些部分组成？

一个典型的Go程序主要包含以下几个核心部分：

```Go
package main                // 1. 包声明

import (                    // 2. 导入声明
    "fmt"
    // "example/import"
)

const PI = 3.14159          // 可选：常量声明 (包级别)

var exampleGlobalVar int    // 3. 包级别变量声明
type MyStruct struct {       // 可选：类型声明 (如结构体、接口等)
    Field1 int
}

// 4. 函数声明
func exampleFunc(param int) string {
    localVar := "Hello" // 函数内部局部变量
    return fmt.Sprintf("%s: %d", localVar, param)
}

// 特殊的main函数，程序入口 (仅在 package main 中)
func main() {
    // ...
}
```

---

## 详细组成部分

### 1. 包声明 (Package Declaration)
*   **语法**: `package <packageName>`
*   **位置**: 每个 `.go` 文件的第一行（非注释）。
*   **作用**: 定义文件所属的包。
*   **`package main`**: 特殊包，表明这是一个可执行程序，必须包含 `main` 函数作为入口。
*   **其他包名**: 表明这是一个库包，可被其他程序导入。

### 2. 导入声明 (Import Declaration)
*   **语法**:
    *   单个导入: `import "packageName"`
    *   批量导入: `import ( "pkg1"; "pkg2" )` 或 `import ( "pkg1" \n "pkg2" )`
*   **作用**: 导入程序依赖的其他包（标准库、第三方库、项目内其他包）。
*   **注意**: 导入了但未使用的包会导致编译错误。

### 3. 包级别声明 (Package-Level Declarations)
在所有函数之外声明，整个包内可见。首字母大写则可被其他包访问（导出）。
*   **变量声明 (`var`)**: 全局变量，生命周期为整个程序运行时间。
*   **常量声明 (`const`)**: 编译时确定的值，不可修改。
*   **类型声明 (`type`)**: 定义自定义类型，如 `struct`, `interface`, 函数类型等。

### 4. 函数声明 (`func`)
*   **作用**: 执行特定任务的代码块。
*   **`func main()`**: 特殊函数，在 `package main` 中作为程序入口点。

---

## 2.1.0 变量和函数的声明

### 1. 变量 (Variable)

#### 声明方式：

1.  **基础声明**: `var 变量名 变量类型`
    *   赋予类型的零值 (e.g., `int` 为 `0`, `string` 为 `""`)。
    *   示例: `var age int`

2.  **批量声明**: `var ( ... )`
    *   同时声明多个变量。
    *   示例:
        ```go
        var (
            name string
            age int
        )
        ```

3.  **基础声明 + 初始化**: `var 变量名 变量类型 = 初始值`
    *   示例: `var message string = "Hello"`

4.  **短变量声明**: `变量名 := 初始值`
    *   **仅限函数内部使用**。
    *   编译器自动推断类型。
    *   声明和初始化同时进行。
    *   示例: `count := 10`

5.  **`var` + 自动类型判断 (类型推断)**: `var 变量名 = 初始值`
    *   编译器根据初始值自动推断类型。
    *   可用于包级别或函数内部。
    *   示例: `var isActive = true`

6.  **`new` 函数**: `new(T)`
    *   分配内存，返回指向 **已置零** 的 `T` 类型值的指针 (`*T`)。
    *   示例: `ptr := new(int)` (`*ptr` 的值为 `0`)

7.  **`make` 函数**: `make(T, args...)`
    *   **仅用于 slice, map, chan** 这三种引用类型的创建和初始化。
    *   返回一个已初始化的（非零）`T` 类型的值，而非指针。
    *   示例:
        *   `s := make([]int, 5)`       // 切片       //类似数组？
        *   `m := make(map[string]int)` // 映射 ，类似哈希
        *   `ch := make(chan bool)`     // 通道

### 2. 函数 (Function)

#### 基本语法:
```Go
func functionName(parameter1 type1, parameter2 type2) (returnType1, returnType2) {
    // 函数体
    return value1, value2 // 如果有返回值
}
```
*   参数和返回值数量均可为 0 到多个。
*   如果多个连续参数类型相同，可简写: `(p1, p2 string, p3 int)`

#### 函数返回多值的写法：

Go 语言允许函数返回多个值，这在错误处理和返回多个相关结果时非常有用。

1.  **匿名返回值**: `func foo() (int, string) {}`
    *   直接在返回值列表中指定类型。
    *   函数体中使用 `return val1, val2` 来返回具体的值。
    *   这是最常见和推荐的方式。
    *   示例:
        ```go
        func process(input int) (int, error) {
            if input < 0 {
                return 0, fmt.Errorf("invalid input: %d", input)
            }
            return input * 2, nil
        }
        result, err := process(10)
        ```

2.  **命名返回值**: `func bar() (resultCode int, message string) {}`
    *   在返回值列表中为返回值预先声明变量名。
    *   这些命名的返回值变量在函数开始时会被初始化为其类型的零值。
    *   在函数体内可以直接给它们赋值。
    *   可以使用 "裸" `return` (即 `return` 后面不带任何值)，此时会返回这些命名变量的当前值。
    *   示例:
        ```go
        func getUserInfo(id int) (name string, age int, err error) {
            if id == 1 {
                name = "Alice"
                age = 30
                // err 默认为 nil
                return // 裸返回：返回 "Alice", 30, nil
            }
            err = fmt.Errorf("user not found")
            // name 默认为 "", age 默认为 0
            return // 裸返回：返回 "", 0, 和设置的 err
        }
        n, a, e := getUserInfo(1)
        ```
    *   **优点**:
        *   对于复杂的函数，可以使返回值的含义更清晰。
        *   有时可以减少代码重复。
        *   `defer` 语句可以修改命名的返回值。
    *   **缺点/注意事项**:
        *   对于短小函数可能显得冗余。
        *   过度使用 "裸" `return` 可能降低可读性，因为需要回溯查看变量的最终赋值。推荐即使使用命名返回值，也显式返回 `return name, age, err`，除非函数非常简短且逻辑清晰。

#### 何时使用命名返回值 vs. 匿名返回值？
*   **匿名返回值**:
    *   首选方式，尤其对于简单、清晰的函数。
*   **命名返回值**:
    *   当函数签名本身就能很好地说明返回值的含义时 (如标准库 `io.Reader` 的 `Read` 方法: `func (f *File) Read(b []byte) (n int, err error)`）。
    *   当函数逻辑较复杂，有多个返回点，且通过命名返回值可以提高清晰度或减少重复时。
    *   需要配合 `defer` 修改返回值时。

> **建议**: 谨慎使用 "裸" `return`。在多数情况下，显式返回命名变量 (`return var1, var2`) 能提高代码的可读性，即使使用了命名返回值。



### 2.1.1 关于 `package import` 你需要知道

| 导入方式     | 语法示例                          | 用途说明                       |
| ------------ | --------------------------------- | ------------------------------ |
| 标准库导入   | import "fmt"                      | 导入 Go 官方提供的库           |
| 第三方库导入 | import "github.com/gin-gonic/gin" | 导入通过 go get 安装的库       |
| 本地包导入   | import "./utils"                  | 导入项目内的本地包（相对路径） |
| 匿名导入     | import _ "github.com/lib/pq"      | 仅执行包的 init() 函数         |
| 别名导入     | import m "my/math"                | 解决命名冲突                   |

其中，前三种导入是你会用得比较多的，但建议你也了解一下后两种导入方式。

导入包后你就可以使用包中的函数了！Go 语言函数的调用方法和绝大多数语言可以说是一脉相承，即为 **包名.函数名**

包名：package PackageName 处声明的包的名字

函数名：func FunctionName 处声明的函数名

### 2.1.2 命名规范之大驼峰和小驼峰的区别

驼峰：靠单词首字母大写来隔开不同单词的命名方法

- 小驼峰：thisIsProtected    包**内**可见
- 大驼峰：ThatIsPublic        包**外**可见

看到这里，再回看 2.0.1 中的 func FunctionName ，你理解这里的 FunctionName 为什么首字母大写了吗？

观察更多的从导入包中引用的函数，你会发现它们无一例外均为大驼峰的函数名。事实上，这些包的内部大多都是既有小驼峰函数也有大驼峰函数。其中，小驼峰函数用于实现大驼峰函数的功能，而大驼峰函数用于提供给导入包的人调用。

这保证了部分包的闭源需要，也确保了一些常用函数不会出现重名问题。

相信求知欲比较旺盛的同学看到这里已经开始好奇了：包声明、包导入和更早出现的go.mod **模块路径** 是什么关系？

这是一个理解上的难点，这里我们拟作为一个思考题要求读者进行思考，如果实在困难，就将本部分改为思考题的解答。

### 2.1.3 严格的编译器导致的报错

Go 编译器以 **"零容忍"** 态度对待**无用代码**，因此你最好从**导入**开始就加以注意。

| 错误类型       | 示例代码                       | 编译器提示                  |
| -------------- | ------------------------------ | --------------------------- |
| 未使用变量     | a := 10                        | a declared but not used     |
| 未使用包       | import "math"（未调用）        | imported and not used: math |
| 未使用函数参数 | func test(x int) {}（未使用x） | x is unused                 |

> 在调试阶段，另一种应对编译器的方法是用**空白标识符**临时绕过检查，我们推荐你在调试程序的时候自行查询空白标识符的使用方法。

## 2.2 config

试试回想一下 git 章节的 gitignore 部分

config 文件可以是 config.json 或 config.yaml ，我们推荐你把它保存在 `config` 文件夹里。（就是配置文件

以下是一个 config.json 的栗子：

```JSON
{
  "database": {
    "host": "localhost",
    "port": 5432,
    "user": "myusername",
    "password": "mypassword",
    "dbname": "mygo"
  }
}
```

不难看出，config的主要作用是保存你的数据库相关设置，包括你的用户名和密码这种**非常隐私**的内容。

## 2.3 init.go

### 2.3.1 实现功能与涉及知识点

> 从这个部分开始你遇到的 package 数量会激增，我不会每次都注明需要在终端使用 go get 并在代码中添加 import，请自己完成这部分的配置。

init.go 用于初始化数据库连接，也就是说，在这一部分，你需要：

- 学习使用 viper
  - **找到**和读取config配置文件
  - 获取文件中的**特定**字符 --> 此处的特定字符包括什么取决于数据库连接字符串的组成，请与下一条结合理解
- 字符串的连接：使用 `:=` 和 `+` 或 `Sprintf` 等多种方法
  - 处理特定字符，组成**连接字符串** --> 针对你使用的数据库查询**连接字符串**的结构。
  - 这里的 **字符串的连接** 和 **连接字符串** 是完全不同的两件事，**字符串的连接**是一个操作，而**连接字符串**是一个字符串，类似于你访问数据库时的一把钥匙
- gorm 和 postgres 的结合使用
  - 打开数据库：`gorm.Open`
- 进阶：连接池配置 --> 比较难，不要求掌握

### 2.3.2  调试工具：err 和 fmt / log 

1. **错误处理**

golang 中用两套机制区分了错误（Error）和异常（Panic）。错误以返回值的方式返回，异常将引起线程中止。

由于没有catch；而panic又过于复杂且表意“致命异常”和一般程序异常语义不一致（且终止一个线程开销还是比较高的）；

golang通过多返回值的方式处理错误：

```Go
return_value, err := SomeFunc(...)
if err!=nil {
    ... handle exception
    return
}
```

因此，在自己写函数时，也要尽量遵循这样的写法，来保证代码风格统一

这样子的写法虽然很冗长很丑，但是基本上可以保证不会让程序在异常状态下跑飞，这和Golang在严谨的后端应用场合避免出现意外是相吻合的

1. **fmt 输出 / log 输出**

Go 的输出可以单独使用，也经常和 err 配合出现。如果你有调试 C 之类的程序的经验，你可能发现在拿不准的地方加上一个 printf 会带来不小的帮助；在写前端的时候，你同样地也会用到不少 console 不是吗？在 Go 中，我们使用 fmt 或是 log 来完成这一功能。

其中，log 可以说是 fmt 功能的进阶版本，下面给出一些常用函数：

```Go
import "log"
log.Print：输出日志信息（类似 fmt.Print）。
log.Println：输出日志信息并在末尾添加换行符（类似 fmt.Println）。
log.Printf：按指定格式输出日志信息（类似 fmt.Printf）。
log.Fatal：输出日志信息后调用 os.Exit(1) 终止程序。
log.Panic：输出日志信息后引发 panic。
```

当然，你不用为了这条而在你的代码里放满 log ，不过我还是希望在遇到bug的时候你可以加几个调试 log 并在你的**终端**查看它们的输出

更进一步地，log 还可以创建自定义的 Logger 实例，指定输出目标、前缀或日志标志：

```Go
log.New：创建新的 Logger 实例。
log.Flags：设置日志格式标志（如日期、时间、微秒、文件行号）。
log.SetOutput：更改日志输出位置（如文件）。
```

## 2.4 ORM

这一部分内容请见——[GORM](https://xn4zlkzg4p.feishu.cn/wiki/EbrIwV7imiz75mkeJSWcmmUGnlh)

## 3.对接前端的部分

## 3.0 如何读接口文档？

### 3.0.1 Go 中的 HTTP 

1. #### Web 服务器，启动！

```Go
http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    // 你可以在这里通过 http.ServeFile(w, r, "./example/index.html")改变启动的 Url
    })
http.ListenAndServe(":8080", nil) // 此处可以根据你前端的设置改变 port
```

1. #### **响应处理**

   1. 设置响应头

   > 关于什么是响应头，这是一个 HTTP 协议中的概念，建议回看相关内训文档

   ```Go
   w.Header().Set("Content-Type", "application/json")
   w.WriteHeader(http.StatusOK)
   json.NewEncoder(w).Encode(responseData)
   ```

   1. 响应

      1. GET 请求处理

      2. ```Go
         func handleGetExample(w http.ResponseWriter, r *http.Request) {
             // 获取并验证查询参数
             example, err := strconv.Atoi(r.URL.Query().Get("page"))
             if err != nil || example < 1 {
                 example = 1 // 处理输入的数据
             }
         
             // 从数据库中获取需要的值
             // 处理输出的数据
             
             // 构造响应
             response := map[string]interface{}{
                 "code":    0,
                 "message": "success",
                 "data": map[string]interface{}{
                     "total":   len(results),
                     "items":   results,
                 },
             }
         
             // 返回JSON
             w.Header().Set("Content-Type", "application/json")
             // 处理报错
             if err := json.NewEncoder(w).Encode(response); err != nil {
                 http.Error(w, "JSON编码失败", http.StatusInternalServerError)
             }
         }
         ```

      3. POST请求处理

      4. ```Go
         func handlePostExample(w http.ResponseWriter, r *http.Request) {
             // 解析请求体
             var requestData struct {
                 Field1 string `json:"field1"` // 对应前端字段
                 Field2 int    `json:"field2"`
             }
             // 处理报错
             if err := json.NewDecoder(r.Body).Decode(&requestData); err != nil {
                 http.Error(w, "无效的请求格式", http.StatusBadRequest)
                 return
             }
         
             // 处理输入的数据
             // 从数据库中获取需要的值 / 向数据库存入特定值
             // 处理输出的数据
         
             // 构造响应
             response := map[string]interface{}{
                 "code":    0,
                 "message": "创建成功",
                 "data":    newRecord,
             }
         
             // 返回JSON
             w.Header().Set("Content-Type", "application/json")
             w.WriteHeader(http.StatusCreated)
             // 处理报错
             if err := json.NewEncoder(w).Encode(response); err != nil {
                 http.Error(w, "JSON编码失败", http.StatusInternalServerError)
             }
         }
         ```

1. #### 路由管理与 Cors 跨域访问

当浏览器（如前端应用）从一个域名（如 `http://localhost:5432`）向另一个域名（如 `http://localhost:8080`）的后端发起请求时，浏览器会因 **同源策略（Same-Origin Policy）** 默认阻止跨域请求。此时需要后端明确声明允许跨域访问的规则。

1. **允许跨域来源**

   1. ```Go
      w.Header().Set("Access-Control-Allow-Origin", "*")
      // 此次允许任意域名（*）访问资源
      // 生产环境建议替换为具体域名（如 http://localhost：8080）
      ```

2. 划定**允许的HTTP方法**  

   1. ```Go
      w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      ```

我们只用到 PUT 和 POST，那么这个 OPTIONS 是什么、是为什么要加的呢？ 我们将这个问题作为一个思考题，我希望你可以得出理论层面的答案，并在 F12开发者工具 的 网络Network 工具找到佐证。

1. **相关响应头设置**

   1. ```Go
      // 允许的请求头
      w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
      // 允许客户端携带 Content-Type（数据类型）和 Authorization（身份凭证）等自定义头。
      
      // 处理 OPTIONS
      if r.Method == "OPTIONS" {
          // w.WriteHeader(http.StatusNoContent) 这里加一句可以设置状态码 204 No Content
          return
      }
      // 直接响应浏览器的预检请求（不触发业务逻辑），返回上述CORS头。
      
      // 附加项：安全性提升
      w.Header().Set("X-Content-Type-Options", "nosniff")
      // 禁止浏览器猜测响应内容类型，防止MIME类型混淆攻击。
      ```

1. #### http.Error

相信你在阅读 **响应** 部分的代码范例后一定注意到了新的处理报错方法：

```Go
if err := json.NewEncoder(w).Encode(response); err != nil {
        http.Error(w, "JSON编码失败", http.StatusInternalServerError)
    }
}
```

其中，http.Error 是调试 http 部分时重要的调试输出工具。它会将 Error 反映到网页 F12开发者工具 的 控制台console 中，将成为你在调试 HTTP 部分时不可或缺的得力助手。栗子：

![img](https://xn4zlkzg4p.feishu.cn/space/api/box/stream/download/asynccode/?code=MzI0ZmE5MzczYzE0YmU3YWZjODg5YWYwNmIzYTEwOGFfYkFQN2IyR1BPaVlZczZOTGI2SXhZVkhIV2sxQThUZkZfVG9rZW46T2dLdWJEanNQb3NOdXR4VXVaOGNBODN0bnhiXzE3NTA3NDM1NTg6MTc1MDc0NzE1OF9WNA)

### 3.0.2 接口文档

请复习 [API的制定 ](https://xn4zlkzg4p.feishu.cn/wiki/NsgMw36lVi8xvmkHRXmc7Kuincd)，虽然文档中大部分的内容在讲前端如何处理，但其实后端与前端只有少许语法上的不同。

其中，URL 和 method 都易于理解；

Request 决定了你该如何处理输入的数据。举个栗子：为了使格式清晰、操作便利，你可以针对 request 结构定义 struct

```Go
var input struct {
        Name    string `json:"name"`
        Content string `json:"content"`
    }
```

Response 决定了你的返回值的结构，进一步甚至决定了你的数据库应该如何建表（是的，后端就是这样一个两头都要顾的东西）

```Go
// 例如你可以建一个 comment 结构
type Comment struct {
    ID      int    `json:"id" gorm:"primaryKey;autoIncrement"`
    Name    string `json:"name"`
    Content string `json:"content"`
}
// 一方面，它被用在数据库中
db.AutoMigrate(&Comment{})
// 另一方面，它被用于回复某个 POST 请求
...
    resp := Response{
        Code: 0,
        Msg:  "success",
        Data: comment,
    }
...
```

小Tip：入门项目中的 删除评论 功能使用的 method 是 POST 而非 DELETE

## 3.1 model.go

### 3.1.1 作用

定义数据模型，将项目用到的所有 struct 放在一个文件里，便于查找删改：

- 面向数据库：定义适合存储数据的结构 struct
- 面向前端：定义 response 中的统一格式，方便返回数据
- 根据需求灵活定义
  -  eg：如果 config 比较复杂，也可以定义一个 config 的 struct

### 3.1.2 涉及知识点

-  结构体标签（Struct Tags）

指导序列化/反序列化、数据库映射等操作。

```Go
type User struct {
    Name string `json:"name" db:"user_name"`
    // 这段 就是标签
    // 字段名 → JSON键名"name"，数据库列名"user_name"
}
```

- 进阶阅读：5.2 Tag和序列化

- golang 的 结构体struct 和 接口interface 和（蹩脚的）方法func

> 没有class的golang，乐色

1. 结构体 Struct：数据 + 方法的组合 class的代餐

   1. ```Go
      // 定义结构体
      type User struct {
          ID   int    `json:"id"`
          Name string `json:"name"`
      }
      // 定义方法（值接收器）
      func (u User) GetName() string {
          return u.Name
      }
      // 定义方法（指针接收器）
      func (u *User) UpdateName(name string) {
          u.Name = name // 修改原对象
      }
      ```

2. 接口 Interface

> 鸭子类型： “如果它走起路来像鸭子、叫起来也像鸭子，那么它就是鸭子”

如果一个对象看起来很像某类型，那么它就可以被视为该类型。

```Go
// 定义接口
type Speaker interface {
    Speak() string
}

// 结构体自动实现接口
type Dog struct{}
func (d Dog) Speak() string {
    return "Woof!"
}
// 使用接口
func MakeSound(s Speaker) {
    fmt.Println(s.Speak())
}
// 调用
dog := Dog{}
MakeSound(dog) // 输出 "Woof!"
```

## 3.2 server.go

### 3.2.1 作用

- HTTP服务：在这里你需要给前端的每一个请求功能写一个对应的响应。
  - 具体流程：HTTP 获取请求 --> ORM 操作取出数据 --> HTTP 响应返回数据
- 路由配置：包含设置响应头和设置跨域访问两个步骤

### 3.2.2 涉及知识点

- 复习并使用 Go 语言的 ORM 
- 复习并使用 Go 语言的 HTTP
- 基础语法：`if` `for`  --> 自行查阅官网
  - `if err:=DoSth();err!=nil {}`
  - `for index,item := range list/map/channel {}`
    - **非引用类型的item在循环内删改无效**
- 基础语法：`array[N]` `slice[]` `map[KEY]VALUE`
  - 数组`array[N]` ：长度固定
  - 切片`slice[]` ：动态数组
  - 映射`map[KEY]VALUE` ：无序键值对
  - make(T)的使用方法
    - 创建切片（带长度）
    - 创建映射（带初始容量
    - 创建缓冲通道channel
- `defer` `panic` `recover`
  - `defer`: 延迟执行，常用defer进行close的工作
  - `panic` `recover`: 处理致命错误
  - 服务器在每个请求最外层默认包含了panic的处理503

## 4.汇总与初始化

## 4.1 main.go

main.go 的内容一般非常短，你可以将它看作一个用来整合各大功能函数的优美文件。

## 4.2 运行你的go项目

| 命令           | 作用                         |
| -------------- | ---------------------------- |
| go run main.go | 直接运行代码                 |
| go build       | 编译生成当前平台的可执行文件 |
| go install     | 安装到 $GOPATH/bin           |
| go clean -i    | 清理编译文件                 |

## 5.Golang语法进阶

**往下阅读进阶之前，复习以下上文涉及的内容：**

- Go 基础语法：`package` `import` `func` `struct` `interfaceif` `forarray[N]` `slice[]` `map[KEY]VALUE` `defer` `panic` `recover`
- GORM 使用
- HTTP 使用

## 5.1 值和引用

阅读本小节时请：回看你的所有go程序，在尽可能多的 func 旁标注你使用的是值还是引用

和众多语言一样，golang在传参和赋值的时候也有值和引用的区别

- 值：数据复制一份；互不干扰
- 引用：共用内存，修改会在其他地方同步

在Golang中，只有`map`和`slice`是引用类型，（当然其他类型做引用也可以像C一样使用指针`*ptr`）

【特别注意】golang有数组和slice的区别，数组是定长内存，是传值；slice是可变长度的，是传引用

【一个坑】

```Go
func (obj Clazz) Method()
func (obj *Clazz) Method()
```

其中第一个是值传递，不会修改调用者结构体本身 第二种才是对应典型的其他语言类方法

## 5.2 Tag和序列化

阅读本小节时请：打开你的 model.go 程序，尝试通过反引号语法为字段添加元数据，用于序列化/ORM映射

【例】在看完例子后请在心里对自己解释一下中间两行代码在做什么

```C++
type User struct {
      ID    int    `json:"id" gorm:"primaryKey"`
      Name  string `json:"name" validate:"required"`
  }
```

在Golang的序列化中，大量使用Tag，因此需要掌握，并学会合理使用

【Tag原理】

https://zhuanlan.zhihu.com/p/260642112

【Json中的Tag】

https://fivezh.github.io/2022/02/01/golang-json-tag/

【SQL数据库ORM中的Tag】

https://blog.csdn.net/weixin_40626064/article/details/119242905

【用于序列化的注意事项】

一定是大写首字母的Public字段才能被反射访问从而序列化！

## 5.3 C、Java与Go的**结构体（struct）和接口（interface）**

在C中，struct是多个数据的捆绑类型

在Java中，没有struct，只有class；class描述了一类对象上的方法（函数）和属性（变量）

在Golang（包括Rust）中，保留了C中struct的捆绑类型的语义，而运行在struct上增添方法调用

因此，Golang实现的是一种极其简化的面向对象特性，基本不支持多态，也不能完善的实现继承；但是，Golang有如下特性

- 接口（关键词叫Interface，实际上是Trait）
- 虚假的类继承（继续匿名嵌套对象）

```Go
struct BaseClazz { 
    some vars... 
}
struct ChildClazz {
    BaseClazz
    some vars...
}

func Test() {
    base := BaseClazz{}
    obj := ChildClazz{ 
        BaseClazz: base, 
        x: xx, y: yyy 
        }
    obj.SomeBaseClazzMethod()
}
```

由于类是结构体实现的，在语法上可以随意拷贝

但是需要注意在语义上是否可以拷贝，是否需要深拷贝的问题

（深拷贝自行搜索含义   举个例子：链表不能浅拷贝）

## 6.延伸阅读

如果你准备好迎接更高更远更强的挑战，请阅读[Go: 更多的进阶阅读](https://xn4zlkzg4p.feishu.cn/wiki/IQi5w2GFri8xO7kfyXHc27fondc)

## 思考题

【1】

```Go
struct JsonData {
    GoField string `json:"json_field"`
    CamelCase string
    SomeTime time.Time
}
{ 
    "json_field": "aaa", 
    "camel_case": "bbb",
    "SomeTime": "???"
}
```

- 如何传递日期时间数据？
- Golang的库（以Json为例），是如何基于字段名和Tag进行字段匹配的？