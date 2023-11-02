import { useContext } from "react";
import CarCard from "./CarCard";
import { CarContext } from "../contexts/FilterContext";
function CarList() {
  const { cars } = useContext(CarContext);
  console.log(cars);

  return (
    <div
      className="d-flex justify-content-center  flex-row flex-wrap  gap-5"
      style={{ marginTop: "100px" }}
    >
      {cars.map((car) => (
        <div key={car.id}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}

export default CarList;
