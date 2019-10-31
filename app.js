function onReady() {
  var toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    id++;
  });

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function toBeRemoved(selectedIDs) {
    return selectedIDs;
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';

      checkbox.type = 'checkbox';
      newLi.textContent = toDo.title;
      newLi.id = id;
      checkbox.value = id;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', event => {
        // When the delete button is clicked, remove the to-do from the ToDos array using the .filter() array method, comparing toDo.id with the id of each item in the to-do list.

        //event.preventDefault();

        // loop through list and get all ids
        var allIDs = [];
        var checkboxes = document.querySelectorAll('input[type=checkbox]');

        for (var i = 0; i < checkboxes.length; i++) {
          allIDs.push(checkboxes[i].value);
        }

        // get all selected id
        var selectedIDs = [];
        var checkboxes = document.querySelectorAll(
          'input[type=checkbox]:checked'
        );

        for (var i = 0; i < checkboxes.length; i++) {
          selectedIDs.push(checkboxes[i].value);
        }
        // filter list
        const filteredArray = allIDs.filter(function(x) {
          return selectedIDs.indexOf(x) < 0;
        });

        console.log(filteredArray);
        console.log(selectedIDs);
        console.log(toDos);
        toDos.filter((todo, index, arr) => {
          console.log(todo);
          arr.pop();
          return selectedIDs.includes(todo.id);
        });

        // re-render UI
        renderTheUI();
      });
    });
  }

  //renderTheUI();
}

window.onload = function() {
  onReady();
};
