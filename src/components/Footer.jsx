import { Link } from 'react-router-dom'
import { site, hasWhatsApp, hasEmail, whatsappLink } from '../config/site.js'

const year = new Date().getFullYear()

const links = [
  { to: '/collections', label: 'The Collection' },
  { to: '/atelier', label: 'The Atelier' },
  { to: '/contact', label: 'Contact' },
]

/**
 * Site footer on a raised black ground. Contact details only render once
 * they exist in src/config/site.js; until then an honest note appears
 * instead of invented addresses.
 */
export default function Footer() {
  return (
    <footer className="bg-ink-raised text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block" aria-label={`${site.name}, home`}>
              <img
                src="/images/logo-light.png"
                alt=""
                aria-hidden="true"
                width="1727"
                height="624"
                className="mb-6 h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-soft">
              {site.descriptor}, by appointment and online.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.18em] text-gold">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm text-cream/90 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.18em] text-gold">Enquiries</h2>
            {hasWhatsApp || hasEmail ? (
              <ul className="mt-5 space-y-3 text-sm text-cream/90">
                {hasWhatsApp && (
                  <li>
                    <a
                      className="link-underline"
                      href={whatsappLink(`Hello ${site.name}, I have a question.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp the studio
                    </a>
                  </li>
                )}
                {hasEmail && (
                  <li>
                    <a className="link-underline" href={`mailto:${site.contact.email}`}>
                      {site.contact.email}
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-soft">
                The studio&apos;s contact details will be published here once they are
                confirmed. Until then,{' '}
                <Link to="/contact" className="link-underline text-cream">
                  prepare an enquiry
                </Link>{' '}
                and keep it ready to send.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream-soft md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Concept site: collections, products and availability are
            sample content.
          </p>
          <p>
            Product photography supplied by the studio; editorial photography via{' '}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Pexels
            </a>
            . Details in the project credits file.
          </p>
        </div>
      </div>
    </footer>
  )
}
