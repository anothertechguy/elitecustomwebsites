import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import Services from '@/components/Services';
import Archive from '@/components/Archive';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <main className="bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <StorySection />
      <Services />
      <Archive />
      <Process />
      <Contact />
    </main>
  );
};

export default Index;
