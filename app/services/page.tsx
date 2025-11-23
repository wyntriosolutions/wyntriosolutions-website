

import ServiceSection from '@/sections/ServiceSection'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Our Services - Consulting, Technology & Digital Solutions',
  description: 'Explore Wyntrio Solutions comprehensive services including consulting, technology implementation, training, and support.',
  keywords: ['consulting services', 'technology solutions', 'implementation', 'support', 'training', 'analytics'],
  openGraph: {
    title: 'Our Services - Consulting, Technology & Digital Solutions',
    description: 'End-to-end solutions for consulting, technology implementation, training, and ongoing support.',
    url: 'https://wyntrio.com/services',
  },
  alternates: {
    canonical: 'https://wyntrio.com/services',
  },
}



export default function Services() {
  return <ServiceSection/>
}
