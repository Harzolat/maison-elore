import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../config/site.js'
import MobileMenu from './MobileMenu.jsx'

const links = [
  { to: '/collections', label: 'The Collection' },
  { to: '/atelier', label: 'The Atelier' },
  { to: '/contact', label: 'Contact' },
]

function isLinkActive(pathname, to) {
  return (
    pathname === to ||
    (to === '/collections' && pathname.startsWith('/products'))
  )
}

/**
 * Sticky site header: a translucent black bar with a gold brand rule,
 * wordmark on the left and restrained navigation on the right. The rule
 * draws out and the backdrop deepens once the page scrolls. Below `lg`
 * the links collapse into the mobile menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? 'border-cream/10 bg-ink/90 backdrop-blur-xl'
          : 'border-transparent bg-ink/70 backdrop-blur-md'
      }`}
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10"
      >
        <Link
          to="/"
          className="group -my-2 flex items-center py-2"
          aria-label={`${site.name}, home`}
        >
          <img
            src="/images/logo-light.png"
            alt=""
            aria-hidden="true"
            width="1727"
            height="624"
            className="h-5 w-auto transition-transform duration-500 ease-out group-hover:-translate-y-px md:h-6"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {links.map((link) => {
              const active = isLinkActive(location.pathname, link.to)
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={active ? 'page' : undefined}
                    data-active={active ? 'true' : undefined}
                    className={`link-underline text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                      active ? 'text-gold' : 'text-cream-soft hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-cream transition-[color,transform] duration-300 hover:text-gold active:scale-95 lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu aria-hidden="true" strokeWidth={1.25} />
        </button>
      </motion.div>

      {/* Brand rule: a gold hairline that draws across the header on scroll. */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-gold via-gold/45 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'scale-x-100' : 'scale-x-[0.16]'
        }`}
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
