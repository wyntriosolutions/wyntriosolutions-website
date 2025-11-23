'use client'

import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { HeroSection } from '@/components/hero-section'
import { CompanyOverview } from '@/components/company-overview'
import { SectorsSection } from '@/components/sectors-section'
import { ServicesSection } from '@/components/services-section'
import { FAQsSection } from '@/components/faqs-section'
import { Footer } from '@/components/footer'
import { FloatingSocialButtons } from '@/components/floating-social-buttons'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <FloatingSocialButtons />
      <HeroSection />
      <CompanyOverview />
      <SectorsSection />
      <ServicesSection />
      <FAQsSection />
      <Footer />
    </main>
  )
}
