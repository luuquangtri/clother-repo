import React from 'react';
import "./PreviewCollections.styles.scss";
function PreviewCollections(props) {
    const { title, items } = props;


    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map(({ id, ...ortherProps }) => (
                        <div key={id}>{ortherProps.name}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default PreviewCollections;