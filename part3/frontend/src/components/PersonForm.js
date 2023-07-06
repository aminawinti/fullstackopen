import React from 'react';

const PersonForm = ({ person, onFormSubmit, handleChange }) => {
  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          name:{' '}
          <input name="name" value={person?.name} onChange={handleChange} />
        </div>
        <div>
          number:{' '}
          <input
            type="tel"
            name="number"
            value={person?.number}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
