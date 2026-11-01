import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { site } from '../config/site.js'
import MobileMenu from './MobileMenu.jsx'

const links = [
  { to: '/collections', label: 'The Collection' },
  { to: '/atelier', label: 'The Atelier' },
  { to: '/contact', label: 'Contact' },
]

/**
 * Sticky site header: wordmark on the left, restrained navigation on
 * the right. Below `lg` the links collapse into the mobile menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-taupe-light/70 bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link
          to="/"
          className="font-display text-lg uppercase tracking-[0.28em] text-charcoal md:text-xl"
          aria-label={`${site.name}, home`}
        >
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `link-underline text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive ? 'text-charcoal' : 'text-charcoal-soft hover:text-charcoal'
                    }`
                  }
                  data-active={
                    location.pathname.startsWith(link.to) ||
                    (link.to === '/collections' && location.pathname.startsWith('/products'))
                      ? 'true'
                      : undefined
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu aria-hidden="true" strokeWidth={1.25} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
