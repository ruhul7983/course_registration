import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Details from './components/Details/Details'
import Header from './components/Header/Header'

function App() {

  const [courseName, setCourseName] = useState([]);
  const [credit, setCreditHour] = useState(0);
  const [price, setPrice] = useState(0);
  const [remainingHr, setRemainingHr] = useState(20);

  const handleSelectCourse = (course) => {
    const newTotalCredits = credit + course.credit_hr;
    const newRemainingHR = remainingHr - course.credit_hr;
    if (newTotalCredits <= 20) {
      const newCourseName = [...courseName, course];
      console.log(newCourseName);
      setCourseName(newCourseName);
      setCreditHour(newTotalCredits);
      setPrice(price + course.price);
      setRemainingHr(newRemainingHR);
    } else {
      console.log("Cannot add course: exceeding credit hour limit of 20");
    }
  }
  

  return (
    <>
      <Header></Header>
      <div className='flex max-w-6xl mx-auto'>
        <Courses handleSelectedCourse={handleSelectCourse}></Courses>
        <Details name={courseName} credit_hr={credit} price={price} remainingHr={remainingHr}></Details>
      </div>
    </>
  )
}

export default App
