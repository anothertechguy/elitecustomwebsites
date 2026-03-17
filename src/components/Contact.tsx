import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-[20vh] px-6 md:px-12 overflow-hidden">
      {/* Massive ambient blobs for the finale */}
      <div className="blob blob-violet w-[800px] h-[800px] top-0 left-1/4 animate-drift" />
      <div className="blob blob-magenta w-[600px] h-[600px] bottom-20 right-1/4 animate-drift" style={{ animationDelay: '-12s' }} />
      <div className="blob blob-coral w-[500px] h-[500px] top-1/3 -right-40 animate-pulse-glow" />
      <div className="blob blob-cyan w-[400px] h-[400px] bottom-40 -left-40 animate-pulse-glow" style={{ animationDelay: '-6s' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />
          <span className="font-mono-ui text-violet tracking-[0.2em]">Chapter 05</span>
          <div className="w-12 h-px bg-gradient-to-r from-violet via-transparent to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: eliteEase }}
          className="font-display text-foreground mb-8"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 9rem)', lineHeight: 0.88 }}
        >
          Ready to build
          <br />
          something
          <br />
          <span className="text-gradient-rainbow">extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-base max-w-md mx-auto mb-14 leading-relaxed"
        >
          We accept a limited number of engagements each quarter.
          Share your vision and we will determine if there is alignment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, ease: eliteEase }}
          className="flex gap-5 justify-center flex-wrap"
        >
          <a
            href="mailto:hello@elitecustom.dev"
            className="rounded-full px-10 py-5 font-mono-ui text-primary-foreground cursor-pointer inline-block transition-all duration-500 hover:scale-105 hover:shadow-[0_0_100px_-10px_hsl(265_90%_65%_/_0.5)]"
            style={{
              background: 'linear-gradient(135deg, hsl(265 90% 65%), hsl(340 85% 60%), hsl(15 90% 62%))',
            }}
          >
            Request Access
          </a>
          <a
            href="mailto:hello@elitecustom.dev"
            className="glass-violet rounded-full px-10 py-5 font-mono-ui text-foreground cursor-pointer inline-block transition-all duration-500 hover:scale-105"
          >
            View Process
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-[20vh] pt-8 relative z-10 border-t border-foreground/[0.06] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-mono-ui text-muted-foreground">
          © 2026 Elite Custom Websites
        </p>
        <div className="flex gap-8">
          {['Twitter', 'LinkedIn', 'Dribbble'].map((link) => (
            <span key={link} className="font-mono-ui text-muted-foreground cursor-pointer hover:text-violet transition-colors duration-500">
              {link}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
