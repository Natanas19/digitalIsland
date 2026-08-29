// pages/Contato/Contato.jsx
// FAQ simples, contato direto e reforço de confiança

import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import {
  LuArrowRight,
  LuClipboardList,
  LuInstagram,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuMinus,
  LuPlus,
  LuShieldCheck,
  LuZap,
} from 'react-icons/lu'
import './Contato.css'
import '../Sites/Sites.css'

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20meu%20projeto.'

// Perguntas Frequentes
const FAQS = [
  {
    p: 'Como funciona o processo de início?',
    r: 'Tudo começa com uma conversa pelo WhatsApp. Entendemos o seu negócio, seus objetivos e o momento atual. A partir daí, montamos uma proposta personalizada — sem pressão e sem proposta genérica.',
  },
  {
    p: 'Quanto tempo leva para ver resultados?',
    r: 'Depende do serviço e do ponto de partida. Sites ficam prontos em média em 2 a 3 semanas. Campanhas de tráfego pago normalmente mostram dados relevantes nas primeiras 2 semanas de otimização. Conteúdo e posicionamento são estratégias de médio prazo — resultados consistentes a partir de 60 a 90 dias.',
  },
  {
    p: 'Vocês atendem qualquer tipo de negócio?',
    r: 'Trabalhamos com negócios locais, prestadores de serviço, clínicas, comércio e empresas B2B. O que mais importa não é o segmento, mas a disposição do cliente em estruturar o digital com seriedade e constância.',
  },
  {
    p: 'Como é feito o acompanhamento durante o trabalho?',
    r: 'Cada cliente tem um canal direto de comunicação conosco. Enviamos relatórios periódicos, fazemos reuniões de alinhamento conforme o plano contratado e estamos disponíveis para dúvidas sempre que necessário. Transparência e organização fazem parte do nosso processo.',
  },
  {
    p: 'Precisamos ter CNPJ ou empresa formalizada?',
    r: 'Não é obrigatório. Atendemos tanto MEIs e autônomos quanto empresas de médio porte. O que avaliamos é o potencial de crescimento e a seriedade do projeto.',
  },
  {
    p: 'Vocês oferecem suporte depois da entrega?',
    r: 'Sim. Sites incluem suporte pós-entrega por 30 dias. Planos de gestão contínua (tráfego e conteúdo) incluem suporte mensal incluso no contrato.',
  },
  {
    p: 'Como funciona o contrato e pagamento?',
    r: 'Trabalhamos com contratos simples e transparentes. O pagamento varia por serviço: projetos pontuais como sites têm parte antecipada e parte na entrega. Serviços mensais como tráfego e conteúdo são cobrados mensalmente.',
  },
  {
    p: 'Posso contratar apenas um serviço ou preciso do pacote completo?',
    r: 'Você pode contratar serviços individualmente. Porém, a maior eficiência acontece quando os serviços trabalham em conjunto — site + tráfego, ou tráfego + conteúdo. Vamos te indicar a combinação mais adequada para o seu momento.',
  },
]

