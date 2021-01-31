import React, { useState } from 'react';
import './ProjectViewer.scss';
import ProjectCard from '../project-card/ProjectCard';
const ProjectViewer: React.FC = function () {
    const [selectedProject] = useState(null);
    interface Project {
        title: string;
        videoUrl: string;
        imageUrl: string;
        id: number;
    }
    const projects: Array<Project> = [
        {
            title: 'Temp Title',
            videoUrl: 'null',
            imageUrl: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            id: 1,
        },
        {
            title: 'Temp Title',
            videoUrl: 'null',
            imageUrl: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            id: 2,
        },
        {
            title: 'Temp Title',
            videoUrl: 'null',
            imageUrl: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            id: 3,
        },
        {
            title: 'Temp Title',
            videoUrl: 'null',
            imageUrl: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            id: 4,
        },
        {
            title: 'Temp Title',
            videoUrl: 'null',
            imageUrl: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            id: 5,
        },
    ];

    const renderScrollCard = (projects: Array<Project>) => {
        return projects.map((project) => <ProjectCard key={project.id} {...project} />);
    };

    return (
        <div className="project-viewer">
            <h1>Projects:</h1>
            <div className="project-card-zone">{!selectedProject ? renderScrollCard(projects) : null}</div>
        </div>
    );
};
export default ProjectViewer;
