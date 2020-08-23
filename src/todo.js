import {appendTodo} from './displayController';

const todos = [];

const todoFactory = (title, desc, dueDate, priority) => {
    return {
        title,
        desc,
        dueDate,
        priority
        // will need to add project id
    };
}

const createTodo = (title, desc, dueDate, priority) => {
    let todo = todoFactory(title, desc, dueDate, 'filler');
    todos.push(todo);
}

export {todoFactory, createTodo, todos};