## JS基本语法

## 1.1 预备语法

```js
// 注释方式和C很像，这是单行注释
/* 这是多行
   注释 */

// 语句可以以分号结束
doStuff();

// 分号可以省略
doStuff()

// 因为这些特殊情况会导致意外的结果，我们一般选择分号
```

## 1.2 数字与值

```js
// JavaScript 只有一种数字类型(即 64位 IEEE 754 双精度浮点 double)。
// double 有 52 位表示尾数，足以精确存储大到 9✕10¹⁵ 的整数。
3; // = 3
1.5; // = 1.5

// 所有基本的算数运算都如你预期。
1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// 包括无法整除的除法。
5 / 2; // = 2.5

// 位运算也和其他语言一样；当你对浮点数进行位运算时，
// 浮点数会转换为*至多* 32 位的无符号整数。
1 << 2; // = 4

// 括号可以决定优先级。
(1 + 3) * 2; // = 8

// 有三种非数字的数字类型
Infinity; // 1/0 的结果
-Infinity; // -1/0 的结果
NaN; // 0/0 的结果

// 也有布尔值。
true;
false;

// 可以通过单引号或双引号来构造字符串。
'abc';
"Hello, world";

// 用！来取非
!true; // = false
!false; // = true

// 相等 ===
1 === 1; // = true                        //注意这里相等是三个等号
2 === 1; // = false

// 不等 !==
1 !== 1; // = false                       //不等是‘!==’
2 !== 1; // = true

// 更多的比较操作符
1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// 字符串用+连接
"Hello " + "world!"; // = "Hello world!"         //类似python

// 字符串也可以用 < 、> 来比较
"a" < "b"; // = true

// 使用“==”比较时会进行类型转换...
"5" == 5; // = true                            //注意这里==是类型转换，不是判断相等
null == undefined; // = true

// ...除非你是用 ===
"5" === 5; // = false
null === undefined; // = false

// ...但会导致奇怪的行为
13 + !0; // 14
"13" + !0; // '13true'
```

## 1.3 字符串处理

```js
// 你可以用`charAt`来得到字符串中的字符
"This is a string".charAt(0);  // = 'T'       //charAt()提取字符

// ...或使用 `substring` 来获取更大的部分。
"Hello world".substring(0, 5); // = "Hello"    //substring()获取更多字符

// `length` 是一个属性，所以不要使用 ().
"Hello".length; // = 5

// 还有两个特殊的值：`null`和`undefined`
null;      // 用来表示刻意设置的空值
undefined; // 用来表示还没有设置的值(尽管`undefined`自身实际是一个值)

// false, null, undefined, NaN, 0 和 "" 都是假的；其他的都视作逻辑真
// 注意 0 是逻辑假而  "0"是逻辑真，尽管 0 == "0"。
```



## 1.4 变量、数字与值

 ```js
 // 2. 变量、数组和对象
 
 // 变量需要用`var`关键字声明。JavaScript是动态类型语言，
 // 所以你无需指定类型。 赋值需要用 `=`
 var someVar = 5;
 
 // 如果你在声明时没有加var关键字，你也不会得到错误...
 someOtherVar = 10;
 
 // ...但是此时这个变量就会在全局作用域被创建，而非你定义的当前作用域       //局部变量要加var关键字
 
 // 没有被赋值的变量都会被设置为undefined
 var someThirdVar; // = undefined
 
 // 对变量进行数学运算有一些简写法：
 someVar += 5; // 等价于 someVar = someVar + 5; someVar 现在是 10
 someVar *= 10; // 现在 someVar 是 100
 
 // 自增和自减也有简写
 someVar++; // someVar 是 101
 someVar--; // 回到 100
 
 // 数组是任意类型组成的有序列表
 var myArray = ["Hello", 45, true];
 
 // 数组的元素可以用方括号下标来访问。
 // 数组的索引从0开始。
 myArray[1]; // = 45
 
 // 数组是可变的，并拥有变量 length。
 myArray.push("World");
 myArray.length; // = 4
 
 // 在指定下标添加/修改
 myArray[3] = "Hello";
 
 // JavaScript中的对象相当于其他语言中的“字典”或“映射”：是键-值对的无序集合。
 var myObj = {key1: "Hello", key2: "World"};
 
 // 键是字符串，但如果键本身是合法的js标识符，则引号并非是必须的。
 // 值可以是任意类型。
 var myObj = {myKey: "myValue", "my other key": 4};
 
 // 对象属性的访问可以通过下标
 myObj["my other key"]; // = 4                        //内容和下表可以互相访问
 
 // ... 或者也可以用 . ，如果属性是合法的标识符
 myObj.myKey; // = "myValue"
 
 // 对象是可变的；值也可以被更改或增加新的键
 myObj.myThirdKey = true;
 
 // 如果你想要获取一个还没有被定义的值，那么会返回undefined
 myObj.myFourthKey; // = undefined
 ```

