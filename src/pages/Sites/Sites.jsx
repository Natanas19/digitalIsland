// pages/Sites/Sites.jsx — Página de serviço: Criação de Sites
// Seções: visão geral, site institucional, loja virtual, landing page e CTA

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import {
  LuArrowRight,
  LuCheck,
} from 'react-icons/lu'
import lojaVirtualImage from '../../assets/loja-virtual.png'
import landingPageImage from '../../assets/celular-landing-page.png'
import './Sites.css'
import { WHATSAPP_LINKS } from '../../config/contact'

const SOLUTIONS = [
  {
    id: 'site-institucional',
    eyebrow: 'Presença e credibilidade',
    title: 'Site Institucional',
    highlight: 'que representa sua empresa',
    description: 'Uma presença profissional para apresentar sua marca, seus serviços e seus diferenciais com clareza. Ideal para empresas que precisam transmitir confiança e facilitar o primeiro contato.',
    features: [
      'Páginas planejadas para apresentar sua empresa',
      'Serviços, diferenciais e canais de contato organizados',
      'Estrutura responsiva para celular, tablet e desktop',
      'Base técnica preparada para mecanismos de busca',
    ],
    action: 'Quero um site institucional',
    whatsappLink: WHATSAPP_LINKS.sites.institutional,
    theme: 'light',
  },
  {
    id: 'loja-virtual',
    eyebrow: 'Venda online',
    title: 'Loja Virtual',
    highlight: 'pronta para vender',
    description: 'Uma operação digital organizada para apresentar produtos, receber pedidos e simplificar a jornada de compra. Sua loja disponível todos os dias, em qualquer dispositivo.',
    features: [
      'Catálogo de produtos organizado por categorias',
      'Carrinho e fluxo de compra simplificado',
      'Integração com meios de pagamento',
      'Painel para acompanhar produtos e pedidos',
    ],
    action: 'Quero vender pela internet',
    whatsappLink: WHATSAPP_LINKS.sites.store,
    image: lojaVirtualImage,
    imageAlt: 'Exemplo de loja virtual com catálogo de produtos e carrinho de compras',
    imageWidth: 1382,
    imageHeight: 922,
  },
  {
    id: 'landing-page',
    eyebrow: 'Campanhas e conversão',
    title: 'Landing Page',
    highlight: 'focada em resultado',
    description: 'Uma página direta, construída em torno de uma única oferta e uma ação principal. Perfeita para anúncios, lançamentos, captação de leads e validação de novos serviços.',
    features: [
      'Mensagem alinhada com a intenção da campanha',
      'Estrutura objetiva e sem distrações',
      'Chamadas para ação distribuídas estrategicamente',
      'Integração com WhatsApp e ferramentas de captação',
    ],
    action: 'Quero uma landing page',
    whatsappLink: WHATSAPP_LINKS.sites.landingPage,
    image: landingPageImage,
    imageAlt: 'Exemplo de landing page responsiva exibida em um celular',
    imageWidth: 1152,
    imageHeight: 1728,
    imagePosition: 'right',
    theme: 'blue',
  },
]

export default function Sites() {
  const { hash } = useLocation()

  useEffect(() => {
    const scrollFrame = window.requestAnimationFrame(() => {
      if (!hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(scrollFrame)
  }, [hash])

  return (
    <>
      <section className="page-hero sites-hero" aria-labelledby="sites-title">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container sites-hero__content">
          <span className="section-label animate-fade-up">Serviço</span>
          <h1 id="sites-title" className="page-hero__title animate-fade-up delay-1">
            Sites que <span className="text-primary">convertem</span>
          </h1>
          <p className="section-desc animate-fade-up delay-2">
            Não basta ter um site bonito. Ele precisa ser claro, rápido e estruturado para transformar
            visitantes em oportunidades reais de negócio.
          </p>
          <a href={WHATSAPP_LINKS.sites.hero} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary animate-fade-up delay-3 sites-hero__button">
            Quero um site profissional
            <LuArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {SOLUTIONS.map(solution => (
        <SolutionSection key={solution.id} {...solution} />
      ))}

      <section className="sites-cta" aria-labelledby="sites-cta-title">
        <div className="sites-cta__glow" aria-hidden="true" />
        <div className="container sites-cta__content">
          <span className="section-label">Vamos começar?</span>
          <h2 id="sites-cta-title" className="section-title">
            Pronto para ter um site<br />
            <span className="text-primary">que trabalha por você?</span>
          </h2>
          <p className="section-desc">
            Conte para a gente o que você precisa. Vamos entender o momento do seu negócio e indicar
            a estrutura mais adequada para transformar visitas em oportunidades.
          </p>
          <a href={WHATSAPP_LINKS.sites.finalCta} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp sites-cta__button">
            <FaWhatsapp size={20} aria-hidden="true" />
            Falar com a equipe
          </a>
        </div>
      </section>
    </>
  )
}

function SolutionSection({
  id,
  eyebrow,
  title,
  highlight,
  description,
  features,
  action,
  whatsappLink,
  theme,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePosition = 'left',
}) {
  const titleId = `${id}-title`
  const visual = image && (
    <div className="sites-solution__visual">
      <img
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
      />
    </div>
  )

  return (
    <section
      id={id}
      className={`sites-solution${theme ? ` sites-solution--${theme}` : ''}`}
      aria-labelledby={titleId}
    >
      {/* <div className="sites-solution__glow" aria-hidden="true" /> */}
      <div className={`container sites-solution__inner${image ? ` sites-solution__inner--with-visual sites-solution__inner--visual-${imagePosition}` : ''}`}>
        {imagePosition === 'left' && visual}

        <div className="sites-solution__content">
          <span className="section-label">{eyebrow}</span>
          <h2 id={titleId} className="sites-solution__title">
            {title}<br />
            <span>{highlight}</span>
          </h2>
          <p className="sites-solution__description">{description}</p>

          <ul className="sites-solution__features">
            {features.map(feature => (
              <li key={feature}>
                <span className="sites-solution__check">
                  <LuCheck size={17} aria-hidden="true" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary sites-solution__button">
            {action}
            <LuArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        {imagePosition === 'right' && visual}
      </div>
    </section>
  )
}
