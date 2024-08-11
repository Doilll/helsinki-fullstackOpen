
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
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

function Content({parts}) {
  return(
    <>
      
    </>
  )
}

function Total({parts}) {
  return(
    <>
      <p>
        Number of exercises {parts}
      </p>
    </>
  )
}

export default App;
