import { HeroSection, FeaturesContainer } from "@/components/home";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-24 px-4">
      <HeroSection />
      <FeaturesContainer />
    </div>
  );
}
