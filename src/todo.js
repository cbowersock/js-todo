import {appendTodo} from './displayController';

const todoFactory = (title, desc, dueDate, priority) => {
    return {
        title,
        desc,
        dueDate,
        priority
    };
}

const createTodo = () => {
    appendTodo();
}

export {todoFactory, createTodo};