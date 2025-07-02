# 📚 Lucien-Joelle's Notebook

[![Build Status](https://github.com/lucien-joelle/notebook/workflows/Deploy%20MkDocs%20Site/badge.svg)](https://github.com/lucien-joelle/notebook/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?style=flat&logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)

> 🌟 个人学习笔记和知识管理系统，使用 MkDocs Material 构建

## 🚀 在线访问

**访问地址：** [https://lucien-joelle.github.io/notebook](https://lucien-joelle.github.io/notebook)

## 📋 项目特色

- ✨ **现代化设计** - 基于 Material Design 的美观界面
- 🔍 **全文搜索** - 快速找到你需要的内容
- 📱 **响应式布局** - 完美适配各种设备
- 🌓 **明暗主题** - 支持明暗模式切换
- 📊 **数学公式** - 完整的 LaTeX 数学公式支持
- 🎨 **代码高亮** - 多语言语法高亮
- 🔄 **自动部署** - GitHub Actions 自动构建部署

## 📖 内容结构

```
📚 技术积累
├── 📝 编程语言
│   ├── Python
│   └── JavaScript
├── 🧮 算法
├── 🗄️ 数据库
├── 🌐 网络
└── 🤖 AI

🛠️ 工具使用
├── Git
├── VS Code
└── Docker

📋 项目记录
📖 读书笔记
📝 设计指南
```

## 🛠️ 本地开发

### 快速开始

```bash
# 克隆项目
git clone https://github.com/lucien-joelle/notebook.git
cd notebook

# 设置环境（Linux/Mac）
chmod +x scripts/setup.sh
./scripts/setup.sh

# 或者手动设置
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate    # Windows
pip install -r requirements.txt

# 启动开发服务器
mkdocs serve
# 或使用脚本
./scripts/serve.sh        # Linux/Mac
scripts\serve-windows.bat # Windows
```

### 构建部署

```bash
# 构建静态文件
mkdocs build

# 或使用脚本
./scripts/build.sh        # Linux/Mac
scripts\deploy-windows.bat # Windows
```

## 📁 项目结构

```
notebook/
├── docs/                   # 文档源文件
│   ├── assets/            # 静态资源
│   ├── javascripts/       # 自定义 JS
│   ├── stylesheets/       # 自定义 CSS
│   ├── 学习笔记/           # 学习笔记
│   ├── 工具使用/           # 工具使用
│   ├── 项目记录/           # 项目记录
│   └── 读书笔记/           # 读书笔记
├── overrides/             # 模板覆写
│   ├── partials/          # 部分模板
│   └── main.html          # 主模板
├── scripts/               # 实用脚本
│   ├── build.sh           # 构建脚本
│   ├── serve.sh           # 开发服务器
│   └── setup.sh           # 环境设置
├── templates/             # 文档模板
├── .github/               # GitHub Actions
├── mkdocs.yml             # MkDocs 配置
├── requirements.txt       # Python 依赖
└── README.md              # 项目说明
```

## 🎨 主要功能

### Markdown 扩展

- ✅ **提示框** - 支持多种类型的提示信息
- 📊 **表格** - 美观的表格样式
- 🔗 **链接** - 自动新标签页打开外部链接
- 📋 **任务列表** - 美化的复选框样式
- 🎯 **代码块** - 行号和复制功能
- 📈 **图表** - Mermaid 图表支持
- 🔤 **缩写** - 自动缩写定义

### 自定义组件

- 🎴 **卡片组件** - 美观的内容卡片
- 🌈 **渐变效果** - 丰富的渐变色彩
- ⚡ **加载动画** - 平滑的页面加载效果
- 🔝 **返回顶部** - 便捷的页面导航

## 🤝 贡献指南

欢迎贡献内容和改进建议！

### 贡献方式

1. **Fork** 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 **Pull Request**

### 写作规范

- 📝 使用清晰的标题层次结构
- 🎨 适当使用 emoji 增强可读性
- 📋 保持列表格式的一致性
- 🔗 外部链接使用新标签页打开
- ✅ 使用提示框突出重要信息

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)

## 🙏 致谢

- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) - 优秀的文档主题
- [IsshikiHugh's Notebook](https://github.com/IsshikiHugh/notebook) - 项目参考和灵感来源
- 所有贡献者和内容创作者

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给它一个 Star！**

Made with ❤️ by [Lucien-Joelle](https://github.com/lucien-joelle)

</div> 
