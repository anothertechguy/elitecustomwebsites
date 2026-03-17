import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 w-px h-screen z-50 origin-top bg-primary"
      style={{ scaleY: scrollYProgress }}
    />
  );
}
