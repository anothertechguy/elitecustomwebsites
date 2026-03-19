import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

function BrowserMockup() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ['start end', 'end start'],
  });

  // As user scrolls, the image inside scrolls down (parallax)
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  // Subtle 3D tilt as it enters/exits viewport
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -4]);
  const browserY = useTransform(scrollYProgress, [0, 1], [30, -20]);

  return (
    <div
      ref={mockupRef}
      className="absolute top-4 right-4 md:top-6 md:right-8 w-[46%] md:w-[48%] h-[90%] flex items-center justify-center z-[5]"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full"
        style={{ rotateX, y: browserY, transformStyle: 'preserve-3d' }}
      >
        {/* Browser chrome frame */}
        <div
          className="rounded-xl overflow-hidden border border-white/[0.08]"
          style={{
            background: '#1c1c1e',
            boxShadow: '0 25px 80px -15px rgba(0,0,0,0.7), 0 0 40px -10px hsl(var(--accent-warm) / 0.08)',
          }}
        >
          {/* Title bar with traffic lights + URL bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.06]">
            {/* Traffic light buttons */}
            <div className="flex gap-1.5 shrink-0">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>

            {/* URL bar */}
            <div className="flex-1 mx-2 md:mx-4">
              <div className="bg-white/[0.06] rounded-md px-3 py-1 flex items-center gap-2">
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-40">
                  <path d="M8 1a5 5 0 00-5 5v2a2 2 0 00-1 1.73V13a2 2 0 002 2h8a2 2 0 002-2V9.73A2 2 0 0013 8V6a5 5 0 00-5-5zm3 5v2H5V6a3 3 0 016 0z" fill="white"/>
                </svg>
                <span className="font-mono text-[9px] md:text-[10px] text-white/40 truncate">drheavenlyforgeorgia.com</span>
              </div>
            </div>
          </div>

          {/* Viewport — clipped with scroll-linked content */}
          <div className="relative overflow-hidden" style={{ height: 'clamp(200px, 28vw, 380px)' }}>
            <motion.div style={{ y: imgY }} className="will-change-transform">
              <img
                src="/dr-heavenly-hero.png"
                alt="Dr. Heavenly For Georgia"
                className="w-full h-auto block"
              />
              <img
                src="/dr-heavenly-portrait.png"
                alt="Dr. Heavenly Portrait"
                className="w-full h-auto block"
              />
              <img
                src="/dr-heavenly-vocal.png"
                alt="Dr. Heavenly Leadership"
                className="w-full h-auto block"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Archive() {
  return (
    <section id="work" className="relative py-20 md:py-28 px-6 md:px-12">
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-accent-warm" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Selected Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Featured
          <br />
          <em className="text-gradient-warm">projects.</em>
        </motion.h2>

        {/* Project 1: Dr. Heavenly — hero showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="mb-6"
        >
          <div className="animated-border-wrapper">
            <div className="animated-border-inner">
              <a
                href="https://drheavenlyforgeorgia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer relative overflow-hidden"
              >
                {/* Large showcase area */}
                <div className="relative p-8 md:p-14 min-h-[400px] md:min-h-[500px] flex flex-col justify-between">
                  {/* Ambient gradient glow behind */}
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 70% 30%, hsl(var(--accent-warm)), transparent 60%), radial-gradient(ellipse at 20% 80%, hsl(var(--accent-cool)), transparent 60%)',
                    }}
                  />

                  {/* 3D Chrome browser mockup with scroll-linked content */}
                  <BrowserMockup />

                  {/* Top meta */}
                  <div className="relative z-10 flex items-center gap-4">
                    <span className="font-mono text-[10px] text-accent-warm tracking-[0.2em] uppercase">
                      Featured Case Study
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground tracking-[0.15em]">2026</span>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 mt-auto">
                    <div className="mb-6">
                      <span className="inline-block font-mono text-[9px] text-primary-foreground tracking-[0.15em] uppercase bg-accent-warm/90 rounded-full px-3 py-1 mb-4">
                        Political Campaign
                      </span>
                    </div>

                    <h3
                      className="font-display text-foreground mb-4 group-hover:translate-x-3 transition-transform duration-700"
                      style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95 }}
                    >
                      Dr. Heavenly
                      <br />
                      <em style={{ color: 'hsl(var(--accent-warm))' }}>For Georgia</em>
                    </h3>

                    <p className="text-muted-foreground text-sm font-body font-light leading-relaxed max-w-lg mb-6">
                      Full-spectrum digital identity and campaign platform for celebrity reality TV personality 
                      turned political leader. Custom animations, donor portal, and event management system.
                    </p>

                    <span className="inline-flex items-center gap-2 font-mono text-[10px] text-accent-warm tracking-[0.2em] uppercase group-hover:gap-4 transition-all duration-500">
                      View Live Site
                      <span className="text-sm">↗</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 2: Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: eliteEase }}
        >
          <div className="animated-border-wrapper">
            <div className="animated-border-inner">
              <div className="py-10 md:py-14 px-8 md:px-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                {/* Meta */}
                <div className="shrink-0 w-full md:w-40">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block">2026</span>
                  <span className="font-mono text-[10px] text-accent-cool tracking-[0.2em] uppercase block mt-1">Luxury Retail</span>
                </div>

                {/* Title */}
                <h3
                  className="font-display text-foreground whitespace-pre-line flex-1"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1 }}
                >
                  Building Now,
                  <br />
                  <em className="text-muted-foreground">Coming Soon</em>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-body font-light leading-relaxed max-w-xs">
                  An immersive luxury e-commerce experience currently in development. 
                  Details under strict NDA.
                </p>

                {/* Badge */}
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase border border-foreground/10 rounded-full px-4 py-2">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
