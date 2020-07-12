// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// event listeners

todoButton.addEventListener('click', addToDo);

// functions

function addToDo(event) {
   // prevent form from submitting
   event.preventDefault();
   //todo div
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   // create Li
   const newTodo = document.createElement('li');
   newTodo.innerText = 'hey';
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   // check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"> </i>';
   completedButton.classList.add('completed-btn');
   todoDiv.appendChild(completedButton);
   // check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-check"> </i>';
   trashButton.classList.add('completed-btn');
   todoDiv.appendChild(trashButton);
}
