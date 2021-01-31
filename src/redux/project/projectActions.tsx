interface Project {
    title: string;
    videoUrl: string;
    imageUrl: string;
    id: number;
}
export const UPDATE_PROJECT_VIEW = function (project: Project): { type: string; payload: Project } {
    return {
        type: 'UPDATE_PROJECT_VIEW',
        payload: project,
    };
};
