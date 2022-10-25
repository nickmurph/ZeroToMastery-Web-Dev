// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let exclArray = []; 
array.forEach((user) => {
  let exclUsername = username + "!";
  exclArray.push(exclUsername);
});
//exclArray is ["john!", "becky!", "susy!", "tyson!" ]



//Create an array using map that has all the usernames with a "?"" to each of the usernames
let quesArray = array.map(user => user.username + "?");
//quesArray is [ "john?", "becky?", "susy?", "tyson?" ]



//Filter the array to only include users who are on team: red
let redArray = array.filter(user => user.team == "red");
//redArray contains the whole objects for John and Suzy



//Find out the total score of all users using reduce
let totalScore = array.reduce((accumulator, user) => {
  return accumulator + user.score
}, 0);
//totalScore is 71



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})
//ANS(1): i is the index. Not covered in lecture, but map has an optional parameter for index
//ANS(2): remove the log and alert function calls and the function is pure

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
//ANS:
let newArray = [];

array.forEach(user => {
  let tempUser = user;
  tempUser.items = user.items.map(item => item + "!");
  newArray.push(tempUser);
});