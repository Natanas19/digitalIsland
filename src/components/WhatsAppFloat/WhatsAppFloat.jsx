// WhatsAppFloat.jsx — Botão flutuante fixo do WhatsApp
// Aparece em todas as páginas, animação suave de pulso

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppFloat.css'
import { Badge } from '@mui/material'
import { WHATSAPP_LINKS } from '../../config/contact'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINKS.home}
      target="_blank"
      rel="noopener noreferrer"
      className="wpp-float"
      aria-label="Fale conosco pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <Badge
        badgeContent={1}
        color="secondary"
        sx={{
          '& .MuiBadge-badge': {
            fontSize: '0.7rem',
            height: '1.2rem',
            minWidth: '1.2rem',
            borderRadius: '50%',
            padding: '0 4px',
            backgroundColor: 'var(--color-danger)',
          },
          left: '60%',
          bottom: '35%',
        }}
      ></Badge>
      {/* Anel de pulso */}
      <span className="wpp-float__ring" aria-hidden="true" />

      {/* Ícone oficial do WhatsApp */}
      <FaWhatsapp size={28} color="white" aria-hidden="true" />
    </a>
  )
}
