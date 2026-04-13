import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { UrduSection } from '@/components/urdu-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <UrduSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
