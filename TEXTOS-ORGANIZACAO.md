# Organização de Textos - ONG Sport Alternative

## Objetivo
Centralizar todos os textos do site em um arquivo único (`textos.js`) para facilitar:
- Manutenção e editar de conteúdo
- Futura tradução do site
- Consistência de mensagens
- Reutilização de textos

## Estrutura do Arquivo `textos.js`

### Organização Por Seção

```javascript
const TEXTOS = {
  paginas: {        // Seção de textos por página
    inicio: {},     // Página inicial
    sobre: {},      // Página "Sobre Nós"
    projetos: {},   // Página "Projetos"
    contato: {}     // Página "Contato"
  },
  navegacao: {},    // Textos de menu e navegação
  rodape: {},       // Textos do rodapé
  formularios: {},  // Labels e mensagens de formulários
  acessibilidade:{} // Textos para acessibilidade e ARIA
}
```

## Como Usar

### Em HTML (referenciar no script.js)
```javascript
// Usar no JavaScript
const titulo = TEXTOS.paginas.inicio.titulo;
const botao = TEXTOS.paginas.inicio.botao_doe;
```

### Exemplo de Uso no HTML
```html
<!-- Antes (texto inline) -->
<h1>Bem-vindo à Ong Sport Alternative</h1>

<!-- Depois (utilizar via JavaScript) -->
<h1 id="titulo-principal"></h1>

<script>
  document.getElementById('titulo-principal').textContent = TEXTOS.paginas.inicio.titulo;
</script>
```

## Padrões de Nomeclatura

- **camelCase** para chaves: `botao_saiba_mais`, `missao_descricao`
- **Textos em PT-BR**: Todos em português brasileiro
- **Sem caracteres especiais nas chaves**: Usar `_` em vez de `-`
- **Organizado por contexto**: Agrupado por página/seção

## Benefícios

✅ **Manutenção Simplificada**: Editar um texto em um só lugar
✅ **Tradução Fácil**: Criar variantes como `textos-en.js`, `textos-es.js`
✅ **Reutilização**: Mesmo texto pode ser usado em múltiplas páginas
✅ **Consistência**: Garante que o mesmo texto seja igual em todo site
✅ **Alinhado com WCAG**: Facilita gestão de mensagens de acessibilidade

## Próximos Passos

1. ✅ Criar `textos.js` com textos centralizados
2. ⏳ Integrar em `index.html`, `cadastro.html` e `projetos.html`
3. ⏳ Atualizar `script.js` para usar `TEXTOS`
4. ⏳ Documentar em `CHANGELOG.md`
