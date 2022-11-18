//
// flat() method
//

const array = [1,2,3,4,5]
array.flat() //does nothing

const array2 = [1,[2,3],[4,5]]
array2.flat() //flattens the array into [1,2,3,4,5]

const array3 = [1,2,[3,4,[5]]]
array3.flat() //flattens first dimension of arrays, but not the deepest level: [1,2,3,4,[5]]
array3.flat(2) //flattens down to second dimension, returning [1,2,3,4,5]

const jurassicPark = [['🦋', '🦟'], '🦠', '🐢', ['🐍', '🦎'], [[[['🦖']]], '🦕'], ['🐙', '🦑']] 
jurassicPark.flat(50) //a number chosen for it's obvious excess over the actual number of array dimensions. Inefficient but effective?

const entries = ['bob','sally',,,,,'cindy']
entries.flat() // cleans up the data by removing empty entries, returning Array(3) [ "bob", "sally", "cindy" ]




//
// flatMap() method
//

// use the map function and flatten the result
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + '🦖')




//
// trimStart() and trimEnd() methods
//

userEmail1 = '        useremail@gmail.com'
userEmail2 = 'anotheruser@gmail.com   '
userEmail1.trimStart()
userEmail2.trimEnd()



//
// fromEntries
//

userProfiles = [['commanderTom', 23], ['derekZoolander', 38], ['hansel', 27]]
Object.fromEntries(userProfiles) //returns an Object with K,V pairs of name, age

// Object.entries() return an array of K,V arrays, effectively the opposite of Object.fromEntries()
userProfiles = Object.fromEntries(userProfiles) // stores the above into userProfiles
userProfiles = Object.entries(userProfiles)  // reverts userProfiles to the original format of an array of K,V arrays



//
// try catch simplification 
//

try{
	true + "hi"
} catch {
	console.log("there was an error")
} // because of type coercion, this will evaluate to "truehi" and no error occurs


try{
	bob + "hi"
} catch {
	console.log("there was an error")
} // because bob isnt a variable, this is an error and the catch block executes
// it simply prints "there was an error"


try{
	bob + "hi"
} catch (error){
	console.log("there was an error: " + error)
} // prior to ES10, you needed to provide an error argument. Now you can do a plain try catch as above
// using an error argument can be useful for logging, as this now prints - there was an error: ReferenceError: bob is not defined