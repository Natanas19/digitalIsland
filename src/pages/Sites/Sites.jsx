// pages/Sites/Sites.jsx — Página de serviço: Criação de Sites
// Foco: clareza, conversão, estrutura

import React from 'react'
import './Sites.css'

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20site%20profissional.'

export default function Sites() {
  const diferenciais = [
    { icon: '⚡', title: 'Carregamento rápido', desc: 'Sites otimizados para performance, sem deixar o visitante esperando.' },
    { icon: '📱', title: 'Responsivo em todos os dispositivos', desc: 'Experiência perfeita no celular, tablet e desktop.' },
    { icon: '🎯', title: 'Focado em conversão', desc: 'Cada elemento da página pensado para transformar visita em contato.' },
    { icon: '🔍', title: 'Preparado para SEO', desc: 'Estrutura técnica correta para aparecer bem nos mecanismos de busca.' },
    { icon: '🛡️', title: 'Seguro e estável', desc: 'Certificado SSL, hospedagem confiável e suporte contínuo.' },
    { icon: '✏️', title: 'Fácil de atualizar', desc: 'Painel intuitivo para você editar textos e imagens sem precisar de técnico.' },
  ]

  const tipos = [
    {
      title: 'Site Institucional',
      desc: 'Apresenta sua empresa com profissionalismo. Ideal para gerar credibilidade e ser encontrado pelo público certo.',
      badge: 'Mais solicitado',
    },
    {
      title: 'Landing Page',
      desc: 'Página única focada em um único objetivo: converter. Perfeita para campanhas de tráfego pago.',
      badge: 'Alta conversão',
    },
    {
      title: 'Site + Blog',
      desc: 'Presença digital completa com conteúdo que gera autoridade e tráfego orgânico ao longo do tempo.',
      badge: 'Crescimento orgânico',
    },
  ]

  return (
    <>
      {/* Hero da página */}
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Serviço</span>
          <h1 className="page-hero__title animate-fade-up delay-1">
            Sites que <span className="text-primary">convertem</span>
          </h1>
          <p className="section-desc animate-fade-up delay-2">
            Não basta ter um site bonito. Ele precisa ser claro, rápido e estruturado para transformar
            visitantes em oportunidades reais de negócio.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary animate-fade-up delay-3" style={{ marginTop: '2rem' }}>
            Quero um site profissional
          </a>
        </div>
      </section>

      {/* Tipos de site */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container">
          <span className="section-label">O que entregamos</span>
          <h2 className="section-title">Tipos de projeto</h2>
          <div className="tipos-grid">
            {tipos.map(({ title, desc, badge }) => (
              <div key={title} className="card tipos__card">
                <span className="badge">{badge}</span>
                <h3 style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Por que a Digital Island</span>
            <h2 className="section-title">Sites com estrutura real</h2>
            <p className="section-desc">
              Cada detalhe é pensado para gerar resultado. Da estrutura técnica à comunicação visual.
            </p>
          </div>
          <div className="diferenciais-grid">
            {diferenciais.map(({ icon, title, desc }) => (
              <div key={title} className="card diff-card">
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem' }}>{icon}</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container">
          <span className="section-label">Como trabalhamos</span>
          <h2 className="section-title">Processo organizado, entrega clara</h2>
          <div className="processo-grid">
            {[
              { n: '01', t: 'Briefing', d: 'Entendemos seu negócio, público e objetivos antes de qualquer linha de código.' },
              { n: '02', t: 'Planejamento', d: 'Estruturamos o site: páginas, fluxo de navegação e conteúdo necessário.' },
              { n: '03', t: 'Design', d: 'Criação visual alinhada com a identidade da sua empresa e focada em conversão.' },
              { n: '04', t: 'Desenvolvimento', d: 'Codificação rápida, responsiva e com as melhores práticas técnicas.' },
              { n: '05', t: 'Revisão', d: 'Você acompanha, aprova e solicita ajustes antes de ir ao ar.' },
              { n: '06', t: 'Publicação', d: 'Site no ar com domínio configurado, SSL ativo e suporte pós-entrega.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  opacity: 0.5,
                  lineHeight: 1,
                  flexShrink: 0,
                  minWidth: '2.5rem',
                }}>{n}</span>
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>{t}</strong>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSimples
        text="Pronto para ter um site que trabalha por você?"
        btn="Falar com a equipe"
        link={WHATSAPP}
      />
    </>
  )
}

/* CTA genérico reutilizável dentro desta página */
function CtaSimples({ text, btn, link }) {
  return (
    <section className="section cta-simples">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">{text}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer"
          className="btn btn-whatsapp" style={{ marginTop: '1.5rem', fontSize: '1rem', padding: '0.9rem 2rem' }}>
          {btn}
        </a>
      </div>
    </section>
  )
}
