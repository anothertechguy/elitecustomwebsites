import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function StorySection() {
  return (
    <section id="story" className="relative py-[15vh] px-6 md:px-12 overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob-cyan w-[500px] h-[500px] top-20 -left-60 animate-drift" />
      <div className="blob blob-amber w-[400px] h-[400px] bottom-0 right-10 animate-drift" style={{ animationDelay: '-10s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: eliteEase }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-px bg-gradient-to-r from-magenta to-coral" />
          <span className="font-mono-ui text-magenta tracking-[0.2em]">Chapter 01</span>
        </motion.div>

        {/* Big storytelling headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-16"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.95 }}
        >
          Every pixel is a
          <br />
          <span className="text-gradient-sunset">conscious decision</span>
        </motion.h2>

        {/* Two column storytelling */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: eliteEase }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We began as three obsessive designers who believed the internet deserved better. 
              Not more websites — better <span className="text-coral font-medium">experiences</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we are the silent force behind digital presences that move markets, 
              shape perceptions, and build <span className="text-amber font-medium">legacies</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: eliteEase }}
            className="flex flex-col gap-8"
          >
            {[
              { number: '147', label: 'Digital Legacies Built', color: 'text-violet' },
              { number: '$2.8B', label: 'Client Valuation Represented', color: 'text-coral' },
              { number: '12', label: 'Accepted Per Year', color: 'text-amber' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: eliteEase }}
                className="flex items-baseline gap-4"
              >
                <span className={`font-display text-4xl md:text-5xl ${stat.color}`}>{stat.number}</span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
