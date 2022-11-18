//
//	String Padding
//
'Turtle'.padStart(10); //evaluates to "    Turtle"
'Turtle'.padEnd(10); //evaluates to "Turtle    "
'Turtle'.padStart(7, '_'); //evaluates to "_Turtle"
//Note that the number given as a padding argument includes the length of the string being padded
'Turtle'.padStart(6, '_'); //evaluates to "Turtle" because Turtle is len 6
//Thus, any padding argument of equal or less length to the string will have no effect
//This is useful for aligning multiple strings
console.log("Turtle".padStart(10))
console.log("Burt".padStart(10))
console.log("Athenaeum".padStart(10))
//this prints the three strings all neatly aligned to the right, with varying amount of left padding to ensure they line up
//    Turtle
//      Burt
// Athenaeum





//
//	Trailing Commas in Function Parameter Lists
//


// note the comma after the fourth parameter, d
const fun = (a,b,c,d,) => {
	console.log(a);
}
// note the comma after the fourth argument, 4
fun(1,2,3,4,)

//But why? Well, when parameter lists get large, developers will often display the code as follows:
const fun2 = (
				a,
				b,
				c,
				d,
				) => {
	console.log(a);
}
fun2(1,2,3,4,)

// synctactically, its easier to read and also makes the github diff by lines easier to read.
// specifically, having the trailing comma after your last parameter means that adding future parameters
// 		in future git commits will only generate a diff on the new line (rather that changing d to d, and adding e, diff'ing two lines)
// trailing commas can also be used in arrays and for object properties, in addition to function parameters and function arguments






//
//	Object.values, Object.keys, and Object.entries
//


let testObj = {
	username0: "Santa",
	username1: 'Rudolph',
	username2: 'Grinch',
}

//return an array of the keys in testObj
Object.keys(testObj) //evaluates to Array(3) [ "username0", "username1", "username2" ]

// old way to get both the keys and values in testObj
Object.keys(testObj).forEach((key, index) => {
	console.log(key, obj[key]);
})
//prints the following:
// username0 Santa
// username1 Rudolph
// username2 Grinch

// return an array of the values in testObj
Object.values(testObj) // evaluates to Array(3) [ "Santa", "Rudolph", "Grinch" ]

// print each of the values in the array
Object.values(testObj).forEach(value => {
	console.log(value)
})

// Can access individual elements, because it's an array
Object.entries(testObj)[0] // evaluates to Array [ "username0", "Santa" ]

//return a list of arrays, one for each key,value pair in testObj
Object.entries(testObj).forEach(entry => {
	console.log(entry)
})
//evaluates to the following:
// Array [ "username0", "Santa" ]
// Array [ "username1", "Rudolph" ]
// Array [ "username2", "Grinch" ]

// this is a cleaner and more programmatic way of accessing K,V pairs than getting the keys and using them as references 
//		for the values (as seen on line 71)


// What does this look like in practice?

//get the K,V and change the naming schema from usernameX: '<name>' to '<name>X'
Object.entries(testObj).map(value =>{
	return value[1] + value[0].replace('username', '');
})

