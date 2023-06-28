import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
];

const anecdotesLength = anecdotes.length;

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotesLength).fill(0));

  function handleNextAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotesLength));
  }

  function handleVote() {
    setVotes((v) => v.map((elt, idx) => (idx === selected ? (elt += 1) : elt)));
  }

  const bestAnecdoteIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <div>
          <Button handleClick={() => handleVote()} text="vote" />
          <Button handleClick={handleNextAnecdote} text="next anecdote" />
        </div>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <div>{anecdotes[bestAnecdoteIndex]}</div>
        <div>has {votes[bestAnecdoteIndex]} votes</div>
      </div>
    </div>
  );
};

export default App;
