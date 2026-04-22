// Header.jsx — Cabeçalho fixo com logo, navegação e CTA WhatsApp

import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'

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
