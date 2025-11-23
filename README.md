# 🐕 Dogs - Rede Social para Cachorros

Projeto desenvolvido durante o curso de React da [Origamid](https://www.origamid.com/).

Uma rede social completa onde usuários podem compartilhar fotos de seus cachorros, comentar em publicações e visualizar estatísticas de acesso.

## 🚀 Tecnologias

- **React** 19.2.0
- **React Router DOM** 7.9.6 - Navegação e rotas
- **Vite** - Build tool e dev server
- **Victory.js** - Gráficos e visualizações
- **CSS Modules** - Estilização com escopo local

## ✨ Funcionalidades

### 📱 Autenticação

- Login e logout de usuários
- Criação de conta
- Recuperação de senha
- Rotas protegidas

### 📸 Feed de Fotos

- Visualização de fotos em grid responsivo
- Modal de foto com detalhes
- Sistema de comentários
- Infinite scroll

### 👤 Perfil do Usuário

- Upload de novas fotos
- Galeria de fotos do usuário
- Exclusão de fotos próprias
- Visualização de perfis públicos

### 📊 Estatísticas

- Gráfico de pizza com visualizações por foto
- Gráfico de barras com total de acessos
- Carregamento lazy dos gráficos
- Interface responsiva

## 🎨 Recursos Técnicos

- **Custom Hooks**

  - `useFetch` - Requisições HTTP
  - `useForm` - Validação de formulários
  - `useMedia` - Media queries responsivas

- **Context API**

  - `UserContext` - Gerenciamento de estado global do usuário

- **Componentes Reutilizáveis**

  - Input com validação
  - Botões estilizados
  - Loading states
  - Error handling
  - Image com lazy loading

- **Otimizações**
  - Lazy loading de componentes
  - Code splitting
  - Imagens otimizadas

## 📁 Estrutura do Projeto

```
src/
├── Components/
│   ├── Feed/          # Feed de fotos
│   ├── Forms/         # Inputs e botões
│   ├── Helper/        # Componentes auxiliares
│   ├── Login/         # Autenticação
│   └── Photo/         # Detalhes e comentários
├── User/              # Área do usuário
├── Contexts/          # Context API
├── Hooks/             # Custom hooks
└── Assets/            # Imagens e SVGs
```

## 🛠️ Como executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎓 Aprendizados

Este projeto foi desenvolvido como parte do curso de React da Origamid e contempla:

- React Hooks avançados
- React Router DOM com rotas aninhadas
- Autenticação e autorização
- Consumo de APIs REST
- Gerenciamento de estado global
- CSS Modules
- Componentização
- Boas práticas de código
- Otimização de performance

---

Desenvolvido por mim (Erli Junior) durante o curso React Completo da Origamid 🚀
