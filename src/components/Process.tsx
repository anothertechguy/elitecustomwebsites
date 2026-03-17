import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const steps = [
  {
    phase: 'Discovery',
    description: 'We dissect your vision, market position, and competitive landscape to establish an unassailable strategic foundation.',
    number: '01',
    color: 'violet',
    gradient: 'text-gradient-ocean',
    blobClass: 'blob-violet',
  },
  {
    phase: 'Architecture',
    description: 'Every pixel, interaction, and transition is blueprinted with surgical precision before a single line of code is written.',
    number: '02',
    color: 'magenta',
    gradient: 'text-gradient-sunset',
    blobClass: 'blob-magenta',
  },
  {
    phase: 'Engineering',
    description: 'Bespoke development using cutting-edge frameworks, 3D rendering, and performance-obsessive engineering standards.',
    number: '03',
    color: 'cyan',
    gradient: 'text-gradient-aurora',
    blobClass: 'blob-cyan',
  },
  {
    phase: 'Launch',
    description: 'Deployment is merely the beginning. Continuous refinement, analytics, and evolution ensure lasting digital dominance.',
    number: '04',
    color: 'amber',
    gradient: 'text-gradient-rainbow',
    blobClass: 'blob-amber',
  },
];

export default function Process() {
  return (
    <section className="relative py-[15vh] px-6 md:px-12 overflow-hidden">
      <div className="blob blob-coral w-[600px] h-[600px] top-1/3 -right-60 animate-drift" />
      <div className="blob blob-lime w-[400px] h-[400px] bottom-40 -left-40 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-gradient-to-r from-cyan to-lime" />
          <span className="font-mono-ui text-cyan tracking-[0.2em]">Chapter 04</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-24"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', lineHeight: 0.95 }}
        >
          How the
          <br />
          <span className="text-gradient-aurora">magic unfolds</span>
        </motion.h2>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: eliteEase }}
              className="relative group"
            >
              {/* Divider line */}
              <div className={`h-px bg-gradient-to-r from-${step.color}/30 via-${step.color}/10 to-transparent`} />
              
              <div className="py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 relative overflow-hidden">
                {/* Hover blob */}
                <div className={`blob ${step.blobClass} w-[300px] h-[300px] top-0 left-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 shrink-0">
                  <span
                    className={`font-display ${step.gradient}`}
                    style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}
                  >
                    {step.number}
                  </span>
                </div>

                <div className="relative z-10 flex-1">
                  <h3
                    className="font-display text-foreground mb-3 group-hover:text-gradient-rainbow transition-colors duration-500"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: 1 }}
                  >
                    {step.phase}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-xl">{step.description}</p>
                </div>

                <div className="relative z-10 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <span className={`font-mono-ui text-${step.color}`}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Final divider */}
          <div className="h-px bg-gradient-to-r from-amber/30 via-amber/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
