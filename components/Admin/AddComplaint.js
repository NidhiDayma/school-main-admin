import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const AddComplaint = () => {
 
    const [complaint, setComplaint] = useState({
 
            complaintId: 0,
            note: '',
            date:'',
            studentId:{
                studentId:0,
                studentName:'',
                studentPassword:''

            }
 
    });


 
    function handleComplaints(level) {
        return (evt) => {
            if (!level) {
                console.log("handleComplaints", evt.target.name, evt.target.value);
                setComplaint({
                    ...complaint,
                    [evt.target.name]: evt.target.value,
                });
            }
            else {
                setComplaint(
                    {
                        ...complaint,
                        [level]: {
                            ...complaint[level],
                            [evt.target.name]: evt.target.value,
                        }
                    }
                );
            }

            evt.preventDefault();
        };
    }
 
        
    const submitComplaint = (evt) =>{
        console.log(complaint);
        axios.post('http://localhost:8083/school-admin/student/student/addComplaint',complaint)
        .then((response) => {
            console.log(response);
            setComplaint(response.data);
            alert('complaint added successfully')

        }).catch(error=>{
            console.log(error.message);
            alert('Complaint not Added!!')
        });
        evt.preventDefault();
    }
    return (
        <div className="container" >
            <title>Add Complaints</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Add Complaints!!</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitComplaint} >
                        <div>
                            <p>student ID</p>
                            <input
                                type="number"
                                id="studentId"
                                name="studentId"
                                className="form-control mb-3"
                                value={complaint.studentId.studentId}
                                placeholder="Enter Student Id"
                                onChange={handleComplaints('studentId')}
                            />
                            <p>Complaint ID</p>
                            <input
                                type="number"
                                id="complaintId"
                                name="complaintId"
                                className="form-control mb-3"
                                value={complaint.complaintId}
                                placeholder="ComplaintId"
                                onChange={handleComplaints()}
                            />


                            <p>Complaints</p>
                            <input
                                type="text"
                                id="note"
                                name="note"
                                className="form-control mb-3"
                                value={complaint.note}
                                placeholder="Enter your complaint"
                                onChange={handleComplaints()}

                            />
                            <p>Date</p>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control mb-3"
                                value={complaint.date}
                                placeholder="date"
                                onChange={handleComplaints()}

                            />
                            

                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Submit"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Student ID</th>
                                    <th scope="col">Complaint Id</th>
                                    <th scope="col">Complaints</th>
                                    <th scope="col">date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    <th scope="row">{complaint.studentId.studentId}</th>
                                    <td>{complaint.complaintId}</td>
                                    <td>{complaint.note}</td>
                                    <td>{complaint.date}</td>



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

export default AddComplaint;