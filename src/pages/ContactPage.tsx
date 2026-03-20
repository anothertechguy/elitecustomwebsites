import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const faqs = [
  { q: 'What happens after I fill out the form?', a: 'You\'ll receive a response within 24 hours — usually much sooner. We\'ll schedule a 30-minute discovery call to discuss your vision, timeline, and budget. After the call, we\'ll send a detailed proposal within 48 hours.' },
  { q: 'What should I prepare before reaching out?', a: 'Nothing formal is required. But it helps to have a rough idea of: what you want to build, your timeline expectations, your budget range, and any websites you admire. Don\'t worry about having everything figured out — that\'s what the discovery call is for.' },
  { q: 'Do you offer free consultations?', a: 'Yes. The initial 30-minute discovery call is always complimentary. We use this time to understand your vision, assess fit, and provide a preliminary recommendation — no obligation.' },
  { q: 'What are your typical rates?', a: 'Our projects range from $8,000 for focused landing pages to $75,000+ for complex web applications. Digital strategy retainers start at $3,000/month. We provide transparent, detailed proposals so you know exactly what you\'re investing in.' },
];

const trustSignals = [
  { title: 'Direct Communication', desc: 'No account managers or middlemen. You speak directly with the senior engineers and designers building your project.' },
  { title: '24-Hour Response', desc: 'Every inquiry receives a thoughtful response within one business day. We value your time as much as we value ours.' },
  { title: 'Transparent Pricing', desc: 'Detailed proposals with clear scope, timeline, and cost breakdowns. No hidden fees. No scope creep surprises.' },
  { title: 'NDA-Ready', desc: 'We\'re prepared to sign an NDA before the first conversation. Your ideas and business information are always protected.' },
];

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
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
            style={{ fontSize: 'clamp(2.5rem, 7vw, 8rem)', lineHeight: 0.9 }}
          >
            Let's start
            <br />
            <em className="text-gradient-warm">something.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-2xl leading-relaxed mb-16"
          >
            Whether you're launching a new brand, reimagining an existing one, or need
            a digital experience that commands attention — we'd love to hear from you.
            Every great project starts with a conversation.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, ease: eliteEase }}
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-3">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 placeholder:text-foreground/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-3">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 placeholder:text-foreground/20"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-3">Company / Brand</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 placeholder:text-foreground/20"
                  placeholder="Your brand or company"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-3">Service Interest</label>
                <select className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 appearance-none cursor-pointer">
                  <option value="" className="bg-background">Select a service</option>
                  <option value="web" className="bg-background">Web Development</option>
                  <option value="brand" className="bg-background">Brand Identity</option>
                  <option value="3d" className="bg-background">3D & Motion</option>
                  <option value="strategy" className="bg-background">Digital Strategy</option>
                  <option value="full" className="bg-background">Full-Service (Multiple)</option>
                  <option value="other" className="bg-background">Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-3">Budget Range</label>
                <select className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 appearance-none cursor-pointer">
                  <option value="" className="bg-background">Select a range</option>
                  <option value="8-15k" className="bg-background">$8,000 – $15,000</option>
                  <option value="15-30k" className="bg-background">$15,000 – $30,000</option>
                  <option value="30-50k" className="bg-background">$30,000 – $50,000</option>
                  <option value="50k+" className="bg-background">$50,000+</option>
                  <option value="retainer" className="bg-background">Monthly retainer</option>
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase block mb-3">Project Details *</label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground font-body font-light focus:outline-none focus:border-accent-warm transition-colors duration-500 resize-none placeholder:text-foreground/20"
                  placeholder="Tell us about your vision, goals, and timeline..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full font-body text-sm text-primary-foreground bg-foreground rounded-full px-8 py-4 transition-all duration-500"
              >
                Send Inquiry →
              </motion.button>
            </motion.form>

            {/* Contact info + trust signals */}
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
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Phone</h3>
                <span className="font-body text-foreground text-lg font-light">Available upon request</span>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Response Time</h3>
                <p className="font-body text-foreground text-lg font-light">Within 24 hours</p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">Availability</h3>
                <p className="font-body text-foreground text-lg font-light">Currently accepting 2 new projects</p>
              </div>

              {/* Trust signals */}
              <div className="mt-6 pt-8 border-t border-foreground/[0.06]">
                <h3 className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-6">Why Clients Trust Us</h3>
                <div className="flex flex-col gap-5">
                  {trustSignals.map((signal, i) => (
                    <motion.div
                      key={signal.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="border-l-2 border-accent-warm/30 pl-4"
                    >
                      <h4 className="font-body text-foreground text-sm font-medium mb-1">{signal.title}</h4>
                      <p className="text-muted-foreground text-xs font-body font-light leading-relaxed">{signal.desc}</p>
                    </motion.div>
                  ))}
                </div>
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

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-16">
            Before you <em className="text-gradient-warm">reach out.</em>
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

      {/* Services quick links */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="divider mb-20" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-foreground text-3xl md:text-5xl mb-12">
            Explore our <em className="text-gradient-warm">services.</em>
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Web Development', href: '/services/web-development' },
              { label: 'Brand Identity', href: '/services/brand-identity' },
              { label: '3D & Motion', href: '/services/3d-motion' },
              { label: 'Digital Strategy', href: '/services/digital-strategy' },
            ].map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={svc.href} className="block border border-foreground/[0.06] rounded-lg px-6 py-5 hover:border-accent-warm/30 transition-colors duration-500 group">
                  <span className="font-body text-foreground text-sm group-hover:text-accent-warm transition-colors duration-300">{svc.label} →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
