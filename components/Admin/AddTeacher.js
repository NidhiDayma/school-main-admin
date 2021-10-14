import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const AddTeacher = () => {
 
    const [student , setStudent] = useState({
 
        teacherId: 0,
        teacherName: '',
        teacherPassword: ''
 
    });


 
    const handleTeacherData = (evt) => {
 
        console.log("handleTeacherData", evt.target.name, evt.target.value);
        setTeacher({
            ...teacher,
            [evt.target.name]: evt.target.value,
           
 
        });
 
        evt.preventDefault();
    }
 
    const submitTeacher = (evt) => {
 
        console.log(teacher);
        axios.post('http://localhost:8082//addTeacher', emp)
            .then((response) => {
                console.log(response);
                setStudent(response.data);
                alert(`Teacher added successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    
 
    return (
        <div className="container" >
            <title>Add Teacher</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Add Teacher</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitTeacher} >
                    <div>
                        <p>Teacher Id</p>
                        <input
                            type="number"
                            id="teacherId"
                            name="teacherId"
                            className="form-control mb-3"
                            value={teacher.teacherId}
                            placeholder="Enter Id"
                            onChange={handleTeacherData}
                        />
                        <p>Teacher Name</p>
                        <input
                            type="text"
                            id="teacherName"
                            name="teacherName"
                            className="form-control mb-3"
                            pattern="[A-Za-z ]+" 
                            title="Please enter only characters!"
                            minLength="3"
                            maxLength="20"
                            value={teacher.teacherName}
                            placeholder="Enter Name"
                            onChange={handleTeacherData}
                        />
                        <p>Passsword</p>
                        <input
                            type="password"
                            id="teacherPassword"
                            name="teachertPassword"
                            className="form-control mb-3"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                            value={teacher.teacherPassword}
                            placeholder="Enter Password"
                            onChange={handleTeacherData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Teacher"
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
 
export default AddTeacher;