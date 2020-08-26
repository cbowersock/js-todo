const projects = []
let id = 0;

const projectFactory = (name, id) => {
    return {
        name,
        id
    };
}

const generateId = () => {
    id++;
    return id;
}

const createProject = (name, id) => {
    let project = projectFactory(name, id);
    localStorage.setItem(name, JSON.stringify(project));
    projects.push(project);
    return project;
}

export {projects, createProject, generateId};