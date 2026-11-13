/**
 * Section heading block. Left-aligned by default; `align="center"` is
 * available but should stay rare. Optional intro copy sits under the
 * heading, never beside it.
 */
export default function SectionHeading({
  title,
  intro,
  align = 'left',
  as: Heading = 'h2',
}) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Heading className="text-4xl text-cream md:text-5xl">{title}</Heading>
      {intro && (
        <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-cream-soft">
          {intro}
        </p>
      )}
    </div>
  )
}
