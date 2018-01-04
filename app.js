var todoInput = document.getElementById("todoInput")
var todoButton = document.getElementById("todoButton")
var todoList = document.getElementById("list")

todoInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    todoButton.click();
  }
});

todoButton.onclick = function(){
  var item = todoInput.value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  item = item.trim()
  if (document.querySelectorAll(".todoItem").length == 0 && item != "") {
    document.getElementById("placeholder").style.display = "none";
  }
  if (item != "") {
    var newItem = createTodo(item);
    todoList.appendChild(newItem);
    todoInput.value = "";
    todoInput.focus();
  }
};

function createTodo(item) {

  var newItem = document.createElement("div");
  newItem.className = "todoItem"

  newItem.innerHTML = "<span>" + item + "</span><button class='todoDelete' onclick='deleteTodo(this)' type='button'>" + "X" + "</button>";

  return newItem;
}

function deleteTodo(el) {
  el.parentNode.remove();
  if (document.querySelectorAll(".todoItem").length == 0){
    document.getElementById("placeholder").style.display = "block";
  }
}
