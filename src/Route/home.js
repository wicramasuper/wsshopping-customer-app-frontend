import React  from 'react';
import Home from './customer-core/home';

import{BrowserRouter,Switch,Route} from 'react-router-dom';

const Routes =()=>{
    return (
        <BrowserRouter>

            
            <Switch>
                
                <Route path="/home" exact component={Home}/>


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;