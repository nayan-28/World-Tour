import React, { useEffect, useState } from "react";

const Countries = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <h3>This is Country</h3>;
};

export default Countries;
