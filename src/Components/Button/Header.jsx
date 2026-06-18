import { FiHome, FiBook, FiTag } from 'react-icons/fi'

function Header() {
  return (
    <header className="navbar">
      <h1 className="logo">📚 Montreé Books</h1>

      <nav>
        <a href="#"><FiHome /> Início</a>
        <a href="#"><FiBook /> Livros</a>
        <a href="#"><FiTag /> Categorias</a>
      </nav>
    </header>
  )
}

export default Header
