import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App