| 特性             | var                                | const                                                       |
| ---------------- | ---------------------------------- | ----------------------------------------------------------- |
| **作用域**       | 函数作用域 / 全局作用域            | 块级作用域                                                  |
| **提升**         | 声明提升，并初始化为 undefined     | 声明提升，但不初始化 (存在暂时性死区 TDZ)                   |
| **重声明**       | 允许 (在同一作用域)                | 不允许 (在同一作用域)                                       |
| **重赋值**       | 允许                               | 不允许                                                      |
| **必须初始化**   | 否 (默认为 undefined)              | 是 (声明时必须赋值)                                         |
| **全局对象属性** | 在顶层声明时，会成为全局对象的属性 | 在顶层声明时，不会成为全局对象的属性 (在浏览器模块化环境中) |

## 1.5 逻辑与控制结构

> 应该是和`java`差不多，可惜我没学过www

```js
var count = 1;
if (count == 3){
    // count 是 3 时执行
} else if (count == 4){              //其实更推荐===，这个不会发生类型转换
    // count 是 4 时执行
} else {
    // 其他情况下执行
}

// while循环
while (true) {
    // 无限循环
}

// Do-while 和 While 循环很像 ，但前者会至少执行一次
var input;
do {
    input = getInput();
} while (!isValid(input))

// `for`循环和C、Java中的一样：
// 初始化; 继续执行的条件; 迭代。
for (var i = 0; i < 5; i++){
    // 遍历5次
}

// && 是逻辑与, || 是逻辑或
if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}
if (colour == "red" || colour == "blue"){
    // colour是red或者blue时执行
}

// && 和 || 是“短路”语句，它在设定初始化值时特别有用
var name = otherName || "default";

// `switch`语句使用`===`检查相等性。
// 在每一个case结束时使用 'break'
// 否则其后的case语句也将被执行。
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}
```

## 1.6 函数、作用域和闭包

```js
// JavaScript 函数由`function`关键字定义
//可以发现和c的区别：变量都用var，函数都用function
function myFunction(thing){
    return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"

// 注意被返回的值必须开始于`return`关键字的那一行，
// 否则由于自动的分号补齐，你将返回`undefined`。
// 在使用Allman风格的时候要注意.
function myFunction()                    //注意，函数括号中的参数不用声明变量类型
{
    return // <- 分号自动插在这里
    {
        thisIsAn: 'object literal'
    }
}
myFunction(); // = undefined                  //意思就是我们如果return最好和返回参数放到同一行

// JavaScript中函数是一等对象，所以函数也能够赋给一个变量，
// 并且被作为参数传递 —— 比如一个事件处理函数：
function myFunction(){
    // 这段代码将在5秒钟后被调用                      
}
setTimeout(myFunction, 5000);                 //这个函数的作用是在指定的时间后调用你所传递的函数
// 注意：setTimeout不是js语言的一部分，而是由浏览器和Node.js提供的。

// 函数对象甚至不需要声明名称 —— 你可以直接把一个函数定义写到另一个函数的参数中
setTimeout(function(){
    // 这段代码将在5秒钟后被调用
}, 5000);

// JavaScript 有函数作用域；函数有其自己的作用域而其他的代码块则没有。
if (true){
    var i = 5;
}
i; // = 5 - 并非我们在其他语言中所期望得到的undefined
```

