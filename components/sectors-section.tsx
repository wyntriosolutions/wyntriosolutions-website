'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const sectors = [
  {
    title: 'Corporate offices',
    description: 'We create modern, efficient environments that improve workflow, employee comfort, and overall productivity.',
  },
  {
    title: 'Educational Institutions',
    description: 'We design and support student-focused spaces that enhance learning, safety, and day-to-day operations.',
  },
  {
    title: 'Hospitality Venues',
    description: 'We deliver welcoming, well-designed solutions that elevate guest experience and support smooth facility management.',
  },
  {
    title: 'Healthcare Facilities',
    description: 'We provide reliable, hygienic, and patient-centric solutions that meet strict industry standards and ensure seamless operations.',
  },
]

export function SectorsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Primary Sectors</span>{' '}
            <span className="text-accent">Served</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            We serve diverse industries with tailored solutions that drive real results. Partnering with leading organizations across multiple sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with circular rings and decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 sm:h-96 lg:h-96 flex items-center justify-center"
          >
            {/* Outer decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 rounded-full border-2 border-transparent bg-gradient-to-r from-accent/20 to-primary/20 blur-sm"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-64 h-64 rounded-full border-2 border-accent/30"
            />

            {/* Central image circle */}
            <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-accent flex items-center justify-center overflow-hidden">
              <img
                src="/business-solutions-technology.jpg"
                alt="Sectors"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-12 left-8 w-6 h-6 bg-gradient-to-br from-accent to-teal-500 rounded-lg rotate-45"
            />
            
            <motion.div
              animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-20 right-12 w-4 h-4 bg-gradient-to-br from-accent to-teal-500 rounded-full"
            />

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-12 left-12 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-lg rotate-12"
            />
          </motion.div>

          {/* Right Side - Sectors List with checkmarks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                {/* Checkmark icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center mt-0.5"
                >
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </motion.div>

                {/* Text content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-lg text-foreground mb-1">{sector.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
