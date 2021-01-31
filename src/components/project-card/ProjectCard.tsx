import React, { useState } from 'react';
import ArrowButton from '../arrow-button/ArrowButton';
import './ProjectCard.scss';

interface Props {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
}
const ProjectCard: React.FC<Props> = function ({ title, videoUrl, imageUrl, id }: Props) {
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const [zoomTrigger, setZoomTrigger] = useState('');
    return (
        <div
            className="project-card"
            key={id}
            onMouseOver={() => setButtonVisibility(true)}
            onMouseLeave={() => setButtonVisibility(false)}
        >
            <div
                className={`project-card-img ${zoomTrigger}`}
                onMouseOver={() => setZoomTrigger('zoomTransformPlus')}
                onMouseLeave={() => setZoomTrigger('zoomTransformNormal')}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            {buttonVisibility ? <ArrowButton>More Details</ArrowButton> : null}
        </div>
    );
};

export default ProjectCard;
