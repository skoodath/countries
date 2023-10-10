import CountryCard from "./CountryCard";
import { Country } from "../store";

interface HomeContentProps {
  countries: Country[];
  onSort?: () => void;
  onFilter?: (value: string) => void;
  continentFilter?: string;
  filter: string;
}

export type FilterProps = {
  id: string;
  title: string;
  children: string[] | null;
};

const HomeContent = ({ countries, filter }: HomeContentProps) => {
  const filteredCountries =
    filter === ""
      ? countries
      : countries.filter((country) => country.continents[0] === filter);

  return (
    <div className="mx-auto">
      <div className="flex flex-wrap space-x-4 justify-center mt-4">
        {countries &&
          filteredCountries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </div>
    </div>
  );
};

export default HomeContent;
