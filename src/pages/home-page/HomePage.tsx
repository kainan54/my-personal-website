import React from 'react';
import ExpandingImage from '../../components/expanding-image/ExpandingImage';
import './HomePage.scss';
import test from '../../assets/train-back-drop.png';
import gitHubIcon from '../../assets/git-hub-logo.png';
import linkedinIcon from '../../assets/linkedin-square-logo.png';
import gmailLogo from '../../assets/gmail-logo.png';
import mediumLogo from '../../assets/medium-logo.png';
import SocialIcon from '../../components/social-icon/SocialIcon';
import ArrowButton from '../../components/arrow-button/ArrowButton';

const HomePage: React.FC = function () {
    return (
        <div className="home-page">
            <div className="content">
                <ExpandingImage imageUrl={test} />
                <h1 className="home-header">Kainan Doneson</h1>
                <span className="home-sub-header">
                    Is an aspiring Full Stack Junior Developer from Brooklyn with a passion for learning and developing
                    code
                </span>
                <div className="home-nav-btns">
                    <ArrowButton path="/me" animState={{ transition: 'slide-left', timeout: 1000 }}>
                        About me
                    </ArrowButton>
                    <ArrowButton path="/projects" animState={{ transition: 'slide-right', timeout: 1000 }}>
                        My Projects
                    </ArrowButton>
                </div>
            </div>

            <div className="social-zone">
                <SocialIcon imageUrl={gmailLogo} linkUrl="temp" extraPadding />
                <SocialIcon imageUrl={gitHubIcon} linkUrl="temp" />
                <SocialIcon imageUrl={linkedinIcon} linkUrl="temp" extraPadding />
                <SocialIcon imageUrl={mediumLogo} linkUrl="temp" />
            </div>
        </div>
    );
};

export default HomePage;
