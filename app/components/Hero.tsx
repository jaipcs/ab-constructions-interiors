'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            A & B
            <br />
            Constructions & Interiors
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Luxury Architecture • Modern Interiors • Premium Construction
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
              View Projects
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}