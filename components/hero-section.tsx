'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ContactFormModal } from '@/components/contact-form-modal'

const backgroundImages = [
  '/modern-office-workspace.jpg',
  '/technology-innovation-solutions.jpg',
  '/home-nursing.jpg'
]

const typedTexts = [
  'Innovative Solutions',
  'Digital Transformation',
  'Business Growth',
  'Expert Consulting',
]

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Typed animation effect
  useEffect(() => {
    const currentText = typedTexts[textIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typedTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex])

  // Background image slider
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(imageTimer)
  }, [])

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
          >
            {/* Left side - Text content */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-teal-400 font-semibold mb-4 min-h-fit h-auto break-words whitespace-normal inline-block max-w-full">
                  {displayedText}
                  <span className="animate-pulse ml-1">|</span>
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block text-balance">for Your Business</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 text-balance">
                Wyntrio Solutions LLP delivers cutting-edge services designed to transform your business and drive sustainable growth in today's competitive market.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-teal-600 hover:shadow-xl text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:scale-105 w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/20 font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* Right side - Illustration/Image placeholder */}
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-teal-400 w-8'
                  : 'bg-white/50 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
