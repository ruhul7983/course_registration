
const Course = ({ course,handleSelectedCourse }) => {
    const { id, course_name, course_details, cover_image, price, credit_hr } = course;
    return (
        <div className="rounded-md max-w-60 justify-center py-5 bg-white m-5">
            <img className='max-w-60 px-2' src={cover_image} alt="" />
            <h1 className='text-base font-semibold px-2'>{course_name}</h1>
            <p className='text-gray-400 px-2'>{course_details}</p>
            <div className='flex justify-between px-2'>
                <p className='text-gray-400'>$ Price: {price}</p>
                <p className='text-gray-400'>Credit: {credit_hr}hr</p>
            </div>
            <button onClick={()=>handleSelectedCourse(course)} className='bg-[#2F80ED] px-2 py-2 rounded w-full text-white font-bold'>Select Course</button>
        </div>
    );
};


export default Course;