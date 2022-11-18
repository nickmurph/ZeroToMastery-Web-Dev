//
// Previously Seen Loops
//
const basket = ['apples','oranges','grapes'];

for (let i=0; i < basket.length; i++){
	console.log(basket[i]);
}


basket.forEach(item => {
	console.log(item);
})

// NOTE: also saw while and do while loops previously, but not necessary to exhaustively demonstrate again



//
// New Loop Types
//


//
// For Of loop (ES6)
// for iterating - arrays, strings (iterables)
for(item of basket){
	console.log(item)
}

for (char of "example"){
	console.log(char)
}
// You cannot use the For Of loop on enumerables, only iterables



//
// For In loop
// for enumerating properties of objects (enumerables)
// For In loop can be used on iterables, but the behavior is different. See next example

//when called on an iterable, the ___ in ___ is the index
for (index in basket){
	console.log(index);
	console.log(basket[index]);
}

exString = "example";
for (index in exString){
	console.log(index, exString[index]);
}

// Note: this is because iterables (arrays and strings) are Objects at heart
// an array is really an object like array = {0: item0, 1: item1, 2: item2...}

// For In when called on an enumerable
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}
for (item in detailedBasket){
    console.log(item)
} // prints each of the keys

// now trying iterating over detailedBasket with a For Of loop
for (item of detailedBasket){
	console.log(item)
}// throws a TypeError, because detailedBasket object is not iterable - only arrays and strings are


