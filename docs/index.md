# 欢迎来到 Lucien-Joelle's Notebook

<div class="card card-gradient">
  <h3>🎓 关于这个学习笔记系统</h3>
  <p>这是一个基于 MkDocs Material 构建的现代化个人学习笔记系统，致力于创造最佳的学习和知识管理体验。</p>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <div class="card">
    <h4>📝 优雅写作</h4>
    <p>支持 Markdown 语法，让您专注于内容创作而非格式排版。</p>
  </div>
  <div class="card">
    <h4>🔍 智能搜索</h4>
    <p>全文搜索功能，快速定位您需要的知识点和内容。</p>
  </div>
  <div class="card">
    <h4>🎨 代码高亮</h4>
    <p>支持多种编程语言的语法高亮和代码块展示。</p>
  </div>
  <div class="card">
    <h4>📊 图表支持</h4>
    <p>内置 Mermaid 图表渲染，轻松创建流程图和关系图。</p>
  </div>
  <div class="card">
    <h4>🌓 主题切换</h4>
    <p>支持亮色和暗色主题，适应不同的使用环境。</p>
  </div>
  <div class="card">
    <h4>📱 响应式设计</h4>
    <p>完美适配各种设备屏幕，随时随地学习。</p>
  </div>
</div>

## 🚀 快速开始

### 1. 环境准备
```bash
# 安装依赖
pip install -r requirements.txt

# 启动开发服务器
mkdocs serve

# 构建静态站点
mkdocs build
```

### 2. 如何添加新内容

1. **创建新的Markdown文件**：在 `docs/` 目录下创建 `.md` 文件
2. **更新导航**：在 `mkdocs.yml` 的 `nav` 部分添加新页面
3. **使用模板**：参考现有页面的格式和结构

## 📚 内容分类

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div class="card">
    <h3>💻 学习笔记</h3>
    <p><strong>编程语言</strong>：Python、JavaScript 等语言深度学习</p>
    <p><strong>算法与数据结构</strong>：核心算法实现和数据结构解析</p>
    <p><strong>计算机基础</strong>：操作系统、网络、数据库等基础知识</p>
    <a href="学习笔记/" class="md-button">开始学习 →</a>
  </div>
  
  <div class="card">
    <h3>🚀 项目记录</h3>
    <p>记录个人项目的完整开发过程，包括技术选型、架构设计、问题解决和经验总结。</p>
    <br>
    <a href="项目记录/" class="md-button">查看项目 →</a>
  </div>
  
  <div class="card">
    <h3>📖 读书笔记</h3>
    <p>技术书籍、学术论文的深度阅读笔记，记录核心观点和个人思考。</p>
    <br>
    <a href="读书笔记/" class="md-button">阅读笔记 →</a>
  </div>
  
  <div class="card">
    <h3>🛠️ 工具使用</h3>
    <p>各种开发工具、效率工具的使用技巧、配置方法和最佳实践分享。</p>
    <br>
    <a href="工具使用/" class="md-button">学习工具 →</a>
  </div>
</div>

## 🎯 特色功能

### 代码块
支持多种编程语言的代码高亮：

```python
def hello_world():
    print("Hello, World!")
    return "成功运行"
```

### 数学公式
支持 LaTeX 数学公式渲染：

$$E = mc^2$$

行内公式：$f(x) = ax + b$

### 提示框
!!! note "笔记"
    这是一个笔记提示框

!!! warning "警告" 
    这是一个警告提示框

!!! success "成功"
    这是一个成功提示框

### 任务列表
- [x] 完成框架搭建
- [x] 添加基础配置
- [ ] 完善内容模板
- [ ] 添加更多示例

## 📝 写作指南

1. 使用清晰的标题层级
2. 适当使用提示框突出重点
3. 代码块要标明语言类型
4. 善用表格和列表组织信息
5. 添加适当的标签便于检索

---

*最后更新：{{ git.short_commit }} - {{ git.date }}*

---
🚀 **网站状态**：已更新美化主题，如果您看到这条信息，说明部署成功！
