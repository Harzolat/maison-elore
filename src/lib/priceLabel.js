import { site } from '../config/site.js'

/**
 * Price shown on catalogue cards and product pages. Prices stay hidden
 * until `site.features.showPrices` is enabled and the product has a
 * price, so the two surfaces can never disagree.
 */
export function priceLabel(product) {
  if (site.features.showPrices && product?.price) {
    return typeof product.price === 'number'
      ? `£${product.price.toLocaleString('en-GB')}`
      : product.price
  }
  return 'Price on request'
}
