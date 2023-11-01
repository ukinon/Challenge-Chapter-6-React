import CarFilterBox from "../components/CarFilterBox";
import Hero from "../components/Hero";

function Cars() {
  return (
    <>
      <Hero landingPage={false} />
      <CarFilterBox />
    </>
  );
}

export default Cars;
