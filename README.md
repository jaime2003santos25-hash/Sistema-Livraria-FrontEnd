# 📚 Sistema de Livraria - Frontend

Um aplicativo web moderno e responsivo para gerenciamento e exploração de uma livraria digital. Desenvolvido com React e Vite para uma experiência rápida e intuitiva.

## 🎯 Sobre o Projeto

Sistema de Livraria Frontend é uma aplicação de e-commerce de livros que permite aos usuários:
- 📖 Navegar pelo catálogo de **9 livros** disponíveis
- 🏷️ Explorar **4 categorias** principais de livros
- 🎠 Visualizar carrossel de livros destacados
- 📧 Entrar em contato com o suporte via **Email** ou **WhatsApp**
- 💻 Consultar informações da livraria

## 🛠️ Tecnologias Utilizadas

- **React 19.2.6** - Biblioteca JavaScript para construção de interfaces
- **Vite 8.0.12** - Build tool moderno e rápido
- **React Router DOM 7.15.1** - Roteamento SPA
- **Axios 1.16.1** - Cliente HTTP para requisições
- **React Icons 5.0.0+** - ✨ Biblioteca de ícones (Feather e Font Awesome)
- **ESLint 10.3.0** - Linter para qualidade de código
- **CORS 2.8.6** - Middleware para requisições cross-origin

## 📁 Estrutura do Projeto

```
src/
├── 🔌 Api/
│   └── Api.js                 # Cliente API com Axios
├── 🖼️ Assets/
│   └── Images/                # 6 capas de livros
├── ⚙️ Components/
│   ├── Button/
│   │   ├── Header.jsx         # Cabeçalho com ícones
│   │   └── Footer.jsx         # Rodapé com contato
│   └── CarouselBooks/
│       └── CarouselBooks.jsx  # Carrossel de livros
├── 💾 Data/
│   └── livros.js              # 9 livros cadastrados
├── 📄 Pages/
│   ├── Home.jsx               # Página inicial
│   ├── Livros.jsx             # Catálogo (9 livros)
│   ├── Categoria.jsx          # 4 categorias
│   ├── Contato.jsx            # Formulário de contato
│   └── Livros.css             # Estilos
├── 🔧 Services/
│   └── livroservice.js        # Serviço de livros
├── 🛠️ Utils/
│   ├── folderStructure.js     # Mapeamento de pastas
│   └── constants.js           # Constantes globais
├── App.jsx                    # Componente raiz
└── main.jsx                   # Ponto de entrada
```

## 📚 Os 9 Livros Disponíveis

| ID | 📖 Título | ✍️ Autor | 💰 Preço | 🏷️ Categoria |
|----|-----------|---------|---------|--------------|
| 1 | Clean Code | Robert C. Martin | R$ 89.90 | Programação |
| 2 | Hábitos Atômicos | James Clear | R$ 59.90 | Desenvolvimento |
| 3 | O Poder do Hábito | Charles Duhigg | R$ 54.90 | Desenvolvimento |
| 4 | Anatomia do Ciclismo | Chris Sidwells | R$ 79.90 | Saúde |
| 5 | Redes de Computadores | Ricardo Souza | R$ 99.90 | Tecnologia |
| 6 | Java Básico | Denilson Silva | R$ 74.90 | Programação |
| 7 | POO na Prática | Fernando Lima | R$ 84.90 | Programação |
| 8 | Banco de Dados MySQL | Carla Mendes | R$ 94.90 | Banco de Dados |
| 9 | Segurança da Informação | Amanda Rocha | R$ 104.90 | Segurança |

## 🎨 Ícones e Emojis

O projeto utiliza ícones visuais em toda a interface para melhor UX:

### Ícones React Icons (Feather)
```jsx
FiHome     // Página inicial
FiBook     // Livros
FiTag      // Categorias
FiMail     // Contato
FiPhone    // Telefone
FiMapPin   // Localização
FiLinkedin // LinkedIn
FiGithub   // GitHub
```

### Ícones Font Awesome
```jsx
FaWhatsapp // WhatsApp
```

### Emojis Especiais
```
📚 - Biblioteca
🛒 - Comprar
💰 - Preço
✍️ - Autor
🌟 - Destaque
⭐ - Seleção
👑 - Premium
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
- ✅ Catálogo completo de **9 livros**
- ✅ Categorização de livros
- ✅ Carrossel de produtos destacados
- ✅ Página de contato (Email + WhatsApp)
- ✅ Navegação fluida entre páginas com ícones
- ✅ Integração com API backend
- ✅ **Ícones visuais** em toda interface (React Icons)
- ✅ **Emojis** em títulos e descrições

## 📚 Documentação Adicional

| Documento | Descrição |
|-----------|-----------|
| [ESTRUTURA_PROJETO.md](./ESTRUTURA_PROJETO.md) | Documentação completa da estrutura |
| [SUMARIO.md](./SUMARIO.md) | Sumário executivo do projeto |
| [GUIA_ICONES.md](./GUIA_ICONES.md) | Guia completo de ícones e emojis |
| [src/Utils/folderStructure.js](./src/Utils/folderStructure.js) | Mapeamento programático de pastas |
| [src/Utils/constants.js](./src/Utils/constants.js) | Constantes e ícones globais |

## 📸 Capturas de Tela

Adicione apenas as imagens desejadas em `docs/screenshots/` para que apareçam na descrição do projeto no GitHub.

As imagens dos livros da pasta `src/assets/images/` foram separadas para não entrarem nos commits principais.

## 🔗 Rotas da Aplicação

| Rota | Descrição | Ícone |
|------|-----------|-------|
| `/` | Página inicial | 🏠 |
| `/livros` | Catálogo de livros | 📚 |
| `/categoria` | Categorias de livros | 🏷️ |
| `/contato` | Página de contato | 📧 |

## 📝 Notas

- Certifique-se de que o servidor backend está configurado e acessível
- CORS está configurado para permitir requisições entre domínios
- O projeto utiliza ESLint para manter a qualidade do código
- **React Icons** está instalado e pronto para uso
- Todos os componentes possuem ícones/emojis para melhor UX

---

**Desenvolvido com ❤️ usando React e Vite**
