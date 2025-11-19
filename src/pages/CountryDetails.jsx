import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loding from "./Loding";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data[0]);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [name]);

  if (loader) {
    return <Loding />;
  }

  console.log("hi", countryData);

  return (
    <div
      className="flex flex-col justify-center items-center text-xl\
    "
    >
      <h1 className="text-3xl text-blue-800 font-bold">
        {countryData?.name?.common}
      </h1>
      <img
        className="h-36 sm:h-52 md:h-64 mb-4"
        src={countryData.flags.svg}
        alt={countryData?.name?.common}
      />
      <p className="font-serif">
        <b className="text-green-700">Capital: </b>
        {countryData?.capital?.[0]}
      </p>
      <p className="font-serif">
        <b className="text-yellow-600">Region: </b>
        {countryData?.region}
      </p>
      <p className="font-serif">
        <b className="text-red-600">Population: </b>
        {countryData?.population}
      </p>
    </div>
  );
};

export default CountryDetails;
