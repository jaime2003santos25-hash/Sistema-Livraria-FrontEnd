import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FiHome, FiBook, FiTag, FiMail } from 'react-icons/fi'

import './Livros.css'

import javaBasicoImage from '../Assets/Images/Java.png'
import cleanCodeImage from '../Assets/Images/Clean-code.jpg'
import habitosImage from '../Assets/Images/Habitos-atomicos.jpg'
import poderImage from '../Assets/Images/Poder-do-habito.jpg'
import anatImage from '../Assets/Images/Anatomia-do-ciclismo.jpg'
import heroImage from '../Assets/Images/My-hero.jpg'

function Livros() {

  const [books, setBooks] = useState([])

  useEffect(() => {

    fetch('http://localhost:8080/livros')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data)
      })
      .catch((error) => {
        console.error('Erro ao buscar livros:', error)
      })

  }, [])

  const getImageByTitle = (titulo) => {
    const imageMap = {
      'Clean Code': cleanCodeImage,
      'Hábitos Atômicos': habitosImage,
      'O Poder do Hábito': poderImage,
      'Anatomia do Ciclismo': anatImage,
      'Redes de Computadores': heroImage,
      'Java Básico': javaBasicoImage,
      'POO na Prática': heroImage,
      'Banco de Dados MySQL': heroImage,
      'Segurança da Informação': heroImage,
    }
    return imageMap[titulo] || javaBasicoImage
  }

  return (
    <>

      {/* HEADER */}
      <header className="navbar">

        <h1 className="logo">
          📚 Montreé Books
        </h1>

        <nav>
          <Link to="/"><FiHome /> Início</Link>
          <Link to="/livros"><FiBook /> Livros</Link>
          <Link to="/categoria"><FiTag /> Categorias</Link>
          <Link to="/contato"><FiMail /> Contato</Link>
        </nav>

      </header>

      {/* LIVROS */}
      <section className="featured">

        <div className="featured-intro">

          <h2>📖 Catálogo completo de livros</h2>

          <p>
            Encontre o seu próximo título com autor e preço.
            Nosso acervo reúne os melhores livros de tecnologia,
            programação, banco de dados e segurança.
          </p>

        </div>

        <div className="cards">

          {books.map((book) => (

            <article key={book.id} className="card">

              <img
                src={getImageByTitle(book.titulo)}
                alt={book.titulo}
              />

              <h3>{book.titulo}</h3>

              <p className="author">
                ✍️ {book.autor}
              </p>

              <span className="price">
                💰 R$ {book.preco}
              </span>

              <button type="button">
                🛒 Comprar
              </button>

            </article>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 Montreé Books — Todos os direitos reservados.
        </p>

      </footer>

    </>
  )
}

export default Livros
