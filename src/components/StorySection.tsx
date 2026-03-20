import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function StorySection() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-6 md:px-12">
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-16">
          <div className="w-10 h-px bg-accent-warm" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">About</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-foreground leading-[1.05]" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
              Exceptional quality.
              <br />
              <em className="text-gradient-warm">Delivered in a week.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: eliteEase }}
            className="md:col-span-5 flex flex-col justify-end"
          >
            <p className="text-muted-foreground text-base font-body font-light leading-relaxed mb-6">
              We're a close-knit team of industry veterans who left the corporate world
              to build a more personal studio. We skip the bloated teams and months-long timelines.
            </p>
            <p className="text-muted-foreground text-base font-body font-light leading-relaxed">
              You get our undivided expertise, obsessive craft, and a stunning 
              finished product in just 7 days—for significantly less than typical digital agencies.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-foreground/[0.06]">
          {[
            { number: '7', label: 'Days to launch' },
            { number: '50%', label: 'Less than typical agencies' },
            { number: '40+', label: 'Years combined expertise' },
            { number: '100%', label: 'Referral-based growth' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: eliteEase }}
            >
              <span className="font-display text-3xl md:text-4xl text-foreground">{stat.number}</span>
              <p className="text-muted-foreground text-xs font-mono mt-2 tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
