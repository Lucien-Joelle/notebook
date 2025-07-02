# Git 使用指南

Git是目前最流行的分布式版本控制系统，是开发者必备的工具。

## 基础概念

### 工作区域
- **工作目录**：实际编辑文件的地方
- **暂存区**：临时存储修改的地方
- **本地仓库**：存储项目历史的地方
- **远程仓库**：团队协作的共享仓库

### 基本工作流程
```mermaid
graph LR
    A[工作目录] -->|git add| B[暂存区]
    B -->|git commit| C[本地仓库]
    C -->|git push| D[远程仓库]
    D -->|git pull| A
```

## 常用命令

### 初始化和配置
```bash
# 初始化仓库
git init

# 配置用户信息
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 查看配置
git config --list
```

### 基本操作
```bash
# 查看状态
git status

# 添加文件到暂存区
git add filename.txt
git add .  # 添加所有文件

# 提交更改
git commit -m "提交信息"

# 查看提交历史
git log --oneline
```

### 分支操作
=== "创建和切换分支"
    
    ```bash
    # 创建新分支
    git branch feature-new
    
    # 切换分支
    git checkout feature-new
    
    # 创建并切换到新分支
    git checkout -b feature-new
    
    # 查看所有分支
    git branch -a
    ```

=== "合并分支"
    
    ```bash
    # 切换到主分支
    git checkout main
    
    # 合并feature分支
    git merge feature-new
    
    # 删除已合并的分支
    git branch -d feature-new
    ```

### 远程操作
```bash
# 添加远程仓库
git remote add origin https://github.com/username/repo.git

# 推送到远程仓库
git push -u origin main

# 从远程仓库拉取
git pull origin main

# 克隆仓库
git clone https://github.com/username/repo.git
```

## 高级技巧

### 撤销操作
```bash
# 撤销工作目录的修改
git checkout -- filename.txt

# 撤销暂存区的修改
git reset HEAD filename.txt

# 撤销最后一次提交
git reset --soft HEAD~1  # 保留修改
git reset --hard HEAD~1  # 丢弃修改
```

### 查看差异
```bash
# 查看工作目录和暂存区的差异
git diff

# 查看暂存区和最后一次提交的差异
git diff --cached

# 查看两个提交之间的差异
git diff commit1 commit2
```

### 标签管理
```bash
# 创建标签
git tag v1.0.0

# 创建带注释的标签
git tag -a v1.0.0 -m "版本1.0.0发布"

# 推送标签到远程
git push origin v1.0.0
git push origin --tags  # 推送所有标签
```

## 最佳实践

!!! success "Git最佳实践"
    
    1. **提交信息规范**
       ```
       type(scope): subject
       
       body
       
       footer
       ```
       
       示例：
       ```
       feat(auth): 添加用户登录功能
       
       - 实现用户名密码验证
       - 添加JWT token生成
       - 集成OAuth2.0登录
       
       Closes #123
       ```
    
    2. **分支命名规范**
       - `feature/功能名` - 新功能开发
       - `bugfix/问题描述` - 修复Bug
       - `hotfix/紧急修复` - 紧急修复
       - `release/版本号` - 发布准备
    
    3. **提交频率**
       - 小步快跑，频繁提交
       - 每个提交都应该是完整的功能点
       - 避免大型提交，难以追踪问题

### .gitignore 配置
```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# 系统文件
.DS_Store
Thumbs.db

# 日志文件
*.log

# 数据库
*.db
*.sqlite3
```

## 故障排除

### 常见问题
1. **合并冲突**
   ```bash
   # 查看冲突文件
   git status
   
   # 手动解决冲突后
   git add .
   git commit -m "解决合并冲突"
   ```

2. **误提交敏感信息**
   ```bash
   # 从历史记录中移除文件
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch sensitive-file.txt' \
   --prune-empty --tag-name-filter cat -- --all
   ```

## 学习资源

- [Pro Git 书籍](https://git-scm.com/book/zh/v2) - Git官方文档
- [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN) - 交互式Git学习
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf) - Git命令速查表

---

Tags: #Git #版本控制 #协作开发 