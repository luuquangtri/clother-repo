import React from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import "./Header.styles.scss";
function Header() {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                <Link className="option" to="/signin">SIGN IN</Link>
            </div>
        </div>
    );
}

export default Header;