import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((p) => p.name === newPerson.name);

    if (!existingPerson) {
      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    } else {
      const confirmed = window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmed) {
        personService
          .update(existingPerson.id, newPerson)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((p) =>
              p.id !== returnedPerson.id ? p : returnedPerson
            );
            setPersons(updatedPersons);
          });
      }
    }
    setNewPerson({ name: '', number: '' });
  };

  const handleFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleDelete = (id, name) => {
    const confirmed = window.confirm(`Delete ${name}?`);

    if (confirmed) {
      personService.remove(id).then((response) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
      });
    }
  };

  const filteredPersons = filter
    ? persons.filter((p) => p.name.toLowerCase() === filter)
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={handleFilter} />
      <PersonForm
        handleChange={handleChange}
        person={newPerson}
        onFormSubmit={handleFormSubmit}
      />
      <Persons persons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
