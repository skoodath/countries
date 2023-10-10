type FilteredResultProps = {
  continentFilter: string;
  totalCountries: number;
};

const FilteredResults = ({
  continentFilter,
  totalCountries,
}: FilteredResultProps) => {
  return (
    <div className="mx-auto m-4 mb-0 flex justify-center gap-4">
      <span className="bg-gray-200 px-4 py-2 rounded-lg font-bold tracking-wider uppercase">
        Continent: {continentFilter ? continentFilter : "All Continents"}
      </span>
      <span className="bg-gray-200 px-4 py-2 rounded-lg font-bold tracking-wider uppercase">
        Total Countries: {totalCountries}
      </span>
    </div>
  );
};

export default FilteredResults;
