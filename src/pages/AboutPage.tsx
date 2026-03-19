import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Code2, Palette, Globe, Shield, Zap, Users } from 'lucide-react';

const eliteEase = [0.23, 1, 0.32, 1] as const;

const team = [
  { id: '01', name: 'Sean Carter', role: 'Founder & Lead Engineer', pedigree: 'Ex-Amazon', icon: Code2, bio: 'Full-stack architect with a decade of experience building at scale.' },
  { id: '02', name: 'Creative Director', role: 'Brand & Visual', pedigree: 'Ex-Apple', icon: Palette, bio: 'Design leadership with a portfolio spanning luxury fashion to fintech.' },
  { id: '03', name: 'Lead Developer', role: 'Frontend Architecture', pedigree: 'Ex-Google', icon: Globe, bio: 'Specializing in performant, accessible web applications.' },
  { id: '04', name: 'Strategy Lead', role: 'Growth & Analytics', pedigree: 'Ex-Meta', icon: Zap, bio: 'Data-driven marketing with a focus on luxury brand positioning.' },
];

const values = [
  { title: 'Obsessive Quality', description: 'Every pixel, every interaction, every word is deliberate. We don\'t ship "good enough."' },
  { title: 'Silicon Valley DNA', description: 'Our team comes from the world\'s most demanding engineering organizations. We bring that rigor to every project.' },
  { title: 'Luxury Without Ego', description: 'World-class at an honest price. No inflated agency overhead. No unnecessary layers of management.' },
  { title: 'Results, Not Awards', description: 'We measure success by your growth metrics, conversion rates, and customer sentiment — not industry trophies.' },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-accent-cool" />
            <span className="font-mono text-[11px] text-muted-foreground tracking-[0.25em] uppercase">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: eliteEase }}
            className="font-display text-foreground mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.95 }}
          >
            Built different.
            <br />
            <em className="text-gradient-cool">By design.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg font-body font-light max-w-2xl leading-relaxed mb-24"
          >
            We're not a 200-person agency. We're a curated collective of former Big Tech engineers
            and luxury-grade designers who left the corporate world to build something better —
            elite digital experiences at an honest price.
          </motion.p>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-6 mb-32">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: eliteEase }}
                className="animated-border-wrapper"
              >
                <div className="animated-border-inner p-8 md:p-10">
                  <h3 className="font-display text-foreground text-xl mb-3">{val.title}</h3>
                  <p className="text-muted-foreground text-sm font-body font-light leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <div className="border-t border-foreground/[0.06] pt-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-foreground text-3xl md:text-5xl mb-16"
            >
              The <em className="text-gradient-warm">team.</em>
            </motion.h2>

            <div className="flex flex-col">
              {team.map((member, i) => {
                const Icon = member.icon;
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, ease: eliteEase }}
                    className="py-10 border-t border-foreground/[0.06] flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
                  >
                    <span className="font-mono text-xs text-muted-foreground w-8">{member.id}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-foreground text-xl">{member.name}</h3>
                        <span className="font-mono text-[9px] text-accent-warm tracking-[0.15em] uppercase border border-accent-warm/20 rounded-full px-2.5 py-0.5">{member.pedigree}</span>
                      </div>
                      <p className="text-muted-foreground text-sm font-body font-light">{member.bio}</p>
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground tracking-wide shrink-0">{member.role}</span>
                    <Icon className="w-5 h-5 text-muted-foreground shrink-0" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 pt-16 border-t border-foreground/[0.06]"
          >
            <h2 className="font-display text-foreground text-3xl md:text-4xl mb-6">
              Let's build something <em className="text-gradient-warm">extraordinary.</em>
            </h2>
            <Link
              to="/contact"
              className="inline-block font-body text-sm text-primary-foreground bg-foreground rounded-full px-8 py-3.5 hover:scale-105 transition-transform duration-500"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
