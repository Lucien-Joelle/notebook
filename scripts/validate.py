#!/usr/bin/env python3
"""
项目配置验证脚本
检查 MkDocs 配置和依赖是否正确
"""

import yaml
import sys
from pathlib import Path

def validate_config():
    """验证 mkdocs.yml 配置"""
    print("🔍 验证 MkDocs 配置...")
    
    config_file = Path("mkdocs.yml")
    if not config_file.exists():
        print("❌ mkdocs.yml 文件不存在")
        return False
    
    try:
        with open(config_file, 'r', encoding='utf-8') as f:
            # 读取原始文本来检查基本结构
            content = f.read()
            # 简单的关键字检查而不是完整的 YAML 解析
            if 'site_name:' not in content:
                print("❌ 配置缺少: site_name")
                return False
            if 'site_url:' not in content:
                print("❌ 配置缺少: site_url")
                return False
            if 'theme:' not in content:
                print("❌ 配置缺少: theme")
                return False
            if 'nav:' not in content:
                print("❌ 配置缺少: nav")
                return False
            
            print("✅ site_name: 已配置")
            print("✅ site_url: 已配置")
            print("✅ theme: 已配置")
            print("✅ nav: 已配置")
            
            # 检查插件
            if 'plugins:' in content:
                plugin_count = content.count('  - ') if 'plugins:' in content else 0
                print(f"✅ 插件配置: 已启用")
            
            return True
        
            
    except Exception as e:
        print(f"❌ 配置文件读取错误: {e}")
        return False

def validate_dependencies():
    """验证依赖文件"""
    print("\n🔍 验证依赖配置...")
    
    req_file = Path("requirements.txt")
    if not req_file.exists():
        print("❌ requirements.txt 文件不存在")
        return False
    
    with open(req_file, 'r') as f:
        deps = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    
    print(f"✅ 依赖包数量: {len(deps)}")
    for dep in deps:
        print(f"  - {dep}")
    
    return True

def validate_structure():
    """验证项目结构"""
    print("\n🔍 验证项目结构...")
    
    required_dirs = [
        "docs",
        "docs/assets", 
        "docs/stylesheets",
        "docs/javascripts",
        "overrides",
        ".github/workflows"
    ]
    
    for dir_path in required_dirs:
        if Path(dir_path).exists():
            print(f"✅ {dir_path}/")
        else:
            print(f"❌ {dir_path}/ 不存在")
            return False
    
    return True

if __name__ == "__main__":
    print("🚀 开始验证项目配置...\n")
    
    config_ok = validate_config()
    deps_ok = validate_dependencies()
    structure_ok = validate_structure()
    
    if all([config_ok, deps_ok, structure_ok]):
        print("\n🎉 所有验证通过！项目配置正确。")
        sys.exit(0)
    else:
        print("\n❌ 验证失败！请检查上述错误。")
        sys.exit(1) 