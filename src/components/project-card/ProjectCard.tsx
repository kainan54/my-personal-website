import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ArrowButton from '../arrow-button/ArrowButton';
import './ProjectCard.scss';

interface Props extends RouteComponentProps {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
    icons: Array<{ title: string; icon: string }>;
    descrip: string;
    features: Array<string>;
    githubPath: string;
}

const ProjectCard: React.FC<Props> = function ({ title, imageUrl, id, history }: Props) {
    const [buttonVisibility, setButtonVisibility] = useState(false);
    const [zoomTrigger, setZoomTrigger] = useState('');
    return (
        <div className="pc-container">
            <p className="project-card-title">{title}</p>
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
                {buttonVisibility ? (
                    <ArrowButton clickFn={() => history.push(`/projects/${title}`)}>More Details</ArrowButton>
                ) : null}
            </div>
        </div>
    );
};

export default withRouter(ProjectCard);
