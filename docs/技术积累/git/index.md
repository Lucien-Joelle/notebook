## 📦 Git 版本控制

Git 是分布式版本控制系统，是现代软件开发不可或缺的工具。

## 📚 学习内容概览

### 🎓 基础学习
掌握Git的核心概念和基本操作，建立版本控制思维。

[📖 查看Git学习笔记](git_learn.md){ .md-button .md-button--primary }

**包含内容:**
- Git基本概念与原理
- 仓库初始化和配置
- 基本命令：add、commit、push、pull
- 分支管理：branch、merge、rebase
- 远程仓库操作

---

### 🚀 实际应用
在真实项目中应用Git，掌握团队协作和项目管理技巧。

[🔧 查看Git应用实践](git_apply.md){ .md-button .md-button--primary }

**包含内容:**
- 工作流程设计（Git Flow、GitHub Flow）
- 团队协作最佳实践
- 冲突解决策略
- 代码审查流程
- CI/CD集成

---

## 🛠️ 常用命令速查

### 基础操作
```bash
# 初始化仓库
git init

# 添加文件到暂存区
git add <file>
git add .

# 提交更改
git commit -m "提交信息"

# 查看状态
git status
git log
```

### 分支管理
```bash
# 创建并切换分支
git checkout -b <branch-name>

# 合并分支
git merge <branch-name>

# 删除分支
git branch -d <branch-name>
```

### 远程操作
```bash
# 添加远程仓库
git remote add origin <url>

# 推送到远程
git push origin <branch>

# 从远程拉取
git pull origin <branch>
```

---

## 📊 学习进度

| 技能模块 | 掌握程度 | 实践项目 |
|----------|----------|----------|
| 🎯 基础命令 | ✅ 熟练 | 个人项目 |
| 🌿 分支管理 | ✅ 熟练 | 多人协作 |
| 🔄 工作流程 | 🟡 良好 | 团队项目 |
| 🛠️ 高级技巧 | 🔵 学习中 | 开源贡献 |

---

## 💡 实践建议

!!! tip "最佳实践"
    1. **每天提交** - 养成频繁提交的习惯
    2. **清晰信息** - 写有意义的提交信息
    3. **分支策略** - 为不同功能创建独立分支
    4. **定期备份** - 及时推送到远程仓库

!!! warning "常见陷阱"
    - 避免在主分支直接开发
    - 不要提交敏感信息（密码、密钥）
    - 合并前先拉取最新代码
    - 解决冲突时要小心谨慎 