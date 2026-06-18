import { Link } from 'react-router-dom'
import { FiHome, FiBook, FiTag, FiMail, FiArrowRight } from 'react-icons/fi'

import cleanCode from '../Assets/Images/Clean-code.jpg'
import habitosAtomicos from '../Assets/Images/Habitos-atomicos.jpg'
import poderHabito from '../Assets/Images/Poder-do-habito.jpg'
import anatomiadociclismo from '../Assets/Images/Anatomia-do-ciclismo.jpg'
import javaBasico from '../Assets/Images/Java.png'
import hero from '../Assets/Images/My-hero.jpg'

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
    image: hero,
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
    image: hero,
  },
  {
    title: 'Banco de Dados MySQL',
    author: 'Carla Mendes',
    price: 'R$ 89,50',
    image: hero,
  },
  {
    title: 'Segurança da Informação',
    author: 'Amanda Rocha',
    price: 'R$ 149,90',
    image: hero,
  },
]

function Home() {
  return (
    <>

      {/* HEADER */}
      <header className="navbar">

        <h1 className="logo">
          📚 Montreé Books
        </h1>

        <nav>
          <Link to="/">
            <FiHome /> Início
          </Link>

          <Link to="/livros">
            <FiBook /> Livros
          </Link>

          <Link to="/categoria">
            <FiTag /> Categorias
          </Link>

          <Link to="/contato">
            <FiMail /> Contato
          </Link>
        </nav>

      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-text">

          <h2>
            Descubra novos <span>🌟 mundos</span>
            através da leitura
          </h2>

          <p>
            Explore os melhores livros de ficção,
            tecnologia, negócios e desenvolvimento pessoal,
            somente na Montreé.
          </p>

          <Link to="/livros">
            <button>
              Explorar Catálogo <FiArrowRight />
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
                    <span>💰 {book.price}</span>
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
