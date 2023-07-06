import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
        Note app, Department of Computer Science, University of Helsinki 2022
      </em>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [message, setMessage] = useState({ content: '', level: 'info' });

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
      if (!newPerson.name || !newPerson.number) return;

      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setMessage({ ...message, content: `Added ${newPerson.name}` });
        setTimeout(() => {
          setMessage({ content: '', level: 'info' });
        }, 2000);
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
            setMessage({
              ...message,
              content: `Updated ${newPerson.name}'s number to: ${returnedPerson.number}`,
            });
            setTimeout(() => {
              setMessage({ content: '', level: 'info' });
            }, 2000);
          })
          .catch((error) => {
            setMessage({
              content: `Information of ${newPerson.name}'s has already been removed from server`,
              level: 'error',
            });
            setTimeout(() => {
              setMessage({ content: '', level: 'info' });
            }, 3000);
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
      <Notification message={message} />
      <Filter filter={filter} onFilterChange={handleFilter} />
      <PersonForm
        handleChange={handleChange}
        person={newPerson}
        onFormSubmit={handleFormSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onDelete={handleDelete} />
      <Footer />
    </div>
  );
};

export default App;
