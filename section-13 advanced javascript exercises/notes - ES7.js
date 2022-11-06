//new features introduced by ES7


//.includes() method, eg Array.includes(value)

let nums = [3,7,9,42];
console.log(nums.includes(7)); // True
console.log(nums.includes(5)); // False

let students = ["Steve", "Mary", "Rupert"];
console.log(students.includes("Steve")); // True

if (!students.includes("Nick")){
	console.log("Nick is not in the class") //prints this message bc students.includes("Nick") returns False
}


// Exponentiation Operator
const square = (x) => x**2
const cube = (y) => y**3

square(5); //evaluates to 25
cube(3); //evaluates to 27