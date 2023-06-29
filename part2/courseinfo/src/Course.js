const Header = ({ name }) => <h2>{name}</h2>;

const Part = ({ part, exercise }) => (
  <p>
    {part} {exercise}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part.name} exercise={part.exercises} />
    ))}
  </div>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
