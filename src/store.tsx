import { create } from "zustand";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Country = {
  name: {
    common: string;
  };
  flag: string;
  capital: string;
  currencies: Record<string, string>;
  continents: string;
  area: number;
  population: number;
  languages: Record<string, string>;
};

export interface CountryState {
  countries: Country[];
  search: string;
  setCountries: (countries: Country[]) => void;
  setSearch: (search: string) => void;
}

const useCountries = create<CountryState>((set) => ({
  countries: [],
  search: "",
  setSearch: (search: string) => set({ search }),
  setCountries: (countries: Country[]) => set({ countries }),
}));

export default useCountries;
