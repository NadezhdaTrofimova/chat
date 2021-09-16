import React from "react";
import {Route, Link} from "react-router-dom";

import './App.css';
import LoginPage from "./views/login-page";
import RegistrationPage from "./views/registration-page";


function App() {
    return (
        <div className='App'>
            {/*<div>*/}
            {/*    <Link to='/registration'>Reg</Link>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Link to='/login'>Log</Link>*/}
            {/*</div>*/}
            <Route path='/'>
                <LoginPage/>
            </Route>
            <Route path='/registration'>
                <RegistrationPage/>
            </Route>
        </div>
    );
}

export default App;
