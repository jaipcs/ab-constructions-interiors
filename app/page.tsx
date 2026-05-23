import Navbar from './components/Navbar'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          A & B Constructions and Interiors Ltd
        </h1>

        <p className="mt-6 text-gray-400 text-xl max-w-3xl leading-8">
          Premium Construction, Luxury Architecture, Modern Interiors,
          Commercial & Residential Projects
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:scale-105 transition duration-300">
          Explore Projects
        </button>

      </main>

      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}