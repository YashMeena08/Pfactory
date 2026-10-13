import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['All', ...new Set(products.map((product) => product.category))]

function Products() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const visibleProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Our Furniture</h1>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((name) => (
            <button
              key={name}
              onClick={() => setCategory(name)}
              className={`rounded-full px-4 py-2 text-sm ${
                category === name
                  ? 'bg-amber-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div>
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded border border-gray-300 px-3 py-2 sm:w-64"
          />
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <p className="mt-10 text-gray-600">No products match your search.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Products