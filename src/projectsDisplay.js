import { projects, createProject, generateId } from './project';
import { setCurrentId } from './index';
import { displayTodones, displayTodos } from './todosDisplay';

const addButton = document.getElementById('add-project');
const projectList = document.getElementById('project-list');
const userInput = document.getElementById('user-input');
const projectName = document.getElementById('project-name');

const createProjectButton = () => {
    addButton.addEventListener('click', () => {
        const project = createProject(userInput.value, generateId());
        const newProject = projectIdButton(project);
        projectList.appendChild(newProject);
        userInput.value = '';
    })
}

const projectIdButton = project => {
    const button = document.createElement('button');
    button.innerText = project.name;
    button.addEventListener('click', () => {
        setCurrentId(project.id);
        displayTodos();
        displayTodones();
        projectName.innerText = `Project: ${project.name}`;
    })
    return button;
}

const displayProjects = () => {
    projects.forEach(project => {
        const newProject = projectIdButton(project);
        projectList.appendChild(newProject);
    })
}

export { createProjectButton, displayProjects }