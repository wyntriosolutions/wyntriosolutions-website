'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setSubmitSuccess(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', purpose: '' })
      setSubmitSuccess(false)
      onClose()
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background dark:bg-slate-950 rounded-lg shadow-2xl max-w-4xl w-full overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side - Image and Description */}
                <div className="hidden md:flex flex-col justify-center items-center p-8 bg-gradient-to-br from-primary via-accent to-teal-600">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src="/contact-us-business-meeting.jpg"
                    alt="Contact us"
                    className="w-48 h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Let's Connect
                  </h3>
                  <p className="text-gray-100 text-center">
                    Get in touch with our team to discuss how Wyntrio Solutions can help transform your business.
                  </p>
                </div>

                {/* Right side - Form */}
                <div className="p-8 relative">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-foreground/60 hover:text-foreground dark:text-foreground/60 dark:hover:text-foreground transition"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {!submitSuccess ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground dark:bg-slate-800 dark:border-slate-700"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground dark:bg-slate-800 dark:border-slate-700"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground dark:bg-slate-800 dark:border-slate-700"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Purpose
                        </label>
                        <textarea
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or inquiry"
                          rows={4}
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground placeholder:text-muted-foreground dark:bg-slate-800 dark:border-slate-700"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-accent to-teal-600 hover:shadow-lg text-white font-semibold"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4"
                      >
                        <span className="text-2xl text-white">✓</span>
                      </motion.div>
                      <p className="text-center text-foreground font-medium">
                        Thank you! We'll be in touch soon.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
