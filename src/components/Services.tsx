import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const services = [
  {
    title: 'Brand\nSystems',
    description: 'Visual identity engineered for market dominance. From logo architecture to comprehensive design languages that speak before words do.',
    glass: 'glass-violet',
    gradientText: 'text-gradient-ocean',
    blob: 'blob-violet',
    span: 'md:col-span-7 md:row-span-2',
    big: true,
  },
  {
    title: 'Digital\nProducts',
    description: 'Applications that redefine user expectations. Precision-crafted interfaces with obsessive attention.',
    glass: 'glass-magenta',
    gradientText: 'text-gradient-sunset',
    blob: 'blob-magenta',
    span: 'md:col-span-5',
    big: false,
  },
  {
    title: 'WebGL\n& 3D',
    description: 'Immersive spatial experiences on cutting-edge rendering technology.',
    glass: 'glass-cyan',
    gradientText: 'text-gradient-aurora',
    blob: 'blob-cyan',
    span: 'md:col-span-5',
    big: false,
  },
  {
    title: 'Strategic\nConsulting',
    description: 'Digital transformation for organizations that refuse to be ordinary. Vision to execution.',
    glass: 'glass-coral',
    gradientText: 'text-gradient-sunset',
    blob: 'blob-coral',
    span: 'md:col-span-6',
    big: false,
  },
  {
    title: 'Motion\nDesign',
    description: 'Kinetic storytelling that commands attention and communicates with visceral impact.',
    glass: 'glass-amber',
    gradientText: 'text-gradient-rainbow',
    blob: 'blob-amber',
    span: 'md:col-span-6',
    big: false,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: eliteEase }}
      whileHover={{ scale: 0.97, transition: { duration: 0.4, ease: eliteEase } }}
      className={`${service.span} ${service.glass} relative overflow-hidden rounded-lg cursor-pointer group ${service.big ? 'min-h-[400px]' : 'min-h-[240px]'} p-8 md:p-10 flex flex-col justify-end`}
    >
      {/* Animated background blob */}
      <div className={`blob ${service.blob} w-[300px] h-[300px] -top-20 -right-20 group-hover:scale-150 transition-transform duration-1000`} />
      
      {/* Hover glow line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10">
        <p className="font-mono-ui text-muted-foreground mb-4">0{index + 1}</p>
        <h3
          className={`font-display ${service.gradientText} mb-4 whitespace-pre-line`}
          style={{ fontSize: service.big ? 'clamp(2.5rem, 4vw, 4.5rem)' : 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 0.95 }}
        >
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="relative py-[15vh] px-6 md:px-12 overflow-hidden">
      <div className="blob blob-violet w-[700px] h-[700px] top-1/4 -right-80 animate-pulse-glow" />
      <div className="blob blob-lime w-[400px] h-[400px] bottom-20 -left-40 animate-drift" style={{ animationDelay: '-5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: eliteEase }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-px bg-gradient-to-r from-violet to-cyan" />
          <span className="font-mono-ui text-violet tracking-[0.2em]">Chapter 02</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', lineHeight: 0.95 }}
        >
          What we
          <br />
          <span className="text-gradient-aurora">bring to life</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
