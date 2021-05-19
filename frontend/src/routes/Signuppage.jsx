import React from 'react';
import {NavLink} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import "../css/signup.css";


export default function Signuppage() {
    return (
        <div className="signup-background-container">
        <div>
            <NavBar pageName="signup"/>
               <div className=" login-form-wrapper d-flex justify-content-center align-items-center">
                          <form className="border p-3 border-pill border-success" >
                          <h1 className="text-center m-3">Sign up</h1>
  <div className="form-group m-1">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group m-1">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-check m-1">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="form-group">
        Already have an account ?<NavLink to="/login">Login</NavLink>  </div>
  <button type="submit" className="btn btn-warning m-1">Submit</button>
        </form>
               </div>
        </div>
        </div>
    )
}
