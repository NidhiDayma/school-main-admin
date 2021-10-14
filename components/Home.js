import React from 'react';
import { Link } from 'react-router-dom';
import BsStuff from './BsStuff';

const Home = () => {
    return (
        <div className="container" >
     
            <h1 className="display-4 text-primary"></h1>
            <p></p>
         
            {/* <Link className="" to="/home">
                        <img src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            height="500px" width="900px" alt="Capgemini" />
                    </Link> */}

                 
           
            <BsStuff /> 
          
        </div>
    );
}

export default Home;