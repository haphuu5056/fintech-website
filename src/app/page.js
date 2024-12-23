// import Clients from "@/components/Clients";
import Clients from "@/components/Clients";
import HomeHero from "@/components/Hero";
import Services from "@/components/Services";
import Ratings from "@/components/Statistics";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Services />
      <Ratings />
      <WhyChooseUs />
      <Clients />
    </main>
  );
}
