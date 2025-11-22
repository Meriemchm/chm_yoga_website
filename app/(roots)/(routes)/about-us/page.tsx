import MembershipSection from "@/components/membership/membership";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearder-title";
import { About } from "./components/about";

const AboutUsPage = () => {
  return (
    <div>
      {" "}
      <HearderTitle title="About Us" url="Abouts Us" />
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <About />
        </Container>{" "}
      </div>
      <div className="md:min-h-screen bg-secondary md:bg-white">
        <Container className="pt-24 ">
          <MembershipSection />{" "}
        </Container>
      </div>
    </div>
  );
};

export default AboutUsPage;
