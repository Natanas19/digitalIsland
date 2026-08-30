// pages/NotFound/NotFound.jsx — Página exibida para rotas inexistentes

import React from 'react'
import { Link } from 'react-router-dom'
import { LuArrowLeft, LuMessageCircle } from 'react-icons/lu'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      {/* <div className="not-found__glow not-found__glow--blue" aria-hidden="true" /> */}
      {/* <div className="not-found__glow not-found__glow--gold" aria-hidden="true" /> */}

      <div className="container not-found__content">
        <span className="not-found__code animate-fade-in" aria-hidden="true">
          404
        </span>

        <span className="section-label animate-fade-up">Página não encontrada</span>
        <h1 id="not-found-title" className="not-found__title animate-fade-up delay-1">
          Parece que esta página saiu da <span className="text-primary">rota</span>
        </h1>
        <p className="not-found__description animate-fade-up delay-2">
          O endereço pode estar incorreto ou a página pode ter sido movida. Você pode voltar ao início
          ou falar diretamente com a nossa equipe.
        </p>

        <div className="not-found__actions animate-fade-up delay-3">
          <Link to="/" className="btn btn-primary">
            <LuArrowLeft size={18} aria-hidden="true" />
            Voltar para o início
          </Link>
          <Link to="/contato" className="btn btn-outline">
            <LuMessageCircle size={18} aria-hidden="true" />
            Falar com a equipe
          </Link>
        </div>
      </div>
    </section>
  )
}
