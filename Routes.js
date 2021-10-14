import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';


import Login from './components/Login';
//import Register from './components/Register';

import PageNotFound from './components/PageNotFound';
import Home from './components/Home';

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>


                            <Route path="/login"> <Login /> </Route>

                            <Route path="/*"> <PageNotFound /> </Route>
                        </Switch>
                    </div>

                </div>
            </Router>
        </div>
    );
}
export default Routes;