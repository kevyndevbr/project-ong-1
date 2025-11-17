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


// ==============================
// Integração de Textos Centralizados
// ==============================
// Script para popular textos do arquivo textos.js
// Mantém compatibilidade com código existente

// Carregar textos no DOM quando disponível
if (typeof TEXTOS !== 'undefined') {
  window.popularTextos = function() {
    // Navegação
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
      const linkText = item.textContent.trim();
      if (linkText.includes('Início')) item.textContent = TEXTOS.navegacao.inicio;
      else if (linkText.includes('Sobre')) item.textContent = TEXTOS.navegacao.sobre_nos;
      else if (linkText.includes('Projetos')) item.textContent = TEXTOS.navegacao.projetos;
      else if (linkText.includes('Contato')) item.textContent = TEXTOS.navegacao.contato;
    });
    
    // Rodapé
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.textContent = TEXTOS.rodape.copyright;
  };
  
  // Executar quando DOM está pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', popularTextos);
  } else {
    popularTextos();
  }
}
