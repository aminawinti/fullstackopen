import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ id: 1, name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      id: persons.length + 1,
      name: newName,
    };
    setPersons((persons) => persons.concat(newPerson));

    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
