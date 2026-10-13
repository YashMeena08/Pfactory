import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-amber-50 py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
          RM Furniture
        </p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
          Furniture made for your home
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Sofas, beds, chairs and tables, crafted in our own workshop and made to suit your space.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block rounded bg-amber-800 px-6 py-3 text-white hover:bg-amber-900"
        >
          Browse Designs
        </Link>
      </div>
    </section>
  )
}

export default Hero