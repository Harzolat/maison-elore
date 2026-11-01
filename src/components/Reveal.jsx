import { motion, useReducedMotion } from 'motion/react'

/**
 * Scroll-triggered entrance for a block of content.
 * Fades and lifts the child once, then stays put. Under
 * prefers-reduced-motion the content is simply rendered.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (reduceMotion) {
    const Static = as === 'div' ? 'div' : as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
