//
//String Padding
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
// Trailing Commas in Function Parameter Lists
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

// synctactically, its easier to read and also makes the github diff by lines easier to read
// specifically, having the trailing comma after your last parameter means that adding future parameters
// in future git commits will only generate a diff on the new line (rather that changing d to d, and adding e, diff'ing two lines)


//
//
//