import { Link } from 'react-router-dom'
import { site, hasWhatsApp, hasEmail, whatsappLink } from '../config/site.js'

const year = new Date().getFullYear()

const links = [
  { to: '/collections', label: 'The Collection' },
  { to: '/atelier', label: 'The Atelier' },
  { to: '/contact', label: 'Contact' },
]

/**
 * Site footer on a charcoal ground. Contact details only render once
 * they exist in src/config/site.js; until then an honest note appears
 * instead of invented addresses.
 */
export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src="/images/logo-light.png"
              alt=""
              aria-hidden="true"
              className="mb-6 h-12 w-12"
            />
            <Link
              to="/"
              className="font-display text-xl uppercase tracking-[0.3em] text-ivory"
              aria-label={`${site.name}, home`}
            >
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-taupe-light">
              {site.descriptor}, by appointment and online.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.18em] text-taupe">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm text-ivory/90 hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.18em] text-taupe">Enquiries</h2>
            {hasWhatsApp || hasEmail ? (
              <ul className="mt-5 space-y-3 text-sm text-ivory/90">
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
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-taupe-light">
                The studio&apos;s contact details will be published here once they are
                confirmed. Until then,{' '}
                <Link to="/contact" className="link-underline text-ivory">
                  prepare an enquiry
                </Link>{' '}
                and keep it ready to send.
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/15 pt-8 text-xs text-taupe-light md:flex-row md:items-center md:justify-between">
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
