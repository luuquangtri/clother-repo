import React from 'react';
import "./PreviewCollection.styles.scss";
function PreviewCollectionItem(props) {
    const { id, name, price, imageUrl } = props;
    return (
        <div className="collection-item">
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>

    );
}

export default PreviewCollectionItem;