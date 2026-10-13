function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="text-xl font-bold text-amber-800">
          Your Brand
        </a>
        <ul className="flex gap-6 text-gray-700">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar