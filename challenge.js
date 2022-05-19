// variables 
const inputField = document.getElementById("input"),
change = document.getElementById("change"), // for the edit btn
cancel = document.getElementById("cancel"),
del = document.getElementById("delete"),
numItems = document.getElementById("available"),
editInput = document.getElementById("editInput"),
parent = document.getElementById("parent"),
parentModal = document.getElementById("parent-modal"),
mainModal = document.getElementById("main-modal");
var indx;
const more = document.getElementById("more");
const menu = document.getElementById("menu");
const clearAll = document.getElementById("clear");

// run the function show items
showItems();
numElemts();

// add the shortcut "enter" to the input
inputField.addEventListener("keydown", function(e){
    // add the shortcut
    if(e.key === "Enter"){
    // check if the input are not empty
    if(inputField.value.trim()){
        var texts = localStorage.getItem("text"); // localStorage
        // check if the local storage is empty or not
        if(texts){
            arr = JSON.parse(texts); // get the arr from LS
        }else{
            var arr  =[]; // create new array
        }
        arr.push(inputField.value); // push the value
        localStorage.setItem("text", JSON.stringify(arr));// update the LC
        inputField.value = ""; // empty value input
        showItems();
        numElemts();
    }
    }
})

// function to show items

function showItems(){
    var texts = localStorage.getItem("text");
    if(texts){
        arr = JSON.parse(texts); // get the item from LC
    }else{arr = []}
    var testing = '';
    arr.forEach((ele, indx) => { // loop to testing
        testing += `
        <li class="pd-10 flex align-center flex-between">
        <p class="line-clamp p-mid">${ele}</p>
        <div class="icons pdl-10 flex">
          <i class="fa fa-pencil" id="edit" onclick="repl(${indx})"></i>
          <i class="fa fa-trash pdl-15" id="delete" onclick="delItem(${indx})"></i>
        </div>
      </li>
        `
    })
    parent.innerHTML = testing; // edit html in parent list
}

// nums of items
function numElemts(){
    var texts = localStorage.getItem("text");
    if(texts){
        arr = JSON.parse(texts); // get the item from LC
    }else{arr = []}
    numItems.innerHTML = arr.length; // get the length items
}
// function to delete item
function delItem (item){
    var text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    arr.splice(item, 1); // remove the item
    localStorage.setItem("text", JSON.stringify(arr)); //  update the localStorage
    showItems();
    numElemts();
}
// function to edit item
cancel.addEventListener("click", function(){ // add event click to the canel modal in the modal
    parentModal.classList.add("d-none");
})
function repl(item){
    parentModal.classList.remove("d-none");
    var text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    editInput.value = arr[item];
    indx = item;
}
change.addEventListener("click", function(){
    if(editInput.value.trim()){
        parentModal.classList.add("d-none")
        var text = localStorage.getItem("text");
        if(text){
            arr = JSON.parse(text); // get the array
        }else{
            arr = [];
        }
        arr[indx] = editInput.value;
        localStorage.setItem("text", JSON.stringify(arr));
        showItems();
        numElemts();
    }
})

// clear btn
clearAll.addEventListener("click", function(){
    var text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    arr = [];
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})

// variables for options
const ran = document.getElementById("random"),
revOrder = document.getElementById("revOrder"),
other = document.getElementById("other"),
lower = document.getElementById("lower"),
upper = document.getElementById("upper"),
small = document.getElementById("small"),
big = document.getElementById("big"),
alpha = document.getElementById("alpha");
more.addEventListener("click", function(){
  menu.classList.toggle("d-none");
})
// add event to the random option
ran.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    arr.sort(() => 0.5 - Math.random()); // sort the array with random order
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the reverse order btn
revOrder.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    arr.reverse();
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the upper texts btn
upper.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    arr = arr.map((e) => {
        return e.toUpperCase();
    })
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the lower texts btn
lower.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text); // get the array
    }else{
        arr = [];
    }
    arr = arr.map((e) => {
        return e.toLowerCase();
    })
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the revTexts texts btn
other.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text)
    }else{
        arr = [];
    }
    arr = arr.map((e) => {
        return e.trim().split("").reverse().join("");
    })
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the alpha
alpha.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text)
    }else{
        arr = [];
    }
    arr = arr.map((e) => {
        var i;
        i = e.replace(e.trim().charAt(0),e.trim().charAt(0).toUpperCase());
        return i;
    })
    arr.sort();
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the big
big.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text)
    }else{
        arr = [];
    }
    arr.sort((a,b) => {
        return b - a;
    })
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
// add event to the small
small.addEventListener("click", function(){
    let text = localStorage.getItem("text");
    if(text){
        arr = JSON.parse(text)
    }else{
        arr = [];
    }
    arr.sort((a,b) => {
        return a - b;
    })
    localStorage.setItem("text", JSON.stringify(arr));
    showItems();
    numElemts();
})
