import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Code2, Palette, Globe, Zap } from 'lucide-react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const team = [
  { id: '01', name: 'Sean Carter', role: 'Founder & Lead Engineer', pedigree: 'Ex-Amazon', icon: Code2, bio: 'Left Amazon to build the studio he always wished existed — Big Tech rigor meets boutique creative ambition.' },
  { id: '02', name: 'Creative Director', role: 'Brand & Visual Design', pedigree: 'Ex-Apple', icon: Palette, bio: 'Design leader with a portfolio spanning luxury fashion, fintech, and Fortune 500 brand systems.' },
  { id: '03', name: 'Lead Developer', role: 'Frontend Architecture', pedigree: 'Ex-Google', icon: Globe, bio: 'React specialist and WebGL expert. Formerly led frontend for a Google product used by 100M+ users.' },
  { id: '04', name: 'Strategy Lead', role: 'Growth & Analytics', pedigree: 'Ex-Meta', icon: Zap, bio: 'Built and scaled acquisition campaigns at Meta. Now applies that rigor to luxury brands.' },
];

const values = [
  { title: 'Obsessive Quality', desc: 'We don\'t ship "good enough." Every pixel is deliberate.' },
  { title: 'Engineering Rigor', desc: 'From Amazon, Apple, Google, and Meta — that engineering rigor in every project.' },
  { title: 'Luxury Without Ego', desc: 'World-class output. No bloated overhead. Mastercraft talent only.' },
  { title: 'Results Over Awards', desc: 'We measure success by your growth, not industry trophies.' },
];

const faqs = [
  { q: 'Where are you located?', a: 'Distributed team in U.S. time zones. Founder based in Denver, CO. We work with clients nationwide.' },
  { q: 'How are you different?', a: 'We combine enterprise-grade engineering rigor with boutique creative ambition. You get world-class craftsmanship at a much more accessible price point.' },
  { q: 'What clients do you work with?', a: 'Celebrities, political campaigns, luxury brands, and ambitious startups who care deeply about quality.' },
  { q: 'How many projects at once?', a: 'Max 3 at any time (12 per year). Every client gets our undivided expertise.' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">About</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: eliteEase }} className="font-display text-foreground mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}>
            Built different.<br /><em className="text-gradient-cool">By design.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-10">
            We're a collective of industry veterans delivering luxury digital experiences in just 7 days—for a fraction of typical agency fees. No bloated teams, no months-long timelines.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-10">
            {[{ value: '7', label: 'Days to launch' }, { value: '50%', label: 'Less than agencies' }, { value: '40+', label: 'Years Big Tech exp' }, { value: '100%', label: 'Referral growth' }].map((s) => (
              <div key={s.label}><span className="font-display text-3xl md:text-4xl text-foreground">{s.value}</span><p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-1">{s.label}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="relative h-px mx-6 md:mx-12"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-cool/30 to-transparent origin-left" /></div>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">Our <em className="text-gradient-warm">values.</em></motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((val, i) => (
              <motion.div key={val.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.02 }} className="animated-border-wrapper">
                <div className="animated-border-inner p-7 md:p-8">
                  <h3 className="font-display text-foreground text-lg mb-2">{val.title}</h3>
                  <p className="text-muted-foreground text-sm font-body font-light">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto"><div className="divider mb-16" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">The <em className="text-gradient-cool">team.</em></motion.h2>
          <div className="flex flex-col">
            {team.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="py-8 border-t border-foreground/[0.06] grid md:grid-cols-12 gap-4 hover:pl-3 transition-all duration-500">
                  <span className="font-mono text-xs text-muted-foreground md:col-span-1 pt-0.5">{m.id}</span>
                  <div className="md:col-span-3"><h3 className="font-display text-foreground text-lg mb-1">{m.name}</h3><span className="font-mono text-[9px] text-accent-warm tracking-[0.15em] uppercase border border-accent-warm/20 rounded-full px-2.5 py-0.5">{m.pedigree}</span></div>
                  <span className="font-mono text-[11px] text-muted-foreground md:col-span-2 pt-0.5">{m.role}</span>
                  <p className="text-muted-foreground text-sm font-body font-light md:col-span-5">{m.bio}</p>
                  <div className="md:col-span-1 flex justify-end"><Icon className="w-4 h-4 text-muted-foreground" /></div>
                </motion.div>
              );
            })}
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-4">Let's build <em className="text-gradient-warm">together.</em></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-sm font-body font-light mb-8">Exceptional quality. Delivered in a week.</motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">Get in Touch →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
