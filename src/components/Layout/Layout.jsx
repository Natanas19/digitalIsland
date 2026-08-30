// Layout.jsx — Wrapper de todas as páginas
// Contém: Header fixo, conteúdo da página (via <Outlet>), Footer e botão WhatsApp flutuante

import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat'

export default function Layout({ children, showHeader = true, showFooter = true }) {
  const { pathname } = useLocation()

  // Scroll para o topo a cada troca de rota
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      {showHeader && <Header />}

      {/* Conteúdo da página atual */}
      <main>
        {children || <Outlet />}
      </main>

      {showFooter && <Footer />}

      {/* Botão WhatsApp fixo, visível em todas as páginas */}
      <WhatsAppFloat />
    </>
  )
}
