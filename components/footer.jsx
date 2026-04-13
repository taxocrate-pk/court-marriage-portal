import Link from 'next/link'
import { Scale, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '#services', label: 'Court Marriage' },
  { href: '#services', label: 'Online Nikah' },
  { href: '#services', label: 'Nikah Registration' },
  { href: '#services', label: 'Family Law' },
]

const legalLinks = [
  { href: '#faq', label: 'FAQ' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#contact', label: 'Contact Us' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/30">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="flex items-center gap-3 mb-6"
              aria-label="Court Marriage Pakistan - Home"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">Court-Marriage</div>
                <div className="text-xs text-gold font-medium -mt-0.5">.Site</div>
              </div>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Pakistan&apos;s trusted family law firm with 40+ years of experience. 
              Expert legal services for Court Marriage, Online Nikah, and all family law matters.
            </p>
            <div className="flex items-center gap-2 text-sm text-gold">
              <Scale className="w-4 h-4" aria-hidden="true" />
              <span>Senior High Court Advocate</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-foreground/70 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4" role="list">
              <li>
                <a 
                  href="tel:+923332317861"
                  className="flex items-start gap-3 text-foreground/70 hover:text-gold text-sm transition-colors"
                  aria-label="Call us at +92 333 2317861"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>+92 333 2317861</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@courtmarriage.site"
                  className="flex items-start gap-3 text-foreground/70 hover:text-gold text-sm transition-colors"
                  aria-label="Email us at info@courtmarriage.site"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>info@courtmarriage.site</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Offices in Karachi, Islamabad & Lahore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm text-center sm:text-left">
              &copy; {currentYear} Court-Marriage.Site. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm text-center sm:text-right">
              Trusted by 15,000+ clients across Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
