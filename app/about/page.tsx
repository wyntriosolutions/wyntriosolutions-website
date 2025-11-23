
import AboutSection from '@/sections/AboutSection'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'About Wyntrio Solutions - Our Story, Values & Team',
  description: 'Learn about Wyntrio Solutions LLP. Discover our company story, core values, mission, and our team of 50+ experienced professionals.',
  keywords: ['about us', 'company story', 'team', 'values', 'mission', 'Wyntrio'],
  openGraph: {
    title: 'About Wyntrio Solutions - Our Story, Values & Team',
    description: 'Learn about our company, values, and experienced team dedicated to delivering excellence.',
    url: 'https://wyntrio.com/about',
  },
  alternates: {
    canonical: 'https://wyntrio.com/about',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}



export default function About() {
  return <AboutSection/>
}
