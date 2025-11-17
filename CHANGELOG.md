# Histórico de Mudanças (CHANGELOG)

## [1.0.0] - 2025-11-17

### Adicionado
- Implementação completa de acessibilidade WCAG 2.1 AA
  - Suporte a navegação por teclado com :focus-visible
  - Modo de alto contraste (@media prefers-contrast: more)
  - Modo escuro acessível (@media prefers-color-scheme: dark)
  - Skip links para pular para conteúdo principal
  - Suporte a redução de movimento (@media prefers-reduced-motion)
- Minificação de CSS, JavaScript e HTML
  - style.css reduzido em 48%
  - script.js reduzido em 14%
  - HTML reduzido em média 15%
- Compressão de imagens (guia de configuração)
- Documentação completa de GitFlow e versionamento semântico
- Arquivo VERSION.md com versionamento semântico (1.0.0)

### Melhorado
- Estrutura semântica HTML otimizada
- Todas as cores atendem contraste mínimo 4.5:1
- Suporte a múltiplos navegadores e dispositivos
- Documentação clara de acessibilidade e otimização

### Segurança
- Validação de acessibilidade WCAG 2.1 AA completa
- Suporte a leitores de tela
- Navegação totalmente acessível via teclado


## [1.2.0] - 2025-11-17 - Organização de Textos

### Adicionado
- Arquivo `textos.js` com centralizador de todos os textos do site
- Estrutura organizada por seção: páginas, navegação, rodapé, formulários
- Arquivo `TEXTOS-ORGANIZACAO.md` com guia completo de uso
- Suporte para futura tradução/internacionalização
- Textos de acessibilidade (ARIA labels)

### Melhorias
- Centralizacao de textos facilita manutenção de conteúdo
- Melhora reutilização de mensagens entre páginas
- Consistencia garantida de textos em todo site
- Alinhado com critérios WCAG 2.1 AA

### Padrões
- Nomenclatura em camelCase com underscore
- Todos os textos em português brasileiro
- Organização por contexto (página/seção)
