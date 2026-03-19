import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const services = [
  {
    title: 'Web Development',
    slug: '/services/web-development',
    number: '01',
    description: 'Story-driven websites and premium digital products engineered for lasting impact.',
    details: ['React & Next.js', 'E-Commerce', 'CMS Integration', 'Performance Optimization'],
  },
  {
    title: 'Brand Identity',
    slug: '/services/brand-identity',
    number: '02',
    description: 'Strategic visual identities designed to secure a premium market position.',
    details: ['Logo Architecture', 'Design Systems', 'Brand Guidelines', 'Packaging'],
  },
  {
    title: '3D & Motion',
    slug: '/services/3d-motion',
    number: '03',
    description: 'Cinematic 3D environments, scroll-driven narratives, and micro-interactions.',
    details: ['WebGL & Three.js', 'Scroll Animations', 'Product Visualization', 'Motion Design'],
  },
  {
    title: 'Digital Strategy',
    slug: '/services/digital-strategy',
    number: '04',
    description: 'Data-informed growth architecture built into every pixel.',
    details: ['SEO & SEM', 'Analytics', 'Conversion Optimization', 'Social Media'],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">What We Do</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.95 }}
          >
            Capabilities built for
            <br />
            <em className="text-gradient-warm">the extraordinary.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-base font-body font-light max-w-xl leading-relaxed mb-24"
          >
            We bring Silicon Valley engineering rigor and haute couture design thinking
            to every engagement. Each discipline feeds the others.
          </motion.p>

          {/* Service blocks */}
          <div className="flex flex-col">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: eliteEase }}
              >
                <Link to={service.slug} className="group block">
                  <div className="py-12 md:py-16 border-t border-foreground/[0.06] flex flex-col md:flex-row gap-8 md:gap-16 hover:pl-4 transition-all duration-700">
                    <span className="font-mono text-xs text-muted-foreground shrink-0 w-8 pt-1">{service.number}</span>

                    <div className="flex-1">
                      <h2
                        className="font-display text-foreground mb-4 group-hover:text-accent-warm transition-colors duration-500"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1 }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm font-body font-light leading-relaxed max-w-lg mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {service.details.map((d) => (
                          <span key={d} className="font-mono text-[9px] text-muted-foreground tracking-[0.15em] uppercase border border-foreground/[0.06] rounded-full px-3 py-1">
                            {d}
                          </span>
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
