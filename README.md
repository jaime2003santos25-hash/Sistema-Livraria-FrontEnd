# 📚 Sistema de Livraria - Frontend
![preview](./src/Screenshots/preview.png)

Um aplicativo web moderno e responsivo para gerenciamento e exploração de uma livraria digital. Desenvolvido com React e Vite para uma experiência rápida e intuitiva.

## 🎯 Sobre o Projeto

Sistema de Livraria Frontend é uma aplicação de e-commerce de livros que permite aos usuários:
- Navegar pelo catálogo de livros disponíveis
- Explorar categorias de livros
- Visualizar carrossel de livros destacados
- Entrar em contato com o suporte
- Consultar informações da livraria

## 🛠️ Tecnologias Utilizadas

- **React 19.2.6** - Biblioteca JavaScript para construção de interfaces
- **Vite 8.0.12** - Build tool moderno e rápido
- **React Router DOM 7.15.1** - Roteamento SPA
- **Axios 1.16.1** - Cliente HTTP para requisições
- **ESLint 10.3.0** - Linter para qualidade de código
- **CORS 2.8.6** - Middleware para requisições cross-origin

## 📁 Estrutura do Projeto

```
src/
├── Pages/              # Páginas principais da aplicação
│   ├── Home.jsx       # Página inicial
│   ├── Livros.jsx     # Página de catálogo de livros
│   ├── Categoria.jsx  # Página de categorias
│   └── Contato.jsx    # Página de contato
├── Components/        # Componentes reutilizáveis
│   ├── Button/        # Componentes de navegação
│   │   ├── Header.js  # Cabeçalho da página
│   │   └── Footer.js  # Rodapé da página
│   └── CarouselBooks/ # Carrossel de livros destacados
├── Services/          # Serviços de negócio
│   └── livroservice.js # Serviço de livros
├── Api/              # Configuração de API
│   └── Api.js        # Cliente API
├── Data/             # Dados estáticos
│   └── livros.js     # Base de dados de livros
├── App.jsx           # Componente raiz
└── main.jsx          # Ponto de entrada
```

## 🚀 Como Usar

### Instalação de Dependências

```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Gera arquivos otimizados na pasta `dist/`

### Preview de Produção

```bash
npm run preview
```

Visualiza o build de produção localmente

### Linting

Para verificar a qualidade do código:

```bash
npm run lint
```

## 📋 Funcionalidades

- ✅ Página inicial com destaques
- ✅ Catálogo completo de livros
- ✅ Categorização de livros
- ✅ Carrossel de produtos destacados
- ✅ Página de contato
- ✅ Navegação fluida entre páginas
- ✅ Integração com API backend

## 📸 Capturas de Tela

Adicione apenas as imagens desejadas em `docs/screenshots/` para que apareçam na descrição do projeto no GitHub.

As imagens dos livros da pasta `src/assets/images/` foram separadas para não entrarem nos commits principais.

## 🔗 Rotas da Aplicação

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/livros` | Catálogo de livros |
| `/categoria` | Categorias de livros |
| `/contato` | Página de contato |

## 📝 Notas

- Certifique-se de que o servidor backend está configurado e acessível
- CORS está configurado para permitir requisições entre domínios
- O projeto utiliza ESLint para manter a qualidade do código

---

**Desenvolvido com ❤️ usando React e Vite**
