// MathJax配置已在mathjax.js中定义，避免重复配置

// Mermaid配置和错误处理
document$.subscribe(() => {
  // 等待DOM加载完成后初始化Mermaid
  if (typeof mermaid !== 'undefined') {
    // 重新配置Mermaid
    mermaid.initialize({
      startOnLoad: false, // 手动控制初始化
      theme: document.body.getAttribute('data-md-color-scheme') === 'slate' ? 'dark' : 'default',
      themeVariables: {
        fontFamily: '"Source Code Pro", "Courier New", monospace',
        fontSize: '14px'
      },
      flowchart: {
        htmlLabels: true,
        curve: 'basis'
      },
      // 添加错误处理
      logLevel: 'error',
      securityLevel: 'loose'
    });

    // 手动处理所有mermaid元素
    const mermaidElements = document.querySelectorAll('.mermaid');
    
    mermaidElements.forEach((element, index) => {
      const content = element.textContent || element.innerText;
      
      // 检查内容是否为空或无效
      if (!content || content.trim().length === 0) {
        console.warn('发现空的Mermaid代码块，跳过渲染');
        element.style.display = 'none';
        return;
      }
      
      // 检查是否包含基本的mermaid语法
      const hasValidSyntax = content.includes('graph') || 
                            content.includes('flowchart') || 
                            content.includes('sequenceDiagram') || 
                            content.includes('classDiagram') || 
                            content.includes('stateDiagram') || 
                            content.includes('journey') || 
                            content.includes('gitgraph') || 
                            content.includes('pie') ||
                            content.includes('gantt');
      
      if (!hasValidSyntax) {
        console.warn('可能无效的Mermaid内容，跳过渲染:', content.substring(0, 50) + '...');
        return;
      }
      
      // 为每个元素创建唯一ID
      const id = `mermaid-${index}-${Date.now()}`;
      element.id = id;
      
      try {
        // 渲染Mermaid图表
        mermaid.render(id + '-svg', content).then(({svg}) => {
          element.innerHTML = svg;
        }).catch(error => {
          console.error('Mermaid渲染失败:', error);
          element.innerHTML = `<div style="color: #ff6b6b; font-family: monospace; padding: 1rem; border: 1px solid #ff6b6b; border-radius: 4px;">
            <strong>⚠️ Mermaid渲染错误</strong><br>
            <small>${error.message || '未知错误'}</small>
          </div>`;
        });
      } catch (error) {
        console.error('Mermaid处理异常:', error);
        element.innerHTML = `<div style="color: #ff6b6b; font-family: monospace; padding: 1rem; border: 1px solid #ff6b6b; border-radius: 4px;">
          <strong>⚠️ Mermaid处理失败</strong><br>
          <small>请检查语法是否正确</small>
        </div>`;
      }
    });
  }
}); 