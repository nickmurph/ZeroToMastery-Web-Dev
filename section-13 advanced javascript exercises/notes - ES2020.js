// ES2020



//
// BigInt, new Type
//
typeof(5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555) //evaluates to number
typeof(1n) 
//evalutes to bigint; must use the n after an integer to make it a bigint

// js has a constant, Number.MAX_SAFE_INTEGER equal to 2^53 - 1, roughly 9 quadrillion
// exceeding the value of MAX_SAFE_INTEGER results in wonky behavior
// JS uses double precision floating point format numbers, as specifiec in IEEE 754
// so, a number can only be safely represented in the range of -(2^53 - 1) to (2^53 -1)
Number.MAX_SAFE_INTEGER // 9007199254740991 
Number.MAX_SAFE_INTEGER + 1 // 9007199254740992, correct
Number.MAX_SAFE_INTEGER + 10 // 9007199254741000, incorrect
9007199254741000 -1 // 9007199254741000, no change, obviously incorrect
9007199254741000n - 1n // 9007199254740999n, works when both are used as bigints






//
//Optional Chaining Operator - ?.
//
let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6,
	}
}
let andrei_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
	}
}

let pikachu_weight = will_pokemon.pikachu.weight;
console.log('weight is', pikachu_weight)

//let raichu_weight = andrei_pokemon.pikachu.weight;
//console.log('weight is', raichu_weight)
// we get an error, of course, because andrei_pokemon doesnt have a pikachu object

// we would normally have to do an if statement to see if the object and property we're looking for exist without triggering an error
if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
	let raichu_weight = andrei_pokemon.pikachu.weight
} else {
	raichu_weight = undefined
}

// Optional Chaining avoids this need to do messy ... and ... and ... checks to ensure objects and properties exist
let raichu_weight2 = andrei_pokemon?.pikachu?.weight //this assigns undefined without throwing any errors
raichu_weight2 = andrei_pokemon?.raichu?.weight //this assigns 30, since raichu subobject and weight property both exist






//
//Nullish Coalescing Operator - ??, like the previous operator but for OR statements instead of AND
//

andrei_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
		power: 0,
	}
}


let power = andrei_pokemon?.raichu?.power || 'no power' //stores 'no power' in power
power = andrei_pokemon?.raichu?.power ?? 'no power' //stores 0 in power



//Promise.allSettled
//globalThis