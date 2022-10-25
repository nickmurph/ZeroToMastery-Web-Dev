//map, filter, and reduce demonstrations

const array = [1,2,10,16];

//
//map - applies a function to every element in the array, adds result of each to new array
//
const mapArray = array.map((num) => { 
	return num * 2 
});
//mapArray is [2,4,20,32]


//
//filter - applies a conditional to each element, those that pass added to new array
//
const filterArray = array.filter((num) => {
	return num > 5
});
//note this reduced syntax when only one parameter is needed
const filterArray2 = array.filter(num => num > 5); 
//filterArray is [10,16]
//filterArray2 is also [10,16]


//
//reduce - reduces an array of values down to one value with a reducer function
//
const reduceArray = array.reduce((accumulator,num) => {
	return accumulator + num
}, 0);



