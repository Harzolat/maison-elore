import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import usePageTitle from '../lib/usePageTitle.js'
import LazyImage from '../components/LazyImage.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { featuredProducts } from '../data/products.js'
import { collections } from '../data/collections.js'

const winterStudy = collections.find((c) => c.slug === 'winter-study')
const permanentLine = collections.find((c) => c.slug === 'permanent-line')

function Hero() {
  const reduceMotion = useReducedMotion()
  const lineTransition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] }

  return (
    <section className="border-b border-taupe-light/70">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-12">
        <div className="order-2 px-5 pb-16 pt-12 md:px-10 lg:order-1 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:py-24 lg:pr-16">
          <h1 className="text-5xl text-charcoal md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={lineTransition}
              >
                A Study in
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ ...lineTransition, delay: 0.12 }}
              >
                Modern Elegance.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-[46ch] text-base leading-relaxed text-charcoal-soft"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            LateHour cuts a small menswear wardrobe in honest cloth: linen and cotton
            shirting, made to be worn for years rather than seasons.
          </motion.p>

          <motion.div
            className="mt-9"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/collections" className="btn-solid">
              Explore the Collection
            </Link>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <motion.div
            className="h-[44svh] min-h-[300px] sm:h-[54svh] lg:h-auto lg:min-h-[calc(100svh-5rem)]"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <LazyImage
              src="/images/hero-home.jpg"
              alt="A camel wool overcoat worn belted over grey trousers, in front of a modernist stone building"
              className="h-full w-full"
              imgClassName="object-top"
              priority
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle('')
  const featured = featuredProducts()

  return (
    <>
      <Hero />

      {/* Selected pieces */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Selected pieces" />
            <Link to="/collections" className="link-underline text-xs uppercase tracking-[0.18em] text-charcoal-soft hover:text-charcoal">
              View the full collection
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-10">
          {featured.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.08}>
              <ProductCard product={product} priority={index < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Winter Study, on charcoal */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <LazyImage
              src="/images/editorial-winter-study.jpg"
              alt="A stone-grey suit worn with a navy roll-neck against a stone pillar"
              className="aspect-4/5 w-full"
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              title={winterStudy.name}
              intro={winterStudy.introduction}
              tone="dark"
            />
            <p className="mt-5 text-sm leading-relaxed text-taupe-light">
              Indigo, chalk blue and silver grey, in linen and cotton poplin.
            </p>
            <Link to="/collections" className="btn-outline mt-9 border-taupe text-ivory hover:bg-ivory hover:text-charcoal">
              Browse the collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Permanent Line, on ivory */}
      <section className="bg-ivory-deep">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <LazyImage
              src="/images/editorial-permanent-line.jpg"
              alt="A stone double-breasted coat worn on a city street"
              className="aspect-4/5 w-full"
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <SectionHeading title={permanentLine.name} intro={permanentLine.introduction} />
            <p className="mt-5 text-sm leading-relaxed text-charcoal-soft">
              Powder blue, sand and white, in linen and washed cotton.
            </p>
            <Link to="/collections" className="btn-outline mt-9">
              Browse the collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Atelier introduction */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-4xl text-charcoal md:text-5xl">Inside the atelier</h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-charcoal-soft">
              Patterns are cut in the studio, cloth is chosen by hand, and every fitting
              happens in person. The atelier page describes how a piece moves from first
              drawing to final press.
            </p>
            <Link to="/atelier" className="link-underline mt-6 inline-block text-xs uppercase tracking-[0.18em] text-charcoal">
              Visit the atelier
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-5">
          <Reveal>
            <LazyImage
              src="/images/atelier-01.jpg"
              alt="A jacket being fitted on a client in the atelier"
              className="aspect-3/4 w-full"
              sizes="(max-width: 767px) 33vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <LazyImage
              src="/images/atelier-02.jpg"
              alt="Hands cutting cloth with shears on a wooden table"
              className="aspect-3/4 w-full"
              sizes="(max-width: 767px) 33vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.16}>
            <LazyImage
              src="/images/atelier-03.jpg"
              alt="Stacks of folded wool cloth in browns, greys and checks"
              className="aspect-3/4 w-full"
              sizes="(max-width: 767px) 33vw, 30vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-charcoal text-ivory">
        <div className="mx-auto max-w-[1400px] px-5 py-20 text-center md:px-10 md:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-4xl text-ivory md:text-5xl">
              Every piece begins with a conversation.
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] text-base leading-relaxed text-taupe-light">
              Ask about sizing, cloth, alterations or availability. Enquiries are answered by
              the studio, one at a time.
            </p>
            <Link to="/contact" className="btn-solid mt-9 bg-ivory text-charcoal hover:bg-taupe hover:text-charcoal">
              Enquire about a piece
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
