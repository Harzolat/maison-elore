/**
 * Section heading block. Left-aligned by default; `align="center"` is
 * available but should stay rare. Optional intro copy sits under the
 * heading, never beside it. `tone="dark"` inverts for charcoal bands.
 */
export default function SectionHeading({
  title,
  intro,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
}) {
  const centered = align === 'center'
  const dark = tone === 'dark'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Heading className={`text-4xl md:text-5xl ${dark ? 'text-ivory' : 'text-charcoal'}`}>
        {title}
      </Heading>
      {intro && (
        <p
          className={`mt-5 max-w-[58ch] text-base leading-relaxed ${
            dark ? 'text-taupe-light' : 'text-charcoal-soft'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
