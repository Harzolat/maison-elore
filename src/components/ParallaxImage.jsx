import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import LazyImage from './LazyImage.jsx'

/**
 * LazyImage inside a frame that drifts gently against the scroll.
 *
 * The outer element owns the aspect ratio (pass it through `className`),
 * the image sits over-sized inside it so the movement never exposes an
 * edge. `strength` is the drift as a percentage of the image height.
 * Under prefers-reduced-motion the image is simply static.
 */
export default function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  sizes,
  priority = false,
  strength = 7,
  objectPosition,
  children,
}) {
  const frameRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={frameRef} className={`relative overflow-hidden bg-ink-soft ${className}`}>
      <motion.div
        className="absolute inset-x-0 -inset-y-[12%] will-change-transform"
        style={reduceMotion ? undefined : { y }}
      >
        <LazyImage
          src={src}
          alt={alt}
          className="h-full w-full"
          imgClassName={imgClassName}
          sizes={sizes}
          priority={priority}
          objectPosition={objectPosition}
        />
      </motion.div>
      {children}
    </div>
  )
}
