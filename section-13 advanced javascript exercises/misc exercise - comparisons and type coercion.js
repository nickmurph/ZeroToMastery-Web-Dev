// == is loose equality
// === is strict equality
// https://dorey.github.io/JavaScript-Equality-Table/ see this table for == vs ===



1 == '1'; //js does coercion and treats this as 1 == 1, True
1 === '1' //with 3 equal signs, you compare without coercion
			// == may have some implications in trick code, but better to just always use ===

//1 and 0 as booleans
if (1) {
	console.log(5)
} // prints 5, because js treats 1 as True

if (0) {
	console.log(5)
} //doesnt print, because js treats 0 as False 
// True as 1 and False as 0 can be useful in certain situations


// -0 and +0
-0 === +0; // evaluates to True, but they are technically different in JS
Object.is(-0,+0) //evaluates to False


//Object.is returns True if two objects have the same value
let str1 = "1234";
let str2 = "1234";
Object.is(str1,str2); //True. Strings are primitive, so it compares the sequence of characters

let num1 = 347;
let num2 = 347;
Object.is(num1,num2); //True. ints are primitive, so it compares the numerical values

let obj1 = {a:'a', b:'b'};
let obj2 = {a:'a', b:'b'};
Object.is(obj1,obj2); //False. separate objects that point to different places in memory 


//Object.is is not the same as either == or ===
//Object.is doesnt use type coercion like ==
//but it also doesnt treat signed zeros equal like === (and ==) do
Object.is(-0,+0); //as we saw before
//also, Object.is doesnt treat NaN as equal to NaN, which === does
Object.is(NaN, NaN); //true
NaN == NaN; //false
NaN === NaN; //false