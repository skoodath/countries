import { useQuery } from "@tanstack/react-query";
import useCountries, { Country } from "./store";

import HomeContent from "./components/HomeContent";

function App() {
  const countries = useCountries((state) => state.countries);
  const search = useCountries((state) => state.search);
  const setCountries = useCountries((state) => state.setCountries);
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

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <HomeContent
        header={header}
        countries={countries}
        onSort={handleCountrySort}
      />
    </div>
  );
}

export default App;
