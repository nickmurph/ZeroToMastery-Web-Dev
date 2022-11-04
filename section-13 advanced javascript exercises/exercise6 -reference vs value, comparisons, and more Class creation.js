//Evaluate these:
//#1
[2] === [2] 
{} === {} 
//ANS
//false for both, Objects are not equal unless they point to the same place in memory (and arrays are objects)


//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

//object 1,2,3 all have a=4 bc 3 points to 2 points to 1, no cloning occured
//object 4 has a=5 as declared and unchanged

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


class Animal {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
}

class Mammal extends Animal {
	constructor (name, type, color){
		super(name,type);
		this.color = color;
	}
	sound(){
		console.log(`How now ${this.color} ${this.type}! ${this.name} is a pretty name!`)
	}
}

let cow = new Mammal("MooMoo the Cow", "Cow", "Brown");