import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteComplaint = () => {

    const [sm, setSm] = useState({
        complaintId: 0,
        note: '',
        date:'',
        studentId:{
            studentId:0,
            studentName:'',
            studentPassword:''
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
        axios.delete(`http://localhost:8083/school-admin/student/student/deleteComplaint/${sm.complaintId}`)
            .then((response) => {
               // console.log(response);
                setSm(response.data);
                alert('Complaint deleted successfully!')
            }).catch(error => {
               // console.log(error.message);
                alert('Complaint ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete Complaints</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Complaints</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteSm} >
                    <div>
                        <p>Complaint Id</p>
                        <input
                            type="number"
                            id="complaintId"
                            name="complaintId"
                            className="form-control mb-3"
                            value={sm.complaintId}
                            placeholder="Enter Id"
                            onChange={handleSmData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete"
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

export default DeleteComplaint;