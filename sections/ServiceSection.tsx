'use client'


import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { CheckCircle2, Briefcase, Cpu, LineChart, Shield, Users } from 'lucide-react'



const services = [
  {
    title: 'Facility Management',
    subtitle: 'Operations & Maintenance',
    description:
      'End-to-end solutions for property upkeep and operations, ensuring smooth and efficient facility functions.',
    image: 'service-img/facility.webp',
  },
  {
    title: 'Housekeeping',
    subtitle: 'Cleaning & Maintenance',
    description:
      'Routine cleaning and upkeep services for commercial and residential spaces to promote healthy and hygienic environments.',
    image: 'service-img/housekeeping.jpg',
  },
  {
    title: 'Security Services',
    subtitle: 'Safety & Protection',
    description:
      'Reliable security services with trained personnel focused on safeguarding people, property, and operations 24/7.',
    image: 'service-img/security.jpg',
  },
  {
    title: 'Home Nursing',
    subtitle: 'Healthcare Support',
    description:
      'Compassionate nursing care and medical assistance provided in the comfort of your home.',
    image: 'service-img/nurse.jpg',
  },
  {
    title: 'Cab Facilities',
    subtitle: 'Transportation Services',
    description:
      'Safe, on-time transportation for staff along with convenient car rental solutions for hassle-free commuting.',
    image: 'service-img/cab.png',
  },
  {
    title: 'Transportation Services',
    subtitle: 'Travel & Logistics',
    description:
      'Reliable and comfortable travel arrangements tailored to daily commuting and business travel needs.',
    image: 'service-img/transport.webp',
  },
];

export default function ServiceSection() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
               We provide a comprehensive range of facility and support services designed to enhance comfort, safety, and operational efficiency. From property management and housekeeping to security, home nursing, and transportation solutions, our offerings ensure seamless day-to-day operations for businesses and individuals alike.
            </p>
          </motion.div>

          {/* Services Grid */}
         <section className="py-8 px-4 sm:px-6 lg:px-8">

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={service.image || "/placeholder.svg?height=320&width=640"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-orange-400 font-semibold text-sm mb-3">
                          {service.subtitle}
                        </p>
                        <p className="text-white/80 text-xs md:text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                 
                </div>
                
              </div>
            </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}
