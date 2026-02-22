import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MessageCarousel from "@/components/MessageCarousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <MessageCarousel />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}