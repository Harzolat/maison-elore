import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import usePageTitle from '../lib/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import ProductGallery from '../components/ProductGallery.jsx'
import ProductCard from '../components/ProductCard.jsx'
import WhatsAppEnquiryLink from '../components/WhatsAppEnquiryLink.jsx'
import { collections } from '../data/collections.js'
import { getProduct, relatedProducts } from '../data/products.js'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [selectedSize, setSelectedSize] = useState('')

  usePageTitle(product ? product.name : 'Piece not found')

  if (!product) {
    return (
      <div className="mx-auto max-w-[1400px] px-5 py-24 text-center md:px-10">
        <h1 className="text-4xl text-charcoal">This piece is not in the catalogue</h1>
        <p className="mx-auto mt-4 max-w-[46ch] text-base text-charcoal-soft">
          The link may be out of date, or the piece may have been replaced. The current
          collection is one click away.
        </p>
        <Link to="/collections" className="btn-solid mt-8">
          View the collection
        </Link>
      </div>
    )
  }

  const collection = collections.find((c) => c.slug === product.collection)
  const related = relatedProducts(product)
  const enquiryHref = `/contact?piece=${encodeURIComponent(product.slug)}${
    selectedSize ? `&size=${encodeURIComponent(selectedSize)}` : ''
  }`
  const whatsappMessage = [
    `Hello, I would like to enquire about the ${product.name}.`,
    `Size: ${selectedSize || 'to be advised'}`,
    typeof window !== 'undefined'
      ? `Link: ${window.location.origin}/products/${product.slug}`
      : '',
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10 md:py-14">
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
        <Link to="/collections" className="link-underline">
          The Collection
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{product.category}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ProductGallery product={product} />
        </div>

        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
            {product.category}
            {collection ? ` · ${collection.name}` : ''}
          </p>
          <h1 className="mt-4 text-4xl text-charcoal md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.12em] text-charcoal-soft">
            Price on request
          </p>

          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-charcoal-soft">
            {product.description}
          </p>

          <dl className="mt-10 border-t border-taupe-light">
            <div className="grid grid-cols-3 gap-4 border-b border-taupe-light py-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">Materials</dt>
              <dd className="col-span-2 text-sm text-charcoal">{product.materials.join(', ')}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 border-b border-taupe-light py-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">Colours</dt>
              <dd className="col-span-2 text-sm text-charcoal">{product.colours.join(', ')}</dd>
            </div>
            <div className="grid grid-cols-3 gap-4 border-b border-taupe-light py-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">Fit</dt>
              <dd className="col-span-2 text-sm leading-relaxed text-charcoal">{product.fit}</dd>
            </div>
          </dl>

          {product.availableSizes ? (
            <fieldset className="mt-10">
              <legend className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
                Size
              </legend>
              <div className="mt-4 flex flex-wrap gap-3" role="group">
                {product.availableSizes.map((option) => {
                  const isActive = option === selectedSize
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedSize(isActive ? '' : option)}
                      aria-pressed={isActive}
                      className={`min-w-14 border px-4 py-3 text-sm transition-colors duration-300 ${
                        isActive
                          ? 'border-charcoal bg-charcoal text-ivory'
                          : 'border-taupe-light text-charcoal hover:border-taupe'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-charcoal-soft">
                Sizes shown are sample data and are not confirmed stock. The studio confirms
                sizing on enquiry.
              </p>
            </fieldset>
          ) : (
            <p className="mt-10 text-sm text-charcoal-soft">One size.</p>
          )}

          <div className="mt-10 border-l-2 border-taupe bg-ivory-deep px-5 py-4">
            <h2 className="text-xs uppercase tracking-[0.14em] text-charcoal-soft">
              Availability
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal">{product.availabilityNote}</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to={enquiryHref} className="btn-solid">
              Enquire About This Piece
            </Link>
            <WhatsAppEnquiryLink message={whatsappMessage} className="w-full sm:w-auto" />
          </div>
          {selectedSize && (
            <p className="mt-3 text-xs text-charcoal-soft">
              Your enquiry will mention size {selectedSize}.
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24 border-t border-taupe-light pt-16 md:mt-32">
          <Reveal>
            <h2 className="text-3xl text-charcoal md:text-4xl">You may also consider</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
          <p className="mt-14">
            <Link to="/collections" className="link-underline text-xs uppercase tracking-[0.18em] text-charcoal">
              Back to the collection
            </Link>
          </p>
        </section>
      )}
    </div>
  )
}
