import './App.css';
import LoginPage from "./views/login-page";
import RegistrationPage from "./views/registration-page";
import {Route, Link} from "react-router-dom";


function App() {
    return (
        <div className='App'>
            <div>
                <Link to='/registration'>Reg</Link>
            </div>
            <div>
                <Link to='/'>Log</Link>
            </div>
            <Route path='/registration'>
                <RegistrationPage/>
            </Route>
            <Route path='/'>
                <LoginPage/>
            </Route>
        </div>
    );
}

export default App;
