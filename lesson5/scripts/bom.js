let input = document.getElementById("favchap");
let button = document.getElementById("addButton");
let list = document.getElementById("list");

button.addEventListener('click', addToList); 

function addToList() {
    if (input.value == "") {
        return;
    }

    let newListItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.addEventListener('click', function() {
        list.removeChild(newListItem);
    });
    newListItem.innerHTML = input.value;
    newListItem.appendChild(deleteButton);
    list.appendChild(newListItem);
    input.value = "";

    // focus on the input element
    input.focus();
}