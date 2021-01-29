import React from 'react';
import './NavBar.scss';
const NavBar: React.FC = function () {
    return (
        <div className="nav-bar">
            <div className="nav-icon">
                <div className="nav-line"></div>
                <div className="nav-line"></div>
                <div className="nav-line"></div>
            </div>
            <h1 className="nav-header">Navigation</h1>
        </div>
    );
};

export default NavBar;
