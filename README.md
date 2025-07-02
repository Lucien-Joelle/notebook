# 个人学习笔记框架

基于 MkDocs Material 构建的个人学习笔记和知识管理系统。

## 🌟 特性

- 📝 **Markdown 支持** - 使用 Markdown 编写内容
- 🔍 **全文搜索** - 快速查找笔记内容  
- 🎨 **代码高亮** - 支持多种编程语言语法高亮
- 📊 **图表支持** - 内置 Mermaid 图表渲染
- 🌓 **主题切换** - 支持亮色和暗色主题
- 📱 **响应式设计** - 适配各种设备屏幕
- 🚀 **快速部署** - 一键部署到 GitHub Pages
- 📖 **数学公式** - 支持 LaTeX 数学公式渲染

## 🚀 快速开始

### 环境要求
- Python 3.7+
- pip

### 安装依赖
```bash
# 克隆项目
git clone https://github.com/yourusername/web_notes.git
cd web_notes

# 安装依赖
pip install -r requirements.txt
```

### 本地开发
```bash
# 启动开发服务器
mkdocs serve

# 在浏览器中访问 http://127.0.0.1:8000
```

### 构建部署
```bash
# 构建静态网站
mkdocs build

# 部署到 GitHub Pages
mkdocs gh-deploy
```

## 📁 项目结构

```
web_notes/
├── docs/                    # 文档源文件
│   ├── index.md            # 首页
│   ├── 学习笔记/           # 学习笔记分类
│   ├── 项目记录/           # 项目记录
│   ├── 读书笔记/           # 读书笔记  
│   ├── 工具使用/           # 工具使用指南
│   ├── javascripts/        # 自定义 JavaScript
│   └── stylesheets/        # 自定义 CSS
├── mkdocs.yml              # MkDocs 配置文件
├── requirements.txt        # Python 依赖
└── README.md              # 项目说明
```

## ✏️ 内容编写

### 添加新页面
1. 在 `docs/` 目录下创建 `.md` 文件
2. 在 `mkdocs.yml` 的 `nav` 部分添加导航链接
3. 使用 Markdown 语法编写内容

### 内容分类
- **学习笔记** - 编程语言、算法、计算机基础等
- **项目记录** - 个人项目开发过程和经验
- **读书笔记** - 技术书籍和论文阅读心得  
- **工具使用** - 开发工具的使用技巧和配置

### Markdown 扩展功能

#### 提示框
```markdown
!!! note "标题"
    这是一个提示框

!!! warning "警告"
    这是一个警告提示框
```

#### 代码块
```markdown
​```python
def hello_world():
    print("Hello, World!")
​```
```
#### 数学公式
```markdown
行内公式：$E = mc^2$

块级公式：
$$
\frac{d}{dx}\left( \int_{a}^{x} f(u)\,du\right) = f(x)
$$
```

#### 标签页
```markdown
=== "标签1"
    内容1

=== "标签2"
    内容2
```

## 🎨 自定义

### 修改主题颜色
在 `mkdocs.yml` 中修改 `theme.palette` 配置：

```yaml
theme:
  palette:
    primary: indigo  # 主色调
    accent: indigo   # 强调色
```

### 添加自定义样式
在 `docs/stylesheets/extra.css` 中添加自定义 CSS。

### 添加自定义脚本
在 `docs/javascripts/` 目录中添加 JavaScript 文件。

## 📚 使用建议

1. **内容组织**：按照主题分类组织内容，便于查找
2. **命名规范**：使用清晰的文件和文件夹命名
3. **标签使用**：为文章添加标签，方便分类和搜索
4. **定期维护**：及时更新和完善笔记内容
5. **版本控制**：使用 Git 管理内容版本

## 🔧 配置说明

### MkDocs 配置
主要配置文件为 `mkdocs.yml`，包含：
- 站点信息配置
- 主题和插件配置  
- 导航结构定义
- Markdown 扩展配置

### 插件说明
- `search` - 搜索功能
- `tags` - 标签支持
- `git-revision-date-localized` - 显示文件修改时间

## 📄 许可证

[MIT License](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

---

如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！ 