export default function Contato() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Contato</span>
          <h1 className="page-hero__title animate-fade-up delay-1">
            Vamos conversar sobre<br />
            <span className="text-primary">o seu negócio</span>
          </h1>
          <p className="section-desc animate-fade-up delay-2">
            Sem formulários longos, sem espera. Fale diretamente com a equipe pelo WhatsApp
            e receba uma resposta rápida e objetiva.
          </p>
        </div>
      </section>

      {/* Canais de contato + reforço de confiança */}
      <section className="section" style={{ background: 'hsl(220, 20%, 3%)' }}>
        <div className="container contato__top">

          {/* Canais */}
          <div>
            <span className="section-label">Fale com a gente</span>
            <h2 className="section-title">Contato direto</h2>

            <div className="contato__canais">
              {/* WhatsApp — principal */}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="contato__canal contato__canal--destaque"
              >
                <div className="contato__canal-icon" style={{ background: 'rgba(37,211,102,0.12)' }}>
                  <FaWhatsapp size={24} color="#25D366" aria-hidden="true" />
                </div>
                <div>
                  <strong className="contato__canal-titulo">WhatsApp</strong>
                  <span className="contato__canal-desc">Resposta rápida — canal principal de atendimento</span>
                </div>
                <span className="contato__canal-seta"><LuArrowRight size={18} aria-hidden="true" /></span>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@digitalisland.com.br"
                className="contato__canal"
              >
                <div className="contato__canal-icon" style={{ background: 'hsl(210,100%,55%,0.1)' }}>
                  <LuMail size={22} color="var(--color-primary)" aria-hidden="true" />
                </div>
                <div>
                  <strong className="contato__canal-titulo">E-mail</strong>
                  <span className="contato__canal-desc">contato@digitalisland.com.br</span>
                </div>
                <span className="contato__canal-seta"><LuArrowRight size={18} aria-hidden="true" /></span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digitalisland.ltda"
                target="_blank"
                rel="noopener noreferrer"
                className="contato__canal"
              >
                <div className="contato__canal-icon" style={{ background: 'hsl(315,100%,55%,0.1)' }}>
                  <LuInstagram size={22} color="hsl(315,100%,65%)" aria-hidden="true" />
                </div>
                <div>
                  <strong className="contato__canal-titulo">Instagram</strong>
                  <span className="contato__canal-desc">@digitalisland</span>
                </div>
                <span className="contato__canal-seta"><LuArrowRight size={18} aria-hidden="true" /></span>
              </a>
            </div>
          </div>

          {/* Reforços de confiança */}
          <div className="contato__trust">
            <span className="section-label">Por que a Digital Island</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Comprometidos com o seu resultado
            </h2>
            <div className="contato__trust-items">
              {[
                { icon: <LuZap size={20} />, t: 'Resposta rápida', d: 'Respondemos em até 2 horas em dias úteis.' },
                { icon: <LuClipboardList size={20} />, t: 'Proposta personalizada', d: 'Sem templates genéricos. Estratégia para o seu negócio.' },
                { icon: <LuShieldCheck size={20} />, t: 'Sem fidelidade forçada', d: 'Nosso compromisso é com resultado, não com contrato longo.' },
                { icon: <LuMessageCircle size={20} />, t: 'Comunicação constante', d: 'Você sabe tudo o que está acontecendo, sempre.' },
              ].map(({ icon, t, d }) => (
                <div key={t} className="contato__trust-item">
                  <span className="contato__trust-icon">{icon}</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.2rem', fontFamily: 'var(--font-heading)', fontSize: '0.95rem' }}>{t}</strong>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{d}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Localização */}
            <div className="contato__local">
              <LuMapPin size={18} aria-hidden="true" />
              <span>Florianópolis, SC — Atendemos todo o Brasil de forma remota.</span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Dúvidas</span>
            <h2 className="section-title">Perguntas frequentes</h2>
            <p className="section-desc">
              Se a sua dúvida não estiver aqui, é só chamar no WhatsApp.
            </p>
          </div>
          <div className="faq-lista">
            {FAQS.map((item, i) => (
              <FaqItem key={i} pergunta={item.p} resposta={item.r} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section cta-simples">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Ainda com dúvidas?<br />
            <span className="text-primary">A gente resolve agora.</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', marginBottom: '1.5rem' }}>
            Uma conversa de 10 minutos pode ser o início de uma estrutura digital que gera resultado.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

/* Accordion de FAQ */
function FaqItem({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className={`faq-item ${aberto ? 'faq-item--aberto' : ''}`}>
      <button
        className="faq-pergunta"
        onClick={() => setAberto(v => !v)}
        aria-expanded={aberto}
      >
        <span>{pergunta}</span>
        <span className="faq-icone" aria-hidden="true">
          {aberto ? <LuMinus size={20} /> : <LuPlus size={20} />}
        </span>
      </button>

      {aberto && (
        <div className="faq-resposta">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  )
}
