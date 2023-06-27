import { useState } from 'react';

const StatisticLine = ({ text, value, children }) => (
  <p>
    {text} {value} {children}
  </p>
);

const Button = ({ handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  let statistics;

  const AllFeedbacks = good + neutral + bad;
  const average = AllFeedbacks ? (good - bad) / AllFeedbacks : 0;
  const positive = AllFeedbacks ? (good / AllFeedbacks) * 100 : 0;

  if (!AllFeedbacks) {
    statistics = <p>No feedback given</p>;
  } else {
    statistics = (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={AllFeedbacks} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive}>
          %
        </StatisticLine>
      </div>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      {statistics}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button handleClick={() => setGood((g) => g + 1)}>good</Button>
        <Button handleClick={() => setNeutral((n) => n + 1)}>neutral</Button>
        <Button handleClick={() => setBad((b) => b + 1)}>bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
