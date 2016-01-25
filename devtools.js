fetch('/devtools.css')
  .then((res) => res.text())
  .then((css) => chrome.devtools.panels.applyStyleSheet(css))
  .catch((err) => console.error(err.stack));
