//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

// #1 ANSWER:
var answer = winBattle() ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//ANS: nothing, break before the variable assignment

//#3 return value when moveCommand("back");
//ANS: you arrived home

//#4 return value when moveCommand("right");
//ANS: you found a river

//#5 return value when moveCommand("left");
//ANS: nothing, break before the variable assignment

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
//ANS:
function pickABook(genre){
    switch(genre){
    case "History":
        return "Empires of the Sea, by Roger Crowley";
        break;
    case "Essays":
        return "Arguably, by Christopher Hitchens";
        break;
    case "Outdoors":
        return "Eiger Dreams, by Jon Krakauer";
        break;
    default:
        return "A Supposedly Fun Thing..., by David Foster Wallace";
        break;
    }
}


// or, outside of a function:
var genre = ""; //change this var to get different answers
var book = "";
switch(genre){
    case "History":
        book = "Empires of the Sea, by Roger Crowley";
        break;
    case "Essays":
        book = "Arguably, by Christopher Hitchens";
        break;
    case "Outdoors":
        book = "Eiger Dreams, by Jon Krakauer";
        break;
    default:
        book = "A Supposedly Fun Thing..., by David Foster Wallace";
        break;
    }
