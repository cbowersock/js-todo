import { createTodoButton } from "./todosDisplay";
import { createProjectButton, displayProjects } from "./projectsDisplay";
import { todos } from "./todo";
import { projects } from "./project";

let currentProjectId = 0;

const setCurrentId = (newValue) => {
  currentProjectId = newValue;
};

const retrieveFromLocalStorage = () => {
  let objects = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    objects.push(localStorage.getItem(key));
  }

  objects.forEach((value) => {
    if (value.includes("dueDate")) {
      let todo = JSON.parse(value);
      todos.push(todo);
    } else {
      let project = JSON.parse(value);
      projects.push(project);
    }
  });
  displayProjects();
};

//localStorage.clear();

if (localStorage.length > 0) {
  retrieveFromLocalStorage();
}

createProjectButton();
createTodoButton();

export { setCurrentId, currentProjectId };
