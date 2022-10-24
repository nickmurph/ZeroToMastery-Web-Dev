var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


button.addEventListener("click", function(){
	var newItem = input.value;
	if (newItem.length > 0){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(newItem));
		ul.appendChild(li);
		input.value = "";
	}
})





/* simple demonstration of javascript events on a DOM selection cached within a variable */

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("CLICK!!!");
// })


// button.addEventListener("mouseenter", function(){
// 	console.log("mouse on button");
// })


// button.addEventListener("mouseleave", function(){
// 	console.log("mouse left button");
// })


