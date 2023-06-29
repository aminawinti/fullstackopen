import React from 'react';

const Person = ({ person }) => (
  <p>
    {person.name} {person.number}
  </p>
);

const Persons = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  );
};

export default Persons;
