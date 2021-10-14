import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
const AddAdmin = () => {
 
    const [admin, setAdmin] = useState({
 
            adminId: 0,
            adminName: '',
            adminPassword: ''
 
    });


 
    const handleAdminData = (evt) => {
 
        console.log("handleAdminData", evt.target.name, evt.target.value);
        setAdmin({
            ...admin,
            [evt.target.name]: evt.target.value,
           
 
        });
 
        evt.preventDefault();
    }
 
    const submitAddAdmin = (evt) => {
 
        console.log(admin);
        axios.post('http://localhost:8082//addAdmin', admin)
            .then((response) => {
                console.log(response);
                setAdmin(response.data);
                alert(`Admin added successfully!`)
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    
 
    return (
        <div className="container" >
            <title>Add Admin</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Add Admin</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitAddAdmin} >
                    <div>
                        <p>Admin Id</p>
                        <input
                            type="number"
                            id="adminId"
                            name="adminId"
                            className="form-control mb-3"
                            value={admin.adminId}
                            placeholder="Enter Id"
                            onChange={handleAdminData}
                        />
                        <p>Admin Name</p>
                        <input
                            type="text"
                            id="adminName"
                            name="adminName"
                            className="form-control mb-3"
                            pattern="[A-Za-z ]+" 
                            title="Please enter only characters!"
                            minLength="3"
                            maxLength="20"
                            value={admin.adminName}
                            placeholder="Enter Name"
                            onChange={handleAdminData}
                        />
                        <p>Passsword</p>
                        <input
                            type="password"
                            id="adminPassword"
                            name="adminPassword"
                            className="form-control mb-3"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
                            value={admin.adminPassword}
                            placeholder="Enter Password"
                            onChange={handleAdminData}
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Add Admin"
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
 
export default AddAdmin;