import { useEffect, useState } from "react";
import CarCard from "./CarCard";
function CarList() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>LOADING...</h1>;

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
