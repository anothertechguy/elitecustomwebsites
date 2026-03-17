import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Ambient color blobs */}
      <div className="blob blob-violet w-[600px] h-[600px] -top-40 -right-40 animate-drift" />
      <div className="blob blob-magenta w-[500px] h-[500px] bottom-0 -left-40 animate-drift" style={{ animationDelay: '-7s' }} />
      <div className="blob blob-coral w-[400px] h-[400px] top-1/3 right-1/4 animate-pulse-glow" />

      <HeroScene />

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: eliteEase }}
          className="font-mono-ui text-violet mb-8 tracking-[0.2em]"
        >
          ✦ Strictly by Invitation ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: eliteEase }}
          className="font-display text-foreground leading-[0.88]"
          style={{ fontSize: 'clamp(3rem, 9vw, 11rem)' }}
        >
          Digital
          <br />
          <span className="text-gradient-rainbow">Architecture</span>
          <br />
          for the 1%
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: eliteEase }}
          className="text-muted-foreground mt-10 max-w-lg mx-auto text-base leading-relaxed"
        >
          We don't build websites. We engineer digital legacies that 
          <span className="text-coral"> ignite</span>, 
          <span className="text-violet"> captivate</span>, and 
          <span className="text-amber"> endure</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: eliteEase }}
          className="mt-14 flex gap-5 justify-center flex-wrap"
        >
          <a
            href="#story"
            className="rounded-full px-8 py-4 font-mono-ui bg-primary text-primary-foreground glow-violet cursor-pointer inline-block transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_-10px_hsl(265_90%_65%_/_0.6)]"
          >
            Our Story
          </a>
          <a
            href="#contact"
            className="glass-violet rounded-full px-8 py-4 font-mono-ui text-foreground cursor-pointer inline-block transition-all duration-500 hover:scale-105"
          >
            Request Access
          </a>
        </motion.div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
