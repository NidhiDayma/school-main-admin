import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.jpeg';



const Header = () => {

    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark button1">
                <div class="container">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo}
                            height="80px" width="250px" alt="Capgemini" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">

                           
                         
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item align-end">
                                {/* align right this item  */}
                                {/* <Link className="nav-link" to="/register">Register</Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );

    // return (
    //     <div>
    //         <Link to="/home">Home </Link>
    //         <Link to="/sample">Sample </Link>
    //         <Link to="/javadata">JavaData </Link>
    //         <Link to="/login">Login </Link>
    //         <Link to="/register">Register </Link>
    //     </div>
    // );
}
export default Header;