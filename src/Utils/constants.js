// src/Utils/constants.js
// ⚙️ Constantes globais do projeto

// 📚 Categorias de livros
export const BOOK_CATEGORIES = {
  PROGRAMMING: 'Programação',
  DEVELOPMENT: 'Desenvolvimento Pessoal',
  BUSINESS: 'Negócios',
  HEALTH: 'Saúde',
  TECHNOLOGY: 'Tecnologia',
  SECURITY: 'Segurança',
  DATABASE: 'Banco de Dados'
};

// 🎨 Ícones das categorias
export const CATEGORY_ICONS = {
  [BOOK_CATEGORIES.PROGRAMMING]: '💻',
  [BOOK_CATEGORIES.DEVELOPMENT]: '🧠',
  [BOOK_CATEGORIES.BUSINESS]: '📈',
  [BOOK_CATEGORIES.HEALTH]: '💪',
  [BOOK_CATEGORIES.TECHNOLOGY]: '🔧',
  [BOOK_CATEGORIES.SECURITY]: '🔒',
  [BOOK_CATEGORIES.DATABASE]: '🗄️'
};

// 📞 Informações de contato
export const CONTACT_INFO = {
  WHATSAPP: '+5511999999999',
  EMAIL: 'contato@montreebooks.com',
  LOCATION: 'São Paulo - SP',
  LINKEDIN: 'https://www.linkedin.com',
  GITHUB: 'https://github.com'
};

// 🌐 URLs da API
export const API_URLs = {
  BASE: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  BOOKS: '/livros',
  CATEGORIES: '/categorias'
};

// 📁 Pastas do projeto com ícones
export const PROJECT_FOLDERS = {
  API: { icon: '🔌', name: 'Api' },
  ASSETS: { icon: '🖼️', name: 'Assets' },
  COMPONENTS: { icon: '⚙️', name: 'Components' },
  DATA: { icon: '💾', name: 'Data' },
  PAGES: { icon: '📄', name: 'Pages' },
  SERVICES: { icon: '🔧', name: 'Services' },
  UTILS: { icon: '🛠️', name: 'Utils' }
};

// 🏢 Informações da aplicação
export const APP_INFO = {
  NAME: 'Montreé Books',
  LOGO: '📚',
  VERSION: '1.0.0',
  YEAR: '2026',
  DESCRIPTION: 'Catálogo online de livros com foco em tecnologia, desenvolvimento e negócios'
};

// ✨ Emojis especiais
export const EMOJIS = {
  BOOK: '📚',
  FAVORITE: '❤️',
  STAR: '⭐',
  CART: '🛒',
  PRICE: '💰',
  AUTHOR: '✍️',
  SEARCH: '🔍',
  LOADING: '⏳',
  SUCCESS: '✅',
  ERROR: '❌',
  WARNING: '⚠️'
};

export default {
  BOOK_CATEGORIES,
  CATEGORY_ICONS,
  CONTACT_INFO,
  API_URLs,
  PROJECT_FOLDERS,
  APP_INFO,
  EMOJIS
};
