'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is the difference between Nikah and Marriage Registration?',
    answer: 'Nikah registration records the religious ceremony performed according to Islamic law, while marriage registration provides formal legal and governmental documentation like the NADRA computerized certificate. Both are important - the Nikah establishes the religious validity of your union, while the registration provides legal recognition and official documentation required for property rights, inheritance, and travel purposes.',
  },
  {
    question: 'Can we perform Online Nikah without physical presence?',
    answer: 'Yes, Online Nikah is valid under Shari\'a law as long as Ijab-o-Qabool (offer and acceptance), witnesses, and Mahr (dower) are properly arranged via digital communication. This service is particularly beneficial for overseas Pakistanis who cannot be physically present. Our qualified Nikah Khawan ensures all Islamic requirements are fulfilled through secure video conferencing.',
  },
  {
    question: 'Is court marriage confidential in Pakistan?',
    answer: 'Yes, we prioritize the privacy and confidentiality of our clients, ensuring all legal steps are handled discreetly. Our procedures are designed to protect your personal information, and we conduct proceedings in a manner that maintains your dignity and privacy. All documentation is kept strictly confidential.',
  },
  {
    question: 'What are the requirements for a duplicate Nikah Nama?',
    answer: 'Obtaining a duplicate Nikah Nama typically requires an application to the relevant Union Council along with identification documents and proof of the original marriage. Required documents include CNIC copies of both spouses, any available wedding photographs, and an affidavit. Our team assists you through every step of this process to ensure quick processing.',
  },
  {
    question: 'What are the court marriage fees in Pakistan?',
    answer: 'Court marriage fees vary depending on the city and the specific services required. The basic fee includes stamp duty, registration charges, and legal documentation. We provide transparent pricing with no hidden charges. Please call us for detailed fee information specific to your requirements and location.',
  },
  {
    question: 'How long does the court marriage process take?',
    answer: 'The court marriage process typically takes 1-3 days depending on the documentation readiness and the city. We expedite the process by ensuring all paperwork is prepared in advance. For urgent cases, we offer same-day services in certain circumstances. Contact us to discuss your timeline.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Get answers to common questions about our legal marriage services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card-strong rounded-2xl p-6 sm:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border/30 last:border-0"
              >
                <AccordionTrigger 
                  className="text-left text-foreground hover:text-gold py-6 text-base sm:text-lg font-medium [&[data-state=open]]:text-gold"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Prompt */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-4">
            Have more questions? We&apos;re here to help.
          </p>
          <a 
            href="#contact" 
            className="text-gold hover:text-gold-light font-medium underline underline-offset-4 transition-colors"
          >
            Contact us directly
          </a>
        </div>
      </div>
    </section>
  )
}
