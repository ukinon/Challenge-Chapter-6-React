import { createContext, useReducer } from "react";
import { carsData } from "../../carsData";

export const CarContext = createContext({
  cars: [],
  carFilter: () => {},
  inputFocus: () => {},
});

function carListReducer(state, action) {
  if (action.type == "FILTER") {
    const filteredCars = [];

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
    console.log(carsData[0].availableAt);
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

  function handleCarFilter(driverType, date, pickUpTime, passenger) {
    carListDispatch({
      type: "FILTER",
      payload: {
        driverType,
        date,
        pickUpTime,
        passenger,
      },
    });
  }

  const ctxValue = {
    cars: carListState.cars,
    carFilter: handleCarFilter,
  };

  return (
    <CarContext.Provider value={ctxValue}> {children} </CarContext.Provider>
  );
}
