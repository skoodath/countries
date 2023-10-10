import React from "react";
import useCountries from "../store";

const Search = () => {
  const search = useCountries((state) => state.search);
  const setSearch = useCountries((state) => state.setSearch);
  // const setCountries = useCountries((state) => state.setCountries);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex-1 basis-2/4 order-1 lg:order-2">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name..."
        className="mx-auto p-2 border-2 w-full rounded-md"
      />
    </div>
  );
};

export default Search;
