import { Link } from 'react-router-dom'
import LazyImage from './LazyImage.jsx'
import { priceLabel } from '../lib/priceLabel.js'

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
        <h3 className="text-xl text-cream">{product.name}</h3>
        <span aria-hidden="true" className="card-rule mt-2 w-10" />
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-cream-soft">
          {product.category}, {product.colours.join(', ')}
        </p>
        <p className="mt-2 text-sm text-cream-soft">{priceLabel(product)}</p>
      </div>
    </Link>
  )
}
