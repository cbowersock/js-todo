import { createTodoButton } from './todosDisplay';
import { createProjectButton } from './projectsDisplay';
import { todos } from './todo';
import { projects } from './project';

let currentProjectId = 0;

const setCurrentId = (newValue) => {
    currentProjectId = newValue;
}

const retrieveFromLocalStorage = () => {
    let objects = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        objects.push(localStorage.getItem(key));
    }

    objects.forEach(value => {
        if (value.includes('dueDate')) {
            let todo = JSON.parse(value);
            todos.push(todo);
            console.log(value)
        }
        else {
            let project = JSON.parse(value);
            projects.push(project);
            console.log(value)
        }
    })
}

if (localStorage.length > 0) {
    console.log(localStorage);
    //retrieveFromLocalStorage();
}

createProjectButton();
createTodoButton();

export { setCurrentId, currentProjectId };