!!! warning "注意"
>
> 这里就是想说，函数的参数和其他语言一样，都有自己的作用域，但是`if while`这种块级代码就是作用在整个区域上

```js
// 这就导致了人们经常使用的“立即执行匿名函数”的模式，
// 这样可以避免一些临时变量扩散到全局作用域去。
(function(){
    var temporary = 5;
    // 我们可以访问修改全局对象（"global object"）来访问全局作用域，
    // 在web浏览器中是`window`这个对象。
    // 在其他环境如Node.js中这个对象的名字可能会不同。
    window.permanent = 10;                          //这个能直接变成全局变量
})();
temporary; // 抛出引用异常ReferenceError
permanent; // = 10

// JavaScript最强大的功能之一就是闭包。
// 如果一个函数在另一个函数中定义，那么这个内部函数就拥有外部函数的所有变量的访问权，即使在外部函数结束之后。
function sayHelloInFiveSeconds(name){
    var prompt = "Hello, " + name + "!";
    // 内部函数默认是放在局部作用域的，
    // 就像是用`var`声明的。
    function inner(){
        alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout是异步的，所以 sayHelloInFiveSeconds 函数会立即退出，
    // 而 setTimeout 会在后面调用inner
    // 然而，由于inner是由sayHelloInFiveSeconds“闭合包含”的，
    // 所以inner在其最终被调用时仍然能够访问`prompt`变量。
}
sayHelloInFiveSeconds("Adam"); // 会在5秒后弹出 "Hello, Adam!"
```

## 1.7 对象、构造函数与原型

```css
//对象可以包含方法。
var myObj = {
    myFunc: function(){
        return "Hello world!";
    }
};
myObj.myFunc(); // = "Hello world!"

// 当对象中的函数被调用时，这个函数可以通过`this`关键字访问其依附的这个对象。
myObj = {
    myString: "Hello world!",
    myFunc: function(){
        return this.myString;            //this其实就是代指我自己
    }
};
myObj.myFunc(); // = "Hello world!"


// 但这个函数访问的其实是其运行时环境，而非定义时环境，即取决于函数是如何调用的。
// 所以如果函数被调用时不在这个对象的上下文中，就不会运行成功了。
var myFunc = myObj.myFunc;
myFunc(); // = undefined


// 相应的，一个函数也可以被指定为一个对象的方法，并且可以通过`this`访问
// 这个对象的成员，即使在函数被定义时并没有依附在对象上。
var myOtherFunc = function(){
    return this.myString.toUpperCase();
}
myObj.myOtherFunc = myOtherFunc;                    //这里相当于创建了一个新的属性
myObj.myOtherFunc(); // = "HELLO WORLD!"
```

这很重要，相当于创建新属性，跟`python`很像？

```js
// 当我们通过`call`或者`apply`调用函数的时候，也可以为其指定一个执行上下文。
var anotherFunc = function(s){
    return this.myString + s;
}
anotherFunc.call(myObj, " And Hello Moon!"); // = "Hello World! And Hello Moon!"


这里.call后面的第一个是this指向的对象，第二个是传入的参数


// `apply`函数几乎完全一样，只是要求一个array来传递参数列表。
anotherFunc.apply(myObj, [" And Hello Sun!"]); // = "Hello World! And Hello Sun!"



// 当一个函数接受一系列参数，而你想传入一个array时特别有用。
Math.min(42, 6, 27); // = 6
Math.min([42, 6, 27]); // = NaN (uh-oh!)
Math.min.apply(Math, [42, 6, 27]); // = 6

// 但是`call`和`apply`只是临时的。如果我们希望函数附着在对象上，可以使用`bind`。
var boundFunc = anotherFunc.bind(myObj);          //这样直接把函数附着到bind对象身上了
boundFunc(" And Hello Saturn!"); // = "Hello World! And Hello Saturn!"

// `bind` 也可以用来部分应用一个函数（柯里化）。
var product = function(a, b){ return a * b; }
var doubler = product.bind(this, 2);
doubler(8); // = 16

// 当你通过`new`关键字调用一个函数时，就会创建一个对象，
// 而且可以通过this关键字访问该函数。
// 设计为这样调用的函数就叫做构造函数。
var MyConstructor = function(){
    this.myNumber = 5;
}
myNewObj = new MyConstructor(); // = {myNumber: 5}  //相当于把这个函数this后面的东西挪到对象myNewObj上了
myNewObj.myNumber; // = 5
```

