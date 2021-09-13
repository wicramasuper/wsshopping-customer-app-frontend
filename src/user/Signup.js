import React, {useState} from "react";
import { Link } from "react-router-dom";
import Layout from '../user/user-core/Layout';
import { signup } from "../Auth/user/user";
import Sidebar from '../core/navbarSign';

const Signup = () => {

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
        confirmpassword: '',
        error: '',
        success: false
    });

    const {firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, password, confirmpassword, success, error} = values

    const handleChange = firstname => event => {
        setValues({...values, error: false, [firstname]: event.target.value})
    };
 

    const clickSubmit = (event) => {
        event.preventDefault()
        
        setValues({...values, error: false });

        signup({ firstname, lastname, email, phoneno, addressl1, addressl2, city, postalcode, password, confirmpassword })
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error, success: false});
            } else {
                setValues({
                    ...values,
                    firstname: '',
                    lastname: '',
                    email: '',
                    phoneno: '',
                    addressl1: '',
                    addressl2: '',
                    city: '',
                    postalcode: '',
                    password: '',
                    confirmpassword: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">First name</label>
                <input onChange={handleChange('firstname')} type="text" className="form-control" value={firstname} />
            </div>

            <div className="form-group">
                <label className="text-muted">Last name</label>
                <input onChange={handleChange('lastname')} type="text" className="form-control" value={lastname} />
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Phone number</label>
                <input onChange={handleChange('phoneno')} type="text" className="form-control" value={phoneno} />
            </div>

            <div className="form-group">
                <label className="text-muted">Address Line 1</label>
                <input onChange={handleChange('addressl1')} type="text" className="form-control" value={addressl1} />
            </div>

            <div className="form-group">
                <label className="text-muted">Address Line 2</label>
                <input onChange={handleChange('addressl2')} type="text" className="form-control" value={addressl2} />
            </div>

            <div className="form-group">
                <label className="text-muted">City</label>
                <input onChange={handleChange('city')} type="text" className="form-control" value={city} />
            </div>

            <div className="form-group">
                <label className="text-muted">Postal Code</label>
                <input onChange={handleChange('postalcode')} type="text" className="form-control" value={postalcode} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>

            <div className="form-group">
                <label className="text-muted">Confirm Password</label>
                <input onChange={handleChange('confirmpassword')} type="password" className="form-control" value={confirmpassword} />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary" style={{ marginLeft : '35%', marginBottom: '20px'}}>Create My Account</button>

        </form>
    );

    const showError = () => (
        
            <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : 'none', marginTop: '10px', marginBottom: '10px'}}>
            Welcome! Your Account is Created. Please <Link to="/Signin">Signin</Link>
        </div>
    );


    //confirm password section I not implement yet
return (
    <Sidebar>
    <Layout title="Signup" description="" className="container col-4 offset-md-4">

        {signupForm()}
        {showSuccess()}
        {showError()}
        
    </Layout>
    </Sidebar>
    );

};

export default Signup;