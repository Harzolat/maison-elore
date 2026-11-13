import { Link } from 'react-router-dom'
import usePageTitle from '../lib/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import ParallaxImage from '../components/ParallaxImage.jsx'

const principles = [
  {
    title: 'Cut',
    body: 'Patterns start as drawings on the studio table and are tested on real fittings before anything is produced. The line of a shoulder or the break of a trouser is decided in the room, on a body, not on a screen.',
  },
  {
    title: 'Cloth',
    body: 'Fabric is chosen for how it behaves after a year of wear, not for how it photographs on day one. Weight, drape and recovery matter more to us than labels on a swatch card.',
  },
  {
    title: 'Finish',
    body: 'Seams are pressed open, hems are left long enough to adjust, and buttons are sewn to be replaced rather than discarded. Small decisions that keep a garment in service.',
  },
]

export default function Atelier() {
  usePageTitle('The Atelier')

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-5 pt-14 md:px-10 md:pt-20">
        <Reveal>
          <header className="max-w-2xl">
            <h1 className="text-5xl text-cream md:text-6xl">The Atelier</h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-cream-soft">
              LateHour is a small menswear studio. We design a tight collection each
              season, cut it in honest cloth, and sell it through conversation rather than a
              checkout.
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <ParallaxImage
            src="/images/atelier-01.jpg"
            alt="A checked jacket being fitted on a client while the tailor adjusts the shoulder"
            className="mt-12 aspect-16/10 w-full md:mt-16"
            imgClassName="object-top"
            priority
            strength={5}
            sizes="100vw"
          />
        </Reveal>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <h2 className="text-4xl text-cream md:text-5xl">How a piece is made</h2>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-[58ch] text-base leading-relaxed text-cream-soft">
                Nothing here happens quickly. A jacket begins as a sketch, becomes a paper
                pattern, then a calico toile that is fitted and unpicked until the shape is
                right. Only then does it cut in its final cloth.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-cream-soft">
                Because the collection is small, the same hands see a piece from first drawing
                to final press. That continuity is the whole method. It is also the reason we
                cannot rush an order, and we would rather say so than pretend otherwise.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <h2 className="max-w-2xl text-4xl text-cream md:text-5xl">
              Three decisions we return to
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-y-10 md:grid-cols-3 md:gap-x-12">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <div className="border-t border-gold/40 pt-6">
                  <h3 className="text-2xl text-cream">{principle.title}</h3>
                  <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-cream-soft">
                    {principle.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ParallaxImage
              src="/images/atelier-02.jpg"
              alt="A tailor cutting grey cloth with shears on a worn wooden table"
              className="aspect-4/5 w-full"
              strength={6}
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-display text-3xl italic leading-[1.15] text-cream md:text-4xl">
              <p>
                &ldquo;We would rather make one coat properly than five coats quickly.&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.14em] text-cream-soft">
              The studio, on why the collection stays small
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/collections" className="btn-solid">
                Explore the Collection
              </Link>
              <Link to="/contact" className="btn-outline">
                Ask us anything
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
        <Reveal>
          <ParallaxImage
            src="/images/atelier-03.jpg"
            alt="Folded bolts of wool cloth stacked by colour on a studio shelf"
            className="aspect-16/10 w-full md:aspect-21/9"
            strength={5}
            sizes="100vw"
          />
        </Reveal>
      </section>
    </div>
  )
}
