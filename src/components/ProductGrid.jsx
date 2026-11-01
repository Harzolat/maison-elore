/**
 * Responsive product grid: two columns on phones, three from tablet
 * upwards, with consistent 3:4 image ratios.
 */
export default function ProductGrid({ children }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
      {children}
    </div>
  )
}
