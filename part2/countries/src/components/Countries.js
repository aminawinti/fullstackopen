import React from 'react';

const Countries = ({ countries }) => {
  return (
    <>
      {countries.map((c) => (
        <p key={c.name.common}>{c.name.common}</p>
      ))}
    </>
  );
};

export default Countries;
