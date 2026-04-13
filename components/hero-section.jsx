import { Phone, FileText, Scale, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Pure CSS Gradient Background - Zero Image Delay */}
      <div className="absolute inset-0 z-0">
        {/* Main Gradient: Midnight Blue to Dark Slate */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1f] via-[#111827] to-[#1e293b]" />
        {/* Subtle radial glow for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_50%)]" />
        {/* Decorative Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        {/* Bottom fade for seamless section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content - Perfectly Centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Trust Badge */}
          <div className="glass-card rounded-full px-6 py-2.5 mb-10 flex items-center justify-center gap-2.5">
            <Shield className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-wide text-white">#1 Registered Family Law Firm in Pakistan</span>
          </div>

          {/* Main Heading - Crisp High-Contrast Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-balance max-w-5xl leading-[1.1]">
            <span className="text-white drop-shadow-sm">Court Marriage &</span>
            <br />
            <span className="bg-gradient-to-r from-[#f5d77e] via-[#d4af37] to-[#c4972a] bg-clip-text text-transparent">Online Nikah Services</span>
          </h1>

          {/* Subheading - WCAG AAA Compliant Pure White Text */}
          <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-white/95 max-w-3xl text-pretty leading-relaxed font-medium">
            Discreet, lawful, and reliable solutions for Court Marriage in{' '}
            <span className="text-[#f5d77e] font-semibold">Islamabad</span>,{' '}
            <span className="text-[#f5d77e] font-semibold">Karachi</span>, and{' '}
            <span className="text-[#f5d77e] font-semibold">Lahore</span>. Expert guidance on Court Marriage Fees and 
            Shari&apos;a-compliant Online Nikah.
          </p>

          {/* Legacy Badge */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <Scale className="w-5 h-5 text-[#d4af37]" aria-hidden="true" />
            <span className="text-base sm:text-lg font-semibold text-white/90 tracking-wide">40+ Years of Senior High Court Advocacy</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#d4af37] to-[#c4972a] hover:from-[#e5c560] hover:to-[#d4af37] text-[#0a0f1f] font-bold px-10 py-7 text-lg rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
              aria-label="Call now to get fee details for court marriage services"
            >
              <a href="tel:+923332317861">
                <Phone className="w-5 h-5 mr-2.5" aria-hidden="true" />
                Call for Fee Details
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[#d4af37]/60 text-white hover:bg-[#d4af37]/15 hover:border-[#d4af37] font-bold px-10 py-7 text-lg rounded-xl transition-all duration-300 backdrop-blur-sm"
              aria-label="Learn about the court marriage registration process"
            >
              <a href="#services">
                <FileText className="w-5 h-5 mr-2.5" aria-hidden="true" />
                Registration Process
              </a>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 w-full max-w-4xl">
            <div className="rounded-2xl p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                <StatItem number="40+" label="Years Experience" />
                <StatItem number="15,000+" label="Cases Handled" />
                <StatItem number="3" label="Major Cities" />
                <StatItem number="100%" label="Confidential" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f5d77e] tracking-tight">{number}</div>
      <div className="mt-2 text-sm sm:text-base text-white/80 font-medium">{label}</div>
    </div>
  )
}
