import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.filter((p) => p.name === newName)[0];

    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
    }

    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    setPersons((persons) => persons.concat(newPerson));

    setNewName('');
  };

  const searchedPersons = search
    ? persons.filter((p) => p.name.toLowerCase() === search)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="search">filter shown with </label>
        <input id="search" value={search} onChange={handleSearchChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:{' '}
          <input type="tel" value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchedPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
