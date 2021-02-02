import React, { useState } from 'react';
import './ProjectViewer.scss';
import ProjectCard from '../project-card/ProjectCard';
import projects from './projects';
import { connect, ConnectedProps } from 'react-redux';
import ProjectPopupCard from '../project-popup-card/ProjectPopupCard';
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
interface RootState {
    project: {
        currentProject: Project | null;
    };
}
const msp = ({ project }: RootState) => ({
    currentProject: project.currentProject,
});

const connector = connect(msp);
type rProps = ConnectedProps<typeof connector>;

const ProjectViewer: React.FC<rProps> = function ({ currentProject }) {
    const [selectedProject] = useState(null);
    const renderScrollCard = (projects: Array<Project>) => {
        return projects.map((project) => <ProjectCard key={project.id} {...project} />);
    };

    return (
        <div className={`project-viewer ${currentProject ? 'project-dimmed' : null}`}>
            <div className="project-header">Projects:</div>
            <div className="project-card-zone">{!selectedProject ? renderScrollCard(projects) : null}</div>
            {currentProject ? <ProjectPopupCard {...currentProject} /> : null}
        </div>
    );
};
export default connector(ProjectViewer);
