import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: eliteEase }}
          className="font-mono-ui text-muted-foreground mb-8"
        >
          Strictly by Invitation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: eliteEase }}
          className="font-display text-foreground leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 10rem)' }}
        >
          Digital Architecture
          <br />
          <span className="text-gradient-cobalt">for the 1%</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: eliteEase }}
          className="font-mono-ui text-muted-foreground mt-10 max-w-md mx-auto leading-relaxed"
          style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}
        >
          We don't build websites. We engineer digital legacies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: eliteEase }}
          className="mt-12 flex gap-6 justify-center"
        >
          <a
            href="#work"
            className="glass-surface-hover rounded-full px-8 py-4 font-mono-ui text-foreground cursor-pointer inline-block"
          >
            Enter the Archive
          </a>
          <a
            href="#contact"
            className="rounded-full px-8 py-4 font-mono-ui bg-primary text-primary-foreground glow-cobalt cursor-pointer inline-block"
          >
            Request Access
          </a>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
