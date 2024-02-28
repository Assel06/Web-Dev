let todoList = [];

function addItem() {
    const newItemInput = document.getElementById("newItem");
    const newItemText = newItemInput.value.trim();
    if (newItemText !== "") {
        todoList.push({ task: newItemText, done: false });
        newItemInput.value = "";
        displayList();
    }
}

function toggleDone(index) {
    todoList[index].done = !todoList[index].done;
    displayList();
}

function deleteItem(index) {
    todoList.splice(index, 1);
    displayList();
}

function displayList() {
    const todoListElement = document.getElementById("todoList");
    todoListElement.innerHTML = "";
    todoList.forEach((item, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.done;
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", () => toggleDone(index));
        li.appendChild(checkbox);
        const label = document.createElement("label");
        label.textContent = item.task;
        label.style.textDecoration = item.done ? "line-through" : "none";
        li.appendChild(label);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteItem(index));
        li.appendChild(deleteButton);
        todoListElement.appendChild(li);
    });
}

// Sample data to pre-fill the list
todoList.push({ task: "Buy groceries", done: false });
todoList.push({ task: "Do laundry", done: true });

// Display the initial list
displayList();