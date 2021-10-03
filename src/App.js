import React from "react";
import {Route, Switch} from "react-router-dom";

import './App.css';
import LoginPage from "./views/login-page";
import RegistrationPage from "./views/registration-page";
import RecoverPassword from "./views/recover-page/";
import SearchChatPage from "./views/chat-search-page";
import MessagesPage from "./views/messages-page";
import SettingsPage from "./views/settings-page";

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
                <Route path='/chats'>
                    <SearchChatPage/>
                </Route>
                <Route path='/messages'>
                    <MessagesPage/>
                </Route>
                <Route path='/settings'>
                    <SettingsPage/>
                </Route>
                <Route path='/'>
                    <LoginPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
