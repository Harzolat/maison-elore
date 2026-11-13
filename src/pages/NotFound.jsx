import { Link } from 'react-router-dom'
import usePageTitle from '../lib/usePageTitle.js'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <div className="mx-auto max-w-[1400px] px-5 py-24 text-center md:px-10 md:py-32">
      <h1 className="text-5xl text-cream md:text-6xl">Page not found</h1>
      <p className="mx-auto mt-5 max-w-[46ch] text-base leading-relaxed text-cream-soft">
        This address does not match anything on the site. The collection is the best place to
        start again.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
        <Link to="/collections" className="btn-solid">
          Explore the Collection
        </Link>
        <Link to="/" className="btn-outline">
          Back to the homepage
        </Link>
      </div>
    </div>
  )
}
