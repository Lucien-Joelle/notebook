> React本质上是一个JSX的使用（当然也可以是TSX），在许多语法要求上与JSX相同，但是更加严格

## 1.1 严格的闭合标签

所有的标签必须有闭合，且一个函数只能返回一个大标签下的内容(这意味着你最好在每一个组件的return中都默认带上空白标签对作为大标签

```TypeScript
function App(){
    return(
    <>
        <h1>hello</h1>
        <br/>next
    </>);
}
```

## 1.2 组件导出

```TypeScript
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a React component.</p>
    </div>
  );
}

export default MyComponent;
```

这个时候就可以导出MyComponent作为别的组件内的"标签"了

```TypeScript
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <h1>Welcome to my React App!</h1>
      <MyComponent />
    </div>
  );
}

export default App;
```

- ==注意== React标签必须是大写字母开头的

## 1.3 事件响应

```TypeScript
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

- 此时对于Click事件,我们给出了回应handClick

## 1.4 组件状态

在 React 中，我们通常使用 state 来存储组件的状态，而不像 js 那样随意定义各种变量。这是因为 React 重新渲染组件时不会保留组件内的局部变量，修改这些变量也不会触发重新渲染。

存储和修改 state 需要用到`useState`，这是一个 React 钩子，它接收状态的初始值，返回当前状态以及更新状态的函数

```TypeScript
const [index, setIndex] = useState(0);
setIndex(index + 114514);
```

- 记得 import

## 1.5 传递参数

React 组件使用 *props* 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。

state 和 props 主要的区别在于 **props** 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。

**props传递步骤**

**步骤一：将 props 传递给子组件**

首先，将一些 props 传递给 `Avatar`。例如，让我们传递两个 props：`person`（一个对象）和 `size`（一个数字）：

```javascript
export default function Profile() {
  return (
    <Avatar
      person={ { name: 'Lin Lanying', imageId: '1bX5QH6' } }
      size={100}
    />
  );
}
```

**步骤二：在子组件中读取 props**

你可以通过在 `function Avatar` 之后直接列出它们的名字 `person, size` 来读取这些 props。这些 props 在 `({` 和 `})` 之间，并由逗号分隔。这样，你可以在 `Avatar` 的代码中使用它们，就像使用变量一样。

```javascript
function Avatar({ person, size }) {
  // 在这里 person 和 size 是可访问的
}
```

**使用 JSX 展开语法传递 props**

有时候，传递 props 会变得非常重复：

```javascript
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

重复代码没有错（它可以更清晰）,但我们可以进行简化：

```javascript
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

这会将 `Profile` 的所有 props 转发到 `Avatar`，而不列出每个名字。

**注意：请克制地使用展开语法**！

**将 JSX 作为子组件传递**

interface作为props

```typescript
export interface MessageProps {
    messageId: number;
    roomId: number;
    sender: string;
    content: string;
    time: number;
    user: string;
}

export function MessageItem (props: MessageProps) {

}
```

## 1.6map方法

在React中，`map` 方法是数组的一个常用方法，用于遍历数组并对数组中的每个元素进行操作，返回一个新的数组。它在React中常用于渲染列表组件，将数组中的数据映射为一组React元素。

1. **基本用法**

`map` 方法会遍历数组中的每个元素，并对每个元素执行传入的回调函数，然后将回调函数的返回值组成一个新的数组返回。

语法：

```javascript
array.map((item, index, array) => {
  // 对每个元素进行操作
  return something;
});
```

- `item`：当前遍历到的元素
- `index`：当前元素的索引（可选）
- `array`：当前正在遍历的数组（可选）
- **React中使用**`map`渲染列表

假设我们有一个用户列表数据，需要在React组件中渲染成一个列表：

```javascript
import React from 'react';

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

代码解析：

1. **数据准备**：`users` 是一个数组，包含多个用户对象。
2. **使用`map`方法**：
   1. `users.map((user) => ...)`：遍历`users`数组，对每个用户对象执行回调函数。
   2. 回调函数返回一个`<li>`元素，显示用户的`name`和`age`。
   3. 每个`<li>`元素通过`key`属性设置了唯一的标识（`user.id`），这是React渲染列表时推荐的做法，以提高性能和避免渲染错误。
3. **渲染结果**：
   1. 最终，`map`方法返回一个由`<li>`元素组成的数组，React会将这些元素渲染到`<ul>`中。
4. **注意事项**

- **`key`属性**：在使用`map`渲染列表时，React要求每个列表项有一个唯一的`key`属性。`key`可以是数组元素的唯一标识（如`id`），帮助React高效地更新和管理列表项。
- **返回值**：`map`方法的回调函数必须有返回值，否则返回的数组中会包含`undefined`。
- **不修改原数组**：`map`方法不会修改原数组，而是返回一个新的数组。
- **更复杂的场景**

假设我们有一个更复杂的对象数组，需要对每个对象的某些属性进行操作后渲染：

```javascript
import React from 'react';

const products = [
  { id: 1, name: 'Apple', price: 10, inStock: true },
  { id: 2, name: 'Banana', price: 5, inStock: false },
  { id: 3, name: 'Orange', price: 8, inStock: true }
];

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            {product.inStock ? <span> (In Stock)</span> : <span> (Out of Stock)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```



## 2.1 使用 create-react-app 快速构建 React 开发环境

React 提供了一个官方工具 Create React App，用于快速搭建 React 项目。

create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：

```bash
$ npm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```

项目的目录结构如下：

```
my-first-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock (或 package-lock.json)
```

### 目录和文件说明

**node_modules/**存放所有项目的依赖包。这个目录由 npm 或 yarn 自动生成，包含了项目运行所需的所有第三方库和模块。

**public/**存放静态文件，Webpack 不会对这个目录中的文件进行处理。`public` 目录下的文件会被直接复制到构建目录。

- `favicon.ico`：浏览器标签页上的小图标。
- `index.html`：HTML 模板文件，React 组件将被挂载到这个文件中的 `div` 元素中。
- `logo192.png` 和 `logo512.png`：不同尺寸的 React logo 图标。
- `manifest.json`：Web 应用清单文件，用于定义应用的名称、图标等元数据。
- `robots.txt`：用于告诉搜索引擎哪些页面可以被抓取。

==**src/**==存放应用的源代码。这里是你主要进行开发的地方。

- `App.css`：`App` 组件的样式文件。
- `App.js`：主组件文件，定义了一个基础的 React 组件。
- `App.test.js`：`App` 组件的测试文件。
- `index.css`：全局样式文件。
- `index.js`：应用的入口文件，负责渲染 React 组件到 DOM 中。
- `logo.svg`：React logo 的 SVG 文件。
- `reportWebVitals.js`：用于性能监测的文件，可以帮助你了解和分析应用的性能。
- `setupTests.js`：用于设置测试环境的文件。

**.gitignore**

列出 Git 应该忽略的文件和目录，例如 `node_modules/` 和构建输出的目录。

**package.json**

项目的配置文件，包含项目信息、脚本、依赖项等。

**README.md**

项目的自述文件，包含项目的基本信息和使用说明。

**`yarn.lock` 或 `package-lock.json`**

锁定文件，记录了确切的依赖版本，确保在不同环境中安装的依赖一致。

> 这里感觉可以将index理解为对App的一个包装

## 2.1 React 组件的基本结构

React 组件是 React 应用的核心构建块。

一个组件通常包含以下部分：

### 1、函数组件

使用函数定义的组件。

```react
import React from 'react';

function MyComponent() {
 return (
  <div>
   <h2>这是一个函数定义的组件</h2>
  </div>
 );
}

export **default** MyComponent;
```

**说明：**

- **`import React from 'react';`**: 导入了 React 库，React 是一个用于构建用户界面的 JavaScript 库。
- **`function MyComponent() { ... }`**: 这是一个函数组件。函数组件是一个返回 JSX 的 JavaScript 函数。
- **`return (...)`**: 组件的 `return` 语句返回一个 JSX 元素。JSX 是 JavaScript 的语法扩展，允许你在 JavaScript 中编写类似 HTML 的代码。
- **`export default MyComponent;`**: 将 `MyComponent` 组件导出为默认导出。这样，其他文件可以通过 `import MyComponent from './MyComponent';` 来导入并使用这个组件。

### 2、类组件

使用类定义的组件（现在较少使用，推荐使用函数组件）。

```react
import React, { Component } from 'react';

class MyComponent extends Component {
 render() {
  return (
   <div>
    <h2>这是一个类组件</h2>
   </div>
  );
 }
}

export **default** MyComponent;
```

**说明：**

- **`import React from 'react';`**: 导入 React 库，这是使用 React 的基础。
- **`import { Component } from 'react';`**: 从 React 库中导入 `Component` 类。`Component` 是 React 类组件的基类，所有类组件都需要继承它。
- **`class MyComponent extends Component { ... }`**: 定义了一个名为 `MyComponent` 的类组件。它继承了 `Component` 类，因此可以使用 React 类组件的特性（如生命周期方法、状态管理等）。
- **`render() { ... }`**: `render` 是类组件中必须实现的方法。它负责返回组件的 UI 结构（JSX）。
  - **`return (...)`**: 返回一个 JSX 元素，描述组件的 UI。
  - **`<div><h2>这是一个类组件</h2></div>`**: 这是一个简单的 JSX 结构，包含一个 `div` 和一个 `h2` 标题。
- **`export default MyComponent;`**: 将 `MyComponent` 组件导出为默认导出。这样，其他文件可以通过 `import MyComponent from './MyComponent';` 来导入并使用这个组件。

### 3、JSX

JSX 是 JavaScript 的语法扩展，允许在 JavaScript 中编写类似 HTML 的代码。

```react
const element = <h1>Hello, JSX!</h1>;
```

### 4、Props

Props 是组件的输入参数，用于从父组件向子组件传递数据。

```react
function Welcome(props) {
 return <h1>Hello, {props.name}</h1>;
}

function App() {
 return <Welcome name="React" />;
}
```

### 5、State

State 是组件的内部状态，用于管理组件的数据。

```react
import React, { useState } from 'react';

function Counter() {
 const [count, setCount] = useState(0);   //这个意思是初始为0，然后用setcount来更新这个count

 return (
  <div>
   <p>Count: {count}</p>
   <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
 );
}

export default Counter;
```



