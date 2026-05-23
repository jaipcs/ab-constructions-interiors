export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            A & B Constructions and Interiors Ltd
          </h2>

          <p className="text-gray-400 mt-2">
            Luxury Architecture • Interiors • Construction
          </p>
        </div>

        <div className="flex gap-6 text-gray-400 text-sm uppercase tracking-wider">
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

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 A & B Constructions and Interiors Ltd. All Rights Reserved.
      </div>
    </footer>
  )
}