import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const services = [
  { title: 'Web Development', slug: '/services/web-development', number: '01', description: 'Custom websites and web apps. React, Next.js, e-commerce. Built in just 7 days.', details: ['React & Next.js', 'E-Commerce', 'CMS Integration', 'Speed Optimization'] },
  { title: 'Brand Identity', slug: '/services/brand-identity', number: '02', description: 'Logos, design systems, and guidelines that position you as the premium choice.', details: ['Logo Design', 'Design Systems', 'Brand Guidelines', 'Packaging'] },
  { title: '3D & Motion', slug: '/services/3d-motion', number: '03', description: 'Scroll animations, WebGL, and micro-interactions that captivate.', details: ['WebGL & Three.js', 'Scroll Animation', 'Motion Design', 'Product 3D'] },
  { title: 'Digital Strategy', slug: '/services/digital-strategy', number: '04', description: 'SEO, paid ads, and analytics that drive measurable growth.', details: ['SEO', 'Paid Media', 'Analytics', 'CRO'] },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">What We Do</span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-accent-warm/30 text-accent-warm">7-Day Delivery</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.95 }}
          >
            World-class quality. 
            <br />
            <em className="text-gradient-warm">Accessible pricing.</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-muted-foreground text-base font-body font-light max-w-xl leading-relaxed mb-20">
            A collective of industry veterans crafting luxury digital experiences in just 7 days, leaving the bloated agency fees behind.
          </motion.p>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <motion.div key={service.number} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: eliteEase }}>
                <Link to={service.slug} className="group block">
                  <div className="py-12 md:py-14 border-t border-foreground/[0.06] flex flex-col md:flex-row gap-6 md:gap-14 hover:pl-4 transition-all duration-700">
                    <span className="font-mono text-xs text-muted-foreground shrink-0 w-8 pt-1">{service.number}</span>
                    <div className="flex-1">
                      <h2 className="font-display text-foreground mb-3 group-hover:text-accent-warm transition-colors duration-500" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1 }}>
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm font-body font-light leading-relaxed mb-4 max-w-lg">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.details.map((d) => (
                          <span key={d} className="font-mono text-[9px] text-muted-foreground tracking-[0.15em] uppercase border border-foreground/[0.06] rounded-full px-3 py-1">{d}</span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 self-center">
                      <span className="text-foreground text-sm">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
