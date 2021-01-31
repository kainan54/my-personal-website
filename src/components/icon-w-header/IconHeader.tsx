import React from 'react';
import './IconHeader.scss';
interface Props {
    title: string;
    dimensions?: number;
    icon: string;
}
const IconHeader: React.FC<Props> = function ({ title, dimensions, icon }) {
    return (
        <div className="icon-header" style={dimensions ? { height: `${dimensions}%`, width: `${dimensions}%` } : {}}>
            <img src={icon} />
            <h1>{title}</h1>
        </div>
    );
};

export default IconHeader;
