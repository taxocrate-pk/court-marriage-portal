'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldLabel, FieldGroup } from '@/components/ui/field'

const offices = [
  {
    city: 'Karachi Head Office',
    address: 'A-1937/B, Metroville III Colony, Scheme 33, Karachi.',
    phone: '+92 333 2317861',
  },
  {
    city: 'Islamabad Office',
    address: 'Office No. 5, 2nd Floor, Laraib Plaza, G-9 Markaz, Islamabad.',
    phone: '+92 333 2316871',
  },
  {
    city: 'Lahore Office',
    address: 'Office No.2, 1st Floor, Al-Mairaj Arcade, Chauburji Chowk, Lahore.',
    phone: '+92 333 1127836',
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Get in touch with our legal team for a confidential consultation about your marriage or family law needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card-strong rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent Successfully!</h4>
                <p className="text-foreground/70">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FieldGroup>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="name" className="text-foreground/90">Full Name</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="bg-midnight-light/50 border-border/50 text-foreground placeholder:text-foreground/40 focus:border-gold focus:ring-gold/20"
                        aria-required="true"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone" className="text-foreground/90">Phone Number</FieldLabel>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+92 3XX XXXXXXX"
                        className="bg-midnight-light/50 border-border/50 text-foreground placeholder:text-foreground/40 focus:border-gold focus:ring-gold/20"
                        aria-required="true"
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="email" className="text-foreground/90">Email Address</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="bg-midnight-light/50 border-border/50 text-foreground placeholder:text-foreground/40 focus:border-gold focus:ring-gold/20"
                      aria-required="true"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="service" className="text-foreground/90">Service Required</FieldLabel>
                    <select
                      id="service"
                      name="service"
                      required
                      className="flex h-10 w-full rounded-md border border-border/50 bg-midnight-light/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/20 focus-visible:border-gold"
                      aria-required="true"
                    >
                      <option value="">Select a service</option>
                      <option value="court-marriage">Court Marriage</option>
                      <option value="online-nikah">Online Nikah</option>
                      <option value="nikah-registration">Nikah Registration</option>
                      <option value="divorce">Divorce / Khula</option>
                      <option value="child-custody">Child Custody</option>
                      <option value="other">Other Legal Service</option>
                    </select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="message" className="text-foreground/90">Your Message</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Please describe your requirements..."
                      className="bg-midnight-light/50 border-border/50 text-foreground placeholder:text-foreground/40 focus:border-gold focus:ring-gold/20 resize-none"
                      aria-required="true"
                    />
                  </Field>
                </FieldGroup>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-midnight font-semibold py-6 rounded-xl transition-all duration-300"
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Our Offices</h3>
            
            {offices.map((office, index) => (
              <Card 
                key={index}
                className="glass-card border-gold/20 hover:border-gold/40 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gold flex items-center gap-2">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                    {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-foreground/80 text-sm">{office.address}</p>
                  <a 
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-gold transition-colors"
                    aria-label={`Call ${office.city} at ${office.phone}`}
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span className="font-medium">{office.phone}</span>
                  </a>
                </CardContent>
              </Card>
            ))}

            {/* Email Contact */}
            <Card className="glass-card border-gold/20">
              <CardContent className="py-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email Us</p>
                    <a 
                      href="mailto:info@courtmarriage.site"
                      className="text-foreground hover:text-gold font-medium transition-colors"
                      aria-label="Send email to info@courtmarriage.site"
                    >
                      info@courtmarriage.site
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
