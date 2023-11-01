import { createContext } from "react";

export const FilterContext = createContext({
  type: [],
  date: [],
  time: [],
  passenger: [],
});
