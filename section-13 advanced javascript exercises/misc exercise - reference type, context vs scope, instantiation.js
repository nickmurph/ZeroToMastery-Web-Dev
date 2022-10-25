//reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 == object2; //true
object2 == object3; //false
object1 == object3; //false

// object 2 references object 1 like a pointer, so they each refer to the same object. Thus, ==
// object 3 is a new object that happens to have the same value. It's a different obj occupying a
// 	different spot in memory, so its not == to either object 1 or 2




//
//context vs scope
//
function a(){
	let b = 4;
	//console.log(b); //will work here because b is within scope and defined
}
//console.log(b); //will throw error bc b is not at root scope, its undefined outside the a function

//this keyword refers to whichever object the call is made in
console.log(this); //prints Window{...} because we called it at the root/window level

function a(){
	console.log(this); 
}
a(); //still Window, because we havent entered another Object's context, so our context is root

const object4 = {
	a: function(){
		console.log(this);
	}
};
object4.a(); //now this keyword refers to object4, whose context we called this in




//
//instantiation
//
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }
}


class Wizard extends Player {
    constructor(name,type,spell){
        super(name,type);
        this.spell = spell;
    }

    play(){
        console.log(`Weeee, I'm a ${this.type} who can use the ${this.spell} spell!`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer', 'Healing Bubble');
const wizard2 = new Wizard('Steve', 'Dark Magician', 'Lightning Strike');
