@echo off
REM Windows 部署脚本
REM 用于在 Windows 系统上构建和部署 MkDocs 网站

echo 🚀 开始构建 MkDocs 网站...

REM 检查 Python 环境
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未找到 Python
    pause
    exit /b 1
)

REM 检查虚拟环境
if "%VIRTUAL_ENV%"=="" (
    echo ⚠️  警告: 未激活虚拟环境，建议创建虚拟环境：
    echo    python -m venv venv
    echo    venv\Scripts\activate
    echo.
)

REM 安装依赖
echo 📦 安装依赖...
pip install -r requirements.txt
if errorlevel 1 (
    echo ❌ 安装依赖失败
    pause
    exit /b 1
)

REM 清理旧的构建文件
echo 🧹 清理旧的构建文件...
if exist site rmdir /s /q site

REM 构建网站
echo 🔨 构建网站...
mkdocs build --verbose
if errorlevel 1 (
    echo ❌ 构建失败
    pause
    exit /b 1
)

echo ✅ 构建完成！
echo 📁 构建文件位于: site\
echo 🌐 要启动本地服务器，请运行: mkdocs serve
pause 