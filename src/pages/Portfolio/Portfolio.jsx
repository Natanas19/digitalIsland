// pages/Portfolio/Portfolio.jsx
// Exibe cases fictícios com foco em organização, apresentação e resultado esperado

import React, { useState } from 'react'
import './Portfolio.css'
import '../Sites/Sites.css'

const WHATSAPP = 'https://wa.me/5548999999999?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.'

// Dados dos cases fictícios
const CASES = [
  {
    id: 1,
    categoria: 'Site + Tráfego',
    tag: 'E-commerce',
    nome: 'Loja Bella Flora',
    segmento: 'Floricultura e presentes',
    descricao: 'Redesign completo do site com foco em conversão e campanha de tráfego pago no Meta Ads para datas comemorativas.',
    desafio: 'Presença digital desorganizada, sem site próprio e sem campanhas estruturadas. Dependência total do WhatsApp.',
    solucao: 'Criamos um site de apresentação + catálogo, configuramos campanhas sazonais no Meta Ads e estruturamos o atendimento via WhatsApp Business.',
    resultado: [
      { val: '+180%', desc: 'aumento em contatos via WhatsApp' },
      { val: '3.2x',  desc: 'ROAS médio nas campanhas' },
      { val: '45 dias', desc: 'para resultado consistente' },
    ],
    cor: '#3b9eff',
    emoji: '🌸',
  },
  {
    id: 2,
    categoria: 'Conteúdo + Tráfego',
    tag: 'Saúde & Bem-estar',
    nome: 'Clínica Renascer',
    segmento: 'Psicologia e terapias',
    descricao: 'Estratégia de conteúdo para Instagram e gestão de tráfego pago para geração de leads qualificados para agendamento.',
    desafio: 'Profissional com excelente reputação offline mas sem presença digital relevante. Agenda dependendo apenas de indicações.',
    solucao: 'Posicionamento estratégico nas redes sociais, calendário editorial mensal e campanhas de lead generation no Instagram.',
    resultado: [
      { val: '+220%', desc: 'crescimento de seguidores em 3 meses' },
      { val: '38',    desc: 'novos agendamentos via Instagram' },
      { val: 'R$12',  desc: 'custo médio por lead qualificado' },
    ],
    cor: '#a78bfa',
    emoji: '🧠',
  },
  {
    id: 3,
    categoria: 'Site',
    tag: 'Serviços',
    nome: 'Construtora Ativa',
    segmento: 'Construção civil e reformas',
    descricao: 'Site institucional completo com portfólio de obras, página de contato otimizada e integração com Google Meu Negócio.',
    desafio: 'Empresa consolidada sem presença digital. Perdia clientes que pesquisavam online para concorrentes com sites.',
    solucao: 'Site institucional com galeria de obras, depoimentos de clientes, formulário de orçamento e SEO local configurado.',
    resultado: [
      { val: '+95%',  desc: 'visitas orgânicas em 60 dias' },
      { val: '22',    desc: 'solicitações de orçamento no 1º mês' },
      { val: '1ª pág', desc: 'no Google para termos locais' },
    ],
    cor: '#f59e0b',
    emoji: '🏗️',
  },
  {
    id: 4,
    categoria: 'Estrutura Completa',
    tag: 'Varejo',
    nome: 'Optica Visão+',
    segmento: 'Ótica e óptica',
    descricao: 'Estrutura digital completa: site, tráfego pago, conteúdo e automação de atendimento para uma ótica regional.',
    desafio: 'Concorrência acirrada com grandes redes. Precisava de diferenciação digital e fluxo de clientes constante.',
    solucao: 'Site com agendamento online, campanhas no Google e Meta, conteúdo de autoridade sobre saúde visual e chatbot para triagem.',
    resultado: [
      { val: '+310%', desc: 'agendamentos online em 4 meses' },
      { val: '2.8x',  desc: 'retorno sobre investimento em ads' },
      { val: '-40%',  desc: 'tempo de atendimento por automação' },
    ],
    cor: '#10b981',
    emoji: '👓',
  },
  {
    id: 5,
    categoria: 'Conteúdo',
    tag: 'Educação',
    nome: 'Instituto Líder',
    segmento: 'Cursos e treinamentos corporativos',
    descricao: 'Estratégia de conteúdo B2B para LinkedIn e Instagram, com foco em geração de autoridade e captação de empresas parceiras.',
    desafio: 'Excelente produto mas comunicação fraca. Dificuldade em mostrar valor para RHs e gestores de grandes empresas.',
    solucao: 'Reposicionamento da comunicação, produção semanal de conteúdo B2B, cases de resultado e sequência de e-mail para leads corporativos.',
    resultado: [
      { val: '15',    desc: 'novos contratos B2B em 5 meses' },
      { val: '+400%', desc: 'engajamento no LinkedIn' },
      { val: '8',     desc: 'palestras e convites gerados' },
    ],
    cor: '#3b9eff',
    emoji: '🎓',
  },
  {
    id: 6,
    categoria: 'Site + Tráfego',
    tag: 'Alimentação',
    nome: 'Brigaderia Doce Arte',
    segmento: 'Doces finos e eventos',
    descricao: 'Landing page de alta conversão + campanhas no Instagram para encomendas de festas e casamentos.',
    desafio: 'Produto de alta qualidade, mas vendas apenas por indicação. Sem estrutura para escalar pedidos.',
    solucao: 'Landing page com portfólio visual e formulário de encomenda, campanha de remarketing e conteúdo de produto no Instagram.',
    resultado: [
      { val: '+270%', desc: 'encomendas via digital' },
      { val: '4.1x',  desc: 'ROAS nas campanhas de evento' },
      { val: '12 dias', desc: 'para primeiro pedido convertido' },
    ],
    cor: '#f472b6',
    emoji: '🍫',
  },
]

