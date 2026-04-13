import { Scale, Globe, FileCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const urduServices = [
  {
    icon: Scale,
    title: 'عدالتی نکاح',
    titleEn: 'Court Marriage',
    description: 'پاکستانی قانون کے تحت کورٹ میرج کا باقاعدہ طریقہ کار، جس میں مکمل قانونی تحفظ اور دستاویزات فراہم کی جاتی ہیں۔',
  },
  {
    icon: Globe,
    title: 'آن لائن نکاح',
    titleEn: 'Online Nikah',
    description: 'بیرونِ ملک مقیم پاکستانیوں کے لیے شرعی اصولوں کے مطابق ایجاب و قبول اور نکاح رجسٹریشن کی سہولت۔',
  },
  {
    icon: FileCheck,
    title: 'نکاح رجسٹریشن',
    titleEn: 'Nikah Registration',
    description: 'نکاح نامہ، کمپیوٹرائزڈ میریج سرٹیفکیٹ، اور ڈپلیکیٹ نکاح نامہ کے حصول میں مکمل قانونی معاونت۔',
  },
]

export function UrduSection() {
  return (
    <section id="urdu" className="py-20 lg:py-32 relative" dir="rtl" lang="ur">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-noto-nastaliq), serif', lineHeight: '1.8' }}
          >
            کورٹ میرج اور فیملی لا سروسز
          </h2>
          <p 
            className="text-lg text-gold font-medium"
            dir="ltr"
            lang="en"
          >
            Court Marriage & Family Law Services
          </p>
        </div>

        {/* Urdu Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {urduServices.map((service, index) => (
            <Card 
              key={index}
              className="glass-card-strong border-gold/20 hover:border-gold/40 transition-all duration-300 group text-right"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors mr-auto ml-0">
                  <service.icon className="w-7 h-7 text-gold" aria-hidden="true" />
                </div>
                <CardTitle 
                  className="text-xl lg:text-2xl text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-noto-nastaliq), serif', lineHeight: '1.8' }}
                >
                  {service.title}
                </CardTitle>
                <p className="text-sm text-gold font-medium" dir="ltr" lang="en">
                  ({service.titleEn})
                </p>
              </CardHeader>
              <CardContent>
                <CardDescription 
                  className="text-foreground/80 text-base"
                  style={{ fontFamily: 'var(--font-noto-nastaliq), serif', lineHeight: '2.2' }}
                >
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Islamic Calligraphy Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
            <span 
              className="text-2xl text-gold/70"
              style={{ fontFamily: 'var(--font-noto-nastaliq), serif' }}
              aria-label="Bismillah - In the name of Allah"
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Trust Statement in Urdu */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <p 
            className="text-lg text-foreground/90 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-noto-nastaliq), serif', lineHeight: '2.4' }}
          >
            ہماری خدمات میں اسلامی اصولوں کے ساتھ ساتھ پاکستانی قانون کی مکمل پابندی شامل ہے۔ 
            چالیس سال سے زائد کے تجربے کے ساتھ، ہم آپ کے تمام قانونی معاملات کو مکمل رازداری 
            اور پیشہ وارانہ طریقے سے سنبھالتے ہیں۔
          </p>
          <p className="mt-4 text-sm text-gold" dir="ltr" lang="en">
            Our services combine Islamic principles with full compliance of Pakistani law. 
            With 40+ years of experience, we handle all your legal matters with complete 
            confidentiality and professionalism.
          </p>
        </div>
      </div>
    </section>
  )
}
