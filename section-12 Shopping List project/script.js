var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
// input.value = input.value + " ";
var ul = document.querySelector("ul");
var listElements = document.querySelectorAll("li");
var numElements = listElements.length;
var listDeleteButtons = populateDeleteButtonsArray();



function populateDeleteButtonsArray(){
	var tempArray = [];
	for(var i=0; i <(numElements); i++){
		tempArray[i] = listElements[i].children[0];
	}
	return tempArray;
}

function inputIsDuplicate(){
	var boolFlag = false;
	for(var i=0; i <(numElements); i++){
		// slice off the " X"
		if (input.value == listElements[i].innerText.slice(0,-2)){
			boolFlag = true;
		}
	}
	return boolFlag;
}


function addInputToList(){
	if (inputIsDuplicate() == true){
		alert("Entered item is already on the list!");
	}else{
		var li = document.createElement("li");
		//string addition to provide space between item and button
		li.appendChild(document.createTextNode(input.value + " "));
		ul.appendChild(li);
		

		addEventToItem(li);
		addDeleteButtonToItem(li);
		addEventToDeleteButton(li.children[0]);

		input.value = "";									// reset the input box so the previous entry isn't there
		listElements = document.querySelectorAll("li"); 	// pull the list of "li" again since one has been added
		numElements = listElements.length;					// update numElements 
		listDeleteButtons = populateDeleteButtonsArray(); 	// repopulate the delete button list since one has been added



		// console.log(listDeleteButtons);
		// console.log(listElements);
	}
}

function inputLength(){
	return input.value.length;
}

function addToListAfterClick(){
	if (inputLength() > 0){
		addInputToList();
	}
}

function addToListAfterEnter(event){
	if (inputLength() > 0 && event.keyCode == 13){
		addInputToList();
	}
}


enterButton.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterEnter);



function addEventToItem(item){
	item.addEventListener("click", function() {
		if (item.getAttribute("class") == "done"){
			item.className = "notdone";
		} else{
			item.className = "done";
		}
	});
}

function addDeleteButtonToItem(item){
	var delButton = document.createElement("button");
	delButton.textContent = "X";
	delButton.className = "deleteBTN";
	delButton.parent = item;
	item.appendChild(delButton);
}

function addEventToDeleteButton(item){
	item.addEventListener("click", function() {
		item.parentElement.remove();
		item.remove();
	})
}


listElements.forEach(addEventToItem);
listDeleteButtons.forEach(addEventToDeleteButton);
