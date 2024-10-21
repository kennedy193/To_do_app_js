const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // Check if the input field's value is an empty string
    if (inputBox.value === '') {
        alert("Write something!");
    } else {
        // Create a new task (li element)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create and append a delete (span) icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Unicode for the '×' symbol
        li.appendChild(span);
    }

    // Clear the input field after adding the task
    inputBox.value = "";

    // Save the updated list to local storage
    saveData();
}

// Event listener for marking tasks as complete or deleting them
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save tasks to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage
function showTask() {
    const storedData = localStorage.getItem("data");
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

// Display stored tasks when the page is loaded
showTask();
