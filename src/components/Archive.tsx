import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Meridian Capital',
    category: 'Brand Identity / Web Platform',
    year: '2025',
    color: 'hsl(230 80% 60% / 0.15)',
  },
  {
    title: 'Voss Atelier',
    category: 'E-Commerce / 3D Experience',
    year: '2025',
    color: 'hsl(142 70% 55% / 0.15)',
  },
  {
    title: 'Nexus Protocol',
    category: 'Web3 / Interactive Dashboard',
    year: '2024',
    color: 'hsl(280 70% 55% / 0.15)',
  },
  {
    title: 'Horizon Labs',
    category: 'Product Design / Motion',
    year: '2024',
    color: 'hsl(230 80% 60% / 0.15)',
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
    <section id="work" ref={containerRef} style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-ui text-muted-foreground absolute top-8 left-6 md:left-12 z-10"
        >
          Selected Work
        </motion.p>

        <motion.div style={{ x }} className="flex">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="w-screen h-screen flex items-center justify-center px-6 md:px-24 shrink-0"
            >
              <motion.div
                initial={{ opacity: 0, filter: 'blur(20px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="glass-surface w-full max-w-5xl aspect-[16/10] relative flex flex-col justify-end p-8 md:p-14 overflow-hidden cursor-pointer group"
              >
                {/* Colored glow background */}
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 30% 70%, ${project.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <p className="font-mono-ui text-muted-foreground mb-2">
                    {project.year} — {project.category}
                  </p>
                  <h3
                    className="font-display text-foreground"
                    style={{ fontSize: 'clamp(2rem, 5vw, 6rem)', lineHeight: 0.95 }}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="absolute top-8 right-8 md:top-14 md:right-14 font-mono-ui text-muted-foreground z-10">
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
