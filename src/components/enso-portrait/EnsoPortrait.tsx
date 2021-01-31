import React from 'react';
import './EnsoPortrait.scss';
import enso from '../../assets/enso2.png';
interface Props {
    img: string;
    dimensions?: number;
}
const EnsoPortrait: React.FC<Props> = function ({ img, dimensions, children }) {
    return (
        <div className="enso-container">
            <img
                className="enso-img"
                style={dimensions ? { height: `${dimensions}rem`, width: `${dimensions}rem` } : {}}
                src={enso}
            />
            <img
                className="profile-img"
                style={dimensions ? { height: `${dimensions}rem`, width: `${dimensions}rem` } : {}}
                src={img}
            />
            <span className="profile-header">{children}</span>
        </div>
    );
};

export default EnsoPortrait;
