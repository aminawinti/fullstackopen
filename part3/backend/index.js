const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

morgan.token('data', (req) =>
  req.method === 'POST' ? JSON.stringify(req.body) : ' '
);

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :data')
);

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.use(express.static('build'));

app.get('/', (req, res) => {
  console.log(`dirname: ${__dirname}`);
  console.log(`path var: ${path}`);
  console.log(`path: ${path.join(__dirname, 'build', 'index.html')}`);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/info', (req, res) => {
  const now = new Date();

  res.send(`<p>
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${now.toString()}</p>
  </p>`);
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const personId = Number(req.params.id);

  const person = persons.find((p) => p.id === personId);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    return res.status(400).json({
      error: 'name or number is missing',
    });
  }

  const personsNames = persons.map((p) => p.name);

  if (personsNames.includes(name)) {
    return res.status(400).json({
      error: 'name must be unique',
    });
  }

  const personId = Math.floor(Math.random() * 10000);

  const newPerson = {
    id: personId,
    name,
    number,
  };

  persons = persons.concat(newPerson);

  res.json(persons);
});

app.delete('/api/persons/:id', (req, res) => {
  const personId = Number(req.params.id);
  persons = persons.filter((p) => p.id !== personId);
  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
