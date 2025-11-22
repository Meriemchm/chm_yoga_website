import { Classes } from "@/components/classes/classes";
import MembershipSection from "@/components/membership/membership";
import { Container } from "@/components/ui/container";
import HearderTitle from "@/components/ui/hearder-title";
import { Trainers } from "./components/trainers";

const ClassesPage = () => {
  return (
    <div className="overflow-hidden">
      {" "}
      <HearderTitle title="Classes" url="Classes" />
      <div className="min-h-screen bg-white">
        <Container className="py-24">
          <Classes />
        </Container>{" "}
      </div>
      <div className="min-h-screen bg-white">
        <Container className="md:py-24 pb-24">
          <Trainers />
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
