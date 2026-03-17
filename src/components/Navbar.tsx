import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
    >
      <span className="font-mono-ui text-foreground tracking-widest" style={{ fontSize: '0.7rem' }}>
        Elite Custom
      </span>
      <div className="flex gap-8">
        <a href="#work" className="font-mono-ui text-muted-foreground hover:text-foreground transition-colors duration-300">
          Work
        </a>
        <a href="#contact" className="font-mono-ui text-muted-foreground hover:text-foreground transition-colors duration-300">
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
