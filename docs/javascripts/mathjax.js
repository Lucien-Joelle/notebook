window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"], ["$", "$"]],
      displayMath: [["\\[", "\\]"], ["$$", "$$"]],
      processEscapes: true,
      processEnvironments: true,
      packages: {'[+]': ['base', 'ams', 'noerrors', 'noundefined', 'cancel', 'enclose', 'verb', 'tags', 'newcommand', 'unicode']},
      macros: {
        sideset: ["\\mathop{\\mathop{#3}\\limits^{#1}_{#2}}", 3]
      }
    },
    options: {
      ignoreHtmlClass: "tex2jax_ignore",
      processHtmlClass: ".*"
    },
    loader: {
      load: ['[tex]/ams', '[tex]/cancel', '[tex]/enclose', '[tex]/verb', '[tex]/tags', '[tex]/newcommand', '[tex]/unicode']
    },
    startup: {
      ready: () => {
        MathJax.startup.defaultReady();
        MathJax.startup.promise.then(() => {
          console.log('MathJax initial typesetting complete');
        });
      }
    }
  };
  
  document$.subscribe(() => { 
    MathJax.typesetPromise()
  })