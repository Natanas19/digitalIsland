# Auditoria completa — Digital Island

**Data da auditoria:** 29 de agosto de 2026  
**Repositório/branch:** `digitalIsland` / `main`  
**Commit analisado:** `01ef307`  
**Aplicação local:** `http://localhost:5173/`  
**Build de produção validado com:** `vite build` + `vite preview`  
**Implantação pública verificada:** `https://www.digitalisland.com.br/`

**Última revisão de progresso:** 30 de agosto de 2026

**Escopo da revisão:** código e build locais; implantação pública e DNS não foram revalidados nesta atualização.

---

## Status da revisão de progresso

> O conteúdo original da auditoria abaixo registra o estado encontrado em 29 de agosto de 2026. Os status adicionados aos achados representam a comparação com o código local atual.

| Status | Quantidade |
|---|---:|
| ✅ Concluído | 2 |
| 🟡 Parcialmente concluído | 6 |
| ⬜ Pendente | 16 |
| **Total** | **24** |

### Itens concluídos nesta revisão

- **AUD-001:** número, links e mensagens de WhatsApp centralizados em `src/config/contact.js`.
- **AUD-011:** menu mobile fecha com `Escape`, bloqueia scroll, controla foco e possui atributos ARIA adequados.

### Itens parcialmente concluídos

- **AUD-004:** a tela 404 foi criada e a rota curinga funciona, mas o rewrite da SPA ainda produz HTTP 200 no servidor.
- **AUD-005:** o e-mail foi unificado, mas o identificador visual do Instagram ainda diverge na página Contato.
- **AUD-006:** o número de vulnerabilidades caiu de 8 para 4, porém permanece 1 vulnerabilidade alta.
- **AUD-008:** a logo caiu de aproximadamente 2,46 MB para 261 kB, mas ainda está superdimensionada para a exibição no Header.
- **AUD-023:** contatos, mensagens e README foram centralizados/documentados; planos e cases ainda permanecem nos componentes.
- **AUD-024:** as imagens da página Sites possuem dimensões explícitas, mas a logo e os ícones da Home ainda não.

---

## 1. Resumo executivo

O projeto é uma SPA institucional em React, visualmente consistente e funcional nos fluxos básicos. As seis rotas renderizam corretamente, o build de produção conclui sem erros, não foi detectado overflow horizontal nas quatro larguras auditadas e os filtros do portfólio, o modal e o FAQ executam suas funções principais.

O projeto, entretanto, ainda não deve ser considerado pronto para campanhas ou operação comercial sem correções. O problema mais urgente é a existência de três números de WhatsApp diferentes, incluindo um número evidentemente provisório (`5548999999999`) usado na maioria das páginas de serviço. Também há cases explicitamente fictícios no código apresentados ao visitante como resultados reais, títulos de cases praticamente invisíveis, endereço de e-mail corporativo sem MX, ausência de página 404 e lacunas relevantes de SEO, acessibilidade, segurança de dependências e mensuração.

### Parecer

**Situação atual:** funcional, mas com bloqueadores comerciais e de credibilidade.  
**Recomendação:** corrigir todos os itens P0 e P1 antes de ampliar tráfego ou divulgar o endereço publicamente.

### Distribuição dos achados

| Severidade | Quantidade | Interpretação |
|---|---:|---|
| Crítica | 1 | Pode impedir conversões e enviar clientes ao destino errado |
| Alta | 7 | Impacto direto em credibilidade, aquisição, segurança ou descoberta |
| Média | 11 | Prejudica acessibilidade, UX, operação ou manutenção |
| Baixa | 5 | Débito técnico e oportunidades de acabamento |
| **Total** | **24** | |

> A severidade crítica de AUD-001 é comercial, não uma vulnerabilidade de execução remota.

---

## 2. Escopo e metodologia

### 2.1 Escopo

- Código React, CSS, ativos, configuração Vite, Vercel e dependências.
- Rotas `/`, `/sites`, `/trafego`, `/conteudo`, `/portfolio` e `/contato`.
- Rota inexistente para validação de erro/404.
- Fluxos de navegação, menu mobile, filtros e modal do portfólio e FAQ.
- Viewports de 390, 768, 1024 e 1440 pixels.
- Build de produção e implantação pública.
- SEO técnico, acessibilidade automatizada e manual, performance e segurança de dependências.
- Destinos de contato, DNS do domínio e cabeçalhos HTTP públicos.

