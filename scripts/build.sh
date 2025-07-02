#!/bin/bash

# 本地构建脚本
# 用于在本地构建和预览 MkDocs 网站

set -e

echo "🚀 开始构建 MkDocs 网站..."

# 检查 Python 环境
if ! command -v python3 &> /dev/null; then
    echo "❌ 错误: 未找到 Python3"
    exit 1
fi

# 检查虚拟环境
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  警告: 未激活虚拟环境，建议创建虚拟环境："
    echo "   python3 -m venv venv"
    echo "   source venv/bin/activate  # Linux/Mac"
    echo "   venv\\Scripts\\activate     # Windows"
    echo ""
fi

# 安装依赖
echo "📦 安装依赖..."
pip install -r requirements.txt

# 清理旧的构建文件
echo "🧹 清理旧的构建文件..."
if [ -d "site" ]; then
    rm -rf site
fi

# 构建网站
echo "🔨 构建网站..."
mkdocs build --verbose

echo "✅ 构建完成！"
echo "📁 构建文件位于: site/"
echo "🌐 要启动本地服务器，请运行: mkdocs serve" 