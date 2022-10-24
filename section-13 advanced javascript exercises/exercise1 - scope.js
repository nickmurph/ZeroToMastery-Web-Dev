
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// #1 ANS: 3



//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// #2 ANS: 0 (or 5 if you run functionq2 first, but instructions say only run funcs with alert calls, implying thats a decoy function that never executes)



//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// #3 ANS: 0 (or hello if you ran functionq3 first, but instructions say only run func with alert calls, implying thats a decoy function that never executes)



//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// #4 ANS:  test



//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// #5 ANS: 5, and then 5 again on a new line

