const projects = []
let id = 0;

const projectFactory = (id) => {
    return {id};
}

const createProject = () => {
    let project = projectFactory(id);
    projects.push(project);
}

export {projects, createProject};