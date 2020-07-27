import Directory from 'Components/Directory/Directory.components';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Homepage.styles.scss";
function HomePage() {
    return (
        <div className="home-page">
            <Directory />
        </div>
    );
}

export default HomePage;