import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Navbar(){
    return(
        <nav className ="navbar navba-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            </Link>
          <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={
                            window.location.pathname == "/"||window.location.pathname == "/home"
                            ? "nav-link active"
                            : "nav-link"
                        } >
                            Home
                    </Link>    
                </li>

            </ul>
           </div>
        </nav>
    );
}

export default Navbar;