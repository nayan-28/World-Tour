import React, { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>Name:{name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <button onClick={handleVisited}>Visited</button>
      {visited ? " I have visited" : "I want to visit"}
    </div>
  );
};

export default Country;
