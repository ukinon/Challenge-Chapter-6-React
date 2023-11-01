import Faq from "../components/FAQ";
import GettingStarted from "../components/GettingStarted";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import WhyUs from "../components/WhyUs";

function LandingPage() {
  return (
    <>
      <Hero landingPage={true} />
      <Services />
      <WhyUs />
      <Testimonial />
      <GettingStarted />
      <Faq />
    </>
  );
}

export default LandingPage;
