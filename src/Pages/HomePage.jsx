import OutlinedCard from "../components/Card";
import Features from "../components/Features.component";
import LandingPageBanner from "../components/LandingPageBanner.component";
import ActionAreaCard from "../components/ServiceProvider";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <LandingPageBanner />
      <Features />
      <OutlinedCard />
      <ActionAreaCard />
      <Testimonials />
    </>
  );
};

export default HomePage;
