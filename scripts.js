let todoArray = [];
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    console.log(todo);
    if(todo === null){
        todoArray = [];
    }else{
        todoArray = JSON.parse(todo);
        console.log(todo);
    };
    if(text.value === ""){
        alert("Input Field is empty");
        return;
    };
    todoArray.push(text.value);
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});
document.onload = displayTodo();
function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
      htmlCode += `<div class='flex mb-4 items-center'>
            <p class='w-full text-white font-bold'>${list}</p>
            <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
            <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
         </div>`;
    });
    listBox.innerHTML = htmlCode;
};
function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    todoArray.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
};
function edit(ind) {
    saveInd.value = ind;
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    text.value = todoArray[ind];
    addTaskButton.style.display = 'none';
    saveTaskButton.style.display = 'block';
};
saveTaskButton.addEventListener("click", () => {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    id = saveInd.value;
    todoArray.splice(id, 1, text.value);
    addTaskButton.style.display = 'block';
    saveTaskButton.style.display = 'none';
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray))
    displayTodo();
});

/* LOOK BELOW IF YOU DARE FOR DIRTY, DISGUISTING, MESSY NOTES AND MESSUPS OF AN ADDLED BRAIN

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    console.log(todo);
        // todo logs to console as 'null'
    todoArray.push(todo);
    console.log(todoArray);
        // Using this, I can add the 'null' result of todo into the array, but I don't think this is the intention (yet)
        // Check if todo is null, if it is set todoArray = [] else set todoArray to JSON.parse() your variable passed into the parse method.
    
    if(todo === null){
        todoArray = [];
    }else{
        todoArray = JSON.parse(todo);
    } 
        todoArray = JSON.parse();
        todoArray = JSON.parse(value);
        todoArray = JSON.parse(todo.value); 
            // If i take the comment literally, I think this is what it is asking for? Which variable does it want? It still logs as 'null' with no array or anything

    if(todo = null){
        todoArray [];
            // How do I read the comment? 'If todo is 'null, set todoArray = []'?
    }else{
        todoArray = JSON.parse(todo);
    }       // And than set todoArray equal to JSON? Why does this give a syntax error if this is what it wants?

    if(todoArray = []){
        todo;
    }else{
        todoArray = JSON.parse(todo);
    }       // Does it actually want the todoArray to have this? This combo doesn't make any sense, and only logs the 'todo' as 'null'

    if(todoArray = []){
        todoArray = JSON.parse(todo);    
    }else{
        return
    }       // This combo doesn't make sense

    if(todoArray = []){
        return;
    }else{
        todoArray = JSON.parse(todo);
    }       // And neither does this one

    if(todo === null){
        todoArray = [];
        return;
    }else{
        todoArray = JSON.parse(todo);
        return;
    }       // This also doesn't make sense
    console.log(todoArray); 
    // check if text.value is empty, alert that the input is empty and return
    if(text.value === ""){
        alert("Input Field is empty");
        return;
    }
    // now that you've parsed the value, push the text.value to the todoArray.
    todoArray.push(text.value);
        // 
    // set the text.value to an empty string.
    text.value = "";
        // 
    // get the localstorage method and use the setItem and pass in todo and pass in JSON.stringify(todoArray).
    localStorage.setItem("todo");
    localStorage.setItem("todo", `${text.value}`);
    localStorage.setItem("todo", JSON.stringify(todoArray));
        // 
    // and pass in JSON.stringify(todoArray).
    JSON.stringify(todoArray);
        // 
    // lastly call display todo method
    displayTodo();
        // 
    console.log(todo);
    console.log(todoArray);
});
// Add code below this comment to do the following:
// 1. when the page loads, call displayTodo() method
window.onload = displayTodo();
    // 
document.onload = displayTodo();
    // 
// This method is already in place for you.
function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full text-white font-bold'>${list}</p>
          <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
          <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
       </div>`;
  });
  listBox.innerHTML = htmlCode;
};
function deleteTodo(ind) {
    // call the todo and let it equal localstorage.getitem("todo")
    let todo = localStorage.getItem("todo");
    // assign the todoArray equal to JSON.parse(todo)
    todoArray = JSON.parse(todo);
    // console.log(todoArray);
    // console.log(ind);
    // use the todoArray and use the splice method on the ind and pass in 1 as well.

    todoArray.splice(ind, 1);
    // todoArray.splice(${ind}, 1);
    // todoArray.splice(`${ind}`, 1);
    // todoArray.splice(ind.value, 1);

    // set the todo in local storage and use the JSON.stringify(todoArray)
    localStorage.setItem("todo", JSON.stringify(todoArray));
    // call the display todo method
    displayTodo();
};
function edit(ind) {
    // set the saveInd.value equal to the ind
    saveInd.value = ind;
    // ind = saveInd.value;
    // call the todo and let it equal localstorage.getitem("todo")
    let todo = localStorage.getItem("todo");
    // assign the todoArray equal to JSON.parse(todo)
    todoArray = JSON.parse(todo);
    // assign the text.value to the array and get the index [ind].
    text.value = todoArray[ind];
    // set the addTaskButton display to none
    // addTaskButton = document.getElementById('add-task-btn').style.display = 'none';
    addTaskButton.style.display = 'none';
    // set the saveTaskButton display to block
    // saveTaskButton = document.getElementById('add-task-btn').style.display = 'block';
        // 
    // saveTaskButton = document.getElementById('save-todo-btn').style.display = 'block';
    saveTaskButton.style.display = 'block';
};
/* 
saveTaskButton.addEventListener("click", () => {
    // this is the challenge for this project
    // in this part you will need to add the following:
    // 1. call the todo and let it equal localstorage.getitem("todo")
    let todo = localStorage.getItem("todo");
    // 2. assign the todoArray equal to JSON.parse(todo)
    todoArray = JSON.parse(todo);
    // then finish out the rest of the following instructions:
    // 1. let id be the same as your saveInd.value

    // let id = saveInd.value;
    // let ind = saveInd.value;
    // ind = saveInd.value;
    id = saveInd.value;
    // saveTaskButton = saveInd.value;
    todoArray.splice(id, 1, text.value);
    // 2. switch the add and save displays to block and none respectively.
    // addTaskButton = document.getElementById('add-task-btn').style.display = 'block';
    addTaskButton.style.display = 'block';
    // saveTaskButton = document.getElementById('save-todo-btn').style.display = 'none';
    saveTaskButton.style.display = 'none';
    // 3. set text value to empty
    text.value = "";
    // 4. and use the localstorage method setItem, pass in todo and stringify the array.
    localStorage.setItem("todo", JSON.stringify(todoArray))
    // 5. display todo method called.
    displayTodo();
});
 */