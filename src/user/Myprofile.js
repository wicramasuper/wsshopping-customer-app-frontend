import React, { useState } from "react";
import Layout from "./user-core/Layout";
import { isAuthenticated, deleteUser } from "../Auth/user/user";
import { Link , Redirect} from "react-router-dom";

const Myprofile = () => {

    const {user: {_id, firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, role}} = isAuthenticated();
    const [success, setSuccess] = useState(false);
    
    

    const UserLinks = () => {
        return (
                <Link className='nav-link' to={`/Updateprofile/${_id}`}><button className="btn btn-success" style={{width: '65%', marginLeft: '72%'}}>Update My Account</button></Link>
           
        );
    };


    const destroy = userId=> {

        var x = window.confirm("Are you sure you want to delete this Account ? ");


    if (x === true) {
        deleteUser(userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setSuccess(true);
                console.log("delete");
            }
        });

    }


    }

    const redirectUser = success => {
        if(success)
        return <Redirect to="/Signup" />;
    }

    

    return (
        <Layout title="My Profile" description={`Hi.. Good Day ${firstname}!`} className="container-fluid">

            <div className="card mb-5" style={{marginLeft: '20%', marginRight: '20%'}}>
                <h3 className="card-header"style={{textAlign: 'center'}}>My Profile</h3>
                <table border='1' style={{textAlign: 'center'}}>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>First Name</td>
                        <td>{firstname}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Last Name</td>
                        <td>{lastname}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Phone Number</td>
                        <td>{phoneno}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Address Line 1</td>
                        <td>{addressl1}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Address Line 2</td>
                        <td>{addressl2}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>City</td>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Postal Code</td>
                        <td>{postalcode}</td>
                    </tr>
                    <tr>
                        <td style={{width: '50%', padding: '15px'}}>Role</td>
                        <td>{role === 1 ? 'Admin' : "Registered Customer"}</td>
                    </tr>
                </table>
            </div>
             
            <div className="row">
                <div className="col-6">
                    {UserLinks()}
         
                </div>
            
            </div>
            
            <div style={{marginTop: '10px'}}>
               
    
                <button className="btn btn-danger col-6" style={{marginLeft : '34.8%', width: '30.5%', marginBottom: '40px'}}><span onClick={() => destroy(`${_id}`)} className="badge badge-danger badge=pill p-2" style={{ cursor: "pointer" }}>Delete My Account</span></button>   
            </div>
            {redirectUser(success)}

        </Layout>
    );
};

export default Myprofile;