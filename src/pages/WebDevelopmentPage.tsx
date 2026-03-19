import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const capabilities = [
  'React & Next.js Applications',
  'E-Commerce Platforms',
  'Headless CMS Integration',
  'Progressive Web Apps',
  'API Architecture & Development',
  'Performance Optimization',
];

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS', 'Shopify'];

export default function WebDevelopmentPage() {
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
            Web
            <br />
            <em className="text-gradient-warm">Development.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-24"
          >
            We don't build websites. We engineer digital experiences that command attention,
            convert visitors into believers, and scale with your ambition. Every line of code
            is a conscious decision.
          </motion.p>

          {/* Capabilities grid */}
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

          {/* Tech stack */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase mb-8">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span key={tech} className="font-mono text-sm text-foreground/70 border border-foreground/[0.08] rounded-full px-5 py-2.5 hover:border-foreground/30 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-foreground/[0.06]"
          >
            <h2 className="font-display text-foreground text-3xl md:text-4xl mb-6">
              Ready to build something <em className="text-gradient-warm">remarkable?</em>
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
