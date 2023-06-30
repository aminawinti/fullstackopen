import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">filter shown with </label>
      <input id="filter" value={filter} onChange={onFilterChange} />
    </div>
  );
};

export default Filter;
