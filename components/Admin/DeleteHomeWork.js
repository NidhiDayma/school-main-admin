import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteHomeWork = () => {

    const [hw, setHw] = useState({
        homeId: 0,
        name:'',
        teacherId:{
            teacherId:0,
            teacherName:'',
            teacherPassword:''
        }
        

    });

   

    const handleHwData = (evt) => {


        console.log("handleHwData", evt.target.name, evt.target.value);
        setHw({
            ...hw,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitDeleteHW = (evt) => {

        console.log("submitDeleteHW");
        axios.delete(`http://localhost:8082/school-admin/teacher/teacher/deleteHomework/${hw.homeId}`)
            .then((response) => {
               // console.log(response);
                setHw(response.data);
                alert('Homework deleted successfully!')
            }).catch(error => {
               // console.log(error.message);
                alert('Homework ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete Homework</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Homework</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteHW} >
                    <div>
                        <p>HomeWork Id</p>
                        <input
                            type="number"
                            id="homeId"
                            name="homeId"
                            className="form-control mb-3"
                            value={hw.homeId}
                            placeholder="Enter Id"
                            onChange={handleHwData}
                        />
                        
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete Homework"
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

export default DeleteHomeWork;