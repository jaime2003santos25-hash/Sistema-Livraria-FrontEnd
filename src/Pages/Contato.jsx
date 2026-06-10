// Contato.jsx

import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailSend = (event) => {
    event.preventDefault()
    const mailto = `mailto:contato@montreebooks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`)}`
    window.location.href = mailto
  }

  const handleWhatsAppSend = () => {
    const whatsappNumber = '5511999999999'
    const whatsappText = encodeURIComponent(`Olá, meu nome é ${name}.

Assunto: ${subject}

${message}

Meu e-mail: ${email}`)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`
    window.open(whatsappUrl, '_blank', 'noopener')
  }

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
          </Link>

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

      {/* CONTATO */}
      <section className="featured contact-page">

        <h2>
          Entre em Contato
        </h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleEmailSend}>
            <h3>Envie sua mensagem</h3>
            <p className="form-description">
              Preencha os campos abaixo e use o campo de observação para mandar sua mensagem ou dúvida.
            </p>

            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                id="subject"
                type="text"
                placeholder="Qual é o assunto?"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Observações</label>
              <textarea
                id="message"
                className="neon-textarea"
                placeholder="Escreva aqui sua mensagem para nós..."
                rows="7"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>

            <div className="submit-buttons">
              <button type="submit">Enviar por e-mail</button>
              <button type="button" className="whatsapp-button" onClick={handleWhatsAppSend}>
                Enviar por WhatsApp
              </button>
            </div>
          </form>

          <div className="card contact-info">
            <h3>Informações</h3>

            <div className="info-item">
              <strong>WhatsApp</strong>
              <p className="author">(11) 99999-9999</p>
            </div>

            <div className="info-item">
              <strong>E-mail</strong>
              <p className="author">contato@montreebooks.com</p>
            </div>

            <div className="info-item">
              <strong>Localização</strong>
              <p className="author">São Paulo - SP</p>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </section>

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

export default Contato 
