import MembershipSection from "@/components/membership/membership";
import { Plans } from "@/components/plans/plans";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearder-title";

const PricingPage = () => {
  return (
    <div>
      {" "}
      <HearderTitle title="Pricing" url="pricing" />
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <Plans />
        </Container>{" "}
        <div className="md:min-h-screen bg-secondary md:bg-white">
          <Container className="pt-24 ">
            <MembershipSection />{" "}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
