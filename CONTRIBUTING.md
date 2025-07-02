# 🤝 贡献指南

感谢您对 Lucien-Joelle's Notebook 项目的兴趣！我们欢迎任何形式的贡献。

## 📝 贡献方式

### 1. 报告问题

如果您发现了 bug 或有改进建议：

1. 检查 [Issues](https://github.com/lucien-joelle/notebook/issues) 是否已有相关问题
2. 如果没有，创建新的 Issue
3. 提供清楚的问题描述和重现步骤

### 2. 提交代码

1. **Fork** 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add some amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 **Pull Request**

### 3. 改进文档

文档改进同样重要：

- 修正错别字和语法错误
- 改进现有内容的清晰度
- 添加新的学习笔记
- 完善示例代码

## 📋 写作规范

### Markdown 规范

- 使用 **中文** 作为主要语言
- 合理使用 **emoji** 增强可读性 🎨
- 保持标题层次结构清晰
- 使用提示框突出重要信息

### 代码规范

```python
# Python 示例
def example_function():
    """
    函数说明应该清晰明了
    """
    pass
```

### 提示框使用

```markdown
!!! tip "💡 提示"
    这是一个有用的提示

!!! warning "⚠️ 注意"
    这是需要注意的内容

!!! danger "🚨 警告"
    这是危险操作警告
```

### 链接规范

- 外部链接使用 `{target="_blank"}` 在新标签页打开
- 内部链接使用相对路径

## 🏗️ 开发环境

### 环境要求

- Python 3.8+
- Git

### 本地设置

```bash
# 克隆项目
git clone https://github.com/lucien-joelle/notebook.git
cd notebook

# 设置虚拟环境
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate    # Windows

# 安装依赖
pip install -r requirements.txt

# 启动开发服务器
mkdocs serve
```

### 测试构建

```bash
# 构建静态网站
mkdocs build

# 检查构建结果
ls site/
```

## 📂 项目结构说明

```
docs/
├── assets/              # 静态资源
├── javascripts/         # 自定义 JavaScript
├── stylesheets/         # 自定义 CSS
├── 学习笔记/             # 技术学习笔记
│   ├── 编程语言/
│   ├── 算法/
│   ├── 数据库/
│   └── ...
├── 工具使用/             # 工具使用指南
├── 项目记录/             # 项目开发记录
└── 读书笔记/             # 读书心得体会
```

## 🎯 内容贡献指南

### 学习笔记

- 结构清晰，层次分明
- 包含实际代码示例
- 提供相关资源链接
- 注明学习来源

### 工具使用

- 包含安装配置步骤
- 提供常用命令示例
- 说明使用场景
- 分享实用技巧

### 项目记录

- 记录开发过程和思路
- 总结遇到的问题和解决方案
- 分享经验教训
- 提供项目链接

## 📝 提交信息格式

使用清晰的提交信息：

```
类型(范围): 简短描述

详细描述（可选）

相关 Issue: #123
```

### 提交类型

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建工具或辅助工具的变动

### 示例

```
feat(learning): 添加 Python 装饰器学习笔记

- 详细介绍装饰器的原理和使用方法
- 提供多个实际应用示例
- 添加相关练习题

Closes #15
```

## 🔍 代码审查

所有 Pull Request 都会经过审查：

- 检查代码质量和规范
- 验证功能是否正常
- 确认文档是否完整
- 测试构建是否成功

## 📞 联系方式

如有任何问题，可以通过以下方式联系：

- 创建 [Issue](https://github.com/lucien-joelle/notebook/issues)
- 发送邮件：[your-email@example.com](mailto:your-email@example.com)

## 🙏 感谢

感谢所有贡献者的参与和支持！

---

**Happy Contributing! 🎉** 