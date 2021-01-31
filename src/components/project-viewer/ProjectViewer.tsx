import React, { useState } from 'react';
import './ProjectViewer.scss';
import ProjectCard from '../project-card/ProjectCard';
import projects from './projects';
import { connect, ConnectedProps } from 'react-redux';
interface Project {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
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
    interface Project {
        title: string;
        videoUrl: string;
        imageUrl: string;
        id: number;
    }

    const renderScrollCard = (projects: Array<Project>) => {
        return projects.map((project) => <ProjectCard key={project.id} {...project} />);
    };

    return (
        <div className={`project-viewer ${currentProject ? 'project-dimmed' : null}`}>
            <h1>Projects:</h1>
            <div className="project-card-zone">{!selectedProject ? renderScrollCard(projects) : null}</div>
            <div className="project-display-card" style={{ display: currentProject ? 'block' : 'none' }}>
                <div>sssssss</div>
            </div>
        </div>
    );
};
export default connector(ProjectViewer);
