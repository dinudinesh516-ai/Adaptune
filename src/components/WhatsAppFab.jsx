import { waLink } from '../config.js'

export default function WhatsAppFab() {
  return (
    <a className="wa-fab" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Adaptune on WhatsApp">
      <i className="bi bi-whatsapp" />
    </a>
  )
}
