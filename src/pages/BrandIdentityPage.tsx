import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const deliverables = [
  { title: 'Logo & Wordmarks', desc: 'Versatile mark systems for digital, print, and embroidery.' },
  { title: 'Brand Guidelines', desc: 'A comprehensive document ensuring every touchpoint stays on-brand.' },
  { title: 'Color & Typography', desc: 'Curated palettes and type hierarchies that command authority.' },
  { title: 'Iconography', desc: 'Custom icon sets unique to your brand. No stock. No generic.' },
  { title: 'Design Systems', desc: 'Figma libraries and design tokens for consistency at scale.' },
  { title: 'Photo Direction', desc: 'Art direction guides for photography that maintains your narrative.' },
];

const process = [
  { phase: 'Research', duration: 'Day 1', desc: 'Competitive analysis, audience personas, stakeholder interviews.' },
  { phase: 'Strategy', duration: 'Day 2', desc: 'Mission, vision, values, and positioning — your brand compass.' },
  { phase: 'Exploration', duration: 'Day 3-4', desc: 'Three creative directions with mood boards and type explorations.' },
  { phase: 'Refinement', duration: 'Day 4-6', desc: 'Chosen direction refined until every detail is right.' },
  { phase: 'System Build', duration: 'Day 6-7', desc: 'Complete brand package assembled and delivered.' },
];

const faqs = [
  { q: 'Logo vs brand identity — what\'s the difference?', a: 'A logo is a symbol. A brand identity is the complete visual system — colors, typography, patterns, voice, and rules for how they all work together.' },
  { q: 'How long does it take?', a: 'Full brand identity in 7 days. Logo-only projects in 3-4 days.' },
  { q: 'How many concepts do we see?', a: 'Three distinct directions, each with 2-3 variations. Then we refine through 2-3 rounds.' },
  { q: 'What files do we get?', a: 'SVG, PNG, EPS, PDF, AI files. Plus Figma libraries, font licenses, color codes in every format, and brand guidelines PDF.' },
];

export default function BrandIdentityPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      <section ref={heroRef} className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 1px, transparent 60px)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-accent-cool/30 text-accent-cool">7-Day Delivery</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: eliteEase }} className="font-display text-foreground mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}>
            Brand<br /><em className="text-gradient-cool">Identity.</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-10">
            Visual identities that speak authority before a word is read. Delivered in 7 days. Half the agency cost.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="grid grid-cols-3 gap-8 max-w-md">
            {[{ title: 'Timeless', desc: 'Built for decades, not trends.' }, { title: 'Systematic', desc: 'Every element works together.' }, { title: 'Distinctive', desc: 'Uniquely, unmistakably yours.' }].map((v) => (
              <div key={v.title} className="border-t border-foreground/[0.06] pt-4">
                <h3 className="font-display text-foreground text-sm mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-xs font-body font-light">{v.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="relative h-px mx-6 md:mx-12"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-cool/30 to-transparent origin-left" /></div>

      {/* Deliverables */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">What you <em className="text-gradient-cool">get.</em></motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {deliverables.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.06, ease: eliteEase }} whileHover={{ scale: 1.02 }} className="animated-border-wrapper">
                <div className="animated-border-inner p-7 md:p-8">
                  <div className="flex items-start gap-3 mb-2"><span className="font-mono text-xs text-accent-cool mt-0.5">0{i + 1}</span><h3 className="font-display text-foreground text-base">{item.title}</h3></div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed pl-8">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-16" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">7-day <em className="text-gradient-cool">process.</em></motion.h2>
          <div className="flex flex-col">
            {process.map((step, i) => (
              <motion.div key={step.phase} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="py-6 border-t border-foreground/[0.06] grid grid-cols-12 gap-4 hover:pl-3 transition-all duration-500">
                <span className="font-mono text-xs text-accent-cool col-span-1 pt-0.5">0{i + 1}</span>
                <h3 className="font-display text-foreground text-lg col-span-3">{step.phase}</h3>
                <span className="font-mono text-[10px] text-accent-cool tracking-wide uppercase col-span-2 pt-0.5">{step.duration}</span>
                <p className="text-muted-foreground text-sm font-body font-light col-span-6">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-16" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-2xl md:text-4xl mb-12">FAQ</motion.h2>
          <div className="flex flex-col max-w-3xl">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group py-6 border-t border-foreground/[0.06] cursor-pointer">
                <summary className="font-display text-foreground text-base list-none flex justify-between items-center">{faq.q}<span className="text-muted-foreground text-lg shrink-0 ml-4 group-open:rotate-45 transition-transform duration-300">+</span></summary>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed mt-3 pr-8">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto pt-12 border-t border-foreground/[0.06] text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-4">Ready? <em className="text-gradient-cool">Let's brand.</em></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-sm font-body font-light mb-8">7 days. Half the cost. Zero compromise.</motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">Start a Project →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
