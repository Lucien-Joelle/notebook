#!/bin/bash

# 本地开发服务器脚本
# 用于启动 MkDocs 开发服务器并自动重新加载

set -e

echo "🌐 启动 MkDocs 开发服务器..."

# 检查 Python 环境
if ! command -v python3 &> /dev/null; then
    echo "❌ 错误: 未找到 Python3"
    exit 1
fi

# 检查虚拟环境
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  警告: 未激活虚拟环境"
fi

# 检查依赖
if ! pip show mkdocs &> /dev/null; then
    echo "📦 安装依赖..."
    pip install -r requirements.txt
fi

# 启动开发服务器
echo "🚀 启动开发服务器..."
echo "📝 服务器将在 http://127.0.0.1:8000 启动"
echo "💡 按 Ctrl+C 停止服务器"
echo ""

mkdocs serve --dev-addr=127.0.0.1:8000 --livereload 