import CountryCard from "./CountryCard";
import { Country } from "../store";
import Search from "./Search";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

interface HomeContentProps {
  header: string;
  countries: Country[];
  onSort: () => void;
}

const filters = [
  {
    id: uuidv4(),
    title: "Continent",
    children: [
      "Africa",
      "Asia",
      "Australia",
      "Europe",
      "North America",
      "South America",
    ],
  },
];

const HomeContent = ({ header, countries, onSort }: HomeContentProps) => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <main className="ml-48">
      <header className="p-2">
        <h1 className="text-center uppercase">{header}</h1>
      </header>
      <div className="w-9/12 mx-auto">
        <div className="flex gap-4 relative">
          <button onClick={onSort}>
            Sort <SortOutlinedIcon />
          </button>
          <div>
            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="rounded-none"
            >
              Filter by <FilterListOutlinedIcon />
            </button>
            <div className="flex flex-col justify-center">
              {filters.map((filter) => {
                if (filter.children === null) {
                  return (
                    <div key={filter.id} className="p-4 shadow">
                      {filter.title}
                    </div>
                  );
                }
                return (
                  <React.Fragment key={filter.id}>
                    <div className="py-2 px-4 relative shadow cursor-pointer on">
                      {filter.title} <KeyboardArrowRightIcon />
                    </div>
                    <div className="shadow p-2">
                      {filter.children.map((child) => (
                        <React.Fragment key={child}>
                          <div className="p-2 cursor-pointer border border-r-transparent hover:hover:border-b-grey-800,">
                            {child}
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <Search />
        </div>

        <div className="flex flex-wrap space-x-4 justify-center mt-4">
          {countries &&
            countries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
