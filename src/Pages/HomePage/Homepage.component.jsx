import React from 'react';
import "./Homepage.styles.scss";
function HomePage(props) {
    return (
        <div className="home-page">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="sub-title">Shop Now</span>
                    </div>

                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="sub-title">Shop Now</span>
                    </div>

                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="sub-title">Shop Now</span>
                    </div>

                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENTS</h1>
                        <span className="sub-title">Shop Now</span>
                    </div>

                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENTS</h1>
                        <span className="sub-title">Shop Now</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;