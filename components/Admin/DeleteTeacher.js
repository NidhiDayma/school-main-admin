import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteTeacher = () => {


    const [teacher, setTeacher] = useState({
        teacherId: 0,
        teacherName: '',
        teacherPassword: ''
    });



    const handleTeacherData = (evt) => {


        console.log("handleTeacherData ", evt.target.name, evt.target.value);
        setTeacher({
            ...teacher,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitDeleteTeacher  = (evt) => {

        console.log(teacher);
        axios.delete(`http://localhost:8082/deleteTeacher/${teacher.teacherId}`)
            .then((response) => {
                console.log(response);
                setStudent(response.data);
                alert('Teacher deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Student ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete teacher</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete teacher</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteTeacher} >
                    <div>
                        <p>Teacher Id</p>
                        <input
                            type="number"
                            id="teacherId"
                            name="teachertId"
                            className="form-control mb-3"
                            value={teacher.teacherId}
                            placeholder="Enter Id"
                            onChange={handleTeacherData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete Teacher"
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

export default DeleteTeacher;