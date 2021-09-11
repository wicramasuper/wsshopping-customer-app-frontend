import React from 'react';
import "./style.css"
import {Link} from 'react-router-dom';
import wsLogo from './wsLogo.jpg';

const Sidebar =({children})=>(

    

    <div>

   

<section id="wrapper">
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        
        <Link class="navbar-brand">WS<span class="main-color">Shopping</span></Link>
      </div>
      <div class=" navbar-right">
       
        
        <Link class="navbar-item" to="/">My Cart</Link>
        <Link class="navbar-item" to="/">My Orders</Link>
        <Link class="navbar-item" to="/">My Profile</Link>
        <Link class="navbar-item" to="/">Sign Out</Link>
        
      <img
         class="rounded-pill img-fluid navbar-item"
         width="100"
         src={wsLogo}
         
         alt=""/>
      </div>
    
      
    </div>
  </nav>

  <div class="p-4">
    <div class="welcome">
      <div class="content rounded-3 p-3">
          <div class="body-bg"> 
      <div>{children}</div>
      </div>

      </div>
      
   </div>
    
  </div>
</section>

</div>
);
export default Sidebar;