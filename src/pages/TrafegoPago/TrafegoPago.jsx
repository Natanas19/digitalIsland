// pages/TrafegoPago/TrafegoPago.jsx
// Foco: geração de interesse, alcance qualificado, consistência

import React from 'react'
import '../Sites/Sites.css' // Reaproveita estilos compartilhados

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Tenho%20interesse%20em%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago.'

export default function TrafegoPago() {
  const canais = [
    { icon: '📘', name: 'Meta Ads', desc: 'Facebook e Instagram. Alcance amplo com segmentação precisa por interesse, comportamento e dados demográficos.' },
    { icon: '🔍', name: 'Google Ads', desc: 'Apareça quando o cliente está ativamente buscando pelo que você oferece. Intenção de compra alta.' },
    { icon: '💼', name: 'LinkedIn Ads', desc: 'Para negócios B2B. Segmentação por cargo, empresa e setor. Ideal para alcançar decisores.' },
    { icon: '🎵', name: 'TikTok Ads', desc: 'Alcance orgânico potencializado com investimento. Ideal para marcas que querem escala rápida.' },
  ]

  const passos = [
    { num: '01', title: 'Diagnóstico', desc: 'Análise do negócio, público-alvo e histórico de campanhas para construir uma base sólida.' },
    { num: '02', title: 'Estratégia', desc: 'Definimos objetivos, canais, orçamento e mensagem. Sem atirar para todos os lados.' },
    { num: '03', title: 'Criação', desc: 'Desenvolvemos os criativos (textos e visuais) com foco em capturar atenção e gerar clique qualificado.' },
    { num: '04', title: 'Monitoramento', desc: 'Acompanhamos as campanhas diariamente e fazemos ajustes rápidos quando necessário.' },
    { num: '05', title: 'Relatório', desc: 'Você recebe relatórios claros com os números que importam para a tomada de decisão.' },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Serviço</span>
          <h1 className="page-hero__title animate-fade-up delay-1">
            Tráfego pago com <span className="text-primary">alcance qualificado</span>
          </h1>
          <p className="section-desc animate-fade-up delay-2">
            Não adianta aparecer para todo mundo. Gerenciamos suas campanhas para atingir
            as pessoas certas, no momento certo, com a mensagem certa.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary animate-fade-up delay-3" style={{ marginTop: '2rem' }}>
            Quero mais oportunidades de contato
          </a>
        </div>
      </section>

      {/* Canais */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container">
          <span className="section-label">Onde anunciamos</span>
          <h2 className="section-title">Canais que dominamos</h2>
          <div className="diferenciais-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {canais.map(({ icon, name, desc }) => (
              <div key={name} className="card" style={{ display: 'flex', gap: '1.25rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{icon}</span>
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>{name}</strong>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Metodologia</span>
            <h2 className="section-title">Gestão com consistência</h2>
            <p className="section-desc">
              Campanhas não são set-and-forget. Gerenciamos, monitoramos e otimizamos continuamente.
            </p>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 700, marginInline: 'auto' }}>
            {passos.map(({ num, title, desc }) => (
              <div key={num} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', opacity: 0.5, minWidth: '2.5rem', flexShrink: 0 }}>{num}</span>
                <div>
                  <strong style={{ display: 'block', marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>{title}</strong>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container text-center">
          <span className="section-label">Resultados</span>
          <h2 className="section-title">O que você pode esperar</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { val: '+40%', label: 'Redução no custo por lead (média dos clientes)' },
              { val: '3x',   label: 'Mais oportunidades com o mesmo orçamento' },
              { val: '100%', label: 'Transparência em relatórios e resultados' },
            ].map(({ val, label }) => (
              <div key={val} className="card" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginBottom: '0.75rem' }}>{val}</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-simples">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Vamos ativar o seu tráfego qualificado?</h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp" style={{ marginTop: '1.5rem', fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Falar com a equipe
          </a>
        </div>
      </section>
    </>
  )
}
