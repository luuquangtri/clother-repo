import PropTypes from 'prop-types';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import "./Menu-item.styles.scss";
MenuItem.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    size: PropTypes.string,
};

function MenuItem(props) {
    const { title, imageUrl, size, linkUrl } = props;
    const history = useHistory();
    const match = useRouteMatch();
    const backGroundStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};
    return (
        <div
            className={`${size && size} menu-item`}
            style={backGroundStyle}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="sub-title">Shop Now</span>
            </div>
        </div>
    );
}

export default MenuItem;