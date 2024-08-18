import Course,{courses} from './module/Course';
import './App.css';


function App() {
  return (
    <div>
      {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  );
}



export default App;