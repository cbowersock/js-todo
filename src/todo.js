import {currentProjectId} from './index';

let todos = [];

const todoFactory = (title, desc, dueDate, projectId) => {
    return {
        title,
        desc,
        dueDate,
        projectId,
        completed: false,
    };
}

const deleteTodo = (title) => {
    const newTodos = [];
    todos.forEach(item => {
        if (item.title != title) {
            newTodos.push(item);
        }
    })
    todos = newTodos;
}

const markComplete = (title) => {
    todos.forEach(item => {
        if (item.title == title) {
            item.completed = true;
        }
    })
}

const createTodo = (title, desc, dueDate) => {
    let todo = todoFactory(title, desc, dueDate, currentProjectId);
    localStorage.setItem(title, JSON.stringify(todo));
    todos.push(todo);
    return todo;
}

export {todoFactory, createTodo, deleteTodo, todos, markComplete};