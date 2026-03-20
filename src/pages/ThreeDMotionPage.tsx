import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

/* Floating iridescent orb */
function Orb({ delay, size, x, y, color }: { delay: number; size: number; x: string; y: string; color: string }) {
  return (
    <motion.div
      animate={{ y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: x, top: y, background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`, filter: 'blur(1px)', opacity: 0.6 }}
    />
  );
}

const showcaseItems = [
  { title: 'Scroll-Driven Storytelling', desc: 'Cinematic narratives that unfold as users scroll — transforming passive browsing into immersive brand journeys. Parallax layers, triggered reveals, and chapter-based pacing that keeps users engaged through your entire story.', icon: '↕' },
  { title: 'WebGL & Three.js Environments', desc: 'Real-time 3D scenes rendered directly in the browser at 60fps. Interactive product configurators, spatial web experiences, and immersive brand worlds that blur the line between website and experience.', icon: '◇' },
  { title: 'Micro-Interactions & Hover States', desc: 'The invisible details that separate good from extraordinary. Magnetic cursors, morphing buttons, liquid transitions, and feedback loops designed with obsessive precision for maximum delight.', icon: '✦' },
  { title: 'Product Visualization', desc: 'Photorealistic 3D product renders and interactive configurators that let customers examine, rotate, and customize products in a dimension photos can\'t reach. Proven to increase conversion by 30-50%.', icon: '⬡' },
  { title: 'Lottie & SVG Animation', desc: 'Lightweight vector animations that bring illustrations, icons, and infographics to life without the performance cost of video. Perfect for storytelling, data visualization, and UI delight.', icon: '◎' },
  { title: 'Kinetic Typography', desc: 'Text that moves, morphs, splits, and reacts — turning your messaging into a dynamic visual experience. Headlines that command attention and copy that demands to be read.', icon: 'Aa' },
  { title: 'Particle Systems & Generative Art', desc: 'Algorithmically generated visual experiences unique to your brand. No two visits identical. From flowing particle fields to reactive audio visualizations that feel alive.', icon: '✧' },
  { title: 'Page Transitions & Route Animations', desc: 'Seamless transitions between pages that maintain spatial continuity. Shared element animations, cross-fade effects, and theatrical reveals that make navigation feel cinematic.', icon: '⇄' },
];

const faqs = [
  { q: 'Will 3D and animations slow down my website?', a: 'Not if done correctly. We engineer every animation with performance as a first-class concern. GPU-accelerated transforms, lazy-loaded 3D assets, progressive enhancement, and aggressive optimization ensure your site stays fast. We target 60fps on mid-range devices and gracefully degrade on older hardware.' },
  { q: 'What browsers support WebGL and 3D?', a: 'WebGL is supported by 98%+ of global browsers, including all modern versions of Chrome, Safari, Firefox, and Edge. We build with progressive enhancement so users on older browsers still get a beautiful experience — just without the 3D layer.' },
  { q: 'Can you add animations to an existing website?', a: 'Absolutely. We frequently layer motion design onto existing websites as a discrete engagement. Whether it\'s adding scroll-triggered reveals, hover effects, or a full 3D hero section, we can enhance without rebuilding everything.' },
  { q: 'How do animations affect SEO?', a: 'Properly implemented animations can actually improve SEO by reducing bounce rates and increasing time-on-page — two signals Google values. We ensure all animated content is accessible, crawlable, and doesn\'t block page rendering.' },
];

export default function ThreeDMotionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <PageLayout>
      {/* Hero with floating orbs */}
      <section ref={heroRef} className="relative pt-40 pb-32 px-6 md:px-12 overflow-hidden min-h-[85vh] flex items-center">
        <motion.div style={{ scale: orbScale, opacity: orbOpacity }} className="absolute inset-0 pointer-events-none">
          <Orb delay={0} size={140} x="72%" y="12%" color="hsl(15 85% 55% / 0.5)" />
          <Orb delay={1.2} size={90} x="18%" y="58%" color="hsl(220 70% 55% / 0.5)" />
          <Orb delay={0.6} size={70} x="82%" y="68%" color="hsl(45 100% 65% / 0.4)" />
          <Orb delay={2} size={110} x="38%" y="18%" color="hsl(280 60% 55% / 0.3)" />
          <Orb delay={1.5} size={50} x="58%" y="48%" color="hsl(170 60% 50% / 0.4)" />
          <Orb delay={0.8} size={100} x="8%" y="28%" color="hsl(340 80% 55% / 0.3)" />
          <Orb delay={1.8} size={60} x="90%" y="40%" color="hsl(200 80% 60% / 0.3)" />
        </motion.div>

        {/* Animated perspective grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <Link to="/services" className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase hover:text-foreground transition-colors">← Services</Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 9rem)', lineHeight: 0.9 }}
          >
            3D &
            <br />
            <motion.em
              className="inline-block"
              style={{ color: 'hsl(var(--accent-warm))' }}
              animate={{ rotateX: [0, 5, 0], rotateY: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Motion.
            </motion.em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease: eliteEase }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-3xl leading-relaxed mb-12"
          >
            We create digital experiences that feel alive. From cinematic scroll-driven
            storytelling to real-time 3D environments, we push the boundary of what's possible
            in a browser — engineering wonder at 60 frames per second.
          </motion.p>

          {/* Hero stats inline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-12">
            {[
              { value: '60', unit: 'fps', label: 'Minimum render target' },
              { value: '98', unit: '%', label: 'Browser WebGL support' },
              { value: '40', unit: '%', label: 'Avg. engagement lift' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-4xl md:text-5xl text-foreground">{stat.value}</span>
                <span className="text-accent-warm text-xl ml-0.5">{stat.unit}</span>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-px mx-6 md:mx-12">
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: eliteEase }} className="h-full bg-gradient-to-r from-transparent via-accent-warm/30 to-transparent origin-left" />
      </div>

      {/* Showcase grid — 3D tilt on hover */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-warm" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            What we <em className="text-gradient-warm">craft.</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            {showcaseItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: eliteEase }}
                whileHover={{ scale: 1.03, rotateY: 3, rotateX: -2 }}
                className="animated-border-wrapper cursor-default"
                style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
              >
                <div className="animated-border-inner p-8 md:p-10 min-h-[200px] flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ background: `radial-gradient(circle at ${20 + i * 10}% 50%, hsl(var(--accent-warm)), transparent 60%)` }} />
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <span className="text-accent-warm text-lg">{item.icon}</span>
                    <h3 className="font-display text-foreground text-lg">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why motion matters */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-foreground text-3xl md:text-4xl mb-6">
                Why motion <em className="text-gradient-warm">matters.</em>
              </h2>
              <p className="text-muted-foreground text-base font-body font-light leading-relaxed mb-6">
                In a world where every brand has a website, motion is the differentiator.
                Static pages are forgettable. Animated experiences are memorable. The brands
                that invest in motion design see measurably higher engagement, longer session
                durations, and stronger emotional connections with their audience.
              </p>
              <p className="text-muted-foreground text-base font-body font-light leading-relaxed">
                We've seen scroll-driven storytelling increase time-on-page by 3x.
                Interactive 3D product viewers boost conversions by 40%. Micro-interactions
                reduce perceived load times by half. Motion isn't decoration — it's a
                business tool.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {[
                { metric: '3x', label: 'Increase in time-on-page with scroll storytelling' },
                { metric: '40%', label: 'Conversion boost with 3D product viewers' },
                { metric: '50%', label: 'Reduction in perceived load time via micro-interactions' },
                { metric: '2.5x', label: 'More social shares for animated content' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="border-l-2 border-accent-warm/30 pl-6 py-2"
                >
                  <span className="font-display text-2xl text-foreground block">{stat.metric}</span>
                  <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-16">
            Frequently asked <em className="text-gradient-warm">questions.</em>
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
            Ready for something <em className="text-gradient-warm">cinematic?</em>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground text-base font-body font-light max-w-lg mx-auto mb-10">
            Let's create a digital experience that makes your audience forget they're looking at a website.
          </motion.p>
          <Link to="/contact" className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500">
            Start a Project →
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
