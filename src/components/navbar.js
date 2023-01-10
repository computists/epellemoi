import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <section className='nav-section'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light CustomNavbar">
        <a className="navbar-brand" href="/">Eppelle Moi</a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/words">Words</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/test">Test</Link>
                </li>
            </ul>
        </div>
        </nav>
    </section>        
  );
};

export default NavbarMain;
