import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const eliteEase = [0.23, 1, 0.32, 1] as const;

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background noise">
      {/* Navbar for inner pages */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
        style={{ backdropFilter: 'blur(12px)', background: 'hsl(var(--background) / 0.8)' }}
      >
        <Link to="/" className="font-display text-foreground text-xl tracking-tight italic">
          Elite<span className="not-italic font-body font-light text-sm ml-1 opacity-60">Custom</span>
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {[
            { label: 'Work', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-foreground/70 text-sm font-body font-light tracking-wide relative group hover:text-foreground transition-colors duration-300"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500 ease-out" />
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="text-sm font-body font-light text-foreground border border-foreground/20 rounded-full px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Get in Touch
        </Link>
      </motion.nav>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: eliteEase }}
      >
        {children}
      </motion.div>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-foreground/[0.06]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
            © 2026 Elite Custom Websites
          </p>
          <div className="flex gap-8">
            {['Twitter', 'LinkedIn', 'Dribbble'].map((link) => (
              <span
                key={link}
                className="font-mono text-[11px] text-muted-foreground tracking-wide cursor-pointer hover:text-foreground transition-colors duration-500"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
