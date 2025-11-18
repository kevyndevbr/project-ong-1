const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');
// Substituir corretamente: btn.addEventListener('click', () => { const isDark = ... } );
const fixed = content.replace(
  /btn\.addEventListener\('click', \(\) => \{ const isDark = localStorage\.getItem\('darkMode'\) === 'true'; \}\);/g,
  "btn.addEventListener('click', () => { document.body.classList.toggle('dark-mode'); localStorage.setItem('darkMode', document.body.classList.contains('dark-mode')); });"
);
fs.writeFileSync('script.js', fixed);
console.log('Dark mode fix applied successfully (attempt 2)!');
