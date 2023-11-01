import CarFilterBox from "../components/CarFilterBox";
import CarList from "../components/CarList";
import Hero from "../components/Hero";

function Cars() {
  return (
    <>
      <Hero landingPage={false} />
      <CarFilterBox />
      <CarList />
    </>
  );
}

export default Cars;
