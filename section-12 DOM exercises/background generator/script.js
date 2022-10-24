var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


color1.value = "#ff4d00";
color2.value = "#492cd3";
setGradient();
// body.style.background = "linear-gradient(to right, #ff4d00 , #492cd3)";

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



