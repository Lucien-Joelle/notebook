@echo off
REM Windows 开发服务器脚本
REM 用于启动 MkDocs 开发服务器

echo 🌐 启动 MkDocs 开发服务器...

REM 检查 Python 环境
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未找到 Python
    pause
    exit /b 1
)

REM 检查虚拟环境
if "%VIRTUAL_ENV%"=="" (
    echo ⚠️  警告: 未激活虚拟环境
)

REM 检查依赖
pip show mkdocs >nul 2>&1
if errorlevel 1 (
    echo 📦 安装依赖...
    pip install -r requirements.txt
)

REM 启动开发服务器
echo 🚀 启动开发服务器...
echo 📝 服务器将在 http://127.0.0.1:8000 启动
echo 💡 按 Ctrl+C 停止服务器
echo.

mkdocs serve --dev-addr=127.0.0.1:8000 --livereload 