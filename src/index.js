const descript = document.getElementById('new-task-description');
const form = document.getElementById('create-task-form');
const submits = document.getElementById('submit-button');
const task = document.getElementById('tasks');
const todo = [];
function undefaultForm() {
  form.addEventListener('click', function(event) {
    event.preventDefault()
  })
}
function addStuff() {
  const li = document.createElement('li')
  todo.forEach(function(element) {
    task.appendChild(li)
    li.textContent = element
  })
}
function addToDos() {
  submits.addEventListener('click', function (event) {
    if (event) {
      todo.push(descript.value)
      addStuff();
      descript.value = ""
    }
  
  })
}
document.addEventListener("DOMContentLoaded", () => {
  undefaultForm();
  addToDos();
});