### 2.2 Ferramentas e testes

- Leitura integral dos arquivos do repositório.
- Chromium headless com Chrome DevTools Protocol.
- Lighthouse 13.4.1 em build de produção.
- `npm audit`, `npm outdated`, `npm ls` e `npm run build`.
- Consultas HTTP à implantação pública e consultas DNS públicas.
- Testes de teclado para `Escape`, inspeção de foco e scroll.

### 2.3 Limitações

- Lighthouse fornece dados de laboratório, não dados reais de usuários (CrUX/RUM).
- Não foi executado pentest de infraestrutura; a aplicação é um frontend estático sem API própria.
- O smoke test automatizado no Firefox foi impedido por falha do compositor SWGL do ambiente headless. A cobertura visual automatizada ficou concentrada em Chromium.
- Uma resposta HTTP 200 do WhatsApp não comprova que o número pertence à empresa. A titularidade deve ser confirmada manualmente.
- A veracidade de promessas, cases, métricas e prazos depende de validação comercial/documental do responsável pela empresa.

---

## 3. Arquitetura e funcionamento

### 3.1 Stack

- React 18.3.1.
- React DOM 18.3.1.
- React Router DOM 6.30.3 instalado.
- Vite 5.4.21 instalado.
- React Icons 5.6.0.
- JavaScript/JSX e CSS tradicional.
- Deploy estático na Vercel com rewrite global para `/`.

### 3.2 Fluxo da aplicação

1. `src/main.jsx` monta a aplicação em `#root`.
2. `src/App.jsx` declara as seis rotas dentro de `BrowserRouter`.
3. `src/components/Layout/Layout.jsx` compartilha Header, Footer e botão flutuante.
4. A troca de rota executa scroll para o topo.
5. Os dados e textos estão hardcoded nos componentes.
6. Não há API, banco, autenticação, CMS, formulário ou persistência.
7. A conversão ocorre por links externos de WhatsApp, e-mail e Instagram.

### 3.3 Inventário de telas

| Rota | Objetivo | Interações |
|---|---|---|
| `/` | Apresentação, serviços, metodologia, planos e conversão | Links internos e CTAs de WhatsApp |
| `/sites` | Oferta de sites e landing pages | CTAs de WhatsApp |
| `/trafego` | Oferta de tráfego pago | CTAs de WhatsApp |
| `/conteudo` | Oferta de produção de conteúdo | CTAs de WhatsApp |
| `/portfolio` | Exposição de cases | Filtros, cards e modal |
| `/contato` | Canais, confiança e FAQ | Links externos e accordion |

---

## 4. Resultados objetivos

### 4.1 Build

`npm run build` foi aprovado:

- 62 módulos transformados.
- JavaScript: 233,10 kB; 70,06 kB gzip.
- CSS: 26,49 kB; 5,41 kB gzip.
- Assets gerados: aproximadamente 3,4 MB.
- Sem erro de compilação.

### 4.2 Lighthouse — build de produção

#### Home

| Perfil | Performance | Acessibilidade | Boas práticas | SEO |
|---|---:|---:|---:|---:|
| Mobile | 88 | 95 | 100 | 92 |
| Desktop | 99 | 95 | 100 | 92 |

| Métrica | Mobile | Desktop |
|---|---:|---:|
| FCP | 2,7 s | 0,8 s |
| LCP | 3,3 s | 0,8 s |
| TBT | 20 ms | 0 ms |
| CLS | 0 | 0,001 |
| Speed Index | 2,7 s | 0,8 s |
| Payload | 3.026 KiB | 3.025 KiB |

#### Demais rotas — mobile

| Rota | Acessibilidade | Boas práticas | SEO |
|---|---:|---:|---:|
| `/sites` | 95 | 100 | 92 |
| `/trafego` | 95 | 100 | 92 |
| `/conteudo` | 95 | 100 | 92 |
| `/portfolio` | 93 | 100 | 92 |
| `/contato` | 100 | 100 | 92 |

### 4.3 Responsividade e estabilidade

- Nenhum overflow horizontal em 390, 768, 1024 ou 1440 px.
- Nenhuma imagem quebrada nas seis rotas.
- Nenhuma exceção JavaScript ou falha de rede registrada durante as navegações locais.
- Cada página válida possui um `h1`, `main`, `nav` e `footer`.
- `lang="pt-BR"` está correto.
- Links com `target="_blank"` possuem `rel="noopener noreferrer"`.
- CLS muito baixo no Lighthouse.

