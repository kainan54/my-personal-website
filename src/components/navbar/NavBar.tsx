import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import './NavBar.scss';
import resume from '../../assets/resume.pdf';
const NavBar: React.FC<RouteComponentProps> = function ({ history, location }) {
    const [navVisibility, setNavisibility] = useState(false);
    return (
        <div className="nav-container">
            <div className="nav-bar">
                <div className="nav-icon" onClick={() => setNavisibility((prevVisibility) => !prevVisibility)}>
                    <div className={`nav-line ${navVisibility ? 'nav-x-hidden' : ''}`}></div>
                    <div className={`nav-line ${navVisibility ? 'nav-x1' : ''}`}></div>
                    <div className={`nav-line ${navVisibility ? 'nav-x2' : ''}`}></div>
                </div>
                <h1 className="nav-header">Navigation</h1>
                {navVisibility ? (
                    <div className="nav-menu">
                        <div
                            className="nav-menu-item"
                            onClick={() => {
                                if (location.pathname === '/projects') {
                                    history.push({
                                        pathname: '/home',
                                        state: { transition: 'slide-left', timeout: 1500 },
                                    });
                                } else if (location.pathname === '/about') {
                                    history.push({
                                        pathname: '/home',
                                        state: { transition: 'slide-right', timeout: 1500 },
                                    });
                                }
                                setNavisibility((navVisibility) => !navVisibility);
                            }}
                        >
                            Home Page
                        </div>
                        <div
                            className="nav-menu-item"
                            onClick={() => {
                                if (location.pathname !== '/about')
                                    history.push({
                                        pathname: '/about',
                                        state: { transition: 'slide-left', timeout: 1500 },
                                    });
                                setNavisibility((navVisibility) => !navVisibility);
                            }}
                        >
                            About Page
                        </div>
                        <div
                            className="nav-menu-item"
                            onClick={() => {
                                if (location.pathname !== '/projects')
                                    history.push({
                                        pathname: '/projects',
                                        state: { transition: 'slide-right', timeout: 1500 },
                                    });
                                setNavisibility((navVisibility) => !navVisibility);
                            }}
                        >
                            Projects Page
                        </div>
                        <div className="nav-menu-item">
                            <a href={resume}>Resume.pdf</a>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default withRouter(NavBar);
