// Question 1: Clean the room function: given an input of[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that
// organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],
// [2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e.
// [1, "2", "3", 2] should return [[1,2],["2", "3"]]


//ANS
function cleanRoom(arr){
	let refArr = arr.sort((a,b) => a - b); // [1,1,1,1,2,2,2,4,5,10,20,20,391,392,591]
	let ansArr = [];
	let depthFlag = false;

	for (let i=0; i < refArr.length; i++){
		let nextNum = refArr[i];

		if (depthFlag == false && nextNum !== refArr[i+1]){
			ansArr.push(nextNum);
		}
		if (depthFlag == true && nextNum !== refArr[i-1]){
			if (nextNum !== refArr[i+1]){
				ansArr.push(nextNum);
			}
			depthFlag = false;
		}
		
		if (depthFlag == false && nextNum == refArr[i+1]){
			depthFlag = true;
			tempArr = [];
			tempArr.push(nextNum);
			ansArr.push(tempArr);
		}

		if (depthFlag == true && nextNum == refArr[i-1]){
			ansIndex = ansArr.length - 1;
			ansArr[ansIndex].push(nextNum);
		}
	}
	return ansArr;
}


// above is definitely a brute force solution (though it is time optimal at O(n)). I'm missing some method or function that should make this 
// much easier and cleaner, if not asymptotically faster. Filter() might be it

//ANS 2
function cleanRoomBetter(arr){
	let refArr = arr.sort((a,b) => a - b); // [1,1,1,1,2,2,2,4,5,10,20,20,391,392,591]
	let ansArr = [];

	for (let i=0; i < refArr.length; i++){
		let curNum = refArr[i];	
		tempArr = refArr.filter(num => num == curNum);
		if (tempArr.length == 1){
			ansArr.push(curNum);
		} else{
			ansArr.push(tempArr);
			refArr = refArr.filter(num => num !== curNum);
			i--; //accounting for the off-by-one in index caused by refArr being filtered down
		}
	}
	return ansArr;
}

//this second solution looks cleaner and uses filter() but is asymptotically slower



// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two
// different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should
// return [1,3]

// ANS
// step through array
// for each index, target num- arr[i]
// store difference in hash map, KV as follows: Key: difference, Value: index
// check if value at each index exists in hash map
// if it does, you have your answer: the value at current index, and the value at the index returned from hash map using current value as a key
function findDiffTarget(arr, targetNum){
	let refDict = {};
	let	ansArr = [];
	for (let i=0; i < arr.length; i++){
		let curNum = arr[i];
		refDict[targetNum-curNum] = i;

		if (refDict[curNum] != undefined){
			ansArr.push(curNum);
			ansArr.push(arr[refDict[curNum]]);
			return ansArr;
		}
	}
	return ansArr;
}





// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you
// enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


//HEX format: RRGGBB, ex: #64C832 is rgb(100,200,50)
//RGB format: rgb(0,255,50)
function flipHexAndRGB(input){
	//determine if input is hex or rgb
	//call relevant helper function from below and return result

}

// RGB to HEX
// .toString(16); applied to a number will turn into into a Hexadecimal string
// eg, let num = 99; num.toString(16) evaluates to 63
function rgbToHex(rgb){
	//slice off first 4 char, next 1-3 char before , are red
	//slice between first , and next , for green
	//slice between second, and ) for blue
	//use .toString(16) on red, green, and blue
	//concatenate the results and return it as as string
}


// HEX to RGB
// splice the six char HEX into 3 pairs of 2 chars: RR, GG, BB
// convert each pair from hex to base 10 num with below dict
// eg, RR of 4f = 4 x 16 + f => 4 x 16 + 15 => 79
function hexToRGB(hex){
	hex = hex.toUpperCase(); //hexDict expects the a-f letters to be uppercase
	let red = hex.slice(0,2);
	let green = hex.slice(2,4);
	let blue = hex.slice(4,6);

	red = (hexDict[red[0]] * 16) + hexDict[red[1]];
	green = (hexDict[green[0]] * 16) + hexDict[green[1]];
	blue = (hexDict[blue[0]] * 16) + hexDict[blue[1]]; 
	return `rgb(${red},${green},${blue})`;
};

let validHexChars = "123456789abcdef";

let hexDict = {
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	A: 10,
	B: 11,
	C: 12,
	D: 13,
	E: 14,
	F: 15,
	0: 0,
}

