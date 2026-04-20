// Footer.jsx — Rodapé do site Digital Island

import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Digital%20Island.'

const LINKS = [
  { label: 'Home',         to: '/' },
  { label: 'Sites',        to: '/sites' },
  { label: 'Tráfego Pago', to: '/trafego' },
  { label: 'Conteúdo',     to: '/conteudo' },
  { label: 'Portfólio',    to: '/portfolio' },
  { label: 'Contato',      to: '/contato' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Coluna 1 — Marca */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="logo-digital">DIGITAL</span>
            <span className="logo-island">ISLAND</span>
          </Link>
          <p className="footer__tagline">
            Chega de incerteza.<br />Hora de resultado.
          </p>
          <p className="footer__location">
            📍 Florianópolis, SC — Brasil
          </p>
        </div>

        {/* Coluna 2 — Navegação */}
        <div className="footer__nav">
          <span className="footer__col-title">Navegação</span>
          {LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </div>

        {/* Coluna 3 — Contato */}
        <div className="footer__contact">
          <span className="footer__col-title">Contato</span>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="footer__link">
            WhatsApp
          </a>
          <a href="mailto:digitalislandcomercial@gmail.com" className="footer__link">
            digitalislandcomercial@gmail.com
          </a>
          <p className="footer__link" style={{ cursor: 'default' }}>
            Instagram: @digitalislandltda
          </p>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Digital Island. Todos os direitos reservados.</span>
          <span>Florianópolis, SC</span>
        </div>
      </div>
    </footer>
  )
}
