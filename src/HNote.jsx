import React from "react";
import logo from "./images/images.png"
const Header = () =>{
    return(
        <>
        <nav className="navbar bg-light" >
        <div className="container-fluid" >
            <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
            Keep Notes
            </a>
        </div>
        </nav>
    </>
    )

}

export default Header