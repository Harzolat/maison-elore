import { whatsappLink } from '../config/site.js'

/**
 * Anchor to a pre-filled WhatsApp chat. Renders nothing until a real
 * number exists in src/config/site.js, so the site never shows a dead
 * contact link.
 */
export default function WhatsAppEnquiryLink({
  message,
  children = 'Enquire on WhatsApp',
  className = '',
}) {
  const href = whatsappLink(message)
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-outline ${className}`}
    >
      {children}
    </a>
  )
}
