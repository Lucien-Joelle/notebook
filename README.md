# 📚 Lucien-Joelle's Notebook

[![GitHub Actions Status](https://github.com/lucien-joelle/notebook/actions/workflows/deploy-simple.yml/badge.svg)](https://github.com/lucien-joelle/notebook/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 项目简介

这是一个基于 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 的个人学习笔记和知识管理系统。项目结构参考了 IsshikiHugh 的优秀设计，具有简洁清晰的架构和丰富的功能特性。

**🚀 在线访问**: [https://lucien-joelle.github.io/notebook/](https://lucien-joelle.github.io/notebook/)

## 📋 功能特性

### 🎨 界面设计
- 💜 Material Design 主题，支持明暗双模式
- 📱 完全响应式设计，兼容各种设备
- 🔍 智能搜索功能，支持中文搜索
- 🎯 导航锚点和目录追踪
- ✨ 代码高亮和一键复制
- 🖼️ 图片灯箱效果

### ⚡ 技术特性
- 📝 支持 Markdown 扩展语法
- 🧮 MathJax 数学公式渲染
- 📊 Mermaid 图表支持
- 📅 Git 修订日期自动显示
- 🗜️ 自动压缩优化
- 🔧 自定义宏和代码片段

### 🚀 自动化部署
- GitHub Actions 自动构建和部署
- 推送到 main 分支后自动更新网站
- 支持 PR 构建测试

## 🏗️ 项目结构

```
notebook/
├── 📁 docs/                    # 文档源文件
│   ├── 📁 学习笔记/             # 技术学习笔记
│   │   ├── 📁 编程语言/
│   │   ├── 📁 算法/
│   │   ├── 📁 数据库/
│   │   ├── 📁 网络/
│   │   └── 📁 AI/
│   ├── 📁 工具使用/             # 工具使用指南
│   ├── 📁 项目记录/             # 项目开发记录
│   ├── 📁 读书笔记/             # 读书心得
│   ├── 📁 assets/               # 静态资源
│   ├── 📁 stylesheets/          # 自定义样式
│   └── 📁 javascripts/          # 自定义脚本
├── 📁 overrides/                # 主题覆盖文件
├── 📁 includes/                 # 包含文件和代码片段
├── 📁 templates/                # 文档模板
├── 📁 scripts/                  # 构建和部署脚本
├── 📁 .github/workflows/        # GitHub Actions 配置
├── 📄 mkdocs.yml               # MkDocs 配置文件
├── 📄 requirements.txt         # Python 依赖
└── 📄 README.md                # 项目说明
```

## 🚀 快速开始

### 环境要求

- Python 3.8+
- Git

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/lucien-joelle/notebook.git
   cd notebook
   ```

2. **安装依赖**
   ```bash
   pip install -r requirements.txt
   ```

3. **本地预览**
   ```bash
   # Linux/Mac
   ./scripts/serve.sh
   
   # Windows
   scripts\serve-windows.bat
   
   # 或者直接使用 MkDocs
   mkdocs serve --dev-addr=127.0.0.1:8001
   ```

4. **访问网站**
   
   打开浏览器访问: http://127.0.0.1:8001/notebook/

### 构建部署

```bash
# Linux/Mac
./scripts/build.sh

# Windows  
scripts\deploy-windows.bat

# 或者直接使用 MkDocs
mkdocs build --clean
```

## ✍️ 内容编写

### 添加新页面

1. 在 `docs/` 目录下创建 `.md` 文件
2. 在 `mkdocs.yml` 的 `nav` 部分添加导航链接
3. 使用模板文件快速开始：
   - `templates/学习笔记模板.md`
   - `templates/项目记录模板.md`

### Markdown 扩展语法

项目支持丰富的 Markdown 扩展：

- **代码块**: 支持语法高亮和行号
- **数学公式**: 使用 `$$ $$` 或 `\[ \]`
- **告示框**: `!!! note`, `!!! warning`, `!!! tip` 等
- **标签页**: 使用 `=== "标签名"`
- **任务列表**: `- [x] 已完成` `- [ ] 未完成`
- **图表**: 支持 Mermaid 流程图

### 示例代码

```python
def hello_world():
    """示例 Python 代码"""
    print("Hello, World! 🌍")
```

$$
E = mc^2
$$

!!! tip "小贴士"
    使用 `Ctrl+K` 可以快速搜索内容！

## 🔧 配置说明

### 主要配置文件

- **mkdocs.yml**: MkDocs 主配置文件
- **requirements.txt**: Python 依赖列表
- **overrides/**: 主题自定义覆盖
- **.github/workflows/**: GitHub Actions 配置

### 自定义功能

- **自动化脚本**: `scripts/` 目录包含各平台的构建脚本
- **主题覆盖**: `overrides/` 目录自定义页面模板
- **样式定制**: `docs/stylesheets/extra.css` 自定义样式
- **脚本增强**: `docs/javascripts/custom.js` 自定义功能

## 🔍 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 验证配置
   python scripts/validate.py
   
   # 清理重建
   mkdocs build --clean --verbose
   ```

2. **样式问题**
   - 检查 `docs/stylesheets/extra.css`
   - 确认 `mkdocs.yml` 中的 `extra_css` 配置

3. **数学公式不显示**
   - 确认 MathJax 配置正确
   - 检查网络连接（CDN 资源）

4. **GitHub Actions 部署失败**
   - 检查仓库的 Pages 设置
   - 确认 Actions 权限配置
   - 查看 Actions 日志详情

### 调试技巧

```bash
# 详细构建日志
mkdocs build --verbose

# 检查配置文件
mkdocs config

# 验证项目结构
python scripts/validate.py
```

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [MkDocs](https://www.mkdocs.org/) - 静态站点生成器
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - Material Design 主题
- [IsshikiHugh](https://github.com/IsshikiHugh) - 项目架构设计参考

---

<div align="center">
  <strong>📚 记录知识，分享智慧 ✨</strong><br>
  如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！
</div> 
