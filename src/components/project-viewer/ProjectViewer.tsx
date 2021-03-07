import React, { useEffect } from 'react';
import './ProjectViewer.scss';
import ProjectCard from '../project-card/ProjectCard';
import projects from './projects';
import { connect, ConnectedProps } from 'react-redux';
import ProjectPopupCard from '../project-popup-card/ProjectPopupCard';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { UPDATE_PROJECT_VIEW } from '../../redux/project/projectActions';
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
interface RootState {
    project: {
        currentProject: Project | null;
    };
}
const msp = ({ project }: RootState) => ({
    currentProject: project.currentProject,
});
const mdp = (dispatch: (action: Action) => void) => ({
    UPDATE_PROJECT_VIEW: (project: Project | null) => dispatch(UPDATE_PROJECT_VIEW(project)),
});
const connector = connect(msp, mdp);
type rProps = ConnectedProps<typeof connector>;

const ProjectViewer: React.FC<rProps & RouteComponentProps<{ title: string }>> = function ({
    currentProject,
    match,
    UPDATE_PROJECT_VIEW,
}) {
    const renderScrollCard = (projects: Array<Project>) => {
        return projects.map((project) => <ProjectCard key={project.id} {...project} />);
    };

    useEffect(() => {
        const urlTitle = match.params.title;
        if (urlTitle) {
            const matchedProject = projects.find((project) => project.title.toLowerCase() === urlTitle.toLowerCase());

            matchedProject ? UPDATE_PROJECT_VIEW(matchedProject) : null;
        } else UPDATE_PROJECT_VIEW(null);
    }, []);
    return (
        <div className={`project-viewer ${currentProject ? 'project-dimmed' : null}`}>
            <div className="project-header">Projects</div>
            <div className="project-card-zone">{renderScrollCard(projects)}</div>
            {currentProject ? <ProjectPopupCard {...currentProject} /> : null}
        </div>
    );
};
export default withRouter(connector(ProjectViewer));
