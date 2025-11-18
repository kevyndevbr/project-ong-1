window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('dark-mode-btn');
  if (!btn) {
    console.error('Dark mode button not found');
    return;
  }
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) document.body.classList.add('dark-mode');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
});
