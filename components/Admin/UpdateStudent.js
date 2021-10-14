import axios from 'axios';
import React, { useState, useEffect } from 'react';


const UpdateStudent = () => {


    const [student, setStudent] = useState({

           
        studentId: 0,
        studentName: '',
        studentPassword: ''
    });



    const handleStudentData = (evt) => {


        console.log("handleStudentData", evt.target.name, evt.target.value);
        setStudent({
            ...emp,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitUpdateStudent = (evt) => {

        console.log(student);
        axios.put('http://localhost:8082//updateStudent', student)
            .then((response) => {
                console.log(response);
                setEmp(response.data);
                alert(`Student updated successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Update Student</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Update Student</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitUpdateStudent} >
                    <div>
                        <p>Student Id</p>
                        <input
                            type="number"
                            id="studentId"
                            name="studentId"
                            className="form-control mb-3"
                            value={student.studentId}
                            placeholder="Enter Id"
                            onChange={handleStudentData}
                        />
                        <p>Student Name</p>
                        <input
                            type="text"
                            id="studentName"
                            name="studentName"
                            className="form-control mb-3"
                            pattern="[A-Za-z ]+" 
                            title="Please enter only characters!"
                            minLength="3"
                            maxLength="20"
                            value={student.studentName}
                            placeholder="Enter Name"
                            onChange={handleStudentData}
                        />
                        <p>Passsword</p>
                        <input
                            type="password"
                            id="studentPassword"
                            name="studentPassword"
                            className="form-control mb-3"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                            value={student.studentPassword}
                            placeholder="Enter Password"
                            onChange={handleStudentData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update student"
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

export default UpdateStudent;