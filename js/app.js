const list = document.querySelector("ul.list-group");

var addToDo = document.getElementById("addToDo");
addToDo.value = "";
console.log(addToDo);

const form = document.querySelector("form");

form.addEventListener("submit", addToDoList);

function addToDoList(e) {
  e.preventDefault();
  //   console.log(addToDo.value);
  const newList = document.createElement("li");

  newList.className =
    "list-group-item d-flex justify-content-between align-items-center";
  let newListText = document.createTextNode(addToDo.value);
  newList.appendChild(newListText);
  list.append(newList);

  const newSpan = document.createElement("span");
  newSpan.className = "badge badge-primary badge-pill";
  newSpan.innerHTML = '<i class="fas fa-times"></i>';
  newList.append(newSpan);

  addToDo.value = "";
}

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains("badge")) {
    console.log("deleted");
    e.target.parentElement.parentElement.remove();
  }
}
