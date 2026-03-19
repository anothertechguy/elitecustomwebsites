import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const steps = [
  {
    phase: 'Discovery',
    number: '01',
    description: 'Deep immersion into your vision, market, and competitive landscape. We dissect everything before designing anything.',
    duration: '1-2 Weeks',
  },
  {
    phase: 'Architecture',
    number: '02',
    description: 'Every pixel, interaction, and transition is blueprinted with surgical precision. Nothing is accidental.',
    duration: '2-3 Weeks',
  },
  {
    phase: 'Engineering',
    number: '03',
    description: 'Bespoke development using cutting-edge frameworks, 3D rendering engines, and performance-obsessive standards.',
    duration: '4-8 Weeks',
  },
  {
    phase: 'Launch & Evolve',
    number: '04',
    description: 'Deployment is merely the beginning. Continuous refinement, analytics, and evolution ensure lasting digital dominance.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28 px-6 md:px-12">
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-accent-glow" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">Process</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-24"
          style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1.05 }}
        >
          How the magic
          <br />
          <em className="italic" style={{ color: 'hsl(var(--accent-glow))' }}>unfolds.</em>
        </motion.h2>

        {/* Process grid — two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: eliteEase }}
            >
              <div className="animated-border-wrapper h-full">
                <div className="animated-border-inner p-8 md:p-12 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                    <span className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase border border-foreground/[0.06] rounded-full px-3 py-1">{step.duration}</span>
                  </div>

                  {/* Phase name */}
                  <h3 className="font-display text-foreground text-2xl md:text-3xl mb-4">
                    {step.phase}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed mt-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
