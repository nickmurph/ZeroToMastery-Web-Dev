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


// Far more elegant solution in the provided answers
Object.entries(obj).map(value => value.join(" ")).join(' ')

// So, we're getting the array of entries with Object.entries(obj), each item in this array being itself an array containing K,V
// then we use map, or applying a function to each item in an array
// we identify each of the K,V arrays in the entries array as "value"
// and then we call a join on each of the value/K,V arrays with a " " space argument so its "my name", not "my,name"
// finally, we call another join(" ") on the entries array, which adds each of the joined K,V pairs together in order
// previously unaware of the join method for arrays, which obviously makes this 10x easier. Make a note to remember it/use it