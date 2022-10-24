var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listElements = document.querySelectorAll("li");
// console.log(listElements[1].textContent);



function inputIsDuplicate(){
	var boolFlag = false;
	for(var i=0; i <(listElements.length); i++){
		if (input.value == listElements[i].textContent){
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
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
		listElements = document.querySelectorAll("li"); //pull the list of "li" again since one has been added
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


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterEnter);



function checkListDuplicate(){

}

