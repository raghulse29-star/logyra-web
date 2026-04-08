import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhyLogyraSection from '@/components/sections/WhyLogyraSection';
import AdvantageSection from '@/components/sections/AdvantageSection';
import ResearchAreasSection from '@/components/sections/ResearchAreasSection';
import TeachSection from '@/components/sections/TeachSection';
import TransferSkillsSection from '@/components/sections/TransferSkillsSection';
import NumbersSection from '@/components/sections/NumbersSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import TickerBar from '@/components/ui/TickerBar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      {/* <TickerBar /> */}
      <HeroSection />
      <WhyLogyraSection />
      <AdvantageSection />
      <ResearchAreasSection />
      <TeachSection />
      <TransferSkillsSection />
      <NumbersSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
