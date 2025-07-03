# 数学公式测试页面

## 删除线功能测试

### 片段删除线效果

使用`\cancel{字符}`、`\bcancel{字符}`、`\xcancel{字符}`、`\cancelto{字符}{字符}`来实现各种**片段删除线**效果：

$$
\begin{array}{rl}
\text{y+\cancel{x}}&y+\cancel{x}\\
\text{y+\cancel{y+x}}&y+\cancel{y+x}\\
\text{y+\bcancel{x}}&y+\bcancel{x}\\
\text{y+\xcancel{x}}&y+\xcancel{x}\\
\text{y+\cancelto{0}{x}}&y+\cancelto{0}{x}\\
\text{\frac{1\cancel9}{\cancel95}=\frac15}&\frac{1\cancel9}{\cancel95}=\frac15\\
\end{array}
$$

### 整段删除线效果

使用`\enclose{删除线效果}{字符}`来使用各种**整段删除线**效果：

$$
\begin{array}{rl}
\text{\enclose{horizontalstrike}{x+y}}&\enclose{horizontalstrike}{x+y}\\
\text{\enclose{verticalstrike}{\frac xy}}&\enclose{verticalstrike}{\frac xy}\\
\text{\enclose{updiagonalstrike}{x+y}}&\enclose{updiagonalstrike}{x+y}\\
\text{\enclose{downdiagonalstrike}{x+y}}&\enclose{downdiagonalstrike}{x+y}\\
\text{\enclose{horizontalstrike,updiagonalstrike}{x+y}}&\enclose{horizontalstrike,updiagonalstrike}{x+y}\\
\end{array}
$$

## 表格中的数学公式测试

### 希腊字母表格测试

| 语法        | 字母         | 语法        | 字母         | 语法        | 字母         |
| ----------- | ------------ | ----------- | ------------ | ----------- | ------------ |
| \alpha      | $\alpha$     | \beta       | $\beta$      | \gamma      | $\gamma$     |
| \delta      | $\delta$     | \epsilon    | $\epsilon$   | \zeta       | $\zeta$      |
| \eta        | $\eta$       | \theta      | $\theta$     | \iota       | $\iota$      |

### 运算符表格测试

| 输入      | 显示        | 输入        | 显示          | 输入      | 显示        |
| --------- | ----------- | ----------- | ------------- | --------- | ----------- |
| \pm       | $\pm$       | \times      | $\times$      | \div      | $\div$      |
| \bigodot  | $\bigodot$  | \bigotimes  | $\bigotimes$  | \bigoplus | $\bigoplus$ |
| \parallel | $\parallel$ | \equiv      | $\equiv$      | \approx   | $\approx$   |

### 集合运算符测试

| 输入      | 显示        | 输入      | 显示        | 输入     | 显示       |
| --------- | ----------- | --------- | ----------- | -------- | ---------- |
| \emptyset | $\emptyset$ | \subset   | $\subset$   | \supset  | $\supset$  |
| \bigcap   | $\bigcap$   | \bigcup   | $\bigcup$   | \in      | $\in$      |
| \notin    | $\notin$    | \setminus | $\setminus$ | \ni      | $\ni$      |

## 其他数学功能测试

### 基础测试

行内公式：$a^2 + b^2 = c^2$

块级公式：
$$E = mc^2$$

### 矩阵测试

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

### 分数测试

$$\frac{a}{b} + \cfrac{c}{d} = \dfrac{ad + bc}{bd}$$

### 符号测试

$$\sum_{i=1}^{n} x_i = \int_{a}^{b} f(x) dx$$

### 颜色测试

$$\color{red}{红色文字} \quad \color{blue}{蓝色文字} \quad \color{green}{绿色文字}$$

### 空格测试

$$a\!b \quad a\,b \quad a\;b \quad a\quad b \quad a\qquad b$$

## 配置信息

当前使用 **MathJax 3.x** 配置：
- ✅ cancel 扩展 (支持删除线)
- ✅ enclose 扩展 (支持边框删除线)  
- ✅ color 扩展 (支持颜色)
- ✅ KaTeX + MathJax 双引擎系统 