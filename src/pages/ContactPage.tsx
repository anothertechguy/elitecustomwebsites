import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="pt-40 pb-20 px-6 md:px-12 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Ambient glow */}
          <div
            className="fixed top-1/3 right-1/4 w-[500px] h-[500px] pointer-events-none opacity-[0.04] -z-10"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent-warm)), transparent 70%)' }}
          />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-warm" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.95 }}
          >
            Let's start
            <br />
            <em className="text-gradient-warm">something.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg font-body font-light max-w-xl leading-relaxed mb-16"
          >
            Whether you're launching a new brand, reimagining an existing one, or need
            a digital experience that commands attention — we'd love to hear from you.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: eliteEase }}
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-2">Project details</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full md:w-auto font-body text-sm text-primary-foreground bg-foreground rounded-full px-8 py-3.5 hover:scale-[1.02] transition-transform duration-500"
              >
                Send Inquiry
              </button>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, ease: eliteEase }}
              className="flex flex-col gap-10"
            >
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Email</h3>
                <a href="mailto:hello@elitecustomwebsites.com" className="font-body text-foreground text-lg font-light hover:text-accent-warm transition-colors duration-300">
                  hello@elitecustomwebsites.com
                </a>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Response Time</h3>
                <p className="font-body text-foreground text-lg font-light">Within 24 hours</p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Availability</h3>
                <p className="font-body text-foreground text-lg font-light">Currently accepting 2 new projects</p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Social</h3>
                <div className="flex gap-6">
                  {['Twitter', 'LinkedIn', 'Dribbble'].map((s) => (
                    <span key={s} className="font-body text-foreground/60 text-sm font-light hover:text-foreground transition-colors duration-300 cursor-pointer">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
