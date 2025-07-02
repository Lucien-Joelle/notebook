#!/bin/bash

# 项目环境设置脚本
# 用于快速设置开发环境

set -e

echo "🎯 设置 Lucien-Joelle's Notebook 开发环境..."

# 检查 Python
if ! command -v python3 &> /dev/null; then
    echo "❌ 错误: 未找到 Python3，请先安装 Python 3.8 或更高版本"
    exit 1
fi

python_version=$(python3 -c "import sys; print(f'{sys.version_info.major}.{sys.version_info.minor}')")
echo "✅ 找到 Python $python_version"

# 创建虚拟环境
if [ ! -d "venv" ]; then
    echo "📦 创建虚拟环境..."
    python3 -m venv venv
else
    echo "✅ 虚拟环境已存在"
fi

# 激活虚拟环境
echo "🔥 激活虚拟环境..."
source venv/bin/activate

# 升级 pip
echo "⬆️  升级 pip..."
pip install --upgrade pip

# 安装依赖
echo "📚 安装项目依赖..."
pip install -r requirements.txt

# 验证安装
echo "🔍 验证安装..."
if mkdocs --version &> /dev/null; then
    echo "✅ MkDocs 安装成功: $(mkdocs --version)"
else
    echo "❌ MkDocs 安装失败"
    exit 1
fi

echo ""
echo "🎉 环境设置完成！"
echo ""
echo "📝 接下来的步骤："
echo "  1. 激活虚拟环境: source venv/bin/activate"
echo "  2. 启动开发服务器: ./scripts/serve.sh"
echo "  3. 或直接运行: mkdocs serve"
echo ""
echo "🌐 开发服务器将在 http://127.0.0.1:8000 启动" 