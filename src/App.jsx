// App.jsx

import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Livros from './Pages/Livros.jsx'
import Categoria from './Pages/Categoria.jsx'
import Contato from './Pages/Contato.jsx'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/livros" element={<Livros />} />

        <Route path="/categoria" element={<Categoria />} />

<Route path="/contato" element={<Contato />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
