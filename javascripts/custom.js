// 自定义JavaScript增强功能

document.addEventListener('DOMContentLoaded', function() {
    
    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 代码块复制功能增强
    document.querySelectorAll('pre > code').forEach(function(codeBlock) {
        const pre = codeBlock.parentNode;
        const wrapper = document.createElement('div');
        wrapper.className = 'code-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '📋';
        copyButton.title = '复制代码';
        wrapper.appendChild(copyButton);
        
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(codeBlock.textContent).then(function() {
                copyButton.innerHTML = '✅';
                copyButton.title = '已复制!';
                setTimeout(function() {
                    copyButton.innerHTML = '📋';
                    copyButton.title = '复制代码';
                }, 2000);
            });
        });
    });
    
    // 添加阅读进度指示器
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // 返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = '返回顶部';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 图片懒加载和点击放大
    document.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
            } else {
                document.querySelectorAll('img.enlarged').forEach(function(enlargedImg) {
                    enlargedImg.classList.remove('enlarged');
                });
                this.classList.add('enlarged');
            }
        });
    });
    
    // 自动为外部链接添加图标
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        if (!link.hostname.includes(window.location.hostname)) {
            link.classList.add('external-link');
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            if (!link.querySelector('.external-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-icon';
                icon.innerHTML = ' 🔗';
                link.appendChild(icon);
            }
        }
    });
    
    // 添加标题锚点链接
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(heading) {
        if (heading.id) {
            const anchor = document.createElement('a');
            anchor.className = 'header-anchor';
            anchor.href = '#' + heading.id;
            anchor.innerHTML = ' 🔗';
            anchor.title = '链接到此标题';
            heading.appendChild(anchor);
        }
    });
    
    console.log('🎉 Lucien-Joelle\'s Notebook 加载完成！');
}); 