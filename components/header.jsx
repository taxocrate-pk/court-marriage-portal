'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Scale, Moon, Sun } from 'lucide-react' // Moon aur Sun icons add kiye
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes' // useTheme hook import kiya

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#urdu', label: 'اردو' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false) // Hydration error se bachne ke liye
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Agar component mount nahi hua toh icons show nahi karenge (Hydration fix)
  if (!mounted) return null

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-card-strong py-3'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <Scale className="w-5 h-5 text-gold" />
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-foreground">Court-Marriage</div>
              <div className="text-xs text-gold font-medium -mt-0.5">.Site</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors rounded-lg hover:bg-gold/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button (Desktop) */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground hover:bg-gold/10"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-midnight font-semibold rounded-lg"
              >
                <a href="tel:+923332317861">
                  <Phone className="w-4 h-4 mr-2" />
                  +92 333 2317861
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-gold/10"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground/90 hover:text-gold hover:bg-gold/5 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border/30 my-2" />
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-midnight font-semibold w-full"
              >
                <a href="tel:+923332317861">
                  <Phone className="w-4 h-4 mr-2" />
                  +92 333 2317861
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}