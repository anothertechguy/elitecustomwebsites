import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Code2, Palette, Globe, Zap } from 'lucide-react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const team = [
  { id: '01', name: 'Sean Carter', role: 'Founder & Lead Engineer', pedigree: 'Ex-Amazon', icon: Code2, bio: 'Full-stack architect with a decade of experience shipping products used by millions. Left Amazon to build the web design studio he always wished existed — one that combines Big Tech engineering rigor with boutique creative ambition.' },
  { id: '02', name: 'Creative Director', role: 'Brand & Visual Design', pedigree: 'Ex-Apple', icon: Palette, bio: 'Design leader with a portfolio spanning luxury fashion, fintech, and Fortune 500 brand systems. Brings the obsessive attention to detail that Apple is known for to every client engagement.' },
  { id: '03', name: 'Lead Developer', role: 'Frontend Architecture', pedigree: 'Ex-Google', icon: Globe, bio: 'Specializing in performant, accessible React applications and WebGL-powered experiences. Formerly led frontend for a Google product serving 100M+ users.' },
  { id: '04', name: 'Strategy Lead', role: 'Growth & Analytics', pedigree: 'Ex-Meta', icon: Zap, bio: 'Data-driven growth strategist who built and scaled acquisition campaigns at Meta. Now applies that same analytical rigor to help luxury brands dominate their digital landscape.' },
];

const values = [
  { title: 'Obsessive Quality', description: 'Every pixel, every interaction, every word is deliberate. We don\'t ship "good enough." We ship work that makes us proud to put our name on it — and that meets the standard our clients deserve.' },
  { title: 'Silicon Valley DNA', description: 'Our team comes from the world\'s most demanding engineering organizations — Amazon, Apple, Google, Meta. We bring that rigor, those systems, and that performance culture to every project.' },
  { title: 'Luxury Without Ego', description: 'World-class output at an honest price. No inflated agency overhead. No unnecessary layers of management. No 200-person team — just a curated collective of senior talent working directly with you.' },
  { title: 'Results Over Awards', description: 'We measure success by your growth metrics, conversion rates, and customer sentiment — not industry trophies. Your business results are our portfolio.' },
];

const milestones = [
  { year: '2026', title: 'Founded', desc: 'Elite Custom Websites launches with a clear mission: bring Silicon Valley engineering excellence to luxury web design, at a fraction of traditional agency pricing.' },
  { year: '2026', title: 'First Major Client', desc: 'Dr. Heavenly Kimes — celebrity, entrepreneur, and political candidate — becomes our first flagship client. Her campaign platform sets the standard for our work.' },
  { year: '2026', title: 'Full Team Assembled', desc: 'Former engineers from Amazon, Apple, Google, and Meta join forces. The founding team brings 40+ combined years of Big Tech experience.' },
  { year: '2026', title: 'Expanding Services', desc: 'Launch of 3D & Motion, Brand Identity, and Digital Strategy services. Full-spectrum digital agency capabilities now available.' },
];

