import React from 'react';
import PropTypes from 'prop-types';
import "./CustomButton.styles.scss";
CustomButton.propTypes = {

};

function CustomButton(props) {
    const { children, ...ortherProps } = props;
    return (
        <button className="custom-button" {...ortherProps}>{children}</button>
    );
}

export default CustomButton;