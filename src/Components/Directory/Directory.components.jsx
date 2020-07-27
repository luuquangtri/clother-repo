import MenuItem from 'Components/Menu-Item/Menu-item.component';
import React, { useState } from 'react';
import "./Directory.styles.scss";
function Directory() {
    const initial = [
        {
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            linkUrl: "hats"
        },
        {
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: "jackets"
        },
        {
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: "sneakers"
        },
        {
            title: "woments",
            imageUrl: "https://i.ibb.co/GCCdy8t/woments.png",
            size: "large",
            id: 4,
            linkUrl: "woments"
        },
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
            size: "large",
            id: 5,
            linkUrl: "mens"
        }
    ]


    const [sectionMenus] = useState(initial);
    return (
        <div className="directory-menu">
            {
                sectionMenus.map(({ id, ...ortherSectionProps }) => (
                    <MenuItem
                        key={id}
                        {...ortherSectionProps}
                    />
                ))
            }
        </div>
    );
}

export default Directory;