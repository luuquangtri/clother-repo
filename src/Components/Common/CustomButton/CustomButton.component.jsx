import React from 'react';
import PropTypes from 'prop-types';
import "./CustomButton.styles.scss";
CustomButton.propTypes = {

};

function CustomButton(props) {
    const { children, isGoogleSignIn, ...ortherProps } = props;
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...ortherProps}>{children}</button>
    );
}

export default CustomButton;