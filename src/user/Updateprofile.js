import React, { useEffect, useState } from "react";
import Layout from "./user-core/Layout";
import { isAuthenticated } from "../Auth/user/user";
import { Link, Redirect } from "react-router-dom";
import {read, update, updateUser} from './apiUser';

const Updateprofile = ({match}) => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneno: '',
        addressl1: '',
        addressl2: '',
        city: '',
        postalcode: '',
        password: '',
        error: false,
        success: false

    });
    const {token} = isAuthenticated();
    
    const {firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, password, error, success} = values;

    const init = userId => {
       // console.log(userId)
       read(userId, token).then(data => {
           if (data.error) {
               setValues({...values, error: true});
           } else {
               setValues({...values, firstname: data.firstname, lastname: data.lastname, email: data.email, phoneno: data.phoneno, addressl1: data.addressl1, addressl2: data.addressl2, city: data.city, postalcode: data.postalcode});
           }
       });
    };

    useEffect(() => {
        init(match.params.userId);
    }, []);

    const handleChange = name => e => {
        setValues({...values, error: false, [name]: e.target.value});
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, {firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, password}).then(data => {
            if(data.error) {
                //console.log(data.error)
                alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({...values,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    phoneno: data.phoneno,
                    addressl1: data.addressl1,
                    addressl2: data.addressl2,
                    city: data.city,
                    postalcode: data.postalcode,
                    success: true
                   });
                });
            }
        });
    };

    const redirectUser = success => {
        if(success)
        return <Redirect to="/Myprofile" />;
    }

    const profileUpdate = (firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, password) => (
        <form style={{marginLeft: '30%', marginRight: '30%'}}>
            <div className="form-group">
                <label className="text-muted">First Name</label>
                <input type="text" onChange={handleChange('firstname')} className="form-control" value={firstname}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Last Name</label>
                <input type="text" onChange={handleChange('lastname')} className="form-control" value={lastname}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Phone Number</label>
                <input type="text" onChange={handleChange('phoneno')} className="form-control" value={phoneno}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Address Line 1</label>
                <input type="text" onChange={handleChange('addressl1')} className="form-control" value={addressl1}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Address Line 2</label>
                <input type="text" onChange={handleChange('addressl2')} className="form-control" value={addressl2}/>

            </div>

            <div className="form-group">
                <label className="text-muted">City</label>
                <input type="text" onChange={handleChange('city')} className="form-control" value={city}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Postal Code</label>
                <input type="text" onChange={handleChange('postalcode')} className="form-control" value={postalcode}/>

            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="text" onChange={handleChange('password')} className="form-control" value={password}/>

            </div>

            <button onClick={clickSubmit} className="btn btn-primary" style={{width: '40%', marginLeft: '29.2%', marginTop: '20px', marginBottom: '40px'}}>Submit</button>
        </form>
    );

    return (
        <Layout title="Profile Update"
        description="Update Your Profile"
        className="container-fluid">

            <h2 className="mb-4" style={{textAlign: 'center', marginTop: '60px'}}>Profile Update</h2>
            {profileUpdate(firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, password)}
            {redirectUser(success)}
            
        </Layout>
    );

};

export default Updateprofile;
