/**
 * Product catalogue.
 *
 * SAMPLE CONTENT: every product below is fictional and exists only to
 * demonstrate the site. Replace this file with the client's real
 * catalogue. Image paths point to /public/images/products/, so dropping
 * in new photographs is enough to rebrand the shop front.
 *
 * Photography: the images in this catalogue are the studio's own
 * supplied shots (see public/CREDITS.md), cropped to the site's 3:4
 * product frame.
 *
 * Field notes:
 *  - `price` is omitted everywhere because no real prices exist yet and
 *    `features.showPrices` is off in src/config/site.js.
 *  - `availableSizes` is sample data. The UI never presents it as
 *    confirmed stock, and every product repeats that on the page.
 *  - `availabilityNote` must always be honest about what is known.
 */

const SAMPLE_AVAILABILITY =
  'Sample listing. Sizes and availability are confirmed only when you enquire.'

export const products = [
  {
    id: 'p-01',
    slug: 'marne-linen-grandad-shirt',
    name: 'Marne Linen Grandad Shirt',
    category: 'Linen',
    collection: 'winter-study',
    featured: true,
    description:
      'A short-sleeve shirt in navy linen with a grandad collar and a clean button placket. Cut straight through the body with a gently curved hem and finished with warm-toned buttons.',
    materials: ['Linen'],
    colours: ['Navy'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Relaxed fit through the body with a standard shoulder. Take your usual size.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-marne-01.jpg',
        alt: 'Navy linen grandad-collar shirt photographed flat on a white surface',
      },
      {
        src: '/images/products/p-marne-02.jpg',
        alt: 'The navy linen shirt shown hanging against a grey wall',
      },
    ],
  },
  {
    id: 'p-02',
    slug: 'senne-slub-henley',
    name: 'Senne Slub Henley',
    category: 'Linen',
    collection: 'winter-study',
    featured: false,
    description:
      'A short-sleeve henley in chalk-blue slub cloth with a three-button placket and a soft stand collar. The sleeves are rolled once and held with a small tab.',
    materials: ['Linen blend'],
    colours: ['Chalk blue'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Easy fit through the body. Size down for a closer line.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-senne-01.jpg',
        alt: 'Chalk-blue slub henley with rolled sleeves hanging on a wooden hanger',
      },
    ],
  },
  {
    id: 'p-03',
    slug: 'aube-band-collar-shirt',
    name: 'Aube Band-Collar Shirt',
    category: 'Linen',
    collection: 'permanent-line',
    featured: false,
    description:
      'A band-collar shirt in powder-blue cloth with a crosshatch weave, folded to show the placket and the marked cuff. Light enough for warm days, structured enough to hold its shape.',
    materials: ['Linen'],
    colours: ['Powder blue'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Regular fit. Roomy without billowing.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-aube-01.jpg',
        alt: 'Powder-blue band-collar shirt folded on a woven linen surface',
      },
    ],
  },
  {
    id: 'p-04',
    slug: 'brume-stripe-shirt',
    name: 'Brume Stripe Shirt',
    category: 'Cotton',
    collection: 'winter-study',
    featured: true,
    description:
      'A fine striped shirt in silver-grey cotton poplin, cut with a soft point collar and a single-button cuff. The stripe runs close and even across the body and yoke.',
    materials: ['Cotton poplin'],
    colours: ['Silver grey stripe'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Regular fit with a gentle taper through the waist.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-brume-01.jpg',
        alt: 'Silver-grey striped cotton shirt folded on a woven surface',
      },
    ],
  },
  {
    id: 'p-05',
    slug: 'sable-cotton-shirt',
    name: 'Sable Cotton Shirt',
    category: 'Cotton',
    collection: 'permanent-line',
    featured: true,
    description:
      'A short-sleeve shirt in sand-washed cotton, shown from the back on a hanger. Straight back yoke, curved hem, and sleeves rolled once with a button tab.',
    materials: ['Cotton'],
    colours: ['Sand'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Relaxed fit. Take your usual size.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-sable-01.jpg',
        alt: 'Sand cotton shirt photographed from the back on a hanger',
      },
    ],
  },
  {
    id: 'p-06',
    slug: 'lys-camp-collar-shirt',
    name: 'Lys Camp-Collar Shirt',
    category: 'Cotton',
    collection: 'permanent-line',
    featured: true,
    description:
      'A short-sleeve camp-collar shirt in crisp white cotton, finished with a small embroidered mark at each collar point. Cut straight with a clean, open neckline.',
    materials: ['Cotton'],
    colours: ['White'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Relaxed fit through the body with a standard shoulder.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-lys-01.jpg',
        alt: 'White camp-collar shirt with embroidered collar points, hanging against pale grey',
      },
    ],
  },
]

/** Look up a product by its URL slug. */
export function getProduct(slug) {
  return products.find((p) => p.slug === slug) || null
}

/** Featured pieces shown on the homepage. */
export function featuredProducts() {
  return products.filter((p) => p.featured)
}

/** Other pieces in the same category, used for related products. */
export function relatedProducts(product, limit = 3) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit)
}

/** Products in a category. */
export function productsInCategory(category) {
  if (!category || category === 'All') return products
  return products.filter((p) => p.category === category)
}
