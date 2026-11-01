import { useEffect } from 'react'
import { site } from '../config/site.js'

/** Sets the document title for a page, e.g. usePageTitle('The Collection'). */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — A Study in Modern Elegance`
  }, [title])
}
