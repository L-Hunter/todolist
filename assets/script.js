let list = [];
const taskList = document.querySelector('.task-list');
const submitButton = document.querySelector('.submitButton');
const taskInput = document.getElementById('inputField');

function addTask(text){
  list.push(text);
  taskList.insertAdjacentHTML('afterbegin',
    `<li>
      <input type="checkbox" class="checkbox" />
      <span>${text}</span>
      <button class="deleteButton">X</button>
    </li>`);
}

function deleteTask(text){
  list = list.filter(e => e !== text);
  event.target.parentElement.remove();
}

submitButton.addEventListener('click', event => {
  let task = taskInput.value;
  if (task === '') {
    task = "Do nothing, time to relax!";
  }
  addTask(task);
  taskInput.value = "";
  taskInput.focus();
})

taskList.addEventListener('click', event => {
  if (event.target.className == 'checkbox') {
    if (event.target.nextElementSibling.classList.contains('completed')) {
      event.target.nextElementSibling.classList.remove('completed');
    } else {
          event.target.nextElementSibling.classList.add('completed');
    }
  }
  if (event.target.className == 'deleteButton') {
    let text = event.target.previousElementSibling.innerText;
    deleteTask(text);
  }
})
