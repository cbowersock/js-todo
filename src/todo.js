import {appendTodo} from './todosDisplay';

let todos = [];

const todoFactory = (title, desc, dueDate, completed, displayed) => {
    return {
        title,
        desc,
        dueDate,
        completed,
        displayed
        // will need to add project id
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

const markAsDisplayed = () => {
    todos.forEach(todo => {
        todo.displayed = true;
    })
}

const markComplete = (title) => {
    todos.forEach(item => {
        if (item.title == title) {
            item.completed = true;
        }
    })
}

const createTodo = (title, desc, dueDate, completed) => {
    let todo = todoFactory(title, desc, dueDate, completed, false);
    todos.push(todo);
}

export {todoFactory, createTodo, deleteTodo, todos, markAsDisplayed, markComplete};