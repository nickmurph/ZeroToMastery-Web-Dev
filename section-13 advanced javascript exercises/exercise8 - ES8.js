// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);



//ANS
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);
console.log(startLine);
console.log(turtle);
console.log(rabbit);



// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

//ANS
// Trim method removes any whitespace from either end of the string and returns it as a new string
// Trim followed by Pad will trim the whitespace and then pad the string as directed
// Padding with a second argument will use the string from that argument instead of whitespace to pad
// Note: trimStart and trimEnd methods exist to trim whitespace from either side



// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// to this:
'my name is Rudolf the reindeer'


//ANS
ansString = ""

Object.entries(obj).forEach( ([key,value]) => {
  ansString = ansString + key + ' '
  ansString = ansString + value + ' '
})
ansString = ansString.trimEnd()
console.log(ansString)