import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const deliverables = [
  { title: 'Logo Architecture & Wordmarks', desc: 'Versatile mark systems designed for every context — digital, print, embroidery, and engraving. Scalable from favicon to billboard.' },
  { title: 'Comprehensive Brand Guidelines', desc: 'A 40-80 page living document that ensures every touchpoint stays on-brand. Typography rules, color specifications, voice and tone, do\'s and don\'ts.' },
  { title: 'Color & Typography Systems', desc: 'Scientifically curated palettes with accessibility-tested contrast ratios. Type hierarchies that create instant visual authority.' },
  { title: 'Iconography & Illustration', desc: 'Custom icon sets and illustration styles unique to your brand. No stock. No generic. Every visual element is purposefully crafted.' },
  { title: 'Digital Design Systems', desc: 'Figma component libraries, design tokens, and pattern libraries that keep your digital products visually consistent at scale.' },
  { title: 'Brand Photography Direction', desc: 'Art direction guides for photography — mood boards, shooting guidelines, and post-processing specifications that maintain your visual narrative.' },
];

const process = [
  { phase: 'Research & Audit', duration: '1-2 weeks', desc: 'Competitive landscape analysis, audience personas, brand perception surveys, and stakeholder interviews. We uncover the truths the market already believes about you.' },
  { phase: 'Strategy & Positioning', duration: '1 week', desc: 'Define your brand\'s north star — mission, vision, values, personality, and positioning statement. This is the compass everything else follows.' },
  { phase: 'Visual Exploration', duration: '2 weeks', desc: 'Three distinct creative directions, each supported by mood boards, preliminary color palettes, typographic explorations, and conceptual mark sketches.' },
  { phase: 'Design Refinement', duration: '2-3 weeks', desc: 'The chosen direction gets refined through multiple rounds. Every curve, weight, and pixel is deliberated until it\'s right — not just close.' },
  { phase: 'System Build', duration: '2 weeks', desc: 'The complete brand system — guidelines, templates, assets, and design tokens — assembled into a comprehensive, production-ready package.' },
];

const faqs = [
  { q: 'What\'s the difference between a logo and a brand identity?', a: 'A logo is a symbol. A brand identity is the complete visual and verbal system that defines how your business presents itself to the world — colors, typography, imagery style, voice, tone, patterns, textures, and rules for how they all work together.' },
  { q: 'How long does a brand identity project take?', a: 'A complete brand identity typically takes 8-12 weeks. Logo-only projects can be completed in 4-6 weeks. We don\'t rush the creative process — you\'re investing in something that will represent your business for years.' },
  { q: 'How many logo concepts will we see?', a: 'We present three strategically distinct directions, each with 2-3 variations. After you select a direction, we refine through 2-3 rounds of revisions until it\'s perfect.' },
  { q: 'Do you do rebrands or only new brands?', a: 'Both. We\'ve helped established businesses evolve their visual identity while preserving brand equity, and we\'ve built identities from scratch for startups. The Discovery phase determines the right approach for your situation.' },
  { q: 'What files do we receive?', a: 'You receive every format you\'ll ever need — SVG, PNG, EPS, PDF, and AI files. Plus Figma component libraries, font licenses, color codes in every format (HEX, RGB, CMYK, Pantone), and a comprehensive brand guidelines PDF.' },
];

export default function BrandIdentityPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-28 px-6 md:px-12 overflow-hidden">
        {/* Animated diagonal lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--foreground)) 0, hsl(var(--foreground)) 1px, transparent 1px, transparent 60px)',
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
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}
          >
            Brand
            <br />
            <em className="text-gradient-cool">Identity.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-3xl leading-relaxed mb-12"
          >
            Your brand is the emotional architecture of trust. We engineer visual identities
            that speak authority before a single word is read — positioning you at the apex
            of your market with a system so refined it feels inevitable.
          </motion.p>

          {/* Philosophy columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, ease: eliteEase }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Timeless', desc: 'We design for decades, not trends. Your identity should feel as relevant in 2036 as it does today.' },
              { title: 'Systematic', desc: 'Every element works in concert — from the weight of a line to the silence between words.' },
              { title: 'Distinctive', desc: 'If it could belong to anyone else, we haven\'t gone far enough. Your brand is uniquely, unmistakably yours.' },
            ].map((item) => (
              <div key={item.title} className="border-t border-foreground/[0.06] pt-6">
                <h3 className="font-display text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-px mx-6 md:mx-12">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-cool/30 to-transparent origin-left" />
      </div>

      {/* Deliverables */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Deliverables</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            What you <em className="text-gradient-cool">receive.</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, ease: eliteEase }}
                whileHover={{ scale: 1.02 }}
                className="animated-border-wrapper"
              >
                <div className="animated-border-inner p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-mono text-xs text-accent-cool mt-1">0{i + 1}</span>
                    <h3 className="font-display text-foreground text-lg">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed pl-10">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            The brand-building <em className="text-gradient-cool">process.</em>
          </motion.h2>

          <div className="flex flex-col">
            {process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
                className="py-10 border-t border-foreground/[0.06] grid md:grid-cols-12 gap-4 md:gap-8 hover:pl-4 transition-all duration-700"
              >
                <span className="font-mono text-xs text-accent-cool md:col-span-1 pt-1">0{i + 1}</span>
                <h3 className="font-display text-foreground text-xl md:col-span-3">{step.phase}</h3>
                <span className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase md:col-span-2">{step.duration}</span>
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed md:col-span-6">{step.desc}</p>
              </motion.div>
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
            Frequently asked <em className="text-gradient-cool">questions.</em>
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
            Ready to define your <em className="text-gradient-cool">identity?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-base font-body font-light max-w-lg mx-auto mb-10"
          >
            Let's build a visual identity that positions your brand exactly where it belongs — at the top.
          </motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">
            Start a Project →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
