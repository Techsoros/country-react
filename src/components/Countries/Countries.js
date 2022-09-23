import React, { useEffect, useState } from "react";
import CountrySingle from "../CountrySingle/CountrySingle";
import "./Countries.css";
const Countries = () => {
  console.log("hello");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="">
      <h2> Total Country Found : {countries.length}</h2>
      <div className="country-container">
        {countries.map((country) => (
          <CountrySingle country={country} key={country.cca3}></CountrySingle>
        ))}
      </div>
    </div>
  );
};

export default Countries;
