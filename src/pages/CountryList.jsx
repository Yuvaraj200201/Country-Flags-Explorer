import "../index.css";
import React, { useEffect, useState } from "react";
import Loding from "./Loding";
import { Link } from "react-router-dom";

const CountryList = () => {
  const [countryDatas, setCountryDatas] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryDatas(data);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const handleSearch = (event) => {
    const newValue = event.target.value;
    setSearch(newValue);
    console.log("current", newValue);
  };
  const filteredCountries = countryDatas.filter((country) =>
    (country?.name?.common || "").toLowerCase().includes(search.toLowerCase())
  );

  if (loader) {
    return <Loding />;
  }
  console.log("hiiii", filteredCountries);

  return (
    <div className="text-center pb-4">
      <div className="sticky top-0 pb-2 z-50 backdrop-blur-sm">
        <h1
          className="w-full bg-gray-900 text-white text-sm sm:text-2xl 
        font-serif font-bold py-2"
        >
          COUNTRIES
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="border-4 border-blue-600 text-white font-bold outline-none rounded-md 
        w-5/6 sm:w-4/6 h-8 p-2 sm:h-10 sticky top-16 bg-gray-700 bg-opacity-75 backdrop-blur-sm"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <ul className="card-container grid grid-cols-2 px-2 sm:grid-cols-3 gap-2 sm:gap-4 sm:px-5 md:px-10 md:gap-10 m-4">
        {filteredCountries.map((country) => {
          return (
            <Link
              key={country.name.common}
              to={`/country/${country.name.common}`}
              className="bg-purple-300 border-2 rounded-xl shadow-xl px-2 hover:scale-105 hover:bg-orange-400"
            >
              <img
                className="h-12 sm:h-28 md:h-40 w-svw mt-2 object-fill"
                src={country.flags.svg}
                alt={country.name.common}
              />
              <h3 className="text-xs sm:text-lg font-bold text-center my-2">
                {country.name.common}
              </h3>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default CountryList;
