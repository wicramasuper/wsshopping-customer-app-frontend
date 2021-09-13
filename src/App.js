import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateR from './customer-core/CreateR';
import EditR from './customer-core/EditR';
import HomeR from './customer-core/HomeR';
import NavBar from './customer-core/NavBar';
import DetailsR from './customer-core/DetailsR';

export default class App extends Component {

render(){
return (
<BrowserRouter>
<div className = "container">
<NavBar/>
<Route path = "/" exact component={HomeR}></Route>
<Route path = "/add" component={CreateR}></Route>
<Route path = "/edit/:id" component={EditR}></Route>
<Route path = "/post/:id" component={DetailsR}></Route>


</div>
</BrowserRouter>
)
}
}
