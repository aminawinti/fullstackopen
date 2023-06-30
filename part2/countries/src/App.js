import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import CountryDetails from './components/CountryDetails';
import Countries from './components/Countries';

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const filterByName = (event) => {
    const search = event.target.value;
    setFilter(search);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  let content;

  if (filteredCountries.length > 10) {
    content = <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length === 1) {
    content = <CountryDetails countries={filteredCountries[0]} />;
  } else {
    content = <Countries countries={filteredCountries} />;
  }
  return (
    <div>
      <Filter filter={filter} filterByName={filterByName} />
      {content}
    </div>
  );
}

export default App;
