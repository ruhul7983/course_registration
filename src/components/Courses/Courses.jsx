import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelectedCourse}) => {

    const[courses, setCourses] = useState([]);
    
    useEffect( ()=>{
        fetch("course.json")
        .then(res =>res.json())
        .then(data =>setCourses(data));
    },[])

    return (
        <div className="w-4/5">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    courses.map(course=><Course key={course.id} course={course} handleSelectedCourse={handleSelectedCourse}></Course>)
                }
            </div>

        </div>
    );
};

export default Courses;