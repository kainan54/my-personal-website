import React from 'react';
import './ProjectPage.scss';
import ProjectViewer from '../../components/project-viewer/ProjectViewer';

const ProjectPage: React.FC = function () {
    return (
        <div className="project-page">
            <ProjectViewer />
        </div>
    );
};

export default ProjectPage;
