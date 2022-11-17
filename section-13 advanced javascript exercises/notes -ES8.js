//String Padding
'Turtle'.padStart(10); //evaluates to "    Turtle"
'Turtle'.padEnd(10); //evaluates to "Turtle    "
'Turtle'.padStart(7, '_'); //evaluates to "_Turtle"
//Note that the number given as a padding parameter includes the length of the string being padded
'Turtle'.padStart(6, '_'); //evaluates to "Turtle" because Turtle is len 6
//Thus, any padding parameter of equal or less length to the string will have no effect
//This is useful for aligning multiple strings
console.log("Turtle".padStart(10))
console.log("Burt".padStart(10))
console.log("Athenaeum".padStart(10))
//this prints the three strings all neatly aligned to the right, with varying amount of left padding to ensure they line up
//    Turtle
//      Burt
// Athenaeum



//