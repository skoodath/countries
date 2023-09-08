import { useQuery } from "@tanstack/react-query";
import useCountries from "./store";
import SideBar from "./components/SideBar";
import HomeContent from "./components/HomeContent";

function App() {
  const countries = useCountries((state) => state.countries);
  const setCountries = useCountries((state) => state.setCountries);
  const header = "Countries of the world";

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  };

  const query = useQuery(["countries"], fetchCountries, {
    retry: false,
    onSuccess: () => {
      setCountries(query && query.data && query.data);
    },
    onError: (error) => console.log(error),
  });

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <SideBar />
      <HomeContent header={header} countries={countries} />
    </div>
  );
}

export default App;
