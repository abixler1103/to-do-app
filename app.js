function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = [0];

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: [0];
    });
    newToDoText.value = '';
    renderTheUI();
  }
  function renderTheUI() {
  const toDoList = document.getElementById('toDoList');
  toDoList.textContent = '';
  toDos.forEach(function(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const remove = document.createElement('button');
    checkbox.type = "checkbox";
    remove.type = "remove";
    newLi.textContent = toDo.title;
    toDoList.appendChild(newLi);
    newLi.prepend(checkbox);
    newLi.appendChild(button);
  });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
