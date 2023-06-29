import React from 'react';

const Person = ({ person }) => (
  <p key={person.id}>
    {person.name} {person.number}
  </p>
);

const Persons = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person person={person} />
      ))}
    </>
  );
};

export default Persons;
