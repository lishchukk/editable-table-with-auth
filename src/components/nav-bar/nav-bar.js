import React from 'react';
import {Link} from "react-router-dom";
import './nav-bar.scss'

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to='/contacts-page' className="nav-link" href="#" >
                            Contacts
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login-page' className="nav-link" href="#" >Login</Link>
                    </li>

                </ul>

            </div>
        </nav>
    );
};

export default NavBar;