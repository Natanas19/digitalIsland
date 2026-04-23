// pages/Conteudo/Conteudo.jsx
// Foco: posicionamento, autoridade, consistência

import React from 'react'
import '../Sites/Sites.css' // Reaproveita estilos compartilhados

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20gest%C3%A3o%20de%20conte%C3%BAdo.'

export default function Conteudo() {
  const formatos = [
    { icon: '📸', title: 'Posts para Redes Sociais', desc: 'Feed, carrosséis e stories com identidade visual consistente e linguagem alinhada à sua marca.' },
    { icon: '🎬', title: 'Roteiros para Vídeo', desc: 'Roteiros estratégicos para Reels, YouTube Shorts e vídeos institucionais que geram autoridade.' },
    { icon: '✍️', title: 'Copywriting', desc: 'Textos persuasivos para bio, legendas, anúncios e páginas de venda com foco em conversão.' },
    { icon: '📰', title: 'Artigos e Blog', desc: 'Conteúdo de valor que melhora o SEO do seu site e posiciona você como referência no mercado.' },
    { icon: '📧', title: 'E-mail Marketing', desc: 'Sequências de e-mails para nutrir leads, manter o relacionamento e gerar recompra.' },
    { icon: '🎙️', title: 'Conteúdo de Autoridade', desc: 'Depoimentos, cases de resultado e bastidores que constroem confiança no seu público.' },
  ]

  const pilares = [
    {
      icon: '🏛️',
      title: 'Posicionamento',
      desc: 'Definimos como a sua marca quer ser percebida e criamos conteúdo que reforça essa identidade em cada publicação.',
    },
    {
      icon: '📅',
      title: 'Consistência',
      desc: 'Presença regular e planejada. Nada de postar quando lembra. Calendário editorial organizado, todo mês.',
    },
    {
      icon: '📈',
      title: 'Autoridade',
      desc: 'Conteúdo que educa, informa e demonstra competência. Seu público passa a te ver como referência, não como mais um.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Serviço</span>
          <h1 className="page-hero__title animate-fade-up delay-1">
            Conteúdo que <span className="text-primary">gera autoridade</span>
          </h1>
          <p className="section-desc animate-fade-up delay-2">
            Não é sobre postar todo dia. É sobre comunicar com consistência, clareza e
            intenção — para que o público certo te encontre e confie em você.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary animate-fade-up delay-3" style={{ marginTop: '2rem' }}>
            Quero estruturar meu conteúdo
          </a>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Nossa abordagem</span>
            <h2 className="section-title">Os 3 pilares do conteúdo estratégico</h2>
          </div>
          <div className="tipos-grid" style={{ marginTop: '3rem' }}>
            {pilares.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>{title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="section">
        <div className="container">
          <span className="section-label">O que produzimos</span>
          <h2 className="section-title">Formatos e entregas</h2>
          <div className="diferenciais-grid">
            {formatos.map(({ icon, title, desc }) => (
              <div key={title} className="card">
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.75rem' }}>{icon}</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container">
          <div className="text-center">
            <span className="section-label">Processo</span>
            <h2 className="section-title">Do briefing ao calendário</h2>
            <p className="section-desc">
              Trabalhamos com um processo claro e organizado para que o conteúdo
              saia no prazo, alinhado com a sua marca e com propósito estratégico.
            </p>
          </div>

          <div
            className="conteudo-processo"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
              marginTop: '3rem',
            }}
          >
            {[
              { n: '01', t: 'Imersão na marca', d: 'Tom de voz, público-alvo, diferenciais e objetivos.' },
              { n: '02', t: 'Planejamento editorial', d: 'Calendário mensal com temas, formatos e datas.' },
              { n: '03', t: 'Produção', d: 'Textos, artes e roteiros criados e revisados.' },
              { n: '04', t: 'Entrega e análise', d: 'Publicação organizada e acompanhamento de performance.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="card" style={{ textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  opacity: 0.4,
                  display: 'block',
                  marginBottom: '0.5rem',
                }}>{n}</span>
                <strong style={{ display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>{t}</strong>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reforço diferencial */}
      <section className="section">
        <div className="container">
          <div style={{
            background: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            maxWidth: 750,
            marginInline: 'auto',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at center, hsl(210,100%,55%,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>💬</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '1rem' }}>
              Acompanhamento mensal incluso
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 540, marginInline: 'auto' }}>
              Toda gestão de conteúdo inclui reunião mensal de alinhamento, relatório
              de desempenho e canal direto de comunicação. Você sabe o que está sendo
              feito e por que.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-simples">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Pronto para construir autoridade digital?</h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp" style={{ marginTop: '1.5rem', fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Falar com a equipe
          </a>
        </div>
      </section>
    </>
  )
}
