# 🎨 Guia de Ícones e Emojis - Sistema Livraria

## 📦 Bibliotecas Utilizadas

### React Icons (Feather)
```jsx
import { FiHome, FiBook, FiTag, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiChevronRight, FiSend, FiArrowRight } from 'react-icons/fi'
```

### React Icons (Font Awesome)
```jsx
import { FaWhatsapp } from 'react-icons/fa'
```

---

## 🎯 Mapeamento de Ícones por Componente

### 🏠 Navegação Global

| Ícone | Nome | Uso | Componente |
|-------|------|-----|-----------|
| `FiHome` | Home | Página inicial | Header, Navbar |
| `FiBook` | Books | Catálogo | Header, Navbar |
| `FiTag` | Tag | Categorias | Header, Navbar |
| `FiMail` | Mail | Contato | Header, Navbar |

### 📧 Contato e Redes

| Ícone | Nome | Uso | Componente |
|-------|------|-----|-----------|
| `FiPhone` | Phone | WhatsApp | Contato, Footer |
| `FaWhatsapp` | WhatsApp | WhatsApp | Contato |
| `FiMail` | Mail | Email | Contato, Footer |
| `FiMapPin` | MapPin | Localização | Contato |
| `FiLinkedin` | Linkedin | Rede social | Contato |
| `FiGithub` | Github | Rede social | Contato |

### 🎯 Navegação e Ação

| Ícone | Nome | Uso | Componente |
|-------|------|-----|-----------|
| `FiChevronRight` | ChevronRight | Próximo | CarouselBooks |
| `FiSend` | Send | Enviar | Contato |
| `FiArrowRight` | ArrowRight | Ir para | Botões |

---

## 😊 Emojis por Categoria

### 📚 Livros e Leitura
```
📚 - Biblioteca, livros em geral
📖 - Livro, ler, selecionado
📕 - Livro fechado
📝 - Anotações, escrever
✍️ - Autor, escrita
```

### 💰 Preço e Negócio
```
💰 - Preço, dinheiro
💵 - Dólar
🛒 - Carrinho de compras
💳 - Pagamento
```

### 🏢 Categorias
```
💻 - Programação, Tecnologia
🧠 - Desenvolvimento, Inteligência
📈 - Negócios, Crescimento
💪 - Saúde, Força
🔒 - Segurança
🗄️ - Banco de dados
🔧 - Ferramentas, Serviços
```

### ✨ Status e Destaque
```
⭐ - Seleção, Destaque
🌟 - Brilho, Especial
👑 - Premium
🎯 - Objetivo
📌 - Importante
🔥 - Tendência
✅ - Sucesso
❌ - Erro
⚠️ - Atenção
```

### 📱 Contato e Social
```
📞 - Telefone
📧 - Email
📨 - Email input
💬 - Mensagem
📍 - Localização
🌐 - Web, internet
🔗 - Link
```

### 🎨 Interface
```
🔘 - Botão
⚙️ - Configurações
🔧 - Ferramentas
🛠️ - Utilitários
📁 - Pasta
```

---

## 🎬 Exemplos de Uso

### Navegar com Ícones
```jsx
import { FiHome, FiBook, FiTag, FiMail } from 'react-icons/fi'

<nav>
  <Link to="/"><FiHome /> Início</Link>
  <Link to="/livros"><FiBook /> Livros</Link>
  <Link to="/categoria"><FiTag /> Categorias</Link>
  <Link to="/contato"><FiMail /> Contato</Link>
</nav>
```

### Botão com Ícone
```jsx
import { FiArrowRight } from 'react-icons/fi'

<button>
  Explorar Catálogo <FiArrowRight />
</button>
```

### Card com Emojis
```jsx
<article className="card">
  <h3>{livro.titulo}</h3>
  <p>✍️ {livro.autor}</p>
  <span>💰 R$ {livro.preco}</span>
  <button>🛒 Comprar</button>
</article>
```

### Contato com Ícones
```jsx
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

<div className="contact-info">
  <div><FiPhone /> (11) 99999-9999</div>
  <div><FiMail /> contato@email.com</div>
  <div><FiMapPin /> São Paulo - SP</div>
  <a href="..."><FaWhatsapp /> WhatsApp</a>
</div>
```

---

## 🎨 Cores Sugeridas para Ícones

| Ícone | Cor | Caso de Uso |
|-------|-----|-----------|
| `FiHome` | Azul | Navegação primária |
| `FiBook` | Verde | Livros, leitura |
| `FiTag` | Roxo | Categorias |
| `FiMail` | Vermelho | Contato |
| `FiPhone` | Verde | WhatsApp, telefone |
| `FaWhatsapp` | #25D366 | WhatsApp |
| `FiMapPin` | Laranja | Localização |

---

## 📋 Checklist de Ícones por Página

### Home
- [x] Ícone no logo (📚)
- [x] Ícones na navegação
- [x] Emoji no herói (🌟)
- [x] Emoji no carrossel (💰)

### Livros
- [x] Ícones na navegação
- [x] Emoji "selecionado" (📖)
- [x] Emoji "autor" (✍️)
- [x] Emoji "preço" (💰)
- [x] Emoji "comprar" (🛒)

### Categorias
- [x] Ícones na navegação
- [x] Emojis nas categorias

### Contato
- [x] Ícones na navegação
- [x] Ícones no formulário (👤, 📨, 📝, 💬)
- [x] Ícones de contato (📞, 📧, 📍)
- [x] Ícones de redes sociais

---

## 🔍 Troubleshooting

### Ícone não aparece
```jsx
// ❌ Errado
<FiHome/>

// ✅ Correto
<FiHome /> ou <FiHome size={24} />
```

### Importar ícone FontAwesome
```jsx
// ✅ Correto
import { FaWhatsapp } from 'react-icons/fa'

// ❌ Errado
import { FaWhatsapp } from 'react-icons/fi'
```

### Estilizar ícone
```jsx
<FiHome 
  size={24}
  color="blue"
  className="icon-custom"
  style={{ marginRight: '8px' }}
/>
```

---

**Última atualização:** 17/06/2026  
**Versão de react-icons:** 5.0.0+
