import MenuItem from 'Components/Menu-Item/Menu-item.component';
import React, { useState } from 'react';
import "./Directory.styles.scss";
function Directory() {
    const initial = [
        {
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
        },
        {
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2
        },
        {
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3
        },
        {
            title: "woments",
            imageUrl: "https://i.ibb.co/GCCdy8t/woments.png",
            size: "large",
            id: 4
        },
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/mens.pngF",
            size: "large",
            id: 5
        }
    ]


    const [sectionMenus, setSectionMenus] = useState(initial);
    return (
        <div className="directory-menu">
            {
                sectionMenus.map(sectionMenu => (
                    <MenuItem title={sectionMenu.title} key={sectionMenu.id} imageUrl={sectionMenu.imageUrl} size={sectionMenu.size} />
                ))
            }
        </div>
    );
}

export default Directory;