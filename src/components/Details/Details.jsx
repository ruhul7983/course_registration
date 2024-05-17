const Details = ({name,credit_hr,price,remainingHr}) => {

    return (
        <div className="w-1/4 bg-white mt-5 px-3 py-2">
            <h1 className="text-blue-500 font-bold">Credit Hour Remaining {remainingHr} hr</h1>
            <hr />
            <h1 className="font-semibold">Course name</h1>
            {
                name.map(nam=><h1 className="text-gray-400">{nam.course_name}</h1>)
            }
            <hr />
            <h1 className="my-3">Total Credit Hour: {credit_hr}</h1>
            <hr />
            <h1 className="my-2">Total Price: {price} USD</h1>            
        </div>
    );
};

export default Details;