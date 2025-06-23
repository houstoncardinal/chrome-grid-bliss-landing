
import { ChromeGrid } from "@/components/chrome-grid";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <div className="relative py-20 overflow-hidden">
          <ChromeGrid />
        </div>
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
