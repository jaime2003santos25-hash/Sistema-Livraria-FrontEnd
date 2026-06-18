// src/Utils/folderStructure.js
// 🗂️ Estrutura de pastas com ícones

export const folderStructure = {
  api: {
    icon: '🔌',
    name: 'Api',
    description: 'Configuração de comunicação com backend',
    files: ['Api.js']
  },
  assets: {
    icon: '🖼️',
    name: 'Assets',
    description: 'Recursos multimedia (imagens, ícones, etc)',
    subfolders: {
      images: {
        icon: '🖼️',
        description: 'Capas dos livros e imagens'
      }
    }
  },
  components: {
    icon: '⚙️',
    name: 'Components',
    description: 'Componentes React reutilizáveis',
    subfolders: {
      button: {
        icon: '🔘',
        description: 'Header e Footer'
      },
      carouselBooks: {
        icon: '🎠',
        description: 'Carrossel de livros'
      }
    }
  },
  data: {
    icon: '💾',
    name: 'Data',
    description: 'Dados estáticos da aplicação',
    files: ['livros.js (9 livros)']
  },
  pages: {
    icon: '📄',
    name: 'Pages',
    description: 'Páginas principais do aplicativo',
    subfolders: {
      home: 'Home.jsx - Página inicial',
      livros: 'Livros.jsx - Catálogo de livros',
      categoria: 'Categoria.jsx - Categorias',
      contato: 'Contato.jsx - Formulário de contato'
    }
  },
  services: {
    icon: '🔧',
    name: 'Services',
    description: 'Serviços e funções utilitárias',
    files: ['livroservice.js']
  }
};

// 📊 Mapeamento de ícones por arquivo
export const fileIcons = {
  js: '⚙️',
  jsx: '⚛️',
  css: '🎨',
  jpg: '🖼️',
  png: '🖼️',
  json: '📋',
  md: '📝'
};

// 🏆 Categorias de livros com ícones
export const bookCategories = {
  programacao: { icon: '💻', name: 'Programação' },
  desenvolvimento: { icon: '🧠', name: 'Desenvolvimento Pessoal' },
  negocio: { icon: '📈', name: 'Negócios' },
  saude: { icon: '💪', name: 'Saúde' },
  tecnologia: { icon: '🔧', name: 'Tecnologia' },
  seguranca: { icon: '🔒', name: 'Segurança' },
  bancodados: { icon: '🗄️', name: 'Banco de Dados' }
};

export default folderStructure;
