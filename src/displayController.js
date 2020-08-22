import {todoFactory, createTodo} from './todo';
import {projectFactory} from './project';

const todosContainer = document.getElementById('todos-container');
const todoButton = document.getElementById('todo-button');

const createTodoButton = () => {
    todoButton.addEventListener('click', () => {
        createTodo();
    })
}

const appendTodo = () => {
    let todo = document.createElement('div')
    todo.classList.add('todo');
    todosContainer.appendChild(todo);
}

export {appendTodo, createTodoButton};