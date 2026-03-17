import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
      style={{ backdropFilter: 'blur(12px)', background: 'hsl(240 10% 6% / 0.5)' }}
    >
      <span className="font-display text-foreground text-lg tracking-tight">
        Elite<span className="text-gradient-rainbow">.</span>
      </span>
      <div className="flex gap-8">
        <a href="#story" className="font-mono-ui text-muted-foreground hover:text-violet transition-colors duration-300">
          Story
        </a>
        <a href="#work" className="font-mono-ui text-muted-foreground hover:text-coral transition-colors duration-300">
          Work
        </a>
        <a href="#contact" className="font-mono-ui text-muted-foreground hover:text-amber transition-colors duration-300">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
