"use client" // Agar ye nahi hai to sabse upar likh dein
import { 
  Scale, 
  Globe, 
  FileCheck, 
  Users, 
  FileText, 
  Heart,
  Building,
  Baby,
  Gavel,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const mainServices = [
  {
    icon: Scale,
    title: 'Court Marriage Process',
    description: 'Court marriage is a civil process recognized under Pakistani law that provides legal protection. Our services ensure lawful completion of all formalities, including affidavits, Nikah registration, and NADRA marriage certificates.',
    features: [
      'Full legal recognition and official documentation',
      'Suitable for couples seeking enforceable legal rights',
      '100% confidential and discreet procedure',
    ],
  },
  {
    icon: Globe,
    title: 'Online Nikah e Shari\'a',
    description: 'Ideal for overseas Pakistanis, our Online Nikah services allow couples to solemnize their marriage remotely while fully complying with Islamic principles (Ijab-o-Qabool, Witnesses, and Mahr).',
    features: [
      'Shari\'a-compliant Nikah conducted by qualified Nikah Khawan',
      'Internationally recognized documentation',
      'Efficient and lawful religious union for distant couples',
    ],
  },
]

const additionalServices = [
  { icon: Building, title: 'Court Marriage in Lahore', href: '#' },
  { icon: FileText, title: 'Court Marriage in Urdu', href: '#' },
  { icon: Heart, title: 'Marriage in Islam', href: '#' },
  { icon: Globe, title: 'Online Shadi in Pakistan', href: '#' },
  { icon: Users, title: 'Nikah Khawan in Karachi', href: '#' },
  { icon: Users, title: 'Nikah Khawan in Islamabad', href: '#' },
  { icon: FileCheck, title: 'NADRA Marriage Certificate', href: '#' },
  { icon: Gavel, title: 'Divorce Certificate', href: '#' },
  { icon: FileText, title: 'Duplicate Nikah Nama', href: '#' },
  { icon: Baby, title: 'Child Custody Law', href: '#' },
  { icon: Scale, title: 'Family Law Experts', href: '#' },
  { icon: Gavel, title: 'Khula Procedure', href: '#' },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Family Law & Marriage Experts
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto text-pretty leading-relaxed">
            Court-Marriage.Site has been established to provide reliable, lawful, and discreet solutions 
            for individuals seeking Court Marriage, Online Marriage, and Online Nikah e Shari&apos;a. Our approach 
            combines religious understanding with statutory compliance.
          </p>
        </div>

        {/* Main Services Cards with Glassmorphism */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index}
              className="glass-card-strong border-gold/20 hover:border-gold/40 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                  <service.icon className="w-7 h-7 text-gold" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl lg:text-2xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-foreground/70 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3" role="list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
            Complete Marriage & Law Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="glass-card group flex items-center gap-3 p-4 rounded-xl hover:border-gold/40 transition-all duration-300"
                aria-label={`Learn more about ${service.title}`}
              >
                <service.icon className="w-5 h-5 text-gold shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground/90 group-hover:text-gold transition-colors">
                  {service.title}
                </span>
                <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-gold ml-auto opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* About Text */}
        <div id="about" className="mt-20 glass-card-strong rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Why Choose Our Legal Services?
            </h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Whether you require documentation support like a Duplicate Nikah Nama, or are facing 
              family disputes such as Divorce, Khula, or Child Custody, our platform connects you 
              with experienced family law professionals who understand both Islamic principles and 
              Pakistani law. With over 40 years of High Court advocacy experience, we ensure your 
              matters are handled with the utmost care, confidentiality, and legal precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
