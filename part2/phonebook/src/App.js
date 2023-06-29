import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: '040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
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
      phone: newPhone,
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
          number:{' '}
          <input type="tel" value={newPhone} onChange={handlePhoneChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
};

export default App;