const faqs = [
  { q: 'Where are you located?', a: 'We\'re a distributed team working across U.S. time zones. Our founder is based in the Denver, Colorado area. We work with clients nationwide and have the infrastructure for seamless remote collaboration — video calls, shared Figma files, Slack channels, and daily async updates.' },
  { q: 'How are you different from other web design agencies?', a: 'Three things: our team comes from Amazon, Apple, Google, and Meta — not from design school. We combine that engineering rigor with genuine creative ambition. And we operate without the bloated overhead of traditional agencies, passing those savings directly to our clients.' },
  { q: 'What types of clients do you work with?', a: 'Celebrities, political campaigns, luxury brands, high-net-worth professionals, and ambitious startups who understand that their digital presence is their most important asset. If you care deeply about quality and want a partner who shares that obsession, we\'re a fit.' },
  { q: 'How many projects do you take on at once?', a: 'We limit ourselves to 12 engagements per year — maximum 3 at any given time. This ensures every client receives our undivided attention and senior-level talent, not junior staff learning on your dime.' },
  { q: 'Can I speak directly with the team working on my project?', a: 'Always. There are no account managers or middlemen. You communicate directly with the engineers and designers building your project. Our founder is personally involved in every engagement.' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 md:px-12 overflow-hidden">
        {/* Subtle horizontal line pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 1px, transparent 100px)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}
          >
            Built different.
            <br />
            <em className="text-gradient-cool">By design.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-3xl leading-relaxed mb-12"
          >
            We're not a faceless 200-person agency. We're a curated collective of former Big Tech
            engineers and luxury-grade designers who left the corporate world to build something better — 
            elite digital experiences delivered with the precision of Silicon Valley and the artistry
            of a boutique studio.
          </motion.p>

          {/* Key numbers */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-12">
            {[
              { value: '40+', label: 'Combined years in tech' },
              { value: '4', label: 'Former FAANG engineers' },
              { value: '12', label: 'Max engagements per year' },
              { value: '100%', label: 'Referral-based growth' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl md:text-4xl text-foreground">{stat.value}</span>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-px mx-6 md:mx-12">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-cool/30 to-transparent origin-left" />
      </div>

      {/* Values */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-warm" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Our Values</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            What drives <em className="text-gradient-warm">everything.</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
                whileHover={{ scale: 1.02 }}
                className="animated-border-wrapper"
              >
                <div className="animated-border-inner p-8 md:p-10">
                  <h3 className="font-display text-foreground text-xl mb-4">{val.title}</h3>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Origin */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-foreground text-3xl md:text-4xl mb-6">
                The <em className="text-gradient-cool">origin story.</em>
              </h2>
              <p className="text-muted-foreground text-base font-body font-light leading-relaxed mb-6">
                Elite Custom Websites was born from a simple frustration: the web design industry 
                is broken. On one end, you have cheap template shops that produce forgettable work.
                On the other, bloated agencies that charge six figures and staff your project with
                junior designers.
              </p>
              <p className="text-muted-foreground text-base font-body font-light leading-relaxed mb-6">
                We saw a gap — a place for a lean, senior-only team that delivers the creative
                quality of a top-tier agency with the engineering rigor of a Silicon Valley startup,
                at a price point that actually makes sense.
              </p>
              <p className="text-muted-foreground text-base font-body font-light leading-relaxed">
                Today, we work exclusively with clients who share our obsession for quality:
                celebrities, political campaigns, luxury brands, and ambitious founders who
                understand that their digital presence is their most powerful asset.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="font-display text-foreground text-3xl md:text-4xl mb-8">
                <em className="text-gradient-warm">Timeline.</em>
              </h2>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="border-l-2 border-foreground/[0.06] pl-6 pb-8 last:pb-0 relative"
                >
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent-warm" />
                  <span className="font-mono text-[10px] text-accent-warm tracking-wide uppercase">{m.year}</span>
                  <h4 className="font-display text-foreground text-lg mt-1 mb-2">{m.title}</h4>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">The Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            Senior talent, <em className="text-gradient-cool">only.</em>
          </motion.h2>

          <div className="flex flex-col">
            {team.map((member, i) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, ease: eliteEase }}
                  className="py-10 border-t border-foreground/[0.06] grid md:grid-cols-12 gap-6 hover:pl-4 transition-all duration-700"
                >
                  <span className="font-mono text-xs text-muted-foreground md:col-span-1 pt-1">{member.id}</span>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-foreground text-xl">{member.name}</h3>
                    </div>
                    <span className="font-mono text-[9px] text-accent-warm tracking-[0.15em] uppercase border border-accent-warm/20 rounded-full px-2.5 py-0.5">{member.pedigree}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground tracking-wide md:col-span-2 pt-1">{member.role}</span>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed md:col-span-5">{member.bio}</p>
                  <div className="md:col-span-1 flex justify-end">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-16">
            Frequently asked <em className="text-gradient-cool">questions.</em>
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
            Let's build something <em className="text-gradient-warm">extraordinary.</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-base font-body font-light max-w-lg mx-auto mb-10">
            We're currently accepting new projects. If you value craftsmanship as much as we do, let's talk.
          </motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">
            Get in Touch →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
