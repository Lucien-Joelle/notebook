## 📦 Git 版本控制

Git 是分布式版本控制系统，是现代软件开发不可或缺的工具。

## 📚 学习内容概览

### 🎓 基础学习
掌握Git的核心概念和基本操作，建立版本控制思维。

[📖 查看Git学习笔记](git_learn.md){ .md-button .md-button--primary }

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