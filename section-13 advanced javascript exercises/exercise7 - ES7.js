// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//ANS
dragons.includes("John"); //evalutes to False


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//ANS
function checkForJohn(item){
	console.log(item.includes("John"));
}
dragons.forEach(checkForJohn);
//Better ANS from Solution set
dragons.filter(name => name.includes("John")); //evalutes to [ "Johnathan" ]


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
//ANS
const hundredPower = (x) => x**100


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
//ANS
hundredPower(10000); //evalutes to Infinity
//ANS Pt 2
/* this happens because JS has a maximum numerical value it can represent, ie the representational ceiling of 
	the 64 bit float. Any time a number bigger than this(Number.MAX_VALUE) is attempted, JS converts to Infinity
