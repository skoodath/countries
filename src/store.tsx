import { create } from "zustand";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Country = Record<string, Record<string, any>>;

export interface CountryState {
  countries: Country[];
  search: string;
  setCountries: (countries: []) => void;
}

const useCountries = create<CountryState>((set) => ({
  countries: [],
  search: "",
  setSearch: (search: string) => set({ search }),
  setCountries: (countries: []) => set({ countries }),
}));

export default useCountries;
