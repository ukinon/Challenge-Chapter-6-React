import { useContext } from "react";
import CarCard from "./CarCard";
import { CarContext } from "../contexts/FilterContext";
function CarList() {
  const { cars, isLoading, error, isSubmitted } = useContext(CarContext);

  console.log(isSubmitted.state);

  return (
    <div
      className="d-flex justify-content-center flex-row flex-wrap  gap-5"
      id="list-container"
    >
      {isLoading && <h2 className="mt-5 ">Loading...</h2>}

      {cars.length <= 0 && isSubmitted.state === "submitted" && (
        <h3 className="mt-5 ">Mobil tidak tersedia</h3>
      )}

      {!isLoading && isSubmitted.state === "not_complete" && (
        <h3 className="mt-5 ">Mohon lengkapi filter</h3>
      )}

      {!isLoading && isSubmitted.state === "not_submitted" && (
        <h3 className="mt-5 ">Filter mobil terlebih dahulu</h3>
      )}

      {!isLoading &&
        !error &&
        cars.map((car) => (
          <div key={car.id}>
            <CarCard car={car} />
          </div>
        ))}

      {error && <h1 className="mt-5 ">Error: {error}</h1>}
    </div>
  );
}

export default CarList;
