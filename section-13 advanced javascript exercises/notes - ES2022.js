//ES2022


//
// .at() method
//

const arr = [100,200,400,50000,10];
//get second last item
//in past
let secondToLastItem = arr[arr.length-2];

//with ES2022, we can do the following:
secondToLastItem = arr.at(-2);

firstItem = arr.at(0);
lastItem = arr.at(-1);