import { motion } from 'framer-motion';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="py-[20vh] px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono-ui text-muted-foreground mb-8"
        >
          Begin
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: eliteEase }}
          className="font-display text-foreground mb-10"
          style={{ fontSize: 'clamp(2rem, 6vw, 8rem)', lineHeight: 0.9 }}
        >
          Ready to build
          <br />
          <span className="text-gradient-cobalt">something extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-sm max-w-md mx-auto mb-12 leading-relaxed"
        >
          We accept a limited number of engagements each quarter.
          Share your vision and we will determine if there is alignment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, ease: eliteEase }}
        >
          <a
            href="mailto:hello@elitecustom.dev"
            className="rounded-full px-10 py-5 font-mono-ui bg-primary text-primary-foreground glow-cobalt cursor-pointer inline-block transition-transform duration-300 hover:scale-105"
          >
            Request Access
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-[20vh] pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono-ui text-muted-foreground">
          © 2026 Elite Custom Websites
        </p>
        <div className="flex gap-8 font-mono-ui text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground transition-colors duration-300">Twitter</span>
          <span className="cursor-pointer hover:text-foreground transition-colors duration-300">LinkedIn</span>
          <span className="cursor-pointer hover:text-foreground transition-colors duration-300">Dribbble</span>
        </div>
      </div>
    </section>
  );
}
