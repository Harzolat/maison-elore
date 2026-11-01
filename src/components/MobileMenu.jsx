import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import { site } from '../config/site.js'

const links = [
  { to: '/collections', label: 'The Collection' },
  { to: '/atelier', label: 'The Atelier' },
  { to: '/contact', label: 'Contact' },
]

/**
 * Full-screen navigation panel for small screens.
 * Closes on route change and Escape, traps scroll, and moves focus to
 * the close button while open.
 */
export default function MobileMenu({ open, onClose }) {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const closeButtonRef = useRef(null)

  // Close whenever the route changes.
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  // Rendered through a portal so the fixed panel is never captured by a
  // transformed or backdrop-filtered ancestor (the sticky header).
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-ivory lg:hidden"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex h-16 items-center justify-between px-5">
            <Link
              to="/"
              onClick={onClose}
              className="font-display text-base uppercase tracking-[0.3em] text-charcoal"
            >
              {site.name}
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal"
            >
              <X aria-hidden="true" strokeWidth={1.25} />
            </button>
          </div>

          <nav aria-label="Main" className="px-5 pt-10">
            <ul className="space-y-7">
              {links.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : 0.08 + index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="font-display text-4xl text-charcoal"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <p className="absolute bottom-8 left-5 right-5 max-w-xs text-xs leading-relaxed text-charcoal-soft">
            {site.sampleNotice}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
