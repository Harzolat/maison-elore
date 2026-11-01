import { useSearchParams } from 'react-router-dom'
import usePageTitle from '../lib/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { products, productsInCategory } from '../data/products.js'
import { categories } from '../data/collections.js'

const filters = ['All', ...categories]

export default function Collections() {
  usePageTitle('The Collection')
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const validCategory = filters.includes(activeCategory) ? activeCategory : 'All'
  const visible = productsInCategory(validCategory)

  function selectCategory(category) {
    setSearchParams(category === 'All' ? {} : { category })
  }

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
      <Reveal>
        <header className="max-w-2xl">
          <h1 className="text-5xl text-charcoal md:text-6xl">The Collection</h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-charcoal-soft">
            A small menswear wardrobe: tailoring, knitwear, outerwear, shirting and a
            leather-free line of accessories. Every piece is made to order or drawn from the
            studio&apos;s current run, and availability is confirmed when you enquire.
          </p>
        </header>
      </Reveal>

      <div className="mt-10 border-t border-taupe-light pt-6">
        <div
          className="flex flex-wrap gap-x-8 gap-y-4"
          role="group"
          aria-label="Filter by category"
        >
          {filters.map((category) => {
            const isActive = category === validCategory
            const count =
              category === 'All' ? products.length : productsInCategory(category).length
            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={isActive}
                className={`link-underline text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive ? 'text-charcoal' : 'text-charcoal-soft hover:text-charcoal'
                }`}
                data-active={isActive ? 'true' : undefined}
              >
                {category}
                <span className="ml-1.5 align-super text-[0.65rem] text-charcoal-soft">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        {visible.length > 0 ? (
          <ProductGrid>
            {visible.map((product, index) => (
              <Reveal key={product.slug} delay={Math.min(index, 3) * 0.07}>
                <ProductCard product={product} priority={index < 2} />
              </Reveal>
            ))}
          </ProductGrid>
        ) : (
          <div className="border border-taupe-light px-6 py-16 text-center">
            <p className="text-lg text-charcoal">
              No pieces are listed in this category yet.
            </p>
            <button type="button" onClick={() => selectCategory('All')} className="btn-outline mt-6">
              Show all pieces
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
