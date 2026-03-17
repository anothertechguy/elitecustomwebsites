import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const projects = [
  {
    title: 'Meridian Capital',
    category: 'Brand Identity / Web Platform',
    year: '2025',
    gradient: 'from-violet/20 via-cobalt/10 to-transparent',
    accent: 'text-violet',
    borderColor: 'border-violet/20',
  },
  {
    title: 'Voss Atelier',
    category: 'E-Commerce / 3D Experience',
    year: '2025',
    gradient: 'from-magenta/20 via-coral/10 to-transparent',
    accent: 'text-magenta',
    borderColor: 'border-magenta/20',
  },
  {
    title: 'Nexus Protocol',
    category: 'Web3 / Interactive Dashboard',
    year: '2024',
    gradient: 'from-cyan/20 via-lime/10 to-transparent',
    accent: 'text-cyan',
    borderColor: 'border-cyan/20',
  },
  {
    title: 'Horizon Labs',
    category: 'Product Design / Motion',
    year: '2024',
    gradient: 'from-amber/20 via-coral/10 to-transparent',
    accent: 'text-amber',
    borderColor: 'border-amber/20',
  },
];

export default function Archive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(projects.length - 1) * 100}vw`]);

  return (
    <section id="work" ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Big blobs */}
        <div className="blob blob-magenta w-[600px] h-[600px] top-10 left-1/3 animate-pulse-glow" />
        <div className="blob blob-cyan w-[500px] h-[500px] bottom-20 right-1/4 animate-drift" style={{ animationDelay: '-8s' }} />

        {/* Chapter label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-4"
        >
          <div className="w-12 h-px bg-gradient-to-r from-coral to-amber" />
          <span className="font-mono-ui text-coral tracking-[0.2em]">Chapter 03 — Selected Work</span>
        </motion.div>

        <motion.div style={{ x }} className="flex">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="w-screen h-screen flex items-center justify-center px-6 md:px-24 shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, filter: 'blur(30px)', scale: 0.9 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: eliteEase }}
                className={`w-full max-w-5xl aspect-[16/10] relative flex flex-col justify-end p-8 md:p-14 overflow-hidden cursor-pointer group rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.gradient}`}
                style={{ backdropFilter: 'blur(20px)' }}
              >
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-foreground/[0.03] to-transparent" />

                <div className="relative z-10">
                  <p className={`font-mono-ui ${project.accent} mb-3 tracking-[0.15em]`}>
                    {project.year} — {project.category}
                  </p>
                  <h3
                    className="font-display text-foreground group-hover:text-gradient-rainbow transition-all duration-500"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.9 }}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className={`absolute top-8 right-8 md:top-14 md:right-14 font-mono-ui ${project.accent} z-10 text-2xl font-display`}>
                  0{i + 1}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
