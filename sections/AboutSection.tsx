'use client'


import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Award, Users, Target, Zap } from 'lucide-react'



const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To deliver innovative, customer-focused solutions that drive business growth and digital transformation.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality services and solutions to our clients.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients to understand and exceed their expectations.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We embrace new technologies and methodologies to stay ahead in the industry.',
  },
]

export default function AboutSection() {
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
              About <span className="text-primary">Wyntrio Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              We are a team of experienced professionals dedicated to transforming businesses through innovative solutions and exceptional service delivery.
            </p>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-lg p-8 md:p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Founded over a decade ago, Wyntrio Solutions LLP has grown to become a trusted partner for businesses seeking digital transformation and innovative solutions. What started as a small consulting firm has evolved into a comprehensive services provider serving over 100 clients worldwide.
            </p>
            <p className="text-muted-foreground text-lg">
              Our success is built on a foundation of technical expertise, industry knowledge, and an unwavering commitment to client success. We've completed over 500 projects, each one contributing to our experience and expertise in delivering excellence.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Our team of 50+ experienced professionals brings diverse expertise across consulting, technology, and implementation. We're dedicated to staying at the forefront of industry trends and delivering cutting-edge solutions to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
