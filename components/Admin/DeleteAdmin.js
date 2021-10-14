import axios from 'axios';
import React, { useState, useEffect } from 'react';


const DeleteAdmin = () => {


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


    const submitDeleteAdmin = (evt) => {

        console.log(admin);
        axios.delete(`http://localhost:8082/deleteAdmin/${admin.adminId}`)
            .then((response) => {
                console.log(response);
                setAdmin(response.data);
                alert('Admin deleted successfully!')
            }).catch(error => {
                console.log(error.message);
                alert('Enter Correct Details!')
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Delete Admin</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Delete Admin</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitDeleteAdmin} >
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
                        
                       
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Delete Admin"
                        />
                    </div>
                </form>
                 <h1>{admin.adminId}</h1>
                
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}


export default DeleteAdmin;