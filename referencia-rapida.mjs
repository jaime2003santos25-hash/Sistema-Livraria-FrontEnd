#!/usr/bin/env node
/**
 * 📚 Sistema Livraria Frontend - Referência Rápida
 * Arquivo de índice dos 9 livros e como usá-los
 */

// Importar os livros
import livros from './src/Data/livros.js'

console.log('📚 SISTEMA LIVRARIA FRONTEND - REFERÊNCIA RÁPIDA\n')
console.log('=' .repeat(60))

// Exibir todos os livros
console.log('\n📖 LIVROS CADASTRADOS:\n')
livros.forEach((livro, idx) => {
  console.log(`${idx + 1}. ${livro.titulo}`)
  console.log(`   ✍️  Autor: ${livro.autor}`)
  console.log(`   💰 Preço: R$ ${livro.preco}`)
  console.log(`   🏷️  Categoria: ${livro.categoria}`)
  console.log(`   📷 Imagem: ${livro.imagem}\n`)
})

console.log('=' .repeat(60))

// Estatísticas
console.log('\n📊 ESTATÍSTICAS:\n')
console.log(`Total de livros: ${livros.length}`)
console.log(`Preço mínimo: R$ ${Math.min(...livros.map(l => l.preco)).toFixed(2)}`)
console.log(`Preço máximo: R$ ${Math.max(...livros.map(l => l.preco)).toFixed(2)}`)
console.log(`Preço médio: R$ ${(livros.reduce((a, b) => a + b.preco, 0) / livros.length).toFixed(2)}`)

// Categorias
const categorias = [...new Set(livros.map(l => l.categoria))]
console.log(`\nCategorias: ${categorias.length}`)
categorias.forEach(cat => {
  const count = livros.filter(l => l.categoria === cat).length
  console.log(`  • ${cat}: ${count} livro(s)`)
})

console.log('\n' + '=' .repeat(60) + '\n')

// Ícones utilizados
console.log('🎨 ÍCONES UTILIZADOS:\n')
console.log('React Icons (Feather):')
console.log('  FiHome       - Página inicial')
console.log('  FiBook       - Livros')
console.log('  FiTag        - Categorias')
console.log('  FiMail       - Contato')
console.log('  FiPhone      - Telefone')
console.log('  FiMapPin     - Localização')
console.log('  FiLinkedin   - LinkedIn')
console.log('  FiGithub     - GitHub')
console.log('  FiChevronRight - Seta')
console.log('  FiSend       - Enviar')
console.log('  FiArrowRight - Próximo\n')

console.log('React Icons (Font Awesome):')
console.log('  FaWhatsapp   - WhatsApp\n')

console.log('=' .repeat(60))
console.log('\n✅ Projeto pronto para uso!\n')