### 4.4 Implantação pública

- `https://digitalisland.com.br` redireciona com HTTP 308 para `https://www.digitalisland.com.br/`.
- A versão `www` responde HTTP 200.
- HSTS está habilitado com `max-age=63072000`.
- O conteúdo público possui o mesmo tamanho do `index.html` gerado nesta auditoria, indicando que o projeto está implantado.

---

## 5. Achados detalhados

### AUD-001 — Destinos de WhatsApp divergentes ou provisórios

**Severidade:** Crítica  
**Categoria:** Conversão / Operação  
**Prioridade:** P0  
**Esforço:** Pequeno

**Status na revisão:** ✅ **Concluído**

**Validação atual:** existe um único número (`554888793113`) em `src/config/contact.js`; páginas, Footer e botão flutuante usam links gerados centralmente, com mensagens específicas por serviço, plano e case.

Foram encontrados três números:

- Home e botão flutuante: `554888793113`.
- Footer: `5548988793113`.
- Sites, Tráfego, Conteúdo, Portfólio e Contato: `5548999999999`.

**Evidências:** `src/pages/Home/Home.jsx:14`, `src/components/WhatsAppFloat/WhatsAppFloat.jsx:8`, `src/components/Footer/Footer.jsx:8`, `src/pages/Sites/Sites.jsx:8`, `src/pages/TrafegoPago/TrafegoPago.jsx:9`, `src/pages/Conteudo/Conteudo.jsx:19`, `src/pages/Portfolio/Portfolio.jsx:21`, `src/pages/Contato/Contato.jsx:21`.

**Impacto:** leads podem ser enviados ao número errado ou a um número fictício. A maior parte dos CTAs de páginas internas está comprometida.

**Recomendação:** confirmar o número oficial, armazená-lo em uma única constante/configuração e gerar mensagens específicas por serviço/plano.

---

### AUD-002 — Cases fictícios apresentados como resultados reais

**Severidade:** Alta  
**Categoria:** Conteúdo / Credibilidade / Risco comercial  
**Prioridade:** P0  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** `Portfolio.jsx` ainda declara os cases como fictícios e mantém métricas apresentadas como resultados.

O código declara `cases fictícios`, mas a interface usa “Resultados que falam por si” e apresenta ROAS, contratos, agendamentos, posição no Google e outros números como realizações concretas.

**Evidência:** `src/pages/Portfolio/Portfolio.jsx:2` e `:23`.

**Impacto:** risco reputacional, contestação de publicidade e perda de confiança caso os números não tenham comprovação.

**Recomendação:** substituir por cases reais autorizados e documentados ou identificar claramente como exemplos demonstrativos, removendo métricas atribuídas a clientes inexistentes.

---

### AUD-003 — Títulos dos cases invisíveis

**Severidade:** Alta  
**Categoria:** UI / Acessibilidade  
**Prioridade:** P0  
**Esforço:** Pequeno

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** `.portfolio__card-title` continua sem cor explícita dentro de um elemento `<button>`.

Os cards são elementos `<button>` e o título herda preto. O valor computado foi `rgb(0, 0, 0)` sobre `#0c0e12`, com contraste medido de **1,08:1**.

**Evidências:** `src/pages/Portfolio/Portfolio.jsx:190` e `src/pages/Portfolio/Portfolio.css:84`.

**Impacto:** o nome de todos os cases fica praticamente invisível em desktop e mobile.

**Recomendação:** definir cor textual explícita no card/título e validar o contraste mínimo de 4,5:1.

---

### AUD-004 — Rota inexistente produz tela vazia e soft 404

**Severidade:** Alta  
**Categoria:** Navegação / SEO  
**Prioridade:** P0  
**Esforço:** Pequeno a médio

**Status na revisão:** 🟡 **Parcialmente concluído**

**Validação atual:** existem `NotFound.jsx`, estilos responsivos e rota `path="*"`, sem Header ou Footer. O `vercel.json` ainda reescreve todas as URLs para `/`, portanto o status HTTP 404 real não foi resolvido.

Não há rota curinga. Em `/rota-inexistente`, `#root` ficou sem filhos: nenhum header, main ou footer. A Vercel retorna o `index.html` com HTTP 200 para URLs inexistentes.

