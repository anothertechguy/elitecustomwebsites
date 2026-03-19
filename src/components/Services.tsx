import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const services = [
  {
    title: 'Web\nDevelopment',
    description: 'Story-driven websites and premium digital products engineered for lasting impact. React, Next.js, WebGL — whatever the vision demands.',
    number: '01',
  },
  {
    title: 'Brand\nIdentity',
    description: 'Strategic visual identities designed to secure a premium market position. From naming to full design systems.',
    number: '02',
  },
  {
    title: '3D &\nMotion',
    description: 'Cinematic 3D environments, scroll-driven narratives, and micro-interactions that make your brand unforgettable.',
    number: '03',
  },
  {
    title: 'Digital\nStrategy',
    description: 'Data-informed growth architecture. SEO, analytics, and conversion optimization built into every pixel.',
    number: '04',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 px-6 md:px-12">
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-accent-cool" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-24"
          style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Everything,
          <br />
          <em className="text-gradient-cool">in one place.</em>
        </motion.h2>

        {/* Service cards as a list — inspired by RefractWeb */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: eliteEase }}
            >
              <div className="group cursor-pointer py-10 md:py-14 border-t border-foreground/[0.06] flex flex-col md:flex-row md:items-center gap-6 md:gap-16 hover:pl-4 transition-all duration-700">
                {/* Number */}
                <span className="font-mono text-xs text-muted-foreground shrink-0 w-8">{service.number}</span>

                {/* Title */}
                <h3
                  className="font-display text-foreground whitespace-pre-line shrink-0 w-full md:w-64 group-hover:text-accent-warm transition-colors duration-500"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1 }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed flex-1 max-w-md">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="shrink-0 w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                  <span className="text-foreground text-xs">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
