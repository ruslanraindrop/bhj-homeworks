const tasksInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

function taskAdd() {
  if (tasksInput.value) {
    event.preventDefault();
    tasksList.insertAdjacentHTML('beforeEnd', `
      <div class="task">
        <div class="task__title">
          ${tasksInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    tasksInput.value = '';
  } else {
    event.preventDefault();
  }
}

function taskAddFromKey(key) {
  if ((key.keyCode === 13)) {
    taskAdd();            
  }
}

function removeTask(event) {
  if (event.target.classList.contains('task__remove')) {
    event.target.closest('.task').remove();
  }
}

addButton.addEventListener('click', taskAdd);
tasksInput.addEventListener('keydown', taskAddFromKey);
tasksList.addEventListener('click', removeTask);