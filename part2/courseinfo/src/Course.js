const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ part, exercise }) => (
  <p>
    {part} {exercise}
  </p>
);

const Content = ({ parts }) => (
  <div>
    <Part part={parts[0].name} exercise={parts[0].exercises} />
    <Part part={parts[1].name} exercise={parts[1].exercises} />
    <Part part={parts[2].name} exercise={parts[2].exercises} />
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
