import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 w-[2px] h-screen z-50 origin-top"
      style={{
        scaleY: scrollYProgress,
        background: 'linear-gradient(to bottom, hsl(265 90% 65%), hsl(340 85% 60%), hsl(45 95% 60%))',
      }}
    />
  );
}
