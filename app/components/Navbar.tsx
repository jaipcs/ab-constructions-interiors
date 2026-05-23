'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
          A & B Constructions
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-300">

          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>
      </div>
    </nav>
  )
}