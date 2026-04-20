// pages/Contato/Contato.jsx
// FAQ simples, contato direto e reforço de confiança

import React, { useState } from 'react'
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <strong className="contato__canal-titulo">WhatsApp</strong>
                  <span className="contato__canal-desc">Resposta rápida — canal principal de atendimento</span>
                </div>
                <span className="contato__canal-seta">→</span>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@digitalisland.com.br"
                className="contato__canal"
              >
                <div className="contato__canal-icon" style={{ background: 'hsl(210,100%,55%,0.1)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <strong className="contato__canal-titulo">E-mail</strong>
                  <span className="contato__canal-desc">contato@digitalisland.com.br</span>
                </div>
                <span className="contato__canal-seta">→</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digitalislandltda?igsh=eHhsMXBzZmQyOGdr"
                target="_blank"
                rel="noopener noreferrer"
                className="contato__canal"
              >
                <div className="contato__canal-icon" style={{ background: 'hsl(315,100%,55%,0.1)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(315,100%,65%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <strong className="contato__canal-titulo">Instagram</strong>
                  <span className="contato__canal-desc">@digitalisland</span>
                </div>
                <span className="contato__canal-seta">→</span>
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
                { icon: '⚡', t: 'Resposta rápida',       d: 'Respondemos em até 2 horas em dias úteis.' },
                { icon: '📋', t: 'Proposta personalizada', d: 'Sem templates genéricos. Estratégia para o seu negócio.' },
                { icon: '🔒', t: 'Sem fidelidade forçada', d: 'Nosso compromisso é com resultado, não com contrato longo.' },
                { icon: '💬', t: 'Comunicação constante',  d: 'Você sabe tudo o que está acontecendo, sempre.' },
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
              <span>📍</span>
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
        <span className="faq-icone" aria-hidden="true">{aberto ? '−' : '+'}</span>
      </button>

      {aberto && (
        <div className="faq-resposta">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  )
}
