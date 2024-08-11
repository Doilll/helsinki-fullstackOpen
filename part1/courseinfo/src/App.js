
import './App.css';

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const sumOfexercises = () => 
    course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts[0].name} partsExcercise={course.parts[0].exercises} />
      <Content parts={course.parts[1].name} partsExcercise={course.parts[1].exercises} />
      <Content parts={course.parts[2].name} partsExcercise={course.parts[2].exercises} />
      <Total numberOfExcercise={sumOfexercises()} />
    </div>
  );
}

function Header({course}) {
  console.log("hello world")
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

function Content({parts,partsExcercise}) {
  return(
    <>
      <p>course name: {parts}</p>
      <p>Exercise: {partsExcercise}</p>
    </>
  )
}

function Parts({parts}) {
  return(
    <>
      <p></p>
      <p>
        Number of exercises {parts}
      </p>
    </>
  )
}

function Total({numberOfExcercise}) {
  return(
    <p>Number of excercises: {numberOfExcercise}</p>
  )
}

export default App;
