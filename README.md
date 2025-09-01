# Test Minimals POC

## Descrição

Esta é uma Prova de Conceito (POC) criada para estudar e entender como utilizar e separar os arquivos necessários do **Minimals.cc** em um projeto React com TypeScript. O objetivo é demonstrar a implementação de componentes e temas do Minimals utilizando Material-UI (MUI) como base.

## 🎯 Objetivo

-   Compreender a estrutura e organização dos componentes do Minimals.cc
-   Separar os arquivos essenciais do Minimals em uma estrutura modular
-   Demonstrar a integração com Material-UI
-   Criar uma base reutilizável para futuros projetos

## 🌐 Demonstração

🔗 **[Ver projeto online](https://test-minimals-poc.vercel.app)**

## 🏗️ Estrutura do Projeto

```
src/
├── minimals/                 # Todos os arquivos relacionados ao Minimals
│   ├── components/          # Componentes do Minimals
│   │   ├── animate/         # Componentes de animação
│   │   ├── custom-popover/  # Popover customizado
│   │   ├── file-thumbnail/  # Miniaturas de arquivo
│   │   ├── hook-form/       # Componentes para React Hook Form
│   │   ├── iconify/         # Integração com Iconify
│   │   ├── label/           # Componentes de label
│   │   ├── loading-screen/  # Tela de carregamento
│   │   ├── logo/            # Componente de logo
│   │   ├── nav-section/     # Seções de navegação
│   │   ├── progress-bar/    # Barra de progresso
│   │   ├── scrollbar/       # Scrollbar customizada
│   │   ├── search-not-found/# Componente para busca sem resultados
│   │   ├── settings/        # Configurações de tema
│   │   └── svg-color/       # Ícones SVG coloridos
│   ├── hooks/               # Hooks customizados
│   ├── theme/               # Sistema de tema baseado no MUI
│   │   ├── options/         # Opções de tema (presets, contraste, etc.)
│   │   └── overrides/       # Sobrescritas de componentes MUI
│   │       ├── components/  # Personalizações de componentes específicos
│   │       │   ├── accordion.tsx      # Sobrescritas do Accordion
│   │       │   ├── alert.tsx          # Sobrescritas do Alert
│   │       │   ├── appbar.tsx         # Sobrescritas do AppBar
│   │       │   ├── autocomplete.tsx   # Sobrescritas do Autocomplete
│   │       │   ├── avatar.tsx         # Sobrescritas do Avatar
│   │       │   ├── backdrop.tsx       # Sobrescritas do Backdrop
│   │       │   ├── badge.tsx          # Sobrescritas do Badge
│   │       │   ├── breadcrumbs.tsx    # Sobrescritas do Breadcrumbs
│   │       │   ├── button-group.tsx   # Sobrescritas do ButtonGroup
│   │       │   ├── button.tsx         # Sobrescritas do Button
│   │       │   ├── card.tsx           # Sobrescritas do Card
│   │       │   ├── checkbox.tsx       # Sobrescritas do Checkbox
│   │       │   ├── chip.tsx           # Sobrescritas do Chip
│   │       │   ├── css-baseline.tsx   # Sobrescritas do CssBaseline
│   │       │   ├── data-grid.tsx      # Sobrescritas do DataGrid
│   │       │   ├── date-picker.tsx    # Sobrescritas do DatePicker
│   │       │   ├── dialog.tsx         # Sobrescritas do Dialog
│   │       │   ├── drawer.tsx         # Sobrescritas do Drawer
│   │       │   ├── fab.tsx            # Sobrescritas do Fab
│   │       │   ├── list.tsx           # Sobrescritas do List
│   │       │   ├── loading-button.tsx # Sobrescritas do LoadingButton
│   │       │   ├── menu.tsx           # Sobrescritas do Menu
│   │       │   ├── pagination.tsx     # Sobrescritas do Pagination
│   │       │   ├── paper.tsx          # Sobrescritas do Paper
│   │       │   ├── popover.tsx        # Sobrescritas do Popover
│   │       │   ├── progress.tsx       # Sobrescritas do Progress
│   │       │   ├── radio.tsx          # Sobrescritas do Radio
│   │       │   ├── rating.tsx         # Sobrescritas do Rating
│   │       │   ├── select.tsx         # Sobrescritas do Select
│   │       │   ├── skeleton.tsx       # Sobrescritas do Skeleton
│   │       │   ├── slider.tsx         # Sobrescritas do Slider
│   │       │   ├── stepper.tsx        # Sobrescritas do Stepper
│   │       │   ├── svg-icon.tsx       # Sobrescritas do SvgIcon
│   │       │   ├── switch.tsx         # Sobrescritas do Switch
│   │       │   ├── table.tsx          # Sobrescritas do Table
│   │       │   ├── tabs.tsx           # Sobrescritas do Tabs
│   │       │   ├── textfield.tsx      # Sobrescritas do TextField
│   │       │   ├── timeline.tsx       # Sobrescritas do Timeline
│   │       │   ├── toggle-button.tsx  # Sobrescritas do ToggleButton
│   │       │   ├── tooltip.tsx        # Sobrescritas do Tooltip
│   │       │   ├── tree-view.tsx      # Sobrescritas do TreeView
│   │       │   └── typography.tsx     # Sobrescritas do Typography
│   │       ├── default-props.tsx # Props padrão para componentes
│   │       └── index.ts          # Exportações centralizadas
│   └── utils/               # Utilitários
├── components/              # Componentes específicos do projeto
├── pages/                   # Páginas da aplicação
│   ├── auth/jwt/           # Páginas de autenticação
│   └── dashboard/          # Páginas do dashboard
└── theme/                   # Configurações de tema do projeto
```

## 🚀 Tecnologias Utilizadas

-   **React 19** - Biblioteca para interface de usuário
-   **TypeScript** - Superset tipado do JavaScript
-   **Vite** - Build tool e dev server
-   **Material-UI v5** - Biblioteca de componentes
-   **Emotion** - CSS-in-JS para estilização
-   **React Hook Form** - Gerenciamento de formulários
-   **Iconify** - Biblioteca de ícones
-   **Lodash** - Utilitários JavaScript

## 📦 Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd test-minimals
```

2. Instale as dependências:

```bash
pnpm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
pnpm dev
```

## 🎨 Sistema de Tema

O sistema de tema está organizado em `src/minimals/theme/` e inclui:

-   **Palette**: Cores primárias, secundárias e variações
-   **Typography**: Configurações de tipografia
-   **Shadows**: Sombras customizadas
-   **Overrides**: Sobrescritas de componentes MUI
-   **Presets**: Temas pré-definidos (default, cyan, purple, blue, orange, red)

### Uso do ThemeProvider

```tsx
import ThemeProvider from './minimals/theme';

function App() {
    return <ThemeProvider>{/* Sua aplicação aqui */}</ThemeProvider>;
}
```

## 🔧 Configurações

### Alias de Importação

O projeto está configurado para usar o alias `@` que aponta para a pasta `src`:

```typescript
// vite.config.ts
resolve: {
  alias: {
    '@': resolve(__dirname, './src'),
  },
}
```

### Estrutura de Componentes

Os componentes do Minimals seguem uma estrutura modular:

-   Cada componente tem seu próprio diretório
-   Exportações organizadas através de arquivos `index.ts`
-   Tipagens TypeScript bem definidas

## 📝 Exemplos de Uso

### Componente de Login

```tsx
import Login from '@/pages/auth/jwt/login';
```

### Hook Form

```tsx
import { RHFTextField } from '@/minimals/components/hook-form';
```

### Iconify

```tsx
import { Iconify } from '@/minimals/components/iconify';
```

## 🎯 Próximos Passos

-   [ ] Implementar mais páginas de exemplo
-   [ ] Adicionar testes unitários
-   [ ] Documentar cada componente individualmente
-   [ ] Criar storybook para visualização de componentes
-   [ ] Otimizar bundle size

## 📚 Recursos Úteis

-   [Minimals.cc](https://minimals.cc/)
-   [Material-UI Documentation](https://mui.com/material-ui/all-components/)
-   [React Hook Form](https://react-hook-form.com/)
-   [Iconify](https://iconify.design/)

## 📄 Licença

Este projeto é uma POC para estudos e não possui licença comercial.

---

**Nota**: Esta POC foi criada para fins educacionais e de estudo do sistema Minimals.cc. Todos os componentes na pasta `src/minimals/` são baseados no template original.

```

```
