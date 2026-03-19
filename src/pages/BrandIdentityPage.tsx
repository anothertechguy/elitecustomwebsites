import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const deliverables = [
  'Logo Architecture & Wordmarks',
  'Comprehensive Brand Guidelines',
  'Color & Typography Systems',
  'Iconography & Illustration',
  'Packaging & Print Design',
  'Social Media Templates',
];

export default function BrandIdentityPage() {
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
            Brand
            <br />
            <em className="text-gradient-cool">Identity.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-24"
          >
            Your brand is more than a logo — it's the emotional architecture of trust.
            We engineer visual identities that speak authority before a single word is read,
            positioning you at the apex of your market.
          </motion.p>

          {/* Deliverables */}
          <div className="grid md:grid-cols-2 gap-4 mb-24">
            {deliverables.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, ease: eliteEase }}
                className="animated-border-wrapper"
              >
                <div className="animated-border-inner px-8 py-6 flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="font-body text-foreground font-light">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 mb-24"
          >
            <div>
              <h3 className="font-display text-foreground text-2xl mb-6">Our philosophy</h3>
              <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">
                Every element of your brand should work in concert — from the weight of a line 
                to the silence between words. We obsess over the details that most agencies gloss
                over, because those details are what separate luxury from mediocrity.
              </p>
            </div>
            <div>
              <h3 className="font-display text-foreground text-2xl mb-6">The result</h3>
              <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">
                A comprehensive brand system so refined that it feels inevitable —
                as if your company has always looked this way. Timeless, not trendy. 
                Authoritative, not aggressive. Unmistakably yours.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-foreground/[0.06]"
          >
            <h2 className="font-display text-foreground text-3xl md:text-4xl mb-6">
              Ready to define your <em className="text-gradient-cool">identity?</em>
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
