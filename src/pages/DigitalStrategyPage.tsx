import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const capabilities = [
  { title: 'SEO', desc: 'Technical audits, content strategy, and link-building that moves you up Google.' },
  { title: 'Paid Media', desc: 'Google Ads, Meta Ads — strategic campaigns that maximize every dollar.' },
  { title: 'Analytics', desc: 'GA4, conversion tracking, and dashboards that turn data into action.' },
  { title: 'CRO', desc: 'A/B testing and funnel optimization that increase conversions.' },
  { title: 'Content Strategy', desc: 'Keyword-driven content that establishes you as the authority.' },
  { title: 'Social Media', desc: 'Platform-specific strategies where your audience actually lives.' },
];

const faqs = [
  { q: 'How long before we see results?', a: 'SEO: 3-4 months for improvements, 6-8 for significant growth. Paid media: results within the first week.' },
  { q: 'Do you guarantee rankings?', a: 'No honest agency can. What we guarantee is a data-driven approach that has consistently delivered first-page results.' },
  { q: 'What does it cost?', a: 'Strategy retainers start at $3K/month (6-month minimum). One-time audits from $5K.' },
  { q: 'Do you work with existing teams?', a: 'Yes. We supplement your team with specialized technical expertise.' },
];

export default function DigitalStrategyPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <PageLayout>
      <section ref={heroRef} className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--accent-glow)), transparent 70%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: eliteEase }} className="font-display text-foreground mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}>
            Digital<br /><em style={{ color: 'hsl(var(--accent-glow))' }}>Strategy.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-10">
            Data-driven growth architecture. SEO, paid media, and analytics baked into every pixel — expert growth strategy without the bloated retainers.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-10">
            {[{ value: '340', unit: '%', label: 'Avg organic traffic increase' }, { value: '12', unit: 'x', label: 'Avg ROI on paid campaigns' }, { value: '<6', unit: 'mo', label: 'Time to results' }].map((s) => (
              <div key={s.label}><span className="font-display text-3xl md:text-4xl text-foreground">{s.value}</span><span style={{ color: 'hsl(var(--accent-glow))' }} className="text-lg ml-0.5">{s.unit}</span><p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-1">{s.label}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="relative h-px mx-6 md:mx-12"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-[hsl(var(--accent-glow)/0.3)] to-transparent origin-left" /></div>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">Growth <em style={{ color: 'hsl(var(--accent-glow))' }}>services.</em></motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.02 }} className="animated-border-wrapper">
                <div className="animated-border-inner p-7 md:p-8">
                  <div className="flex items-start gap-3 mb-2"><span className="font-mono text-xs text-muted-foreground mt-0.5">0{i + 1}</span><h3 className="font-display text-foreground text-base">{cap.title}</h3></div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed pl-8">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto"><div className="divider mb-16" />
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-4">Ready to <em style={{ color: 'hsl(var(--accent-glow))' }}>grow?</em></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-sm font-body font-light mb-8">Data-driven results. Accessible pricing.</motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">Start a Project →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
