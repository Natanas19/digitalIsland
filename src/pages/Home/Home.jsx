// pages/Home/Home.jsx — Página inicial do Digital Island
// Seções: Hero, Serviços, Como Funciona, Diferencial, Planos, CTA Final

import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import iconSite from '../../assets/icons/site.png'
import iconTrafego from '../../assets/icons/trafego.png'
import iconConteudo from '../../assets/icons/conteudo.png'
import { LuRadio, LuMonitorCheck, LuSettings } from "react-icons/lu";

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Digital%20Island.'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicosSection />
      <ComoFuncionaSection />
      <DiferencialSection />
      <PlanosSection />
      <CTAFinalSection />
    </>
  )
}

/* ================================================================
   HERO
   ================================================================ */
function HeroSection() {
  return (
    <section className="hero" aria-label="Apresentação">
      {/* Grade de fundo decorativa */}
      <div className="hero__grid grid-bg" aria-hidden="true" />

      {/* Glows decorativos */}
      <div className="hero__glow hero__glow--blue"  aria-hidden="true" />
      <div className="hero__glow hero__glow--gold"  aria-hidden="true" />

      <div className="container hero__content">

        <h1 className="hero__title animate-fade-up delay-1">
          Chega de incerteza.<br />
          <span className="text-primary">Hora de resultado.</span>
        </h1>

        <p className="hero__subtitle animate-fade-up delay-2">
          Estruturamos o seu digital com organização, estratégia e acompanhamento
          constante para gerar oportunidades reais de crescimento.
        </p>

        <div className="hero__actions animate-fade-up delay-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Fale Conosco
          </a>
          <Link to="/portfolio" className="btn btn-outline">
            Ver Portfólio
          </Link>
        </div>

        {/* Métricas rápidas */}
        <div className="hero__stats animate-fade-up delay-4">
          {[
            { number: '100+', label: 'Projetos entregues' },
            { number: '3x',   label: 'Crescimento médio' },
            { number: '98%',  label: 'Clientes satisfeitos' },
          ].map(({ number, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-number">{number}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   SERVIÇOS — Visão Geral
   ================================================================ */
function ServicosSection() {
  const items = [
    {
      icon: iconSite,
      title: 'Presença Digital',
      desc: 'Sites e páginas pensados para converter visitantes em clientes. Estrutura clara, visual profissional e carregamento rápido.',
      link: '/sites',
    },
    {
      icon: iconTrafego,
      title: 'Aquisição de Público',
      desc: 'Tráfego pago gerenciado com foco em qualidade e resultado. Alcance as pessoas certas, no momento certo.',
      link: '/trafego',
    },
    {
      icon: iconConteudo,
      title: 'Comunicação e Conteúdo',
      desc: 'Posicionamento claro, autoridade construída com consistência. Conteúdo que gera conexão e oportunidades.',
      link: '/conteudo',
    },
  ]

  return (
    <section className="section services" aria-labelledby="services-title">
      <div className="container">
        <div className="text-center">
          <span className="section-label">O que fazemos</span>
          <h2 className="section-title" id="services-title">
            Estrutura integrada para o seu digital
          </h2>
          <p className="section-desc">
            Atuamos na organização completa do digital, conectando presença, aquisição de público,
            comunicação e conversão em um único fluxo estruturado.
          </p>
        </div>

        <div className="services__grid">
          {items.map(({ icon, title, desc, link }) => (
            <Link to={link} key={title} className="card services__card">
              <img src={icon} alt={title} className="services__icon" />
              <h3 className="services__title">{title}</h3>
              <p className="services__desc">{desc}</p>
              <span className="services__cta">Saiba mais →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   COMO FUNCIONA
   ================================================================ */
function ComoFuncionaSection() {
  const steps = [
    {
      num: '01',
      icon: <LuRadio size={32} />,
      title: 'Atração',
      subtitle: 'Tráfego qualificado',
      desc: 'Geramos interesse de pessoas que realmente podem se tornar clientes, com anúncios segmentados e estratégia de alcance consistente.',
    },
    {
      num: '02',
      icon: <LuMonitorCheck size={32}/>,
      title: 'Conversão',
      subtitle: 'Site e página de destino',
      desc: 'Transformamos visitantes em oportunidades de contato com estrutura visual clara, argumentação direta e chamadas à ação eficazes.',
    },
    {
      num: '03',
      icon: <LuSettings size={32}/>,
      title: 'Organização',
      subtitle: 'Atendimento e automação',
      desc: 'Estruturamos o fluxo de atendimento para que nenhuma oportunidade seja perdida. Automatizamos o que é possível, humanizamos o que importa.',
    },
  ]

  return (
    <section className="section how-it-works" aria-labelledby="how-title">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Metodologia</span>
          <h2 className="section-title" id="how-title">Como funciona</h2>
          <p className="section-desc">
            Um fluxo organizado de ponta a ponta, do primeiro contato com o seu negócio até a conversão.
          </p>
        </div>

        <div className="how__grid">
          {steps.map(({ num, icon, title, subtitle, desc }, i) => (
            <div key={num} className="how__step">
              {/* Linha conectora */}
              {i < steps.length - 1 && (
                <div className="how__connector" aria-hidden="true" />
              )}
              <div className="how__num">{num}</div>
              <span className="how__icon">{icon}</span>
              <h3 className="how__title">{title}</h3>
              <span className="how__subtitle">{subtitle}</span>
              <p className="how__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   DIFERENCIAL — Comunicação constante
   ================================================================ */
function DiferencialSection() {
  const items = [
    { icon: '📋', text: 'Relatórios e atualizações frequentes' },
    { icon: '🔄', text: 'Organização clara das ações em andamento' },
    { icon: '💬', text: 'Canal de comunicação direto e ágil' },
    { icon: '📊', text: 'Transparência em cada etapa do trabalho' },
    { icon: '🎯', text: 'Revisões e ajustes baseados em dados' },
    { icon: '✅', text: 'Entregas organizadas dentro do prazo' },
  ]

  return (
    <section className="section diferencial" aria-labelledby="diff-title">
      {/* Glow de fundo */}
      <div className="diferencial__glow" aria-hidden="true" />

      <div className="container diferencial__inner">
        {/* Lado esquerdo — texto */}
        <div className="diferencial__text">
          <span className="section-label">Nosso diferencial</span>
          <h2 className="section-title" id="diff-title">
            Comunicação e acompanhamento constante
          </h2>
          <div className="divider divider-" />
          <p className="section-desc">
            Mantemos um processo claro de acompanhamento, com atualizações frequentes,
            organização das ações e transparência em cada etapa do trabalho.
          </p>
          <p className="section-desc" style={{ marginTop: '1rem' }}>
            Você sabe exatamente o que está sendo feito, por quê, e quais resultados esperar.
            Sem surpresas, sem ruído.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Vamos conversar
          </a>
        </div>

        {/* Lado direito — lista de itens */}
        <div className="diferencial__list">
          {items.map(({ icon, text }) => (
            <div key={text} className="diferencial__item">
              <span className="diferencial__item-icon">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   PLANOS
   ================================================================ */
function PlanosSection() {
  const planos = [
    {
      name: 'Estrutura de Vendas Digital',
      highlight: false,
      desc: 'Para negócios que precisam organizar a presença digital e começar a gerar oportunidades consistentes.',
      items: [
        'Site profissional otimizado',
        'Configuração de tráfego pago básico',
        'Identidade visual para redes sociais',
        'Acompanhamento mensal',
        'Relatório de resultados',
      ],
      cta: 'Quero este plano',
    },
    {
      name: 'Sistema de Crescimento Contínuo',
      highlight: true,
      desc: 'Para quem quer resultado consistente com estrutura completa de aquisição, conteúdo e conversão.',
      items: [
        'Tudo do plano anterior',
        'Gestão de tráfego pago avançada',
        'Produção de conteúdo mensal',
        'Automações de atendimento',
        'Reuniões quinzenais de acompanhamento',
        'Otimização contínua de campanhas',
      ],
      cta: 'Quero este plano',
    },
    {
      name: 'Estrutura Avançada Multicanal',
      highlight: false,
      desc: 'Para empresas que buscam presença forte em múltiplos canais com gestão integrada e estratégica.',
      items: [
        'Tudo do plano anterior',
        'Múltiplos canais de anúncios',
        'Estratégia de SEO e autoridade',
        'CRM e funil de vendas',
        'Time dedicado à conta',
        'Atendimento prioritário',
      ],
      cta: 'Quero este plano',
    },
  ]

  return (
    <section className="section planos" aria-labelledby="plans-title">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Planos</span>
          <h2 className="section-title" id="plans-title">
            Chega de tentativa.<br />Hora de resultado.
          </h2>
          <p className="section-desc">
            Estruturas organizadas para diferentes momentos do seu negócio.
          </p>
        </div>

        <div className="planos__grid">
          {planos.map(({ name, highlight, desc, items, cta }) => (
            <div
              key={name}
              className={`card planos__card ${highlight ? 'planos__card--highlight' : ''}`}
            >
              {highlight && (
                <span className="planos__badge">Mais popular</span>
              )}
              <h3 className="planos__name">{name}</h3>
              <p className="planos__desc">{desc}</p>
              <ul className="planos__list">
                {items.map(item => (
                  <li key={item} className="planos__item">
                    <span className="planos__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${highlight ? 'btn-primary' : 'btn-outline'} planos__btn`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================================================
   CTA FINAL
   ================================================================ */
function CTAFinalSection() {
  return (
    <section className="section cta-final" aria-labelledby="cta-title">
      <div className="cta-final__glow" aria-hidden="true" />
      <div className="container cta-final__inner">
        <h2 className="section-title" id="cta-title">
          Pronto para estruturar<br />
          <span className="text-primary">o seu digital?</span>
        </h2>
        <p className="section-desc">
          Fale com a gente pelo WhatsApp. Sem enrolação, sem proposta genérica.
          Vamos entender o seu negócio e montar uma estratégia real.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          className="btn btn-whatsapp cta-final__btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  )
}
