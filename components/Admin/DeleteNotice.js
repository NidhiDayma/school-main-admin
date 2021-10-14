import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteNotice = () => {

    const [notice, setNotice] = useState({
        noticeId: 0,
        note: '',
        date:'',
        studentId:{
            studentId:0,
            studentName:'',
            studentPassword:''
        }
        

    });

   

    const handleNoticeData = (evt) => {


        console.log("handleNoticeData", evt.target.name, evt.target.value);
        setNotice({
            ...notice,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitDeleteNotice = (evt) => {

        console.log("submitDeleteNotice");
        axios.delete(`http://localhost:8083/school-admin/student/student/deleteNotice/${notice.noticeId}`)
            .then((response) => {
               // console.log(response);
                setNotice(response.data);
                alert('Notice deleted successfully!')
            }).catch(error => {
               // console.log(error.message);
                alert('Notice ID does not exist!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete Notice</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Notice</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteNotice} >
                    <div>
                        <p>Notice Id</p>
                        <input
                            type="number"
                            id="noticeId"
                            name="noticeId"
                            className="form-control mb-3"
                            value={notice.noticeId}
                            placeholder="Enter Id"
                            onChange={handleNoticeData}
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

export default DeleteNotice;