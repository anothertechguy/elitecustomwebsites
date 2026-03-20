import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const capabilities = [
  { title: 'React & Next.js Apps', desc: 'Server-rendered, SEO-optimized SPAs with blazing-fast page transitions.' },
  { title: 'E-Commerce', desc: 'Shopify Plus, headless storefronts, and checkout flows that convert.' },
  { title: 'Headless CMS', desc: 'Contentful, Sanity, Strapi — publish content without developers.' },
  { title: 'Progressive Web Apps', desc: 'Installable, offline-capable apps with native performance.' },
  { title: 'API & Backend', desc: 'REST, GraphQL, serverless functions, and real-time integrations.' },
  { title: 'Performance', desc: 'Sub-second loads, 95+ Lighthouse scores, Core Web Vitals optimized.' },
];

const process = [
  { phase: 'Discovery', duration: 'Day 1', desc: 'Strategy call. We learn your goals, audience, and vision.' },
  { phase: 'Architecture', duration: 'Day 1-2', desc: 'Wireframes, user journeys, and technical specs.' },
  { phase: 'Design', duration: 'Day 2-3', desc: 'High-fidelity Figma prototypes you can interact with.' },
  { phase: 'Development', duration: 'Day 3-6', desc: 'Component-driven code with daily staging previews.' },
  { phase: 'QA & Launch', duration: 'Day 6-7', desc: 'Testing, SEO validation, and zero-downtime deployment.' },
  { phase: 'Support', duration: 'Ongoing', desc: '30 days post-launch support included with every project.' },
];

const faqs = [
  { q: 'How do you deliver in 7 days?', a: 'Senior-only team, no handoffs, no waiting on approvals from middle management. Our engineers design and build simultaneously. We\'ve refined our process to eliminate every ounce of waste.' },
  { q: 'What technologies do you use?', a: 'React, Next.js, TypeScript, Tailwind CSS, and Vercel/AWS for deployment. Shopify Plus for e-commerce. We pick the right tool for each project.' },
  { q: 'What does it cost?', a: 'Projects start at $8K for marketing sites and go up to $40K+ for complex apps. Roughly half what a traditional agency would charge for the same scope.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. 30 days included. Monthly retainers available for ongoing development and optimization.' },
];

export default function WebDevelopmentPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-accent-warm/30 text-accent-warm">7-Day Delivery</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: eliteEase }} className="font-display text-foreground mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}>
            Custom Web<br /><em className="text-gradient-warm">Development.</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-12">
            Luxury websites that rank, convert, and scale — built by former Big Tech engineers in 7 days, at half the agency cost.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-10">
            {[{ value: '7', suffix: 'days', label: 'Idea to launch' }, { value: '50', suffix: '%', label: 'Less than agencies' }, { value: '95', suffix: '+', label: 'Lighthouse score' }].map((s) => (
              <div key={s.label}>
                <span className="font-display text-3xl md:text-5xl text-foreground">{s.value}</span>
                <span className="text-accent-warm text-lg ml-0.5">{s.suffix}</span>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="relative h-px mx-6 md:mx-12"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-warm/30 to-transparent origin-left" /></div>

      {/* Capabilities */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">
            What we <em className="text-gradient-warm">build.</em>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.06, ease: eliteEase }} whileHover={{ scale: 1.02 }} className="animated-border-wrapper">
                <div className="animated-border-inner p-7 md:p-8">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-mono text-xs text-accent-warm mt-0.5">0{i + 1}</span>
                    <h3 className="font-display text-foreground text-base">{cap.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed pl-8">{cap.desc}</p>
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">
            7-day <em className="text-gradient-cool">process.</em>
          </motion.h2>
          <div className="flex flex-col">
            {process.map((step, i) => (
              <motion.div key={step.phase} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, ease: eliteEase }} className="py-6 border-t border-foreground/[0.06] grid grid-cols-12 gap-4 hover:pl-3 transition-all duration-500">
                <span className="font-mono text-xs text-accent-cool col-span-1 pt-0.5">0{i + 1}</span>
                <h3 className="font-display text-foreground text-lg col-span-3">{step.phase}</h3>
                <span className="font-mono text-[10px] text-accent-warm tracking-wide uppercase col-span-2 pt-0.5">{step.duration}</span>
                <p className="text-muted-foreground text-sm font-body font-light col-span-6">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-16" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-2xl md:text-4xl mb-10">Tech <em className="text-gradient-warm">stack.</em></motion.h2>
          <div className="flex flex-wrap gap-2.5">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'GraphQL', 'Vercel', 'AWS', 'Shopify Plus', 'Sanity', 'Framer Motion', 'Three.js', 'GSAP', 'Stripe'].map((tech, i) => (
              <motion.span key={tech} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} whileHover={{ scale: 1.08, borderColor: 'hsl(var(--accent-warm) / 0.4)' }} className="font-mono text-xs text-foreground/70 border border-foreground/[0.08] rounded-full px-4 py-2 cursor-default transition-all duration-300">{tech}</motion.span>
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

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto pt-12 border-t border-foreground/[0.06] text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-4">Ready? <em className="text-gradient-warm">Let's build.</em></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-sm font-body font-light mb-8">7 days. Half the cost. Zero compromise.</motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">Start a Project →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
