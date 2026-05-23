'use client'

import { services } from '../data/services'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">

        <h2 className="section-title text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40" />

              <h3 className="absolute bottom-6 left-6 text-2xl font-bold">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}