**Evidência:** `src/App.jsx:26-32` e `vercel.json`.

**Impacto:** experiência vazia para URLs erradas e indexação de soft 404.

**Recomendação:** criar uma tela `NotFound`, adicionar rota `path="*"` e avaliar estratégia de hospedagem/prerender que permita status HTTP 404 real.

---

### AUD-005 — E-mail e identidade de contato inconsistentes

**Severidade:** Alta  
**Categoria:** Operação / Conversão  
**Prioridade:** P0  
**Esforço:** Pequeno, além da configuração DNS

**Status na revisão:** 🟡 **Parcialmente concluído**

**Validação atual:** Footer e Contato usam `digitalislandcomercial@gmail.com` via configuração central, removendo a dependência do e-mail sem MX. O link do Instagram aponta para `digitalisland.ltda`, mas a página Contato ainda exibe `@digitalisland`.

- Footer: `digitalislandcomercial@gmail.com`.
- Contato: `contato@digitalisland.com.br`.
- O DNS de `digitalisland.com.br` não publica registro MX.
- Link do Instagram: `digitalisland.ltda`.
- Textos exibidos: `@digitalisland` e `@digitalislandltda`.

**Evidências:** `src/components/Footer/Footer.jsx:55-64` e `src/pages/Contato/Contato.jsx:107-132`.

**Impacto:** mensagens podem não ser entregues e o usuário recebe identidades divergentes.

**Recomendação:** definir canais oficiais, configurar MX/SPF/DKIM/DMARC para o domínio se o e-mail corporativo for usado e padronizar o identificador do Instagram.

---

### AUD-006 — Dependências com vulnerabilidades conhecidas

**Severidade:** Alta  
**Categoria:** Segurança / Manutenção  
**Prioridade:** P1  
**Esforço:** Médio a alto

**Status na revisão:** 🟡 **Parcialmente concluído**

**Validação atual:** `react-router-dom@6.30.6` está instalado e o `npm audit` atual registra 4 vulnerabilidades (1 alta e 3 moderadas), contra 8 originalmente. Vite 5 e React Router 6 ainda possuem avisos sem correção compatível dentro das versões principais atuais.

`npm audit` encontrou **8 vulnerabilidades: 3 altas, 4 moderadas e 1 baixa**.

| Pacote | Relação | Severidade máxima | Observação |
|---|---|---:|---|
| `vite` | Direta/dev | Alta | Path traversal e bypasses no dev server; atualização indicada para Vite 8 |
| `react-router-dom` | Direta/runtime | Moderada | Avisos de open redirect/XSS em intervalos afetados |
| `postcss` | Transitiva/build | Alta | Leitura de arquivos via source maps |
| `nanoid` | Transitiva | Alta | Loop/DoS em geradores com tamanhos inválidos |
| `esbuild` | Transitiva/dev | Moderada | Leitura por sites externos contra o dev server |
| `react-router` | Transitiva/runtime | Moderada | Open redirect e hidratação SSR; parte do risco não se aplica à SPA atual |
| `@remix-run/router` | Transitiva/runtime | Moderada | Open redirect |
| `@babel/core` | Transitiva/build | Baixa | Leitura local via sourceMappingURL |

**Impacto:** risco maior quando o servidor Vite é exposto e dívida de segurança na cadeia de build. A aplicação estática publicada não executa Vite/PostCSS, reduzindo parte da exposição em produção, mas React Router é runtime.

**Recomendação:** atualizar primeiro `react-router-dom` para pelo menos o patch 6.30.6, revisar os advisories remanescentes e planejar migração controlada para React Router 7 e Vite 8. Não executar `npm audit fix --force` sem testes.

---

### AUD-007 — Infraestrutura SEO incompleta

**Severidade:** Alta  
**Categoria:** SEO  
**Prioridade:** P1  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** canonical, Open Graph, Twitter Cards, schema, `robots.txt` e `sitemap.xml` continuam ausentes.

