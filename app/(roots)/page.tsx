import { AboutSection } from "@/components/about/about-section";
import { Classes } from "@/components/classes/classes";
import { Hero } from "@/components/hero/Hero";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="min-h-screen ">
        <Container className="py-24">
          <Hero />
        </Container>
      </div>
      <div className="min-h-screen bg-secondary">
        <AboutSection />
      </div>
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <Classes />{" "}
        </Container>
      </div>
    </div>
  );
}
