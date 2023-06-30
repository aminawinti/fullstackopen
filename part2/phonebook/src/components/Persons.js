import React from 'react';

const Person = ({ person, onDelete }) => (
  <p>
    {person.name} {person.number}{' '}
    <button onClick={() => onDelete(person.id, person.name)}>delete</button>
  </p>
);

const Persons = ({ persons, onDelete }) => {
  if (persons.length === 0) {
    return <p>No persons found.</p>;
  }
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Persons;
