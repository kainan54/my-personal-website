import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { UPDATE_PROJECT_VIEW } from '../../redux/project/projectActions';
import ArrowButton from '../arrow-button/ArrowButton';
import './ProjectCard.scss';

interface Props extends rProps {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
    icons: Array<{ title: string; icon: string }>;
    descrip: string;
    features: Array<string>;
    githubPath: string;
}
interface Project {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
    icons: Array<{ title: string; icon: string }>;
    descrip: string;
    features: Array<string>;
    githubPath: string;
}

interface Action {
    type: string;
    payload: Project | null;
}
const mdp = (dispatch: (action: Action) => void) => ({
    UPDATE_PROJECT_VIEW: (project: Project) => dispatch(UPDATE_PROJECT_VIEW(project)),
});
const connector = connect(null, mdp);
type rProps = ConnectedProps<typeof connector>;

const ProjectCard: React.FC<Props> = function ({
    title,
    videoUrl,
    imageUrl,
    id,
    icons,
    descrip,
    features,
    githubPath,
    UPDATE_PROJECT_VIEW,
}: Props) {
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
                    <ArrowButton
                        clickFn={() =>
                            UPDATE_PROJECT_VIEW({ title, videoUrl, imageUrl, id, icons, descrip, features, githubPath })
                        }
                    >
                        More Details
                    </ArrowButton>
                ) : null}
            </div>
        </div>
    );
};

export default connector(ProjectCard);
