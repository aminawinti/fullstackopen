import React from 'react';
import WeatherDetails from './WeatherDetails';

const CountryDetails = ({ countries }) => {
  return (
    <>
      <h1>{countries.name.common}</h1>
      <p>capital {countries.capital[0]}</p>
      <p>area {countries.area}</p>
      <div>
        <h3>languages:</h3>
        <ul>
          {Object.values(countries.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
      <img src={countries.flags.png} alt={countries.name.common} />
      <WeatherDetails capital={countries.capital[0]} />
    </>
  );
};

export default CountryDetails;
