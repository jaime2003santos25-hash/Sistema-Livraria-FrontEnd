import { useState } from 'react'
import { Link } from 'react-router-dom'

import anatomiadociclismo from '../../assets/images/anatomiadociclismo.jpg'
import cleanCode from '../../assets/images/cleancode.jpg'
import habitosAtomicos from '../../assets/images/HabitosAtomicos.jpg'
import hero from '../../assets/images/hero.jpg'
import javaBasico from '../../assets/images/Java.jpg'
import bancoDados from '../../assets/images/BancoDados.jpg'
import redesComputadores from '../../assets/images/redesComputadores.jpg'
import poderHabito from '../../assets/images/poderHabito.jpg'
import pooPratica from '../../assets/images/pooPratica.jpg'
import segurancaInformacao from '../../assets/images/SegurancaIformacao.jpg'
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
    image: redesComputadores,
  },
  {
    title: 'Java Básico',
    author: 'Denilson Silva',
    image: javaBasico,
  },
  {
    title: 'POO na Prática',
    author: 'Fernando Lima',
    image: pooPratica,
  },
  {
    title: 'Banco de Dados MySQL',
    author: 'Carla Mendes',
    image: bancoDados,
  },
  {
    title: 'Segurança da Informação',
    author: 'Amanda Rocha',
    image: segurancaInformacao,
  },
]

function CarouselBooks({
  books = defaultBooks,
  title = 'Escolha seu livro',
  description = 'Passe o cursor sobre as capas para ver o destaque e selecione um livro.',
  buttonLabel = 'Ver mais detalhes',
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
          <span>Livro selecionado</span>
          <h3>{selectedBook.title}</h3>
          <p>{selectedBook.author}</p>
          <Link to={ctaLink}>
            <button>{buttonLabel}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CarouselBooks
