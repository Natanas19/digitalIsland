// pages/Home/Home.jsx — Página inicial do Digital Island
// Seções: Hero, Serviços, Como Funciona, Diferencial, Planos, CTA Final

import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import iconSite from '../../assets/icons/site.svg'
import iconTrafego from '../../assets/icons/trafego.svg'
import iconConteudo from '../../assets/icons/conteudo.svg'
import { LuArrowRight, LuRadio, LuMonitorCheck, LuSettings, } from "react-icons/lu";
import { LuClipboardList, LuRefreshCw, LuMessageCircle, LuTrendingUp, LuTarget, LuCheck } from "react-icons/lu";

const WHATSAPP = 'https://wa.me/554888793113?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Digital%20Island.'


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
      {/* Imagem de fundo do Hero */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glows decorativos */}
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--gold" aria-hidden="true" />

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
      title: 'Sites e Landing Pages',
      desc: 'Sites e páginas pensados para converter visitantes em clientes. Estrutura clara, visual profissional e carregamento rápido.',
      link: '/sites',
    },
    {
      icon: iconTrafego,
      title: 'Automação de Atendimento',
      desc: 'Atendimento automatizado para otimizar o relacionamento com o cliente e direcioná-lo sem depender de processos manuais.',
      link: '/trafego',
    },
    {
      icon: iconConteudo,
      title: 'Mídias Sociais',
      desc: 'Posicionamento da marca e conteúdo postado com frequência. Perfil profissional que gera conexão e oportunidades.',
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
              <span className="services__cta">
                Saiba mais <LuArrowRight size={16} aria-hidden="true" />
              </span>
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
      icon: <LuRadio size={32} color="var(--color-primary)" />,
      title: 'Atração',
      subtitle: 'Tráfego qualificado',
      desc: 'Geramos interesse de pessoas que realmente podem se tornar clientes, com anúncios segmentados e estratégia de alcance consistente.',
    },
    {
      num: '02',
      icon: <LuMonitorCheck size={32} color="var(--color-primary)" />,
      title: 'Conversão',
      subtitle: 'Site e página de destino',
      desc: 'Transformamos visitantes em oportunidades de contato com estrutura visual clara, argumentação direta e chamadas à ação eficazes.',
    },
    {
      num: '03',
      icon: <LuSettings size={32} color="var(--color-primary)" />,
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
    { icon: <LuClipboardList size={20} />, text: 'Relatórios e atualizações frequentes' },
    { icon: <LuRefreshCw size={20} />, text: 'Organização clara das ações em andamento' },
    { icon: <LuMessageCircle size={20} />, text: 'Canal de comunicação direto e ágil' },
    { icon: <LuTrendingUp size={20} />, text: 'Transparência em cada etapa do trabalho' },
    { icon: <LuTarget size={20} />, text: 'Revisões e ajustes baseados em dados' },
    { icon: <LuCheck size={20} />, text: 'Entregas organizadas dentro do prazo' },
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
                    <span className="planos__check">
                      <LuCheck size={16} aria-hidden="true" />
                    </span>
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
          <LuMessageCircle size={20} aria-hidden="true" />
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  )
}
