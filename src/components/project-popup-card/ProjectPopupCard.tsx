import React from 'react';
import './ProjectPopupCard.scss';
import { connect, ConnectedProps } from 'react-redux';
import { UPDATE_PROJECT_VIEW } from '../../redux/project/projectActions';
import IconHeader from '../icon-w-header/IconHeader';
import tempIcon from '../../assets/js-logo.png';
interface Project {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
}
interface Action {
    type: string;
    payload: Project | null;
}
const mdp = (dispatch: (action: Action) => void) => ({
    UPDATE_PROJECT_VIEW: (nullProj: null) => dispatch(UPDATE_PROJECT_VIEW(nullProj)),
});
const connector = connect(null, mdp);
type rProps = ConnectedProps<typeof connector>;

interface Props extends rProps {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
    icons: Array<{ title: string; icon: string }>;
    descrip: string;
    features: Array<string>;
}
const ProjectPopupCard: React.FC<Props> = function ({
    title,
    videoUrl,
    imageUrl,
    id,
    icons,
    descrip,
    features,
    UPDATE_PROJECT_VIEW,
}: Props) {
    const renderIcons = () => {
        return icons.map((icon, i) => <IconHeader title={icon.title} icon={icon.icon} key={i} />);
    };
    const renderFeatures = () => {
        return features.map((string, i) => <li key={i}>{string}</li>);
    };
    return (
        <div className="project-display-card">
            <h2>{title}</h2>
            <video src={videoUrl} controls />
            <div className="project-content">
                <h3>Built With:</h3>
                <div className="project-icon-zone">{renderIcons()}</div>
                <h3>Brief Summary:</h3>
                <p className="project-descrip">{descrip}</p>
                <h3>Key Features:</h3>
                <div className="project-features">
                    <ul>{renderFeatures()}</ul>
                </div>
            </div>
            <div className="project-close-btn" onClick={() => UPDATE_PROJECT_VIEW(null)}>
                <div className="project-x1" />
                <div className="project-x2" />
            </div>
        </div>
    );
};

export default connector(ProjectPopupCard);
