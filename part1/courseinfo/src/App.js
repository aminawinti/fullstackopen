const App = () => {
  const course = 'Half Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part, exercise }) => (
  <p>
    {part} {exercise}
  </p>
);

const Content = ({ part1, part2, part3 }) => (
  <div>
    <Part part={part1.name} exercise={part1.exercises} />
    <Part part={part2.name} exercise={part2.exercises} />
    <Part part={part3.name} exercise={part3.exercises} />
  </div>
);

const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
);

export default App;
