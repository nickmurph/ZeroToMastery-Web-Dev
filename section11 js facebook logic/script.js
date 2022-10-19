// Open the DevTools console to see results

var database = [
	{
		username: "Nick",
		password: "supersecret"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "just climbed Mt Elbert!"
	},
	{
		username: "Sally",
		timeline: "I love javascript!"
	}
];


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Enter your password.");

function signIn(user, pass){
	// if !database.includes(userNamePrompt)
	if (user === database[0].username && pass === database[0].password){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password!")
	}
};

signIn(userNamePrompt, passwordPrompt);