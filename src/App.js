import React from "react";
import {Route, Switch} from "react-router-dom";

import './App.css';
import LoginPage from "./views/login-page";
import RegistrationPage from "./views/registration-page";
import RecoverPassword from "./views/recover-page/";
import SearchChatPage from "./views/chat-search-page";
import MessagesPage from "./views/messages-page";
import SettingsPage from "./views/settings-page";
import photoUser from "./image/usersPhoto/icon-user3.png";



function App() {


    const [message] = React.useState([
            {
                id: 1,
                userName: "ФИО пользователя",
                textMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n" +
                    "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n" +
                    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n" +
                    "irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
                    "anim id est laborum.",
                timeTitle: "12:15",
                photoUser: photoUser
            },
            {
                id: 2,
                userName: "ФИО пользователя",
                textMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n" +
                    "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n" +
                    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n" +
                    "irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
                    "anim id est laborum.",
                timeTitle: "12:15",
                photoUser: photoUser
            },
            {
                id: 3,
                userName: "ФИО пользователя",
                textMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n" +
                    "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n" +
                    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n" +
                    "irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
                    "anim id est laborum.",
                timeTitle: "12:15",
                photoUser: photoUser
            },
            {
                id: 4,
                userName: "ФИО пользователя",
                textMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n" +
                    "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n" +
                    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n" +
                    "irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
                    "anim id est laborum.",
                timeTitle: "12:15",
                photoUser: photoUser
            },
            {
                id: 5,
                userName: "ФИО пользователя",
                textMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n" +
                    "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\n" +
                    "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\n" +
                    "irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n" +
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\n" +
                    "anim id est laborum.",
                timeTitle: "12:15",
                photoUser: photoUser
            }
        ]
    )


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
                    <SearchChatPage message={message}/>
                </Route>
                <Route path='/messages'>
                    <MessagesPage message={message}/>
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