const CATEGORIAS = ['Todos', 'Site', 'Tráfego', 'Conteúdo', 'Estrutura Completa']

export default function Portfolio() {
  const [filtro, setFiltro] = useState('Todos')
  const [caseAberto, setCaseAberto] = useState(null)

  const filtrados = filtro === 'Todos'
    ? CASES
    : CASES.filter(c => c.categoria.includes(filtro))

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__glow" aria-hidden="true" />
        <div className="container">
          <span className="section-label animate-fade-up">Portfólio</span>
          <h1 className="page-hero__title animate-fade-up delay-1">
            Resultados que <span className="text-primary">falam por si</span>
          </h1>
          <p className="section-desc animate-fade-up delay-2">
            Cada case representa uma estrutura organizada, comunicação clara e
            um cliente que passou de incerteza para resultado consistente.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="section">
        <div className="container">
          <div className="portfolio__filtros">
            {CATEGORIAS.map(cat => (
              <button
                key={cat}
                className={`portfolio__filtro ${filtro === cat ? 'portfolio__filtro--ativo' : ''}`}
                onClick={() => setFiltro(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de cases */}
          <div className="portfolio__grid">
            {filtrados.map(item => (
              <button
                key={item.id}
                className="portfolio__card"
                onClick={() => setCaseAberto(item)}
                aria-label={`Ver case: ${item.nome}`}
              >
                {/* Emoji decorativo */}
                <div className="portfolio__emoji" style={{ background: `${item.cor}15` }}>
                  <span>{item.emoji}</span>
                </div>

                <div className="portfolio__card-meta">
                  <span className="badge">{item.categoria}</span>
                  <span className="portfolio__segmento">{item.segmento}</span>
                </div>

                <h3 className="portfolio__card-title">{item.nome}</h3>
                <p className="portfolio__card-desc">{item.descricao}</p>

                {/* Resultados resumidos */}
                <div className="portfolio__mini-results">
                  {item.resultado.slice(0, 2).map(r => (
                    <div key={r.desc} className="portfolio__mini-stat">
                      <span style={{ color: item.cor, fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{r.val}</span>
                      <span>{r.desc}</span>
                    </div>
                  ))}
                </div>

                <span className="portfolio__ver-mais">Ver case completo →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de case */}
      {caseAberto && (
        <CaseModal case={caseAberto} onClose={() => setCaseAberto(null)} />
      )}

      {/* CTA */}
      <section className="section cta-simples">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Seu negócio pode ser o<br />
            <span className="text-primary">próximo case.</span>
          </h2>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp" style={{ marginTop: '1.5rem', fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Quero começar agora
          </a>
        </div>
      </section>
    </>
  )
}

/* Modal com detalhes do case */
function CaseModal({ case: c, onClose }) {
  // Fecha ao clicar fora
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlay} role="dialog" aria-modal="true" aria-label={`Case: ${c.nome}`}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>

        {/* Cabeçalho */}
        <div className="modal-header">
          <div className="portfolio__emoji" style={{ background: `${c.cor}15`, width: 64, height: 64, fontSize: '1.75rem' }}>
            <span>{c.emoji}</span>
          </div>
          <div>
            <span className="badge">{c.categoria}</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginTop: '0.5rem' }}>{c.nome}</h2>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>{c.segmento}</span>
          </div>
        </div>

        <div className="divider" />

        {/* Desafio */}
        <div className="modal-section">
          <h3 className="modal-section-title">🎯 Desafio</h3>
          <p>{c.desafio}</p>
        </div>

        {/* Solução */}
        <div className="modal-section">
          <h3 className="modal-section-title">🛠️ Solução</h3>
          <p>{c.solucao}</p>
        </div>

        {/* Resultados */}
        <div className="modal-section">
          <h3 className="modal-section-title">📈 Resultados</h3>
          <div className="modal-results">
            {c.resultado.map(r => (
              <div key={r.desc} className="modal-stat">
                <span className="modal-stat-val" style={{ color: c.cor }}>{r.val}</span>
                <span className="modal-stat-desc">{r.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href={`https://wa.me/5548999999999?text=Ol%C3%A1!%20Vi%20o%20case%20da%20${encodeURIComponent(c.nome)}%20e%20quero%20algo%20semelhante.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
        >
          Quero resultado semelhante
        </a>
      </div>
    </div>
  )
}
