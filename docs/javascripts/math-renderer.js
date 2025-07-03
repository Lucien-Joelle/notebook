// 智能数学渲染器 - 优先使用KaTeX，特殊命令使用MathJax
(function() {
    'use strict';
    
    // 配置选项
    const mathConfig = {
        preferKaTeX: true,  // 优先使用KaTeX
        enableFallback: true,  // 启用MathJax作为备用
        debug: false  // 调试模式
    };
    
    // 需要MathJax渲染的特殊命令列表
    const mathJaxOnlyCommands = [
        '\\cancel', '\\bcancel', '\\xcancel', '\\cancelto',
        '\\enclose', '\\require', 
        '\\sideset', '\\xlongequal',
        '\\overparen', '\\underparen'
    ];
    
    // 检测是否包含需要MathJax的命令
    function needsMathJax(text) {
        return mathJaxOnlyCommands.some(command => text.includes(command));
    }
    
    // 查找页面中的数学表达式
    function findMathExpressions() {
        const expressions = [];
        const delimiters = [
            {left: '$$', right: '$$', display: true},
            {left: '\\[', right: '\\]', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false}
        ];
        
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            const text = node.textContent;
            
            for (const delimiter of delimiters) {
                let startIndex = 0;
                while (true) {
                    const start = text.indexOf(delimiter.left, startIndex);
                    if (start === -1) break;
                    
                    const end = text.indexOf(delimiter.right, start + delimiter.left.length);
                    if (end === -1) break;
                    
                    const mathText = text.substring(start, end + delimiter.right.length);
                    const content = text.substring(start + delimiter.left.length, end);
                    
                    expressions.push({
                        node: node,
                        text: mathText,
                        content: content,
                        display: delimiter.display,
                        needsMathJax: needsMathJax(content)
                    });
                    
                    startIndex = end + delimiter.right.length;
                }
            }
        }
        
        return expressions;
    }
    
    // KaTeX渲染器
    function renderWithKaTeX() {
        if (typeof renderMathInElement === 'undefined') {
            console.warn('KaTeX not loaded, falling back to MathJax');
            return false;
        }
        
        try {
            // 先检查是否有需要MathJax的表达式
            const expressions = findMathExpressions();
            const mathJaxExpressions = expressions.filter(expr => expr.needsMathJax);
            
            if (mathJaxExpressions.length > 0 && mathConfig.debug) {
                console.log(`Found ${mathJaxExpressions.length} expressions requiring MathJax:`, 
                           mathJaxExpressions.map(e => e.content));
            }
            
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '\\[', right: '\\]', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false}
                ],
                ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                ignoredClasses: [],
                errorCallback: function(msg, err) {
                    if (mathConfig.debug) {
                        console.warn('KaTeX render error:', msg, err);
                    }
                },
                preProcess: function(math) {
                    // 跳过包含特殊命令的表达式
                    if (needsMathJax(math)) {
                        return null; // 返回null表示跳过此表达式
                    }
                    return math;
                },
                strict: false,
                trust: true
            });
            
            if (mathConfig.debug) {
                console.log('Math rendered with KaTeX (excluding MathJax-only expressions)');
            }
            return true;
        } catch (error) {
            console.warn('KaTeX rendering failed:', error);
            return false;
        }
    }
    
    // MathJax渲染器
    function renderWithMathJax() {
        if (typeof MathJax === 'undefined') {
            console.error('MathJax not loaded');
            return false;
        }
        
        try {
            if (MathJax.typesetPromise) {
                MathJax.typesetPromise();
            } else if (MathJax.Hub && MathJax.Hub.Queue) {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            }
            
            if (mathConfig.debug) {
                console.log('Math rendered with MathJax');
            }
            return true;
        } catch (error) {
            console.error('MathJax rendering failed:', error);
            return false;
        }
    }
    
    // 混合渲染策略
    function renderMathHybrid() {
        try {
            // 首先用KaTeX渲染基础表达式
            if (mathConfig.preferKaTeX && typeof renderMathInElement !== 'undefined') {
                renderWithKaTeX();
            }
            
            // 然后用MathJax渲染所有表达式（包括特殊命令）
            if (typeof MathJax !== 'undefined') {
                setTimeout(() => {
                    renderWithMathJax();
                }, 100); // 稍微延迟以避免冲突
            }
            
            if (mathConfig.debug) {
                console.log('Hybrid rendering completed');
            }
            return true;
        } catch (error) {
            console.error('Hybrid rendering failed:', error);
            return false;
        }
    }
    
    // 主渲染函数
    function renderMath() {
        // 使用混合渲染策略
        const success = renderMathHybrid();
        
        if (!success) {
            console.error('Math rendering failed');
        }
    }
    
    // 初始化
    function init() {
        // 等待页面完全加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', renderMath);
        } else {
            renderMath();
        }
        
        // 支持Material for MkDocs的动态加载
        if (typeof document$ !== 'undefined') {
            document$.subscribe(() => {
                // 稍微延迟以确保内容已加载
                setTimeout(renderMath, 100);
            });
        }
    }
    
    // 暴露配置接口
    window.mathRendererConfig = mathConfig;
    
    // 启动
    init();
    
})(); 