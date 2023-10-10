import { FilterProps } from "./components/HomeContent";
import { v4 as uuidv4 } from "uuid";

const filters: FilterProps[] = [
  {
    id: uuidv4(),
    title: "About",
    children: null,
  },
  {
    id: uuidv4(),
    title: "Continent",
    children: [
      "Africa",
      "Asia",
      "Oceania",
      "Europe",
      "North America",
      "South America",
    ],
  },
  {
    id: uuidv4(),
    title: "More",
    children: null,
  },
];

export default filters;
