import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const showcaseItems = [
  { title: 'Scroll Storytelling', desc: 'Parallax layers, triggered reveals, and chapter-based pacing.', icon: '↕' },
  { title: 'WebGL & Three.js', desc: 'Real-time 3D scenes at 60fps directly in the browser.', icon: '◇' },
  { title: 'Micro-Interactions', desc: 'Magnetic cursors, morphing buttons, liquid transitions.', icon: '✦' },
  { title: 'Product 3D', desc: 'Interactive product viewers — rotate, zoom, customize.', icon: '⬡' },
  { title: 'Lottie & SVG', desc: 'Lightweight animations without the performance cost of video.', icon: '◎' },
  { title: 'Kinetic Typography', desc: 'Headlines that move, morph, and demand attention.', icon: 'Aa' },
  { title: 'Generative Art', desc: 'Algorithmically generated visuals unique to your brand.', icon: '✧' },
  { title: 'Page Transitions', desc: 'Cinematic navigation that maintains spatial continuity.', icon: '⇄' },
];

const faqs = [
  { q: 'Will animations slow my site?', a: 'No. GPU-accelerated transforms, lazy-loading, and progressive enhancement. 60fps on mid-range devices.' },
  { q: 'What browsers support this?', a: 'WebGL works in 98%+ of browsers. Older browsers get a beautiful fallback.' },
  { q: 'Can you add motion to an existing site?', a: 'Yes. We layer scroll animations, hover effects, or 3D sections onto existing sites.' },
  { q: 'Does motion affect SEO?', a: 'Done right, it improves SEO by reducing bounce rates and increasing time-on-page.' },
];

function Orb({ delay, size, x, y, color }: { delay: number; size: number; x: string; y: string; color: string }) {
  return (
    <motion.div animate={{ y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }} transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }} className="absolute rounded-full pointer-events-none" style={{ width: size, height: size, left: x, top: y, background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`, filter: 'blur(1px)', opacity: 0.6 }} />
  );
}

export default function ThreeDMotionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <PageLayout>
      <section ref={heroRef} className="relative pt-40 pb-28 px-6 md:px-12 overflow-hidden min-h-[80vh] flex items-center">
        <motion.div style={{ scale: orbScale, opacity: orbOpacity }} className="absolute inset-0 pointer-events-none">
          <Orb delay={0} size={140} x="72%" y="12%" color="hsl(15 85% 55% / 0.5)" />
          <Orb delay={1.2} size={90} x="18%" y="58%" color="hsl(220 70% 55% / 0.5)" />
          <Orb delay={0.6} size={70} x="82%" y="68%" color="hsl(45 100% 65% / 0.4)" />
          <Orb delay={2} size={110} x="38%" y="18%" color="hsl(280 60% 55% / 0.3)" />
          <Orb delay={1.5} size={50} x="58%" y="48%" color="hsl(170 60% 50% / 0.4)" />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: eliteEase }} className="font-display text-foreground mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 9rem)', lineHeight: 0.9 }}>
            3D &<br /><motion.em className="inline-block" style={{ color: 'hsl(var(--accent-warm))' }} animate={{ rotateX: [0, 5, 0], rotateY: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>Motion.</motion.em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-10">
            Experiences that feel alive. Scroll storytelling, 3D environments, and micro-interactions — engineered at 60fps. Half the agency cost.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-10">
            {[{ value: '60', unit: 'fps', label: 'Render target' }, { value: '98', unit: '%', label: 'Browser support' }, { value: '40', unit: '%', label: 'Engagement lift' }].map((s) => (
              <div key={s.label}><span className="font-display text-3xl md:text-4xl text-foreground">{s.value}</span><span className="text-accent-warm text-lg ml-0.5">{s.unit}</span><p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-1">{s.label}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="relative h-px mx-6 md:mx-12"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-warm/30 to-transparent origin-left" /></div>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-14">What we <em className="text-gradient-warm">craft.</em></motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {showcaseItems.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30, rotateX: 6 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.06 }} whileHover={{ scale: 1.03, rotateY: 3, rotateX: -2 }} className="animated-border-wrapper cursor-default" style={{ perspective: '800px', transformStyle: 'preserve-3d' }}>
                <div className="animated-border-inner p-7 md:p-8 relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2 relative z-10"><span className="text-accent-warm">{item.icon}</span><h3 className="font-display text-foreground text-base">{item.title}</h3></div>
                  <p className="text-muted-foreground text-sm font-body font-light relative z-10">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto"><div className="divider mb-16" />
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-foreground text-2xl md:text-4xl mb-4">Why motion <em className="text-gradient-warm">matters.</em></h2>
              <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">Static pages are forgettable. Animated experiences are memorable. Brands that invest in motion see higher engagement and stronger connections.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
              {[{ m: '3x', l: 'Time-on-page with scroll animation' }, { m: '40%', l: 'Conversion lift with 3D viewers' }, { m: '2.5x', l: 'More social shares' }].map((s, i) => (
                <div key={s.l} className="border-l-2 border-accent-warm/30 pl-4 py-1"><span className="font-display text-xl text-foreground">{s.m}</span><p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase">{s.l}</p></div>
              ))}
            </motion.div>
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
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-4">Ready for <em className="text-gradient-warm">cinematic?</em></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-sm font-body font-light mb-8">Half the agency cost. Twice the wow factor.</motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">Start a Project →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
