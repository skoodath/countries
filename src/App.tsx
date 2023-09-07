import CountryCard from "./components/CountryCard";
import { useQuery } from "@tanstack/react-query";
import useCountries from "./store";

function App() {
  const countries = useCountries((state) => state.countries);
  const setCountries = useCountries((state) => state.setCountries);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  };

  const query = useQuery(["countries"], fetchCountries);

  const handleCountries = () => {
    setCountries(query && query.data && query.data);
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <h1>COUNTRIES OF THE WORLD</h1>
      <button onClick={handleCountries}>Get Countries</button>
      <div className="flex flex-wrap space-x-4 w-9/12 mx-auto justify-center mt-4">
        {countries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
