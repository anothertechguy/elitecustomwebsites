import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

// Words that cycle in the subtitle
const cycleWords = ['websites', 'identities', 'experiences', 'legacies'];

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cycleWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent-warm)), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[90vw] md:max-w-6xl mx-auto px-6">
        {/* Pre-headline tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: eliteEase }}
          className="mb-8"
        >
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.3em] uppercase">
            Digital Agency — Est. 2026
          </span>
        </motion.div>

        {/* Main headline — cinematic serif */}
        <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: eliteEase }}
            className="font-display text-foreground leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 11rem)' }}
          >
            We build digital
            <br />
            <span className="italic text-gradient-warm">
              {cycleWords[wordIndex]}
            </span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div style={{ y: subtitleY, opacity: headlineOpacity }}>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: eliteEase }}
            className="mt-10 text-muted-foreground text-base md:text-lg font-body font-light max-w-xl leading-relaxed"
          >
            A concierge digital studio for visionaries, celebrities, and brands 
            that demand nothing less than extraordinary. Former Big Tech. 
            Obsessive craft.
          </motion.p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: eliteEase }}
          className="mt-12 flex gap-5 flex-wrap"
        >
          <a
            href="#work"
            className="font-body text-sm text-primary-foreground bg-foreground rounded-full px-8 py-3.5 hover:scale-105 transition-transform duration-500"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="font-body text-sm text-foreground border border-foreground/20 rounded-full px-8 py-3.5 hover:border-foreground/60 transition-all duration-500"
          >
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  );
}
