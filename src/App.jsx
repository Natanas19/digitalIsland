// App.jsx — Roteador principal do Digital Island
// Cada página tem sua própria rota usando React Router DOM v6

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout compartilhado (Header + Footer + WhatsApp flutuante)
import Layout from './components/Layout/Layout'

// Páginas
import Home        from './pages/Home/Home'
import Sites       from './pages/Sites/Sites'
import TrafegoPago from './pages/TrafegoPago/TrafegoPago'
import Conteudo    from './pages/Conteudo/Conteudo'
import Portfolio   from './pages/Portfolio/Portfolio'
import Contato     from './pages/Contato/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Todas as rotas usam o componente <Layout>,
          que envolve o conteúdo com Header e Footer fixos.
        */}
        <Route path="/" element={<Layout />}>
          <Route index          element={<Home />} />
          <Route path="sites"   element={<Sites />} />
          <Route path="trafego" element={<TrafegoPago />} />
          <Route path="conteudo" element={<Conteudo />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
