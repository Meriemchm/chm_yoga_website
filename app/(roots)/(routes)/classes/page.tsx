import { Classes } from "@/components/classes/classes";
import MembershipSection from "@/components/membership/membership";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearder-title";

const ClassesPage = () => {
  return (
    <div>
      {" "}
      <HearderTitle title="Classes" url="Classes" />
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <Classes />
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

export default ClassesPage;
