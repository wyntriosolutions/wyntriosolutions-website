'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'

export function FloatingSocialButtons() {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/wyntrio',
      color: 'hover:bg-pink-500',
      delay: 0,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/wyntrio',
      color: 'hover:bg-blue-700',
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/1234567890',
      color: 'hover:bg-green-500',
      delay: 0.2,
    },
  ]

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: social.delay, duration: 0.5 }}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 bg-gradient-to-r from-primary to-accent text-white rounded-full flex items-center justify-center shadow-lg transition-all ${social.color}`}
            title={social.label}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        )
      })}
    </div>
  )
}
