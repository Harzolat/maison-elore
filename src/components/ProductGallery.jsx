import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import LazyImage from './LazyImage.jsx'

/**
 * Product gallery: one large image with a fade transition, plus
 * thumbnail buttons when the product has more than one photograph.
 * Thumbnails are real buttons with pressed state, so the gallery works
 * with touch and keyboard, not hover.
 */
export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const images = product.images
  const active = images[activeIndex]

  return (
    <div>
      <div className="relative aspect-3/4 w-full overflow-hidden bg-ink-soft">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.src}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <LazyImage
              src={active.src}
              alt={active.alt}
              className="h-full w-full"
              priority
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3" role="group" aria-label={`Photographs of ${product.name}`}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
              aria-label={`Show photograph ${index + 1} of ${images.length}: ${image.alt}`}
              className={`h-20 w-16 overflow-hidden border transition-colors duration-300 md:h-24 md:w-20 ${
                index === activeIndex
                  ? 'border-gold'
                  : 'border-cream/15 hover:border-gold/40'
              }`}
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
