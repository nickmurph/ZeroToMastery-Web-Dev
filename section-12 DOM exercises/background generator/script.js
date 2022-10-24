var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("randBTN");


color1.value = "#ff4d00";
color2.value = "#492cd3";
setGradient();

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}


function randButtonClicked(){
	color1.value = getRandHex();
	color2.value = getRandHex();
	setGradient();
	// console.log(color1.value,color2.value);
}

function getRandHex(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// useless because the HTML Color Input type will only set values via Hex
// using getRandHex() instead
function getRandRGB(){
	num1 = getRandIntRange(0,256);
	num2 = getRandIntRange(0,256);
	num3 = getRandIntRange(0,256);
	ans = [num1,num2,num3]
	return ans;
}

// useless because the HTML Color Input type will only set values via Hex
// using getRandHex() instead
function getRandIntRange(min,max){
	return Math.floor(Math.random() * (Math.floor(max)-Math.ceil(min)) + Math.ceil(min));
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randButton.addEventListener("click", randButtonClicked);