==下面这部分暂时没有看懂，回头再说==

```js
// 每一个js对象都有一个‘原型’。当你要访问一个实际对象中没有定义的一个属性时，
// 解释器就回去找这个对象的原型。

// 一些JS实现会让你通过`__proto__`属性访问一个对象的原型。
// 这虽然对理解原型很有用，但是它并不是标准的一部分；
// 我们后面会介绍使用原型的标准方式。
var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function(){
        return this.myString.toLowerCase()
    }
};

myObj.__proto__ = myPrototype;
myObj.meaningOfLife; // = 42

// 函数也可以工作。
myObj.myFunc() // = "hello world!"

// 当然，如果你要访问的成员在原型当中也没有定义的话，解释器就会去找原型的原型，以此类推。
myPrototype.__proto__ = {
    myBoolean: true
};
myObj.myBoolean; // = true

// 这其中并没有对象的拷贝；每个对象实际上是持有原型对象的引用。
// 这意味着当我们改变对象的原型时，会影响到其他以这个原型为原型的对象。
myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; // = 43

// 我们知道 `__proto__` 并非标准规定，实际上也没有标准办法来修改一个已存在对象的原型。
// 然而，我们有两种方式为指定原型创建一个新的对象。

// 第一种方式是 Object.create，这个方法是在最近才被添加到Js中的，
// 因此并不是所有的JS实现都有这个方法
var myObj = Object.create(myPrototype);
myObj.meaningOfLife; // = 43

// 第二种方式可以在任意版本中使用，不过必须通过构造函数。
// 构造函数有一个属性prototype。但是它 *不是* 构造函数本身的原型；相反，
// 是通过构造函数和new关键字创建的新对象的原型。
MyConstructor.prototype = {
    myNumber: 5,
    getMyNumber: function(){
        return this.myNumber;
    }
};
var myNewObj2 = new MyConstructor();
myNewObj2.getMyNumber(); // = 5
myNewObj2.myNumber = 6
myNewObj2.getMyNumber(); // = 6

// 字符串和数字等内置类型也有通过构造函数来创建的包装类型
var myNumber = 12;
var myNumberObj = new Number(12);
myNumber == myNumberObj; // = true

// 但是它们并非严格等价
typeof myNumber; // = 'number'
typeof myNumberObj; // = 'object'
myNumber === myNumberObj; // = false
if (0){
    // 这段代码不会执行，因为0代表假
}

// 不过，包装类型和内置类型共享一个原型，
// 所以你实际可以给内置类型也增加一些功能，例如对string：
String.prototype.firstCharacter = function(){
    return this.charAt(0);
}
"abc".firstCharacter(); // = "a"

// 这个技巧经常用在“代码填充”中，来为老版本的JavaScript子集增加新版本js的特性，
// 这样就可以在老的浏览器中使用新功能了。

// 比如，我们知道Object.create并没有在所有的版本中都实现，
// 但是我们仍然可以通过“代码填充”来实现兼容：
if (Object.create === undefined){ // 如果存在则不覆盖
    Object.create = function(proto){
        // 用正确的原型来创建一个临时构造函数
        var Constructor = function(){};
        Constructor.prototype = proto;
        // 之后用它来创建一个新的对象
        return new Constructor();
    }
}
```

let 值可以修改，const值不可以修改。const声明数组的时候可以改变









