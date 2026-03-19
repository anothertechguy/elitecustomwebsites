import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '@/components/Navbar';
import HeroCinematic from '@/components/HeroCinematic';
import StorySection from '@/components/StorySection';
import Services from '@/components/Services';
import Archive from '@/components/Archive';
import Process from '@/components/Process';
import TeamTree from '@/components/TeamTree';
import Contact from '@/components/Contact';

const Index = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-background noise">
      <Navbar />
      <HeroCinematic />
      <StorySection />
      <Services />
      <Archive />
      <Process />
      <TeamTree />
      <Contact />
    </main>
  );
};

export default Index;
