import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from '../../user/Signup';
import Signin from '../../user/Signin';
import BackToHome from '../../user/user-core/BackToHome';
import PrivateRoute from "../../Auth/user/PrivateRoute";
import Myprofile from "../../user/Myprofile";
import Updateprofile from "../../user/Updateprofile";
//import Menu from "../../user/user-core/Menu";    // i used "Menu" on the Layout


const Routes = () => {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route path="/" exact component={BackToHome} /> 
                <Route path="/Signin" exact component={Signin} /> 
                <Route path="/Signup" exact component={Signup} />
                <PrivateRoute path="/Myprofile" exact component={Myprofile} />
                <PrivateRoute path="/Updateprofile/:userId" exact component={Updateprofile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

