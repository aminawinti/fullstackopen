import React, { useState } from 'react';
import CountryDetails from './CountryDetails';

const Countries = ({ countries }) => {
  const [countryName, setCountryName] = useState(null);

  return (
    <>
      {countries.map((c, i) => {
        if (c.name.common === countryName)
          return <CountryDetails countries={countries[i]} />;
        else
          return (
            <p key={c.name.common}>
              {c.name.common}{' '}
              <button onClick={() => setCountryName(c.name.common)}>
                show
              </button>
            </p>
          );
      })}
    </>
  );
};

export default Countries;
