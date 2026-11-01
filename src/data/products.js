/**
 * Product catalogue.
 *
 * SAMPLE CONTENT: every product below is fictional and exists only to
 * demonstrate the site. Replace this file with the client's real
 * catalogue. Image paths point to /public/images/products/, so dropping
 * in new photographs is enough to rebrand the shop front.
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
    slug: 'halden-wool-suit',
    name: 'Halden Wool Suit',
    category: 'Tailoring',
    collection: 'winter-study',
    featured: true,
    description:
      'A two-piece suit in densely woven mid-grey wool. Single-breasted jacket with a soft shoulder, paired with a single-pleat trouser that breaks once over the shoe.',
    materials: ['Wool', 'Cupro lining'],
    colours: ['Mid grey'],
    availableSizes: ['46', '48', '50', '52', '54'],
    fit: 'Regular fit through the chest with a gently suppressed waist. Cut long in the leg; shortening is straightforward.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-halden-01.jpg',
        alt: 'Mid-grey wool suit worn beside a car on a city street',
      },
      {
        src: '/images/products/p-halden-02.jpg',
        alt: 'Close view of a dark suit jacket being buttoned',
      },
    ],
  },
  {
    id: 'p-02',
    slug: 'vaudon-double-breasted-blazer',
    name: 'Vaudon Double-Breasted Blazer',
    category: 'Tailoring',
    collection: 'winter-study',
    featured: false,
    description:
      'A six-on-two blazer in tobacco-brown wool with peak lapels. Structured enough to hold its line over a knit, soft enough to travel in.',
    materials: ['Wool'],
    colours: ['Tobacco brown'],
    availableSizes: ['46', '48', '50', '52'],
    fit: 'Close through the shoulder, roomy across the back. Sits well over knitwear.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-vaudon-01.jpg',
        alt: 'Tobacco-brown double-breasted blazer worn outdoors in autumn light',
      },
    ],
  },
  {
    id: 'p-03',
    slug: 'marne-pleated-trouser',
    name: 'Marne Pleated Trouser',
    category: 'Tailoring',
    collection: 'winter-study',
    featured: false,
    description:
      'A high-rise trouser with a single forward pleat, cut in warm stone wool. Full through the thigh with a clean break over the shoe.',
    materials: ['Wool'],
    colours: ['Stone'],
    availableSizes: ['46', '48', '50', '52', '54'],
    fit: 'Full through the thigh, tapering slightly from the knee. Sits at the natural waist.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-marne-01.jpg',
        alt: 'Stone pleated wool trousers worn with a knit and suede shoes',
      },
      {
        src: '/images/products/p-marne-02.jpg',
        alt: 'Close view of the brushed wool cloth used for the trouser',
      },
    ],
  },
  {
    id: 'p-04',
    slug: 'aube-oxford-shirt',
    name: 'Aube Oxford Shirt',
    category: 'Shirting',
    collection: 'permanent-line',
    featured: true,
    description:
      'An unfused-collar Oxford shirt in soft white. Slightly longer in the body, with a curved hem that works tucked or worn out.',
    materials: ['Cotton Oxford'],
    colours: ['White'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Regular fit. Roomy without billowing; size down for a closer line.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-aube-01.jpg',
        alt: 'White Oxford shirt worn with sleeves rolled, writing at a stone ledge',
      },
      {
        src: '/images/products/p-aube-02.jpg',
        alt: 'Close view of the white Oxford weave and collar',
      },
    ],
  },
  {
    id: 'p-05',
    slug: 'senne-cashmere-crewneck',
    name: 'Senne Cashmere Crewneck',
    category: 'Knitwear',
    collection: 'winter-study',
    featured: true,
    description:
      'A mid-weight crewneck in two-ply cashmere, knitted with ribbed cuffs and hem. Warm without bulk, soft against the collar of a shirt.',
    materials: ['Cashmere'],
    colours: ['Ivory', 'Charcoal'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Relaxed fit. Take your usual size for a clean line over a shirt.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-senne-01.jpg',
        alt: 'Ivory cashmere crewneck worn with the collar layered over a shirt',
      },
      {
        src: '/images/products/p-senne-02.jpg',
        alt: 'Close view of the cashmere knit at the shoulder',
      },
    ],
  },
  {
    id: 'p-06',
    slug: 'brume-roll-neck',
    name: 'Brume Roll-Neck',
    category: 'Knitwear',
    collection: 'winter-study',
    featured: false,
    description:
      'A fine-gauge roll-neck in merino wool. Worn under tailoring in winter, alone in spring.',
    materials: ['Merino wool'],
    colours: ['Charcoal'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Close fit. Sized to sit smoothly under a jacket.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-brume-01.jpg',
        alt: 'Charcoal merino roll-neck worn close to the neck',
      },
      {
        src: '/images/products/p-brume-02.jpg',
        alt: 'Close view of the roll-neck ribbed knit',
      },
    ],
  },
  {
    id: 'p-07',
    slug: 'lys-rib-cardigan',
    name: 'Lys Rib Cardigan',
    category: 'Knitwear',
    collection: 'winter-study',
    featured: false,
    description:
      'A wide-rib V-neck cardigan in cream lambswool with dark contrast trim along the placket. Heavy enough to work as light outerwear.',
    materials: ['Lambswool'],
    colours: ['Cream', 'Charcoal trim'],
    availableSizes: ['M', 'L', 'XL'],
    fit: 'Oversized by design. Take your usual size.',
    availabilityNote:
      'Sample listing. This piece is shown in two colourways; both are confirmed only on enquiry.',
    images: [
      {
        src: '/images/products/p-lys-01.jpg',
        alt: 'Cream ribbed V-neck cardigan with dark contrast trim, worn open',
      },
      {
        src: '/images/products/p-lys-02.jpg',
        alt: 'Close view of the cardigan rib knit',
      },
    ],
  },
  {
    id: 'p-08',
    slug: 'aries-wool-overcoat',
    name: 'Aries Wool Overcoat',
    category: 'Outerwear',
    collection: 'winter-study',
    featured: true,
    description:
      'A knee-length overcoat in heavy wool melton, worn belted at the waist. Notch lapels, flap pockets, single back vent. Cut to go over a suit without pulling across the shoulders.',
    materials: ['Wool melton', 'Cupro lining'],
    colours: ['Camel', 'Storm grey'],
    availableSizes: ['46', '48', '50', '52'],
    fit: 'Roomy enough for a jacket beneath. Falls just above the knee at 183 cm.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-aries-01.jpg',
        alt: 'Storm-grey wool overcoat worn over a suit, belted at the waist',
      },
      {
        src: '/images/products/p-aries-02.jpg',
        alt: 'Grey overcoat and cap worn against pale rock, strong daylight',
      },
    ],
  },
  {
    id: 'p-09',
    slug: 'sable-cotton-trench',
    name: 'Sable Cotton Trench',
    category: 'Outerwear',
    collection: 'permanent-line',
    featured: false,
    description:
      'A bonded cotton trench in warm stone. Storm flap, raglan sleeve, belt at the waist. Built for rain, cut for the office.',
    materials: ['Bonded cotton'],
    colours: ['Stone'],
    availableSizes: ['S', 'M', 'L', 'XL'],
    fit: 'Regular fit with room for a knit underneath.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-sable-01.jpg',
        alt: 'Stone cotton trench coat worn on a shoreline path',
      },
      {
        src: '/images/products/p-sable-02.jpg',
        alt: 'Close view of the trench storm flap and belt',
      },
    ],
  },
  {
    id: 'p-10',
    slug: 'meridian-lambswool-scarf',
    name: 'Meridian Lambswool Scarf',
    category: 'Accessories',
    collection: 'winter-study',
    featured: false,
    description:
      'A long lambswool scarf in a plain weave with hand-finished fringe. Worn once round the neck or loose under a coat.',
    materials: ['Lambswool'],
    colours: ['Charcoal', 'Ivory'],
    availableSizes: null,
    fit: 'One size. Sample dimensions to be confirmed with the client.',
    availabilityNote: SAMPLE_AVAILABILITY,
    images: [
      {
        src: '/images/products/p-meridian-01.jpg',
        alt: 'Charcoal lambswool scarf worn under a grey overcoat',
      },
      {
        src: '/images/products/p-meridian-02.jpg',
        alt: 'Close view of the scarf weave and ivory fringe',
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
