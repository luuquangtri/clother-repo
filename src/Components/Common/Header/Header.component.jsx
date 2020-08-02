import React, { Fragment } from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import "./Header.styles.scss";
import { auth } from 'firebase/firebase.utils';
import { useSelector } from 'react-redux';
function Header(props) {
    const currentUser = useSelector(state => state.user.currentUser);

    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ?
                        (
                            <Fragment>
                                <div className="option">{currentUser.displayName}</div>
                                <Link onClick={() => auth.signOut()} to="/signin" className="option">SIGN OUT</Link>
                            </Fragment>

                        )
                        :
                        (<Link className="option" to="/signin">SIGN IN</Link>)
                }
            </div>
        </div>
    );
}

export default Header;