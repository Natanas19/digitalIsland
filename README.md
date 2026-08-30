# Digital Island

Aplicação React criada com Vite.

## Requisitos mínimos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Ambiente de desenvolvimento

```bash
npm run dev
```

Por padrão, a aplicação fica disponível em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

O resultado é gerado na pasta `dist`.

Para testar o build localmente:

```bash
npm run preview
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera o build otimizado de produção. |
| `npm run preview` | Executa uma prévia local do build. |

## Configuração de contato

Os dados de contato e as mensagens do WhatsApp ficam em:

```text
src/config/contact.js
```

Esse arquivo centraliza:

- E-mail e telefone.
- Número do WhatsApp.
- Mensagens enviadas por página, serviço e plano.
- Geração dos links de contato.

O número do WhatsApp deve conter somente dígitos, incluindo DDI e DDD.

## Variáveis de ambiente

O projeto não exige variáveis de ambiente atualmente.