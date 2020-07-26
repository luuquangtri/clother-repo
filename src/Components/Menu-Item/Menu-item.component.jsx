import React from 'react';
import PropTypes from 'prop-types';
import "./Menu-item.styles.scss"
MenuItem.propTypes = {
    title: PropTypes.string,
};

function MenuItem(props) {
    const { title, imageUrl, size } = props;
    const backGroundStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};
    return (
        <div className={`${size} menu-item`} style={backGroundStyle}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    );
}

export default MenuItem;