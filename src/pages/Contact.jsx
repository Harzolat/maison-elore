import { Link, useSearchParams } from 'react-router-dom'
import usePageTitle from '../lib/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site, hasWhatsApp, hasEmail } from '../config/site.js'
import { getProduct } from '../data/products.js'

function ContactLine({ label, children }) {
  return (
    <div className="border-t border-cream/15 py-5">
      <h2 className="text-xs uppercase tracking-[0.14em] text-cream-soft">{label}</h2>
      <div className="mt-2 text-sm leading-relaxed text-cream">{children}</div>
    </div>
  )
}

export default function Contact() {
  usePageTitle('Enquiries')
  const [searchParams] = useSearchParams()
  const product = getProduct(searchParams.get('piece') || '')
  const sizeFromLink = searchParams.get('size') || ''

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
      <Reveal>
        <header className="max-w-2xl">
          <h1 className="text-5xl text-cream md:text-6xl">Enquiries</h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-cream-soft">
            Ask about sizing, cloth, alterations, delivery or availability. Enquiries are
            answered by the studio, usually within two working days.
          </p>
        </header>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <div>
            <ContactLine label="WhatsApp">
              {hasWhatsApp ? (
                <a
                  className="link-underline"
                  href={`https://wa.me/${site.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message the studio
                </a>
              ) : (
                <p className="text-cream-soft">
                  The studio number will be published here once it is confirmed. Until then,
                  prepare an enquiry below and keep it ready to send.
                </p>
              )}
            </ContactLine>

            <ContactLine label="Email">
              {hasEmail ? (
                <a className="link-underline" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              ) : (
                <p className="text-cream-soft">
                  The studio email address will be published here once it is confirmed.
                </p>
              )}
            </ContactLine>

            <ContactLine label="Studio">
              {site.contact.studio ? (
                <p>{site.contact.studio}</p>
              ) : (
                <p className="text-cream-soft">
                  Visits are by appointment. The address will be shared with confirmed
                  appointments.
                </p>
              )}
            </ContactLine>

            <ContactLine label="Hours">
              {site.contact.hours ? (
                <p>{site.contact.hours}</p>
              ) : (
                <p className="text-cream-soft">Opening hours will be published here.</p>
              )}
            </ContactLine>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-cream md:text-4xl">
              {product ? `About the ${product.name}` : 'Write your enquiry'}
            </h2>
            <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-cream-soft">
              This site is a concept build and is not connected to an inbox yet. The form
              prepares your enquiry properly: it opens WhatsApp when the studio number is
              configured, and otherwise writes the message out for you to copy.
            </p>
            <div className="mt-10">
              <EnquiryForm product={product} initialSize={sizeFromLink} />
            </div>
            {product && (
              <p className="mt-8 text-xs text-cream-soft">
                Looking for something else?{' '}
                <Link to="/collections" className="link-underline">
                  Browse the collection
                </Link>
                .
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
