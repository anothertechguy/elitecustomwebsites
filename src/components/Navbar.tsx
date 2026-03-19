import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className="font-display text-white text-xl tracking-tight italic">
          Elite<span className="not-italic font-body font-light text-sm ml-1 opacity-60">Custom</span>
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {[
            { label: 'Work', action: () => scrollTo('work') },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
          ].map((item) =>
            item.href ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-white text-sm font-body font-light tracking-wide relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={item.action}
                className="text-white text-sm font-body font-light tracking-wide relative group"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500 ease-out" />
              </button>
            )
          )}
        </div>

        <Link
          to="/contact"
          className="hidden md:block text-sm font-body font-light text-white border border-white/20 rounded-full px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-500"
        >
          Get in Touch
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 text-white"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-8 flex flex-col gap-6"
        >
          <button onClick={() => scrollTo('work')} className="text-white text-2xl font-display italic text-left">Work</button>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-white text-2xl font-display italic">Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-white text-2xl font-display italic">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-white text-2xl font-display italic">Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
