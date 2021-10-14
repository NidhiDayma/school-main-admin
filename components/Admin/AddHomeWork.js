import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import Homework from '../model/Homework';


const AddHomeWork = () => {


    const [homework, sethomework] = useState({

        homeId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }

    });

    const handlehomeworkData = level => (event) => {

        if (!level) {
            console.log("handlehomeworkData", event.target.name, event.target.value);
            sethomework({
                ...homework,
                [event.target.name]: event.target.value,

            });
        }
        else{
            sethomework(
                {
                    ...homework,
                    [level]: {
                        ...homework[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }



    const submitAddHomework = (event) => {

        console.log(homework);
        axios.post('http://localhost:8082/school-admin/teacher/teacher/addHomework', homework)
            .then((response) => {
                console.log(response);
                sethomework(response.data);
                alert('Homework Added Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Add Homework</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Add Homework</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitAddHomework} >
                        <div>
                            <p>teacher ID</p>
                            <input
                                type="number"
                                id="teacherId"
                                name="teacherId"
                                className="form-control mb-3"
                                value={homework.teacherId.teacherId}
                                placeholder="Enter Teacher Id"
                                onChange={handlehomeworkData('teacherId')}
                            />
                            <p>Home ID</p>
                            <input
                                type="number"
                                id="homeId"
                                name="homeId"
                                className="form-control mb-3"
                                value={homework.homeId}
                                placeholder="Enter homwework Id"
                                onChange={handlehomeworkData()}
                            />


                            <p>name</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control mb-3"
                                value={homework.name}
                                placeholder="Enter homwework"
                                onChange={handlehomeworkData()}

                            />
                            

                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Homework"
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
                                    <th scope="col">HomeWork Id</th>
                                    <th scope="col">name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    <th scope="row">{homework.teacherId.teacherId}</th>
                                    <td>{homework.teacherId.teacherName}</td>
                                    <td>{homework.homeId}</td>
                                    <td>{homework.name}</td>



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

export default AddHomeWork;