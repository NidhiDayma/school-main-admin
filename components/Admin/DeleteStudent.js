import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteStudent = () => {


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


    const submitDeleteStudent = (evt) => {

        console.log(student);
        axios.delete(`http://localhost:8082/deleteStudent/${student.studentId}`)
            .then((response) => {
                console.log(response);
                setStudent(response.data);
                alert('Student deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Student ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete Student</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Student</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteStudent} >
                    <div>
                        <p>Student Id</p>
                        <input
                            type="number"
                            id="studentId"
                            name="studentId"
                            className="form-control mb-3"
                            value={student.StudentId}
                            placeholder="Enter Id"
                            onChange={handleStudentData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete Student"
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

export default DeleteStudent;