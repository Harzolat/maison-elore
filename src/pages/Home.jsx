import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import usePageTitle from '../lib/usePageTitle.js'
import ParallaxImage from '../components/ParallaxImage.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { featuredProducts } from '../data/products.js'
import { collections } from '../data/collections.js'

const winterStudy = collections.find((c) => c.slug === 'winter-study')
const permanentLine = collections.find((c) => c.slug === 'permanent-line')

/** Campaign stills, supplied by the studio. */
const lookbook = [
  {
    src: '/images/editorial/look-rust-black.jpg',
    alt: 'A rust wool roll-neck with black pleated trousers, rust loafers and a black cross-body bag, laid out flat',
    label: 'Rust & Black',
    meta: 'Wool knit, pleated trouser',
  },
  {
    src: '/images/editorial/look-pleated-brown.jpg',
    alt: 'A brown pleated camp-collar shirt and matching drawstring trousers hanging against a pale grey wall',
    label: 'Pleated Brown',
    meta: 'Camp collar, drawstring',
  },
  {
    src: '/images/editorial/look-terracotta-suit.jpg',
    alt: 'A terracotta field jacket with cream trousers, brown loafers and a woven leather belt, laid out flat',
    label: 'Terracotta & Cream',
    meta: 'Cotton jacket, linen trouser',
  },
  {
    src: '/images/editorial/look-green-jacket.jpg',
    alt: 'A green shearling-collar jacket with a white sweatshirt, green jeans and white trainers, laid out flat',
    label: 'Green & White',
    meta: 'Sherpa collar, denim',
  },
]

