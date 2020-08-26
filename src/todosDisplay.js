import { createTodo, todos, deleteTodo, markComplete } from './todo';
import { currentProjectId } from './index';

const todosContainer = document.getElementById('todos-container');
const stillDue = document.getElementById('due-todos');
const completedTodos = document.getElementById('completed-todos');
const todoButton = document.getElementById('todo-button');
const formDiv = document.getElementById('form-div');
const submitButton = document.createElement('button');

submitButton.type = 'button';
submitButton.innerText = 'Submit Task';

const createTodoButton = () => {
    todoButton.addEventListener('click', () => {
        createForm();
        todosContainer.removeChild(todoButton);
    })
}

const createForm = () => {
    const form = document.createElement('form');
    form.id = 'form';
    const title = createFormField('title');
    const description = createFormField('description');
    const dueDate = createFormField('dueDate');
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(submitButton);
    formDiv.appendChild(form);
}

const createFormField = id => {
    const lineBreak = document.createElement('br')
    const formDiv = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerText = `${id}:`
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', id);
    if (id == 'description') {
        input.setAttribute('size', '50');
    }
    formDiv.appendChild(label);
    formDiv.appendChild(input);
    formDiv.appendChild(lineBreak);
    return formDiv;
}

const displayTodos = () => {
    removeAllChildNodes(stillDue);
    todos.forEach(item => {
        if (item.completed == false && item.projectId == currentProjectId) {
            createDueTodo(item);
        }
    })
}

const displayTodones = () => {
    removeAllChildNodes(completedTodos);
    todos.forEach(item => {
        if (item.completed == true && item.projectId == currentProjectId) {
            createCompleteTodo(item);
        }
    })
}

const createDueTodo = task => {
    const todo = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = `Title: ${task.title}
    Description: ${task.desc}
    Due Date: ${task.dueDate}
    Not Completed`;
    todo.classList.add('todo');
    todo.appendChild(p);
    todo.appendChild(createDeleteButton(todo, task.title));
    todo.appendChild(createCompleteButton(todo, task.title));
    stillDue.appendChild(todo);
}

const createCompleteTodo = task => {
    const todo = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = `Title: ${task.title}
    Description: ${task.desc}
    Due Date: ${task.dueDate}
    Completed`;
    todo.classList.add('todo');
    todo.appendChild(p);
    completedTodos.appendChild(todo);
}

const removeAllChildNodes = parent => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createDeleteButton(todo, title) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Task';
    deleteButton.id = 'delete';
    deleteButton.addEventListener('click', () => {
        stillDue.removeChild(todo);
        deleteTodo(title);
    })
    return deleteButton;
}

function createCompleteButton(todo, title) {
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Mark Task Complete';
    completeButton.id = 'complete';
    completeButton.addEventListener('click', () => {
        stillDue.removeChild(todo);
        markComplete(title);
        displayTodones();
    })
    return completeButton;
}

submitButton.addEventListener('click', () => {
    let newTodo = createTodo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value);
    displayTodos();
    formDiv.removeChild(document.getElementById('form'));
    todosContainer.appendChild(todoButton);
})

export { createTodoButton, displayTodos, displayTodones };