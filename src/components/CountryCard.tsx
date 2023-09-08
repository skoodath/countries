// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CountryCard = ({ country }: Record<string, Record<string, any>>) => {
  const currency =
    country.currencies && Object.keys(country.currencies).join(" ");

  const languages = country.languages && Object.values(country.languages);

  return (
    <div className="flex flex-col border-2 rounded-sm m-2 justify-start p-3 w-80">
      <h3 className="text-1xl uppercase text-left border-b-2 p-1 font-semibold flex justify-between items-start">
        <span className="text-1xl">{country.name.common}</span>{" "}
        <span className="text-2xl">{country.flag}</span>
      </h3>
      <div className="py-2">
        {/* div className="bg-slate-100 p-1 flex justify-center">
          <img
            className="py-2 flex flex-row justify-between items-center"
            src={country.flags.svg}
            alt={country.name.common}
            height="100px"
            width="60%"
          />
        </div> */}

        <p className="py-2 flex flex-row justify-between items-center">
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
        <hr />
        <p className="text-sm py-2 flex flex-row justify-between items-center">
          <span className="font-bold">Currencies:</span> {currency}
        </p>
        <hr />
        <p className="text-sm py-2 flex flex-row justify-between items-center">
          <span className="font-bold">Continent:</span> {country.continents[0]}
        </p>
        <hr />

        <hr />
        <p className="text-sm py-2 flex flex-row justify-between items-center">
          <span className="font-bold">Area:</span> {country.area}
        </p>
        <hr />
        <p className="text-sm py-2 flex flex-row justify-between items-center">
          <span className="font-bold">Population:</span> {country.population}
        </p>
        <hr />
        <div className="text-sm py-2 flex flex-row justify-between items-start">
          <span className="font-bold">Main Languages:</span>{" "}
          <ul className="text-right">
            {languages &&
              languages
                .slice(0, 4)
                .map((language: string) => <li key={language}>{language}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
