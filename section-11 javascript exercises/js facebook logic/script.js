// Open the DevTools console to see results

var database = [
	{
		username: "Nick",
		password: "supersecret"
	},
	{
		username: "Sally",
		password: "123"
	},
	{
		username: "Bobby",
		password: "321"
	},
		{
		username: "Van Morrison",
		password: "intothemystic"
	},
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


function isUserValid(user, pass){
	for (var i=0; i < database.length; i++){
		if (database[i].username === user && database[i].password === pass){
			return true;
		}
	}
	return false;	
}

function signIn(user, pass){
	if (isUserValid(user,pass)){
		console.log(newsFeed);
	}else {
		alert("Sorry, wrong username or password!")
	}
};


signIn(userNamePrompt, passwordPrompt);