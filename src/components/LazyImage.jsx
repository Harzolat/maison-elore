import { useState } from 'react'

/**
 * Image with a reserved aspect box (no layout shift), a soft ivory
 * placeholder while loading, and an honest fallback when a file is
 * missing. Use `priority` for above-the-fold images such as the hero.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  sizes,
  priority = false,
  objectPosition,
}) {
  const [status, setStatus] = useState('loading')

  return (
    <div className={`relative overflow-hidden bg-ivory-deep ${className}`}>
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={{ objectPosition }}
          className={`lazy-img h-full w-full object-cover ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
      {status === 'error' && (
        <div
          role="img"
          aria-label={alt ? `${alt} (photograph unavailable)` : 'Photograph unavailable'}
          className="flex h-full w-full items-center justify-center border border-taupe-light bg-ivory-deep p-6 text-center"
        >
          <span className="text-xs uppercase tracking-[0.18em] text-charcoal-soft">
            Photograph unavailable
          </span>
        </div>
      )}
    </div>
  )
}
