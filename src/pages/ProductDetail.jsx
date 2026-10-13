import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { siteConfig } from '../config/site'
import { formatPrice } from '../utils/formatPrice'
import { buildWhatsAppLink } from '../utils/whatsapp'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  useEffect(() => {
    document.title = product
      ? `${product.name} | ${siteConfig.businessName}`
      : `Product not found | ${siteConfig.businessName}`
  }, [product])

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <p className="mt-2 text-gray-600">
          This product may have been removed or the link is incorrect.
        </p>
        <Link to="/products" className="mt-4 inline-block text-amber-800 hover:underline">
          Back to all products
        </Link>
      </section>
    )
  }

  const details = [
    { label: 'Dimensions', value: product.dimensions },
    { label: 'Materials', value: product.materials },
    { label: 'Estimated manufacturing time', value: product.manufacturingTime },
  ].filter((detail) => detail.value)

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/products" className="text-sm text-amber-800 hover:underline">
        ← Back to all products
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full rounded-lg object-cover md:h-96"
          />
        ) : (
          <div className="flex h-80 items-center justify-center rounded-lg bg-amber-100 text-amber-800 md:h-96">
            Photo coming soon
          </div>
        )}

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-amber-800">
            {formatPrice(product)}
          </p>
          {product.pricingType === 'starting' && (
            <p className="mt-1 text-sm text-gray-500">
              Final price depends on size, material, fabric and finish.
            </p>
          )}

          <p className="mt-4 text-gray-700">{product.description}</p>

          <dl className="mt-6 space-y-3">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-sm font-semibold text-gray-900">{detail.label}</dt>
                <dd className="text-gray-700">{detail.value}</dd>
              </div>
            ))}
          </dl>

          {product.options && product.options.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-900">
                Customization options
              </h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {product.options.map((option) => (
                  <li
                    key={option}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a
            href={buildWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Enquire on WhatsApp
          </a>
          <p className="mt-2 text-xs text-gray-500">
            This opens WhatsApp with a message ready to send. Made to order, so
            final price and delivery are confirmed on chat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail