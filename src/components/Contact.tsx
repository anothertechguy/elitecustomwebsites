import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 md:px-12">
      <div className="divider mb-20" />

      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent-warm)), transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="w-10 h-px bg-accent-warm" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Contact</span>
          <div className="w-10 h-px bg-accent-warm" />
        </motion.div>

        {/* Big CTA headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: eliteEase }}
          className="font-display text-foreground mb-10"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.95 }}
        >
          Let's build something
          <br />
          <em className="text-gradient-warm">extraordinary.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-base font-body font-light max-w-md mx-auto mb-14 leading-relaxed"
        >
          We accept a limited number of engagements each quarter.
          Share your vision and we'll determine if there's alignment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ease: eliteEase }}
          className="flex gap-5 justify-center flex-wrap"
        >
          <a
            href="mailto:hello@elitecustom.dev"
            className="font-body text-sm text-primary-foreground bg-foreground rounded-full px-10 py-4 hover:scale-105 transition-transform duration-500"
          >
            Request Access
          </a>
          <a
            href="mailto:hello@elitecustom.dev"
            className="font-body text-sm text-foreground border border-foreground/20 rounded-full px-10 py-4 hover:border-foreground/60 transition-all duration-500"
          >
            View Process
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 relative z-10 border-t border-foreground/[0.06] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
          © 2026 Elite Custom Websites
        </p>
        <div className="flex gap-8">
          {['Twitter', 'LinkedIn', 'Dribbble'].map((link) => (
            <span
              key={link}
              className="font-mono text-[11px] text-muted-foreground tracking-wide cursor-pointer hover:text-foreground transition-colors duration-500"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
