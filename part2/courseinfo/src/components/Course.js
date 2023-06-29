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

const Total = ({ parts }) => {
  const nbrOfCourses = parts.reduce((acc, cur) => acc + cur.exercises, 0);
  return <strong>total of {nbrOfCourses} exercises</strong>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
