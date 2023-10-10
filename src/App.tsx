import { useQuery } from "@tanstack/react-query";
import useCountries, { Country } from "./store";
import HomeContent from "./components/HomeContent";
import Header from "./components/Header";
import SearchSortFilter from "./components/SearchSortFilter";
import { useEffect, useMemo, useRef, useState } from "react";
import FilteredResults from "./components/FilteredResults";

function App() {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSubFilter, setOpenSubFilter] = useState(false);
  const setCountries = useCountries((state) => state.setCountries);
  const countries = useCountries((state) => state.countries);
  const search = useCountries((state) => state.search);
  const [filter, setFilter] = useState("");
  const filterChildRef = useRef<HTMLDivElement>(null);

  const filteredCountries =
    filter === ""
      ? countries
      : countries.filter((country) => country.continents[0] === filter);

  const totalCountries = useMemo(() => {
    return filteredCountries?.length;
  }, [filteredCountries]);

  useEffect(() => {
    const closeMenuHandler = () => {
      if (
        openFilter &&
        filterChildRef.current &&
        !filterChildRef.current.contains(event?.target as HTMLDivElement)
      ) {
        setOpenFilter(false);
        setOpenSubFilter(false);
      }
    };
    document.addEventListener("click", closeMenuHandler);
    return () => document.removeEventListener("click", closeMenuHandler);
  }, [openFilter]);

  const header = "Countries of the world";

  const fetchCountries = async (): Promise<Country[]> => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,area,population,languages,continents,flags"
    );
    const data = await response.json();
    return data;
  };

  const query = useQuery<Country[]>(["countries"], fetchCountries, {
    retry: false,
    onSuccess: () => {
      setCountries(query.data!);
    },
    onError: (error) => console.log(error),
  });

  const handleCountrySort = () => {
    const sortedCountries =
      countries &&
      countries
        .filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.name.common.localeCompare(b.name.common));
    setCountries(sortedCountries);
  };
  const handleFilterCountries = (value: string) => {
    setFilter(value);
  };

  return (
    <div className="flex flex-col w-9/12 h-screen mx-auto">
      <Header header={header} />
      <SearchSortFilter
        onSort={handleCountrySort}
        onFilter={handleFilterCountries}
        openFilter={openFilter}
        openSubFilter={openSubFilter}
        setOpenFilter={setOpenFilter}
        setOpenSubFilter={setOpenSubFilter}
        ref={filterChildRef}
      />
      <FilteredResults
        continentFilter={filter}
        totalCountries={totalCountries}
      />
      <hr className="my-6" />
      <HomeContent countries={countries} filter={filter} />
    </div>
  );
}

export default App;
