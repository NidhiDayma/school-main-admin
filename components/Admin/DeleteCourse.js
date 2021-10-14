import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteCourse = () => {

    const [course, setCourse] = useState({
        courseId: 0,
        name:'',
        teacherId:{
            teacherId:0,
            teacherName:'',
            teacherPassword:''
        }
        

    });

   

    const handleCourseData = (evt) => {


        console.log("handleCourseData", evt.target.name, evt.target.value);
        setHw({
            ...course,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitDeleteCourse = (evt) => {

        console.log(course);
        axios.delete(`http://localhost:8082/school-admin/teacher/teacher/deleteCourse/${course.courseId}`)
            .then((response) => {
               // console.log(response);
                setHw(response.data);
                alert('Course deleted successfully!')
            }).catch(error => {
               // console.log(error.message);
                alert('Course ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete course</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete course</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteCourse} >
                    <div>
                        <p>Course Id</p>
                        <input
                            type="number"
                            id="courseId"
                            name="courseId"
                            className="form-control mb-3"
                            value={course.courseId}
                            placeholder="Enter Id"
                            onChange={handleCourseData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete course"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default DeleteCourse;