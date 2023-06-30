import React from 'react';

const CountryDetails = ({ countries }) => {
  return (
    <>
      <h1>{countries.name.common}</h1>
      <p>capital {countries.capital[0]}</p>
      <p>area {countries.area}</p>
      <p>
        languages:
        <ul>
          {Object.values(countries.languages).map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
      </p>
      <img src={countries.flags.png} alt={countries.name.common} />
    </>
  );
};

export default CountryDetails;
