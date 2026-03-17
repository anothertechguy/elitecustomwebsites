import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const steps = [
  {
    phase: 'Discovery',
    description: 'We dissect your vision, market position, and competitive landscape to establish an unassailable strategic foundation.',
    number: '01',
  },
  {
    phase: 'Architecture',
    description: 'Every pixel, interaction, and transition is blueprinted with surgical precision before a single line of code is written.',
    number: '02',
  },
  {
    phase: 'Engineering',
    description: 'Bespoke development using cutting-edge frameworks, 3D rendering, and performance-obsessive engineering standards.',
    number: '03',
  },
  {
    phase: 'Deployment',
    description: 'Launch is merely the beginning. Continuous refinement, analytics, and evolution ensure lasting digital dominance.',
    number: '04',
  },
];

export default function Process() {
  return (
    <section className="py-[20vh] px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-ui text-muted-foreground mb-6"
        >
          Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: eliteEase }}
          className="font-display text-foreground mb-20"
          style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', lineHeight: 0.95 }}
        >
          Methodology
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-16 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: eliteEase }}
                className="pl-8 md:pl-28 relative"
              >
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-16 top-2 w-2 h-2 rounded-full bg-cobalt -translate-x-[3px]" />

                <p className="font-mono-ui text-cobalt mb-3" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {step.number}
                </p>
                <h3 className="font-display text-foreground text-2xl md:text-4xl mb-4">{step.phase}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
