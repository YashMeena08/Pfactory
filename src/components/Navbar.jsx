import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-amber-800">
          RM Furniture
        </Link>
        <ul className="flex gap-6 text-gray-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar