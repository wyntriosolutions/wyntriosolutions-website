'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const isHome = pathname === "/"  // 👈 check if on home page

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed w-full top-0 z-40 transition-all duration-300 overflow-x-hidden
        ${scrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="flex justify-between items-center h-16 w-full min-w-0">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              
              <Image  alt="logo" height={200} width={200} src="/logo/logo.png" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              // nav text color logic
              const navColor = scrolled
                ? "text-foreground hover:text-primary"
                : isHome
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-primary"

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative transition-colors ${navColor}`}
                >
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 flex-shrink-0">

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-colors
                ${scrolled
                  ? "text-foreground"
                  : isHome
                    ? "text-white"
                    : "text-foreground"
                }
              `}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Contact Button */}
            <Link href="/contact" className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get in Touch
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors flex-shrink-0
                ${scrolled
                  ? "text-foreground"
                  : isHome
                    ? "text-white"
                    : "text-foreground"
                }
              `}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden w-full"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 w-full min-w-0">

            {navItems.map((item) => {
              const isActive = pathname === item.href

              const mobileColor = scrolled
                ? "text-foreground hover:bg-muted"
                : isHome
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-muted"

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md truncate ${
                    isActive
                      ? 'bg-primary text-primary-foreground font-semibold'
                      : mobileColor
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Get in Touch
              </Button>
            </Link>

          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
