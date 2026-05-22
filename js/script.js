// SELECT ELEMENTS
const input = document.querySelector(".input-box input");
const addBtn = document.querySelector(".input-box button");
const todoList = document.querySelector(".todo-list");

// ADD TODO
addBtn.addEventListener("click", function () {

  // INPUT VALUE
  const inputValue = input.value.trim();

  // EMPTY INPUT CHECK
  if (inputValue === "") {
    alert("Please write something!");
    return;
  }

  // CREATE LI
  const li = document.createElement("li");

  li.innerHTML = `
  
    <div class="left">
      <input type="checkbox">
      <span>${inputValue}</span>
    </div>

    <i class="fa-solid fa-trash"></i>

  `;

  // APPEND LI
  todoList.appendChild(li);

  // CLEAR INPUT
  input.value = "";

  // DELETE TODO
  const deleteBtn = li.querySelector(".fa-trash");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // CHECKBOX COMPLETE
  const checkbox = li.querySelector("input");

  checkbox.addEventListener("change", function () {

    const text = li.querySelector("span");

    if (checkbox.checked) {
      text.style.textDecoration = "line-through";
      text.style.opacity = "0.5";
    } else {
      text.style.textDecoration = "none";
      text.style.opacity = "1";
    }

  });

});

// ENTER KEY SUPPORT
input.addEventListener("keypress", function (e) {

  if (e.key === "Enter") {
    addBtn.click();
  }

});

