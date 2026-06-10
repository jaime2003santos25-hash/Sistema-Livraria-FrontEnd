import { Link } from 'react-router-dom'

import cleanCode from '../assets/images/cleancode.jpg'
import habitosAtomicos from '../assets/images/HabitosAtomicos.jpg'
import poderHabito from '../assets/images/poderHabito.jpg'
import anatomiadociclismo from '../assets/images/anatomiadociclismo.jpg'
import redesComputadores from '../assets/images/redesComputadores.jpg'
import javaBasico from '../assets/images/Java.jpg'
import pooPratica from '../assets/images/pooPratica.jpg'
import bancoDados from '../assets/images/BancoDados.jpg'
import segurancaInformacao from '../assets/images/SegurancaIformacao.jpg'

const featuredBooks = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 'R$ 89,90',
    image: cleanCode,
  },
  {
    title: 'Hábitos Atômicos',
    author: 'James Clear',
    price: 'R$ 74,90',
    image: habitosAtomicos,
  },
  {
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    price: 'R$ 79,90',
    image: poderHabito,
  },
  {
    title: 'Anatomia do Ciclismo',
    author: 'Chris Sidwells',
    price: 'R$ 65,90',
    image: anatomiadociclismo,
  },
  {
    title: 'Redes de Computadores',
    author: 'Ricardo Souza',
    price: 'R$ 120,00',
    image: redesComputadores,
  },
  {
    title: 'Java Básico',
    author: 'Denilson Silva',
    price: 'R$ 59,90',
    image: javaBasico,
  },
  {
    title: 'POO na Prática',
    author: 'Fernando Lima',
    price: 'R$ 79,90',
    image: pooPratica,
  },
  {
    title: 'Banco de Dados MySQL',
    author: 'Carla Mendes',
    price: 'R$ 89,50',
    image: bancoDados,
  },
  {
    title: 'Segurança da Informação',
    author: 'Amanda Rocha',
    price: 'R$ 149,90',
    image: segurancaInformacao,
  },
]

function Home() {
  return (
    <>

      {/* HEADER */}
      <header className="navbar">

        <h1 className="logo">
          Montreé Books
        </h1>

        <nav>
          <Link to="/">
            Início
          </Link  >

          <Link to="/livros">
            Livros
          </Link>

          <Link to="/categoria">
  Categorias
</Link>

<Link to="/contato">
  Contato
</Link>
        </nav>

      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-text">

          <h2>
            Descubra novos <span>mundos</span>
            através da leitura
          </h2>

          <p>
            Explore os melhores livros de ficção,
            tecnologia, negócios e desenvolvimento pessoal,
            somente na Montreé.
          </p>

          <Link to="/livros">
            <button>
              Explorar Catálogo
            </button>
          </Link>

        </div>

        <div className="hero-image hero-carousel">
          <div className="home-carousel-container">
            <div className="home-carousel-track">
              {[...featuredBooks, ...featuredBooks].map((book, index) => (
                <div key={`${book.title}-${index}`} className="home-carousel-card">
                  <img src={book.image} alt={book.title} />
                  <div className="home-carousel-card-content">
                    <strong>{book.title}</strong>
                    <span>{book.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Home 
