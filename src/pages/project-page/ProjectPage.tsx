import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './ProjectPage.scss';
import ProjectViewer from '../../components/project-viewer/ProjectViewer';

const ProjectPage: React.FC<RouteComponentProps> = function () {
    return (
        <div className="project-page">
            <ProjectViewer />
        </div>
    );
};

export default ProjectPage;
