import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll on route change. Uses an instant jump so long pages do
 * not animate back through every section they just left.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
