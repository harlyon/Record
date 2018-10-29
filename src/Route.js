import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';

const BaseRouter = () => {
    return (
        <div>
            <Route exact path ='/' component={Login}/>
            <Route exact path ='/home' component={Home}/>
            <Route exact path ='/register' component={Register}/>
        </div>
    );
};

export default BaseRouter;