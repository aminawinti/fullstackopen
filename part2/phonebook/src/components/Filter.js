import React from 'react';

const Filter = ({ search, onSearchChange }) => {
  return (
    <div>
      <label htmlFor="search">filter shown with </label>
      <input id="search" value={search} onChange={onSearchChange} />
    </div>
  );
};

export default Filter;
