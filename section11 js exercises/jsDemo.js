//
//
// ZtM: Web Dev Course, Section 11 extra exercises
// Various minor exercises and demos of Javascript features/quirks, outside of assigned exercises
// Open index.html and view the Dev Tools console to see the results
//
//





//demonstrating simplistic interaction between HTML and JS
//
4 + 3;
if (4+3 === 7) {
	//alert("External JS file executed in HTML!");
	console.log("External JS file printing to the console");
}



//
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



//
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



//
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



//
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



//
// Demonstrating JS Objects
//
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	speak: function(){
		console.log("Hello");
	}
}; 

console.log(user.age);
user.favoriteFood = "Spinach";
console.log(user);
user.shout = function(){console.log("AHHHH!")}; //added a function after object creation
user.speak(); 
user.shout(); //works indentically to pre-set function, speak()

var list = [
	{
		username: "andy",
		password: "secret"
	},
	{
		username: "jess",
		password: "123"
	}
];
console.log(list); //note that its a list of generic Objects
console.log(list[0].password); //access the list index, and then a property of the object there

emptyObj= {}; //creation of an empty Object is valid
console.log(emptyObj); //simply evaluates to Object { }

var list = []; //likewise, creation of an empty Array is valid
console.log(list); // Array []...note that neither empty Obj or Array is Undefined

var nullObj = null; //can use null keyword to indicate nothing, as opposed to empty something
console.log(nullObj);

emptyObj.name = "no longer empty"; //valid assignment of a property to formerly empty Obj

try{
nullObj.name = "can't add something to nothing!"; //invalid, throws TypeError: nullObj is null
} catch (error){
	console.log(error);
}



//
// Demonstrating JS Loops
//
