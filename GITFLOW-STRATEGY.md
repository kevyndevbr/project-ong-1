# Estratégia GitFlow - Projeto ONG Sport

## 1. Estrutura de Branches

### Branch Principal (main)
- Código em produção
- Tags de versão: v1.0.0, v1.1.0, etc.
- Apenas merge de release branches
- Protegida contra push direto

### Branch de Desenvolvimento (develop)
- Base para desenvolvimento
- Integração contínua de features
- Branch padrão para pull requests
- Sempre pode estar instável

### Branches de Feature (feature/*)
- Criação: git checkout -b feature/nome develop
- Merge: para develop (via pull request)
- Exemplo: feature/modo-escuro, feature/acessibilidade

### Branches de Release (release/*)
- Criação: git checkout -b release/v1.0.0 develop
- Merge: para main (com tag) e develop
- Apenas bug fixes e atualizando versão

### Branches de Hotfix (hotfix/*)
- Criação: git checkout -b hotfix/v1.0.1 main
- Merge: para main e develop
- Para correções críticas em produção

## 2. Versionamento Semântico (Semantic Versioning)

Formato: MAJOR.MINOR.PATCH (ex: 1.0.0)

### MAJOR (X.0.0)
- Mudanças incompatíveis com versão anterior
- Exemplo: Reescrita completa da arquitetura

### MINOR (0.X.0)
- Novas funcionalidades compatíveis
- Exemplo: Modo escuro adicionado

### PATCH (0.0.X)
- Correções de bugs
- Exemplo: Corrigir contraste WCAG

## 3. Commits Semânticos (Conventional Commits)

### Tipos de Commit
- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Documentação
- **style**: Formatação de código
- **refactor**: Refatoração
- **perf**: Melhoria de performance
- **chore**: Tarefas de build/dependências
- **ci**: Configuração CI/CD

### Exemplos
```bash
git commit -m "feat: adicionar modo escuro"
git commit -m "fix: corrigir contraste WCAG 2.1"
git commit -m "docs: atualizar README"
git commit -m "chore: bump version to 1.0.0"
```

## 4. Workflow de Release

### Criação de Release
```bash
# 1. Criar branch de release
git checkout -b release/v1.0.0 develop

# 2. Atualizar versão
echo "1.0.0" > VERSION.md

# 3. Commit de release
git commit -m "chore: release v1.0.0"

# 4. Fazer merge para main
git checkout main
git merge --no-ff release/v1.0.0

# 5. Criar tag
git tag -a v1.0.0 -m "Release v1.0.0"

# 6. Merge para develop
git checkout develop
git merge --no-ff release/v1.0.0

# 7. Push
git push origin main develop --tags
```

