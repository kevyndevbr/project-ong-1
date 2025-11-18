# 🏆 ONG Sport Alternative - Website

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.2.0-brightgreen.svg)](VERSION.md)
[![WCAG Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-brightgreen.svg)](ACCESSIBILITY-AUDIT.md)
[![HTML/CSS/JS Minified](https://img.shields.io/badge/optimized-100%25-brightgreen.svg)](OPTIMIZATION-SUMMARY.md)

## 🏑 Visão Geral

**ONG Sport Alternative** é um website profissional desenvolvido em **HTML5, CSS3 e JavaScript puro**, apresentando uma organização sem fins lucrativos dedicada a promover o esporte como ferramenta de inclusão social e desenvolvimento comunitário.

### Características Principais

✅ **Responsível e Moderno** - Design mobile-first com suporte completo a dispositivos  
✅ **Acessível (WCAG 2.1 AA)** - Conforme com padrões internacionais de acessibilidade  
✅ **Modo Escuro** - Alternãncia automática e manual entre modos claro/escuro  
✅ **Textos Centralizados** - Sistema de gestão de conteúdo simplificado  
✅ **Otimizado** - Minificação de HTML/CSS/JS e compressão de imagens  
✅ **Versionado** - Histórico de commits com padrão Semantic Versioning  


## 📊 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Funcionalidades](#-funcionalidades)
- [Páginas do Site](#-páginas-do-site)
- [Acessibilidade](#-acessibilidade)
- [Otimização e Performance](#-otimização-e-performance)
- [Sistema de Textos](#-sistema-de-textos)
- [Git Workflow](#-git-workflow)
- [Como Contribuir](#-como-contribuir)
- [Licença](#-licença)
- [Contato](#-contato)

## 🆘 Descrição do Projeto

Este projeto apresenta um website responsivo e acessível para a **ONG Sport Alternative**, uma organização dedicada a transformar vidas através do esporte e da inclusão social.

### Objetivo
Desenvolver uma plataforma web moderna que:
- Apresente os valores e missão da organização
- Facilite o cadastro de voluntários
- Seja inteiramente acessível (WCAG 2.1 AA)
- Funcione perfeitamente em dispositivos móveis
- Ofereça experiência otimizada e rápida

## 💻 Tecnologias

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design responsivo com Flexbox e Grid
- **JavaScript (ES6+)** - Interatividade sem dependências externas

### DevOps & Ferramentas
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Codespaces** - Desenvolvimento em nuvem
- **Git** - Controle de versão com Semantic Versioning
- **Live Server** - Servidor de desenvolvimento local

### Padrões & Qualidade
- **WCAG 2.1 AA** - Acessibilidade
- **Semantic Versioning** - Versionamento
- **Semantic Commit** - Histórico de commits organizado
- **Mobile-First** - Design responsível


## 📁 Estrutura do Projeto

```
project-ong-1/
├── index.html              # Página principal
├── cadastro.html           # Página de cadastro de voluntários
├── projetos.html           # Página de projetos
├── style.css               # Estilos (minificado)
├── script.js               # Lógica JavaScript (minificado)
├── textos.js               # Sistema centralizado de textos
├── Imagens/                # Pasta de imagens comprimidas
├── README.md               # Este arquivo
├── CHANGELOG.md            # Histórico de versões
├── VERSION.md              # Versão atual
├── ACCESSIBILITY-AUDIT.md  # Relatório de acessibilidade
├── OPTIMIZATION-SUMMARY.md # Summário de otimizações
├── TEXTOS-ORGANIZACAO.md   # Documentação do sistema de textos
├── GITFLOW-STRATEGY.md     # Estratégia de GitFlow
├── IMAGE-COMPRESSION-SETUP.md # Setup de compressão de imagens
└── .gitignore              # Arquivos ignorados pelo Git
```

## 🚀 Como Executar

### Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/project-ong-1.git
cd project-ong-1
```

2. **Abra com Live Server**
- Use a extensão "Live Server" no VS Code
- Ou execute: `npx live-server`
- Acesse: `http://localhost:8080`

### Online

**GitHub Pages**: https://kevyndevbr.github.io/project-ong-1/

**Codespaces** (desenvolvimento):
```bash
# Acesso automaticamente quando abrir em Codespaces
```

## ✨ Funcionalidades

### Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|------------|
| Início | `/index.html` | Página principal com visão geral |
| Sobre | `/index.html#sobre` | Informações sobre a organização |
| Projetos | `/projetos.html` | Lista de programas |
| Cadastro | `/cadastro.html` | Formulário para voluntários |
| Contato | `/index.html#contato` | Seção de contato |

### Recursos Principais

- **Modo Escuro/Claro** - Alternador com persistência no localStorage
- **Menu Responsivo** - Navigation adaptado para mobile
- **Formulário Funcional** - Cadastro de voluntários com validação
- **Modal & Toasts** - Feedback visual interativo
- **Smooth Scroll** - Navegação suave entre seções


## ♾️ Acessibilidade

### Conforme com WCAG 2.1 AA

- **Contraste de Texto**: 4.5:1 (AA) em todos os textos
- **Navegação por Teclado**: Toda funcionalidade disponível via teclado
- **Estrutura Semântica**: HTML5 semântico para leitores de tela  
- **ARIA Labels**: Descrições para elementos interativos
- **Modo Escuro Acessível**: Contrastes otimizados (13.87:1)
- [Ver Relatório Completo](ACCESSIBILITY-AUDIT.md)

## ⚡ Otimização

- **HTML**: Reduzido para 4-8 KB
- **CSS**: Comprimido sem impacto visual
- **JavaScript**: Otimizado sem bibliotecas externas
- **Imagens**: Comprimidas com redução de 60-80%
- **Tempo de Carregamento**: Mobile < 2s | Desktop < 500ms

---

**Última Atualização**: 17 de novembro de 2025  
**Versão**: 1.2.0  
**Status**: 📆 Producão

## ⚡ Otimização e Performance

O projeto implementa múltiplas estratégias de otimização para garantir máxima performance:

- **Compressão de Imagens**: Imagens otimizadas com redução de até 70% em tamanho
- **Minificação de CSS**: Arquivo style.css comprimido para reduzir download
- **Lazy Loading**: Carregamento responsivo de elementos da página
- **Cache**: Implementação de estratégia de cache para assets estáticos
- **PageSpeed Insights**: Performance score otimizado para desktop e mobile

> Veja detalhes em [OPTIMIZATION-SUMMARY.md](./OPTIMIZATION-SUMMARY.md)

## 📚 Sistema de Textos Centralizado

Todos os textos do site estão organizados em `textos.js` para facilitar manutenção e localização:

```javascript
const textos = {
  paginas: { /* textos das páginas */ },
  navegacao: { /* textos da navegação */ },
  rodape: { /* textos do rodapé */ },
  formularios: { /* textos dos formulários */ },
  acessibilidade: { /* textos de acessibilidade */ }
}
```

> Consulte [TEXTOS-ORGANIZACAO.md](./TEXTOS-ORGANIZACAO.md) para documentação completa

## 🚀 Git Workflow

O projeto segue um fluxo de commits semántico:

- **feat**: Novas funcionalidades
- **fix**: Correção de bugs
- **docs**: Atualizações de documentação
- **style**: Mudanças de estilo (sem alterar lógica)
- **refactor**: Refatoração de código
- **chore**: Tarefas de manutenção
- **test**: Adição ou atualização de testes

### Histórico de Commits Principais

```
3d5f4c1 - feat: Implementar sistema de textos centralizado
9a8c2f5 - fix: Corrigir dark mode em todas as páginas
f2d1e8c - docs: Adicionar CHANGELOG e documentação
```

## 🤝 Como Contribuir

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças com mensagens semánticas (`git commit -m 'feat: Adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes

- Mantenha conformidade com WCAG 2.1 AA
- Garanta responsividade em todos os dispositivos
- Teste em navegadores modernos (Chrome, Firefox, Safari, Edge)
- Atualize documentação relevante
- Siga o padrão de commits semánticos

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

## 👋 Contato

**ONG Sport Alternative**
- 📧 Email: contato@ongsportalternative.org
- 🌐 Website: https://kevyndevbr.github.io/project-ong-1/
- 📅 GitHub: [kevyndevbr](https://github.com/kevyndevbr)

---

**Desenvolvido com ❤️ para ONG Sport Alternative**

Última atualização: Dezembro de 2025 | Versão: 1.2.0

