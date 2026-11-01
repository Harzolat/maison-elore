import { Link } from 'react-router-dom'
import { site } from '../config/site.js'
import LazyImage from './LazyImage.jsx'

function priceLabel(product) {
  if (site.features.showPrices && product.price) {
    return typeof product.price === 'number'
      ? `£${product.price.toLocaleString('en-GB')}`
      : product.price
  }
  return 'Price on request'
}

/**
 * Catalogue card: photograph, name, one meta line. The whole card is a
 * single link; there are no cart controls anywhere on this site.
 */
export default function ProductCard({ product, priority = false }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block focus-visible:outline-offset-4"
      aria-label={`${product.name}. ${priceLabel(product)}. View details.`}
    >
      <LazyImage
        src={product.images[0].src}
        alt={product.images[0].alt}
        className="aspect-3/4"
        imgClassName="zoomed"
        priority={priority}
        sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 30vw"
      />
      <div className="mt-4">
        <h3 className="text-xl text-charcoal">{product.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-charcoal-soft">
          {product.category}, {product.colours.join(', ')}
        </p>
        <p className="mt-2 text-sm text-charcoal-soft">{priceLabel(product)}</p>
      </div>
    </Link>
  )
}
