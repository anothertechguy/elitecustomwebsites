import { motion } from 'framer-motion';
import { Code2, Palette, Cpu, Shield } from 'lucide-react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const TEAM_MEMBERS = [
  {
    id: '01',
    name: 'Sean Richardson',
    role: 'Founder & Creative Director',
    pedigree: 'Ex-Big Tech',
    description: 'Full-stack architect with deep roots in enterprise systems. Leads every engagement personally, ensuring Silicon Valley–grade execution on every project.',
    icon: Code2,
  },
  {
    id: '02',
    name: 'Design Lead',
    role: 'Senior UX Architect',
    pedigree: 'Ex-Apple',
    description: 'Obsessive design thinker who spent years crafting interfaces at Apple. Brings uncompromising visual rigor and human-centered design thinking.',
    icon: Palette,
  },
  {
    id: '03',
    name: 'Engineering Lead',
    role: 'Principal Engineer',
    pedigree: 'Ex-Google',
    description: 'Performance-obsessed engineer with deep expertise in WebGL, 3D rendering, and high-throughput systems. Makes the impossible run at 60fps.',
    icon: Cpu,
  },
  {
    id: '04',
    name: 'Strategy Lead',
    role: 'Growth & Digital Strategy',
    pedigree: 'Ex-Meta',
    description: 'Data-driven strategist who has scaled products to billions of users. Brings a unique blend of creativity and analytical precision.',
    icon: Shield,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
};

export default function TeamTree() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12">
      <div className="divider mb-20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column — header */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-px bg-accent-cool" />
              <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">The Team</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: eliteEase }}
              className="font-display text-foreground mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Unparalleled
              <br />
              <em className="text-gradient-cool">pedigree.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm font-body font-light leading-relaxed"
            >
              We don't hire junior developers. Our tight-knit concierge firm 
              is comprised strictly of elite alumni from the world's most 
              demanding technology titans.
            </motion.p>
          </div>

          {/* Right column — team list */}
          <motion.div
            className="md:col-span-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group flex flex-col md:flex-row gap-6 md:gap-10 py-8 border-b border-foreground/[0.06] last:border-0"
              >
                {/* Number */}
                <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1">{member.id}</span>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-foreground text-xl group-hover:text-accent-warm transition-colors duration-500">
                      {member.name}
                    </h3>
                    <span className="font-mono text-[9px] text-accent-cool tracking-[0.15em] uppercase border border-accent-cool/20 rounded-full px-2.5 py-0.5">
                      {member.pedigree}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-muted-foreground tracking-[0.15em] uppercase mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed max-w-lg">{member.description}</p>
                </div>

                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-full border border-foreground/[0.06] flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <member.icon size={16} strokeWidth={1.5} className="text-foreground" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
