'use client'

import { Award, Users, CheckCircle, Star } from 'lucide-react'

const stats = [
  { 
    number: '200+', 
    label: 'Winning award',
    description: 'Industry recognition',
    icon: Award 
  },
  { 
    number: '200K+', 
    label: 'Happy Clients',
    description: 'Satisfied customers',
    icon: Users 
  },
  { 
    number: '500+', 
    label: 'Complete project',
    description: 'Projects delivered',
    icon: CheckCircle 
  },
  { 
    number: '400+', 
    label: 'Client review',
    description: 'Positive feedback',
    icon: Star 
  },
]

export function CompanyOverview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About Wyntrio Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Wyntrio Solutions LLP is a trusted facility management company dedicated to
            delivering reliable, efficient, and comprehensive facility management solutions.
            We enhance workplace safety, cleanliness, and convenience through expert
            facility maintenance and services tailored for diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full   flex items-center justify-center mb-4 hover:scale-110 transition-transform bg-primary hover:bg-primary/90 text-primary-foreground">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-foreground/80 text-base font-medium mb-3">{stat.label}</h3>
                <p className="text-4xl sm:text-5xl font-bold text-foreground mb-1">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
