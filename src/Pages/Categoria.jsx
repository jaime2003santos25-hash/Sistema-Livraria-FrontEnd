// Categoria.jsx

import { Link } from 'react-router-dom'
import { FiHome, FiBook, FiTag, FiMail } from 'react-icons/fi'
import CarouselBooks from '../Components/CarouselBooks/CarouselBooks'

function Categoria() {
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

      {/* CATEGORIAS */}
      <section className="categories-hero">
        <div className="categories-hero-copy">
          <span className="eyebrow">📌 Curadoria exclusiva</span>
          <h2>Categorias pensadas para leitores exigentes</h2>
          <p>
            Explore nossas coleções com temas estratégicos, guias práticos e histórias inspiradoras.
            Cada categoria foi organizada para destacar títulos relevantes e recentes do mercado.
          </p>
        </div>

        <div className="categories-hero-cards">
          <article className="hero-card">
            <strong>📚 +120 títulos</strong>
            <p>Livros atualizados nas principais áreas do conhecimento.</p>
          </article>
          <article className="hero-card">
            <strong>⭐ Seleções exclusivas</strong>
            <p>Recomendações cuidadosamente escolhidas para cada perfil de leitura.</p>
          </article>
          <article className="hero-card">
            <strong>👑 Leitura premium</strong>
            <p>Conteúdos com linguagem objetiva e foco em resultados reais.</p>
          </article>
        </div>
      </section>

      <section className="categories-section">
        <div className="categories-header">
          <h2>🔍 Descubra o seu próximo livro</h2>
          <p>
            Navegue entre nossas principais categorias e encontre títulos que combinam qualidade,
            profundidade e design elegante para sua estante digital.
          </p>
        </div>

        <div className="categories-grid">
          <article className="category-card category-card-large">
            <span className="category-icon">💻</span>
            <div>
              <h3>Tecnologia</h3>
              <p>Software, inteligência artificial, programação e tendências digitais.</p>
            </div>
          </article>

          <article className="category-card category-card-large">
            <span className="category-icon">📈</span>
            <div>
              <h3>Negócios</h3>
              <p>Estratégia, finanças e métodos práticos para crescer com segurança.</p>
            </div>
          </article>

          <article className="category-card category-card-large">
            <span className="category-icon">🧠</span>
            <div>
              <h3>Desenvolvimento Pessoal</h3>
              <p>Produtividade, hábitos e liderança para uma rotina mais eficaz.</p>
            </div>
          </article>

          <article className="category-card category-card-large">
            <span className="category-icon">🔒</span>
            <div>
              <h3>Segurança</h3>
              <p>Títulos sobre proteção de dados, redes e práticas de segurança digital.</p>
            </div>
          </article>
        </div>
      </section>

      <CarouselBooks />

      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 Montreé Books —
          Todos os direitos reservados.
        </p>

      </footer>

    </>
  )
}

export default Categoria
