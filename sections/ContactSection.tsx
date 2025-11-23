'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, MapPin } from 'lucide-react'



const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: 'wyntriosolutions@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 9633061573',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '123 Business Street, Suite 100, Business City, BC 12345',
  },
]

export default function ContactSection() {
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Have questions or ready to start your project? We'd love to hear from you. Reach out to our team today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-8 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.details}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-card rounded-lg p-8 h-fit"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">50+ experienced professionals ready to help</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Proven Track Record</h4>
                    <p className="text-muted-foreground text-sm">500+ successful projects delivered</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-muted-foreground text-sm">Always available when you need us</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Custom Solutions</h4>
                    <p className="text-muted-foreground text-sm">Tailored to your specific needs</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
