// Header.jsx — Cabeçalho fixo com logo, navegação e CTA WhatsApp

import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { LuChevronDown } from 'react-icons/lu'
import './Header.css'
import logo from '../../assets/logo.png'

// Itens de navegação
const NAV_ITEMS = [
  { label: 'Tráfego Pago', to: '/trafego' },
  { label: 'Conteúdo', to: '/conteudo' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Contato', to: '/contato' },
]

const SITES_ITEMS = [
  { label: 'Visão geral', to: '/sites' },
  { label: 'Site Institucional', to: '/sites#site-institucional' },
  { label: 'Loja Virtual', to: '/sites#loja-virtual' },
  { label: 'Landing Page', to: '/sites#landing-page' },
]

const getFocusableElements = (container) => {
  if (!container) return []

  return [...container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(element => {
      const style = window.getComputedStyle(element)
      return style.visibility !== 'hidden' && style.display !== 'none'
    })
}

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sitesOpen, setSitesOpen] = useState(false)
  const navRef = useRef(null)
  const burgerRef = useRef(null)
  const sitesMenuRef = useRef(null)
  const sitesButtonRef = useRef(null)

  // Adiciona fundo sólido ao header quando rola a página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha os menus também ao navegar pelo histórico do navegador.
  useEffect(() => {
    setMenuOpen(false)
    setSitesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!sitesMenuRef.current?.contains(event.target)) {
        setSitesOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key !== 'Escape') return

      if (sitesOpen) {
        setSitesOpen(false)
        sitesButtonRef.current?.focus()
      } else if (menuOpen) {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen, sitesOpen])

  // No mobile, impede scroll e interação com o conteúdo atrás do menu.
  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const backgroundElements = [
      document.querySelector('main'),
      document.querySelector('footer'),
      document.querySelector('.wpp-float'),
      document.querySelector('.header__logo'),
    ].filter(Boolean)
    const previousInertStates = backgroundElements.map(element => element.hasAttribute('inert'))

    document.body.style.overflow = 'hidden'
    backgroundElements.forEach(element => element.setAttribute('inert', ''))

    return () => {
      document.body.style.overflow = previousOverflow
      backgroundElements.forEach((element, index) => {
        if (!previousInertStates[index]) element.removeAttribute('inert')
      })
    }
  }, [menuOpen])

  // Move e mantém o foco dentro do menu enquanto ele estiver aberto.
  useEffect(() => {
    if (!menuOpen) return undefined

    const focusFrame = window.requestAnimationFrame(() => {
      getFocusableElements(navRef.current)[0]?.focus()
    })

    const trapFocus = (event) => {
      if (event.key !== 'Tab') return

      const focusableElements = getFocusableElements(navRef.current)
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', trapFocus)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', trapFocus)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setSitesOpen(false)
  }

  const closeMenuAndRestoreFocus = () => {
    const shouldRestoreFocus = menuOpen
    closeMenu()
    if (shouldRestoreFocus) {
      window.requestAnimationFrame(() => burgerRef.current?.focus())
    }
  }

  const handleSitesItemClick = (to) => {
    closeMenuAndRestoreFocus()

    if (pathname !== '/sites') return

    const targetId = to.split('#')[1]

    window.requestAnimationFrame(() => {
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <header className={`header ${scrolled || menuOpen ? 'header--scrolled' : ''}`}>
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
        <nav ref={navRef} id="main-navigation" className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Navegação principal">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            onClick={closeMenuAndRestoreFocus}
          >
            Home
          </NavLink>

          <div
            ref={sitesMenuRef}
            className={`nav-dropdown ${sitesOpen ? 'nav-dropdown--open' : ''}`}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') setSitesOpen(true)
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse') setSitesOpen(false)
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setSitesOpen(false)
            }}
          >
            <button
              ref={sitesButtonRef}
              type="button"
              className={`nav-link nav-dropdown__trigger ${pathname === '/sites' ? 'nav-link--active' : ''}`}
              aria-expanded={sitesOpen}
              aria-controls="sites-dropdown"
              onClick={() => setSitesOpen(open => !open)}
            >
              Sites
              <LuChevronDown className="nav-dropdown__chevron" size={15} aria-hidden="true" />
            </button>

            <div id="sites-dropdown" className="nav-dropdown__menu" aria-label="Tipos de sites">
              {SITES_ITEMS.map(({ label, to }) => (
                <Link key={to} to={to} className="nav-dropdown__item" onClick={() => handleSitesItemClick(to)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
              onClick={closeMenuAndRestoreFocus}
            >
              {label}
            </NavLink>
          ))}

        </nav>

        {/* ---- Hamburguer mobile ---- */}
        <button
          ref={burgerRef}
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => {
            if (menuOpen) closeMenuAndRestoreFocus()
            else setMenuOpen(true)
          }}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span /><span /><span />
        </button>

      </div>

      {/* Overlay escuro quando menu mobile está aberto */}
      {menuOpen && (
        <div className="header__overlay" onClick={closeMenuAndRestoreFocus} aria-hidden="true" />
      )}
    </header>
  )
}
