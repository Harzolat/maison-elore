/**
 * Site-wide configuration.
 *
 * EVERYTHING THE CLIENT NEEDS TO REPLACE LIVES HERE:
 *  - Brand name and wordmark text
 *  - WhatsApp number, email, studio address, opening hours
 *  - Social links
 *  - Feature switches (e.g. showing prices)
 *
 * Contact fields are intentionally empty. The client has not provided
 * real contact details yet, and this site must never invent an email
 * address or phone number. The UI shows honest "not configured yet"
 * states until these values are filled in.
 */

export const site = {
  name: 'LateHour',
  /** Shown in the footer and the enquiry "from" context. */
  descriptor: 'Menswear atelier',
  /** Honest sample-content notice shown in the announcement strip.
   *  Remove this entry once real product data is in place. */
  sampleNotice:
    'Concept site. The pieces, collections and availability shown here are sample content.',

  contact: {
    /** International WhatsApp number, digits only, no plus sign. E.g. '447700900123' */
    whatsappNumber: '',
    /** E.g. 'studio@latehour.com' */
    email: '',
    /** Physical address or "by appointment" note. */
    studio: '',
    /** Opening hours, free text. */
    hours: '',
  },

  /** Links only appear in the footer once their URLs are provided. */
  social: {
    instagram: '',
    pinterest: '',
  },

  features: {
    /** Prices are hidden because no real prices have been supplied.
     *  Set to true and add `price` to a product to display it. */
    showPrices: false,
  },
}

/** True when a real WhatsApp number has been configured. */
export const hasWhatsApp = Boolean(site.contact.whatsappNumber)
/** True when a contact email has been configured. */
export const hasEmail = Boolean(site.contact.email)

/**
 * Build a pre-filled WhatsApp enquiry link.
 * Returns null when WhatsApp is not configured so callers can fall back
 * to an honest alternative instead of a dead link.
 */
export function whatsappLink(message) {
  if (!hasWhatsApp) return null
  const text = encodeURIComponent(message)
  return `https://wa.me/${site.contact.whatsappNumber}?text=${text}`
}
