import { FiPhone, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="footer">
      <h3>📞 Contato</h3>

      <div className="whatsapp">
        <img
          src="https://img.criativodahora.com.br/homologacao/thumbs/2025/03/18/5b244913-208c-471e-9fcc-7c951035044d.jpg"
          alt="WhatsApp"
        />

        <p><FiPhone /> (11) 99999-9999</p>
      </div>

      <div className="email">
        <p><FiMail /> contato@montreebooks.com.br</p>
      </div>
    </footer>
  )
}

export default Footer
