/* simple demonstration of javascript events on a DOM selection cached within a variable */

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	console.log("CLICK!!!");
})


button.addEventListener("mouseenter", function(){
	console.log("mouse on button");
})


button.addEventListener("mouseleave", function(){
	console.log("mouse left button");
})