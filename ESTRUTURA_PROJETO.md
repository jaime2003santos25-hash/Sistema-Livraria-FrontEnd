# 📚 Estrutura do Projeto - Sistema Livraria Frontend

## 🏗️ Arquitetura do Projeto

```
Sistema-Livraria-FrontEnd/
│
├── 📄 package.json                 ← Dependências do projeto
├── 📄 vite.config.js              ← Configuração do Vite
├── 📄 eslint.config.js            ← Configuração do ESLint
├── 📄 index.html                  ← HTML principal
│
├── 📁 public/                      ← Arquivos estáticos públicos
│   └── (assets públicos)
│
├── 📁 src/                         ← Código-fonte principal
│   │
│   ├── 📄 main.jsx                ← Ponto de entrada React
│   ├── 📄 App.jsx                 ← Componente raiz
│   ├── 📄 App.css                 ← Estilos globais
│   ├── 📄 index.css               ← CSS geral
│   │
│   ├── 📁 Api/                    ← Configuração de API
│   │   └── 📄 Api.js              ← Instância Axios
│   │
│   ├── 📁 Assets/                 ← Recursos multimedia
│   │   └── 📁 Images/             ← Imagens dos livros
│   │       ├── 📷 Clean code.jpg
│   │       ├── 📷 Habitos atomicos.jpg
│   │       ├── 📷 Poder do habito.jpg
│   │       ├── 📷 Anatomia do ciclismo.jpg
│   │       ├── 📷 Java.png
│   │       └── 📷 My hero.jpg
│   │
│   ├── 📁 Components/             ← Componentes reutilizáveis
│   │   ├── 📁 Button/
│   │   │   ├── 📄 Header.jsx     ← Cabeçalho com ícones
│   │   │   └── 📄 Footer.jsx     ← Rodapé com contato
│   │   └── 📁 CarouselBooks/
│   │       └── 📄 CarouselBooks.jsx ← Carrossel de livros
│   │
│   ├── 📁 Data/                   ← Dados do aplicativo
│   │   └── 📄 livros.js           ← Array com 9 livros
│   │
│   ├── 📁 Pages/                  ← Páginas principais
│   │   ├── 📄 Home.jsx            ← Página inicial
│   │   ├── 📄 Livros.jsx          ← Catálogo de livros
│   │   ├── 📄 Categoria.jsx       ← Categorias
│   │   ├── 📄 Contato.jsx         ← Página de contato
│   │   └── 📄 Livros.css          ← Estilos das páginas
│   │
│   ├── 📁 Services/               ← Serviços e utilitários
│   │   └── 📄 livroservice.js     ← Serviço de livros
│   │
│   └── 📁 Screenshots/            ← Capturas de tela
│
└── 📄 README.md                   ← Documentação do projeto
```

---

## 📚 Dados dos Livros

O arquivo [src/Data/livros.js](src/Data/livros.js) contém **9 livros** com as seguintes informações:

| ID | Título | Autor | Preço | Categoria |
|----|--------|-------|-------|-----------|
| 1 | Clean Code | Robert C. Martin | R$ 89.90 | Programação |
| 2 | Hábitos Atômicos | James Clear | R$ 59.90 | Desenvolvimento Pessoal |
| 3 | O Poder do Hábito | Charles Duhigg | R$ 54.90 | Desenvolvimento Pessoal |
| 4 | Anatomia do Ciclismo | Chris Sidwells | R$ 79.90 | Saúde |
| 5 | Redes de Computadores | Ricardo Souza | R$ 99.90 | Tecnologia |
| 6 | Java Básico | Denilson Silva | R$ 74.90 | Programação |
| 7 | POO na Prática | Fernando Lima | R$ 84.90 | Programação |
| 8 | Banco de Dados MySQL | Carla Mendes | R$ 94.90 | Banco de Dados |
| 9 | Segurança da Informação | Amanda Rocha | R$ 104.90 | Segurança |

---

## 🎨 Ícones Utilizados

O projeto utiliza a biblioteca **react-icons** com os seguintes ícones:

### Ícones Feather (FiXxx)
- `FiHome` - Página inicial
- `FiBook` - Livros
- `FiTag` - Categorias
- `FiMail` - Contato
- `FiPhone` - Telefone
- `FiMapPin` - Localização
- `FiLinkedin` - LinkedIn
- `FiGithub` - GitHub
- `FiChevronRight` - Seta direita
- `FiSend` - Enviar
- `FiArrowRight` - Seta direita

### Ícones Font Awesome
- `FaWhatsapp` - WhatsApp

### Emojis
- 📚 - Biblioteca/Livros
- 💰 - Preço
- ✍️ - Autor
- 🛒 - Comprar
- 🌟 - Destaque
- 📖 - Selecionado
- 📌 - Curadoria
- ⭐ - Seleções
- 👑 - Premium
- 🔍 - Busca
- 📅 - Informações
- 🔒 - Segurança
- 💻 - Tecnologia
- 📈 - Negócios
- 🧠 - Desenvolvimento
- 📧 - Email
- 👤 - Nome
- 📨 - Email input
- 📝 - Assunto
- 💬 - Mensagem
- ℹ️ - Informações

---

## 🔧 Dependências Principais

```json
{
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "react-router-dom": "^7.15.1",
  "axios": "^1.16.1",
  "react-icons": "^5.0.0+"
}
```

---

## 📝 Componentes e Funcionalidades

### 🏠 Home.jsx
- Página inicial com herói
- Carrossel de livros em destaque
- Links para catálogo completo

### 📚 Livros.jsx
- Lista completa de 9 livros
- Busca via API (`http://localhost:8080/livros`)
- Botões de compra
- Ícones e emojis

### 🏷️ Categoria.jsx
- 4 categorias principais (Tecnologia, Negócios, Desenvolvimento, Segurança)
- Carrossel de livros recomendados
- Cards informativos

### 📧 Contato.jsx
- Formulário de contato
- Opções: Email e WhatsApp
- Informações de contato
- Links para redes sociais

---

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run lint     # Verifica ESLint
npm run preview  # Preview da build
```

---

## 📖 Estrutura de Pastas por Tipo

| Pasta | Ícone | Função |
|-------|-------|--------|
| Api | 🔌 | Comunicação com backend |
| Assets | 🖼️ | Recursos multimedia |
| Components | ⚙️ | Componentes reutilizáveis |
| Data | 💾 | Dados do aplicativo |
| Pages | 📄 | Páginas principais |
| Services | 🔧 | Serviços e utilitários |

---

## ✨ Próximas Melhorias

- [ ] Adicionar animações com Framer Motion
- [ ] Implementar filtros de categoria
- [ ] Adicionar carrinho de compras
- [ ] Integração com pagamento
- [ ] Sistema de reviews
- [ ] Busca avançada
- [ ] Temas dark/light

---

**Última atualização:** 17/06/2026  
**Versão:** 1.0.0  
**Desenvolvedor:** Sistema Livraria Team
