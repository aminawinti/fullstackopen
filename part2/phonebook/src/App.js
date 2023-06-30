import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.filter((p) => p.name === newPerson.name)[0];

    if (existingPerson) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }

    const createdPerson = {
      id: persons.length + 1,
      ...newPerson,
    };

    setPersons((persons) => persons.concat(createdPerson));
    setNewPerson({ name: '', number: '' });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchedPersons = search
    ? persons.filter((p) => p.name.toLowerCase() === search)
    : persons;

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearchChange={handleSearchChange} />
      <PersonForm
        handleChange={handleChange}
        person={newPerson}
        onFormSubmit={handleFormSubmit}
      />
      <Persons persons={searchedPersons} />
    </div>
  );
};

export default App;
