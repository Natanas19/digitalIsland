// Header.jsx — Cabeçalho fixo com logo, navegação e CTA WhatsApp

import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'

// Número do WhatsApp — altere aqui para o número real
const WHATSAPP = 'https://wa.me/+55 48 88793113?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Digital%20Island.'

// Itens de navegação
const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Sites', to: '/sites' },
  { label: 'Tráfego Pago', to: '/trafego' },
  { label: 'Conteúdo', to: '/conteudo' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Contato', to: '/contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Adiciona fundo sólido ao header quando rola a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha menu mobile ao mudar de rota
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">

        {/* ---- Logo ---- */}
        <Link
          to="/"
          className="header__logo"
          onClick={() => {
            closeMenu()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <img src={logo} alt="Digital Island" className="header__logo-img" />
        </Link>

        {/* ---- Navegação desktop ---- */}
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Navegação principal">
          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}

        </nav>

        {/* ---- CTA desktop ---- */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp header__cta"
        >
          <IconWhatsApp /> Fale Conosco
        </a>

        {/* ---- Hamburguer mobile ---- */}
        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </div>

      {/* Overlay escuro quando menu mobile está aberto */}
      {menuOpen && (
        <div className="header__overlay" onClick={closeMenu} aria-hidden="true" />
      )}
    </header>
  )
}

// Ícone WhatsApp SVG inline (sem biblioteca externa)
function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
