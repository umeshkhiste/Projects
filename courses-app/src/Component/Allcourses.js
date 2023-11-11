import React, { useState } from 'react'
import Course from "./Course"

const Allcourse=()=>{
    const [courses, setCourses] = useState([
        {title:"Java Course",description:"This is a demo course"},
        {title:"Django Course",description:"This is a demo course"},
        {title:"React Course",description:"This is a demo course"},
        {title:"Angular Course",description:"This is a demo course"},
    ]);

    return(
        <div>
            <h1>
                All Courses
            </h1>
            <p>List of Courses are as follows:</p>
            {
             courses.length>0
             ? courses.map((item) =><Course course={item}/>)
             :"No course"}
        </div>
    );
};

export default Allcourse;