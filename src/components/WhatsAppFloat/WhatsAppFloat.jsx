// WhatsAppFloat.jsx — Botão flutuante fixo do WhatsApp
// Aparece em todas as páginas, animação suave de pulso

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppFloat.css'

const WHATSAPP = 'https://wa.me/554888793113?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Digital%20Island.'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="wpp-float"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      {/* Anel de pulso */}
      <span className="wpp-float__ring" aria-hidden="true" />

      {/* Ícone oficial do WhatsApp */}
      <FaWhatsapp size={28} color="white" aria-hidden="true" />
    </a>
  )
}
