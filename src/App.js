import React from "react";
import {Route, Link} from "react-router-dom";

import './App.css';
import LoginPage from "./views/login-page";
import RegistrationPage from "./views/registration-page";
import RecoverPassword from "./views/recoverPassword-page/RecoverPassword ";


function App() {
    return (
        <div className='App'>
            <Route path='/registration'>
                <RegistrationPage/>
            </Route>
            <Route path='/recover'>
                <RecoverPassword/>
            </Route>
            <Route path='/'>
                <LoginPage/>
            </Route>
        </div>
    );
}

export default App;
