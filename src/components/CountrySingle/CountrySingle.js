import React from "react";
import "./CountrySingle.css";
const CountrySingle = (props) => {
  const { name, area, capital, flags } = props.country;
  return (
    <div className="country-single">
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Area : {area}</p>
      <h4>Capital : {capital}</h4>
    </div>
  );
};

export default CountrySingle;
