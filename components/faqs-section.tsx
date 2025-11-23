'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Wyntrio Solutions LLP provide?',
    answer: 'We provide full facility management, housekeeping, security, home nursing, and transportation services tailored to your needs.',
  },
  {
    question: 'Can you provide customized facility management plans?',
    answer: 'Absolutely, we tailor our solutions to meet the unique needs of each client and sector for maximum effectiveness.',
  },
  {
    question: 'What geographic areas do you serve?',
    answer: 'Yes, all our solutions are tailored to your specific business needs. We work closely with you to understand your requiremWe serve clients across multiple sectors including corporate, education, healthcare, and hospitality within the region.ents and deliver customized solutions.',
  },
  {
    question: 'What makes Wyntrio Solutions LLP different from other facility management companies?',
    answer: 'Our commitment to personalized service, professional staff, and comprehensive, client-focused solutions sets us apart from the competition.',
  },
  {
    question: 'How can I request a quote or consultation?',
    answer: 'You can contact us anytime via phone at +91 9633061573 or email at wyntriosolutions@gmail.com . We are ready to assist you.',
  },
 
]

export function FAQsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left side - Illustration */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <svg className="w-48 h-48 md:w-64 md:h-64" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="90" fill="currentColor" opacity="0.1" className="text-primary" />
                <text x="100" y="120" fontSize="80" fontWeight="bold" textAnchor="middle" fill="currentColor" opacity="0.3" className="text-primary">
                  ?
                </text>
                <circle cx="100" cy="140" r="6" fill="currentColor" className="text-accent" />
              </svg>
            </motion.div>
          </div>

          {/* Right side - Text with color highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-2 leading-tight">
              Your Questions,{' '}
              <span className="text-accent">Answered</span>
            </h2>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-primary">Quick</span> Support
            </h3>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 w-24 bg-gradient-to-r from-accent to-primary rounded-full mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to know about Wyntrio Solutions, our services, and how we can help transform your business. If you have additional questions, our team is always ready to assist.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border-0 bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-2"
                >
                  <AccordionTrigger className="hover:bg-muted transition-colors px-6 py-4 group text-left [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-primary/10 [&[data-state=open]]:to-accent/10">
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                      {faq.question}
                    </span>
                    {/* <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform duration-300" /> */}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground leading-relaxed bg-muted/30">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4 text-lg">Still have unanswered questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group hover:scale-105"
          >
            Get in touch with our team
            <motion.span className="group-hover:translate-x-1 transition-transform" whileHover={{ x: 4 }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
