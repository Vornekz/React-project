import React, {useEffect, useState} from 'react';
import logo from "assets/image/logo.png"
import "styles/Nav.scss"
import {Link, useLocation} from "react-router-dom";

const Nav = () => {
    let location = useLocation().pathname
    const hoverEffect = (link:string): string => {
        if (location === link) {
            return "link-hover"
        } else {
            return "no-clicked"
        }
    }

    return (
        <div className="nav">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo_img"/>
            </div>
            <nav className="nav-links">
                <ul>
                    <li className="nav-links__list">
                        <Link to="/" className={hoverEffect("/")} >
                            Home
                        </Link>
                    </li>
                    <li className="nav-links__list">
                        <Link to="/team" className={hoverEffect("/team")} >
                            Page
                        </Link>
                    </li>
                    <li className="nav-links__list">
                        <Link to="/about" className={hoverEffect("/about")} >
                            About
                        </Link>
                    </li>
                    <li className="nav-links__list">
                        <Link to="/contact" className={hoverEffect("/contact")} >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;