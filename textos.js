// ==============================
// Arquivo de Textos Centralizado
// ==============================
// Este arquivo concentra todos os textos do site
// facilitando manutenção e tradução futura

const TEXTOS = {
  // ============ Página Principal ============
  paginas: {
    inicio: {
      titulo: 'Bem-vindo à Ong Sport Alternative',
      subtitulo: 'Transformando vidas através do esporte e inclusão social.',
      botao_saiba_mais: 'Saiba Mais',
      botao_doe: 'Doe Agora'
    },
    sobre: {
      titulo: 'Sobre Nós',
      descricao: 'A Ong Sport Alternative é dedicada a promover o esporte como ferramenta de inclusão social e desenvolvimento comunitário.',
      missao: 'Missão',
      missao_descricao: 'Nossa missão é proporcionar oportunidades para crianças e jovens em situação de vulnerabilidade através de programas esportivos e educacionais.'
    },
    projetos: {
      titulo: 'Projetos',
      descricao: 'Conheça nossos programas e iniciativas'
    },
    contato: {
      titulo: 'Contato',
      descricao: 'Entre em contato conosco'
    }
  },
  
  // ============ Navegação ============
  navegacao: {
    inicio: 'Início',
    sobre_nos: 'Sobre Nós',
    projetos: 'Projetos',
    contato: 'Contato',
    cadastro: 'Cadastro'
  },
  
  // ============ Rodapé ============
  rodape: {
    copyright: '© 2025 Ong Sport Alternative. Todos os direitos reservados.',
    direitos: 'Todos os direitos reservados.'
  },
  
  // ============ Formulários ============
  formularios: {
    cadastro: {
      titulo: 'Cadastro de Voluntário',
      nome: 'Nome Completo',
      email: 'Email',
      telefone: 'Telefone',
      mensagem: 'Mensagem',
      enviar: 'Enviar',
      sucesso: 'Cadastro realizado com sucesso!',
      erro: 'Erro ao processar. Tente novamente.'
    }
  },
  
  // ============ Acessibilidade ============
  acessibilidade: {
    alternar_modo_escuro: 'Alternar modo escuro',
    menu_navegacao: 'Menu de Navegação',
    fechar_modal: 'Fechar janela modal'
  }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEXTOS;
}