Não existem canonical, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml` ou dados estruturados. Na implantação pública, `/robots.txt` e `/sitemap.xml` retornam o HTML da SPA com HTTP 200. Lighthouse registrou 22 erros ao interpretar `robots.txt`.

**Evidência:** `index.html` e ausência dos arquivos na raiz/public.

**Impacto:** indexação menos previsível, compartilhamentos sem preview adequado e sinalização técnica ruim para buscadores.

**Recomendação:** adicionar arquivos reais, metadata social, canonical absoluto, schema `Organization`/`LocalBusiness` e sitemap com as seis rotas.

---

### AUD-008 — Logo desproporcional e payload elevado

**Severidade:** Alta  
**Categoria:** Performance  
**Prioridade:** P1  
**Esforço:** Pequeno a médio

**Status na revisão:** 🟡 **Parcialmente concluído**

**Validação atual:** `logo.png` foi reduzida para 1250 × 1151 px e aproximadamente 261 kB. A redução é relevante, mas o arquivo ainda é muito maior que sua renderização de cerca de 100 px e permanece em PNG.

`logo.png` possui 5000 × 4604 px e aproximadamente 2,46 MB, apesar de ser exibido com cerca de 80 px de altura. Lighthouse estimou **2.455.828 bytes desperdiçados** apenas nesse recurso e aproximadamente **2.430 KiB de economia** em entrega de imagens.

Outros ativos grandes:

- `site.svg`: 226,20 kB.
- `conteudo.svg`: 184,84 kB.
- `como-funciona-cidade.jpeg`: 206,10 kB.

**Impacto:** LCP mobile de 3,3 s e payload inicial de aproximadamente 3,0 MiB.

**Recomendação:** exportar logo no tamanho correto em WebP/AVIF ou SVG otimizado, comprimir SVGs, gerar variantes responsivas e revisar preload do recurso LCP.

---

### AUD-009 — Contraste insuficiente em componentes principais

**Severidade:** Média  
**Categoria:** Acessibilidade  
**Prioridade:** P1  
**Esforço:** Pequeno

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** as cores principais auditadas (`#1a8cff` e `#25d342`) continuam sendo usadas com texto branco; não houve nova validação completa de contraste.

Lighthouse encontrou, entre outros:

- Branco sobre azul `#1a8cff`: 3,36:1; esperado 4,5:1 em botões.
- Azul sobre fundo claro da Home: 3,12:1; esperado 4,5:1.
- Branco sobre verde do WhatsApp: 2:1; esperado 4,5:1.
- Números decorativos dos processos: entre 1,18:1 e 2,25:1.
- Títulos do portfólio: 1,08:1.

**Recomendação:** escurecer fundos dos botões, revisar o verde do CTA e diferenciar elementos puramente decorativos com `aria-hidden` quando apropriado, sem comprometer a leitura visual.

---

### AUD-010 — Modal sem gerenciamento de foco, Escape ou scroll lock

**Severidade:** Média  
**Categoria:** Acessibilidade / UX  
**Prioridade:** P1  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** o modal ainda fecha apenas pelo botão/overlay e não implementa foco inicial, focus trap, `Escape`, restauração de foco ou scroll lock.

Ao abrir o modal:

- o foco permaneceu no `<body>`;
- `Escape` não fechou o diálogo;
- não há focus trap ou restauração de foco;
- a rolagem vertical do documento continuou ativa;
- não há associação por `aria-labelledby`/`aria-describedby`.

**Evidência:** `src/pages/Portfolio/Portfolio.jsx:237-296`.

**Recomendação:** implementar diálogo acessível, preferencialmente com `<dialog>` ou biblioteca consolidada, foco inicial, trap, `Escape`, scroll lock e retorno ao card de origem.

---

### AUD-011 — Menu mobile incompleto para teclado e leitor de tela

**Severidade:** Média  
**Categoria:** Acessibilidade / UX  
**Prioridade:** P1  
**Esforço:** Pequeno a médio

**Status na revisão:** ✅ **Concluído**

**Validação atual:** o Header alterna o nome acessível, usa `aria-expanded`/`aria-controls`, fecha com `Escape`, move e contém o foco, restaura o foco, aplica `inert` ao conteúdo de fundo e bloqueia a rolagem do `body`.

O menu abre e o overlay aparece, mas:

- `Escape` não fecha;
- a página continua rolável;
- `aria-label` continua “Abrir menu” quando aberto;
- não há foco movido/contido no menu;
- não há `aria-controls` ligando botão e navegação.

**Evidência:** `src/components/Header/Header.jsx:68-80`.

**Recomendação:** alternar o nome acessível entre “Abrir menu” e “Fechar menu”, adicionar `aria-controls`, fechar com `Escape`, controlar foco e impedir a rolagem da página enquanto o painel estiver aberto.

---

