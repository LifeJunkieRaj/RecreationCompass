import React from 'react'
import { NavLink } from 'react-router-dom';
import "../css/navbar.css"


export default function NavBar(props) {
    if(props.pageName ==="login" || props.pageName==="signup" ){
        return(
            <div className="container nav d-flex ">
            <div>
                <NavLink className="btn btn-warning m-3" to="/">Home</NavLink>
            </div>
            

        </div>
        )
    }
    else if(props.pageName ==="loggedinpage"){
        return(
            <div className="container nav d-flex justify-content-between ">
            
           
            <div>
                <NavLink className="btn btn-warning m-3" to="/">Home</NavLink>
            </div>
            <div>
                <NavLink className="btn btn-warning m-3" to="/">Logout</NavLink>
            </div>

        </div>
        )
    }
    else{
        return (

            <div className="container nav d-flex justify-content-between">
                <div>
                    <NavLink className="btn btn-warning m-3" to="/">Home</NavLink>
                </div>
                <div className="navbar-logo-container-">
                    <NavLink className="m-1" to="/"><h1>Recreation Compass</h1></NavLink>
                </div>
                <div>
                    <NavLink className="btn btn-warning m-3" to="/login">Login</NavLink>
                    <NavLink className="btn btn-warning" to="/signup">SignUp</NavLink>
                </div>
                <div className="bar-divider"></div>
            </div>
        )
    }
   
}
