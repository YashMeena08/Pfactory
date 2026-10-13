import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="*"
            element={
              <p className="mx-auto max-w-6xl px-4 py-12 text-gray-600">
                Page not found, or not built yet.
              </p>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App