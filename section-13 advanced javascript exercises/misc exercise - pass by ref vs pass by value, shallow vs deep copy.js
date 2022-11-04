//pass by value with primitives
var a = 5;
var b = 10;
b++;
console.log(a);
console.log(b);


//pass by reference with objects
let obj1 = {name: 'Yao', password: '123'}
let obj2 = obj1
obj2.password = "easypeasy"
console.log(obj1)
console.log(obj2) // both have the pw changed


//pass by reference with an array (remember, arrays are objects)
var c = [1,2,3,4,5];
var d = c;
d.push(1347731)
console.log(d)
console.log(c) // both have the new num


//cloning an array with [].concat(arrayToBeCloned)
var e = [1,2,3,4,5];
var f = [].concat(e)
f.push(14814)
console.log(e)
console.log(f) // now only f has the extra number


//cloning an array with Object.assign(objType, objToClone)
let g = Object.assign([], e); //can use the Object.assign method with arrays instead of concat on empty, but its functionally the same
console.log(g); // g is a clone of e


//cloning an object with Object.assign(objType, objToClone)
let obj3 = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj3) // clones obj3 into empty object and stores in clone
obj3.c = 5;
console.log(obj3);
console.log(clone); // obj3 c is changed to 5, but clone is the original 'c'


//cloning an object with the {...ObjToClone} snytax sugar
let clone2 = {...obj3} //syntactic sugar for object.assign
console.log(clone2) //clone2 is a clone of obj3, with c: 5 bc obj3 was modified


// what about cloning nested objects?
let obj4 = {a: 'a', b: 'b', c: {d: "try to copy me"}};
let clone3 = Object.assign({},obj4);
let clone4 = {...obj4};
console.log(clone3); 
console.log(clone4); //both work, nested object structure maintained, but...

obj4.c.d = "change it up";
console.log(obj4);
console.log(clone3);
console.log(clone4); // in both cases, changing the original nested object is reflected in our clones
// we cloned the first level of obj4, but within that was a reference to the d object within c
// so, we cloned it as a Shallow Clone


// Deep Cloning with JSON 
let deepClone = JSON.parse(JSON.stringify(obj4));
console.log(deepClone); // clone of obj4, with the updated "change it up"
obj4.c.d = "try to copy me"; //resetting original object to "try to copy me"
console.log(obj4);
console.log(clone3);
console.log(clone4); //now obj4 and the first two shallow clones are back to "try to copy me"
console.log(deepClone); //but our deepClone is "change it up", reflecting a nested deep copy of 
						//the state of obj4 at the time we deep cloned it




