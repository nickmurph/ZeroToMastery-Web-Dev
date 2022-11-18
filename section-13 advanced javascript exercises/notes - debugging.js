// Debugging

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(a, b) => accumulator.concat(b), [])


// can help understand it by renaming variables, using expanded function notation, and adding print statements
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		console.log('array', array);
		console.log('accumulator', accumulator);
		return accumulator.concat(array)
	}, []);


// but instead of using just print statements, we can try the debugger
