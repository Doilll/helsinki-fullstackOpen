export const courses = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id: 4,
        name: 'Redux',
        exercises: 11
      }
    ]
  },{
    id: 2,
    name: 'Node.js',
    parts: [
      {
      id: 1,
      name: 'Routing',
      exercises: 3
    },
     {
      id: 2,
      name: 'Middlewares',
      exercises: 7
     }
    ]
  }
]

function Course({course}) {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }
  
function Header({course}) {
    return (
      <h1>{course.name}</h1>
    )
  }
  
function Content({course}) {
    return (
      <>
        <Parts course={course} />
      </>
    )
  }
  
function Parts({course}) {
    return (
      <ul>
        {course.parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
      </ul>
    )
  }
  
function Total({course}) {
  
    function sumExcercise() {
      return course.parts.reduce((sum, part) => sum + part.exercises, 0)
    }
  
    return <h4>Total of Excercise: {sumExcercise()}</h4>
  }


export default Course