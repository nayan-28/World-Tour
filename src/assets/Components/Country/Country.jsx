import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  const passWithParams = () => {
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name:{name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Code:{cca3}</p>
      <button onClick={passWithParams}>Mark Visited</button>
      <button onClick={handleVisited}>Visited</button>
      {visited ? " I have visited" : "I want to visit"}
    </div>
  );
};

export default Country;
