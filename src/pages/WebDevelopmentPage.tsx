import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const capabilities = [
  { title: 'React & Next.js Applications', desc: 'Server-rendered, SEO-optimized single-page applications with lightning-fast page transitions and real-time data hydration.' },
  { title: 'E-Commerce Platforms', desc: 'Shopify Plus, custom headless storefronts, and conversion-optimized checkout flows that turn browsers into buyers.' },
  { title: 'Headless CMS Integration', desc: 'Contentful, Sanity, Strapi — we wire your content management to pixel-perfect frontends so your team can publish without developers.' },
  { title: 'Progressive Web Apps', desc: 'Installable, offline-capable web applications that deliver native-app performance with zero App Store friction.' },
  { title: 'API Architecture', desc: 'RESTful and GraphQL APIs designed for scale. Microservices, serverless functions, and real-time websocket integrations.' },
  { title: 'Performance Engineering', desc: 'Sub-second load times, 95+ Lighthouse scores, and Core Web Vitals optimization that lifts your Google ranking.' },
];

const process = [
  { phase: 'Discovery', duration: '1-2 weeks', desc: 'We audit your current digital presence, interview stakeholders, analyze competitors, and define success metrics. Every assumption gets challenged.' },
  { phase: 'Architecture', duration: '1 week', desc: 'Information architecture, user journeys, wireframes, and technical specifications. We blueprint before we build — because demolition is expensive.' },
  { phase: 'Design & Prototype', duration: '2-3 weeks', desc: 'High-fidelity Figma prototypes with real interactions. You see exactly what you\'re getting before a single line of code is written.' },
  { phase: 'Development', duration: '4-8 weeks', desc: 'Component-driven development with continuous staging deployments. You review progress daily, not at the end.' },
  { phase: 'QA & Launch', duration: '1-2 weeks', desc: 'Cross-browser testing, performance audits, accessibility compliance (WCAG 2.1 AA), SEO validation, and a zero-downtime launch.' },
  { phase: 'Growth & Support', duration: 'Ongoing', desc: 'Post-launch analytics monitoring, A/B testing, iterative improvements, and priority support. We don\'t disappear after launch.' },
];

const faqs = [
  { q: 'How long does a typical web development project take?', a: 'Most projects take 8-14 weeks from kickoff to launch. Complex e-commerce platforms or web applications with custom integrations may take 16-20 weeks. We provide a detailed timeline during the Discovery phase.' },
  { q: 'What technologies do you use?', a: 'Our primary stack is React/Next.js with TypeScript, styled with Tailwind CSS, and deployed on Vercel or AWS. For e-commerce, we work with Shopify Plus and custom headless solutions. We choose the best tool for each project — not a one-size-fits-all approach.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes. Every project includes 30 days of post-launch support. We also offer monthly retainer packages for ongoing development, content updates, performance monitoring, and strategic consultation.' },
  { q: 'What does a website cost?', a: 'Our web development projects typically range from $15,000 for a marketing website to $75,000+ for complex web applications. We provide detailed proposals after the Discovery phase so you know exactly what you\'re investing in.' },
  { q: 'Can you work with our existing brand guidelines?', a: 'Absolutely. We regularly receive brand books from clients and translate them into pixel-perfect digital experiences. If you need brand development, our Brand Identity service handles that.' },
];

/* Animated counter */
function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-4xl md:text-6xl text-foreground"
    >
      {value}<span className="text-accent-warm text-2xl md:text-3xl">{suffix}</span>
    </motion.span>
  );
}

export default function WebDevelopmentPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-28 px-6 md:px-12 overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
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
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9, y: textY } as any}
          >
            Custom Web
            <br />
            <em className="text-gradient-warm">Development.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-3xl leading-relaxed mb-12"
          >
            We engineer luxury web experiences that convert visitors into loyal customers. 
            From high-performance React applications to conversion-optimized e-commerce platforms,
            every line of code serves your business goals. Our websites don't just look extraordinary
            — they rank, they convert, and they scale.
          </motion.p>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-12 md:gap-16"
          >
            <div>
              <AnimatedNumber value="95" suffix="+" />
              <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-2">Lighthouse Score Average</p>
            </div>
            <div>
              <AnimatedNumber value="<2" suffix="s" />
              <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-2">Average Load Time</p>
            </div>
            <div>
              <AnimatedNumber value="3" suffix="x" />
              <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-2">Average Conversion Lift</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-px mx-6 md:mx-12">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-warm/30 to-transparent origin-left" />
      </div>

      {/* Capabilities */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-warm" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">What We Build</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: eliteEase }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            Full-spectrum web <em className="text-gradient-warm">capabilities.</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, ease: eliteEase }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="animated-border-wrapper"
                style={{ perspective: '600px' }}
              >
                <div className="animated-border-inner p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-mono text-xs text-accent-warm mt-1">0{i + 1}</span>
                    <h3 className="font-display text-foreground text-lg">{cap.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed pl-10">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            From concept to <em className="text-gradient-cool">launch.</em>
          </motion.h2>

          <div className="flex flex-col">
            {process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
                className="group py-10 border-t border-foreground/[0.06] grid md:grid-cols-12 gap-4 md:gap-8 hover:pl-4 transition-all duration-700"
              >
                <span className="font-mono text-xs text-accent-cool md:col-span-1 pt-1">0{i + 1}</span>
                <h3 className="font-display text-foreground text-xl md:col-span-2">{step.phase}</h3>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase md:col-span-2">{step.duration}</span>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed md:col-span-7">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack with hover */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-12"
          >
            Technology <em className="text-gradient-warm">stack.</em>
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'GraphQL', 'Vercel', 'AWS', 'Shopify Plus', 'Sanity CMS', 'Framer Motion', 'Three.js', 'GSAP', 'Stripe', 'Supabase'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.08, borderColor: 'hsl(var(--accent-warm) / 0.4)' }}
                className="font-mono text-sm text-foreground/70 border border-foreground/[0.08] rounded-full px-5 py-2.5 cursor-default transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            Frequently asked <em className="text-gradient-warm">questions.</em>
          </motion.h2>

          <div className="flex flex-col max-w-3xl">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: eliteEase }}
                className="group py-8 border-t border-foreground/[0.06] cursor-pointer"
              >
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-6"
          >
            Ready to build something <em className="text-gradient-warm">remarkable?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base font-body font-light max-w-lg mx-auto mb-10"
          >
            We're currently accepting new projects. Let's discuss how we can transform your digital presence.
          </motion.p>
          <Link
            to="/contact"
            className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
