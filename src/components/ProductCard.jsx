import { Link } from 'react-router-dom'

function formatPrice(product) {
  const amount = new Intl.NumberFormat('en-IN').format(product.price)
  return product.pricingType === 'starting'
    ? `Starting from ₹${amount}`
    : `₹${amount}`
}

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="block overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
    >
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center bg-amber-100 text-amber-800">
          Photo coming soon
        </div>
      )}
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          {product.category}
        </p>
        <h3 className="mt-1 font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-2 font-medium text-amber-800">{formatPrice(product)}</p>
      </div>
    </Link>
  )
}

export default ProductCard