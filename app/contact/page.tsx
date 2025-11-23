

import ContactSection from '@/sections/ContactSection'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Contact Wyntrio Solutions - Get in Touch',
  description: 'Contact Wyntrio Solutions LLP for inquiries, quotes, or to discuss your project. Reach out to our team via email, phone, or contact form.',
  keywords: ['contact us', 'get in touch', 'inquiries', 'business inquiry', 'consultation'],
  openGraph: {
    title: 'Contact Wyntrio Solutions - Get in Touch',
    description: 'Have questions? Contact us today. We are ready to help with your project needs.',
    url: 'https://wyntrio.com/contact',
  },
  alternates: {
    canonical: 'https://wyntrio.com/contact',
  },
}



export default function Contact() {
  return <ContactSection/>
}
