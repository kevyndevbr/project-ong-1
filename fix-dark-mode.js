const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');
// Substituir a parte vazia do addEventListener por código que funciona
const fixed = content.replace(
  /addEventListener\('click', \(\) => \{ const isDark = localStorage\.getItem\('darkMode'\) === 'true'; \}\);/g,
  "addEventListener('click', () => { document.body.classList.toggle('dark-mode'); localStorage.setItem('darkMode', document.body.classList.contains('dark-mode')); });"
);
fs.writeFileSync('script.js', fixed);
console.log('Dark mode fix applied successfully!');
