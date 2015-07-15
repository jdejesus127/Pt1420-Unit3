// Define Global
var toDoList = [];

function loadToDoList(){
	if(localStorage.todolist){
		toDoList = JSON.parse(localStorage.todolist);
		changeDisplay();
	}
}
function editToDo(itemToEdit) {
	var newList = [];
	for(var i=0;i<toDoList.length;i++) {
		if( i === itemToEdit) {
                    var editedToDoList = prompt(toDoList[i]);
                    newList.push(editedToDoList);
                }else{
                    newList.push(toDoList[i]);
                }

        }
	toDoList = newList;
	changeDisplay();
}

function changeDisplay(){
	var list = document.getElementById("todolist");
	// Only place we actually change the screen
	list.innerHTML = "";
	for(var i=0; i<toDoList.length; i++){
		list.innerHTML += '<li class="list-group-item">' + toDoList[i] +
		'<div class="btn-group-xs pull-right">' +
		'<button class="btn btn-warning delete" onclick="javascript:removeToDo(' + i +')">' +
		'Delete</button>' +
		'<button class="btn btn-warning edit" onclick="javascript:editToDo(' + i +')">' +
                'Edit</button>' +
                '</div>' +
		'</li>';
	}
	localStorage.todolist = JSON.stringify(toDoList);
}

function removeToDo(itemToRemove){
	var newList = [];
	for(var i=0;i<toDoList.length;i++){
		if( i !== itemToRemove) {
			newList.push(toDoList[i]);
		}
	}
	toDoList = newList;
	changeDisplay();
}

function addToDo(){
	var tmpItem;
	var newToDo = document.getElementById("todonew");	
	tmpItem = newToDo.value;
	
	if(tmpItem === ""){
		alert("You didn't put anything in to add");
		return;
	}

	toDoList.push(tmpItem);
	// Call our display function
	changeDisplay();
	
	newToDo.value = "";
	newToDo.select();
} 