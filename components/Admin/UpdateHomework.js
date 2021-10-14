import axios from 'axios';
import React, { useState, useEffect } from 'react';



const UpdateHomeWork = () => {


    const [hw, sethw] = useState({

        homeId: 0,
        name: '',
        teacherId: {
            teacherId: 0,
            teacherName: '',
            teacherPassword: ''
        }

    });

    const handlehwData = level => (event) => {

        if (!level) {
            console.log("handlehwData", event.target.name, event.target.value);
            sethw({
                ...hw,
                [event.target.name]: event.target.value,

            });
        }
        else{
            sethw(
                {
                    ...hw,
                    [level]: {
                        ...hw[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }



    const submitUpdatehw = (event) => {

        console.log(hw);
        axios.put('http://localhost:8082/school-admin/teacher/teacher/updateHomework', hw)
            .then((response) => {
                console.log(response);
                sethw(response.data);
                alert('Homework update Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Update HomeWork</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Update Homework</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitUpdatehw} >
                        <div>
                            <p>teacher ID</p>
                            <input
                                type="number"
                                id="teacherId"
                                name="teacherId"
                                className="form-control mb-3"
                                value={hw.teacherId.teacherId}
                                placeholder="Enter Teacher Id"
                                onChange={handlehwData('teacherId')}
                            />
                            <p>Homework ID</p>
                            <input
                                type="number"
                                id="homeId"
                                name="homeId"
                                className="form-control mb-3"
                                value={hw.homeId}
                                placeholder="Enter home Id"
                                onChange={handlehwData()}
                            />


                            <p>name</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control mb-3"
                                value={hw.name}
                                placeholder="Enter Homework"
                                onChange={handlehwData()}

                            />
                            

                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Homework"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Teacher ID</th>
                                   {/*  <th scope="col">Teacher Name</th> */}
                                    <th scope="col">HomeWork Id</th>
                                    <th scope="col">name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    <th scope="row">{hw.teacherId.teacherId}</th>
                                    {/* <td>{homework.teacherId.teacherName}</td> */}
                                    <td>{hw.homeId}</td>
                                    <td>{hw.name}</td>



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

export default UpdateHomeWork;