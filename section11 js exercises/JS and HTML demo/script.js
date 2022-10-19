
//demonstrating simplistic interaction between HTML and JS
//
4 + 3;
if (4+3 === 7) {
	//alert("External JS file executed in HTML!");
	console.log("External JS file printing to the console");
}


//demonstrating function declaration and function expression
//
function sayHello(){
	console.log("Hello");
}
sayHello();

var sayBye = function () {
	console.log("Bye");
}
sayBye();


//Demonstrating parameterized functions
//
function sing(songLine){
	console.log(songLine);
}
//sing("EEEEHHH");
//sing("LA DI DA");
sing("I'm a Dweller on the Threshold");

function multiply (a,b){
	return a*b;
}
console.log(multiply(2,3));


// Demonstrating array declarations and variations
//
var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);
console.log(list[3]);

var nums = [1,2,3,4];
var bools = [true, false, true];
var funcList = [function apple(){console.log("apple")}, function pear(){console.log("pear")}];

// mixed arrays not advised for performance reasons, but are valid
var mixedlist = ["apples", 3, undefined, true, function apple(){console.log("apple")}];

var nestedArray = [[1,2,3,4],5];
console.log(nestedArray[0]);
console.log(nestedArray[1]);
console.log(nestedArray[0][0]);
console.log(nestedArray[0][3]);


// Demonstrating array methods
//
console.log(nums);
nums.shift();
console.log(nums);
nums.pop();
console.log(nums);
nums = [1,2,3,4];
console.log(nums);
nums.push(5);
console.log(nums);
nums = nums.concat([8,6,7]);
console.log(nums);
nums.sort();
console.log(nums);
