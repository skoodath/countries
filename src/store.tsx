import { create } from "zustand";

interface CountryState {
  countries: [];
  search: string;
  setCountries: (countries: []) => void;
}

const useCountries = create<CountryState>((set) => ({
  countries: [],
  search: "",
  setSearch: (search: string) => set({ search }),
  setCountries: (countries: []) => set({ countries }),
  searchCountries: () =>
    set((state) => ({
      countries: state.countries.find((country) => country === state.search),
    })),
}));

export default useCountries;
