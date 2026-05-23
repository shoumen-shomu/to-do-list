const input = document.querySelector(".inputBox input");
const addBtn = document.querySelector(".inputBox button");
const todoList = document.querySelector(".inputBox");


addBtn.addEventListener("click", function () {

 
  const inputValue = input.value.trim();
  
 
  if (inputValue === "") {
    alert("Please write something!");
    return;
  }

  
  const li = document.createElement("li");

  li.innerHTML = `
  
    <div class="left">
      <input type="checkbox">
      <span>${inputValue}</span>
    </div>

    <i class="fa-solid fa-trash"></i>

  `;

 
  todoList.appendChild(li);

  
  input.value = "";


  const deleteBtn = li.querySelector(".fa-trash");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

 
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


input.addEventListener("keypress", function (e) {

  if (e.key === "Enter") {
    addBtn.click();
  }

});

