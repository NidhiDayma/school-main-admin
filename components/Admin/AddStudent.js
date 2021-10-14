import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const AddStudent = () => {
 
    const [student , setStudent] = useState({
 
        studentId: 0,
        studentName: '',
        studentPassword: ''
 
    });


 
    const handleStudentData = (evt) => {
 
        console.log("handleStudentData", evt.target.name, evt.target.value);
        setStudent({
            ...student,
            [evt.target.name]: evt.target.value,
           
 
        });
 
        evt.preventDefault();
    }
 
    const submitStudent = (evt) => {
 
        console.log(emp);
        axios.post('http://localhost:8082//addStudent', emp)
            .then((response) => {
                console.log(response);
                setStudent(response.data);
                alert(`Student added successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    
 
    return (
        <div className="container" >
            <title>Add Student</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Add Student</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitStudent} >
                    <div>
                        <p>Studnet Id</p>
                        <input
                            type="number"
                            id="studnetId"
                            name="studnetId"
                            className="form-control mb-3"
                            value={student.studentId}
                            placeholder="Enter Id"
                            onChange={handleStudentData}
                        />
                        <p>Student Name</p>
                        <input
                            type="text"
                            id="studnetName"
                            name="studnetName"
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
                            id="studnetPassword"
                            name="studnetPassword"
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
                            value="Add Student"
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
 
export default AddStudent;