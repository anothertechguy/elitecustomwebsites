import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

/* Animated orb component — floating iridescent spheres */
function FloatingOrb({ delay, size, x, y, color }: { delay: number; size: number; x: string; y: string; color: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
        filter: 'blur(1px)',
        opacity: 0.6,
      }}
    />
  );
}

/* Animated 3D card with tilt on hover */
function ShowcaseCard({ title, description, index }: { title: string; description: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.15, ease: eliteEase }}
      whileHover={{ scale: 1.02, rotateY: 3, rotateX: -2 }}
      className="animated-border-wrapper cursor-pointer"
      style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
    >
      <div className="animated-border-inner p-10 md:p-14 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ background: `radial-gradient(circle at ${30 + index * 20}% 50%, hsl(var(--accent-warm)), transparent 60%)` }}
        />
        <span className="font-mono text-xs text-muted-foreground relative z-10">0{index + 1}</span>
        <div className="relative z-10">
          <h3 className="font-display text-foreground text-2xl md:text-3xl mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm font-body font-light leading-relaxed max-w-md">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

const showcaseItems = [
  { title: 'Scroll-Driven Narratives', description: 'Cinematic storytelling that unfolds as users scroll — transforming passive browsing into an immersive journey through your brand story.' },
  { title: 'WebGL & Three.js', description: 'Real-time 3D environments rendered directly in the browser. Product visualizations, interactive scenes, and spatial interfaces.' },
  { title: 'Micro-Interactions', description: 'The invisible details that separate good from extraordinary. Hover states, transitions, loading sequences, and feedback loops designed with obsessive care.' },
  { title: 'Product Visualization', description: 'Photorealistic 3D product renders and configurators that let customers experience your products in an entirely new dimension.' },
  { title: 'Lottie & SVG Animation', description: 'Lightweight vector animations that bring illustrations and icons to life. Perfect for storytelling without the performance cost.' },
  { title: 'Kinetic Typography', description: 'Text that moves, morphs, and reacts — turning your messaging into a dynamic visual experience that commands attention.' },
];

export default function ThreeDMotionPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <PageLayout>
      {/* Hero with floating orbs */}
      <section ref={heroRef} className="relative pt-40 pb-32 px-6 md:px-12 overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated floating orbs */}
        <motion.div style={{ scale: orbScale, opacity: orbOpacity }} className="absolute inset-0 pointer-events-none">
          <FloatingOrb delay={0} size={120} x="70%" y="15%" color="hsl(15 85% 55% / 0.5)" />
          <FloatingOrb delay={1.2} size={80} x="20%" y="60%" color="hsl(220 70% 55% / 0.5)" />
          <FloatingOrb delay={0.6} size={60} x="80%" y="70%" color="hsl(45 100% 65% / 0.4)" />
          <FloatingOrb delay={2} size={100} x="40%" y="20%" color="hsl(280 60% 55% / 0.3)" />
          <FloatingOrb delay={1.5} size={40} x="60%" y="50%" color="hsl(170 60% 50% / 0.4)" />
          <FloatingOrb delay={0.8} size={90} x="10%" y="30%" color="hsl(340 80% 55% / 0.3)" />
        </motion.div>

        {/* Animated grid lines */}
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
            className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed"
          >
            We create digital experiences that feel alive. From cinematic scroll-driven
            narratives to real-time 3D environments — we push the boundary of what's possible
            in a browser, rendering at a buttery 60fps.
          </motion.p>
        </div>
      </section>

      {/* Animated divider */}
      <div className="relative h-px mx-6 md:mx-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: eliteEase }}
          className="h-full bg-gradient-to-r from-transparent via-accent-warm/30 to-transparent origin-left"
        />
      </div>

      {/* Showcase grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: eliteEase }}
            className="font-display text-foreground text-3xl md:text-5xl mb-16"
          >
            What we <em className="text-gradient-warm">craft.</em>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {showcaseItems.map((item, i) => (
              <ShowcaseCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats / impact */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '60', unit: 'fps', label: 'Minimum render target' },
              { value: '<3', unit: 's', label: 'Time to interactive' },
              { value: '100', unit: '%', label: 'WebGL browser support' },
              { value: '∞', unit: '', label: 'Creative possibilities' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-4xl md:text-5xl text-foreground">{stat.value}</span>
                  <span className="font-mono text-xs text-accent-warm">{stat.unit}</span>
                </div>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto pt-16 border-t border-foreground/[0.06]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-foreground text-3xl md:text-5xl mb-6"
          >
            Ready for something <em className="text-gradient-warm">cinematic?</em>
          </motion.h2>
          <Link
            to="/contact"
            className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-8 py-3.5 hover:scale-105 transition-transform duration-500"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
