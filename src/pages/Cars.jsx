import CarFilterBox from "../components/CarFilterBox";
import CarList from "../components/CarList";
import Hero from "../components/Hero";
import CarContextProvider from "../contexts/FilterContext";

function Cars() {
  return (
    <CarContextProvider>
      <Hero landingPage={false} />
      <CarFilterBox />
      <CarList />
    </CarContextProvider>
  );
}

export default Cars;
