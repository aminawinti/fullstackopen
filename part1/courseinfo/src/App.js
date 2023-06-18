const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
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