function Hero() {
  const reduceMotion = useReducedMotion()
  const lineTransition = { duration: 0.9, ease: [0.16, 1, 0.3, 1] }

  return (
    <section className="border-b border-cream/10">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-12">
        <div className="order-2 px-5 pb-16 pt-12 md:px-10 lg:order-1 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:py-24 lg:pr-16">
          <h1 className="text-5xl text-cream md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={lineTransition}
              >
                A Study in{' '}
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

          <motion.span
            aria-hidden="true"
            className="mt-8 block h-px w-16 origin-left bg-gold/70"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ ...lineTransition, delay: 0.3 }}
          />

          <motion.p
            className="mt-6 max-w-[46ch] text-base leading-relaxed text-cream-soft"
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
            className="h-[52svh] min-h-[320px] sm:h-[58svh] lg:h-full lg:min-h-[calc(100svh-5rem)]"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ParallaxImage
              src="/images/editorial/hero-sand-set.jpg"
              alt="A man in a dusty-rose short-sleeve shirt and matching trousers, worn over a pale blue tee with white trainers"
              className="h-full w-full"
              imgClassName="object-top"
              objectPosition="50% 22%"
              priority
              strength={5}
              sizes="(max-width: 1023px) 100vw, 58vw"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/45 to-transparent" />
              <div className="absolute bottom-6 right-6 hidden items-center gap-3 sm:flex">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-cream/70">
                  Scroll
                </span>
                <span className="scroll-cue" aria-hidden="true" />
              </div>
            </ParallaxImage>
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
            <Link to="/collections" className="link-underline text-xs uppercase tracking-[0.18em] text-cream-soft hover:text-cream">
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

      {/* The Winter Study, on a raised black band */}
      <section className="bg-ink-raised text-cream">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative pb-12 sm:pb-14">
              <ParallaxImage
                src="/images/editorial/winter-study-black.jpg"
                alt="A man in a full-length black wool overcoat, grey crew-neck knit and black tailored trousers, with a striped scarf and white leather trainers"
                className="aspect-3/5 w-full"
                imgClassName="object-top"
                strength={6}
                sizes="(max-width: 1023px) 100vw, 45vw"
              />
              <div className="absolute -bottom-8 right-0 aspect-3/4 w-[36%] border border-cream/15 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:-bottom-10 sm:-right-6 sm:w-[38%]">
                <ParallaxImage
                  src="/images/editorial/winter-study-camel.jpg"
                  alt="A man in a long camel wool overcoat over a black roll-neck, standing against warm timber panelling"
                  className="h-full w-full"
                  imgClassName="object-top"
                  strength={10}
                  sizes="(max-width: 1023px) 38vw, 18vw"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading title={winterStudy.name} intro={winterStudy.introduction} />
            <p className="mt-5 text-sm leading-relaxed text-cream-soft">
              Winter dressing, kept quiet: a long wool coat over a fine roll-neck, a
              chalk-and-black scarf against a grey knit, and one gold note at the wrist.
            </p>
            <Link to="/collections" className="btn-outline mt-9 border-gold/60 text-cream hover:bg-gold hover:text-ink">
              Browse the collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Permanent Line, on a softer black band */}
      <section className="bg-ink-soft">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <ParallaxImage
              src="/images/editorial-permanent-line.jpg"
              alt="A stone double-breasted coat worn on a city street"
              className="aspect-4/5 w-full"
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <SectionHeading title={permanentLine.name} intro={permanentLine.introduction} />
            <p className="mt-5 text-sm leading-relaxed text-cream-soft">
              Powder blue, sand and white, in linen and washed cotton.
            </p>
            <Link to="/collections" className="btn-outline mt-9">
              Browse the collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Lookbook: campaign stills */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="The Lookbook"
              intro="A closer look at the season, photographed in the studio and on the street."
            />
            <span className="hidden text-xs uppercase tracking-[0.18em] text-cream-soft sm:block">
              Four looks
            </span>
          </div>
        </Reveal>

        <div className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:scroll-pl-0 sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:mt-14 lg:grid-cols-4">
          {lookbook.map((look, index) => (
            <Reveal
              key={look.src}
              delay={index * 0.07}
              className="w-[72%] shrink-0 snap-start sm:w-auto"
            >
              <figure className="group">
                <ParallaxImage
                  src={look.src}
                  alt={look.alt}
                  className="aspect-3/4 w-full"
                  imgClassName="zoomed"
                  strength={5}
                  sizes="(max-width: 639px) 72vw, (max-width: 1023px) 50vw, 24vw"
                />
                <figcaption className="mt-4">
                  <span className="block font-display text-lg text-cream">{look.label}</span>
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.14em] text-cream-soft">
                    {look.meta}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Atelier introduction */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-4xl text-cream md:text-5xl">Inside the atelier</h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-cream-soft">
              Patterns are cut in the studio, cloth is chosen by hand, and every fitting
              happens in person. The atelier page describes how a piece moves from first
              drawing to final press.
            </p>
            <Link to="/atelier" className="link-underline mt-6 inline-block text-xs uppercase tracking-[0.18em] text-cream">
              Visit the atelier
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-3 md:gap-5">
          <Reveal>
            <ParallaxImage
              src="/images/atelier-01.jpg"
              alt="A jacket being fitted on a client in the atelier"
              className="aspect-3/4 w-full"
              strength={4}
              sizes="(max-width: 767px) 33vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ParallaxImage
              src="/images/atelier-02.jpg"
              alt="Hands cutting cloth with shears on a wooden table"
              className="aspect-3/4 w-full"
              strength={4}
              sizes="(max-width: 767px) 33vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.16}>
            <ParallaxImage
              src="/images/atelier-03.jpg"
              alt="Stacks of folded wool cloth in browns, greys and checks"
              className="aspect-3/4 w-full"
              strength={4}
              sizes="(max-width: 767px) 33vw, 30vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Enquiry, closing on a campaign still */}
      <section className="border-t border-cream/10 bg-ink-raised">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-5 py-20 md:px-10 md:py-28 lg:order-1 lg:py-32 lg:pr-16">
            <Reveal>
              <span aria-hidden="true" className="mb-8 block h-px w-14 bg-gold/70" />
              <h2 className="max-w-xl text-4xl text-cream md:text-5xl">
                Every piece begins with a conversation.
              </h2>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-cream-soft">
                Ask about sizing, cloth, alterations or availability. Enquiries are answered by
                the studio, one at a time.
              </p>
              <Link to="/contact" className="btn-solid mt-9 hover:bg-gold-light">
                Enquire about a piece
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <ParallaxImage
              src="/images/editorial/look-terracotta-suit.jpg"
              alt="A terracotta field jacket with cream trousers, brown loafers and a woven leather belt, laid out flat"
              className="aspect-4/5 w-full sm:aspect-16/10 lg:aspect-auto lg:h-full lg:min-h-[38rem]"
              objectPosition="50% 42%"
              strength={6}
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
