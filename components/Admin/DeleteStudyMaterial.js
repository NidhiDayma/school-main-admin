import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteStudyMaterial = () => {

    const [sm, setSm] = useState({
        studyId: 0,
        name:'',
        teacherId:{
            teacherId:0,
            teacherName:'',
            teacherPassword:''
        }
        

    });

   

    const handleSmData = (evt) => {


        console.log("handleSmData", evt.target.name, evt.target.value);
        setSm({
            ...sm,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitDeleteSm = (evt) => {

        console.log("submitDeleteSm");
        axios.delete(`http://localhost:8082/school-admin/teacher/taecher/deleteStudyMaterial/${sm.studyId}`)
            .then((response) => {
               // console.log(response);
                setSm(response.data);
                alert('StudyMaterial deleted successfully!')
            }).catch(error => {
               // console.log(error.message);
                alert('StudyMaterial ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete StudyMaterial</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete StudyMaterial</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteSm} >
                    <div>
                        <p>StudyMaterial Id</p>
                        <input
                            type="number"
                            id="studyId"
                            name="studyId"
                            className="form-control mb-3"
                            value={sm.studyId}
                            placeholder="Enter Id"
                            onChange={handleSmData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete StudyMaterial"
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

export default DeleteStudyMaterial;