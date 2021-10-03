import React from "react";
import {Route, Switch} from "react-router-dom";

import './App.css';
import LoginPage from "./views/login-page";
import RegistrationPage from "./views/registration-page";
import RecoverPassword from "./views/recover-page/";
import Header from "./components/header/Header";

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route path='/registration'>
                    <RegistrationPage/>
                </Route>
                <Route path='/recover'>
                    <RecoverPassword/>
                </Route>
                <Route path='/'>
                    <Header/>
                    {/*<LoginPage/>*/}
                </Route>
            </Switch>

        </div>
    );
}

export default App;