### AUD-012 — Semântica do Portfólio com falhas adicionais

**Severidade:** Média  
**Categoria:** Acessibilidade / HTML  
**Prioridade:** P1  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** os cards continuam como `<button>` complexo com `h3`, o nome acessível permanece reduzido e os filtros não usam `aria-pressed`.

- A página salta de `h1` para `h3` nos cards.
- O `aria-label="Ver case: ..."` dos botões não contém todo o texto visível, gerando `label-content-name-mismatch` nos seis cards.
- Um `<button>` envolve estrutura complexa com headings e vários blocos.
- Os filtros não indicam seleção com `aria-pressed`.

**Recomendação:** usar `article` para o card, botão/link explícito para abertura, ordem correta de headings e `aria-pressed` nos filtros.

---

### AUD-013 — Favicon referenciado, mas inexistente

**Severidade:** Média  
**Categoria:** Identidade / SEO  
**Prioridade:** P1  
**Esforço:** Pequeno

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** `index.html` continua apontando para `/favicon.svg`, mas não existe favicon no repositório.

`index.html:5` aponta para `/favicon.svg`, porém o arquivo não existe. Em produção a URL retorna o `index.html` com `content-type: text/html` e HTTP 200.

**Impacto:** favicon ausente, cache e diagnóstico confusos.

**Recomendação:** adicionar favicon real em SVG/PNG/ICO e garantir MIME correto.

---

### AUD-014 — Conversões não são mensuradas

**Severidade:** Média  
**Categoria:** Analytics / Negócio  
**Prioridade:** P1  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** não foram encontrados analytics, pixels, UTMs ou eventos de clique.

Não há Google Analytics, Tag Manager, Meta Pixel ou alternativa de analytics. Também não existem UTMs ou eventos para diferenciar cliques por página, serviço ou plano.

**Impacto:** não é possível medir origem de leads, taxa de conversão ou desempenho de cada CTA.

**Recomendação:** definir plano de mensuração com consentimento, eventos de CTA e parâmetros por rota/serviço. Evitar inserir scripts antes de definir privacidade e governança.

---

### AUD-015 — Serviço “Automação” direciona para “Tráfego Pago”

**Severidade:** Média  
**Categoria:** Conteúdo / Navegação  
**Prioridade:** P1  
**Esforço:** Pequeno ou médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** o card “Automação de Atendimento” da Home ainda aponta para `/trafego`.

Na Home, “Automação de Atendimento” aponta para `/trafego`, cuja página trata exclusivamente de anúncios pagos.

**Evidência:** `src/pages/Home/Home.jsx:82-85`.

**Impacto:** quebra da expectativa e proposta comercial incoerente.

**Recomendação:** criar página de automação ou alterar card, ícone, descrição e navegação para Tráfego Pago.

---

### AUD-016 — Metadata idêntica em todas as rotas

**Severidade:** Média  
**Categoria:** SEO  
**Prioridade:** P1  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** título e description continuam definidos apenas em `index.html`; não há gestão de metadata por rota ou prerender.

Todas as páginas usam o mesmo título e description definidos em `index.html`. Como a resposta inicial da Vercel também é o mesmo HTML para cada rota, crawlers sociais não recebem metadata específica.

**Recomendação:** implementar gestão por rota com React Helmet Async e, idealmente, prerender/SSG para produzir HTML específico para cada URL.

---

### AUD-017 — Ausência de política de privacidade e termos

**Severidade:** Média  
**Categoria:** Privacidade / Governança  
**Prioridade:** P2  
**Esforço:** Médio, com revisão jurídica

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** não existem páginas ou links de política de privacidade e termos.

Não há links ou páginas de privacidade/termos. O site faz requisições ao Google Fonts e direciona usuários para WhatsApp/Instagram. A inclusão futura de analytics aumentará a necessidade de consentimento e transparência.

**Recomendação:** publicar política de privacidade, informar controladora/canais e documentar terceiros. Avaliar self-host das fontes.

---

### AUD-018 — Cabeçalhos de segurança incompletos

**Severidade:** Média  
**Categoria:** Segurança  
**Prioridade:** P2  
**Esforço:** Pequeno a médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** `vercel.json` contém apenas o rewrite da SPA e não configura os headers recomendados.

