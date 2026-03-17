import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const services = [
  {
    title: 'Brand Systems',
    description: 'Visual identity engineered for market dominance. From logo architecture to comprehensive design languages.',
    span: 'col-span-12 md:col-span-7',
    accent: 'cobalt',
  },
  {
    title: 'Digital Products',
    description: 'Applications that redefine user expectations. Precision-crafted interfaces with obsessive attention to detail.',
    span: 'col-span-12 md:col-span-5',
    accent: 'lime',
  },
  {
    title: 'WebGL & 3D',
    description: 'Immersive spatial experiences built on cutting-edge rendering technology.',
    span: 'col-span-12 md:col-span-4',
    accent: 'lime',
  },
  {
    title: 'Strategic Consulting',
    description: 'Digital transformation for organizations that refuse to be ordinary.',
    span: 'col-span-12 md:col-span-4',
    accent: 'cobalt',
  },
  {
    title: 'Motion Design',
    description: 'Kinetic storytelling that commands attention and communicates with visceral impact.',
    span: 'col-span-12 md:col-span-4',
    accent: 'cobalt',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: eliteEase }}
      whileHover={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${service.span} glass-surface-hover relative overflow-hidden p-8 md:p-10 cursor-pointer group min-h-[200px] flex flex-col justify-end`}
    >
      {/* Mouse spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: service.accent === 'cobalt'
              ? 'radial-gradient(circle, hsl(230 80% 60% / 0.12), transparent 70%)'
              : 'radial-gradient(circle, hsl(142 70% 55% / 0.12), transparent 70%)',
          }}
        />
      )}

      <div className="relative z-10">
        <p className="font-mono-ui text-muted-foreground mb-3">0{index + 1}</p>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-[20vh] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-ui text-muted-foreground mb-6"
        >
          Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: eliteEase }}
          className="font-display text-foreground mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', lineHeight: 0.95 }}
        >
          Capabilities
        </motion.h2>

        <div className="grid grid-cols-12 gap-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
