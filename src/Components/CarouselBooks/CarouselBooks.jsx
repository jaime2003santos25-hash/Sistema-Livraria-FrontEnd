import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

import cleanCode from '../../Assets/Images/Clean-code.jpg'
import habitosAtomicos from '../../Assets/Images/Habitos-atomicos.jpg'
import hero from '../../Assets/Images/My-hero.jpg'
import javaBasico from '../../Assets/Images/Java.png'
import poderHabito from '../../Assets/Images/Poder-do-habito.jpg'
import anatomiadociclismo from '../../Assets/Images/Anatomia-do-ciclismo.jpg'

const defaultBooks = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: cleanCode,
  },
  {
    title: 'Hábitos Atômicos',
    author: 'James Clear',
    image: habitosAtomicos,
  },
  {
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    image: poderHabito,
  },
  {
    title: 'Anatomia do Ciclismo',
    author: 'Chris Sidwells',
    image: anatomiadociclismo,
  },
  {
    title: 'Redes de Computadores',
    author: 'Ricardo Souza',
    image: hero,
  },
  {
    title: 'Java Básico',
    author: 'Denilson Silva',
    image: javaBasico,
  },
  {
    title: 'POO na Prática',
    author: 'Fernando Lima',
    image: hero,
  },
  {
    title: 'Banco de Dados MySQL',
    author: 'Carla Mendes',
    image: hero,
  },
  {
    title: 'Segurança da Informação',
    author: 'Amanda Rocha',
    image: hero,
  },
]

function CarouselBooks({
  books = defaultBooks,
  title = '📚 Escolha seu livro',
  description = 'Passe o cursor sobre as capas para ver o destaque e selecione um livro.',
  buttonLabel = '✨ Ver mais detalhes',
  ctaLink = '/livros',
}) {
  const [selectedBook, setSelectedBook] = useState(books[0] || null)

  if (!selectedBook) {
    return null
  }

  return (
    <section className="carousel-section">
      <div className="carousel-intro">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel" onMouseLeave={() => setSelectedBook(books[0])}>
          {books.map((book, index) => (
            <button
              key={book.title}
              className={`carousel-card ${selectedBook.title === book.title ? 'active' : ''}`}
              style={{ '--i': index }}
              onMouseEnter={() => setSelectedBook(book)}
              aria-label={`Selecionar livro ${book.title}`}
            >
              <img src={book.image} alt={book.title} />
            </button>
          ))}
        </div>

        <div className="carousel-info">
          <span>📖 Livro selecionado</span>
          <h3>{selectedBook.title}</h3>
          <p>✍️ {selectedBook.author}</p>
          <Link to={ctaLink}>
            <button>{buttonLabel} <FiChevronRight /></button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CarouselBooks
