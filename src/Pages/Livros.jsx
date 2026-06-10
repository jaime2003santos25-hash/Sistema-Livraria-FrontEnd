import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './Livros.css'

import javaBasicoImage from '../assets/images/Java.jpg'
import cleanCodeImage from '../assets/images/cleancode.jpg'
import habitosImage from '../assets/images/HabitosAtomicos.jpg'
import poderImage from '../assets/images/poderHabito.jpg'
import anatImage from '../assets/images/anatomiadociclismo.jpg'
import redesImage from '../assets/images/redesComputadores.jpg'
import pooImage from '../assets/images/pooPratica.jpg'
import bancoDadosImage from '../assets/images/BancoDados.jpg'
import segurancaImage from '../assets/images/SegurancaIformacao.jpg'

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

  return (
    <>

      {/* HEADER */}
      <header className="navbar">

        <h1 className="logo">
          Montreé Books
        </h1>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/livros">Livros</Link>
          <Link to="/categoria">Categorias</Link>
          <Link to="/contato">Contato</Link>
        </nav>

      </header>

      {/* LIVROS */}
      <section className="featured">

        <div className="featured-intro">

          <h2>Catálogo completo de livros</h2>

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
                src={(
                  {
                    'Clean Code': cleanCodeImage,
                    'Hábitos Atômicos': habitosImage,
                    'O Poder do Hábito': poderImage,
                    'Anatomia do Ciclismo': anatImage,
                    'Redes de Computadores': redesImage,
                    'Java Básico': javaBasicoImage,
                    'POO na Prática': pooImage,
                    'Banco de Dados MySQL': bancoDadosImage,
                    'Segurança da Informação': segurancaImage,
                  }[book.titulo] || javaBasicoImage
                )}
                alt={book.titulo}
              />

              <h3>{book.titulo}</h3>

              <p className="author">
                {book.autor}
              </p>

              <span className="price">
                R$ {book.preco}
              </span>

              <button type="button">
                Comprar
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
