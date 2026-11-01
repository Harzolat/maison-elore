import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site, hasWhatsApp, whatsappLink } from '../config/site.js'

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please add your name.'
  if (!email.trim()) {
    errors.email = 'Please add an email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'That email address does not look complete.'
  }
  if (message.trim().length < 10) {
    errors.message = 'Please add a short question (at least a few words).'
  }
  return errors
}

/**
 * Enquiry form.
 *
 * This site has no backend. The form therefore never claims a message
 * was delivered. Instead it either opens WhatsApp with the enquiry
 * pre-filled (when a number exists in src/config/site.js) or writes the
 * enquiry out for the visitor to copy, with an honest explanation.
 */
export default function EnquiryForm({ product = null, initialSize = '' }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [size, setSize] = useState(initialSize)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | whatsapp-opened | prepared
  const [composed, setComposed] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  const sizes = product?.availableSizes || null

  function compose() {
    const lines = [`Hello ${site.name},`, '']
    if (product) {
      lines.push(`I would like to enquire about the ${product.name}.`)
      lines.push(`Size: ${size || 'to be advised'}`)
      lines.push(`Link: ${window.location.origin}/products/${product.slug}`)
    } else {
      lines.push('I would like to ask a question.')
    }
    lines.push('', 'My question:', message.trim(), '', `Name: ${name.trim()}`, `Email: ${email.trim()}`)
    return lines.join('\n')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate({ name, email, message })
    setErrors(nextErrors)
    setCopied(false)
    setCopyFailed(false)
    if (Object.keys(nextErrors).length > 0) return

    const text = compose()
    setComposed(text)

    if (hasWhatsApp) {
      window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
      setStatus('whatsapp-opened')
    } else {
      setStatus('prepared')
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(composed)
      setCopied(true)
      setCopyFailed(false)
    } catch {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {product && (
        <div>
          <label
            htmlFor="enquiry-product"
            className="text-xs uppercase tracking-[0.14em] text-charcoal-soft"
          >
            Enquiring about
          </label>
          <input
            id="enquiry-product"
            className="field mt-2"
            value={product.name}
            readOnly
            tabIndex={-1}
            aria-readonly="true"
          />
          <p className="mt-2 text-xs text-charcoal-soft">
            <Link to={`/products/${product.slug}`} className="link-underline">
              View this piece
            </Link>
          </p>
        </div>
      )}

      {sizes && (
        <div>
          <label htmlFor="enquiry-size" className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
            Size
          </label>
          <select
            id="enquiry-size"
            className="field mt-2"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            <option value="">Not sure yet</option>
            {sizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-charcoal-soft">
            Listed sizes are sample data and are confirmed only on enquiry.
          </p>
        </div>
      )}

      <div>
        <label htmlFor="enquiry-name" className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
          Name
        </label>
        <input
          id="enquiry-name"
          name="name"
          type="text"
          autoComplete="name"
          className="field mt-2"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
        />
        {errors.name && (
          <p id="enquiry-name-error" className="mt-2 text-xs text-[#8a3d2f]">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="enquiry-email" className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
          Email
        </label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          className="field mt-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
        />
        {errors.email && (
          <p id="enquiry-email-error" className="mt-2 text-xs text-[#8a3d2f]">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="enquiry-message" className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
          Your question
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={5}
          className="field mt-2 resize-y"
          placeholder="Availability, sizing, alterations, delivery…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
        />
        {errors.message && (
          <p id="enquiry-message-error" className="mt-2 text-xs text-[#8a3d2f]">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <button type="submit" className="btn-solid w-full sm:w-auto">
          {hasWhatsApp ? 'Continue to WhatsApp' : 'Prepare enquiry'}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-charcoal-soft">
          {hasWhatsApp
            ? 'This opens WhatsApp with your enquiry written out. Nothing is sent until you press send there.'
            : 'This form does not send anything by itself. It prepares your enquiry so you can send it once the studio’s details are published.'}
        </p>
      </div>

      <div aria-live="polite">
        {status === 'whatsapp-opened' && (
          <div className="border border-taupe bg-ivory-deep p-6">
            <h3 className="text-xl text-charcoal">WhatsApp opened</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
              Your enquiry is written out below as well, in case the chat did not open.
            </p>
            <ComposedBlock
              composed={composed}
              copied={copied}
              copyFailed={copyFailed}
              onCopy={handleCopy}
            />
          </div>
        )}
        {status === 'prepared' && (
          <div className="border border-taupe bg-ivory-deep p-6">
            <h3 className="text-xl text-charcoal">Your enquiry is ready</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
              This preview is not connected to an inbox yet, so nothing was sent. Copy the
              text below and send it once {site.name} publishes its contact details.
            </p>
            <ComposedBlock
              composed={composed}
              copied={copied}
              copyFailed={copyFailed}
              onCopy={handleCopy}
            />
          </div>
        )}
      </div>
    </form>
  )
}

function ComposedBlock({ composed, copied, copyFailed, onCopy }) {
  return (
    <>
      <pre className="mt-4 max-h-64 overflow-auto whitespace-pre-wrap border border-taupe-light bg-ivory p-4 font-sans text-sm leading-relaxed text-charcoal">
        {composed}
      </pre>
      <button type="button" onClick={onCopy} className="btn-outline mt-4">
        {copied ? 'Copied' : 'Copy enquiry'}
      </button>
      {copied && <p className="mt-2 text-xs text-olive">Copied to your clipboard.</p>}
      {copyFailed && (
        <p className="mt-2 text-xs text-[#8a3d2f]">
          Could not copy automatically. Select the text above and copy it manually.
        </p>
      )}
    </>
  )
}
