// Dados de contato e mensagens usados em todo o site.
// Altere este arquivo para atualizar e-mail, telefone, WhatsApp ou textos de contato.

export const CONTACT = {
  email: 'digitalislandcomercial@gmail.com',
  phone: '554888793113',
  phoneDisplay: '(48) 8879-3113',
  whatsapp: '554888793113',
}

export const WHATSAPP_MESSAGES = {
  home: 'Olá! Vim pelo site e quero saber mais sobre a Digital Island.',
  paidTraffic: 'Olá! Tenho interesse em gestão de tráfego pago.',
  content: 'Olá! Tenho interesse na gestão de conteúdo.',
  portfolio: 'Olá! Vi o portfólio e gostaria de conversar.',
  contact: 'Olá! Gostaria de conversar sobre meu projeto.',
  plans: {
    digitalSales: 'Olá! Tenho interesse no plano Estrutura de Vendas Digital e gostaria de saber mais.',
    continuousGrowth: 'Olá! Tenho interesse no plano Sistema de Crescimento Contínuo e gostaria de saber mais.',
    multichannel: 'Olá! Tenho interesse no plano Estrutura Avançada Multicanal e gostaria de saber mais.',
  },
  sites: {
    hero: 'Olá! Quero criar um site profissional para minha empresa.',
    institutional: 'Olá! Tenho interesse em criar um site institucional.',
    store: 'Olá! Tenho interesse em criar uma loja virtual.',
    landingPage: 'Olá! Tenho interesse em criar uma landing page.',
    finalCta: 'Olá! Quero entender qual tipo de site é ideal para o meu negócio.',
  },
}

export const createWhatsAppLink = (message = WHATSAPP_MESSAGES.home) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`

export const CONTACT_LINKS = {
  email: `mailto:${CONTACT.email}`,
  phone: `tel:+${CONTACT.phone}`,
}

export const WHATSAPP_LINKS = {
  home: createWhatsAppLink(WHATSAPP_MESSAGES.home),
  paidTraffic: createWhatsAppLink(WHATSAPP_MESSAGES.paidTraffic),
  content: createWhatsAppLink(WHATSAPP_MESSAGES.content),
  portfolio: createWhatsAppLink(WHATSAPP_MESSAGES.portfolio),
  contact: createWhatsAppLink(WHATSAPP_MESSAGES.contact),
  plans: {
    digitalSales: createWhatsAppLink(WHATSAPP_MESSAGES.plans.digitalSales),
    continuousGrowth: createWhatsAppLink(WHATSAPP_MESSAGES.plans.continuousGrowth),
    multichannel: createWhatsAppLink(WHATSAPP_MESSAGES.plans.multichannel),
  },
  portfolioCase: caseName => createWhatsAppLink(
    `Olá! Vi o case da ${caseName} e quero algo semelhante.`,
  ),
  sites: {
    hero: createWhatsAppLink(WHATSAPP_MESSAGES.sites.hero),
    institutional: createWhatsAppLink(WHATSAPP_MESSAGES.sites.institutional),
    store: createWhatsAppLink(WHATSAPP_MESSAGES.sites.store),
    landingPage: createWhatsAppLink(WHATSAPP_MESSAGES.sites.landingPage),
    finalCta: createWhatsAppLink(WHATSAPP_MESSAGES.sites.finalCta),
  },
}
