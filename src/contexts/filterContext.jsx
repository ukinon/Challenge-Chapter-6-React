import { createContext, useReducer, useState } from "react";

export const CarContext = createContext({
  cars: [],
  carFilter: () => {},
  isLoading: false,
});

function carListReducer(state, action) {
  if (action.type == "FILTER") {
    const filteredCars = [];
    const carsData = action.payload.carsData;

    const carList = carsData.filter((cars) => {
      const pickUpDate = new Date(cars.availableAt).getTime();
      const date = new Date(
        `${action.payload.date} ${action.payload.pickUpTime}`
      ).getTime();

      return (
        cars.available.toString() == action.payload.driverType &&
        date >= pickUpDate &&
        cars.capacity >= action.payload.passenger
      );
    });

    filteredCars.push(...carList);
    return {
      cars: filteredCars,
    };
  }
  return state;
}

export default function CarContextProvider({ children }) {
  const [carListState, carListDispatch] = useReducer(carListReducer, {
    cars: [],
  });
  const [carsData, setCarsData] = useState();
  const [isLoading, setIsLoading] = useState();

  async function getCars() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https:raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );
      const data = await response.json();
      setCarsData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }

  async function handleCarFilter(driverType, date, pickUpTime, passenger) {
    const data = await getCars();
    let val = true;

    if (val) {
      carListDispatch({
        type: "FILTER",
        payload: {
          driverType,
          date,
          pickUpTime,
          passenger,
          carsData: data,
        },
      });
    }
    val = false;
  }

  const ctxValue = {
    cars: carListState.cars,
    carFilter: handleCarFilter,
    isLoading: isLoading,
  };

  return (
    <CarContext.Provider value={ctxValue}> {children} </CarContext.Provider>
  );
}
