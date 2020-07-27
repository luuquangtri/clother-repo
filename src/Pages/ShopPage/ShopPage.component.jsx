import PreviewCollections from 'Components/PreviewCollections/PreviewCollections.component';
import React, { useState } from 'react';
import SHOP_DATA from './ShopPage.data';

function ShopPage() {
    const initial = SHOP_DATA;
    const [collections] = useState(initial);
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...ortherCollection }) => (
                    <PreviewCollections key={id} {...ortherCollection} />
                ))
            }
        </div>
    );
}

export default ShopPage;