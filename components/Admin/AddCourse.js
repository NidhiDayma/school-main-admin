import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import Homework from '../model/Homework';


const AddCourse = () => {


    const [course, setCourse] = useState({

        courseId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }

    });

    const handlecourseData = level => (event) => {

        if (!level) {
            console.log("handlecourseData", event.target.name, event.target.value);
            setCourse({
                ...course,
                [event.target.name]: event.target.value,

            });
        }
        else{
            setCourse(
                {
                    ...course,
                    [level]: {
                        ...course[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }



    const submitAddCourse = (event) => {

        console.log(course);
        axios.post('http://localhost:8082/school-admin/teacher/teacher/addCourse', course)
            .then((response) => {
                console.log(response);
                sethomework(response.data);
                alert('Course Added Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Add Course</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Add Course</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitAddCourse} >
                        <div>
                            <p>teacher ID</p>
                            <input
                                type="number"
                                id="teacherId"
                                name="teacherId"
                                className="form-control mb-3"
                                value={course.teacherId.teacherId}
                                placeholder="Enter Teacher Id"
                                onChange={handlecourseData('teacherId')}
                            />
                            <p>Course ID</p>
                            <input
                                type="number"
                                id="courseId"
                                name="courseId"
                                className="form-control mb-3"
                                value={course.courseId}
                                placeholder="Enter Course Id"
                                onChange={handlecourseData()}
                            />


                            <p>name</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control mb-3"
                                value={course.name}
                                placeholder="Enter course"
                                onChange={handlecourseData()}

                            />
                            

                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add course"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Teacher ID</th>
                                    <th scope="col">Teacher Name</th>
                                    <th scope="col">course Id</th>
                                    <th scope="col">name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    <th scope="row">{course.teacherId.teacherId}</th>
                                    <td>{course.teacherId.teacherName}</td>
                                    <td>{course.courseId}</td>
                                    <td>{course.name}</td>



                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default AddCourse;