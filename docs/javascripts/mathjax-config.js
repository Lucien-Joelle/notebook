window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      '[+]': ['cancel', 'enclose', 'color', 'bbox', 'html', 'boldsymbol']
    }
  },
  loader: {
    load: ['[tex]/cancel', '[tex]/enclose', '[tex]/color', '[tex]/bbox', '[tex]/html', '[tex]/boldsymbol']
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  }
}; 