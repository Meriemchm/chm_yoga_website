import MembershipSection from "@/components/membership/membership";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearder-title";

const AboutUsPage = () => {
  return (
    <div>
      {" "}
      <HearderTitle title="About Us" url="Abouts Us" />
      <div className="md:min-h-screen bg-secondary md:bg-white">
        <Container className="pt-24 ">
          <MembershipSection />{" "}
        </Container>
      </div>
    </div>
  );
};

export default AboutUsPage;
