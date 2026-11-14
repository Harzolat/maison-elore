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

function isLinkActive(pathname, to) {
  return pathname === to || (to === '/collections' && pathname.startsWith('/products'))
}

/**
 * Full-screen navigation panel for small screens.
 * Closes on route change and Escape, traps scroll, and moves focus to
 * the close button while open.
 */
export default function MobileMenu({ open, onClose }) {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const closeButtonRef = useRef(null)
  const panelRef = useRef(null)

  // Close whenever the route changes.
  useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      // Keep Tab inside the open panel while it is acting as a modal.
      const focusable = [
        ...panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ]
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      // Hand focus back to whatever opened the menu (the header button).
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open, onClose])

  // Rendered through a portal so the fixed panel is never captured by a
  // transformed or backdrop-filtered ancestor (the sticky header).
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          className="fixed inset-0 z-50 bg-ink lg:hidden"
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
              className="flex items-center"
              aria-label={`${site.name}, home`}
            >
              <img
                src="/images/logo-light.png"
                alt=""
                aria-hidden="true"
                width="1727"
                height="624"
                className="h-5 w-auto"
              />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-cream"
            >
              <X aria-hidden="true" strokeWidth={1.25} />
            </button>
          </div>

          <nav aria-label="Main" className="px-5 pt-10">
            <ul className="space-y-7">
              {links.map((link, index) => {
                const active = isLinkActive(location.pathname, link.to)
                return (
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
                      aria-current={active ? 'page' : undefined}
                      className={`font-display text-4xl transition-colors ${
                        active ? 'text-gold' : 'text-cream hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>

          <p className="absolute bottom-8 left-5 right-5 max-w-xs text-xs leading-relaxed text-cream-soft">
            {site.sampleNotice}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
