function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('ul');

    // create a new input
    let checkbox = document.createElement('input');

    // create delete
    let remove = document.createElement('button');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the text type to text
    remove.type = "remove";

    // set the title
    newLi.textContent = title;

    remove.textContent = "remove";

    // attach the checkbox to the li
    newLi.prepend(checkbox);

    // attach the delete to the li
    newLi.appendChild(remove);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

var listItems = document.getElementsByTagName("ul"); // ordocument.querySelectorAll("ul"); 
for (var i = 0; i < listItems.length; i++) {
listItems[i].onclick = function() {this.parentNode.removeChild(this);}
}

window.onload = function () {
  onReady();
};