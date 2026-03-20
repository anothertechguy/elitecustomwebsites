import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const capabilities = [
  { title: 'Search Engine Optimization', desc: 'Technical SEO audits, content strategy, on-page optimization, schema markup, and link-building campaigns that move you up Google\'s rankings — and keep you there.' },
  { title: 'Paid Media & Advertising', desc: 'Google Ads, Meta Ads, LinkedIn campaigns — strategic paid acquisition with meticulous targeting, creative testing, and bid optimization that maximizes every dollar.' },
  { title: 'Analytics & Data Architecture', desc: 'GA4 implementation, conversion tracking, custom dashboards, and data pipelines that transform raw numbers into actionable business intelligence you can actually use.' },
  { title: 'Conversion Rate Optimization', desc: 'A/B testing, heatmap analysis, user recording reviews, and funnel optimization that systematically removes friction and increases the percentage of visitors who become customers.' },
  { title: 'Content Strategy', desc: 'Editorial calendars, keyword-driven content pillars, blog architecture, and thought leadership programs that establish your brand as the authority in your space.' },
  { title: 'Social Media Strategy', desc: 'Platform-specific strategies, content creation frameworks, community management playbooks, and growth tactics tailored to where your audience actually lives.' },
];

const methodology = [
  { phase: 'Audit & Research', desc: 'Complete analysis of your current digital footprint — traffic patterns, ranking positions, competitor gaps, technical issues, and untapped opportunities. We benchmark everything before we change anything.' },
  { phase: 'Strategy Development', desc: 'A comprehensive 90-day roadmap built on data, not opinions. Clear goals, specific tactics, resource allocation, and measurable KPIs for every initiative.' },
  { phase: 'Execution', desc: 'Precise implementation with weekly reporting. SEO optimizations, campaign launches, content publication, and continuous iteration based on real-time performance data.' },
  { phase: 'Optimization & Scale', desc: 'Monthly strategy reviews, performance analysis, and strategic pivots. We scale what works, cut what doesn\'t, and identify new opportunities to accelerate growth.' },
];

const faqs = [
  { q: 'How long before we see SEO results?', a: 'SEO is a compound investment. Most clients see measurable improvements in 3-4 months, with significant traffic growth at 6-8 months. Paid media campaigns can generate results within the first week of launch.' },
  { q: 'Do you guarantee first-page rankings?', a: 'Any agency that guarantees specific rankings is being dishonest. What we guarantee is a methodical, data-driven approach that has consistently delivered first-page results for competitive keywords across every engagement we\'ve taken on.' },
  { q: 'What\'s your minimum engagement?', a: 'Our digital strategy retainers start at $3,000/month with a 6-month minimum commitment. This ensures enough time to implement, measure, and optimize effectively. One-time strategy audits are available starting at $5,000.' },
  { q: 'Do you work with our existing marketing team?', a: 'Absolutely. We frequently collaborate with in-house marketing teams, serving as a strategic extension that handles the specialized technical work — SEO implementation, analytics architecture, campaign management — while your team stays focused on brand and content.' },
  { q: 'Can you manage everything or do we need internal resources?', a: 'Both models work. We can serve as your complete outsourced marketing department or supplement specific capabilities your team is missing. We\'ll recommend the right structure during the Strategy Development phase.' },
];

export default function DigitalStrategyPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-28 px-6 md:px-12 overflow-hidden">
        {/* Radial pulse */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent-glow)), transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}
          >
            Digital
            <br />
            <em style={{ color: 'hsl(var(--accent-glow))' }}>Strategy.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-3xl leading-relaxed mb-12"
          >
            Beautiful design without strategy is art. Beautiful design with strategy is
            a growth engine. We bake data-informed growth architecture into every pixel,
            ensuring your digital presence doesn't just look extraordinary — it performs.
          </motion.p>

          {/* Impact stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-12">
            {[
              { value: '340', unit: '%', label: 'Average organic traffic increase' },
              { value: '12', unit: 'x', label: 'Average ROI on paid campaigns' },
              { value: '<6', unit: 'mo', label: 'Time to measurable results' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-4xl md:text-5xl text-foreground">{stat.value}</span>
                <span style={{ color: 'hsl(var(--accent-glow))' }} className="text-xl ml-0.5">{stat.unit}</span>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-px mx-6 md:mx-12">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-[hsl(var(--accent-glow)/0.3)] to-transparent origin-left" />
      </div>

      {/* Capabilities */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px" style={{ background: 'hsl(var(--accent-glow))' }} />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Growth Services</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-16">
            Full-funnel <em style={{ color: 'hsl(var(--accent-glow))' }}>capabilities.</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, ease: eliteEase }}
                whileHover={{ scale: 1.02 }}
                className="animated-border-wrapper"
              >
                <div className="animated-border-inner p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
                    <h3 className="font-display text-foreground text-lg">{cap.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed pl-10">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-16">
            Our <em style={{ color: 'hsl(var(--accent-glow))' }}>methodology.</em>
          </motion.h2>

          <div className="flex flex-col">
            {methodology.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
                className="py-10 border-t border-foreground/[0.06] grid md:grid-cols-12 gap-4 md:gap-8 hover:pl-4 transition-all duration-700"
              >
                <span className="font-mono text-xs md:col-span-1 pt-1" style={{ color: 'hsl(var(--accent-glow))' }}>0{i + 1}</span>
                <h3 className="font-display text-foreground text-xl md:col-span-3">{step.phase}</h3>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed md:col-span-8">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-16">
            Frequently asked <em style={{ color: 'hsl(var(--accent-glow))' }}>questions.</em>
          </motion.h2>
          <div className="flex flex-col max-w-3xl">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, ease: eliteEase }} className="group py-8 border-t border-foreground/[0.06] cursor-pointer">
                <summary className="font-display text-foreground text-lg list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-muted-foreground text-xl shrink-0 ml-4 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed mt-4 pr-8">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto pt-16 border-t border-foreground/[0.06] text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-6">
            Ready to accelerate <em style={{ color: 'hsl(var(--accent-glow))' }}>growth?</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-base font-body font-light max-w-lg mx-auto mb-10">
            Let's build a growth engine that compounds — making every dollar you invest work harder than the last.
          </motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">
            Start a Project →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
