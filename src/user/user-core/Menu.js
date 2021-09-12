import React, {Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import { signout, isAuthenticated } from "../../Auth/user/user";

// for highlight current section  the nav bar
// history is actual browser history
const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#ff9900'}                    // i give orange color for now
    }
    else {
        return {color: '#ffffff'}                   // i give white color for now
    }
}


const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
             
                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/')} to="/">Back To Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/Myprofile')} to="/Myprofile">My Profile</Link>
                </li>

            {!isAuthenticated() && (
                <Fragment>
                       <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/Signin')} to="/Signin">Signin</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/Signup')} to="/Signup">Signup</Link>
                </li>

                </Fragment>    
            )}

            {isAuthenticated() && (
                 <li className="nav-item">
                 <span className="nav-link" style={{cursor: 'pointer', color: '#ffffff'}} onClick={() =>signout(() => {
                     history.push('/');
                 })}>Signout</span>
             </li>
            )}   

        </ul>
    </div>
);

export default withRouter(Menu);