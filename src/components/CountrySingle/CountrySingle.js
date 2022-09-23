import React from "react";
import "./CountrySingle.css";
let c = 0;
const CountrySingle = (props) => {
  console.log(props);
  return (
    <div className="country-single">
      <h5>{++c / 2}</h5>
      <h3>{props.name}</h3>
      <p>Area : {props.area}</p>
      <h4>Capital : {props.capital}</h4>
    </div>
  );
};

export default CountrySingle;
