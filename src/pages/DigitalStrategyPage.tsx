import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const capabilities = [
  'SEO & Search Engine Marketing',
  'Analytics & Data Architecture',
  'Conversion Rate Optimization',
  'Social Media Strategy',
  'Paid Media & Advertising',
  'Content Strategy',
];

export default function DigitalStrategyPage() {
  return (
    <PageLayout>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.95 }}
          >
            Digital
            <br />
            <em style={{ color: 'hsl(var(--accent-glow))' }}>Strategy.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-24"
          >
            Beautiful design without strategy is art. Beautiful design with strategy is
            a growth engine. We build both — ensuring every pixel is optimized for discoverability,
            engagement, and conversion.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4 mb-24">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, ease: eliteEase }}
                className="animated-border-wrapper"
              >
                <div className="animated-border-inner px-8 py-6 flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="font-body text-foreground font-light">{cap}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-24 pt-16 border-t border-foreground/[0.06]">
            {[
              { value: '340%', label: 'Average traffic increase' },
              { value: '12x', label: 'ROI on paid media' },
              { value: '97%', label: 'Client retention rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
              >
                <span className="font-display text-3xl md:text-4xl text-foreground block mb-2">{stat.value}</span>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-foreground/[0.06]"
          >
            <h2 className="font-display text-foreground text-3xl md:text-4xl mb-6">
              Ready to accelerate <em style={{ color: 'hsl(var(--accent-glow))' }}>growth?</em>
            </h2>
            <Link
              to="/contact"
              className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-8 py-3.5 hover:scale-105 transition-transform duration-500"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
