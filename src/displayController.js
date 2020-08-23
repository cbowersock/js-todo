import {todoFactory, createTodo, todos} from './todo';
import {projectFactory} from './project';

const todosContainer = document.getElementById('todos-container');
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
    const priority = createPriorities();
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submitButton);
    formDiv.appendChild(form);
}

const createFormField = (id) => {
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

const createPriorities = () => {
    const priorities = document.createElement('div');
    const highLabel = document.createElement('label');
    highLabel.setAttribute('for', 'high');
    highLabel.innerText = 'High Priority';
    const high = document.createElement('input');
    high.setAttribute('type', 'radio');
    high.id = 'high';
    const medLabel = document.createElement('label');
    medLabel.setAttribute('for', 'medium');
    medLabel.innerText = 'Medium Priority';
    const medium = document.createElement('input');
    medium.setAttribute('type', 'radio');
    medium.id = 'medium';
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for', 'Low');
    lowLabel.innerText = 'Low Priority';
    const low = document.createElement('input');
    low.setAttribute('type', 'radio');
    low.id = 'low';
    priorities.appendChild(highLabel);
    priorities.appendChild(high);
    priorities.appendChild(medLabel);
    priorities.appendChild(medium);
    priorities.appendChild(lowLabel);
    priorities.appendChild(low);
    return priorities;
}

const displayTodos = () => {
    todos.forEach(item => {
        const todo = document.createElement('div')
        const p = document.createElement('p');
        p.innerText = `Title: ${item.title}
        Description: ${item.desc}
        Due Date: ${item.dueDate}
        Priority: ${item.priority}`;
        todo.classList.add('todo');
        // add delete button
        todo.appendChild(p);
        // check if element exists before appending (to avoid duplicates)
        todosContainer.appendChild(todo);
    })
}

submitButton.addEventListener('click', () => {
    createTodo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('dueDate').value, 'filler');
    displayTodos();
    formDiv.removeChild(document.getElementById('form'));
    todosContainer.appendChild(todoButton);
})

export {createTodoButton};