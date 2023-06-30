import React from 'react';

const Filter = ({ filter, filterByName }) => {
  return (
    <div>
      <label htmlFor="filter">find countries </label>
      <input value={filter} onChange={filterByName} />
    </div>
  );
};

export default Filter;
