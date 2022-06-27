const form = document.querySelector('.form');
const taskInput = document.querySelector('.task-input');
const todoList = document.querySelector('.todo-list');

let state = {
  tasks: [],
};

const template = task => `<div class="todo-list-task" id="${task.id}" > <p>${task.task}</p> ${removeButton(task)} </div>`;

const render = (template, el) => {
  
  el.innerHTML += template;
  console.log(el.innerHTML);
};


// Submit form
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const task = {
    id: Date.now(),
    task: taskInput.value
  };

  state.tasks = [...state.tasks, task];
  render(template(state.tasks[state.tasks.length - 1]), todoList);
  taskInput.value = '';
});



const removeButton = task => {  
    return `
      <div>
        <button
          type="button"
          class="remove-button" 
          onclick="removeTask(${task.id})">
          X
        </button>
    </div>`;
};



// Remove task
const removeTask = (id) => {
  const index = state.tasks.findIndex((item) => item.id === id);
  state.tasks.splice(index, 1);
  todoList.innerHTML = '';
  state.tasks.map(el => render(template(el), todoList));
};


const DeleteAll = () =>
{
  state.tasks = [];
  todoList.innerHTML = " ";
}