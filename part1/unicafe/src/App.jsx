import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const AllFeedbacks = good + neutral + bad;
  const average = AllFeedbacks ? (good - bad) / AllFeedbacks : 0;
  const positive = AllFeedbacks ? (good / AllFeedbacks) * 100 : 0;
  return (
    <>
      <h2>Statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {AllFeedbacks}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give feedback</h2>
      <div>
        <button onClick={() => setGood((g) => g + 1)}>good</button>
        <button onClick={() => setNeutral((n) => n + 1)}>neutral</button>
        <button onClick={() => setBad((b) => b + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