HSTS está presente, mas não foram observados CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` ou proteção de framing por CSP `frame-ancestors`/`X-Frame-Options`.

**Impacto:** defesa em profundidade reduzida, embora o site seja estático e tenha superfície pequena.

**Recomendação:** configurar headers na Vercel, começando com CSP em modo report-only para mapear Google Fonts, WhatsApp e Instagram.

---

### AUD-019 — Não há testes nem lint executável

**Severidade:** Média  
**Categoria:** Qualidade / Manutenção  
**Prioridade:** P1  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** `package.json` ainda possui somente `dev`, `build` e `preview`; não há scripts `lint` ou `test`.

- `npm test`: script inexistente.
- `npm run lint`: script inexistente.
- `eslint.config.js` importa pacotes que não constam nas dependências instaladas.
- Não há teste de rotas, componentes ou links comerciais.

**Recomendação:** instalar/configurar ESLint, adicionar scripts, React Testing Library/Vitest e smoke E2E com Playwright para contatos, rotas, modal e FAQ.

---

### AUD-020 — Ausência de lazy loading por rota

**Severidade:** Baixa  
**Categoria:** Performance / Arquitetura  
**Prioridade:** P2  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** as páginas continuam importadas estaticamente em `App.jsx`, sem `React.lazy` ou `Suspense`.

Todas as páginas são importadas estaticamente em `src/App.jsx`, compondo um único bundle JS.

**Recomendação:** usar `React.lazy`/`Suspense` ou estratégia de build com chunks por rota após corrigir o principal gargalo, que hoje é o logo.

---

### AUD-021 — Regras CSS globais frágeis no mobile

**Severidade:** Baixa  
**Categoria:** CSS / Manutenção  
**Prioridade:** P2  
**Esforço:** Médio

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** `main, main * { text-align: center !important; }` permanece no breakpoint mobile e `--color-success` continua definido apenas nesse breakpoint.

`src/styles/global.css:426` força `text-align: center !important` em `main` e todos os descendentes no mobile. Isso dificulta exceções, afeta FAQ/cards e incentiva mais `!important`.

Além disso, `--color-success` só é definido dentro do breakpoint mobile (`global.css:421`), mas é usado pelo Portfólio em desktop (`Portfolio.jsx:197`).

**Recomendação:** aplicar alinhamento por componente e mover tokens globais para `:root`.

---

### AUD-022 — Estados de foco e redução de movimento não tratados

**Severidade:** Baixa  
**Categoria:** Acessibilidade  
**Prioridade:** P2  
**Esforço:** Pequeno

**Status na revisão:** ⬜ **Pendente**

**Validação atual:** há foco dedicado apenas em itens pontuais do dropdown; não existe tratamento global de `:focus-visible` nem `prefers-reduced-motion`.

Não há estilos `:focus-visible` dedicados nem `prefers-reduced-motion`. O site contém animações de entrada, pulso contínuo do WhatsApp e transições.

**Recomendação:** criar foco visível consistente e desabilitar/reduzir animações quando solicitado pelo sistema.

---

### AUD-023 — Conteúdo e configurações duplicados/hardcoded

**Severidade:** Baixa  
**Categoria:** Manutenção  
**Prioridade:** P2  
**Esforço:** Médio

**Status na revisão:** 🟡 **Parcialmente concluído**

**Validação atual:** contatos, links e mensagens foram centralizados em `src/config/contact.js`, inclusive mensagens de planos e serviços. O README foi refeito. Dados completos de planos e cases ainda estão hardcoded nos componentes.

WhatsApp, textos, planos, cases e contatos estão duplicados em componentes. O README ainda é o padrão do Vite.

**Impacto:** alto risco de divergência, já materializado nos números e e-mails.

**Recomendação:** centralizar dados em `config/site.js` ou CMS, documentar setup, deploy, canais oficiais e processo de atualização.

---

### AUD-024 — Imagens sem dimensões explícitas

**Severidade:** Baixa  
**Categoria:** Performance / Estabilidade visual  
**Prioridade:** P2  
**Esforço:** Pequeno

**Status na revisão:** 🟡 **Parcialmente concluído**

**Validação atual:** as imagens da Loja Virtual e Landing Page possuem `width` e `height`, mas a logo do Header e os ícones da Home continuam sem dimensões explícitas.

Lighthouse identificou o logo sem atributos `width` e `height`. O CLS observado foi baixo, mas a reserva explícita melhora previsibilidade.

**Recomendação:** definir dimensões/aspect-ratio e usar `loading`/`fetchpriority` conforme a função de cada imagem.

---

## 6. Achados positivos

- Build de produção aprovado.
- Aplicação simples, com pouca superfície de ataque própria.
- Organização de rotas e Layout fácil de entender.
- Sem overflow horizontal nas larguras testadas.
- Imagens carregando sem falhas.
- Um `h1` por rota válida.
- Landmarks `main`, `nav` e `footer` presentes.
- Idioma do documento correto.
- Proteção `noopener noreferrer` aplicada aos links externos em nova aba.
- FAQ e filtros funcionando.
- Modal fecha por botão e clique no overlay.
- Boas práticas Lighthouse em 100 em todas as rotas.
- TBT e CLS muito baixos no build.
- HTTPS, redirect canônico para `www` e HSTS ativos na implantação.

---

## 7. Plano de correção recomendado

### P0 — Antes de qualquer campanha ou divulgação

1. Confirmar e centralizar WhatsApp, e-mails e Instagram.
2. Configurar MX ou remover temporariamente o e-mail corporativo inválido.
3. Substituir/identificar os cases fictícios.
4. Corrigir títulos invisíveis do Portfólio.
5. Criar tela 404 e tratamento de rota desconhecida.

### P1 — Antes de considerar o site pronto para produção

1. Atualizar dependências afetadas e repetir `npm audit`.
2. Otimizar o logo e os SVGs.
3. Corrigir contrastes.
4. Tornar modal e menu acessíveis por teclado.
5. Corrigir semântica do Portfólio.
6. Implementar favicon, robots, sitemap, canonical e metadata social.
7. Criar metadata específica por página/prerender.
8. Corrigir o card Automação/Tráfego.
9. Configurar lint e testes essenciais.
10. Definir plano de analytics e mensagens de CTA por origem.

### P2 — Evolução e maturidade

1. Adicionar política de privacidade e termos.
2. Implementar headers de segurança.
3. Refatorar CSS global e tokens.
4. Centralizar conteúdo/configuração.
5. Adicionar lazy loading por rota.
6. Implementar foco visível e redução de movimento.
7. Documentar o projeto no README.
8. Incluir smoke tests em Chromium, Firefox e WebKit no CI.

---

## 8. Critérios de aceite para nova validação

- [x] Existe apenas um número oficial de WhatsApp no código.
- [x] Todos os CTAs abrem o número oficial com contexto correto.
- [x] E-mail corporativo possui MX válido ou foi removido. O projeto usa o endereço Gmail centralizado.
- [ ] Cases estão comprovados ou claramente marcados como exemplos.
- [ ] Títulos do Portfólio atendem contraste mínimo.
- [ ] Modal gerencia foco, Escape e scroll.
- [x] Menu mobile fecha com Escape e atualiza nome acessível.
- [x] Nenhuma rota resulta em tela vazia no cliente. O status HTTP 404 real ainda está pendente.
- [ ] Favicon, robots e sitemap retornam conteúdo/MIME corretos.
- [ ] Cada rota possui title, description, canonical e social metadata próprios.
- [ ] Lighthouse mobile mantém performance ≥ 90 após otimização.
- [ ] Acessibilidade ≥ 95 em todas as rotas e sem falhas críticas de axe/Lighthouse.
- [ ] `npm audit` não apresenta vulnerabilidades altas.
- [ ] `npm run lint`, `npm test` e `npm run build` passam no CI.
- [ ] Analytics registra cliques por rota/serviço respeitando privacidade.
- [ ] Smoke tests passam em Chromium, Firefox e WebKit.

---

## 9. Conclusão

A revisão de 30 de agosto confirmou que o principal bloqueador comercial foi resolvido: todos os contatos de WhatsApp agora usam o mesmo número e mensagens contextualizadas. O menu mobile também atende aos requisitos registrados na auditoria. A tela 404, a padronização do e-mail, a redução da logo e a centralização de configurações avançaram, mas ainda possuem pendências específicas descritas nos respectivos achados.

As próximas prioridades continuam sendo revisar os cases fictícios, corrigir o contraste dos títulos do Portfólio, concluir o tratamento HTTP da 404, atualizar dependências vulneráveis e implementar a infraestrutura mínima de SEO. Em seguida devem ser tratados o modal acessível, a semântica do Portfólio, testes/lint, analytics e os débitos globais de CSS e acessibilidade.
